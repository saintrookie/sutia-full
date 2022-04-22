import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { products } from '../data'
import Product from './Product'

const Container = styled.div`
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid gainsboro;
`
const Products = ({cat, filters, sort}) => {
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
     const getProducts = async () => {
        try{
            const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
            setProducts(res.data);
            console.log(res);
        }catch (err){
            
        }
     }
     getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  return (
    <Container>
        {filteredProducts.map((item) => (
            <Product item={item} key={item._id} />
        ))}
    </Container>
  )
}

export default Products
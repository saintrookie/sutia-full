import React from 'react'
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
const Products = () => {
  return (
    <Container>
        {products.map((item) => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products
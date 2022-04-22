import styled from '@emotion/styled'
import React, { useState } from 'react'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';


const Container = styled.div`
    
`


const Title = styled.h1`
    font-size: 48px;
    text-align: center;
    margin: 1.5em 0;
    ${mobile({ margin: '.5em 0' })}

`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ display: 'block', padding: '20px' })}
    
`

const Filter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;

    ${mobile({ justifyContent: 'flex-start' })}

`
const FilterText = styled.div`
   font-weight: bold;
   margin-right: 10px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 15px;
`

const Option = styled.option`

`

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('newest');

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Products</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select id="colors" name="colors" onChange={handleFilters}>
                        <Option disabled>Select Colors</Option>
                        <Option value="white" title="white">white</Option>
                        <Option value="black" title="black">black</Option>
                        <Option value="red" title="red">red</Option>
                        <Option value="blue" title="blue">blue</Option>
                        <Option value="yellow" title="yellow">yellow</Option>
                        <Option value="green" title="green">green</Option>
                    </Select>
                    <Select id="size" name="size" onChange={handleFilters}>
                        <Option disabled>Select Size</Option>
                        <Option value="xs" title="xs">XS</Option>
                        <Option value="s" title="s">S</Option>
                        <Option value="m" title="m">M</Option>
                        <Option value="l" title="l">L</Option>
                        <Option value="xl" title="xl">XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select id="sort" onChange={(e) => setSort(e.target.value)}>
                        <Option value='newest'>Newest</Option>
                        <Option value='asc'>Price (Low to High)</Option>
                        <Option value='desc'>Price (High to Low)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Footer />
        </Container>
    )
}

export default ProductList
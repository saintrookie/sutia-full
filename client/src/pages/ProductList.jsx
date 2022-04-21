import styled from '@emotion/styled'
import React from 'react'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { mobile } from '../responsive';


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
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Products</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select id="colors">
                    <Option disabled selected>Select Colors</Option>
                    <Option value="white" title="white">White</Option>
                    <Option value="black" title="black">Black</Option>
                    <Option value="red" title="red">Red</Option>
                    <Option value="blue" title="blue">Blue</Option>
                    <Option value="yellow" title="yellow">Yellow</Option>
                    <Option value="green" title="green">Green</Option>
                </Select>
                <Select id="size">
                    <Option disabled selected>Select Size</Option>
                    <Option value="xs" title="xs">XS</Option>
                    <Option value="s" title="s">S</Option>
                    <Option value="m" title="m">M</Option>
                    <Option value="l" title="l">L</Option>
                    <Option value="xl" title="xl">XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select id="sort">
                    <Option selected>Newest</Option>
                    <Option>Price (Low to High)</Option>
                    <Option>Price (High to Low)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Footer />
    </Container>
  )
}

export default ProductList
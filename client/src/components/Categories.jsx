import React from 'react'
import { categories } from '../data'
import { CategoryItem } from './CategoryItem'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    border-bottom: 1px solid gainsboro;

    ${mobile({ padding:'0px' ,flexDirection: "column"})}

`

export const Categories = () => {
  return (
    <Container>
        {categories.map(item => (
            <CategoryItem key={item.id} item={item} />
        ))}
    </Container>
  )
}

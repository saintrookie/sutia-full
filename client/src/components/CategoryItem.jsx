import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    flex: 1;
    margin: 0.3em;
    height: 70vh;
    position: relative;
    border: 1px solid gainsboro;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh", objectPosition: 'center'})}

`
const Title = styled.h1`
    color: white;
    margin-bottom: 1em;
`
const Info = styled.div`
    position: absolute;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.3);
`

const Button = styled.button`
    padding: 15px 18px;
    background-color: pink;
    border: 0;
    border-radius: none;
    cursor: pointer;
    
`


export const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
            <Image src={item.img} />
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Button>Shop Now</Button>
            </Info>
        </Link>
    </Container>
  )
}

import React from 'react'
import { HiHeart, HiSearch } from 'react-icons/hi'
import { MdCardTravel } from 'react-icons/md'
import styled from 'styled-components'
import { Image } from 'theme-ui'

const InfoBox = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.45);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition all 0.3s ease-in-out;
    cursor: pointer;
`

const Container = styled.div`
    position: relative;
    flex: 1;
    margin: 0.3em;
    padding: 1em;
    min-width: 280px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    border: 1px solid gainsboro;

    &:hover ${InfoBox}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    z-index: -1;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`
const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={`http://localhost:5000/` + item.image} />
        <InfoBox>
            <Icon>
                <MdCardTravel/>
            </Icon>
            <Icon>
                <HiSearch />
            </Icon>
            <Icon>
                <HiHeart />
            </Icon>
        </InfoBox>
    </Container>
  )
}

export default Product

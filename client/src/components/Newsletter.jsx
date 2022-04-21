import React from 'react'
import styled from '@emotion/styled'
import { Button } from 'theme-ui'
import { RiSendPlaneFill } from "react-icons/ri";
import { mobile } from '../responsive';


const Container = styled.div`
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1em;
`

const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    margin-bottom: 1em;
`

const Description = styled.div`
    margin-bottom: 0.8em;
    ${mobile({ textAlign: "center"})}


`
const InputContainer = styled.div`
    width: 45%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;

    ${mobile({ width: "85%"})}

`

const Input = styled.input`
    position: relative;
    border: 1px solid gainsboro;
    width: 100%;
    padding: 0 8px;


`


const Newsletter = () => {
  return (
    <Container>
        <Title>NEWSLETTER</Title>
        <Description>Get discount & New information products from us</Description>
        <InputContainer>
            <Input placeholder='Your E-Mail Here' autoComplete="given-name" autofillBackgroundColor="highlight" />
            <Button variant='primary' sx={{ alignItems: 'center', height: '40px', borderRadius: '0', cursor: 'pointer' }}><RiSendPlaneFill /></Button>
        </InputContainer>

    </Container>
  )
}

export default Newsletter
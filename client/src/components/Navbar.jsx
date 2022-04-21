import React from 'react';
import styled from 'styled-components';
import { MdOutlineSearch, MdShoppingCart } from "react-icons/md";
import { mobile } from '../responsive';
import { Input } from 'theme-ui';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: auto;
    border-bottom: 1px solid lightgray;
    background-color: #eae2b7;

    ${mobile({})}
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    height: auto;
    ${mobile({flexDirection: 'column', justifyContent: "center"})}

`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;

    ${mobile({ justifyContent: "center"})}

`   

const Language  = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ height: "auto", justifyContent: 'center', display: 'none' })}
`
const SearchContainer = styled.div`
    width: 280px;
    height: 25px;
    background: white;
    border: 0.5px solid gainsboro;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ display: 'none' })}

`

const SearchContainerMobile = styled.div`
    display: none;
    opacity: 0;
    ${mobile({ opacity: '1', display: 'block', display: 'flex', justifyContent: 'center', padding: '1em 0', })}

`

const InputX = styled.input`
    border: none;
    width: 280px;
    height: 25px;
    
`
const Logo =  styled.h1`
    font-family: 'Bungee Inline', cursive !important;
    font-size: 56px;
    color: #d62828;
`

const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
             <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <InputX />
                    <MdOutlineSearch style={{color: 'gray', fontSize: '16px'}}/>
                </SearchContainer>
             </Left>
             <Center>
                <Logo>SUTIA</Logo>
             </Center>
             <Right>
                <MenuItem>
                    <Link to="/register">REGISTER</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/login">SIGN IN</Link>
                </MenuItem>
                <MenuItem>
                    <MdShoppingCart />
                </MenuItem>
             </Right>
             <SearchContainerMobile>
                <Input sx={{ height: '40px', backgroundColor: 'white', border: '1px solid gainsboro' }} autoComplete="given-name" autofillBackgroundColor="highlight" placeholder='Search Here' />
             </SearchContainerMobile>
        </Wrapper>
    </Container>
  )
}

export default Navbar
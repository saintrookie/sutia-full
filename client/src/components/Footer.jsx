import styled from '@emotion/styled'
import React from 'react'
import { SiFacebook, SiInstagram, SiTwitter, SiPaypal, SiVisa, SiMastercard } from "react-icons/si";
import { RiHome3Fill, RiPhoneFill, RiMailFill } from "react-icons/ri";
import { mobile } from '../responsive';

const Container = styled.div`
    height: auto;
    display: flex;
    padding: 20px;
    background-color: #eae2b7;
    ${mobile({display: 'block', overflow: 'hidden', padding: '20px'})}

`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: transparent;

    ${mobile({ padding: '20px 0', justifyContent: "center" })}

`
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
` 
const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    ${mobile({padding: '20px 0', justifyContent: "center"})}

`

const Logo =  styled.h1`
    font-family: 'Bungee Inline', cursive !important;
    font-size: 36px;
    color: #d62828;
`
const Desc = styled.p`
    text-align: left;
`
const SocialContainer = styled.div`
    display: flex;
    color: white;
`

const SocialIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-right: 0.85em; 
    border-radius: 50%;
    background-color: #${props=>props.color}
`

const Title = styled.h3`
    color: black;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    ${mobile({padding: '20px 0', justifyContent: "center"})}

`

const ListItem = styled.li`
    width: 50%;
    margin: 3.5px 0;
    cursor: pointer;
`
const ContactItem = styled.div`
    margin: 0.4em 0;
    display: flex;
`
const Payment = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListPayment = styled.li`
    padding: 0.3em 1em;
    margin: 1em 0;
    font-size: 28px;
    float: left;
    margin: 3.5px 0;
    cursor: pointer;
    color: white;
    background-color: #${props=>props.color};
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SUTIA.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. kalalalele uncum ewewe</Desc>
            <SocialContainer>
                <SocialIcon color='E4405F'>
                    <SiInstagram />
                </SocialIcon>
                <SocialIcon color='1877F2'>
                    <SiFacebook  />
                </SocialIcon>
                <SocialIcon color='1DA1F2'>
                    <SiTwitter />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
                <ListItem>Home</ListItem>
                <ListItem>Products</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms & Faq</ListItem>
                <ListItem>About Us</ListItem>
          </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><RiHome3Fill />&nbsp;2839 Ella Street, Oakland - California 94612</ContactItem>
            <ContactItem><RiPhoneFill />&nbsp;650-220-3176</ContactItem>
            <ContactItem><RiMailFill />&nbsp;customer@sutia.co</ContactItem>
            <Payment>
                <ListPayment color='00457C'><SiPaypal />&nbsp;</ListPayment>
                <ListPayment color='1A1F71'><SiVisa />&nbsp;</ListPayment>
                <ListPayment color='EB001B'><SiMastercard />&nbsp;</ListPayment>
            </Payment>
        </Right>
    </Container>
  )
}

export default Footer
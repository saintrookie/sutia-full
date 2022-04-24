import styled from '@emotion/styled'
import React from 'react'
import { RiAddFill, RiSubtractFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { Label } from 'theme-ui'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-size: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 15px;
    font-weight: 600;
    cursor: pointer;
    background-color: ${ (props) => props.type === "filled" ? "black" : "transparent" };
    border: ${ (props) => props.type === "filled" && "none" };
    color: ${ (props) => props.type === "filled" && "white" };
`

const TopTexts = styled.div`

`

const TopText = styled.span`
    text-decoration: undeline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;

    ${mobile({ display: 'block', padding: '0' })}
    
`

const Info = styled.div`
    flex: 3;
    margin-right: 15px;
`
const Summary = styled.div`
    position: relative;
    flex: 1;
    height: 360px;
    background-color: #FAF9F6;
    padding: 0 0.9em;
`
const SummaryTitle = styled.h1`
    font-size: 24px;
    text-transform: uppercase;
    text-decoration: underline;
    text-align:center;
    margin-bottom: 1em;
`
const SummaryItem = styled.div`
    margin-bottom: 1.4em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SummaryItemText = styled.div`
    font-size: 18px;
    margin-right: 0.5em;

`

const SummaryItemPrice = styled.div`
    font-size: 28px;
    display: flex;
    align-items: flex-end;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;

    ${mobile({ display: 'block' })}

`

const ProductDetail  = styled.div`
    flex: 2;
    display: flex;
`

const Details  = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.h1`

`

const ProductId = styled.p`

`

const ProductColor = styled.div`
    height: 20px;
    width: 20px;
    border: 1px solid #EAE2B7;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0 3px;
    cursor: pointer;
`

const ProductSize = styled.span`

`

const Image = styled.img`
    width: 220px;

    ${mobile({ width: '100%' })}

`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 5px;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid #43919B;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2px;
`

const IconAmount = styled.span`
    font-size: 22px;
    margin: 0 4px
`

const ProductPrice = styled.span`
    font-size: 48px;
    font-weight: 100;
    margin: 0.3em 0;
`

const Hr = styled.hr`
    background-color: gainsboro;
    border: none;
    height: 1.2px;
`

const Button = styled.button`
    width: 100%;
    padding: 15px;
    border: 1px solid black;
    background-color: #43919B;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        font-weight: 600;
        background: gainsboro;
        color: #43919B;
        border: 1px solid black;

    }
`

const Cart = () => {

    const cart = useSelector(state=>state.cart);

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(3)</TopText>
                        <TopText>Wishlist</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.product.map(products=> (
                        <Product>
                            <ProductDetail>
                                <Image src={`http://localhost:5000/`+products.image} />
                                <Details>
                                    <ProductName>{products.title}</ProductName>
                                    <ProductId><b>ID: </b>{products._id}</ProductId>
                                    <Label>
                                        <ProductColor color={products.color} /> <ProductColor color="white" />
                                    </Label>
                                    <ProductSize><b>Size: </b>{products.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <IconAmount><RiSubtractFill /></IconAmount>
                                    <Amount>{products.quantity}</Amount>
                                    <IconAmount><RiAddFill /></IconAmount>
                                </ProductAmountContainer>
                                <ProductPrice>${products.price}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        
                        ))}
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal: </SummaryItemText>
                            <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Total:</SummaryItemText>
                            <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <Button variant="secondary">CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
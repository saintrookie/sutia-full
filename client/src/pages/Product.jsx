import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Image } from 'theme-ui'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { RiAddFill, RiSubtractFill } from "react-icons/ri";
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethod'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'


const Container = styled.div`

`

const Wrapper = styled.div`
    background-color: gainsboro;
    padding: 60px 120px;
    display: flex;

    ${mobile({ display: 'block' })}
   
`

const ImageContainer = styled.div`
    flex: 1;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 2em;
    ${mobile({ padding: '0' })}

`
const Title = styled.h1`
    font-size: 48px;
    font-weight: 300;
    text-transform: uppercase;
`
const Desc = styled.p`
    margin-bottom: 20px;
    letter-spacing: 1px;
    line-height: 1.2;
`

const Price = styled.span`
    font-weight: 200;
    font-size: 56px;
    padding: 1em 0;
`

const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0 20px 0;
`
const FilterTitle = styled.span`
   font-weight: 200;
   margin-right: 10px;
`
const FilterColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0 3px;
    cursor: pointer;
`

const Select = styled.select`
    margin: 20px 0 20px 0;
`

const Option = styled.option`

`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;

    ${mobile({ width: '100%' })}

`
const AmountContainer = styled.div`
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

const Button = styled.button`
    padding: 15px;
    border: 1px solid #43919B;
    background-color: white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        font-weight: 600;
        background: gainsboro;
        color: #43919B;
        border: 1px solid black;

    }
`

const Product = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("/products/find/"+id);
                setProduct(res.data);
            }catch(err){

            }
        }
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if(type === "dec"){
            quantity > 1 && setQuantity(quantity-1);
        } else {
            setQuantity(quantity+1);

        }
    }
    
    const handleCart = () => {
        dispatch(addProduct({...product, quantity, color, size }));
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src={ `http://localhost:5000/` + product.image } />
                </ImageContainer>
                <InfoContainer>
                    <Title>{ product.title }</Title>
                    <Desc>
                       { product.description }
                    </Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Colors: </FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor color={c} key={c} onClick={()=>setColor(c)} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size: </FilterTitle>
                            <Select id="size" onChange={(e)=>setSize(e.target.value)}>
                                {product.size?.map((s) => (
                                    <Option value={s} key={s}>{s}</Option>
                                ))}
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <IconAmount onClick={()=>handleQuantity("dec")}><RiSubtractFill /></IconAmount>
                            <Amount>{quantity}</Amount>
                            <IconAmount onClick={()=>handleQuantity("inc")}><RiAddFill /></IconAmount>
                        </AmountContainer>
                        <Button variant='primary' onClick={handleCart}>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
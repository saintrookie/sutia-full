import styled from '@emotion/styled'
import React from 'react'
import { Image } from 'theme-ui'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { RiAddFill, RiSubtractFill } from "react-icons/ri";
import { mobile } from '../responsive'



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
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImageContainer>
                <Image src={ require('../image/underwear.jpg') } />
            </ImageContainer>
            <InfoContainer>
                <Title>Uhuy Lingerie</Title>
                <Desc>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Veritatis facere, voluptas voluptate, ab hic blanditiis quam repudiandae reiciendis a quibusdam laborum doloribus. 
                    Enim incidunt eaque impedit! At quae consequuntur vitae.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere minima fuga, 
                    saepe enim harum nisi obcaecati laboriosam porro, earum,
                    dolore impedit nam deserunt reprehenderit iusto eum error repellendus sed officiis?
                </Desc>
                <Price>$29.99</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Colors: </FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="red" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size: </FilterTitle>
                        <Select id="size">
                            <Option value="xs" title="xs">XS</Option>
                            <Option value="s" title="s">S</Option>
                            <Option value="m" title="m">M</Option>
                            <Option value="l" title="l">L</Option>
                            <Option value="xl" title="xl">XL</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <IconAmount><RiSubtractFill /></IconAmount>
                        <Amount>1</Amount>
                        <IconAmount><RiAddFill /></IconAmount>
                    </AmountContainer>
                    <Button variant='primary'>Add To Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product
import styled from "styled-components";
import { HiOutlineChevronLeft,  HiOutlineChevronRight } from "react-icons/hi";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
    position: relative;
    margin: 0;
    padding: 0.3em auto;
    width: 100%;
    height: 90vh;
    display: flex;
    overflow: hidden;
    border-bottom: 1px solid gainsboro;

    ${mobile({height: '60vh'})}

`
const Arrow = styled.div`
    width: 35px;
    height: 35px;
    background-color: grey;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "15px"};
    right: ${props => props.direction === "right" && "15px"};
    margin auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.2s ease-in-out;
    transform: translateX(${ (props) => props.slideIndex * -100 }vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;

    ${mobile({height: '60vh'})}
    
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    ${mobile({height: '65%'})}

`

const Image =  styled.img`
    height: 80%;
    margin: 2em 8em;
    vertical-align: middle;
    position: relative;
    width: auto;

    ${mobile({margin: '0'})}

`

const InfoContainer = styled.div`
    flex: 1;
`
const Title = styled.h1`
    font-size: 70px;

    ${mobile({fontSize: '22px'})}

`

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    width: 500px;
    line-height: 1.5;

    ${mobile({margin: '20px 0', fontSize: '12px', width: '100%'})}

`
const Button = styled.button`
    padding: 1em;
    font-size: 14px;
    text-transform: uppercase;
`

const MainSlider = () => {

    const [ slideIndex, setSlideIndex ] = useState(0);

    const handleClick = (direction) => {
        
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }

    }

    return (
        <Container>
            <Arrow direction="left" onClick={ () => handleClick("left") }>
                <HiOutlineChevronLeft color="white" />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide key={item.id} variant="secondary">
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button variant="primary">Shop Now</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={ () => handleClick("right") }>
                <HiOutlineChevronRight color="white" />
            </Arrow>
        </Container>
    )
}

export default MainSlider
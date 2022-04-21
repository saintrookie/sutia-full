import styled from 'styled-components'
import React from 'react'
import { useForm } from 'react-hook-form'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url('https://images.unsplash.com/photo-1606055059939-7e0386191381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80') center;
    background-size: cover;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: .6em 1.5em;
    background-color: white;

    ${mobile({ width: '85%' })}

`

const Title = styled.h1`
    color: black;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0.8em;
`

const Form  = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 100%;
    margin: 0.8em 0;
    height: 42px;
    border: 1px solid gray;
    border-radius: 0;
    padding: 0 5px;
`

const Button = styled.button`
    width: 50%;
    height: 42px;
    margin: 10px 0;
    border: 1px solid #43919B;
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

const Link = styled.div`
    flex: 1;
    width: 100%;
    padding: 1.8em 0;
    cursor: pointer;
` 

const Login = () => {
  const { signin, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

    return (
      <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input type="text" placeholder="Email@example.com" />
                <Input type="password" placeholder="Password" />
                <Button type="submit">LOGIN</Button>
                <Link>
                  Don't have an account yet?  <a>Register</a>
                </Link>
            </Form>
        </Wrapper>


      </Container>
    )
}

export default Login
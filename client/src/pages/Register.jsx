import styled from '@emotion/styled'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Checkbox, Label } from 'theme-ui'
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
    width: 35%;
    padding: 1.6em 3em;
    background-color: white;

    ${mobile({ width: '75%' })}

`

const Title = styled.h1`
    color: black;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0.8em
`

const Form  = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 45%;
    margin: 1.3em 1em 0px 0px;
    height: 42px;
    border: 1px solid gray;
    border-radius: 0;
    padding: 0 5px
`

const Button = styled.button`
    flex: 1;
    width: 30%;
    margin-top: 10px;
    padding: 15px 0;
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

const Aggrement = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    min-width: 100%;
`

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <Container>
            <Wrapper>
                <Title>Create Account</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
                    <Input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
                    <Input type="text" placeholder="Email@example.com" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                    <Input type="text" placeholder="@Username" {...register("Username", {required: true, max: 30, min: 3})} />
                    <Input type="password" placeholder="Password" {...register("Password", {required: true,  pattern: /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/i})} />
                    <Input type="confirmpassword" placeholder="Confirm Password" {...register("Password", {required: true,  pattern: /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/i})} />
                    <Aggrement>
                        <Label sx={{ margin:'0.9em 0', display: 'flex', alignItems: 'center', flex: '1'}}>
                            <Checkbox defaultChecked={true} />
                            <span sx={{ display: 'flex', alignItems: 'center' }}>By Click This I Agree</span>
                        </Label>
                    </Aggrement>
                    <Button type="submit">CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
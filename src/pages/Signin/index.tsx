import React,{useRef,useCallback,useContext} from 'react';
import  { FiLogIn,FiMail,FiLock } from 'react-icons/fi';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import {AuthContext} from '../../context/AuthContext';
import {Form} from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';

import Button from '../../components/Button';


import { Container, Content, Background } from './styles';
interface SignInFormData{
    email:string;
    password:string;
}

const SignIn: React.FC = () => {



    const formRef = useRef<FormHandles>(null);

    const {signIn} = useContext(AuthContext);

    const handleSubmit = useCallback(async (data:SignInFormData) =>{
          try{
              formRef.current?.setErrors({});
          const schema = Yup.object().shape({
              email:Yup.string().required('E-mail Obrigatório')
              .email('Digite um E-mail válido'),
             password:Yup.string()
             .required('Senha Obrigatória'),
          });
          await schema.validate(data,{
              abortEarly:false,
          });
  
          
      } catch(err){
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
      }
  
  },[signIn]);
return(

<Container>
    <Content>
    <img src={logoImg} alt="GoBarber"/>
    <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Faça seu logon</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="password" icon={FiLock} type="password"  placeholder="Senha" />

        <Button type="submit">Entrar</Button>
        
        <a href="forgot">Esqueci minha senha</a>

       
    </Form>
    <a href="login">
        <FiLogIn/>
        Criar conta</a>
    </Content>
    <Background/>
</Container>
);
}
export default SignIn;
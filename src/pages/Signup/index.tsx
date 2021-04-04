import React,{useCallback,useRef} from 'react';
import  { FiArrowLeft,FiMail,FiUser,FiLock,FiPhone } from 'react-icons/fi';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors  from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';

import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

import  {Form} from '@unform/web';

const SignUp: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data:object) =>{
        try{
            formRef.current?.setErrors({});
        const schema = Yup.object().shape({
            name:Yup.string().required('Nome Obrigatório'),
            fone:Yup.string().required('Fone Obrigatório'),
            email:Yup.string().required('E-mail Obrigatório')
            .email('Digite um E-mail válido'),
           password:Yup.string()
           .min(6, 'Senha no Mínimo 6 dígitos'),
           passwordConfirmation: Yup.string()
           .oneOf([Yup.ref('password'), null], 'Senhas não Conferem'),

        });
        await schema.validate(data,{
            abortEarly:false,
        });

        
    } catch(err){
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
    }

},[]);
 return(
    <Container>
<Background/>
    <Content>
    <img src={logoImg} alt="PetSolution"/>
    <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>
        <Input name="name" icon={FiUser} placeholder="nome"/>
        <Input name="fone" icon={FiPhone} placeholder="fone"/>
        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="password" icon={FiLock} type="password"  placeholder="Senha" />
        <Input name="passwordConfirmation" icon={FiLock} type="password" placeholder="confirmar Senha"/>

        <Button type="submit">Cadastrar</Button>

       
    </Form>
    <a href="login">
        <FiArrowLeft/>
        Voltar para logon</a>
    </Content>
   
</Container>


 )   
};

export default SignUp;
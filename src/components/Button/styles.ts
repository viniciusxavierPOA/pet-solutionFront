import styled from 'styled-components';
import {shade} from 'polished';    

export const Container = styled.button`
    background: #fff;
    height:56px;
    border-radius:10px;
    border:1;
    border-color:#5CE1E6;
    padding:0 16px;
    color: #595454;
    width:100%;
    font-weight: 500;
    margin-top:16px;  
    transition: background-color 0.2s;

    &:hover{
        background:${shade(0.2,'#5CE1E6')};

    }  

`;

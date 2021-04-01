import styled from 'styled-components';
import {shade} from 'polished';

import signUpBackgroundImg from '../../assets/backgroundCadastro.png';
export const Container = styled.div`

    height:100vh;

    display:flex;
    
    align-items:stretch;

`;

export const Content = styled.div`
    align-items:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    place-content:center;
    margin-top:30px;
    width:100%;
    max-width:700px;   
 

    form{
        margin: 20px 0;
        width:340px;
        text-align:center;

        h1{
            margin-bottom:10px;
            color:black;
        }

       
      

        a{
            color:black;
            display:block;
            margin-top:24px;
            text-decoration:none;
            transition: color 0.2s;

            &:hover{
                    color: ${shade(0.2, '#f4ede8')};
            }

        }
    }
    > a {
            color:black;
            display:block;
            margin-top:10px;
            text-decoration:none;
            transition: color 0.2s;

            display:flex;
            align-items:center; 

            svg{
                margin-right:16px;

            }
            &:hover{
                color:${shade(0.2,'#F4EDE8')};

            }  
    }
`;

export const Background = styled.div`
    flex:1;
    background: url(${signUpBackgroundImg}) no-repeat center;
    background-size:cover;

`;

import styled from 'styled-components';
import {shade} from 'polished';

import signInBackgroundImg from '../../assets/backgroundLogin.png';
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
    padding-top:80px;
    width:90%;
    max-width:700px;   

    form{
        margin: 60px 0;
        width:340px;
        text-align:center;

        h1{
            margin-bottom:24px;
        }

       
      

        a{
            color:#595454;
            display:block;
            margin-top:24px;
            text-decoration:none;
            transition: color 0.2s;

            &:hover{
                    color: ${shade(0.2, '#595454')};
            }

        }
    }
    > a {
            color:black;
            display:block;
            margin-top:-10px;
            text-decoration:none;
            transition: color 0.2s;
            padding-top:80px;
            place-content:center;
            display:flex;
            align-items:center; 

            svg{
                margin-right:16px;

            }
            &:hover{
                color:${shade(0.2,'black')};

            }  
    }
`;

export const Background = styled.div`
    flex:1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size:cover;

`;

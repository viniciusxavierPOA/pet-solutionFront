import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps{
    isFocused:boolean;
    isFilled:boolean;
    isErrored:boolean;
}

export const Container = styled.div<ContainerProps>`

    background: #fff;
    border-radius:10px;
    border:3px solid #5CE1E6;
    padding:16px;
    width:100%;
    display:flex;
    align-items:center;
    color:#595454;

& + div {
        margin-top:8px;
    }
    ${(props) => props.isErrored && css`
    
        border-color:#c53030;
    `}

    ${(props) => props.isFocused && css`
        color:#483D8B;
        border-color:#483D8B;

    `}
    ${(props) => props.isFilled && css`
    color:#483D8B;


    `}
input{
    flex:1;
    background:transparent;
    color:#595454;
    border:0;

    &::placeholder{
        color:#666360;
    }

   
    svg{
        margin-right:16px;
    }
}

`;
export const Error = styled(Tooltip)`
        height:20px;
        margin-left:16px;
    svg{
        margin:0;
    }

    span{
        background: #c53030;
        color:#fff;

        &::before{
            border-color:#c53030 transparent;
                
        }
    }
`;

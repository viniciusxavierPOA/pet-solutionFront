import styled from 'styled-components';

export const Container = styled.div`

     background: #fff;
    border-radius:10px;
    border:3px solid #5CE1E6;
    padding:16px;
    width:100%;
    display:flex;
    align-items:center;
    color:#595454;



select{
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
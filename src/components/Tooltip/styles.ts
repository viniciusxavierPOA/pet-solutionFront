import styled from 'styled-components';

export const Container = styled.div`
    position:relative;

    span{
        width:160px;
        background:#c53030;
        padding:8px;
        border-radius: 4px;
        font-size:14px;
        font-weight:500px;
        position:absolute;
        opacity: 0;
        transition: opacity 0.4s;
        bottom: calc(100% + 12px);
        left:50%;
        transform: translateX(-50%);
        color:#312e38;
        visibility:hidden;
    

    &::before{
        content:'';
        border-style:solid;
        border-color:#c53030 transparent;
        border-width: 6px 6px 0 6px;
        top:100%;
        position:absolute;
        left:50%;
        transform: translateX(-50%);
        
    }
      
}
&:hover span{
            opacity:1;
            visibility:visible; 
        }
`;
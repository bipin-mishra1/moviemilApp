import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items:center;
justify-content:center;
width: 100%;
height:70px;
background:#252B4A;
`;

export const Content = styled.div`
display: flex;
width: 100%;
max-width: var(--maxWidth);
padding: 0 20px;

span{
    font-size:var(--fontmed);
    color: #9A6CB9;
    padding-right: 10px;
    font-weight:bold;
    @media screen and (max-width:768px){
        font-size:var(--fontsmall);
    }
}
`;

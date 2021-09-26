 import styled from "styled-components";

 export const Wrapper = styled.div`
 display:flex;
 align-items:center;
 min-height:100px;
 background:#0A0D1E;
 padding:0 20px;
 `;

export const Content = styled.div`
display:flex;
max-width:var(--maxWidth);
width:100%;
margin:0 auto;

.column{
    display: flex;
    align-items:center;
    justify-content:center;
    background:#252B4A;
    border-radius:20px;
    margin:0 20px;
    font-weight:700;
    flex:1;
    :first-child{
        margin-left:0;
    }
    :last-child{
        margin-right:0;
    }
}

@media screen and (max-width:768px){
    display:block;
    .column{
        margin:20px 0;
    }
}
`;
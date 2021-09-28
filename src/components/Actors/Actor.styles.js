import styled from 'styled-components';

export const Wrapper = styled.div`
color:#fff;
background:#252B4A;
border-radius:20px;
padding:7px;
text-align:center;
h3{
 margin:10px 0 0 0;
}

p{
 margin:5px 0;
}

@media screen and (max-width:450px){
    width:300px;
    margin:15px auto;    
 }

 @media screen and (max-width:360px){
    width:250px;
    margin:15px auto;    
 }


 

`;


export const Image = styled.img`
display:block;
width:100%;
height:200px;
object-fit:cover;
border-radius:15px;
@media screen and (max-width:640px){
    height:300px;
}
`;


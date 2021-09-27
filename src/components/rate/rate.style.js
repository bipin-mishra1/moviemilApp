import styled from "styled-components";


export const I = styled.div`
.range {
    width: 300px;
    height: 10px;
    -webkit-appearance: none;
    background: #252B4A;
    outline: none;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 1);
  }
  .range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #9A6CB9;
    cursor: pointer;
    border: 4px solid #333;
    box-shadow: -407px 0 0 400px #9A6CB9;
  }
  

`




export const P = styled.p`
button
    {
        background: #9A6CB9;
        background-image: -webkit-linear-gradient(top, #9A6CB9, #5b70d4);
        background-image: -moz-linear-gradient(top, #9A6CB9, #5b70d4);
        background-image: -ms-linear-gradient(top, #9A6CB9, #5b70d4);
        background-image: -o-linear-gradient(top, #9A6CB9, #5b70d4);
        background-image: linear-gradient(to bottom, #9A6CB9, #5b70d4);
        -webkit-border-radius: 28;
        -moz-border-radius: 28;
        border-radius: 28px;
        color: #ffffff;
        font-size: 16px;
        padding: 5px 10px 5px 10px;
        text-decoration: none;
    :hover{
        background: #9A6CB9;
        background-image: -webkit-linear-gradient(top, #9A6CB9, #2a24d4);
        background-image: -moz-linear-gradient(top, #9A6CB9, #2a24d4);
        background-image: -ms-linear-gradient(top, #9A6CB9, #2a24d4);
        background-image: -o-linear-gradient(top, #9A6CB9, #2a24d4);
        background-image: linear-gradient(to bottom, #9A6CB9, #2a24d4);
        text-decoration: none;
    }  
    }
      
`
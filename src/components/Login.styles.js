import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 320px;
  padding: 20px;
  color: grey;
  label{
      font-weight:700;
      color:grey;
  }
  input {
    font-size:large;
    width: 100%;
    height: 30px;
    border: 2px solid grey;
    border-radius: 20px;
    margin: 10px 0;
    padding: 10px;
  }
  
  .error {
    color: red;
    margin-top:15px;
  }
`;

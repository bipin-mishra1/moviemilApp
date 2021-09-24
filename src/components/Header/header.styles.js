import styled  from "styled-components";

export const Wrapper = styled.div`

background: var(--darkgrey);
padding: 0 20px;
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
max-width:var(--maxWidth);
max-height:var(--maxHeight); 
padding: 20px 0;
margin: 0 auto;
`;

export const LogogImg = styled.img`
  width: 250px;

  @media screen and (max-width: 500px){
      width:130px;
  }
`;

export const TMDBLogo = styled.img`
  width:120px;
  @media screen and (max-width: 500px){
    width:70px;
}
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom, 
      rgba(0,0,0,0) 41%, 
      rgba(0,0,0,0.65) 100%
  ),
  url(${props => props.image}),
  var(--darkgrey);
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  postion: relative;
  animation: animateHeroImage 1s;
  @keyframes animateHeroImage{
      from{
          opacity: 0;
      }to{
          opacity: 1;
      }
  }
  `;

export const Content = styled.div`
  padding: 20px;
  margin: 0 auto;
  background:none;
  max-width: var(--maxWidth);
  @media and screen(max-width: 720px){
      width: 100%;
      height: 100%;
  }
`;

export const Text  = styled.div`
  z-index: 100;
  color: var(--white);
  max-width: 700px;
  position: absolute;
  bottom: 74px;
  margin-right: 20px;
  min-height: 100px;
  h1{
      font-size: var(--superBiggyfont);

      @media screen and (max-width: 720px){
          font-size: var(--fontbig);
      }
  }

  p{
      font-size:var(--fontmed);

      @media screen and (max-width: 720px){
          font-size: var(--fontsmall);
      }
  }
  @media screen and (max-width: 720px){
    max-width: 100%;
}
`;
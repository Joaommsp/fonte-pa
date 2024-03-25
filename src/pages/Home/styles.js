import styled from "styled-components";

export const HomeContainer = styled.header `
  width: 100%;
  height: 100%;
`
export const BannerContainer = styled.div `
  width: 100%;
  height: 90vh;

  padding: 0rem 1rem 1rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

`
export const Banner = styled.div `
  width: 100%;
  height: 100%;

  background-image: url(${(element) => element.$bgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  
  border-radius: 10px;
`
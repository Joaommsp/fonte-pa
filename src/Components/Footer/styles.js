import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 35vh;
  background-color: #181a20;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;

  padding: 0 5rem;

  position: relative;

  .adminLink {
    position: absolute;
    top: 1rem;
    right: 1rem;

    text-decoration: none;
    color: #ffffff;
    font-size: 0.8rem;

    display: flex;
    align-items: center;
  }

  .adminLink img {
    margin-left: 0.5rem;
  }

  @media only screen and (max-width: 480px) {
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem 2rem;
    gap: 26px;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    height: 100%;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 2rem 2rem;
    gap: 26px;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    gap: 36px;
    padding: 0 2rem;
  }
`;

export const AdressContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 1rem;
    color: #ffffff;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  span {
    font-size: 0.9rem;
    color: #ffffff90;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #ffffff90;
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 50%;
  }
`;

export const Logo = styled.img`
  width: 156px;
`;

export const GoogleMapsLink = styled.a`
  img {
    width: 156px;
  }
`;

export const Passage = styled.p`
  width: 200px;
  color: #ffffff;
  font-size: 0.9rem;
  text-align: justify;
  font-weight: 300;

  padding-bottom: 1rem;
  border-bottom: 2px solid #ffffff;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 40%;
  }
`;

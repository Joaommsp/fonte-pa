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
`;

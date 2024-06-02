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
  gap: 8px;

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

    display: flex;
    align-items: center;
  }

  img {
    width: 18px;
    margin-right: 0.5rem;
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

export const MapAppsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 1rem;
  border-radius: 5px;
`;

export const GoogleMapsLink = styled.a`
  background-color: #e3eff7;
  border-radius: 5px;
  padding: 0.3rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 156px;
  }
`;

export const WazeLink = styled.a`
  background-color: #e3eff7;
  width: 100%;
  padding: 0.3rem 0.5rem;

  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 126px;
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

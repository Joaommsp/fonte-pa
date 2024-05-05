import styled from "styled-components";

import backgroundPageImage from "../../assets/images/contact-page-background.png";

export const HomeContainer = styled.header`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;

  padding-top: 11rem;

  background-image: url(${backgroundPageImage});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.6);
  background-blend-mode: overlay;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  .mapTest {
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    background-position: center;
    background-size: 650px;
    padding-top: 5rem;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    background-position: center;
    padding-top: 3rem;
  }
`;

export const Banner = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 5px;

  position: relative;
`;

export const BannerTextContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 2rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 80%;
    height: 600px;
  }
`;

export const DivisorLine = styled.div`
  width: 124px;
  height: 3px;
  background-color: #1c7ec2;
  margin-bottom: 2rem;
`;

export const TextContent = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 80%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 80%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
  color: #181a20;

  strong {
    color: #1c7ec2;
    font-weight: 500;
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
    font-size: 1.5rem;
    text-align: center;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 80%;
    font-size: 2rem;
    text-align: center;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    font-size: 2.2rem;
  }
`;

export const AboutContacts = styled.p`
  text-align: center;
  strong {
    color: #1c7ec2;
    font-weight: 500;
  }
`;

export const ContactsCardsContainer = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 56px;
`;

export const MapContainer = styled.div`
  width: 100%;

  padding: 2rem;

  .mapIframe {
    border-radius: 5px;
  }

  @media only screen and (max-width: 480px) {
    padding: 0.8rem;
    margin-bottom: 1rem;
  }
`;

export const WhatsAppLInk = styled.a`
  position: fixed;
  right: 3rem;
  bottom: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #ffffff;

  background-color: #25db09;
  padding: 0.5rem 1rem;

  border-radius: 50px;

  z-index: 10;

  &:hover {
    opacity: 80%;
  }

  img {
    margin-right: 0.5rem;
  }

  @media only screen and (max-width: 480px) {
    right: 1rem;
    bottom: 1rem;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    right: 2rem;
    bottom: 2rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    right: 2rem;
    bottom: 2rem;
  }
`;

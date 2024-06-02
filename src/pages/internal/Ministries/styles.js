import styled from "styled-components";

export const SchoolContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  padding-top: 5rem;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const SchoolTextContent = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem 10rem;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 100%;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 100%;
    z-index: 10;
  }
`;

export const SchoolTitle = styled.h1`
  color: #181a20;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;

  @media only screen and (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

export const SchoolSubTitle = styled.p`
  font-size: 0.9rem;

  strong {
    color: #1c7ec2;
    font-weight: 500;
  }

  @media only screen and (max-width: 480px) {
    text-align: center;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    text-align: center;
  }
`;

export const FormLink = styled.a``;

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

export const ContactsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 5rem;

  padding: 0rem 8rem;

  @media only screen and (max-width: 480px) {
  }
`;

export const ContactsContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;

  @media only screen and (max-width: 480px) {
    padding: 2rem 0rem;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    padding: 2rem 1rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    padding: 2rem 2rem;
  }
`;

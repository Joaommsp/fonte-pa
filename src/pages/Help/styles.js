import styled from "styled-components";

export const HelpContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;

  padding-top: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    overflow: hidden;
  }
`;

export const HelpTextContent = styled.div`
  width: 40%;
  height: 100%;

  padding: 5rem 2rem 2rem 5rem;

  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 5rem 2rem 2rem 2rem;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 100%;
    padding: 5rem 2rem 2rem 2rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 60%;
    padding: 5rem 2rem 2rem 4rem;
    z-index: 10;
  }
`;

export const HelpTitle = styled.h1`
  color: #181a20;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 100%;

  @media only screen and (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const HelpSubTitle = styled.p`
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

export const HelpImage = styled.img`
  width: 500px;

  @media only screen and (max-width: 480px) {
    width: 300px;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 420px;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 420px;
  }
`;

export const HelpImageContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 20px;

  position: relative;

  .attribution {
    color: #00000050;
    position: absolute;
    bottom: 2rem;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 100%;
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

export const ContactsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;
`;

export const Verse = styled.p`
  width: 50%;
  text-align: center;

  margin-bottom: 2rem;

  strong {
    font-weight: 500;
  }

  @media only screen and (max-width: 480px) {
    width: 80%;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 70%;
  }
`;

export const ContactsContent = styled.div`
  width: 100%;
  display: flex;

  margin-bottom: 4rem;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Contacts = styled.div`
  width: 80%;
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  gap: 20px;
  padding: 2rem 2rem 2rem 5rem;

  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 2rem;
    justify-content: center;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 100%;
    padding: 2rem;
    justify-content: center;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 100%;
    padding: 2rem 2rem 2rem 2rem;
  }
`;

export const ContactsTitle = styled.h2`
  font-weight: 500;
  margin-right: 2rem;
  font-size: 2.5rem;
  color: #181a20;
  line-height: 100%;

  @media only screen and (max-width: 480px) {
    display: none;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    padding: 0 2rem;
    font-size: 2rem;
  }
`;

export const GrowTogetherContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const GrowImageContainer = styled.div`
  width: 50%;
  padding-left: 2em;

  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    padding: 0;
  }
`;

export const GrowImage = styled.img`
  width: 556px;

  @media only screen and (max-width: 480px) {
    width: 356px;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 420px;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 420px;
  }
`;

export const GrowTextContent = styled.div`
  width: 35%;

  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 2rem;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 100%;
    padding: 2rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 50%;
    padding-right: 2rem;
  }
`;

export const GrowTitle = styled.h2`
  color: #181a20;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 100%;

  text-align: right;

  @media only screen and (max-width: 480px) {
    text-align: center;
    font-size: 2rem;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    text-align: right;
    font-size: 2rem;
  }
`;

export const GrowText = styled.p`
  color: #181a20;

  strong {
    color: #1c7ec2;
    font-weight: 500;
  }

  @media only screen and (max-width: 480px) {
    text-align: justify;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    text-align: justify;
  }
`;

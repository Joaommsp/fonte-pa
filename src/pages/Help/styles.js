import styled from "styled-components";

export const HelpContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const HelpTextContent = styled.div`
  width: 40%;
  height: 100%;

  padding: 5rem 2rem 2rem 5rem;
`;

export const HelpTitle = styled.h1`
  color: #181a20;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const HelpSubTitle = styled.p`
  strong {
    color: #1c7ec2;
    font-weight: 500;
  }
`;

export const FormLink = styled.a``;

export const HelpImage = styled.img`
  width: 500px;
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
`;

export const ContactsContent = styled.div`
  width: 100%;
  display: flex;

  margin-bottom: 4rem;
`;

export const Contacts = styled.div`
  width: 80%;
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  gap: 20px;
  padding: 2rem 2rem 2rem 5rem;
`;

export const ContactsTitle = styled.h2`
  font-weight: 500;
  margin-right: 2rem;
  font-size: 2.5rem;
  color: #181a20;
`;

export const GrowTogetherContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

export const GrowImageContainer = styled.div`
  width: 50%;
  padding-left: 2em;
`;
export const GrowImage = styled.img`
  width: 556px;
`;

export const GrowTextContent = styled.div`
  width: 35%;
`;

export const GrowTitle = styled.h2`
  color: #181a20;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 500;

  text-align: right;
`;

export const GrowText = styled.p`
  color: #181a20;

  strong {
    color: #1c7ec2;
    font-weight: 500;
  }
`;

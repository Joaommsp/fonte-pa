import styled from "styled-components";

export const HelpContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HelpTextContent = styled.div`
  width: 50%;
  height: 100%;

  padding: 5rem 2rem 2rem 5rem;
`;

export const HelpTitle = styled.h1`
  color: #17a2d8;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const HelpSubTitle = styled.p`
  strong {
    color: #17a2d8;
    font-weight: 500;
  }
`;

export const FormLink = styled.a`
  
`

export const HelpImage = styled.img`
  width: 556px;
`;

export const HelpImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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


export const SocialMedia = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 3rem;
`;

export const SocialMediaLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const SocilaMediaLink = styled.li`
  img {
    width: 26px;
  }
`;
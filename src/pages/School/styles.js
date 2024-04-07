import styled from "styled-components";

export const SchoolContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const SchoolTextContent = styled.div`
  width: 40%;
  height: 100%;

  padding: 5rem 2rem 2rem 5rem;
`;

export const SchoolTitle = styled.h1`
  color: #181a20;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const SchoolSubTitle = styled.p`
  strong {
    color: #1c7ec2;
    font-weight: 500;
  }
`;

export const FormLink = styled.a``;

export const SchoolImage = styled.img`
  width: 500px;
`;

export const SchoolImageContainer = styled.div`
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
    bottom: 0;
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
  justify-content: center;

  margin-bottom: 5rem;
`;

export const Verse = styled.p`
  width: 50%;
  text-align: center;

  margin-bottom: 4rem;

  strong {
    font-weight: 500;
  }
`;

export const ContactsContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 5rem;
  gap: 16px;
  overflow-x: scroll;
`;

export const FamilyContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 4rem;
`;

export const FamilyImageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5rem;
`;

export const FamilyImage = styled.img`
  width: 356px;
`;

export const FamilyContent = styled.div`
  width: 50%;
  padding-right: 5rem;
`;

export const FamilyTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  color: #181a20;
  margin-bottom: 1rem;
`;

export const FamilyText = styled.p`
  padding-right: 4rem;
  color: #181a20;

  strong {
    font-weight: 500;
    color: #1c7ec2;
  }
`;

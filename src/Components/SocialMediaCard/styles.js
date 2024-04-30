import styled from "styled-components";

export const MediaElement = styled.div`
  width: 300px;
  height: 250px;

  background-color: #1c7ec210;

  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: ${(element) => element.$bgColor}; */
  border-bottom: 3px solid ${(element) => element.$bgColor};
  z-index: 5;

  @media only screen and (max-width: 480px) {
    width: 280px;
    height: 250px;
  }
`;

export const MediaDescription = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const MediaTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #181a20;

  @media only screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const About = styled.span`
  width: 100%;
  font-weight: 300;
  color: #1c7ec2;
  text-align: left;
  margin-bottom: 1rem;
`;

export const Descripion = styled.p`
  width: 100%;
  font-weight: 300;
  color: #181a20;
  text-align: left;

  @media only screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const MediaImage = styled.img`
  width: 36px;

  @media only screen and (max-width: 480px) {
    width: 26px;
  }
`;

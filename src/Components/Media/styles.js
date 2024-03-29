import styled from "styled-components";

export const MediaElement = styled.div`
  width: 676px;
  height: 110px;

  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(element) => element.$bgColor};
  border-radius: 10px;
  z-index: 5;
`;

export const MediaDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const MediaTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
`;

export const Descripion = styled.p`
  font-weight: 300;
  color: #ffffff;
`;

export const MediaImage = styled.img`
  width: 76px;
`;

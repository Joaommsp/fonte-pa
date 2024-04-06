import styled from "styled-components";

export const CardElement = styled.div`
  width: 396px;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff7fc;
  border-radius: 2px;
  z-index: 5;
`;

export const CardContent = styled.div`
  width: 396px;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 1.5rem 1rem 0 2rem;
`;

export const CardImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
`;

export const CardTitle = styled.h2`
  color: #191919;
  font-size: 1.2rem;
  font-weight: 500;

  position: relative;

  z-index: 1;
`;

export const CardText = styled.p`
  font-size: 0.9rem;
`;

export const CardButton = styled.a`
  text-decoration: none;
  color: #2870b2;
  margin-top: 1rem;
`;

export const CardImage = styled.img`
  width: 346px;
  border-radius: 2px;
`;

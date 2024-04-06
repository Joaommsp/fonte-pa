import styled from "styled-components";

export const CardElement = styled.div`
  width: 300px;
  height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff7fc;
  border-radius: 5px;
  z-index: 5;
`;

export const CardContent = styled.div`
  width: 300px;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2rem 1rem 0 2rem;
`;

export const CardImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60%;
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
  width: 256px;
  border-radius: 5px;
`;

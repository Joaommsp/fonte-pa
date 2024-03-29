import styled from "styled-components";

export const CardElement = styled.div`
  width: 676px;
  height: 310px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  z-index: 5;
`;

export const CardContent = styled.div`
  width: 50%;
  height: 100%;
  padding: 2rem 2rem 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardTitle = styled.h2`
  color: #191919;
  font-size: 1.5rem;
  font-weight: 500;

  width: 100%;
  text-align: right;

  position: relative;

  z-index: 1;
  &::before {
    content: "";
    width: 100px;
    height: 100px;
    background-color: #49cad3;
    border-radius: 10px;

    position: absolute;
    z-index: -1;
    top: -6rem;
    right: -3.8em;
  }
`;

export const CardText = styled.p``;

export const CardButton = styled.a`
  text-decoration: none;
  color: #2870b2;
  margin-top: 2rem;
`;

export const CardImage = styled.img`
  width: 256px;

  box-shadow: 0.5px 0.6px 0px rgba(0, 0, 0, 0.138),
    1.1px 1.3px 0px rgba(0, 0, 0, 0.198), 2.1px 2.5px 0px rgba(0, 0, 0, 0.245),
    3.8px 4.5px 0px rgba(0, 0, 0, 0.292), 7.1px 8.4px 0px #ffffff,
    17px 20px 0px rgba(0, 0, 0, 0.49);

  border-radius: 10px;
`;

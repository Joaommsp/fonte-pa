import styled from "styled-components";

export const OfferWayCardElement = styled.div`
  width: 450px;

  background-color: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  border-radius: 5px;
  border: 1px solid #00000030;

  @media only screen and (max-width: 500px) {
    padding: 0.5rem 1rem;
  }
`;

export const WayIIconContainer = styled.div`
  width: 20%;
`;

export const WayIIcon = styled.img`
  width: 46px;

  @media only screen and (max-width: 500px) {
    width: 26px;
  }
`;

export const WayTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WayName = styled.span`
  font-size: 1.5rem;
  color: #1c7ec2;

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const WayInfo = styled.span`
  color: #181a20;
  text-align: center;

  @media only screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

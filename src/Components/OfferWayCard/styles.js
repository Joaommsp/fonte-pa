import styled from "styled-components";

export const OfferWayCardElement = styled.div`
  width: 500px;

  background-color: #1c7ec2;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  border-radius: 5px;

  @media only screen and (max-width: 500px) {
    padding: 0.5rem 1rem;
  }
`;

export const WayIIconContainer = styled.div`
  width: 30%;
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
  color: #ffffff;

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const WayInfo = styled.span`
  color: #ffffff;
  text-align: center;

  @media only screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

import styled from "styled-components";

export const MinistryCardElement = styled.div`
  height: 100%;

  padding: 1rem;
  box-shadow: 0px 0px 1.5px rgba(0, 0, 0, 0.13),
    0px 0px 12px rgba(0, 0, 0, 0.26);
  border-radius: 5px;

  .ministryCardHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%f;
  }

  img {
    width: 204px;
    height: 204px;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }

  .ministryName {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

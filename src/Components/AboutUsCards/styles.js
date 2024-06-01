import styled from "styled-components";

export const AboutUsCardElement = styled.div`
  width: 350px;
  height: 200px;

  border: 3px solid #1c7ec2;
  border-radius: 20px;
  padding: 1rem;

  .cardHeaher {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cardTitle {
    font-size: 1.2rem;
    font-weight: 500;
    color: #181a20;
    margin-bottom: 0.5rem;
  }

  .cardContent {
    width: 100%;
    height: 100%;
  }

  .cardText {
    font-size: 0.85rem;
    text-align: center;
  }

  @media only screen and (max-width: 420px) {
    width: 290px;
    height: 204px;
  }

  @media only screen and (min-width: 420px) and (max-width: 660px) {
    width: 350px;
    height: 164px;

    .cardTitle {
      font-size: 1rem;
    }

    .cardText {
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    width: 350px;
    height: 164px;

    .cardTitle {
      font-size: 1rem;
    }

    .cardText {
      font-size: 0.8rem;
    }
  }
`;

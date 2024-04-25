import styled from "styled-components";

export const NewsSectionContainer = styled.div`
  width: 100%;
  height: 600px;

  display: flex;
  justify-content: flex-start;

  @media only screen and (min-width: 560px) and (max-width: 700px) {
    height: 500px;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  gap: 24px;

  overflow-y: hidden;
  overflow-x: scroll;

  .card {
    width: 650px;
    height: 554px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    position: relative;
  }

  .cardHeader {
    width: 100%;
    border-bottom: 2px solid #1c7ec2;
    margin-bottom: 1rem;
  }

  .cardTitle {
    width: 100%;
    font-size: 1.4rem;
    color: #181a20;
  }

  .cardSubtitle {
    display: block;
    color: #181a20;
  }

  .cardImage {
    width: 615px;
    height: 346px;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .cardText {
    display: block;
    width: 600px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .cardData {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #00000060;
  }

  @media only screen and (min-width: 560px) and (max-width: 700px) {
    .card {
      width: 500px;
      height: 450px;
      padding: 0;
    }

    .cardTitle {
      font-size: 1.2rem;
    }

    .cardImage {
      width: 487px;
      height: 274px;
      object-fit: cover;
      margin-bottom: 1rem;
    }

    .cardText {
      display: block;
      width: 480px;
    }
  }

  @media only screen and (min-width: 470px) and (max-width: 560px) {
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;

    .card {
      width: 400px;
      height: 554px;
      padding: 0;
    }

    .cardTitle {
      font-size: 1.2rem;
    }

    .cardImage {
      width: 390px;
      height: 215px;
      object-fit: cover;
      margin-bottom: 1rem;
    }

    .cardText {
      display: block;
      width: 390px;
    }
  }

  @media only screen and (max-width: 470px) {
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;

    .card {
      width: 324px;
      height: 554px;
      padding: 0;
    }

    .cardTitle {
      font-size: 1rem;
    }

    .cardSubtitle {
      font-size: 0.8rem;
    }

    .cardImage {
      width: 324px;
      height: 182px;
      object-fit: cover;
      margin-bottom: 1rem;
    }

    .cardText {
      display: block;
      width: 324px;
      font-size: 0.9rem;
    }

    .cardData {
      top: 0;
      font-size: 0.8rem;
    }
  }
`;

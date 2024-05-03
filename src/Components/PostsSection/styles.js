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

  position: relative;

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
    height: 50px;
    overflow: hidden;
  }

  .cardData {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #00000060;
  }

  .readAllBtn {
    background-color: transparent;
    border: 0;
    border-radius: 5px;
    padding: 0.3rem 1rem;

    color: #1c7ec2;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
  }

  .readAllBtn:hover {
    cursor: pointer;
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
      height: 100px;
      text-overflow: ellipsis;
    }

    .cardData {
      top: 0;
      font-size: 0.8rem;
    }
  }
`;

export const PopUpContainer = styled.div`
  width: 90vw;
  height: 550px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  overflow-y: scroll;
  overflow-x: hidden;

  padding: 1rem;

  border-radius: 5px;

  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.52);

  .popUpCardHeader {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-top: 5px solid #1c7ec2;
    padding: 1rem;

    margin-bottom: 1rem;

    background-color: #f6f5f2;
  }

  .popUpCardTitle {
    color: #181a20;
    font-size: 2rem;
  }

  .popUpCardSubtitle {
    color: #181a2090;
    font-size: 1rem;
  }

  .popUpCardImage {
    width: 810px;
    height: 456px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 1rem;

    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.23);
  }

  .popUpCardBotton {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem 2rem 1rem 2rem;
  }

  .popUpCardText {
    display: block;
    width: 100%;
    text-align: center;
    white-space: pre-wrap;
    word-wrap: break-word;

    margin-bottom: 1rem;
  }

  .closePopUpBtn {
    position: absolute;
    right: 2rem;
    top: 2rem;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    display: flex;
    align-items: center;
  }

  .closePopUpBtn img {
    width: 26px;
  }
`;

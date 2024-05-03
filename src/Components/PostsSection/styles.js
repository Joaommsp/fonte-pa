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

  padding: 1rem 1rem;

  .card {
    width: 650px;
    height: 554px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    position: relative;

    border-radius: 5px;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);
  }

  .cardHeader {
    width: 100%;
    height: 72px;
    border-bottom: 2px solid #1c7ec2;
    margin-bottom: 1rem;
  }

  .cardTitle {
    width: 80%;
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

    position: absolute;
    bottom: 0;
    right: 0;

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
      height: 90px;
      font-size: 0.9rem;
      text-overflow: ellipsis;
      margin-bottom: 2rem;
    }

    .cardData {
      top: 0;
      font-size: 0.8rem;
    }

    .readAllBtn {
      font-size: 0.8rem;
    }
  }
`;

export const PopUpContainer = styled.div`
  width: 90vw;
  height: 650px;

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

  border-radius: 5px;

  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.52);

  .popUpCardHeader {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem 2rem 1rem;

    background-color: #181a20;
    margin-bottom: 2rem;
  }

  .popUpCardTitle {
    color: #ffffff;
    font-weight: 500;
    font-size: 1.5rem;
  }

  .popUpCardSubtitle {
    color: #b5c0d0;
    font-size: 1rem;
  }

  .popUpCardImage {
    width: 664px;
    height: 376px;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.23);
    margin-bottom: 1rem;
  }

  .PopUpCardAuthor {
    font-weight: 500;
  }

  .PopUpCardData {
    color: #181a20;
  }

  .popUpCardInfos__shareLinks a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #ffffff;
    background-color: #1c7ec2;

    padding: 0.5rem 1rem;
    border-radius: 50px;
  }

  .popUpCardInfos__shareLinks a img {
    margin-left: 0.5rem;
    width: 26px;
  }

  .popUpCardBotton {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0rem 2rem 1rem 2rem;
  }

  .popUpCardInfos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .popUpCardInfos__text {
    display: flex;
    flex-direction: column;
  }

  .popUpLogo {
    width: 156px;
  }

  .popUpCardText {
    display: block;
    width: 100%;
    text-align: justify;
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

  @media only screen and (max-width: 560px) {
    .popUpCardHeader {
    }

    .popUpCardTitle {
      text-align: center;
      font-size: 1rem;
      padding: 0 1rem;
      margin-bottom: 1rem;
    }

    .popUpCardSubtitle {
      color: #b5c0d0;
      font-size: 0.9rem;
      text-align: justify;
    }

    .popUpCardImage {
      width: 280px;
      height: 158px;
    }

    .popUpCardBotton {
      width: 100%;
    }

    .PopUpCardAuthor,
    .PopUpCardData {
      font-size: 0.8rem;
    }

    .popUpCardInfos__shareLinks a {
      text-decoration: none;
      display: flex;
      align-items: center;
      color: #ffffff;
      background-color: #1c7ec2;
      font-size: 0.8rem;

      padding: 0.5rem 1rem;
      border-radius: 50px;
    }

    .popUpCardInfos__shareLinks a img {
      margin-left: 0.5rem;
      width: 16px;
    }
  }
`;

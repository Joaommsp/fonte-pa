import styled from "styled-components";

export const NewsSectionContainer = styled.div`
  width: 100%;
  height: 600px;

  background-color: #f4f4f4;

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
    height: 564px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    position: relative;

    border-radius: 5px;

    background-color: #ffffff;
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
    text-align: justify;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .cardImage {
    width: 615px;
    height: 346px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 5px;
  }

  .cardBotton {
    width: 100%;
  }

  .cardTextContainer {
    width: 100%;
  }

  .cardText {
    display: block;
    width: 100%;
    text-align: justify;
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
    font-size: 0.8rem;
  }

  .readAllBtn {
    background-color: transparent;
    border: 0;
    border-radius: 5px;
    padding: 0.3rem 1rem;

    display: flex;
    align-items: center;

    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;

    color: #1c7ec2;
    font-size: 0.8rem;
    font-family: "Poppins", sans-serif;

    transition: 0.3s ease-in-out;
  }

  .readAllBtn img {
    margin-left: 0.3rem;
  }

  .readAllBtn:hover {
    opacity: 50%;
    cursor: pointer;
  }

  @media only screen and (min-width: 560px) and (max-width: 700px) {
    .card {
      width: 500px;
      height: 474px;
      padding: 0.5rem;

      flex-direction: column;
      align-items: center;
    }

    .cardTitle {
      font-size: 1.2rem;
    }

    .cardImage {
      width: 444px;
      height: 250px;
      object-fit: cover;
      margin-bottom: 1rem;
    }

    .cardText {
      display: block;
      width: 480px;
    }
  }

  @media only screen and (max-width: 560px) {
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 0;

    .card {
      width: 100%;
      height: fit-content;
      padding: 0.5rem;

      flex-direction: column;
      align-items: center;
    }

    .cardHeader {
      width: 100%;
      height: fit-content;
      border-bottom: 2px solid #1c7ec2;
      margin-bottom: 1rem;
    }

    .cardTitle {
      font-size: 1rem;
      padding-bottom: 0.5rem;
    }

    .cardSubtitle {
      font-size: 0.8rem;
    }

    .cardImage {
      width: 290px;
      height: 163px;
      object-fit: cover;
      margin-bottom: 1rem;
    }

    .cardText {
      display: block;
      width: 100%;
      height: 90px;
      font-size: 0.8rem;
      margin-bottom: 2rem;
      padding: 0 1rem;
    }

    .cardData {
      top: 0;
      font-size: 0.8rem;
      display: none;
    }

    .readAllBtn {
      font-size: 0.8rem;
    }
  }
`;

export const PopUpContainer = styled.div`
  width: 854px;
  height: 85vh;

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

  .popUpCardBannerContainer {
    width: 100%;
    height: 156px;
    position: relative;
  }

  .bannerImageCover {
    width: 100%;
    height: 100%;
    background-color: #181a2080;

    position: absolute;
    top: 0;
  }

  .popUpCardBanner {
    width: 100%;
    height: 156px;
    object-fit: cover;
  }

  .popUpCardHeader {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .popUpCardTitle {
    width: 80%;
    color: #181a20;
    font-weight: 500;
    font-size: 1.2rem;
    text-align: justify;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .popUpCardSubtitle {
    width: 100%;
    color: #181a20;
    font-size: 1rem;
    text-align: justify;
    white-space: pre-wrap;
    word-wrap: break-word;
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
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .popUpCardInfos__text span {
    font-size: 0.9rem;
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

    color: #ffffff;
    font-family: "Poppins", sans-serif;

    transition: 0.3s ease-in-out;
    z-index: 5000;
  }

  .closePopUpBtn img {
    width: 24px;
    margin-left: 0.5rem;
  }

  .closePopUpBtn:hover {
    opacity: 50%;
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

import styled from "styled-components";

export const NewsSectionContainer = styled.div`
  width: 100%;
  height: 500px;

  background-color: #ffffff;

  display: flex;
  justify-content: flex-start;

  @media only screen and (min-width: 560px) and (max-width: 700px) {
    height: 500px;
  }

  @media only screen and (max-width: 560px) {
    height: 500px;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  gap: 34px;

  overflow-y: hidden;
  overflow-x: scroll;

  position: relative;

  padding: 1rem 3rem 1rem 1rem;

  .card {
    width: 100%;
    height: 452px;
    padding: 2rem 2rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    position: relative;

    border-radius: 5px;

    background-color: #ffffff;
    box-shadow: 0px 0px 1.5px rgba(0, 0, 0, 0.13),
      0px 0px 12px rgba(0, 0, 0, 0.26);
  }

  .cardHeader {
    width: 100%;
    height: 82px;
    border-bottom: 2px solid #1c7ec2;
    margin-bottom: 1rem;
  }

  .cardTitle {
    width: 100%;
    font-size: 1.1rem;
    font-weight: 600;
    height: 56px;
    color: #181a20;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .cardHashtags {
    font-size: 0.9rem;
    color: #b4b4b8;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .carImageContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cardImage {
    width: 350px;
    height: 197px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 5px;
  }

  .cardBotton {
    width: 100%;
  }

  .cardTextContainer {
    width: 100%;
    height: 65px;
    overflow: hidden;
    margin-bottom: 2rem;
    text-overflow: ellipsis;
  }

  .cardTextContainer h1,
  h2,
  h3,
  h4,
  p {
    color: #181a20;
  }

  .cardTextContainer p {
    font-size: 14px;
    line-height: 1.2;
    text-align: justify;
  }

  .cardTextContainer span {
    font-size: 14px;
    line-height: 1.2;
    text-align: justify;
  }

  .cardTextContainer strong {
    font-weight: 600;
    font-size: 14px;
  }

  .cardTextContainer blockquote {
    line-height: 1.3;
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
      font-size: 1rem;
    }

    .cardImage {
      width: 444px;
      height: 250px;
      object-fit: cover;
      margin-bottom: 1rem;
    }

    .cardTextContainer p {
      font-size: 14px;
      line-height: 1.2;
      text-align: justify;
    }

    .cardTextContainer span {
      font-size: 14px;
      line-height: 1.2;
      text-align: justify;
    }
  }

  @media only screen and (max-width: 560px) {
    height: 480px;
    .card {
      width: 100%;
      height: 400px;
      padding: 1rem;

      flex-direction: column;
      align-items: center;
    }

    .cardHeader {
      width: 100%;
      height: 100px;
      border-bottom: 2px solid #1c7ec2;
      margin-bottom: 1rem;
    }

    .cardTitle {
      width: 100%;
      font-size: 0.9rem;
      padding-bottom: 0.5rem;
      height: fit-content;
    }

    .cardSubtitle {
      font-size: 0.8rem;
    }

    .cardHashtags {
      font-size: 0.8rem;
    }

    .cardImage {
      width: 290px;
      height: 163px;
      object-fit: cover;
      margin-bottom: 1rem;
    }

    .cardTextContainer p {
      font-size: 13px;
      line-height: 1.2;
      text-align: justify;
    }

    .cardTextContainer span {
      font-size: 13px;
      line-height: 1.2;
      text-align: justify;
    }

    .cardTextContainer strong {
      font-weight: 600;
      font-size: 13px;
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
  height: 80vh;

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

  padding: 2rem;

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
    margin-bottom: 1rem;
    text-align: center;
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
    margin-left: 0.5rem;
  }

  .popUpCardInfos__shareLinks {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 0;
  }

  .popUpCardInfos__shareLinks a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #ffffff;
    background-color: #1c7ec2;

    height: 38px;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.8rem;
  }

  .popUpCardInfos__shareLinks a img {
    margin-left: 0.5rem;
    width: 18px;
  }

  .popUpCardBotton {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0rem 2rem 1rem 2rem;
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

  .popUpCardTextContainer h1,
  h2,
  h3,
  h4,
  p {
    color: #181a20;
  }

  .popUpCardTextContainer strong {
    font-weight: 600;
  }

  .popUpCardTextContainer p {
    line-height: 1.3;
    text-align: justify;
    font-size: 0.9rem;
  }

  .popUpCardTextContainer blockquote {
    border-left: 4px solid #cccccc;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    background-color: transparent;
    text-align: justify;
    font-size: 0.9rem;
  }

  .closePopUpBtn {
    cursor: pointer;
    position: absolute;
    right: 2rem;
    top: 2rem;
    background-color: #1c7ec2;

    width: 94px;
    height: 28px;
    display: flex;
    align-items: center;

    text-decoration: none;

    padding: 0.2rem 1rem;

    color: #ffffff;
    font-family: "Poppins", sans-serif;

    border-radius: 64px;
    border: 0;

    transition: 0.3s ease-in-out;
    z-index: 1000;
  }

  .closePopUpBtn img {
    margin-right: 0.3rem;
    width: 18px;
    transition: 0.5s ease-in-out;
  }

  .closePopUpBtn:hover img {
    width: 0px;
  }

  @media only screen and (max-width: 560px) {
    width: 95vw;
    height: 80vh;

    .closePopUpBtn {
      top: 1rem;
      left: 1rem;
    }

    .popUpCardBannerContainer {
      height: 86px;
    }

    .popUpCardBanner {
      width: 100%;
      height: 86px;
      object-fit: cover;
    }

    .popUpCardHeader {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.5rem;
    }

    .popUpCardTitle {
      text-align: center;
      font-size: 1rem;
      padding: 0 1rem;
      margin-bottom: 1rem;
    }

    .PopUpCardAuthor,
    .PopUpCardData {
      font-size: 0.8rem;
    }

    .popUpCardSubtitle {
      font-size: 0.9rem;
      text-align: center;
    }

    .popUpCardImage {
      width: 300px;
      height: 169px;
    }

    .popUpCardBotton {
      width: 100%;
      padding: 0rem 1rem 1rem 1rem;
    }

    .PopUpCardAuthor,
    .PopUpCardData {
      font-size: 0.8rem;
    }

    .popUpCardText {
      font-size: 0.8rem;
      line-height: 1.3;
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

    .popUpLogo {
      width: 86px;
    }

    .popUpCardInfos__shareLinks a img {
      margin-left: 0.5rem;
      width: 16px;
    }
  }

  @media only screen and (min-width: 560px) and (max-width: 1000px) {
    width: 85vw;
    height: 80vh;

    .closePopUpBtn {
      top: 1rem;
      right: 1rem;
    }

    .popUpCardBannerContainer {
      height: 104px;
    }

    .popUpCardBanner {
      width: 100%;
      height: 104px;
      object-fit: cover;
    }

    .popUpCardHeader {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.5rem;
    }

    .popUpCardTitle {
      text-align: center;
      font-size: 1.2rem;
      padding: 0 1rem;
      margin-bottom: 1rem;
    }

    .PopUpCardAuthor,
    .PopUpCardData {
      font-size: 0.8rem;
    }

    .popUpCardSubtitle {
      font-size: 0.9rem;
      text-align: center;
    }

    .popUpCardImage {
      width: 440px;
      height: 247px;
    }

    .popUpCardBotton {
      width: 100%;
    }

    .PopUpCardAuthor,
    .PopUpCardData {
      font-size: 0.8rem;
    }

    .popUpCardText {
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

    .popUpLogo {
      width: 86px;
    }

    .popUpCardInfos__shareLinks a img {
      margin-left: 0.5rem;
      width: 16px;
    }
  }
`;

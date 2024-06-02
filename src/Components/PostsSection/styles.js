import styled from "styled-components";

export const NewsSectionContainer = styled.div`
  width: 100%;
  height: 534px;

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
  gap: 24px;

  overflow-y: hidden;
  overflow-x: scroll;

  position: relative;

  padding: 1rem 3rem 1rem 1rem;

  .card {
    width: 484px;
    max-width: 484px;
    height: 484px;
    padding: 0;

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
    margin-bottom: 1rem;

    padding: 0 1.5rem;
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
    text-transform: uppercase;
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
    width: 400px;
    height: 225px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
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
    padding: 0 1.5rem;
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
    bottom: 1rem;
    left: 1.5rem;
    color: #00000060;
    font-size: 0.8rem;

    display: flex;
    align-items: center;
  }

  .cardData img {
    margin-right: 0.5rem;
  }

  .readAllBtn {
    background-color: #1c7ec2;
    border: 0;
    border-radius: 5px;
    padding: 0.3rem 1rem;

    display: flex;
    align-items: center;

    position: absolute;
    bottom: 1rem;
    right: 1.5rem;

    color: #ffffff;
    font-size: 0.8rem;
    font-family: "Poppins", sans-serif;

    transition: 0.3s ease-in-out;
  }

  .readAllBtn:hover {
    opacity: 50%;
    cursor: pointer;
  }

  @media only screen and (max-width: 560px) {
    height: 480px;
    .card {
      width: 424px;
      height: 424px;
      padding: 0rem;

      flex-direction: column;
      align-items: center;
    }

    .cardHeader {
      width: 100%;
      height: 100px;
      margin-bottom: 1rem;
      padding: 0 1rem;
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

    .cardTextContainer {
      height: 64px;
      padding: 0 1rem;
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
      left: 1rem;
      bottom: 1rem;
      font-size: 0.8rem;
    }

    .readAllBtn {
      font-size: 0.8rem;
      right: 1rem;
    }
  }
`;

export const PopUpContainer = styled.div`
  width: 854px;
  height: 75vh;

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

  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.52);

  .popUpCardHeader {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 4rem;
    margin-bottom: 1rem;
  }

  .popUpCardTitle {
    width: 100%;
    color: #181a20;
    font-weight: 500;
    font-size: 1.2rem;
    text-align: justify;
    white-space: pre-wrap;
    word-wrap: break-word;

    margin-bottom: 1rem;

    text-transform: uppercase;
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

  .popUpImageContainer {
    width: 100%;
    height: 276px;

    position: relative;
    margin-bottom: 1rem;
  }

  .circleBorder {
    width: 100%;
    height: 32px;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;

    border-top-right-radius: 100px;
    border-top-left-radius: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fakeScroolLine {
    width: 200px;
    height: 5px;
    background-color: #b4b4b8;
    border-radius: 50px;
  }

  .popUpCardImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 1px;
    border-top-left-radius: 1px;
  }

  .PopUpCardAuthor {
    font-weight: 500;
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

  .popUpCardBottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 4rem;
  }

  .popUpCardInfos__text {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    flex-wrap: wrap;
    gap: 10px;
  }

  .popUpCardInfos__text span {
    font-size: 0.9rem;

    background-color: #eeeeee;
    padding: 0.5rem 1rem;

    border-radius: 5px;

    color: #181a20;

    display: flex;
    align-items: center;
  }

  .popUpCardInfos__text img {
    margin-right: 0.5rem;
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
    left: 2rem;
    top: 0.5rem;
    background-color: transparent;

    display: flex;
    align-items: center;

    text-decoration: none;

    padding: 0.1rem;

    font-family: "Poppins", sans-serif;

    border-radius: 5px;
    border: 0;

    transition: 0.3s ease-in-out;
    z-index: 1000;
  }

  .closePopUpBtn:hover {
    opacity: 50%;
  }

  .closePopUpBtn img {
    width: 32px;
    transition: 0.5s ease-in-out;
  }

  .closePopUpBtn span {
    font-family: "Poppins", sans-serif;

    transition: 0.3s ease-in-out;
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 560px) {
    width: 100vw;
    height: 100vh;

    border-radius: 0;

    .popUpCardHeader {
      padding: 1rem 1rem;
    }

    .fakeScroolLine {
      width: 100px;
      height: 5px;
      background-color: #b4b4b8;
      border-radius: 50px;
    }

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

    .popUpCardTitle {
      text-align: center;
      font-size: 1rem;
      padding: 0 1rem;
      margin-bottom: 2rem;
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
      width: 100%;
      height: 184px;
    }

    .popUpCardBottom {
      padding: 1rem 1rem;
    }

    .popUpCardInfos__text span {
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
      height: 100%;
      display: flex;
      flex-wrap: wrap;
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
      width: 100%;
      height: 200px;
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

export const EmptyEvents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .emptyEventsTitle {
    font-weight: 400;
    color: #686d76;
    font-size: 1rem;
    text-align: center;
  }

  .emptyImageContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .emptyImage {
    width: 356px;
    margin-bottom: 1rem;
  }

  .linkToCreatePost {
    text-decoration: none;
    color: #1c7ec2;
    transition: 0.3s ease-in-out;
  }

  .linkToCreatePost:hover {
    color: #01204e;
  }

  @media only screen and (max-width: 560px) {
    .emptyEventsTitle {
      font-size: 1rem;
      text-align: center;
    }

    .emptyImage {
      width: 256px;
    }
  }

  @media only screen and (max-width: 1000px) {
    .emptyEventsTitle {
      font-size: 1.2rem;
      text-align: center;
    }

    .emptyImage {
      width: 304px;
    }
  }
`;

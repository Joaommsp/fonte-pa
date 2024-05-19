import styled from "styled-components";

import CreatePostCardBg from "../../../assets/images/editPostCardBg.png";

export const NewsLetterPanelContainer = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 5rem;

  @media only screen and (max-width: 560px) {
    padding-top: 4rem;
  }
`;

export const FeatureHeaderContainer = styled.div`
  width: 100%;
  height: 184px;
  background-image: url(${CreatePostCardBg});
  background-size: cover;
  background-position: center;

  border-radius: 5px;

  margin-bottom: 2rem;

  .featureHeaderGradient {
    width: 100%;
    height: 100%;
    background-color: #00000040;
    border-radius: 5px;

    display: flex;
    justify-content: flex-start;

    padding: 1rem;
  }

  .featureInfos {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .backToDashBoardLink {
    background-color: #31363f60;

    width: 104px;
    display: flex;
    align-items: center;

    text-decoration: none;

    padding: 0.2rem 1rem;

    color: #ffffff;

    border-radius: 64px;

    transition: 0.3s ease-in-out;
  }

  .backToDashBoardLink img {
    margin-right: 0.3rem;
    width: 18px;
    transition: 0.5s ease-in-out;
  }

  .backToDashBoardLink:hover img {
    width: 0px;
  }

  .featureTitle {
    font-size: 2.5rem;
    color: #ffffff;
    font-weight: 500;
    text-shadow: -3px 3px 1px rgba(0, 0, 0, 0.25);
  }

  @media only screen and (max-width: 560px) {
    height: 124px;
    background-position: top;
    margin-bottom: 2rem;

    .featureTitle {
      font-size: 1.2rem;
    }

    .featureHeaderGradient {
      padding: 0.8rem;
    }

    .backToDashBoardLink {
      width: 88px;
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 560px) and (max-width: 1000px) {
    .featureTitle {
      font-size: 1.5rem;
    }
  }
`;

export const DashBoardHeader = styled.aside`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  margin-bottom: 2rem;

  background-color: #ffffff;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.41);

  position: fixed;
  z-index: 1000;
  top: 0;

  .logo {
    width: 124px;
    filter: grayscale(1);
  }

  @media only screen and (max-width: 480px) {
    .logo {
      width: 84px;
      filter: grayscale(1);
    }

    height: 50px;
    padding: 0.5rem 1rem;
  }

  @media only screen and (min-width: 480px) and (max-width: 1000px) {
    padding: 0.5rem 2rem;
    height: 56px;
  }
`;

export const UserInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const UserLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-right: 2rem;

  .homeLink {
    background-color: red;
    padding: 0.5rem 0.5rem;

    border-radius: 50%;

    background-color: #e8ecf1;

    transition: 0.3s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .homeLink:hover {
    opacity: 60%;
    transform: scale(1.1);
  }

  @media only screen and (max-width: 480px) {
    margin-right: 1rem;
  }
`;

export const UserInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .userPhoto {
    width: 36px;
    margin-right: 0.5rem;
  }

  .userName {
    font-size: 0.9rem;
    color: #181a20;
  }

  .openPopUpIcon {
    width: 12px;
    margin-left: 0.5rem;
    opacity: 80%;
    transition: 0.5s ease-in-out;
  }

  .openPopUpIcon:hover {
    cursor: pointer;
    transform: scaleY(-1);
  }

  @media only screen and (max-width: 480px) {
    .userPhoto {
      width: 32px;
    }

    .userName {
      display: none;
    }
  }
`;

export const UserControlDropDown = styled.div`
  margin-top: 1rem;
  width: 156px;
  height: 86px;
  padding: 0.5rem;

  background-color: #ffffff;

  position: absolute;
  right: 0;
  bottom: -6.8rem;

  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.28);

  z-index: 1000;

  border-radius: 5px;

  .logoutBtn {
    border: 0;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    font-family: "Poppins", sans-serif;

    padding: 0.5rem 1rem;

    border-radius: 5px;
    transition: 0.3s ease-in-out;
  }

  .logoutBtn:hover {
    cursor: pointer;
    background-color: #dddddd;
  }
`;

export const PostManagerContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem 5rem;

  @media only screen and (max-width: 560px) {
    padding: 0.5rem 1rem;
  }

  @media only screen and (min-width: 560px) and (max-width: 1000px) {
    padding: 0.5rem 3rem;
  }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 5rem;

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
    height: 82px;

    margin-bottom: 1rem;
  }

  .cardTitle {
    width: 80%;
    height: 56px;
    font-size: 1.2rem;
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

  .cardHeaderContainer {
    width: 100%;
    height: 100%;

    position: relative;
  }

  .deletePostBtn {
    position: absolute;
    right: 1rem;
    top: 1rem;

    background-color: #ffffff;
    border: 0;
    padding: 0.5rem;

    border-radius: 5px;

    transition: 0.3s ease-in-out;

    transform: scale(1);

    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.37);
  }

  .deletePostBtn img {
    width: 24px;
  }

  .deletePostBtn:hover {
    cursor: pointer;
    background-color: #ffffff90;
    transform: scale(1.1);
  }

  .cardImage {
    width: 615px;
    height: 346px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: 1px solid #00000020;
  }

  .cardBotton {
    width: 100%;
  }

  .cardTextContainer {
    width: 100%;
    height: 64px;
    overflow: hidden;
    margin-bottom: 2rem;
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
      height: fit-content;
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

export const ActionStatusContainer = styled.div`
  width: 400px;
  height: 250px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;

  z-index: 1000;

  border-radius: 10px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .closeCreatedPostModal {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    border: 0;

    background-color: transparent;

    transform: scale(1);
    transition: 0.3s ease-in-out;
  }

  .closeCreatedPostModal img {
    width: 16px;
  }

  .closeCreatedPostModal:hover {
    cursor: pointer;

    transform: scale(1.1);
  }

  .actionStatusImage {
    width: 186px;
    margin-bottom: 1.5rem;
  }

  span {
    font-size: 0.9rem;
    color: #181a20;
  }

  @media only screen and (max-width: 560px) {
    width: 300px;
    height: 200px;

    .actionStatusImage {
      width: 134px;
      margin-bottom: 1.5rem;
    }

    span {
      font-size: 0.8rem;
      color: #181a20;
    }
  }
`;

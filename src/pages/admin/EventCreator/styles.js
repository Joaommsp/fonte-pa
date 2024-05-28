import styled from "styled-components";

import CreatePostCardBg from "../../../assets/images/createEventCardBg.png";

export const NewsLetterPanelContainer = styled.div`
  width: 100%;
  height: 100vh;

  padding-top: 5rem;

  @media only screen and (max-width: 560px) {
    padding-top: 4rem;
  }
`;

export const PostCreatorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 0.5rem 5rem;

  .mainContainer {
    width: 100%;
    display: flex;
    padding: 1rem 0;

    justify-content: space-between;
  }

  .createContainer {
    width: 40%;
    display: flex;
    flex-direction: column;
  }

  .createContainer input {
    width: 100%;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0.8rem 1rem;
    margin-bottom: 1rem;
    text-overflow: ellipsis;

    transition: 0.3s ease-in-out;
    font-family: "Noto Sans JP", sans-serif;
  }

  .grayInput {
    background-color: #f0f5f8;
  }

  .createContainer input:focus {
    background-color: transparent;
    border: 1px solid #00000050;
  }

  .createContainer input:focus,
  input:focus,
  select:focus {
    outline: 0;
  }

  .dateInput {
    font-family: "Poppins", sans-serif;
    background-color: #68d2e8;
  }

  .descriptionTexteArea {
    max-width: 100%;
    min-width: 100%;
    margin-bottom: 1rem;
    font-family: "Poppins", sans-serif;
    padding: 1rem;
  }

  .inputImage {
    height: 56px;
    display: flex;
    align-items: center;
    background-color: #68d2e8;
    font-family: "Poppins", sans-serif;
    color: #000000;
  }

  .imageFormatContainer {
    width: 100%;
    background-color: #f4f4f4;
    margin-bottom: 1rem;

    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;

    padding: 1rem;
  }

  .imageFormatContainerText {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .imageFormatContainerText img {
    width: 36px;
    margin-bottom: 1rem;
  }

  .imageFormatContainerText span {
    text-align: center;
    font-size: 0.8rem;
  }

  .imageFormat {
    width: 156px;
    border-radius: 5px;
  }

  .uploadImageBtn img {
    width: 36px;
    transform: scale(1);
    transition: 0.3s ease-in-out;
  }

  .uploadImageBtn img:hover {
    transform: scale(1.1);
  }

  .uploadImageBtn:hover {
    cursor: pointer;
  }

  .imageUploadProgress {
    width: 100%;
    height: 10px;
    margin-bottom: 2rem;
    border: none;
    border-radius: 50px;

    transition: 0.3s ease-in-out;
  }

  .uploadImageContainer {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .prevUploadImage {
    width: 221px;
    height: 221px;
    overflow: hidden;
    object-fit: cover;

    border: 1px solid #00000020;
    margin-bottom: 1rem;
  }

  .createBtn {
    width: 100%;
    border: 0;
    padding: 0.5rem;
    background-color: #c40c0c;
    border-radius: 5px;

    color: #ffffff;
    font-weight: 500;
    transition: 0.3s ease-in-out;
    font-family: "Poppins", sans-serif;
  }

  .createBtn:hover {
    background-color: #e72929;
    cursor: pointer;
  }

  .envStatusContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    height: 128px;
  }

  .envStatusContainer span {
    font-size: 0.8rem;
    color: #e72929;
    display: flex;
    align-items: center;
  }

  .envStatusContainer img {
    margin-left: 0.5rem;
  }

  @media only screen and (max-width: 560px) {
    padding: 0.5rem 0.5rem;

    .mainContainer {
      padding: 1rem 0.5rem;
      flex-direction: column;
    }

    .createContainer {
      width: 100%;
    }

    .createContainer label {
      font-size: 0.8rem;
    }

    .createContainer input {
      font-size: 0.8rem;
    }

    .imageFormatContainer {
      gap: 24px;
      flex-direction: column;
      padding: 1rem;
    }

    .imageFormatContainerText {
      width: 100%;
    }

    .imageFormatContainerText img {
      width: 36px;
      margin-bottom: 1rem;
    }

    .imageFormatContainerText span {
      text-align: center;
      font-size: 0.8rem;
    }

    .imageFormat {
      width: 156px;
      border-radius: 5px;
    }

    .inputImage {
      height: 46px;
    }

    .uploadImageBtn img {
      width: 24px;
    }

    .prevUploadImage {
      width: 270px;
      height: 270px;
      overflow: hidden;
      object-fit: cover;

      border: 1px solid #00000020;
      margin-bottom: 1rem;
    }

    .envStatusContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      height: 48px;
    }
  }

  @media only screen and (min-width: 560px) and (max-width: 1000px) {
    padding: 0.5rem 3rem;

    .mainContainer {
      padding: 1rem 0.5rem;
      flex-direction: column;
    }

    .createContainer {
      width: 100%;
      padding: 1rem;
    }
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
    margin-bottom: 1rem;

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

export const PreviewCardContainer = styled.div`
  width: 50%;
  max-width: 478px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  .previewContainerTitle {
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .previewCard {
    width: 100%;
    background-color: #f4f4f4;
    padding: 1rem;
    border-radius: 5px;
  }

  .previewCardHeader {
    width: 100%;
    height: 100%;
    border: 1px solid #00000030;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    transition: 0.5s ease-in-out;
    padding: 1rem;

    margin-bottom: 0.5rem;
  }

  .previewCardTitle {
    display: block;
    width: 100%;
    min-height: 36px;
    max-height: fit-content;

    padding: 0 1rem;
    border-radius: 5px;

    font-size: 1.2rem;
    font-weight: 500;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .previewCardHashtags {
    display: block;
    width: 100%;
    min-height: 28px;
    max-height: fit-content;

    padding: 0 1rem;
    border-radius: 5px;
    text-align: justify;
    white-space: pre-wrap;
    word-wrap: break-word;

    margin-bottom: 0.5rem;

    font-size: 0.9rem;
  }

  .previewCardContent {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .previewCardUploadImage {
    width: 405px;
    height: 405px;
    border-radius: 5px;

    border: 1px solid #00000030;
    margin-bottom: 1rem;
    object-fit: cover;
  }

  .previewEventDetailsContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    padding: 1rem;
    text-align: justify;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .previewEventDetailsContainer span {
    display: flex;
    align-items: center;
    height: 28px;
  }

  .previewEventDetailsContainer img {
    width: 18px;
    margin-right: 0.5rem;
  }

  .previewCardTextBox {
    width: 100%;
    min-height: 100px;
    height: 100%;
    border: 1px solid #00000030;
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 2rem;
    text-align: justify;
    white-space: pre-wrap;
    word-wrap: break-word;
    background-color: #ffffff;
  }

  .previewCardTextBox h1,
  h2,
  h3,
  h4,
  p {
    color: #181a20;
  }

  .previewCardTextBox strong {
    font-weight: 600;
  }

  .previewCardTextBox p {
    line-height: 1.3;
  }

  .previewCardTextBox blockquote {
    border-left: 4px solid #cccccc;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    background-color: transparent;
  }

  .previewCardTextBox ul,
  ol {
    margin-left: 1rem;
  }

  .previewCardAuthor {
    min-width: 156px;
    max-width: fit-content;
    min-height: 38px;
    max-height: fit-content;

    border: 1px solid #00000030;
    border-radius: 5px;

    padding: 0.5rem;
    margin-bottom: 0.5rem;

    font-size: 0.8rem;

    text-align: center;
  }

  @media only screen and (min-width: 470px) and (max-width: 560px) {
    width: 100%;
    padding: 0;

    .previewCardHeader {
      padding: 0.5rem;
    }

    .previewCardTitle {
      font-size: 1rem;
      text-align: center;
    }

    .previewCardSubtitle {
      text-align: center;
      font-size: 0.8rem;
    }

    .previewCardUploadImage {
      width: 388px;
      height: 388px;
    }

    .previewEventDetailsContainer span {
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 378px) and (max-width: 470px) {
    width: 100%;
    padding: 0;

    .previewCardHeader {
      padding: 0.5rem;
    }

    .previewCardTitle {
      font-size: 1rem;
      text-align: center;
    }

    .previewCardSubtitle {
      text-align: center;
      font-size: 0.8rem;
    }

    .previewCardUploadImage {
      width: 295px;
      height: 295px;
    }

    .previewEventDetailsContainer {
      padding: 0.5rem;
    }

    .previewEventDetailsContainer img {
      margin-right: 0.2rem;
    }

    .previewEventDetailsContainer span {
      font-size: 0.8rem;
    }
  }

  @media only screen and (max-width: 378px) {
    width: 100%;
    padding: 0;

    .previewCardHeader {
      padding: 0.5rem;
    }

    .previewCardTitle {
      font-size: 1rem;
      text-align: center;
    }

    .previewCardSubtitle {
      text-align: center;
      font-size: 0.8rem;
    }

    .previewCardUploadImage {
      width: 236px;
      height: 236px;
    }

    .previewEventDetailsContainer {
      display: none;
    }
  }

  @media only screen and (min-width: 690px) and (max-width: 1000px) {
    width: 100%;

    .previewCardUploadImage {
      width: 401px;
      height: 401px;
    }
  }

  @media only screen and (min-width: 560px) and (max-width: 690px) {
    width: 100%;

    .previewCardUploadImage {
      width: 355px;
      height: 355px;
    }
  }

  @media only screen and (min-width: 1114px) and (max-width: 1268px) {
    .previewCardUploadImage {
      width: 410px;
      height: 410px;
    }
  }

  @media only screen and (min-width: 1000px) and (max-width: 1114px) {
    .previewCardUploadImage {
      width: 336px;
      height: 336px;
    }
  }
`;

export const TextWriterContainer = styled.div`
  width: 100%;

  height: 100%;

  margin-bottom: 6.5rem;

  .textEditor {
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4 {
    color: #181a20;
  }

  /* Foto de kazuend na Unsplash */

  @media only screen and (max-width: 560px) {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 560px) and (max-width: 1000px) {
    margin-bottom: 1rem;
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

export const PostCreatedNoticeModal = styled.div`
  width: 400px;
  height: 250px;

  background-color: #ffffff;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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

  .postCreatedModalImage {
    width: 194px;
    margin-bottom: 1.5rem;
  }

  span {
    font-size: 0.9rem;
    color: #181a20;
  }

  @media only screen and (max-width: 560px) {
    width: 300px;
    height: 200px;

    .postCreatedModalImage {
      width: 134px;
      margin-bottom: 1.5rem;
    }

    span {
      font-size: 0.8rem;
      color: #181a20;
    }
  }
`;

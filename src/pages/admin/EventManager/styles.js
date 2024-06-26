import styled from "styled-components";

import EditEventCardBg from "../../../assets/images/editEventCardBg.png";

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
  background-image: url(${EditEventCardBg});
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

    padding: 1rem 1rem 1rem 1rem;
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
    font-size: 1.5rem;
    color: #181a20;
    font-weight: 500;
    background-color: #ffffff;

    padding: 1rem;

    border-radius: 5px;
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
    padding: 0.5rem 0.5rem;
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
    width: 436px;
    height: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    position: relative;

    border-radius: 5px;

    box-shadow: 0px 0px 1.5px rgba(0, 0, 0, 0.13),
      0px 0px 12px rgba(0, 0, 0, 0.26);
  }

  .cardHeader {
    width: 100%;
    height: 42px;
    margin-bottom: 0.5rem;
  }

  .cardTitle {
    width: 80%;
    font-size: 1rem;
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

  .managementOptions {
    position: absolute;
    top: 1rem;
    right: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .updateEventBtn {
    background-color: #ffffff;
    border: 0;
    padding: 0.5rem;

    width: 40px;
    height: 40px;

    border-radius: 5px;

    transition: 0.3s ease-in-out;

    transform: scale(1);

    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.37);
    display: flex;
  }

  .deleteEventBtn {
    background-color: #ffffff;
    border: 0;
    padding: 0.5rem;

    width: 40px;
    height: 40px;

    border-radius: 5px;

    transition: 0.3s ease-in-out;

    transform: scale(1);

    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.37);
  }

  .deleteEventBtn img,
  .updateEventBtn img {
    width: 24px;
  }

  .deleteEventBtn:hover,
  .updateEventBtn:hover {
    cursor: pointer;
    background-color: #ffffff90;
    transform: scale(1.1);
  }

  .cardImage {
    width: 404px;
    height: 404px;
    object-fit: cover;
    margin-bottom: 0.5rem;
    border-radius: 5px;
    border: 1px solid #00000020;
  }

  .cardBotton {
    width: 100%;
    display: flex;
    flex-direction: column;
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
    display: block;
    color: #191919;
    font-size: 0.9rem;

    display: flex;
    align-items: center;

    margin-bottom: 0.5rem;
  }

  .cardData img {
    margin-right: 0.5rem;
    width: 18px;
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
      width: 388px;
      height: fit-content;
      padding: 1rem;

      flex-direction: column;
      align-items: center;
    }

    .cardTitle {
      font-size: 0.9rem;
    }

    .cardImage {
      width: 354px;
      height: 354px;
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
    padding: 2rem 0.5rem;

    .card {
      width: 310px;
      height: fit-content;
      padding: 1rem;

      flex-direction: column;
      align-items: center;
    }

    .cardHeader {
      width: 100%;
      height: 64px;
      border-bottom: 2px solid #1c7ec2;
      margin-bottom: 1rem;
    }

    .cardTitle {
      width: 100%;
      font-size: 1rem;
      padding-bottom: 0.5rem;
      height: 64px;
    }

    .cardSubtitle {
      font-size: 0.8rem;
    }

    .cardImage {
      width: 280px;
      height: 280px;
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
      font-size: 0.8rem;
    }

    .cardLocal {
      font-size: 0.7rem;
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

export const NoticeOldPostData = styled.div`
  border: 1px solid #00000050;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  span {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  img {
    width: 18px;
    margin-right: 0.5rem;
  }

  @media only screen and (max-width: 560px) {
    span {
      font-size: 0.8rem;
    }
  }
`;

export const PopUpUpdateContainer = styled.div`
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

  .popUpUpdateTitle {
    font-weight: 500;
    color: #181a20;
    margin-bottom: 1rem;
  }

  .editInputs {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .editInputs input {
    width: 100%;
    padding: 0.8rem 1rem;
    margin-bottom: 0.5rem;

    border: 1px solid transparent;
    border-radius: 5px;
    background-color: #f0f5f8;

    font-family: "Poppins", sans-serif;

    transition: 0.3s ease-in-out;
  }

  .editInputs input:focus {
    background-color: transparent;
    border: 1px solid #00000050;
    outline: 0;
  }

  .dateUpdateWarnContainer {
    width: 100%;
    height: 100%;
    background-color: #f0f5f8;

    padding: 0.5rem;
    margin: 1rem 0 0 0;

    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .dateUpdateWarn {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
  }

  .dateUpdateWarn img {
    width: 18px;
    margin-right: 0.5rem;
  }

  .confirmEditBtn {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    padding: 0.5rem;
    border: 0;
    background-color: #ffbf00;
    border-radius: 5px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;

    transition: 0.3s ease-in-out;
  }

  .confirmEditBtn:hover {
    cursor: pointer;
    background-color: #ff9a00;
  }

  .statusMessageContainer {
    width: 100%;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .statusMessage {
    font-size: 0.8rem;
    color: #e72929;
    display: flex;
    align-items: center;
  }

  .statusMessage img {
    margin-right: 0.5rem;
  }

  @media only screen and (max-width: 560px) {
    width: 95vw;
    height: 80vh;
    padding: 1rem;

    .closePopUpBtn {
      top: 1rem;
      right: 1rem;
    }

    .popUpUpdateTitle {
      margin-top: 3rem;
      font-size: 1.2rem;
    }

    .editInputs {
      width: 100%;
    }

    .editInputs label {
      font-size: 0.8rem;
    }

    .editInputs input {
      font-size: 0.8rem;
    }

    .confirmEditBtn {
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 560px) and (max-width: 1000px) {
    width: 80%;
    height: 80vh;

    .closePopUpBtn {
      top: 1rem;
      right: 1rem;
    }

    .editInputs {
      width: 90%;
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

  @media only screen and (max-width: 560px) {
    margin-bottom: 7rem;
  }

  @media only screen and (min-width: 560px) and (max-width: 1000px) {
    margin-bottom: 5rem;
  }
`;

export const ConfirmDeleteModal = styled.div`
  width: 300px;
  height: 200px;

  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  .closeModalBtn {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    border: 0;
    background-color: transparent;

    transform: scale(1);
    transition: 0.3s ease-in-out;
  }

  .closeModalBtn:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  span {
    display: block;
    margin-bottom: 2rem;
  }

  .buttons {
    display: flex;
    gap: 24px;
  }

  .buttons button {
    width: 100px;
    padding: 0.5rem;

    transition: 0.3s ease-in-out;

    font-family: "Poppins", sans-serif;
  }

  .buttons button:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  .confirmBtn {
    background-color: transparent;
    border: 2px solid #41b06e;
    border-radius: 5px;
    color: #41b06e;
  }

  .cancelBtn {
    background-color: transparent;
    border: 2px solid #ff1e00;
    border-radius: 5px;
    color: #ff1e00;
  }

  @media only screen and (max-width: 560px) {
    width: 290px;
    height: 190px;

    span {
      font-size: 0.8rem;
    }

    .buttons button {
      font-size: 0.8rem;
    }
  }
`;

export const EmptyEvents = styled.div`
  width: 100%;
  margin-top: 2rem;

  .emptyEventsTitle {
    font-weight: 500;
    color: #181a20;
    font-size: 1.5rem;
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

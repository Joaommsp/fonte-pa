import styled from "styled-components";

import CreatePostCardBg from "../../../assets/images/createPostCardBg.png";

export const NewsLetterPanelContainer = styled.div`
  width: 100%;
  height: 100vh;

  padding-top: 5rem;
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

    gap: 24px;
  }

  .createContainer {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .createContainer input {
    width: 100%;
    height: 40px;

    border: 1px solid #00000030;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    text-overflow: ellipsis;
  }

  .createContainer input:focus {
    border: 1px solid #1662a1;
  }

  .createContainer input:focus,
  input:focus,
  select:focus {
    outline: 0;
  }

  .descriptionTexteArea {
    max-width: 100%;
    min-width: 100%;
    margin-bottom: 1rem;
    font-family: "Poppins", sans-serif;
    padding: 1rem;
  }

  .inputImage {
    height: 500px;
    display: flex;
    align-items: center;
  }

  .uploadImageBtn {
    border: 0;
    padding: 0.5rem 1rem;
    background-color: #1c7ec2;
    color: #ffffff;
    font-weight: 500;
    border-radius: 5px;

    cursor: pointer;
    margin-bottom: 1rem;
    transition: 0.3s ease-in-out;
  }

  .uploadImageBtn:hover {
    background-color: #1662a1;
    cursor: pointer;
  }

  .prevUploadImage {
    width: 321px;
    height: 180px;
    overflow: hidden;
    object-fit: cover;

    border: 1px solid #00000020;
    margin-bottom: 1rem;
  }

  .createBtn {
    width: 100%;
    border: 0;
    padding: 0.5rem;
    background-color: #41b06e;
    border-radius: 5px;

    color: #ffffff;
    font-weight: 500;
    transition: 0.3s ease-in-out;
  }

  .createBtn:hover {
    background-color: #358c58;
    cursor: pointer;
  }

  .envStatusContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  .envStatusContainer span {
    font-size: 0.8rem;
    color: #e72929;
  }

  @media only screen and (min-width: 580px) and (max-width: 1000px) {
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
`;

export const DashBoardHeader = styled.aside`
  width: 100%;
  height: 10vh;

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

    height: 8vh;
    padding: 0.5rem 1rem;
  }

  @media only screen and (min-width: 480px) and (max-width: 1000px) {
    padding: 0.5rem 2rem;
    height: 8vh;
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
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .previewContainerTitle {
    font-weight: 500;
    font-size: 1.2rem;
  }

  .previewCard {
    width: 100%;
  }

  .previewCardTitle {
    display: block;
    width: 100%;
    min-height: 28px;
    max-height: fit-content;
    background-color: red;

    padding: 0 1rem;
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

import styled from "styled-components";

import CreatePostCardBg from "../../../assets/images/createPostCardBg.png";
import DefaultLinkImage from "../../../assets/images/defaultLinkImage.png";
import EditPostCardBg from "../../../assets/images/editPostCardBg.png";

export const NewsLetterPanelContainer = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 5rem;
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

export const DashBoardContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 1rem 10rem;

  margin-bottom: 5rem;

  @media only screen and (max-width: 480px) {
    padding: 1rem 1rem;
    margin-bottom: 10rem;
  }

  @media only screen and (min-width: 480px) and (max-width: 1000px) {
    padding: 1rem 2rem;
  }
`;

export const DashBoardContentHeader = styled.div`
  width: 100%;
`;

export const DashBoardTitle = styled.h2`
  color: #181a20;
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const DashBoardCardsContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: #f4f4f4;

  padding: 1rem;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  flex-wrap: wrap;

  .cardLinkContainer {
    text-decoration: none;
  }

  @media only screen and (max-width: 480px) {
    padding: 0.5rem;
    border-radius: 5px;
  }
`;

export const DashBoardCard = styled.div`
  width: 400px;
  height: 200px;

  padding-top: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .featureName {
    display: block;
    margin-bottom: 0.5rem;
    color: #181a20;
  }

  .cardImageContainer {
    width: 100%;
    height: 85%;
    border-radius: 5px;
  }

  #createPostImageBg {
    background-image: url(${CreatePostCardBg});
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }

  #editPostImageBg {
    background-image: url(${EditPostCardBg});
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }

  .cardContent {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .defaultLinkImageContainer {
    position: absolute;
    width: 100%;
    height: 100%;

    background-image: url(${DefaultLinkImage});
    background-size: cover;
    background-position: center;
    opacity: 0%;

    border-radius: 5px;

    transition: 0.3s ease-in-out;
  }

  .defaultLinkImageContainer:hover {
    opacity: 50%;
  }

  @media only screen and (max-width: 480px) {
    width: 274px;
    height: 184px;
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

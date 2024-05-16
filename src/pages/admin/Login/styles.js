import styled from "styled-components";

import LoginPageBackground from "../../../assets/images/loginPageBackground.jpg";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: url(${LoginPageBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  position: relative;
`;

export const BgCover = styled.div`
  width: 100%;
  height: 100%;

  background-color: #00000050;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 10vh;

  display: flex;
  align-items: center;
  padding: 0.5rem 3rem;

  position: absolute;
  top: 0;

  .homeLink {
    border-radius: 50px;

    padding: 0.5rem 1rem;

    text-decoration: none;
    color: #ffffff;

    display: flex;
    align-content: center;

    font-size: 0.8rem;

    transition: 0.3s ease-in-out;

    z-index: 1000;
  }

  .homeLink img {
    margin-right: 0.5rem;
  }

  .homeLink:hover {
    opacity: 80%;
  }

  @media only screen and (max-width: 700px) {
    height: 8vh;
    padding: 0;
  }

  @media only screen and (max-width: 580px) {
    padding: 0rem;
    height: 8vh;
  }
`;

export const LogoContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  .logoContainerText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .logo {
    width: 284px;
    filter: drop-shadow(0px 0px 4px #00000070);
  }

  .aboutThisProjectContainer {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }

  .aboutThisProjectContainer span {
    font-size: 0.8rem;
    color: #ffffff;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 40%;

    .logo {
      width: 156px;
    }

    .aboutThisProjectContainer {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media only screen and (max-width: 580px) {
    .aboutThisProjectContainer {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export const LoginFormContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  max-height: 650px;
  height: 95%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;

  border-radius: 5px;

  padding: 5rem 2rem 2rem 2rem;

  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);

  .loginPageTitle {
    width: 100%;
    font-weight: 500;
    text-align: left;
    color: #181a20;
    margin-bottom: 3rem;
    font-family: "Noto Sans JP", sans-serif;
  }

  form {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 24px;
  }

  span {
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .inputContainer {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .inputContainer input {
    width: 100%;

    padding: 0.5rem 2rem 0.5rem 0;
    border: 0;

    border-bottom: 2px solid #181a2050;

    font-size: 0.9rem;

    transition: 0.3s ease-in-out;
  }

  .inputContainer input:focus {
    border-bottom: 2px solid #1662a1;
    margin-top: 1rem;
  }

  .inputContainer label {
    color: #181a20;
    font-size: 0.9rem;
  }

  .inputContainer iput:focus,
  input:focus,
  select:focus {
    outline: 0;
  }

  .inputPasswordContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
  }

  .togglePasswordButton {
    border: 0;
    background-color: transparent;
    margin-left: 1rem;

    position: absolute;
    right: 0;

    transition: 0.3s ease-in-out;
  }

  .togglePasswordButton:hover {
    cursor: pointer;
    opacity: 80%;
  }

  .togglePasswordButton img {
    width: 24px;
  }

  .loginButtonContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .loginButton {
    width: 104px;
    margin-top: 0.5rem;

    padding: 0.5rem 1rem;

    text-align: center;

    border: 0;
    border-radius: 50px;
    background-color: #1c7ec2;

    color: #ffffff;
    font-weight: 500;
    font-size: 0.9rem;
    font-family: "Roboto", sans-serif;

    transition: 0.3s ease-in-out;
  }

  .loginButton:hover {
    background-color: #5ab2ff;
    cursor: pointer;
  }

  .loginButton img {
    margin-left: 0.5rem;
    width: 22px;
  }

  .formStatus {
    display: flex;
    flex-direction: column;
    height: 50px;
    align-items: center;

    margin-top: 2rem;
  }

  .formStatus span {
    color: #e72929;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    font-weight: 400;
  }

  .formStatus img {
    width: 32px;
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 580px) {
    max-width: 100%;
    width: 100%;
    padding: 2rem;
    height: 100%;
    border-radius: 0;
  }
`;

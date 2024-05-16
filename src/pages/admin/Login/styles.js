import styled from "styled-components";

import LoginPageBackground from "../../../assets/images/loginPageBackground.jpg";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${LoginPageBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
`;

export const BgCover = styled.div`
  width: 100%;
  height: 100%;

  background-color: #00000050;

  display: flex;
  align-items: center;
  justify-content: center;
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

    font-size: 0.9rem;

    transition: 0.3s ease-in-out;
  }

  .homeLink img {
    margin-right: 0.5rem;
  }

  .homeLink:hover {
    opacity: 80%;
  }

  @media only screen and (max-width: 700px) {
    padding: 0.5rem 1rem;
  }
`;

export const LogoContainer = styled.div`
  width: 40%;
`;

export const FormContainer = styled.div`
  width: 60%;
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

  .logo {
    width: 256px;
    margin-bottom: 2rem;
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
    background-color: #1662a1;
    cursor: pointer;
  }

  .loginButton img {
    margin-left: 0.5rem;
    width: 22px;
  }

  .formStatus {
    display: block;
    height: 50px;

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

  @media only screen and (max-width: 580px) {
    width: 100%;
    padding: 1rem;
  }
`;

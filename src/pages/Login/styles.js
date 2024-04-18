import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;
export const Header = styled.div`
  width: 100%;
  height: 10vh;

  display: flex;
  align-items: center;
  padding: 0.5rem 5rem;

  position: absolute;
  top: 0;

  .homeLink {
    text-decoration: none;
    color: #181a20;

    display: flex;
    align-content: center;

    img {
      margin-right: 0.5rem;
    }
  }
`;

export const FormContainer = styled.div`
  width: 500px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  form {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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

    padding: 0.9rem 1rem;

    border-radius: 5px;

    border: 1px solid #181a2050;

    font-size: 1.1rem;
  }

  .inputContainer input:focus {
    border: 1px solid #1662a1;
  }

  .inputContainer label {
    color: #181a20;
    margin-bottom: 0.5rem;
  }

  .inputContainer iput:focus,
  input:focus,
  select:focus {
    outline: 0;
  }

  .button {
    width: 100%;
    margin-top: 2rem;

    padding: 0.9rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;
    background-color: #1c7ec2;

    color: #ffffff;
    font-weight: 500;
    font-size: 1.1rem;

    transition: 0.3s ease-in-out;
  }

  .button:hover {
    background-color: #1662a1;
    cursor: pointer;
  }

  .button img {
    margin-left: 0.5rem;
    width: 22px;
  }

  .formStatus {
    display: block;
    height: 50px;
  }

  .formStatus span {
    color: #e72929;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media only screen and (max-width: 580px) {
    width: 100%;
    padding: 1rem;
  }
`;

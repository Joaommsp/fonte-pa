import styled from "styled-components";

export const NewsLetterPanelContainer = styled.div`
  width: 100%;
  height: 100vh;

  .header {
    width: 100%;
    height: 10vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5rem;
  }

  .header .homeLink {
    text-decoration: none;
    color: #181a20;

    display: flex;
    align-items: center;
  }

  .header .homeLink img {
    margin-right: 0.5rem;
  }

  .header .logoutBtn {
    border: 0;
    background-color: transparent;

    font-size: 1rem;
    font-weight: 500;

    color: #e72929;
    cursor: pointer;

    display: flex;
    align-items: center;
  }

  .header .logoutBtn img {
    margin-left: 0.5rem;
  }

  .mainContainer {
    width: 100%;
    display: flex;
  }

  .createContainer {
    width: 50%;
    padding: 2rem;

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

  .cardsContainer {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem;
  }

  .card {
    width: 523px;
    height: 353px;
    margin-top: 1rem;
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;

    border: 2px solid #00000020;
    border-radius: 5px;

    position: relative;
  }

  .cardTitle {
    font-weight: 500;
    color: #181a20;
    font-size: 1.2rem;
  }

  .cardSubtitle {
    font-weight: 400;
    color: #181a20;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .cardImage {
    width: 321px;
    height: 180px;
    overflow: hidden;
    object-fit: cover;

    border: 1px solid #00000020;
    margin-bottom: 1rem;
  }

  .cardBotton {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 100px;
  }

  .cardText {
    width: 100%;
    text-align: justify;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-weight: 400;
    color: #181a20;
    font-size: 0.9rem;
  }

  .cardData {
    font-weight: 400;
    color: #181a20;
    font-size: 0.9rem;
  }

  .deleteBtn {
    position: absolute;
    border: 0;
    background-color: transparent;

    right: 1rem;

    cursor: pointer;
  }

  .deleteBtn img {
    width: 24px;
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
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`
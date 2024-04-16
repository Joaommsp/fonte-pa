import styled from "styled-components";

export const NewsLetterPanelContainer = styled.div`
  width: 100%;
  height: 100vh;

  .header {
    width: 100%;
    height: 10vh;
    background-color: #f6f5f2;

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
  }

  .cardsContainer {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .card {
    width: 600px;
    height: 400px;
    margin-top: 1rem;
    margin-bottom: 2rem;

    background-color: red;
  }

  .cardTitle {
  }

  .cardImage {
    width: 400px;
    height: 225px;
    overflow: hidden;
    object-fit: contain;
    border: 5px solid blue;
    object-fit: scale-down;
  }
`;

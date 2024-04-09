import styled from "styled-components";

const font = {
  poppins: "'Poppins', sans-serif;",
};

const colors = {
  primary_color: "#FFFFFF",
  secundary_color: "#5755FE",
  text_dark: "#0F0F0F",
  text_light: "#FFF6F6",
};

export const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;

  padding: 0 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: 800px) {
    align-items: flex-start;
    padding: 0.5rem 1rem;

    height: fit-content;

    position: fixed;
    top: 0;
    z-index: 100;

    background-color: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.41);
  }
`;

export const Logo = styled.img`
  width: 124px;

  @media only screen and (max-width: 800px) {
    width: 100px;
  }
`;

export const HeaderLinksContainer = styled.div`
  height: 100%;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: 800px) {
    z-index: 10;
    transition: max-height 0.3s ease-in-out;
  }
`;

export const HeaderLinks = styled.ul`
  list-style: none;

  height: 100%;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-end;
    display: ${(element) => element.$show};
    margin-bottom: 1rem;
  }
`;

export const HeaderLink = styled.li`
  .headerLink {
    text-decoration: none;
    color: ${colors.text_dark};
    font-family: ${font.poppins};
    font-weight: 500;
  }

  .index {
    border-bottom: 3px solid #3ec8d4;
  }
`;

export const HeaderControl = styled.img`
  width: 28px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: none;

  @media only screen and (max-width: 800px) {
    display: block;
  }
`;

export const CalltoActionContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

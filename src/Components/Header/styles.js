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
`;

export const Logo = styled.img`
  width: 124px;
`;

export const HeaderLinksContainer = styled.div`
  height: 100%;
  opacity: 0;
  align-items: center;
  justify-content: center;
`;

export const HeaderLinks = styled.ul`
  list-style: none;

  height: 100%;

  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const HeaderLink = styled.li`

  .headerLink {
    text-decoration: none;
    color: ${colors.text_dark};
    font-family: ${font.poppins};
    font-weight: 500;
  }

  .index {
    border-bottom: 3px solid #3EC8D4;
  }
`;

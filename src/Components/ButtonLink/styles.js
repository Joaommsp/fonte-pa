import styled from "styled-components";

export const ButtonLinkElement = styled.button ` 
  background-color: ${(element) => element.$bgColor};

  padding: .5rem 1.5rem;

  border: 0;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    color: ${(element) => element.$textColor};
    font-weight: 500;
    font-size: ${(element) => element.$textSize};
  }

`
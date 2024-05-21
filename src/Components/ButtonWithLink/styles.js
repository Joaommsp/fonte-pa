import styled from "styled-components";

export const ButtonLinkElement = styled.button`
  background-color: ${(element) => element.$bgColor};

  padding: 0.5rem 1.5rem;

  border: 0;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;

  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

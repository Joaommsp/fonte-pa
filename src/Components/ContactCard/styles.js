import styled from "styled-components";

export const ContacCardElementLink = styled.a`
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  width: 146px;
  height: 146px;
  border-radius: 5px;
`;

export const LinkIcon = styled.img`
  width: 56px;
  margin-bottom: 1em;

  @media only screen and (max-width: 480px) {
    width: 46px;
  }
`;

export const LinkName = styled.span`
  font-size: 1.3rem;
  color: #181a20;

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

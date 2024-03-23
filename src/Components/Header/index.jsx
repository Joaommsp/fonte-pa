import React from "react";

import LogoImage from "../../assets/images/oficial/logo.png";

import Button from "../Button";

import {
  HeaderContainer,
  Logo,
  HeaderLinksContainer,
  HeaderLinks,
  HeaderLink,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="" />
      <HeaderLinksContainer>
        <HeaderLinks>
          <HeaderLink><a href="" className="headerLink">Cultos</a></HeaderLink>
          <HeaderLink><a href="" className="headerLink">Ajuda</a></HeaderLink>
          <HeaderLink><a href="" className="headerLink">Escola Bíblica</a></HeaderLink>
          <HeaderLink><a href="" className="headerLink">Infantil</a></HeaderLink>
        </HeaderLinks>
      </HeaderLinksContainer>
      <Button bgColor="#E5E5E5" />
    </HeaderContainer>
  );
};

export default Header;

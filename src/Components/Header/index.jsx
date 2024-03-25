import { useState } from "react";
import { Link } from "react-router-dom";

import LogoImage from "../../assets/images/oficial/logo.png";

import ButtonLink from "../ButtonLink";

import {
  HeaderContainer,
  Logo,
  HeaderLinksContainer,
  HeaderLinks,
  HeaderLink,
} from "./styles";

const Header = () => {
  
  const [indexLInk, setIndexLInk] = useState(1);

  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="" />
      <HeaderLinksContainer>
        <HeaderLinks>
          <HeaderLink>
            <Link to="/" className="headerLink">
              Cultos
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/ajuda" className="headerLink">
              Ajuda
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/escolabiblica" className="headerLink">
              Escola Bíblica
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/infantil" className="headerLink">
              Infantil
            </Link>
          </HeaderLink>
        </HeaderLinks>
      </HeaderLinksContainer>
      <ButtonLink
        bgColor="#E5E5E5"
        textColor="#0F0F0F"
        textContent="Como chegar?"
        href="https://www.google.com/maps/place/Fonte+Baptist+Church/@-9.4005532,-38.2449099,16.75z/data=!4m6!3m5!1s0x7093097213da37b:0xf2d4508b9d89bd1!8m2!3d-9.400342!4d-38.2446643!16s%2Fg%2F11ggt1n4tw?entry=ttu"
        target="_blank"
      />
    </HeaderContainer>
  );
};

export default Header;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { gsap } from "gsap";

import LogoImage from "../../assets/images/oficial/logo.png";

import ButtonLink from "../ButtonLink";

import {
  HeaderContainer,
  Logo,
  HeaderLinksContainer,
  HeaderLinks,
  HeaderLink,
} from "./styles";

const Header = (props) => {
  const [indexLInk, setIndexLInk] = useState();

  useEffect(() => {
    gsap.to(".headerLinks__Container", { opacity: 1, y: 0, duration: 1 });

    setIndexLInk(props.pageIndex);
  }, [props.pageIndex]);

  const controlHeaderIndex = () => {
    if (indexLInk == 0) {
      return (
        <HeaderLinks>
          <HeaderLink>
            <Link to="/" className="headerLink index">
              Fonte
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
            <Link to="/ministerios" className="headerLink">
              Ministérios
            </Link>
          </HeaderLink>
        </HeaderLinks>
      );
    } else if (indexLInk == 1) {
      return (
        <HeaderLinks>
          <HeaderLink>
            <Link to="/" className="headerLink">
              Fonte
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/ajuda" className="headerLink index">
              Ajuda
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/escolabiblica" className="headerLink">
              Escola Bíblica
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/ministerios" className="headerLink">
              Ministérios
            </Link>
          </HeaderLink>
        </HeaderLinks>
      );
    } else if (indexLInk == 2) {
      return (
        <HeaderLinks>
          <HeaderLink>
            <Link to="/" className="headerLink">
              Fonte
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/ajuda" className="headerLink">
              Ajuda
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/escolabiblica" className="headerLink index">
              Escola Bíblica
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/ministerios" className="headerLink">
              Ministérios
            </Link>
          </HeaderLink>
        </HeaderLinks>
      );
    } else if (indexLInk == 3) {
      return (
        <HeaderLinks>
          <HeaderLink>
            <Link to="/" className="headerLink">
              Fonte
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
            <Link to="/ministerios" className="headerLink index">
            Ministérios
            </Link>
          </HeaderLink>
        </HeaderLinks>
      );
    }
  };

  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="" />
      <HeaderLinksContainer className="headerLinks__Container">
        {controlHeaderIndex()}
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

Header.propTypes = {
  pageIndex: PropTypes.number.isRequired,
};

export default Header;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { gsap } from "gsap";

import LogoImage from "../../assets/images/imagens-oficiais/logo.png";

import ButtonWithLink from "../ButtonWithLink";

import Icons from "../../assets/images/svg/icons/iconsExport";

import {
  HeaderContainer,
  Logo,
  HeaderLinksContainer,
  HeaderLinks,
  HeaderLink,
  HeaderControl,
  SubLinks,
  SubLink,
} from "./styles";

const Header = (props) => {
  const [indexLInk, setIndexLInk] = useState();
  const [menuOpen, setMenuOpen] = useState("none");
  const [menuIcon, setMenuIcon] = useState(Icons.MenuIcon);
  const [extendMenu, setExtendMenu] = useState(false);

  useEffect(() => {
    gsap.to(".headerLinks__Container", { opacity: 1, y: 0, duration: 0.1 });

    setIndexLInk(props.pageIndex);
  }, [props.pageIndex]);

  useEffect(() => {}, []);

  const controlHeader = () => {
    menuOpen == "none" ? setMenuOpen("flex") : setMenuOpen("none");
    menuIcon == Icons.MenuIcon
      ? setMenuIcon(Icons.CloseIcon)
      : setMenuIcon(Icons.MenuIcon);
  };

  const controlHeaderIndex = () => {
    if (indexLInk == 0) {
      return (
        <HeaderLinks $show={menuOpen}>
          <HeaderLink>
            <Link to="/" className="headerLink index">
              Fonte
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="ministerios" className="headerLink">
              Ministérios
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/recursos" className="headerLink">
              Recursos
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/ofertas" className="headerLink">
              Contribua
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/contato" className="headerLink">
              Contato
            </Link>
          </HeaderLink>
          <div className="divisor"></div>
          <HeaderLink>
            <Link className="helpPageLink" to={"/ajuda"}>
              <ButtonWithLink
                bgColor="#1c7ec2"
                textColor="#FFFFFF"
                textContent="Precisa de Ajuda?"
                href=""
                textSize="1rem"
                click={() => null}
              />
            </Link>
          </HeaderLink>
        </HeaderLinks>
      );
    } else if (indexLInk == 1) {
      return (
        <HeaderLinks $show={menuOpen}>
          <HeaderLink>
            <Link to="/" className="headerLink">
              Fonte
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="ministerios" className="headerLink index">
              Ministérios
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/recursos" className="headerLink">
              Recursos
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/ofertas" className="headerLink">
              Contribua
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/contato" className="headerLink">
              Contato
            </Link>
          </HeaderLink>
          <div className="divisor"></div>
          <HeaderLink>
            <Link className="helpPageLink" to={"/ajuda"}>
              <ButtonWithLink
                bgColor="#1c7ec2"
                textColor="#FFFFFF"
                textContent="Precisa de Ajuda?"
                href=""
                textSize="1rem"
                click={() => null}
              />
            </Link>
          </HeaderLink>
        </HeaderLinks>
      );
    } else if (indexLInk == 2) {
      return (
        <HeaderLinks $show={menuOpen}>
          <HeaderLink>
            <Link to="/" className="headerLink">
              Fonte
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="ministerios" className="headerLink">
              Ministérios
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/recursos" className="headerLink index">
              Recursos
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/ofertas" className="headerLink ">
              Contribua
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/contato" className="headerLink">
              Contato
            </Link>
          </HeaderLink>
          <div className="divisor"></div>
          <HeaderLink>
            <Link className="helpPageLink" to={"/ajuda"}>
              <ButtonWithLink
                bgColor="#1c7ec2"
                textColor="#FFFFFF"
                textContent="Precisa de Ajuda?"
                href=""
                textSize="1rem"
                click={() => null}
              />
            </Link>
          </HeaderLink>
        </HeaderLinks>
      );
    } else if (indexLInk == 3) {
      return (
        <HeaderLinks $show={menuOpen}>
          <HeaderLink>
            <Link to="/" className="headerLink">
              Fonte
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="ministerios" className="headerLink">
              Ministérios
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/recursos" className="headerLink">
              Recursos
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/ofertas" className="headerLink index">
              Contribua
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/contato" className="headerLink">
              Contato
            </Link>
          </HeaderLink>
          <div className="divisor"></div>
          <HeaderLink>
            <Link className="helpPageLink" to={"/ajuda"}>
              <ButtonWithLink
                bgColor="#1c7ec2"
                textColor="#FFFFFF"
                textContent="Precisa de Ajuda?"
                href=""
                textSize="1rem"
                click={() => null}
              />
            </Link>
          </HeaderLink>
        </HeaderLinks>
      );
    } else if (indexLInk == 4) {
      return (
        <HeaderLinks $show={menuOpen}>
          <HeaderLink>
            <Link to="/" className="headerLink">
              Fonte
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="ministerios" className="headerLink">
              Ministérios
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/recursos" className="headerLink">
              Recursos
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/ofertas" className="headerLink">
              Contribua
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/contato" className="headerLink index">
              Contato
            </Link>
          </HeaderLink>
          <div className="divisor"></div>
          <HeaderLink>
            <Link className="helpPageLink" to={"/ajuda"}>
              <ButtonWithLink
                bgColor="#1c7ec2"
                textColor="#FFFFFF"
                textContent="Precisa de Ajuda?"
                href=""
                textSize="1rem"
                click={() => null}
              />
            </Link>
          </HeaderLink>
        </HeaderLinks>
      );
    }
  };

  return (
    <HeaderContainer>
      <Link to={"/login"}>
        <Logo src={LogoImage} alt="" />
      </Link>
      <HeaderLinksContainer className="headerLinks__Container">
        <HeaderControl src={menuIcon} onClick={() => controlHeader()} />
        {controlHeaderIndex()}
      </HeaderLinksContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  pageIndex: PropTypes.number.isRequired,
};

export default Header;

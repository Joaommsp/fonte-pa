import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { gsap } from "gsap";

import LogoImage from "../../assets/images/oficial/logo.png";

import ButtonLink from "../ButtonLink";

import MenuIcon from "../../assets/images/svg/icons/menu-icon.svg";
import CloseMenuIcon from "../../assets/images/svg/icons/close-icon.svg";
import ArrowDownIcon from "../../assets/images/svg/icons/arrow-down-icon.svg";

import {
  HeaderContainer,
  Logo,
  HeaderLinksContainer,
  HeaderLinks,
  HeaderLink,
  HeaderControl,
  CalltoActionContainer,
  SubLinks,
  SubLink,
} from "./styles";

const Header = (props) => {
  const [indexLInk, setIndexLInk] = useState();
  const [menuOpen, setMenuOpen] = useState("none");
  const [menuIcon, setMenuIcon] = useState(MenuIcon);
  const [extendMenu, setExtendMenu] = useState(false);

  useEffect(() => {
    gsap.to(".headerLinks__Container", { opacity: 1, y: 0, duration: 0.1 });

    setIndexLInk(props.pageIndex);
  }, [props.pageIndex]);

  useEffect(() => {}, []);

  const controlHeader = () => {
    menuOpen == "none" ? setMenuOpen("flex") : setMenuOpen("none");
    menuIcon == MenuIcon ? setMenuIcon(CloseMenuIcon) : setMenuIcon(MenuIcon);
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
          <HeaderLink onMouseLeave={() => setExtendMenu(false)}>
            <span
              className="headerLink"
              onMouseEnter={() => setExtendMenu(true)}
              onClick={() => setExtendMenu(true)}
            >
              Ministérios
              <img src={ArrowDownIcon} alt="" />
            </span>
            {extendMenu && (
              <SubLinks>
                <SubLink>
                  <Link to={"/ministerios"} className="headerSubLink">
                    Sobre
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/escolabiblica" className="headerSubLink">
                    Escola Bíblica
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/infantil" className="headerSubLink">
                    Infantil
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/louvor" className="headerSubLink">
                    Louvor
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/casais" className="headerSubLink">
                    Casais
                  </Link>
                </SubLink>
              </SubLinks>
            )}
          </HeaderLink>
          <HeaderLink>
            <Link to="/ajuda" className="headerLink">
              Ajuda
            </Link>
          </HeaderLink>
        </HeaderLinks>
      );
    } else if (indexLInk == 1) {
      return (
        <HeaderLinks $show={menuOpen}>
          <HeaderLink>
            <Link to="/" className="headerLink ">
              Fonte
            </Link>
          </HeaderLink>
          <HeaderLink onMouseLeave={() => setExtendMenu(false)}>
            <span
              className="headerLink"
              onMouseEnter={() => setExtendMenu(true)}
              onClick={() => setExtendMenu(true)}
            >
              Ministérios
              <img src={ArrowDownIcon} alt="" />
            </span>
            {extendMenu && (
              <SubLinks>
                <SubLink>
                  <Link to={"/ministerios"} className="headerSubLink">
                    Sobre
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/escolabiblica" className="headerSubLink">
                    Escola Bíblica
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/infantil" className="headerSubLink">
                    Infantil
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/louvor" className="headerSubLink">
                    Louvor
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/casais" className="headerSubLink">
                    Casais
                  </Link>
                </SubLink>
              </SubLinks>
            )}
          </HeaderLink>
          <HeaderLink>
            <Link to="/ajuda" className="headerLink index">
              Ajuda
            </Link>
          </HeaderLink>
        </HeaderLinks>
      );
    } else if (indexLInk == 2) {
      return (
        <HeaderLinks $show={menuOpen}>
          <HeaderLink>
            <Link to="/" className="headerLink ">
              Fonte
            </Link>
          </HeaderLink>
          <HeaderLink onMouseLeave={() => setExtendMenu(false)}>
            <span
              className="headerLink"
              onMouseEnter={() => setExtendMenu(true)}
              onClick={() => setExtendMenu(true)}
            >
              Ministérios
              <img src={ArrowDownIcon} alt="" />
            </span>
            {extendMenu && (
              <SubLinks>
                <SubLink>
                  <Link to={"/ministerios"} className="headerSubLink">
                    Sobre
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/escolabiblica" className="headerSubLink">
                    Escola Bíblica
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/infantil" className="headerSubLink">
                    Infantil
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                   <Link to="/louvor" className="headerSubLink">
                    Louvor
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/casais" className="headerSubLink">
                    Casais
                  </Link>
                </SubLink>
              </SubLinks>
            )}
          </HeaderLink>
          <HeaderLink>
            <Link to="/ajuda" className="headerLink index">
              Ajuda
            </Link>
          </HeaderLink>
        </HeaderLinks>
      );
    } else if (indexLInk == 3) {
      return (
        <HeaderLinks $show={menuOpen}>
          <HeaderLink>
            <Link to="/" className="headerLink ">
              Fonte
            </Link>
          </HeaderLink>
          <HeaderLink onMouseLeave={() => setExtendMenu(false)}>
            <span
              className="headerLink index"
              onMouseEnter={() => setExtendMenu(true)}
              onClick={() => setExtendMenu(true)}
            >
              Ministérios
              <img src={ArrowDownIcon} alt="" />
            </span>
            {extendMenu && (
              <SubLinks>
                <SubLink>
                  <Link to={"/ministerios"} className="headerSubLink">
                    Sobre
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/escolabiblica" className="headerSubLink">
                    Escola Bíblica
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/infantil" className="headerSubLink">
                    Infantil
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/louvor" className="headerSubLink">
                    Louvor
                  </Link>
                </SubLink>
                <SubLink>
                  {" "}
                  <Link to="/casais" className="headerSubLink">
                    Casais
                  </Link>
                </SubLink>
              </SubLinks>
            )}
          </HeaderLink>
          <HeaderLink>
            <Link to="/ajuda" className="headerLink">
              Ajuda
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
      </HeaderLinksContainer>{" "}
      <CalltoActionContainer>
        <ButtonLink
          bgColor="#E5E5E5"
          textColor="#0F0F0F"
          textContent="Como chegar?"
          href="https://www.google.com/maps/place/Igreja+Batista+Fonte/@-9.400342,-38.2472392,17z/data=!3m1!4b1!4m6!3m5!1s0x7093097213da37b:0xf2d4508b9d89bd1!8m2!3d-9.400342!4d-38.2446643!16s%2Fg%2F11ggt1n4tw?entry=tts"
          target="_blank"
          textSize=".9rem"
          click={() => null}
        />
      </CalltoActionContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  pageIndex: PropTypes.number.isRequired,
};

export default Header;

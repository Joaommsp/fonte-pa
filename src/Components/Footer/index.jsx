import MapsIcon from "../../assets/images/svg/icons/maps-icon.svg"

import {
  FooterContainer,
  LogoContainer,
  AdressContainer,
  Logo,
  GoogleMapsLink
} from "./styles";

import LogoImage from "../../assets/images/oficial/banner.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo src={LogoImage} />
      </LogoContainer>
      <AdressContainer>
        <address>
          <span> R. Mal. Deodoro da Fonseca</span>
          <span>N° 204</span>
          <span>Cleriston Andrade</span>
          <span>Paulo Afonso - BA</span>
        </address>
      </AdressContainer>
      <GoogleMapsLink href="#" > <img src={MapsIcon} alt="" /> </GoogleMapsLink>
    </FooterContainer>
  );
};

export default Footer;

// R. Mal. Deodoro da Fonseca, 204 - Cleriston Andrade, Paulo Afonso - BA, 48603-310

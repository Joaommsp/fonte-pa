import MapsIcon from "../../assets/images/svg/icons/maps-icon.svg";

import {
  FooterContainer,
  AdressContainer,
  Logo,
  GoogleMapsLink,
  Passage,
} from "./styles";

import LogoImage from "../../assets/images/oficial/banner.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <AdressContainer>
        <p>Endereço</p>
        <span> R. Mal. Deodoro da Fonseca</span>
        <span>N° 204</span>
        <span>Cleriston Andrade</span>
        <span>Paulo Afonso - BA</span>
      </AdressContainer>
      <GoogleMapsLink href="#">
        {" "}
        <img src={MapsIcon} alt="" />{" "}
      </GoogleMapsLink>
      <AdressContainer>
        <p>Redes Sociais</p>
        <a href="">Instagram</a>
        <a href="">Facebook</a>
        <a href="">Youtube</a>
        <a href="">Telegram</a>
      </AdressContainer>
      <Passage className="passage">
        No qual todo o edifício é ajustado e cresce para tornar-se um santuário
        santo no Senhor. - Efésios 2:21
      </Passage>
    </FooterContainer>
  );
};

export default Footer;

// R. Mal. Deodoro da Fonseca, 204 - Cleriston Andrade, Paulo Afonso - BA, 48603-310

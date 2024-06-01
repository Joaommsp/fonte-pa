import MapsIcon from "../../assets/images/google-maps-logo.png";
import WazeIcon from "../../assets/images/waze-logo.png";
import Icons from "../../assets/images/svg/icons/iconsExport";

import {
  FooterContainer,
  AdressContainer,
  GoogleMapsLink,
  Passage,
  MapAppsContainer,
  WazeLink,
} from "./styles";

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
      <MapAppsContainer>
        <GoogleMapsLink
          href="https://www.google.com/maps/place/Igreja+Batista+Fonte/@-9.400342,-38.2472392,17z/data=!3m1!4b1!4m6!3m5!1s0x7093097213da37b:0xf2d4508b9d89bd1!8m2!3d-9.400342!4d-38.2446643!16s%2Fg%2F11ggt1n4tw?entry=tts"
          target="_blank"
        >
          {" "}
          <img src={MapsIcon} alt="" />{" "}
        </GoogleMapsLink>
        <WazeLink
          href="https://www.google.com/maps/place/Igreja+Batista+Fonte/@-9.400342,-38.2472392,17z/data=!3m1!4b1!4m6!3m5!1s0x7093097213da37b:0xf2d4508b9d89bd1!8m2!3d-9.400342!4d-38.2446643!16s%2Fg%2F11ggt1n4tw?entry=tts"
          target="_blank"
        >
          {" "}
          <img src={WazeIcon} alt="" />{" "}
        </WazeLink>
      </MapAppsContainer>
      <AdressContainer>
        <p>Redes Sociais</p>
        <a href="https://www.instagram.com/ibfonte.pa/" target="_blank">
          <img src={Icons.InstagramIcon} alt="" /> Instagram
        </a>
        <a href="https://www.facebook.com/igrejafonte.pa/" target="_blank">
          <img src={Icons.FacebookIcon} alt="" /> Facebook
        </a>
        <a href="https://www.youtube.com/@igrejafontepa" target="_blank">
          <img src={Icons.YoutubeIcon} alt="" /> Youtube
        </a>
        <a href="https://t.me/+RiV4i1GT9Mb4ohxG" target="_blank">
          <img src={Icons.TelegramIconLight} alt="" /> Telegram
        </a>
      </AdressContainer>
      <Passage className="passage">
        &quot;No qual todo o edifício é ajustado e cresce para tornar-se um
        santuário santo no Senhor.&quot; - Efésios 2:21
      </Passage>
    </FooterContainer>
  );
};

export default Footer;

// R. Mal. Deodoro da Fonseca, 204 - Cleriston Andrade, Paulo Afonso - BA, 48603-310

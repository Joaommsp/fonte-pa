import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import InstagramIcon from "../../assets/images/svg/icons/instagram-icon-dark.svg";
import FacebookIcon from "../../assets/images/svg/icons/facebook-icon-dark.svg";
import YoutubeIcon from "../../assets/images/svg/icons/youtube-icon-dark.svg";
import WhatsAppIcon from "../../assets/images/svg/icons/whatsapp-icon.svg";
import HelpImageImage from "../../assets/images/svg/helpImage.svg";

import {
  HelpContainer,
  HelpTextContent,
  HelpImageContainer,
  HelpTitle,
  HelpSubTitle,
  HelpImage,
  WhatsAppLInk,
  SocialMedia,
  SocialMediaLinks,
  SocilaMediaLink,
  FormLink
} from "./styles";

function Help() {
  return (
    <>
      <Header pageIndex={1} />
      <HelpContainer>
        <HelpTextContent>
          <HelpTitle>Precisa de Ajuda ?</HelpTitle>
          <HelpSubTitle>
            Se precisar de apoio para lidar com questões como ansiedade, medo,
            depressão, problemas familiares , você pode entrar em contato
            conosco para receber aconselhamento baseado na Bíblia da equipe de
            conselheiros da Igreja Batista Fonte.{" "}
            <strong>Teremos o prazer em te ajudar!</strong>
          </HelpSubTitle>
          <FormLink>

          </FormLink>
        </HelpTextContent>

        <HelpImageContainer>
          <HelpImage src={HelpImageImage} />
        </HelpImageContainer>
        <WhatsAppLInk href="" target="_blank">
          <img src={WhatsAppIcon} alt="" />
          Fale Conosco
        </WhatsAppLInk>

        <SocialMedia>
          <SocialMediaLinks>
            <SocilaMediaLink>
              {" "}
              <a href="">
                <img src={InstagramIcon} alt="" />{" "}
              </a>
            </SocilaMediaLink>
            <SocilaMediaLink>
              {" "}
              <a href="">
                <img src={FacebookIcon} alt="" />{" "}
              </a>
            </SocilaMediaLink>
            <SocilaMediaLink>
              {" "}
              <a href="">
                <img src={YoutubeIcon} alt="" />{" "}
              </a>{" "}
            </SocilaMediaLink>
          </SocialMediaLinks>
        </SocialMedia>
      </HelpContainer>
      <Footer></Footer>
    </>
  );
}

export default Help;

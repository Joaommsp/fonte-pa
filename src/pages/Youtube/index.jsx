import Header from "../../Components/Header";

import WhatsAppIcon from "../../assets/images/svg/icons/whatsapp-icon.svg";
import InstagramIcon from "../../assets/images/svg/icons/instagram-icon.svg";
import FacebookIcon from "../../assets/images/svg/icons/facebook-icon.svg";
import YoutubeIcon from "../../assets/images/svg/icons/youtube-icon.svg";

import YoutubeMock from "../../assets/images/youtube-mockup.png";

import {
  YoutubeContainer,
  TriangleTop,
  TriangleBottom,
  SocialMedia,
  SocialMediaLinks,
  SocilaMediaLink,
  WhatsAppLInk,
  MediaDescription,
  MediaElement,
  MediaImage,
  MediaTitle,
  YoutubeContent,
  TextContent,
  YoutubeTitle,
  YoutubeDescription,
  YoutubeList,
  PhoneMockUp,
  YoutubeLink,
} from "./styles";

const Youtube = () => {
  return (
    <>
      <Header pageIndex={0}></Header>
      <YoutubeContainer>
        <MediaElement>
          <MediaDescription>
            <MediaTitle>Youtube</MediaTitle>
          </MediaDescription>
          <MediaImage src={YoutubeIcon} />
        </MediaElement>

        <YoutubeContent>
          <TextContent>
            <YoutubeTitle>Recursos em Video</YoutubeTitle>
            <YoutubeDescription>
              Acompanhe nosso canal no Youtube com videos semanais
            </YoutubeDescription>
            <YoutubeList>
              <li>Palavras</li>
              <li>Estudo bíblico</li>
              <li>Eventos</li>
              <li>Ministérios</li>
              <li className="listAside__Content">
                
              </li>
            </YoutubeList>
            <YoutubeLink href="#">
              <img src={YoutubeIcon} alt="" />
              Acesse
            </YoutubeLink>
          </TextContent>
          <PhoneMockUp src={YoutubeMock}></PhoneMockUp>
        </YoutubeContent>

        <WhatsAppLInk href="" target="_blank">
          <img src={WhatsAppIcon} alt="" />
          Fale Conosco
        </WhatsAppLInk>


        <TriangleTop></TriangleTop>
        <TriangleBottom></TriangleBottom>
      </YoutubeContainer>
    </>
  );
};

export default Youtube;

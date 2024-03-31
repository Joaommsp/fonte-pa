import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import WhatsAppIcon from "../../assets/images/svg/icons/whatsapp-icon.svg";
import SpotifyIcon from "../../assets/images/svg/icons/spotify-icon-dark.svg";
import SpotifyMock from "../../assets/images/spotify-mock.png";

import {
  SpotifyContainer,
  TriangleTop,
  TriangleBottom,
  WhatsAppLInk,
  SpotifyContent,
  TextContent,
  SpotifyTitle,
  SpotifyDescription,
  PhoneMockUp,
  SpotifyLink,
} from "./styles";

const Spotify = () => {
  return (
    <>
      <Header pageIndex={0}></Header>
      <SpotifyContainer>
        <SpotifyContent>
          <TextContent>
            <SpotifyTitle>Recursos em Audio</SpotifyTitle>
            <SpotifyDescription>
              Acompanhe nosso canal no Spotify
            </SpotifyDescription>
            <div className="videoContainer">
              <iframe
                src="https://podcasters.spotify.com/pod/show/igrejafontepa/embed/episodes/Desfrute-da-vida-e-se-lembre-de-Deus---Eclesiastes-11-7---12-17--Mensagem-1818--Thiago-Zambelli-e29a2md"
                height="102px"
                width="700px"
                frameBorder="0"
                scrolling="no"
              ></iframe>
              <iframe
                src="https://podcasters.spotify.com/pod/show/igrejafontepa/embed/episodes/Desfrute-da-vida-enquanto-h-vida---Eclesiastes-9-1-10--Mensagem-1418--T--Zambelli-e29a25a/a-aabqpfl"
                height="102px"
                width="700px"
                frameBorder="0"
                scrolling="no"
              ></iframe>
              <iframe
                src="https://podcasters.spotify.com/pod/show/igrejafontepa/embed/episodes/A-postura-correta-neste-mundo-catico---Eclesiastes-4-1-6--Mensagem-618--T--Zambelli-e299udv/a-aabqd7u"
                height="102px"
                width="700px"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
            <SpotifyLink href="#">
              <img src={SpotifyIcon} alt="" />
              Acesse
            </SpotifyLink>
          </TextContent>
          <PhoneMockUp src={SpotifyMock}></PhoneMockUp>
        </SpotifyContent>

        <WhatsAppLInk href="" target="_blank">
          <img src={WhatsAppIcon} alt="" />
          Fale Conosco
        </WhatsAppLInk>

        <TriangleTop></TriangleTop>
        <TriangleBottom></TriangleBottom>
        <Footer></Footer>
      </SpotifyContainer>
    </>
  );
};

export default Spotify;

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import WhatsAppIcon from "../../assets/images/svg/icons/whatsapp-icon.svg";
import YoutubeIcon from "../../assets/images/svg/icons/youtube-icon.svg";

import YoutubeMock from "../../assets/images/youtube-mockup.png";

import {
  YoutubeContainer,
  TriangleTop,
  TriangleBottom,
  WhatsAppLInk,
  YoutubeContent,
  TextContent,
  YoutubeTitle,
  YoutubeDescription,
  PhoneMockUp,
  YoutubeLink,
} from "./styles";

const Youtube = () => {
  return (
    <>
      <Header pageIndex={0}></Header>
      <YoutubeContainer>
        <YoutubeContent>
          <TextContent>
            <YoutubeTitle>Recursos em Video</YoutubeTitle>
            <YoutubeDescription>
              Acompanhe nosso canal no Youtube com videos semanais
            </YoutubeDescription>
            <div className="videoContainer">
              <iframe
                width="700"
                height="415"
                src="https://www.youtube.com/embed/5hHd9VqNor0?si=dQYbjnnblucmcrir"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
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
        <Footer></Footer>
      </YoutubeContainer>
    </>
  );
};

export default Youtube;

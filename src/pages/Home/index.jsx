import Header from "../../Components/Header";
import Card from "../../Components/Card";
import CardReverse from "../../Components/CardReverse";
import Media from "../../Components/Media";
import Footer from "../../Components/Footer";

import LogoImage from "../../assets/images/oficial/banner.svg";
import WhatsAppIcon from "../../assets/images/svg/icons/whatsapp-icon.svg";
import InstagramIcon from "../../assets/images/svg/icons/instagram-icon.svg";
import FacebookIcon from "../../assets/images/svg/icons/facebook-icon.svg";
import YoutubeIcon from "../../assets/images/svg/icons/youtube-icon.svg";
import SpotifyIcon from "../../assets/images/svg/icons/spotify-icon.svg"
import TelegramIcon from "../../assets/images/svg/icons/telegram-icon.svg"

import CultoImage from "../../assets/images/oficial/cultos.png";
import KoinoImage from "../../assets/images/koino.jpg";
import ServeImage from "../../assets/images/serve.png";

import {
  HomeContainer,
  BannerContainer,
  Banner,
  BannerTextContent,
  BannerVisualsContent,
  LogoContainer,
  Logo,
  HashTags,
  Title,
  SubTitle,
  WhatsAppLInk,
  SocialMedia,
  SocialMediaLinks,
  SocilaMediaLink,
  TriangleTop,
  TriangleBottom,
  CardsContainer,
  MediaContainer,
} from "./styles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeContainer>
      <Header pageIndex={0} />
      <BannerContainer>
        <Banner className="banner">
          <BannerVisualsContent>
            <LogoContainer>
              <Logo src={LogoImage} alt="" />
              <HashTags>
                <span>#fidelidade</span>
                <span>#integridade</span>
                <span>#pluralidade</span>
                <span>#pessoalidade</span>
              </HashTags>
            </LogoContainer>
          </BannerVisualsContent>

          <BannerTextContent>
            <Title>Bem-vindo a Fonte!</Title>
            <SubTitle>
              Fazer, equipar e enviar discípulos de Cristo é a nossa missão!
            </SubTitle>
          </BannerTextContent>

          <CardsContainer>
            <Card
              title="Cultos"
              text="Aos Domingos às 18h30 - Louve e conheça a Deus segundo as Escrituras Sagradas"
              href="#"
              linkText="Participe"
              image={CultoImage}
            ></Card>
            <CardReverse
              title="Grupos de Estudo Bíblico "
              text="Koinonias | Reuniões nos lares em diferentes dias e locais. Junte-se a um grupo!"
              href="#"
              linkText="Saiba Mais"
              image={KoinoImage}
            ></CardReverse>
            <Card
              title="Sirva junto à Igreja Fonte"
              text="Queremos contar com seus dons e talentos para servir nosso Deus."
              href="#"
              linkText="Participe"
              image={ServeImage}
            ></Card>
          </CardsContainer>

          <MediaContainer>
            <Link to="/videos">
              <Media
                title="Youtube"
                descripion="Nossos recursos em videos"
                image={YoutubeIcon}
                bgColor="#FB0008"
              ></Media>
            </Link>
             <a href="#">
              <Media
                title="Spotify"
                descripion="Nossos recursos em áudio"
                image={SpotifyIcon}
                bgColor="#3ED866"
              ></Media>
            </a>
            <a href="#">
              <Media
                title="Telegram"
                descripion="Nosso canal de divulgações"
                image={TelegramIcon}
                bgColor="#39A9E4"
              ></Media>
            </a>
          </MediaContainer>

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
        </Banner>

        <TriangleTop></TriangleTop>
        <TriangleBottom></TriangleBottom>
      </BannerContainer>

      <Footer></Footer>
    </HomeContainer>
  );
};

export default Home;

import { useEffect } from "react";

import Header from "../../Components/Header";
import Card from "../../Components/Card";
import Media from "../../Components/Media";
import Footer from "../../Components/Footer";
import ButtonLink from "../../Components/ButtonLink";
import PostsSection from "../../Components/PostsSection";

import LogoImage from "../../assets/images/oficial/banner.svg";
import WhatsAppIcon from "../../assets/images/svg/icons/whatsapp-icon.svg";
import InstagramIcon from "../../assets/images/svg/icons/instagram-icon.svg";
import FacebookIcon from "../../assets/images/svg/icons/facebook-icon.svg";
import YoutubeIcon from "../../assets/images/svg/icons/youtube-icon.svg";
import TelegramIcon from "../../assets/images/svg/icons/telegram-icon.svg";
import ArrowRight from "../../assets/images/svg/icons/arrow-right-icon.svg";
import YoutubeDarkIcon from "../../assets/images/svg/icons/youtube-icon-dark.svg";
import SpotifyDarkIcon from "../../assets/images/svg/icons/spotify-icon-dark.svg";

import LoyaltyIcon from "../../assets/images/svg/icons/loyalty-icon.svg";
import IntegrityIcon from "../../assets/images/svg/icons/integrity-icon.svg";
import DivertisyIcon from "../../assets/images/svg/icons/diversity-icon.svg";
import PersonalityIcon from "../../assets/images/svg/icons/psychology-icon.svg";

import CultoImage from "../../assets/images/cultos.png";
import KoinoImage from "../../assets/images/koino.png";
import ServeImage from "../../assets/images/serve.png";
import adviceImage from "../../assets/images/aconselhamento.png";
import EbdImage from "../../assets/images/ebd.png";
import DiscipuladoImage from "../../assets/images/discipulado.png";

import MockUpPhone from "../../assets/images/smartPhone-mockup.png";

import {
  HomeContainer,
  BannerContainer,
  Banner,
  BannerTextContent,
  TextContent,
  BannerVisualsContent,
  LogoContainer,
  Logo,
  HashTags,
  Hashtag,
  SubTitle,
  WhatsAppLInk,
  SocialMedia,
  SocialMediaLinks,
  SocilaMediaLink,
  Assignment,
  CardsContainer,
  CardsSubTitle,
  Cards,
  MediaContainer,
  MockUpContainer,
  MockUpImage,
  MediaTextContent,
  MediaTitle,
  MediaCardsContainer,
  ComunityContainer,
  ComunityTitle,
  ComunityDescription,
  PostsSectionContainer,
  PostsSectionTitle,
} from "./styles";

import "react-image-gallery/styles/css/image-gallery.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeContainer>
      <Header pageIndex={0} />
      <BannerContainer>
        <Banner className="banner">
          <BannerVisualsContent>
            <LogoContainer>
              <Logo src={LogoImage} alt="" />

              <SocialMedia>
                <SocialMediaLinks>
                  <SocilaMediaLink>
                    {" "}
                    <a
                      href="https://www.instagram.com/ibfonte.pa/"
                      target="_blank"
                    >
                      <img src={InstagramIcon} alt="" />{" "}
                    </a>
                  </SocilaMediaLink>
                  <SocilaMediaLink>
                    {" "}
                    <a
                      href="https://www.facebook.com/igrejafonte.pa/"
                      target="_blank"
                    >
                      <img src={FacebookIcon} alt="" />{" "}
                    </a>
                  </SocilaMediaLink>
                  <SocilaMediaLink>
                    {" "}
                    <a
                      href="https://www.youtube.com/@igrejafontepa"
                      target="_blank"
                    >
                      <img src={YoutubeIcon} alt="" />{" "}
                    </a>{" "}
                  </SocilaMediaLink>
                </SocialMediaLinks>
              </SocialMedia>

              <Assignment>image from vecteezy.com</Assignment>
            </LogoContainer>
          </BannerVisualsContent>
          <HashTags>
            <Hashtag>
              <img src={LoyaltyIcon} alt="" />
              <span>#fidelidade</span>
              {/* <span>#integridade</span>
                  <span>#pluralidade</span>
                  <span>#pessoalidade</span> */}
            </Hashtag>

            <Hashtag>
              <img src={IntegrityIcon} alt="" />
              <span>#integridade</span>
              {/* <span>#integridade</span>
                  <span>#pluralidade</span>
                  <span>#pessoalidade</span> */}
            </Hashtag>

            <Hashtag>
              <img src={DivertisyIcon} alt="" />
              <span>#pluralidade</span>
              {/* <span>#integridade</span>
                  <span>#pluralidade</span>
                  <span>#pessoalidade</span> */}
            </Hashtag>
            <Hashtag>
              <img src={PersonalityIcon} alt="" />
              <span>#pessoalidade</span>
              {/* <span>#integridade</span>
                  <span>#pluralidade</span>
                  <span>#pessoalidade</span> */}
            </Hashtag>
          </HashTags>

          <BannerTextContent>
            <TextContent>
              <SubTitle>
                Fazer, equipar e enviar discípulos de Cristo é a nossa{" "}
                <strong>missão!</strong>
              </SubTitle>
              <ButtonLink
                bgColor="#1C7EC2"
                textContent="Conheça-nos"
                textColor="#FFFFFF"
                textSize="1.2rem"
                click={() => {
                  window.scrollBy(0, 500);
                }}
              />
            </TextContent>
          </BannerTextContent>
          <CardsContainer id="sobre">
            <img src={ArrowRight} alt="" className="arrowRight" />
            <CardsSubTitle>
              Saiba mais sobre a <strong>Fonte Paulo Afonso</strong>
            </CardsSubTitle>
            <Cards>
              <Card
                title="Cultos"
                text="Aos domingos | 18h30 - Louve e conheça a Deus segundo as Escrituras Sagradas."
                image={CultoImage}
              ></Card>
              <Card
                title="Escola Bíblica"
                text="Aos domingos | 09h30 – Do aprendizado bíblico à vida cristã piedosa."
                image={EbdImage}
              ></Card>
              <Card
                title="Koinonias"
                text="Diferentes dias da semana | Reuniões nos lares para comunhão, oração e aprendizado da Palavra. "
                image={KoinoImage}
              ></Card>
              <Card
                title="Aconselhamento bíblico"
                text="Com agendamento | Para aqueles que precisam e querem orientação bíblica para os desafios e dificuldades da vida."
                image={adviceImage}
              ></Card>
              <Card
                title="Discipulado"
                text="Faça parte de um grupo | Irmãos que juntos buscam conhecer o Senhor e caminham para o mesmo propósito."
                image={DiscipuladoImage}
              ></Card>
            </Cards>
          </CardsContainer>

          <PostsSectionContainer>
            <PostsSectionTitle>Últimas Publicações</PostsSectionTitle>
            <PostsSection></PostsSection>
          </PostsSectionContainer>

          <MediaContainer>
            <MockUpContainer>
              <MockUpImage src={MockUpPhone} />
            </MockUpContainer>
            <MediaTextContent>
              <MediaTitle>
                Acompanhe a Fonte em <strong>qualquer lugar</strong>
              </MediaTitle>
              <MediaCardsContainer>
                <a
                  href="https://www.youtube.com/@igrejafontepa"
                  target="_blank"
                >
                  <Media
                    title="Youtube"
                    descripion="Nossos recursos em video"
                    image={YoutubeDarkIcon}
                    bgColor="#C21010"
                    content="Pregações, aulas e eventos que marcam o nosso aprendizado da Palavra de Deus."
                  ></Media>
                </a>
                <a
                  href="https://podcasters.spotify.com/pod/show/igrejafontepa"
                  target="_blank"
                >
                  <Media
                    title="Spotify"
                    descripion="Nossos recursos em áudio"
                    image={SpotifyDarkIcon}
                    bgColor="#064420"
                    content="Escute as pregações e aulas que foram ensinadas na Fonte."
                  ></Media>
                </a>
                <a href="https://t.me/+RiV4i1GT9Mb4ohxG" target="_blank">
                  <Media
                    title="Telegram"
                    descripion="Nosso canal de divulgações"
                    image={TelegramIcon}
                    content="Receba diretamente no seu dispositivo eletrônico nossos últimos recursos de ensino da Palavra de Deus."
                    bgColor="#1C7EC2"
                  ></Media>
                </a>
              </MediaCardsContainer>
            </MediaTextContent>
          </MediaContainer>

          <ComunityContainer>
            <ComunityTitle>Igreja Batista Fonte</ComunityTitle>
            <ComunityDescription>
              Somos uma nova e crescente <strong>comunidade cristã</strong>,
              desejosa em ver o caráter de Cristo espelhado e espalhado
              especialmente por toda a região do semi-árido brasileiro, conforme
              as Escrituras Sagradas.
            </ComunityDescription>
            {/* <ImageGallery items={images} /> */}
          </ComunityContainer>

          <WhatsAppLInk
            href="https://api.whatsapp.com/send/?phone=5575999706296&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <img src={WhatsAppIcon} alt="" />
            Fale Conosco
          </WhatsAppLInk>
        </Banner>
      </BannerContainer>

      <Footer></Footer>
    </HomeContainer>
  );
};

export default Home;

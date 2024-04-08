import Header from "../../Components/Header";
import Card from "../../Components/Card";
import Media from "../../Components/Media";
import Footer from "../../Components/Footer";
import ButtonLink from "../../Components/ButtonLink";

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

import CultoImage from "../../assets/images/oficial/cultos.png";
import KoinoImage from "../../assets/images/koino.png";
import ServeImage from "../../assets/images/serve.png";
import QuixabaImage from "../../assets/images/quixaba.png";
import EbdImage from "../../assets/images/ebd.png";

import MockUpPhone from "../../assets/images/smartPhone-mockup.png";

import ComunityImage1 from "../../assets/images/comunity1.jpg"
import ComunityImage2 from "../../assets/images/comunity2.jpg"
import ComunityImage3 from "../../assets/images/comunity3.jpg"
import ComunityImage4 from "../../assets/images/comunity4.jpg"
import ComunityImage5 from "../../assets/images/comunity5.jpg"
import ComunityImage6 from "../../assets/images/comunity6.jpg"
import ComunityImage7 from "../../assets/images/comunity7.jpg"

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
} from "./styles";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Home = () => {
  const images = [
    {
      original: ComunityImage1,
      thumbnail: ComunityImage1,
    },
    {
      original: ComunityImage2,
      thumbnail: ComunityImage2,
    },
    {
      original: ComunityImage3,
      thumbnail: ComunityImage3,
    },
    {
      original: ComunityImage4,
      thumbnail: ComunityImage4,
    },
    {
      original: ComunityImage5,
      thumbnail: ComunityImage5,
    },
    {
      original: ComunityImage6,
      thumbnail: ComunityImage6,
    },
    {
      original: ComunityImage7,
      thumbnail: ComunityImage7,
    },
  ];

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
                href="#sobre"
                textSize="1.2rem"
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
                text="Aos Domingos às 18h30 - Louve e conheça a Deus segundo as Escrituras Sagradas"
                href="#"
                linkText="Participe"
                image={CultoImage}
              ></Card>
              <Card
                title="Escola Bíblica"
                text="Aos domingos | 09h30 - Quando o ensino teológico e prático se encontram.s"
                href="#"
                linkText="Participe"
                image={EbdImage}
              ></Card>
              <Card
                title="Sirva junto à Igreja Fonte"
                text="Queremos contar com seus dons e talentos para servir nosso Deus."
                href="#"
                linkText="Participe"
                image={ServeImage}
              ></Card>
              <Card
                title="Grupos de Estudo Bíblico nos Lares"
                text="Koinonias | Reuniões nos lares em diferentes dias e locais. Junte-se a um grupo!"
                href="#"
                linkText="Participe"
                image={KoinoImage}
              ></Card>
              <Card
                title="Mais Que Um Carpinteiro"
                text="Nossa escola de artes e ofícios no povoado da Quixaba, município de Glória-BA."
                href="#"
                linkText="Conheça"
                image={QuixabaImage}
              ></Card>
            </Cards>
          </CardsContainer>

          <MediaContainer>
            <MockUpContainer>
              <MockUpImage src={MockUpPhone} />
            </MockUpContainer>
            <MediaTextContent>
              <MediaTitle>
                Acompanhe a Fonte em <strong>qualquer lugar</strong>
              </MediaTitle>
              <MediaCardsContainer>
                <a href="#">
                  <Media
                    title="Youtube"
                    descripion="Nossos recursos em videos"
                    image={YoutubeDarkIcon}
                    bgColor="#C21010"
                    content="Pregações, eventos especiais, mensagens e ensinamentos sobre a palavra de Deus."
                  ></Media>
                </a>
                <a href="#">
                  <Media
                    title="Spotify"
                    descripion="Nossos recursos em áudio"
                    image={SpotifyDarkIcon}
                    bgColor="#064420"
                    content="Escute as mensagens que foram pregadas na Fonte. Estudo da Bíblia e aulas em áudio."
                  ></Media>
                </a>
                <a href="#">
                  <Media
                    title="Telegram"
                    descripion="Nosso canal de divulgações"
                    image={TelegramIcon}
                    content="Canal de comunicação e divulgação,  mantenha-se os informado sobre eventos, atividades na igreja"
                    bgColor="#1C7EC2"
                  ></Media>
                </a>
              </MediaCardsContainer>
            </MediaTextContent>
          </MediaContainer>

          <ComunityContainer>
            <ComunityTitle>Igreja Fonte Paulo Afonso</ComunityTitle>
            <ComunityDescription>
              Somos uma nova e crescente <strong>comunidade cristã</strong>, desejosa em ver o
              caráter de Cristo espelhado e espalhado especialmente por toda a
              região do semi-árido brasileiro, conforme as Escrituras Sagradas
            </ComunityDescription>
            {/* <ImageGallery items={images} /> */}
          </ComunityContainer>

          <WhatsAppLInk href="" target="_blank">
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

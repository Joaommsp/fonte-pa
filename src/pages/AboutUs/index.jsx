import { useEffect } from "react";

import Header from "../../Components/Header";
import InfoCard from "../../Components/InfoCard";
import SocialMediaCard from "../../Components/SocialMediaCard";
import Footer from "../../Components/Footer";
import ButtonWithLink from "../../Components/ButtonWithLink";
import PostsSection from "../../Components/PostsSection";

import LogoImage from "../../assets/images/imagens-oficiais/banner.svg";
import Icons from "../../assets/images/svg/icons/iconsExport";
import HomePageImages from "../../assets/images/homePageImagesExport";

import {
  HomeContainer,
  ContentContainer,
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
  SocialMediaLink,
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
  DivisorLine,
  PostsSectionTitle,
} from "./styles";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeContainer>
      <Header pageIndex={0} />
      <ContentContainer>
        <Banner className="banner">
          <BannerVisualsContent>
            <LogoContainer>
              <Logo src={LogoImage} alt="" />

              <SocialMedia>
                <SocialMediaLinks>
                  <SocialMediaLink>
                    {" "}
                    <a
                      href="https://www.instagram.com/ibfonte.pa/"
                      target="_blank"
                    >
                      <img src={Icons.InstagramIcon} alt="" />{" "}
                    </a>
                  </SocialMediaLink>
                  <SocialMediaLink>
                    {" "}
                    <a
                      href="https://www.facebook.com/igrejafonte.pa/"
                      target="_blank"
                    >
                      <img src={Icons.FacebookIcon} alt="" />{" "}
                    </a>
                  </SocialMediaLink>
                  <SocialMediaLink>
                    {" "}
                    <a
                      href="https://www.youtube.com/@igrejafontepa"
                      target="_blank"
                    >
                      <img src={Icons.YoutubeIcon} alt="" />{" "}
                    </a>{" "}
                  </SocialMediaLink>
                </SocialMediaLinks>
              </SocialMedia>

              <Assignment>image from vecteezy.com</Assignment>
            </LogoContainer>
          </BannerVisualsContent>
          <HashTags>
            <Hashtag>
              <img src={Icons.LoyaltyIcon} alt="" />
              <span>#fidelidade</span>
              {/* <span>#integridade</span>
                  <span>#pluralidade</span>
                  <span>#pessoalidade</span> */}
            </Hashtag>

            <Hashtag>
              <img src={Icons.IntegrityIcon} alt="" />
              <span>#integridade</span>
              {/* <span>#integridade</span>
                  <span>#pluralidade</span>
                  <span>#pessoalidade</span> */}
            </Hashtag>

            <Hashtag>
              <img src={Icons.DivertisyIcon} alt="" />
              <span>#pluralidade</span>
              {/* <span>#integridade</span>
                  <span>#pluralidade</span>
                  <span>#pessoalidade</span> */}
            </Hashtag>
            <Hashtag>
              <img src={Icons.PersonalityIcon} alt="" />
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
              <ButtonWithLink
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
            <img src={Icons.ArrowRight} alt="" className="arrowRight" />
            <CardsSubTitle>
              Saiba mais sobre a <strong>Fonte Paulo Afonso</strong>
            </CardsSubTitle>
            <Cards>
              <InfoCard
                title="Cultos"
                text="Aos domingos | 18h30 - Louve e conheça a Deus segundo as Escrituras Sagradas."
                image={HomePageImages.CultoImage}
              ></InfoCard>
              <InfoCard
                title="Escola Bíblica"
                text="Aos domingos | 09h30 – Do aprendizado bíblico à vida cristã piedosa."
                image={HomePageImages.EbdImage}
              ></InfoCard>
              <InfoCard
                title="Koinonias"
                text="Diferentes dias da semana | Reuniões nos lares para comunhão, oração e aprendizado da Palavra. "
                image={HomePageImages.KoinoImage}
              ></InfoCard>
              <InfoCard
                title="Aconselhamento bíblico"
                text="Com agendamento | Para aqueles que precisam e querem orientação bíblica para os desafios e dificuldades da vida."
                image={HomePageImages.AdviceImage}
              ></InfoCard>
              <InfoCard
                title="Discipulado"
                text="Faça parte de um grupo | Irmãos que juntos buscam conhecer o Senhor e caminham para o mesmo propósito."
                image={HomePageImages.DiscipuladoImage}
              ></InfoCard>
            </Cards>
          </CardsContainer>

          <PostsSectionContainer>
            <DivisorLine></DivisorLine>
            <PostsSectionTitle>Novidades</PostsSectionTitle>
            <PostsSection></PostsSection>
          </PostsSectionContainer>

          <MediaContainer>
            <MockUpContainer>
              <MockUpImage src={HomePageImages.MockUpPhone} />
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
                  <SocialMediaCard
                    title="Youtube"
                    descripion="Nossos recursos em video"
                    image={Icons.YoutubeIconDark}
                    bgColor="#C21010"
                    content="Pregações, aulas e eventos que marcam o nosso aprendizado da Palavra de Deus."
                  ></SocialMediaCard>
                </a>
                <a
                  href="https://podcasters.spotify.com/pod/show/igrejafontepa"
                  target="_blank"
                >
                  <SocialMediaCard
                    title="Spotify"
                    descripion="Nossos recursos em áudio"
                    image={Icons.SpotifyIconDark}
                    bgColor="#064420"
                    content="Escute as pregações e aulas que foram ensinadas na Fonte."
                  ></SocialMediaCard>
                </a>
                <a href="https://t.me/+RiV4i1GT9Mb4ohxG" target="_blank">
                  <SocialMediaCard
                    title="Telegram"
                    descripion="Nosso canal de divulgações"
                    image={Icons.TelegramIcon}
                    content="Receba diretamente no seu dispositivo eletrônico nossos últimos recursos de ensino da Palavra de Deus."
                    bgColor="#1C7EC2"
                  ></SocialMediaCard>
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
            <img src={Icons.WhatsAppIcon} alt="" />
            Fale Conosco
          </WhatsAppLInk>
        </Banner>
      </ContentContainer>

      <Footer></Footer>
    </HomeContainer>
  );
};

export default AboutUs;

import { useEffect } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AboutUsCard from "../../Components/AboutUsCards";

import LogoImage from "../../assets/images/imagens-oficiais/banner.svg";
import Icons from "../../assets/images/svg/icons/iconsExport";
import PoepleImage from "../../assets/images/usPeopleImage.png";

import {
  HomeContainer,
  ContentContainer,
  Banner,
  BannerVisualsContent,
  LogoContainer,
  Logo,
  WhatsAppLInk,
  SocialMedia,
  SocialMediaLinks,
  SocialMediaLink,
  Assignment,
  ComunityContainer,
  ComunityTitle,
  ComunityDescription,
  DivisorLine,
  WhoAreWeContainer,
  WhoAreWeImageContainer,
  WhoAreWeTextContainer,
  PeopleImg,
  WhoAreWeTitle,
  WhoAreWeText,
  CardsContainer,
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
          <ComunityContainer>
            <DivisorLine></DivisorLine>
            <ComunityTitle>Igreja Batista Fonte</ComunityTitle>
            <ComunityDescription>
              Uma nova e crescente <strong>comunidade cristã</strong>, desejosa
              em ver o caráter de Cristo espelhado e espalhado especialmente por
              toda a região do semi-árido brasileiro, conforme as Escrituras
              Sagradas.
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

        <WhoAreWeContainer>
          <WhoAreWeImageContainer>
            <PeopleImg
              src={PoepleImage}
              alt="Vetor Três pessoa juntas lado a lado"
            />
          </WhoAreWeImageContainer>
          <WhoAreWeTextContainer>
            <WhoAreWeTitle>Quem somos</WhoAreWeTitle>
            <WhoAreWeText>
              <p className="emphasis">
                A Igreja Batista Fonte, localizada em Paulo Afonso, Bahia, foi
                fundada em 2017 com um propósito claro e missionário:
              </p>
              <br />
              fazer, equipar e enviar discípulos de Cristo para o sertão
              brasileiro e confins da Terra. Com base nesses princípios,
              <strong>
                nossa igreja se dedica a transformar vidas através do ensino da
                Palavra de Deus
              </strong>{" "}
              e da capacitação de líderes comprometidos com a Grande Comissão.
            </WhoAreWeText>
          </WhoAreWeTextContainer>
        </WhoAreWeContainer>

        <CardsContainer>
          <AboutUsCard
            title="Visão"
            text=" Queremos ver o sertão brasileiro e além sendo impactados pela mensagem
          de Jesus. Trabalhando para plantar igrejas, apoiar missionários e
          desenvolver projetos sociais que promovam o bem-estar das comunidades
          onde atuamos."
          />
          <AboutUsCard
            title="Fé e Oração"
            text=" Confiamos plenamente em Deus e buscamos Sua direção em todas as nossas atividades e decisões."
          />
          <AboutUsCard
            title="Comunhão e Amor"
            text="Valorizamos o relacionamento fraterno, o cuidado mútuo e a unidade do corpo de Cristo."
          />
          <AboutUsCard
            title="Comunhão e Amor"
            text="Valorizamos o relacionamento fraterno, o cuidado mútuo e a unidade do corpo de Cristo."
          />
          <AboutUsCard
            title="Serviço e Missão"
            text="Comprometemo-nos a servir aos outros, levando o amor de Cristo."
          />
        </CardsContainer>
        <DivisorLine></DivisorLine>
      </ContentContainer>
      <Footer></Footer>
    </HomeContainer>
  );
};

export default AboutUs;

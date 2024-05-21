import { useEffect } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AboutUsCard from "../../Components/AboutUsCards";

import LogoImage from "../../assets/images/imagens-oficiais/banner.svg";
import Icons from "../../assets/images/svg/icons/iconsExport";
import PoepleImage from "../../assets/images/usPeopleImage.png";
import PrayImage from "../../assets/images/prayImage.jpg";

import InstagramProfile from "../../assets/images/instagramProfile.png";

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
  InstagramContentContainer,
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
          <div className="cardSection cardSectionBgBlue">
            <div className="cards">
              <AboutUsCard
                title="Missão"
                text="Fazer, equipar e enviar discípulos de Cristo é a nossa missão fundamental. Acreditamos que cada membro da nossa comunidade
                 tem um papel vital no cumprimento desse chamado."
              />
              <AboutUsCard
                title="Visão"
                text=" Queremos ver o sertão brasileiro e além sendo impactados pela mensagem
              de Jesus. Trabalhando para plantar igrejas, apoiar missionários e
              desenvolver projetos sociais."
              />
            </div>
            <div
              className="cardTextContent
            "
            >
              <p className="textEmphasis">
                Alcançar e transformar , trazendo esperança e renovação através
                do evangelho e ações concretas de amor e serviço.
              </p>
              <div className="cardTextAbout">
                <p id="cardVerse">
                  &quot;Foi-me dada toda a autoridade nos céus e na terra.
                  Portanto, vão e façam discípulos de todas as nações,
                  batizando-os em nome do Pai e do Filho e do Espírito Santo,
                  ensinando-os a obedecer a tudo o que eu ordenei a vocês&quot;
                  <br />
                </p>
                <div id="verseDivisor"></div>
                <span id="cardVerseAdress">Mateus 28:18-20</span>
              </div>
            </div>
          </div>
          <div className="cardSection cardSectionBgWhite">
            <div
              className="cardTextContentLeft
            "
            >
              <p className="textEmphasisLeft">
                Encorajamos cada membro da nossa comunidade a cultivar uma vida
                de oração constante, buscando a orientação divina e intercedendo
                uns pelos outros.
              </p>
              <div className="cardImageContainer">
                <img src={PrayImage} alt="Garota de joelhos em oração" />
                <span className="attribution">
                  Designed by <strong>storyset</strong> on freepik
                </span>
              </div>
            </div>
            <div className="cards">
              <AboutUsCard
                title="Fé e Oração"
                text=" Confiamos plenamente em Deus e buscamos Sua direção em todas as nossas atividades e decisões."
              />
              <AboutUsCard
                title="Comunhão e Amor"
                text="Valorizamos o relacionamento fraterno, o cuidado mútuo e a unidade do corpo de Cristo."
              />
            </div>
          </div>
          <div className="cardSection cardSectionBgBlue">
            <div className="cards">
              <AboutUsCard
                title="Serviço"
                text="Comprometemo-nos a servir aos outros, levando o amor de Cristo."
              />
            </div>
            <div
              className="cardTextContent
            "
            >
              <p className="textEmphasis">
                Nosso serviço é motivado pelo exemplo de Jesus, que veio não
                para ser servido, mas para servir. Procuramos atender às
                necessidades das pessoas em nossa comunidade e além, oferecendo
                apoio espiritual, emocional e material.
              </p>
            </div>
          </div>
        </CardsContainer>
        <DivisorLine></DivisorLine>
        <InstagramContentContainer>
          
        </InstagramContentContainer>
      </ContentContainer>
      <Footer></Footer>
    </HomeContainer>
  );
};

export default AboutUs;

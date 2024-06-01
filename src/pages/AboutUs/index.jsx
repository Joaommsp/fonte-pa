import { useEffect } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AboutUsCard from "../../Components/AboutUsCards";

import LogoImage from "../../assets/images/imagens-oficiais/banner.png";
import Icons from "../../assets/images/svg/icons/iconsExport";
import PoepleImage from "../../assets/images/usPeopleImage.png";
import PrayImage from "../../assets/images/prayImage.jpg";
import InstagramProfile from "../../assets/images/instagramProfile.jpg";
import { InstagramProfileImages } from "../../assets/images/instagram/intagramImagesExport";

import {
  HomeContainer,
  ContentContainer,
  Banner,
  BannerVisualsContent,
  LogoContainer,
  Logo,
  AboutUsTitle,
  WhatsAppLInk,
  SocialMedia,
  SocialMediaLinks,
  SocialMediaLink,
  ComunityContainer,
  ComunityTitle,
  ComunityDescription,
  DivisorLine,
  DivisorLineLight,
  WhoAreWeContainer,
  WhoAreWeImageContainer,
  WhoAreWeTextContainer,
  PeopleImg,
  WhoAreWeTitle,
  WhoAreWeText,
  CardsContainer,
  InstagramContentContainer,
  InstagramContent,
  InstagramContentTitle,
  InstagramProfileImage,
  InstagramImages,
  InstagramImageContainer,
  InstagramImage,
  AdressMapContainer,
  AdressMapAbout,
  AdressMapTitle,
  AdressMapText,
  AdressMapMaps,
  Address,
  MapContainer,
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
              <DivisorLineLight></DivisorLineLight>
              <AboutUsTitle>Conheça-nos</AboutUsTitle>
              <Logo src={LogoImage} alt="Logo Igreja Batista Fonte Paulo Afonso" />

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
                Encorajamos cada membro da nossa comunidade a{" "}
                <strong>cultivar uma vida de oração constante</strong>, buscando
                a orientação divina e intercedendo uns pelos outros.
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
                Nosso serviço é motivado pelo <strong>exemplo de Jesus</strong>,
                que veio não para ser servido, mas para servir. Procuramos
                atender às necessidades das pessoas em nossa comunidade e além,
                oferecendo apoio espiritual, emocional e material.
              </p>
            </div>
          </div>
        </CardsContainer>
        <DivisorLine></DivisorLine>
        <InstagramContentContainer>
          <InstagramContentTitle>
            Siga nosso <strong>Instagram</strong>
          </InstagramContentTitle>
          <InstagramContent>
            <a href="https://www.instagram.com/ibfonte.pa/" target="_blank">
              <InstagramProfileImage src={InstagramProfile} alt="" />
            </a>
            <InstagramImages>
              <a
                href="https://www.instagram.com/p/C7HubH1RcdZ/"
                target="_blank"
              >
                <InstagramImageContainer>
                  <img
                    src={Icons.ColletionIcon}
                    alt=""
                    className="collectionIcon"
                  />
                  <InstagramImage
                    src={InstagramProfileImages.instagramImage01}
                    alt=""
                  />
                </InstagramImageContainer>
              </a>
              <a
                href="https://www.instagram.com/p/C6ZKHSLrSvY/"
                target="_blank"
              >
                <InstagramImageContainer>
                  <img
                    src={Icons.ColletionIcon}
                    alt=""
                    className="collectionIcon"
                  />
                  <InstagramImage
                    src={InstagramProfileImages.instagramImage02}
                    alt=""
                  />
                </InstagramImageContainer>
              </a>
              <a
                href="https://www.instagram.com/p/C2I4-dgRf28/?img_index=1"
                target="_blank"
              >
                <InstagramImageContainer>
                  <img
                    src={Icons.ColletionIcon}
                    alt=""
                    className="collectionIcon"
                  />
                  <InstagramImage
                    src={InstagramProfileImages.instagramImage03}
                    alt=""
                  />
                </InstagramImageContainer>
              </a>
              <a
                href="https://www.instagram.com/p/CxQI460L1g7/?img_index=1"
                target="_blank"
              >
                <InstagramImageContainer>
                  <img
                    src={Icons.ColletionIcon}
                    alt=""
                    className="collectionIcon"
                  />
                  <InstagramImage
                    src={InstagramProfileImages.instagramImage04}
                    alt=""
                  />
                </InstagramImageContainer>
              </a>
              <a href="https://www.instagram.com/ibfonte.pa/" target="_blank">
                <InstagramImageContainer>
                  <img
                    src={Icons.ColletionIcon}
                    alt=""
                    className="collectionIcon"
                  />
                  <InstagramImage
                    src={InstagramProfileImages.instagramImage05}
                    alt=""
                  />
                </InstagramImageContainer>
              </a>
              <a
                href="https://www.instagram.com/p/C7JdMAaOeTd/?img_index=6"
                target="_blank"
              >
                <InstagramImageContainer>
                  <img
                    src={Icons.ColletionIcon}
                    alt=""
                    className="collectionIcon"
                  />
                  <InstagramImage
                    src={InstagramProfileImages.instagramImage06}
                    alt=""
                  />
                </InstagramImageContainer>
              </a>
              <a
                href="https://www.instagram.com/p/C3DRRiprSBf/?img_index=1"
                target="_blank"
              >
                <InstagramImageContainer>
                  <img
                    src={Icons.ColletionIcon}
                    alt=""
                    className="collectionIcon"
                  />
                  <InstagramImage
                    src={InstagramProfileImages.instagramImage07}
                    alt=""
                  />
                </InstagramImageContainer>
              </a>
              <a
                href="https://www.instagram.com/p/C6XlZqzt86K/"
                target="_blank"
              >
                <InstagramImageContainer>
                  <img
                    src={Icons.ColletionIcon}
                    alt=""
                    className="collectionIcon"
                  />
                  <InstagramImage
                    src={InstagramProfileImages.instagramImage08}
                    alt=""
                  />
                </InstagramImageContainer>
              </a>
              <a
                href="https://www.instagram.com/p/CvqroVNLRZO/?img_index=1/"
                target="_blank"
              >
                <InstagramImageContainer>
                  <img
                    src={Icons.ColletionIcon}
                    alt=""
                    className="collectionIcon"
                  />
                  <InstagramImage
                    src={InstagramProfileImages.instagramImage09}
                    alt=""
                  />
                </InstagramImageContainer>
              </a>
            </InstagramImages>
          </InstagramContent>
        </InstagramContentContainer>
        <AdressMapContainer>
          <AdressMapAbout>
            <AdressMapTitle>Venha nos visitar</AdressMapTitle>
            <AdressMapText>
              {" "}
              Venha participar, onde buscamos crescer juntos na fé e no amor de
              Cristo. Nossa comunidade estará de braços abertos para
              recebê-lo(a)
            </AdressMapText>
            <Address>
              <img src={Icons.MapIcon} alt="Ícone de mapa para endereço" />
              <div className="addressInfos">
                <span>R. Mal. Deodoro da Fonseca</span>
                <span>N° 204</span>
                <span>Cleriston Andrade </span>
                <span>Paulo Afonso - BA</span>
              </div>
            </Address>
          </AdressMapAbout>
          <AdressMapMaps>
            <MapContainer>
              <div className="mapTest">
                <iframe
                  className="mapIframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.2397949883066!2d-38.2446643!3d-9.400342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7093097213da37b%3A0xf2d4508b9d89bd1!2sIgreja%20Batista%20Fonte!5e0!3m2!1spt-BR!2sbr!4v1714577468004!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </MapContainer>
          </AdressMapMaps>
        </AdressMapContainer>
      </ContentContainer>
      <Footer></Footer>
    </HomeContainer>
  );
};

export default AboutUs;

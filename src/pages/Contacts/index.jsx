import { useEffect } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ContactCard from "../../Components/ContactCard";

import Icons from "../../assets/images/svg/icons/iconsExport";

import {
  HomeContainer,
  ContentContainer,
  Banner,
  BannerTextContent,
  TextContent,
  Title,
  AboutContacts,
  WhatsAppLInk,
  MapContainer,
  ContactsCardsContainer,
} from "./styles";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeContainer>
      <Header pageIndex={3} />
      <ContentContainer>
        <Banner className="banner">
          <BannerTextContent>
            <TextContent>
              <Title>Formas de Contato</Title>
              <AboutContacts>
                Entre em contato conosco através do <strong>WhatsApp</strong> ou{" "}
                <strong>e-mail</strong>.
              </AboutContacts>
              <AboutContacts>
                Aproveite e venha nos fazer uma visita. Você é bem-vindo(a)!
              </AboutContacts>
            </TextContent>
          </BannerTextContent>

          <ContactsCardsContainer>
            <ContactCard
              url="https://api.whatsapp.com/send/?phone=5575999706296&text&type=phone_number&app_absent=0"
              iconSrc={Icons.WhatsAppIconBlue}
              altTextImage="Icone WhatsApp"
              name="WhatsApp"
            />
            <ContactCard
              url="mailto:igrejafontepa@gmail.com"
              iconSrc={Icons.EmailIcon}
              altTextImage="Icone E-mail"
              name="E-mail"
            />
          </ContactsCardsContainer>

          <WhatsAppLInk
            href="https://api.whatsapp.com/send/?phone=5575999706296&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <img src={Icons.WhatsAppIcon} alt="" />
            Fale Conosco
          </WhatsAppLInk>
        </Banner>
      </ContentContainer>
      <MapContainer>
        <div className="mapTest">
          <iframe
            className="mapIframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.2397949883066!2d-38.2446643!3d-9.400342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7093097213da37b%3A0xf2d4508b9d89bd1!2sIgreja%20Batista%20Fonte!5e0!3m2!1spt-BR!2sbr!4v1714577468004!5m2!1spt-BR!2sbr"
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </MapContainer>

      <Footer></Footer>
    </HomeContainer>
  );
};

export default Contacts;

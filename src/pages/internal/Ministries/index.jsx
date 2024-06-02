import { useEffect } from "react";

import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import MinistryCard from "../../../Components/MinistryCard";

import WhatsAppIcon from "../../../assets/images/svg/icons/whatsapp-icon.svg";

import MistriesImageImage from "../../../assets/images/svg/ministriesImage.svg";
import SocialHeartImage from "../../../assets/images/svg/socialheart.svg";

import InfantilMinister from "../../../assets/images/infantilMinisterio.png";
import MusicMinister from "../../../assets/images/louvorMinisterio.png";
import CoupleMinister from "../../../assets/images/casaisMinisterio.png";
import SocialMinister from "../../../assets/images/social.png";

import {
  SchoolContainer,
  SchoolTextContent,
  SchoolImageContainer,
  SchoolTitle,
  SchoolSubTitle,
  SchoolImage,
  WhatsAppLInk,
  FormLink,
  ContactsContainer,
  ContactsContent,
} from "./styles";

function Ministries() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header pageIndex={1} />
      <SchoolContainer>
        <SchoolTextContent>
          <SchoolTitle>Ministérios</SchoolTitle>
          <SchoolSubTitle>
            Trabalhando juntos para promover o crescimento espiritual dos
            membros da igreja, alcançar uma comunidade com o amor de Cristo e
            cumprir a missão da igreja de fazer discípulos de todas as nações.
            Uma rede interconectada de serviço e apoio, cada um desempenhando{" "}
            <strong>um papel único</strong>, mas complementar, na vida da
            igreja.
          </SchoolSubTitle>
          <FormLink></FormLink>
        </SchoolTextContent>

        <SchoolImageContainer>
          <SchoolImage src={MistriesImageImage} />
        </SchoolImageContainer>
        <WhatsAppLInk
          href="https://api.whatsapp.com/send/?phone=5575999706296&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <img src={WhatsAppIcon} alt="" />
          Fale Conosco
        </WhatsAppLInk>
      </SchoolContainer>
      <ContactsContainer>
        <ContactsContent>
          <MinistryCard name="Ministério infantil" img={InfantilMinister} />
          <MinistryCard name="Ministério de casais" img={CoupleMinister} />
          <MinistryCard name="Ministério de louvor" img={MusicMinister} />
          <MinistryCard name="Ministério social" img={SocialMinister} />
        </ContactsContent>
      </ContactsContainer>
      <Footer></Footer>
    </>
  );
}

export default Ministries;

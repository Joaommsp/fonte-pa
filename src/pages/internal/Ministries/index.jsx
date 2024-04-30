import { useEffect } from "react";

import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import InfoCard from "../../../Components/InfoCard";

import WhatsAppIcon from "../../../assets/images/svg/icons/whatsapp-icon.svg";

import MistriesImageImage from "../../../assets/images/svg/ministriesImage.svg";
import SchoolImageImage2 from "../../../assets/images/svg/family-school.svg";
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
  Verse,
  ContactsContent,
  FamilyContainer,
  FamilyContent,
  FamilyImage,
  FamilyImageContainer,
  FamilyText,
  FamilyTitle,
} from "./styles";

function Ministries() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header pageIndex={3} />
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
        {/* <Verse>
          &quot;A tua palavra é lâmpada que ilumina os meus passos e luz que
          clareia o meu caminho. &quot; <strong>Gálatas 6:2</strong>
        </Verse> */}
        <ContactsContent>
          <InfoCard
            title="Ministério Infantil"
            image={InfantilMinister}
            text="Ensinando as crianças sobre a Bíblia e o amor de Deus, a crescerem em seu relacionamento com Cristo e a se tornarem discípulos de Jesus"
          />
          <InfoCard
            title="Ministério de Louvor"
            image={MusicMinister}
            text="Ministério de Louvor e Adoração é exaltar a Deus, glorificar e honrar Teu nome, reconhecendo Sua grandeza, bondade e amor."
          />
          <InfoCard
            title="Casais"
            text="Fornecendo apoio, orientação e recursos para casais em seus relacionamentos , reflitindo os princípios cristãos."
            image={CoupleMinister}
          />
          <InfoCard
            title="Social"
            text="Demonstrando o amor e o cuidado de Deus pelos necessitados e pela comunidade através de ações sociais na região."
            image={SocialMinister}
          />
        </ContactsContent>
      </ContactsContainer>

      <FamilyContainer>
        <FamilyImageContainer>
          <FamilyImage src={SocialHeartImage} />
        </FamilyImageContainer>
        <FamilyContent>
          <FamilyTitle>Há um lugar para você </FamilyTitle>
          <FamilyText>
            Ao participar de um dos nossos ministérios, você não apenas
            encontrará um sentido de pertencimento e comunidade, mas também terá
            a oportunidade de crescer espiritualmente,{" "}
            <strong>
              desenvolver novas habilidades e impactar positivamente a vida
              daqueles ao seu redor.
            </strong>
            Estamos empenhados em criar um ambiente acolhedor e inclusivo, onde
            todos possam crescer espiritualmente e encontrar novos propósitos em
            suas vidas. Para mais informações sobre como se envolver em um dos
            nossos ministérios, entre em contato conosco ou visite-nos em nossos
            cultos de adoração aos domingos.
          </FamilyText>
        </FamilyContent>
      </FamilyContainer>
      <Footer></Footer>
    </>
  );
}

export default Ministries;

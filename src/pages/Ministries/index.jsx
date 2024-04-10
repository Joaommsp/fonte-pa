import { useEffect } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Card from "../../Components/Card";

import WhatsAppIcon from "../../assets/images/svg/icons/whatsapp-icon.svg";

import MistriesImageImage from "../../assets/images/svg/ministriesImage.svg";
import SchoolImageImage2 from "../../assets/images/svg/family-school.svg";

import infantilMinister from "../../assets/images/infantilMinisterio.png";
import musicMinister from "../../assets/images/louvorMinisterio.png";
import coupleMinister from "../../assets/images/casaisMinisterio.png";

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
        <WhatsAppLInk href="" target="_blank">
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
          <Card
            title="Ministério Infantil"
            image={infantilMinister}
            text="Ensinando as crianças sobre a Bíblia e o amor de Deus, a crescerem em seu relacionamento com Cristo e a se tornarem discípulos de Jesus"
          />
          <Card
            title="Ministério de Louvor"
            image={musicMinister}
            text="Ministério de Louvor e Adoração é exaltar a Deus, glorificar e honrar Teu nome, reconhecendo Sua grandeza, bondade e amor."
          />
          <Card
            title="Casais"
            text="Fornecendo apoio, orientação e recursos para casais em seus relacionamentos , reflitindo os princípios cristãos."
            image={coupleMinister}
          />
        </ContactsContent>
      </ContactsContainer>

      <FamilyContainer>
        <FamilyImageContainer>
          <FamilyImage src={SchoolImageImage2} />
        </FamilyImageContainer>
        <FamilyContent>
          <FamilyTitle>Com Amor, respeito e perdão</FamilyTitle>
          <FamilyText>
            <strong>Servir a Deus é uma escolha</strong>. Josué, como líder de
            sua casa, tomou essa decisão. A partir que ele tomou essa escolha,
            ele teve a responsabilidade de dar o exemplo e conduzir a sua
            família aos caminhos do Senhor. Seja exemplo para seus filhos, dê
            bom testemunho de Cristo e conduza a sua família no caminho da
            Salvação.
          </FamilyText>
        </FamilyContent>
      </FamilyContainer>
      <Footer></Footer>
    </>
  );
}

export default Ministries;

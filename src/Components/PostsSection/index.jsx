import { useState, useEffect } from "react";

import { db } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";

import Icons from "../../assets/images/svg/icons/iconsExport";
import logo from "../../assets/images/imagens-oficiais/banner.svg";
import NothingPosted from "../../assets/images/notFound.png";

import {
  NewsSectionContainer,
  CardsContainer,
  PopUpContainer,
  EmptyEvents,
} from "./styles";

const PostsSection = () => {
  const [posts, setPosts] = useState([]);
  const [openPopupIndex, setOpenPopupIndex] = useState(null);

  const postsColletcionRef = collection(db, "news");

  useEffect(() => {
    const getPosts = async () => {
      const queryOrderByDate = query(
        postsColletcionRef,
        orderBy("data", "desc")
      );
      const data = await getDocs(queryOrderByDate);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const handleOpenPopup = (index) => {
    setOpenPopupIndex(index);
  };

  const handleClosePopup = () => {
    setOpenPopupIndex(null);
  };

  const formateDate = (data) => {
    const dateInMilliseconds =
      data.seconds * 1000 + Math.floor(data.nanoseconds / 1000000);

    const dataFormatada = new Date(dateInMilliseconds);
    dataFormatada.setDate(dataFormatada.getDate() + 1);

    const formatDDMMYYYY = dataFormatada.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    return formatDDMMYYYY;
  };

  return (
    <NewsSectionContainer>
      <CardsContainer>
        {posts.length == 0 && (
          <EmptyEvents>
            <h2 className="emptyEventsTitle">
              Nenhuma publicação encontrada , tente mais tarde ...
            </h2>
            <div className="emptyImageContainer">
              <img
                className="emptyImage"
                src={NothingPosted}
                alt="Caixa vazia referente a nada postado"
              />
            </div>
          </EmptyEvents>
        )}
        {posts.map((post, index) => {
          return (
            <div className="card" key={index}>
              {openPopupIndex === index && (
                <PopUpContainer className="fullPopUp">
                  <div className="popUpImageContainer">
                    <img className="popUpCardImage" src={post.image} alt="" />
                    <div className="circleBorder">
                      <div className="fakeScroolLine"></div>
                    </div>
                  </div>
                  <button onClick={handleClosePopup} className="closePopUpBtn">
                    <img
                      src={Icons.ArrowSlimIcon}
                      alt="Icone para fechar conteúdo"
                      title="Fechar"
                    />
                  </button>
                  <div className="popUpCardHeader">
                    <h2 className="popUpCardTitle">{post.title}</h2>
                    <div className="popUpCardInfos__text">
                      <span className="PopUpCardAuthor">
                        <img
                          src={Icons.PersonIcon}
                          alt="Ícone de pessoa referente a escritor"
                        />
                        {post.author}
                      </span>
                      <span className="PopUpCardData">
                        <img
                          src={Icons.CalendarIcon}
                          alt="Ícone de calendário referente a data da postagem"
                        />
                        {formateDate(post.data)}
                      </span>
                      <span className="PopUpCardData">
                        <img
                          src={Icons.HashIcon}
                          alt="Ícone de hashtags da postagem"
                        />
                        {post.hashtags}
                      </span>
                    </div>
                  </div>
                  <div className="popUpCardBottom">
                    <p className="popUpCardSubtitle">{post.subtitle}</p>
                    <div
                      className="popUpCardTextContainer"
                      dangerouslySetInnerHTML={{ __html: post.text }}
                    ></div>
                    <div className="popUpCardInfos__shareLinks">
                      <img
                        src={logo}
                        alt="Logo Igreja Batista Fonte"
                        className="popUpLogo"
                      />
                      <a
                        href={`https://api.whatsapp.com/send?text=${
                          post.title +
                          " - " +
                          post.text +
                          " Veja mais em https://fonte-pa.vercel.app/"
                        }`}
                      >
                        Compartilhe{" "}
                        <img
                          src={Icons.WhatsAppIcon}
                          alt="WhatsApp Icon"
                          className="whatsAppShareIcon"
                        />
                      </a>
                    </div>
                  </div>
                </PopUpContainer>
              )}
              <div className="carImageContainer">
                <img className="cardImage" src={post.image} alt="" />
              </div>
              <div className="cardHeader">
                <h2 className="cardTitle">{post.title}</h2>
                <span className="cardHashtags">{post.hashtags}</span>
              </div>
              <div className="cardBotton">
                <div
                  className="cardTextContainer"
                  dangerouslySetInnerHTML={{ __html: post.text }}
                ></div>
                <span className="cardData">
                  {" "}
                  <img src={Icons.CalendarIconBlue} alt="" />{" "}
                  {formateDate(post.data)}
                </span>
                <button
                  onClick={() => handleOpenPopup(index)}
                  className="readAllBtn"
                >
                  Ler tudo
                </button>
              </div>
            </div>
          );
        })}
      </CardsContainer>
    </NewsSectionContainer>
  );
};

export default PostsSection;

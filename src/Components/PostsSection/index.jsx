import { useState, useEffect } from "react";

import { db } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";

import Icons from "../../assets/images/svg/icons/iconsExport";
import logo from "../../assets/images/imagens-oficiais/banner.svg";
import PopUpBannerImage from "../../assets/images/popUpPostBanner.jpg";

import { NewsSectionContainer, CardsContainer, PopUpContainer } from "./styles";

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

    const offsetInMilliseconds = dataFormatada.getTimezoneOffset() * 60 * 1000;
    const localDate = new Date(dateInMilliseconds - offsetInMilliseconds);

    const formatDDMMYYYY = localDate.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    return formatDDMMYYYY;
  };

  return (
    <NewsSectionContainer>
      <CardsContainer>
        {posts.map((post, index) => {
          return (
            <div className="card" key={index}>
              {openPopupIndex === index && (
                <PopUpContainer className="fullPopUp">
                  <button onClick={handleClosePopup} className="closePopUpBtn">
                    <img
                      src={Icons.ArrowLeftIcon}
                      alt="Icone para fechar conteúdo"
                      title="Fechar"
                    />
                    Voltar
                  </button>
                  <div className="popUpCardBannerContainer">
                    <div className="bannerImageCover"></div>
                    <img
                      src={PopUpBannerImage}
                      alt=""
                      className="popUpCardBanner"
                    />
                  </div>
                  <div className="popUpCardHeader">
                    <div className="popUpCardHeader__About"></div>
                    <h2 className="popUpCardTitle">{post.title}</h2>
                    <div className="popUpCardInfos__text">
                      <span className="PopUpCardAuthor">
                        Por: {post.author} |
                      </span>
                      <span className="PopUpCardData">
                        {" "}
                        {formateDate(post.data)}
                      </span>
                    </div>
                  </div>
                  <img className="popUpCardImage" src={post.image} alt="" />
                  <div className="popUpCardBotton">
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
              <div className="cardHeader">
                <h2 className="cardTitle">{post.title}</h2>
                <span className="cardHashtags">{post.hashtags}</span>
              </div>
              <div className="carImageContainer">
                <img className="cardImage" src={post.image} alt="" />
              </div>
              <div className="cardBotton">
                <div
                  className="cardTextContainer"
                  dangerouslySetInnerHTML={{ __html: post.text }}
                ></div>
                <span className="cardData">{formateDate(post.data)}</span>
                <button
                  onClick={() => handleOpenPopup(index)}
                  className="readAllBtn"
                >
                  Ler tudo
                  <img src={Icons.ArrowRightSlim} alt="" />
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

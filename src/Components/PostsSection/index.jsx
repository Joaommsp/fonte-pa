import { useState, useEffect } from "react";

import { db } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";

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
      const data = await getDocs(postsColletcionRef);
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

  return (
    <NewsSectionContainer>
      <CardsContainer>
        {posts.map((post, index) => {
          return (
            <div className="card" key={index}>
              {openPopupIndex === index && (
                <PopUpContainer className="fullPopUp">
                  <button onClick={handleClosePopup} className="closePopUpBtn">
                    Voltar
                    <img
                      src={Icons.ArrowRightSlimLight}
                      alt="Icone para fechar conteúdo"
                      title="Fechar"
                    />
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
                      <span className="PopUpCardData"> {post.data}</span>
                    </div>
                  </div>
                  <img className="popUpCardImage" src={post.image} alt="" />
                  <div className="popUpCardBotton">
                    <p className="popUpCardSubtitle">{post.subtitle}</p>
                    <p className="popUpCardText">{post.text}</p>
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
                <span className="cardHashtags">{post.hastags}</span>
              </div>
              <img className="cardImage" src={post.image} alt="" />
              <div className="cardBotton">
                <div className="cardTextContainer">
                  <p className="cardText">{post.text}</p>
                </div>
                <span className="cardData">{post.data}</span>
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

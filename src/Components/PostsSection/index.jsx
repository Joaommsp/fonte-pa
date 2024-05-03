import { useState, useEffect } from "react";

import { db } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";

import Icons from "../../assets/images/svg/icons/iconsExport";
import logo from "../../assets/images/imagens-oficiais/banner.svg";

import { NewsSectionContainer, CardsContainer, PopUpContainer } from "./styles";

const PostsSection = () => {
  const [posts, setPosts] = useState([]);
  const [openPopupIndex, setOpenPopupIndex] = useState(null);
  const [theme, setTheme] = useState("light");

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

  const switchTheme = () => {};

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
                      src={Icons.CloseIconLight}
                      alt="Icone para fechar conteúdo"
                      title="Fechar"
                    />
                  </button>
                  <div className="popUpCardHeader">
                    <div className="popUpCardHeader__About">
                      <img
                        src={logo}
                        alt="Logo Igreja Batista Fonte"
                        className="popUpLogo"
                      />
                    </div>
                    <h2 className="popUpCardTitle">{post.title}</h2>
                    <span className="popUpCardSubtitle">{post.subtitle}</span>
                  </div>
                  <img className="popUpCardImage" src={post.image} alt="" />
                  <div className="popUpCardBotton">
                    <div className="popUpCardInfos">
                      <div className="popUpCardInfos__text">
                        <span className="PopUpCardAuthor">
                          Por: {post.author}
                        </span>
                        <span className="PopUpCardData">{post.data}</span>
                      </div>
                      <div className="popUpCardInfos__shareLinks">
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
                    <p className="popUpCardText">{post.text}</p>
                  </div>
                </PopUpContainer>
              )}
              <div className="cardHeader">
                <h2 className="cardTitle">{post.title}</h2>
              </div>
              <img className="cardImage" src={post.image} alt="" />
              <div className="cardBotton">
                <p className="cardText">{post.text}</p>
                <span className="cardData">{post.data}</span>
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

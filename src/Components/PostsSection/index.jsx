import { useState, useEffect } from "react";

import { db } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";

import Icons from "../../assets/images/svg/icons/iconsExport";

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
                    <img src={Icons.CloseIcon} alt="" />
                  </button>
                  <div className="popUpCardHeader">
                    <h2 className="popUpCardTitle">{post.title}</h2>
                    <span className="popUpCardSubtitle">{post.subtitle}</span>
                  </div>
                  <img className="popUpCardImage" src={post.image} alt="" />
                  <div className="popUpCardBotton">
                    <p className="popUpCardText">{post.text}</p>
                    <span className="PopUpCardData">{post.data}</span>
                  </div>
                </PopUpContainer>
              )}
              <div className="cardHeader">
                <h2 className="cardTitle">{post.title}</h2>
                <span className="cardSubtitle">{post.subtitle}</span>
              </div>
              <img className="cardImage" src={post.image} alt="" />
              <div className="cardBotton">
                <p className="cardText">{post.text}</p>
                <span className="cardData">{post.data}</span>
                <button onClick={() => handleOpenPopup(index)} className="readAllBtn" >Ler tudo</button>
              </div>
            </div>
          );
        })}
      </CardsContainer>
    </NewsSectionContainer>
  );
};

export default PostsSection;

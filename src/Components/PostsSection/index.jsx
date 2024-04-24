import { useState, useEffect } from "react";

import { db } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";

import { NewsSectionContainer, CardsContainer } from "./styles";

const PostsSection = () => {
  const [posts, setPosts] = useState([]);

  const postsColletcionRef = collection(db, "news");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsColletcionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  return (
    <NewsSectionContainer>
      <CardsContainer>
        {posts.map((post, index) => {
          return (
            <div className="card" key={index}>
              <div className="cardHeader">
                <h2 className="cardTitle">{post.title}</h2>
                <span className="cardSubtitle">{post.subtitle}</span>
              </div>
              <img className="cardImage" src={post.image} alt="" />
              <div className="cardBotton">
                <p className="cardText">{post.text}</p>
                <span className="cardData">{post.data}</span>
              </div>
            </div>
          );
        })}
      </CardsContainer>
    </NewsSectionContainer>
  );
};

export default PostsSection;

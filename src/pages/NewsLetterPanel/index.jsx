import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { auth, db, storage } from "../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { NewsLetterPanelContainer } from "./style";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import ArrowLeftIcon from "../../assets/images/svg/icons/arrow-left-icon.svg";
import logoutIcon from "../../assets/images/svg/icons/logout-icon.svg";

const NewsLetterPanel = () => {
  const [posts, setPosts] = useState([]);

  const [newTitle, setNewTitle] = useState("");
  const [newSubTitle, setNewSubTitle] = useState("");
  const [newText, setNewText] = useState("");
  const [newData, setNewData] = useState("");
  const [envStatus, setEnvStatus] = useState(0);

  const [newImageUrl, setNewImageUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [previewImageUrl, setPreviewImageUrl] = useState("");

  const [aouthCheck, setAothCheck] = useState(0);

  const postsColletcionRef = collection(db, "news");

  const navigate = useNavigate();

  useEffect(() => {
    const timeAothCheck = setTimeout(() => {
      setAothCheck(1);
      clearTimeout(timeAothCheck);
    }, 3000);

    const listen = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/newsletterlogin");
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log("saiu com sucesso");
    });
  };

  const createPost = async () => {
    if (
      newTitle == "" ||
      newSubTitle == "" ||
      newText == "" ||
      newData == "" ||
      newImageUrl == ""
    ) {
      setEnvStatus(1);
    } else {
      await addDoc(postsColletcionRef, {
        title: newTitle,
        subtitle: newSubTitle,
        text: newText,
        data: newData,
        image: newImageUrl,
      });

      window.location.reload();
      missingItems(0);
    }
  };

  const missingItems = (status) => {
    if (status == 0) {
      return <span></span>;
    } else {
      setInterval(() => {
        setEnvStatus(0);
      }, 5000);
      return <span>por favor, preencha todos os campos</span>;
    }
  };

  const uploadImage = (event) => {
    event.preventDefault();

    const file = event.target[0]?.files[0];

    if (!file) return;

    const storageRef = ref(storage, `postsImages/${file.name}`);
    const uploadTaks = uploadBytesResumable(storageRef, file);

    uploadTaks.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (erro) => {
        alert(erro);
      },
      () => {
        getDownloadURL(uploadTaks.snapshot.ref).then((url) => {
          setNewImageUrl(url);
          setPreviewImageUrl(url);
        });
      }
    );
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsColletcionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const formatadorDeData = (dataToFormat) => {
    let formatter = new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formatter.format(dataToFormat).toString();
  };

  return (
    aouthCheck != 0 && (
      <NewsLetterPanelContainer>
        <div className="header">
          <Link to={"/"} className="homeLink">
            {" "}
            <img src={ArrowLeftIcon} alt="" /> Página Inicial
          </Link>
          <button className="logoutBtn" onClick={userSignOut}>
            Logout <img src={logoutIcon} alt="" />{" "}
          </button>
        </div>
        <div className="mainContainer">
          <div className="createContainer">
            <input
              type="text"
              placeholder="title"
              onChange={(event) => setNewTitle(event.target.value)}
            />
            <input
              type="text"
              placeholder="subtitle"
              onChange={(event) => setNewSubTitle(event.target.value)}
            />
            <input
              type="text"
              placeholder="content"
              onChange={(event) => setNewText(event.target.value)}
            />
            <input
              type="text"
              placeholder="data"
              onChange={(event) => setNewData(event.target.value)}
            />
            <button onClick={createPost}>CREATE</button>
            <form onSubmit={uploadImage}>
              <input type="file" />
              <button type="submit">Enviar</button>
              <div>
                <img src={previewImageUrl} alt="" />
                {!newImageUrl && <progress value={progress} max={100} />}
              </div>
            </form>
            <div>{missingItems(envStatus)}</div>
          </div>
          <div className="cardsContainer">
            {posts.map((post, index) => {
              return (
                <div className="card" key={index}>
                  <h2 className="cardTitle" >{post.title}</h2>
                  <span className="cardSubtitle">{post.subtitle}</span>
                  <img  className="cardImage" src={post.image} alt="" />
                  <p className="cardText">{post.text}</p>
                  <span className="cardData">{post.data}</span>
                </div>
              );
            })}
          </div>
        </div>
      </NewsLetterPanelContainer>
    )
  );
};

export default NewsLetterPanel;

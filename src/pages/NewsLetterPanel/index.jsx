import React, { useEffect, useState } from "react";

import { auth, db, storage } from "../../services/firebase";
import { NewsLetterPanelContainer } from "./style";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

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

  const postsColletcionRef = collection(db, "news");

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
    <NewsLetterPanelContainer>
      controlador
      <div>
        {posts.map((post, index) => {
          return (
            <div className="testediv" key={index}>
              <h2>{post.title}</h2>
              <span>{post.subtitle}</span>
              <img src={post.image} alt="" />
              <p>{post.text}</p>
              <span>{post.data}</span>
            </div>
          );
        })}
      </div>
      <div>
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
    </NewsLetterPanelContainer>
  );
};

export default NewsLetterPanel;

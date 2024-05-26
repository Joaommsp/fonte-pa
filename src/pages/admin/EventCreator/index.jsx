import { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db, storage } from "../../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { gsap } from "gsap";

import Footer from "../../../Components/Footer";

import {
  NewsLetterPanelContainer,
  LoaderContainer,
  DashBoardHeader,
  UserControlDropDown,
  UserInfos,
  UserInfosContainer,
  UserLinks,
  PostCreatorContainer,
  FeatureHeaderContainer,
  PreviewCardContainer,
  TextWriterContainer,
  PostCreatedNoticeModal,
} from "./styles";

import Icons from "../../../assets/images/svg/icons/iconsExport";
import DefaultImage from "../../../assets/images/default-image.png";
import Logo from "../../../assets/images/imagens-oficiais/banner.svg";
import UserPhoto from "../../../assets/images/userDefaultPhoto.png";
import PostCreatedModalImage from "../../../assets/images/postCreatedModalImage.png";

import BarLoader from "react-spinners/BarLoader";

const EventCreator = () => {
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");
  const [newData, setNewData] = useState("");
  const [newHour, setNewHour] = useState("");
  const [newLocal, setNewLocal] = useState("");
  const fileInputRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [previewImageUrl, setPreviewImageUrl] = useState(DefaultImage);
  const [authCheck, setAuthCheck] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const modalRef = useRef(null);
  const [postCreated, setPostCreated] = useState(false);

  const eventsColletcionRef = collection(db, "events");

  const navigate = useNavigate();

  useEffect(() => {
    let loadingTime = setInterval(() => {
      setLoading(false);
      clearInterval(loadingTime);
    }, 3000);

    const timeAothCheck = setTimeout(() => {
      setAuthCheck(1);
      clearTimeout(timeAothCheck);
    }, 3000);

    const listen = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };

  const createEvent = () => {
    if (newTitle === "" || newText === "" || newData === "" || newHour == "") {
      setErrorMessage("Preencha todos os campos");
      resetErrorMessage();
      return;
    } else {
      uploadImage()
        .then((imageUrl) => {
          try {
            handleClearFile();
            createDocOnDataBase(imageUrl);
            clearAllInputs();
          } catch (error) {
            setErrorMessage(error.message);
            resetErrorMessage();
          }
        })
        .catch((error) => {
          setErrorMessage(error.message);
          resetErrorMessage();
        });
    }
  };

  const createDocOnDataBase = async (imageUrl) => {
    await addDoc(eventsColletcionRef, {
      title: newTitle,
      text: newText,
      data: Timestamp.fromDate(new Date(newData)),
      hour: newHour,
      local: newLocal,
      image: imageUrl,
    });

    setPostCreated(true);
    resetCreatedPostNotice();
  };

  const clearAllInputs = () => {
    setNewTitle("");
    setNewText("");
    setNewData("");
    setPreviewImageUrl("");
  };

  const resetErrorMessage = () => {
    const timeToReset = setInterval(() => {
      setErrorMessage(null);
      clearInterval(timeToReset);
    }, 5000);
  };

  const previewImage = (event) => {
    event.preventDefault();

    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      setPreviewImageUrl(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const uploadImage = async () => {
    const file = fileInputRef.current.files[0];

    if (!file) {
      throw new Error("Nenhuma imagem selecionada");
    }

    const isValidSize = isSizeMbMatch(file.size);

    if (!isValidSize) {
      throw new Error("Tamanho da imagem excede o limite de 3Mb");
    } else if (file == undefined) {
      throw new Error("Nenhuma imagem selecionada");
    } else {
      const storageRef = ref(storage, `eventsImages/${file.name}${Date.now()}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          },
          (error) => {
            console.error(error);
            reject(new Error("Erro no upload da imagem"));
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((url) => {
                if (typeof url !== "string") {
                  throw new Error("URL de download inválida");
                }
                resolve(url);
              })
              .catch((error) => {
                setErrorMessage(error);
                resetErrorMessage();
                reject(new Error("Erro ao obter a URL de download"));
              });
          }
        );
      });
    }
  };

  const isSizeMbMatch = (bytes) => {
    const mb = bytes / (1024 * 1024);
    const mbFormated = mb.toFixed(2);

    if (mbFormated < 3) {
      return true;
    } else {
      return false;
    }
  };

  const handleClearFile = () => {
    fileInputRef.current.value = "";
  };

  const RichTextElement = () => {
    const textEditorModules = {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { ident: "-1" },
          { ident: "+1" },
        ],
      ],
    };

    return (
      <ReactQuill
        theme="snow"
        value={newText}
        onChange={setNewText}
        modules={textEditorModules}
        className="textEditor"
      />
    );
  };

  const closeCreatedPostNotice = () => {
    if (postCreated == true) {
      setPostCreated(false);
    }
  };

  const resetCreatedPostNotice = () => {
    const timeToColeModal = setInterval(() => {
      setPostCreated(false);
      clearInterval(timeToColeModal);
    }, 5000);
  };

  useEffect(() => {
    gsap.from(modalRef.current, {
      opacity: 0,
      y: -500, // Offscreen position
      duration: 2, // Animation duration in seconds
      ease: "Power3.easeInOut", // Easing function for smooth appearance
    });
  }, [postCreated]);

  return authCheck == 0 && loading == true ? (
    <LoaderContainer>
      <BarLoader
        color="#1662a1"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      ></BarLoader>
    </LoaderContainer>
  ) : (
    <NewsLetterPanelContainer>
      {postCreated && (
        <PostCreatedNoticeModal ref={modalRef}>
          <button
            className="closeCreatedPostModal"
            onClick={() => closeCreatedPostNotice()}
          >
            {" "}
            <img
              src={Icons.CloseIcon}
              alt="Ícone para fechar o aviso de postagem criada"
            />{" "}
          </button>
          <img
            className="postCreatedModalImage"
            src={PostCreatedModalImage}
            alt="Simbolo de confirmação da postagem criada"
          />
          <span>Conteúdo publicado com sucesso!</span>
        </PostCreatedNoticeModal>
      )}
      <DashBoardHeader className="asideMenu">
        <img src={Logo} alt="" className="logo" />
        <UserInfosContainer>
          <UserInfos>
            <UserLinks>
              <Link to={"/"} className="homeLink">
                {" "}
                <img src={Icons.HomeIcon} alt="" />
              </Link>
            </UserLinks>
            <img src={UserPhoto} alt="Foto do usuário" className="userPhoto" />
            <span className="userName">Admin</span>
            <img
              src={Icons.ArrowDown}
              alt=""
              className="openPopUpIcon"
              onMouseEnter={() => setPopUpOpen(true)}
            />
          </UserInfos>
          {popUpOpen && (
            <UserControlDropDown onMouseLeave={() => setPopUpOpen(false)}>
              <button className="logoutBtn" onClick={userSignOut}>
                Logout <img src={Icons.LogoutIconRed} alt="" />{" "}
              </button>
            </UserControlDropDown>
          )}
        </UserInfosContainer>
      </DashBoardHeader>
      <PostCreatorContainer>
        <FeatureHeaderContainer>
          <div className="featureHeaderGradient">
            <div className="featureInfos">
              <Link to="/dashboard" className="backToDashBoardLink">
                <img
                  src={Icons.ArrowLeftIcon}
                  alt="Icone voltar para a página anterior"
                />
                Voltar
              </Link>
              <h2 className="featureTitle">Criar eventos</h2>
            </div>
          </div>
        </FeatureHeaderContainer>
        <div className="mainContainer">
          <div className="createContainer">
            <label htmlFor="title">Título</label>
            <input
              className="grayInput"
              type="text"
              placeholder="Title"
              maxLength="50"
              id="title"
              name="title"
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)}
            />
            {
              <TextWriterContainer>
                <label>Conteúdo</label>
                {RichTextElement()}
              </TextWriterContainer>
            }
            <div id="text"></div>
            <label htmlFor="data">Data</label>
            <input
              className="dateInput"
              type="date"
              name="data"
              id="data"
              value={newData}
              onChange={(event) => setNewData(event.target.value)}
            />
            <label htmlFor="data">Horário</label>
            <input
              type="time"
              id="hora"
              className="grayInput"
              name="hora"
              onChange={(event) => setNewHour(event.target.value)}
            />
            <label htmlFor="data">Local</label>
            <input
              type="text"
              id="local"
              className="grayInput"
              name="local"
              onChange={(event) => setNewLocal(event.target.value)}
            />
            <form>
              <label htmlFor="imageInput">Imagem (Escala 1 : 1)</label>
              <input
                type="file"
                accept="image/jpeg, image/png"
                className="inputImage"
                id="imageInput"
                ref={fileInputRef}
                onChange={previewImage}
              />
              <div className="uploadImageContainer">
                <img className="prevUploadImage" src={previewImageUrl} alt="" />
                <progress
                  className="imageUploadProgress"
                  value={progress}
                  max="100"
                ></progress>
              </div>
            </form>
            <button className="createBtn" onClick={createEvent}>
              CRIAR EVENTO
            </button>
            <div className="envStatusContainer">
              {errorMessage != null && (
                <span>
                  {errorMessage}{" "}
                  <img src={Icons.AlertIconRed} alt="Ícone de alerta" />{" "}
                </span>
              )}
            </div>
          </div>
          <PreviewCardContainer>
            <h2 className="previewContainerTitle">Prévia</h2>
            <div className="previewCard">
              <div className="previewCardHeader">
                <span className="previewCardTitle">{newTitle}</span>
              </div>
              <div className="previewCardContent">
                <img
                  className="previewCardUploadImage"
                  src={previewImageUrl}
                  alt=""
                />
                <div
                  className="previewCardTextBox"
                  dangerouslySetInnerHTML={{ __html: newText }}
                ></div>
                <span className="previewCardData">{newData}</span>
              </div>
            </div>
          </PreviewCardContainer>
        </div>
      </PostCreatorContainer>
      <Footer></Footer>
    </NewsLetterPanelContainer>
  );
};

export default EventCreator;

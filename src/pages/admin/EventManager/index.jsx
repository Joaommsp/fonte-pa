import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { query, orderBy } from "firebase/firestore";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";

import Footer from "../../../Components/Footer";

import {
  NewsLetterPanelContainer,
  LoaderContainer,
  DashBoardHeader,
  UserControlDropDown,
  UserInfos,
  UserInfosContainer,
  UserLinks,
  PostManagerContentContainer,
  FeatureHeaderContainer,
  CardsContainer,
  ActionStatusContainer,
  NoticeOldPostData,
  PopUpUpdateContainer,
} from "./styles";

import Icons from "../../../assets/images/svg/icons/iconsExport";
import Logo from "../../../assets/images/imagens-oficiais/banner.svg";
import UserPhoto from "../../../assets/images/userDefaultPhoto.png";
import SucessDeleteImage from "../../../assets/images/succesDeleteImage.png";
import ErrorDeleteImage from "../../../assets/images/error-image.png";

import BarLoader from "react-spinners/BarLoader";

const EventManager = () => {
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [aouthCheck, setAothCheck] = useState(0);
  const [actionStatus, setActionStatus] = useState("");
  const [actionStatusImage, setActionStatusImage] = useState(null);
  const [openPopupIndex, setOpenPopupIndex] = useState(null);

  const [newTitle, setNewTitle] = useState("");

  const eventsColletcionRef = collection(db, "events");

  const navigate = useNavigate();

  useEffect(() => {
    let loadingTime = setInterval(() => {
      setLoading(false);
      clearInterval(loadingTime);
    }, 3000);

    const timeAothCheck = setTimeout(() => {
      setAothCheck(1);
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

  const getEvents = async () => {
    const queryOrderByDate = query(
      eventsColletcionRef,
      orderBy("data", "desc")
    );
    const data = await getDocs(queryOrderByDate);
    setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    const verifyOldData = () => {
      if (events.length > 0) {
        const twoMonthsAgo = new Date();
        twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 5);

        events.forEach((p) => {
          const postDate = createDateObject(formateDate(p.data));
          if (postDate < twoMonthsAgo) {
            deleteEvent(p.id, p.image);
          }
        });
      }
    };

    verifyOldData();
  }, [events]);

  const formateDate = (data) => {
    const dateInMilliseconds = data.seconds * 1000 + data.nanoseconds / 1000000;

    const dataFormatada = new Date(dateInMilliseconds);

    dataFormatada.setDate(dataFormatada.getDate() + 1);

    const formatDDMMYYYY = dataFormatada.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    return formatDDMMYYYY;
  };

  const createDateObject = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(year, month - 1, day); //
  };

  const deleteEvent = async (id, imageUrl) => {
    const storage = getStorage();

    const postDoc = doc(db, "events", id);
    const desertRef = ref(storage, `${imageUrl}`);

    await deleteDoc(postDoc)
      .then(() => {
        deleteObject(desertRef);
        setActionStatus("Conteúdo excluído com sucesso!");
        setActionStatusImage(SucessDeleteImage);
        closeActionStatusModal();
      })
      .catch((error) => {
        setActionStatus(error.message);
        setActionStatusImage(ErrorDeleteImage);
        closeActionStatusModal();
      });
  };

  const updateEvent = async (eventId) => {
    const eventRef = doc(db, "events", eventId);

    await updateDoc(eventRef, {
      title: newTitle,
    });
  };

  const closeActionStatusModal = () => {
    const timeToResetErro = setInterval(() => {
      setActionStatus(null);
      reloadPage();
      clearInterval(timeToResetErro);
    }, 3000);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const instantCloseActionStatusModal = () => {
    setActionStatus(null);
  };

  const handleOpenPopup = (index) => {
    setOpenPopupIndex(index);
  };

  const handleClosePopup = () => {
    setOpenPopupIndex(null);
  };

  return aouthCheck == 0 && loading == true ? (
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
      {actionStatus != null && actionStatusImage != null && (
        <ActionStatusContainer>
          <button
            className="closeCreatedPostModal"
            onClick={() => instantCloseActionStatusModal()}
          >
            {" "}
            <img
              src={Icons.CloseIcon}
              alt="Ícone para fechar o aviso de postagem criada"
            />{" "}
          </button>
          <img src={actionStatusImage} alt="" className="actionStatusImage" />
          <span>{actionStatus}</span>
        </ActionStatusContainer>
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
      <PostManagerContentContainer>
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
              <h2 className="featureTitle">Gerenciador de Eventos</h2>
            </div>
          </div>
        </FeatureHeaderContainer>
        <NoticeOldPostData>
          <span>
            {" "}
            <img src={Icons.InfoCicleIcon} alt="" /> Eventos com mais de 5 meses
            serão excluídos{" "}
          </span>
        </NoticeOldPostData>
        <CardsContainer>
          {events.map((event, index) => {
            return (
              <div className="card" key={index}>
                {openPopupIndex === index && (
                  <PopUpUpdateContainer className="fullPopUp">
                    <h2 className="popUpUpdateTitle">Editar Postagem</h2>
                    <button
                      onClick={handleClosePopup}
                      className="closePopUpBtn"
                    >
                      <img
                        src={Icons.ArrowLeftIcon}
                        alt="Icone para fechar conteúdo"
                        title="Fechar"
                      />
                      Voltar
                    </button>
                    <div className="editInputs">
                      <label htmlFor="newTitle">Título</label>
                      <input
                        type="text"
                        id="newTitle"
                        defaultValue={event.title}
                        onChange={(event) => setNewTitle(event.target.value)}
                      />
                      <label htmlFor="newTitle">Título</label>
                      <input
                        type="text"
                        id="newTitle"
                        defaultValue={event.title}
                        onChange={(event) => setNewTitle(event.target.value)}
                      />
                    </div>
                    <button onClick={() => updateEvent(event.id)}>
                      Alterar
                    </button>
                  </PopUpUpdateContainer>
                )}
                <div className="cardHeader">
                  <h2 className="cardTitle">{event.title}</h2>
                </div>
                <div className="cardHeaderContainer">
                  <img className="cardImage" src={event.image} alt="" />
                  <div className="managementOptions">
                    <button
                      className="deleteEventBtn"
                      onClick={() => deleteEvent(event.id, event.image)}
                    >
                      <img
                        src={Icons.DeleteIconRed}
                        alt="Icone de deletar postagem"
                      />
                    </button>
                    <button
                      className="updateEventBtn"
                      onClick={() => handleOpenPopup(index)}
                    >
                      <img
                        src={Icons.UpdateIcon}
                        alt="Icone de deletar postagem"
                      />
                    </button>
                  </div>
                </div>
                <div className="cardBotton">
                  <span className="cardData">
                    {" "}
                    <img src={Icons.CalendarIcon} alt="Ícone Calendário" />{" "}
                    {formateDate(event.data)}
                  </span>
                  <span className="cardData">
                    {" "}
                    <img src={Icons.ClockIcon} alt="Ícone relógio" />{" "}
                    {event.hour}
                  </span>
                  <span className="cardData">
                    {" "}
                    <img src={Icons.MapIconDark} alt="Ícone Mapa Local" />{" "}
                    {event.local}
                  </span>
                </div>
              </div>
            );
          })}
        </CardsContainer>
      </PostManagerContentContainer>
      <Footer></Footer>
    </NewsLetterPanelContainer>
  );
};

export default EventManager;

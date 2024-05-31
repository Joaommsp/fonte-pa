import { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { query, orderBy } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

import {
  EventsSectionContainer,
  EmptyEvents,
  PopUpCardContainer,
} from "./styles";

import Icons from "../../assets/images/svg/icons/iconsExport";
import NothingPosted from "../../assets/images/notFound.png";

const EventsSection = () => {
  const [events, setEvents] = useState([]);
  const [openPopUpcard, setOpenPopUpcard] = useState(false);

  const eventsColletcionRef = collection(db, "events");

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

  const handleOpenPopUp = (index) => {
    setOpenPopUpcard(index);
  };

  const handleClosePopUp = () => {
    setOpenPopUpcard(false);
  };

  return (
    <EventsSectionContainer>
      {events.length == 0 && (
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
      {events.map((event, index) => {
        return (
          <div className="card" key={index}>
            {openPopUpcard === index && (
              <PopUpCardContainer>
                <button
                  className="closePopUpBtn"
                  onClick={() => handleClosePopUp()}
                >
                  <img
                    src={Icons.CloseIcon}
                    alt="Ícone de X para fechar modal"
                  />
                </button>
                <div className="eventImageContainer">
                  <img className="eventImage" src={event.image} alt="" />
                  <span className="eventData">
                    {" "}
                    <img src={Icons.CalendarIcon} alt="Ícone Calendário" />{" "}
                    {formateDate(event.data)}
                  </span>
                </div>
                <div className="eventDetailsContainer">
                  <span className="eventTitle">{event.title}</span>
                  <div
                    className="eventTextContainer"
                    dangerouslySetInnerHTML={{ __html: event.text }}
                  ></div>
                </div>
              </PopUpCardContainer>
            )}
            <div className="cardHeaderContainer">
              <img className="cardImage" src={event.image} alt="" />
              <div className="cardHeader">
                <h2 className="cardTitle">{event.title}</h2>
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
                <img src={Icons.ClockIcon} alt="Ícone relógio" /> {event.hour}
              </span>
              <span className="cardData cardLocal">
                {" "}
                <img src={Icons.MapIconDark} alt="Ícone Mapa Local" />{" "}
                {event.local}
              </span>
            </div>
            <button
              className="aboutTheEventBtn"
              onClick={() => handleOpenPopUp(index)}
            >
              Saiba mais
            </button>
          </div>
        );
      })}
    </EventsSectionContainer>
  );
};

export default EventsSection;

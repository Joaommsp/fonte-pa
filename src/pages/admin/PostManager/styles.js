.cardsContainer {
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;

  flex-grow: 1;

  overflow-y: scroll;
}

.cardsPreviewsTitle {
  font-size: 1.5rem;
  color: #181a20;
}

.card {
  min-width: 523px;
  min-height: fit-content;
  margin-top: 1rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;

  border: 2px solid #00000020;
  border-radius: 5px;

  position: relative;
}

.cardTitle {
  width: 400px;
  font-weight: 500;
  color: #181a20;
  font-size: 1.2rem;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.cardSubtitle {
  font-weight: 400;
  color: #181a20;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  width: 500px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.cardHashtags {
  font-size: 0.9rem;
  color: #b4b4b8;
  margin-bottom: 1rem;
}

.cardImage {
  width: 374px;
  height: 211px;
  overflow: hidden;
  object-fit: cover;

  border: 1px solid #00000020;
  margin-bottom: 1rem;
}

.cardBotton {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: fit-content;
}

.cardText {
  display: block;
  width: 500px;
  text-align: justify;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-weight: 400;
  color: #181a20;
  font-size: 0.9rem;
  line-height: 1.5;

  margin-bottom: 1rem;
}

.cardData {
  font-weight: 400;
  color: #181a20;
  font-size: 0.8rem;
}

.deleteBtn {
  position: absolute;
  border: 0;
  background-color: transparent;

  right: 1rem;

  cursor: pointer;
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 5px;
  padding: 0.5rem;
  border: 1px solid #00000030;

  transition: 0.5s ease-in-out;
}

.deleteBtn img {
  width: 20px;
}

.deleteBtn:hover {
  opacity: 50%;
}
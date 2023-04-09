import { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch(() => console.log);

      api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch(() => console.log);
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__photo-place">
          <img
            src={userAvatar}
            alt="фото профиля"
            className="profile__avatar"
          />
          <button
            onClick={onEditAvatar}
            className="profile__edit-photo-button"
            type="button"
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={onEditProfile}
              className="profile__edit-button"
              type="button"
              aria-label="редактировать"
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__add-button"
          type="button"
          aria-label="добавить"
        ></button>
      </section>
      <section className="elements">
        <ul className="elements-list">
          {cards.map((cardInfo) => {
            return <Card key={cardInfo._id} cardInfo={cardInfo} onCardClick={onCardClick} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default Main;

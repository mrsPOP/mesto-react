import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { currentUserContext } from "../contexts/CurrentUserContext";
import api from '../utils/api';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [currentUser, setСurrentUser] = useState({
    name: '',
    about: '',
    avatar: '',
    _id: '',
    cohort: '',
  });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setСurrentUser(data)
      })
      .catch(() => console.log);

      api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch(() => console.log);
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  return (
    <>
      <currentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
        </div>
        <PopupWithForm
          title={"Редактировать профиль"}
          name={"edit-form"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="profile-name-input"
            className="popup__input popup__input_el_name"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="profile-name-input-error popup__input-error"></span>
          <input
            id="profile-description-input"
            className="popup__input popup__input_el_description"
            type="text"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="profile-description-input-error popup__input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          title={"Обновить аватар"}
          name={"edit-profile-photo"}
          buttonName={"Создать"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="new-photo-link-input"
            className="popup__input"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="new-photo-link-input-error popup__input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          title={"Новое место"}
          name={"add-new-place-form"}
          buttonName={"Создать"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="new-place-name-input"
            className="popup__input popup__input_card-name"
            type="text"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="new-place-name-input-error popup__input-error"></span>
          <input
            id="new-place-link-input"
            className="popup__input popup__input_card-link"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="new-place-link-input-error popup__input-error"></span>
        </PopupWithForm>
        <ImagePopup
          isOpen={isImagePopupOpen}
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </currentUserContext.Provider>
    </>
  );
}

export default App;
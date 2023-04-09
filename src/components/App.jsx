import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
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
        buttonName={"Сохранить"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="profile-name-input"
          class="popup__input popup__input_el_name"
          type="text"
          value=""
          placeholder="Имя"
          minlength="2"
          maxlength="40"
          required
        />
        <span class="profile-name-input-error popup__input-error"></span>
        <input
          id="profile-description-input"
          class="popup__input popup__input_el_description"
          type="text"
          value=""
          placeholder="О себе"
          minlength="2"
          maxlength="200"
          required
        />
        <span class="profile-description-input-error popup__input-error"></span>
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
          class="popup__input"
          type="url"
          value=""
          placeholder="Ссылка на картинку"
          required
        />
        <span class="new-photo-link-input-error popup__input-error"></span>
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
          class="popup__input popup__input_card-name"
          type="text"
          value=""
          placeholder="Название"
          minlength="2"
          maxlength="30"
          required
        />
        <span class="new-place-name-input-error popup__input-error"></span>
        <input
          id="new-place-link-input"
          class="popup__input popup__input_card-link"
          type="url"
          value=""
          placeholder="Ссылка на картинку"
          required
        />
        <span class="new-place-link-input-error popup__input-error"></span>
      </PopupWithForm>

      <ImagePopup
        isOpen={isImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <div id="deleteCardPopup" class="popup">
        <div class="popup__container">
          <button
            class="popup__close-button"
            type="button"
            aria-label="закрыть"
          ></button>
          <h2 class="popup__header">Вы уверены?</h2>
          <form class="popup__form" name="delete-card">
            <button class="popup__button" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

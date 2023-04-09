const ImagePopup = ({ card, onClose, isOpen }) => {
  return (
    <div
      id="imagePopup"
      class={`popup popup_opacity_total ${isOpen ? "popup_opened" : ""}`}
    >
      <div class="popup__container popup__container_background_transparent">
        <button
          onClick={onClose}
          class="popup__close-button"
          type="button"
          aria-label="закрыть"
        ></button>
        <div class="popup__card-info">
          <img src={card.link} alt={card.name} class="popup__card-picture" />
          <p class="popup__card-description">{card.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;

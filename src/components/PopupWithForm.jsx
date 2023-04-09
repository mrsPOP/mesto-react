const PopupWithForm = ({ title, name, buttonName, isOpen, onClose, children }) => {
  return (
    <div class={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div class="popup__container">
        <button
					onClick={onClose}
          class="popup__close-button"
          type="button"
          aria-label="закрыть"
        ></button>
        <h2 class="popup__header">{title}</h2>
        <form class="popup__form" name={name} novalidate>
          {children}
          <button class="popup__button" type="submit">
            {buttonName}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;

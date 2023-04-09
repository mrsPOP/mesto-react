const Card = ({cardInfo, onCardClick}) => {
  return (
    <li className="elements-list__item">
      <article className="element">
        <img
          className="element__image"
          src={cardInfo.link}
          alt={cardInfo.name}
          onClick={() => {onCardClick(cardInfo)}}
        />
        <div className="element__content">
          <button
            className="element__remove-button"
            type="button"
            aria-label="удалить"
          ></button>
          <p className="element__description">{cardInfo.name}</p>
          <div>
            <button
              className="element__like"
              type="button"
              aria-label="поставить лайк"
            ></button>
            <p className="element__like-number">{cardInfo.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  );
};

export default Card;

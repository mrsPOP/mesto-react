import { useContext } from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";

const Card = ({cardInfo, onCardClick}) => {
  const currentUser = useContext(currentUserContext);
  const isOwn = cardInfo.owner._id === currentUser._id;
  const isLiked = cardInfo.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `element__like ${isLiked && 'element__like_active'}` 
  );

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
        {isOwn &&
          <button
            className="element__remove-button"
            type="button"
            aria-label="удалить"
          ></button>}
          <p className="element__description">{cardInfo.name}</p>
          <div>
            <button
              className={cardLikeButtonClassName}
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

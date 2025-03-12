import {likeCard, unlikeCard, deleteCardApi} from "./api";
import {openModal, closeModal} from "./modal"

//@todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

//Для удаления карточек
const confirmPopup = document.querySelector(".popup_type_confirm");
const confirmForm = confirmPopup.querySelector(".popup__form");

//@todo: Функция создания карточки
function createCard(value, userId, handlerDeleteCard, handlerLikeImage, openImageCard) {

  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true); //клонируем содержимое тега template
  const imageCardElement = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

// Для реализации отображения лайков
  const likeCountElement = cardElement.querySelector(".card__like-count");
  const likeButton = cardElement.querySelector(".card__like-button");

// Устанавливаем значение вложенных элементов
    imageCardElement.src = value.link;
    imageCardElement.alt = value.name;
    cardTitle.textContent = value.name;

//добавляем к иконке удаления обработчик клика, по которому будет вызван переданный в аргументах колбэк

  const deleteButton = cardElement.querySelector(".card__delete-button");
  if (value.owner._id === userId) {
    deleteButton.addEventListener("click", () => handlerDeleteCard(cardElement, value._id));
  } else {
    deleteButton.style.display = 'none';
  }
    likeCountElement.textContent = value.likes.length;
  const isLiked = value.likes.some((like) => like._id === userId); //лайкнул ли?
    if (isLiked) {
      likeButton.classList.add("card__like-button_is-active");
    }

 //Лайк
 likeButton.addEventListener("click", (evt) => handlerLikeImage(evt, value._id, userId));

//Отрытие изображения
  const imageFullSize = cardElement.querySelector(".card__image");
  imageFullSize.addEventListener("click", () => openImageCard(value));

  return cardElement;
}

//@todo: Функция удаления карточки
function deleteCard(cardElement, cardId) {

// Открываем попап подтверждения
openModal(confirmPopup);

// Обработчик подтверждения удаления
const handleConfirmDelete = (evt) => {
  evt.preventDefault();
  deleteCardApi(cardId)
    .then(() => {
      cardElement.remove();
      closeModal(confirmPopup);
      confirmForm.removeEventListener("submit", handleConfirmDelete);
    })
};

confirmForm.removeEventListener("submit", handleConfirmDelete);

confirmForm.addEventListener("submit", handleConfirmDelete);
}

//@todo: Функция like карточки API
const likeImage = function(evt, cardId, userId) {
  const likeButton = evt.target;
  const likeCountElement = likeButton.closest('.card__description').querySelector('.card__like-count');

  if (likeButton.classList.contains("card__like-button_is-active")) {
    unlikeCard(cardId)
      .then((updatedCard) => {
        likeCountElement.textContent = updatedCard.likes.length;
        likeButton.classList.remove("card__like-button_is-active");
      })
  } else {
    likeCard(cardId)
      .then((updatedCard) => {
        likeCountElement.textContent = updatedCard.likes.length;
        likeButton.classList.add("card__like-button_is-active");
      })
  }
};

export{createCard, deleteCard, likeImage};
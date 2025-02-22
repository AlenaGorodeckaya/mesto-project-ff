
//@todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

//@todo: Функция создания карточки
function createCard(value, handlerDeleteCard, handlerLikeImage, openImageCard) {

  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true); //клонируем содержимое тега template
  const imageCardElement = cardElement.querySelector(".card__image");

//устанавливаем значение вложенных элементов
    imageCardElement.src = value.link;
    imageCardElement.alt = value.name;
    cardElement.querySelector(".card__title").textContent = value.name;

//добавляем к иконке удаления обработчик клика, по которому будет вызван переданный в аргументах колбэк
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener ("click", () => handlerDeleteCard(cardElement));

//Лайк
  const imageLikeButton = cardElement.querySelector(".card__like-button");
  imageLikeButton.addEventListener ("click",handlerLikeImage);

//Отрытие изображения
  const imageFullSize = cardElement.querySelector(".card__image");
  imageFullSize.addEventListener("click", () => openImageCard(value));

  return cardElement;
}

//@todo: Функция удаления карточки
function deleteCard(handlerDeleteCard) {
  handlerDeleteCard.remove();
}

//@todo: Функция like карточки
const likeImage = function(evt) {
  evt.target.classList.toggle("card__like-button_is-active")
}

export{createCard, deleteCard, likeImage};
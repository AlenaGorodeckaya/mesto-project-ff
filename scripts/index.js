// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

//@todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
//для получения содержимого template обращаемся к свойству content

// @todo: Функция создания карточки
function createCard(value, handlerDeleteCard) {
//клонируем содержимое тега template
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);

//устанавливаем значение вложенных элементов
  cardElement.querySelector(".card__image").src = value.link;
  cardElement.querySelector(".card__image").alt = value.name;
  cardElement.querySelector(".card__title").textContent = value.name;

// добавляем к иконке удаления обработчик клика, по которому будет вызван переданный в аргументах колбэк
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener ("click", () => handlerDeleteCard(cardElement));

  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(handlerDeleteCard) {
  handlerDeleteCard.remove();
}

// @todo: Вывести карточки на страницу
  initialCards.forEach(function(value) {
    placesList.append(createCard(value, deleteCard));
  });



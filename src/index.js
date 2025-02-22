// импорт главного файла стилей
import "./pages/index.css";
import initialCards from "./scripts/cards.js";
import {openModal, closeModal} from "./scripts/components/modal.js";
import {createCard, deleteCard, likeImage} from "./scripts/components/card.js";

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

const popups = document.querySelectorAll(".popup");
const buttonEditProfile = document.querySelector(".profile__edit-button"); // кнопка редактирования
const buttonAddProfile = document.querySelector (".profile__add-button"); // кнопка "+"
const editPopupProfile = document.querySelector(".popup_type_edit"); //модальное редактор профиля
const addPopupNewCard =  document.querySelector(".popup_type_new-card"); // модальное + карточки
const popupInputName = document.querySelector(".popup__input_type_name");
const descriptionProfile = document.querySelector(".profile__description"); //описание
const titleProfile = document.querySelector(".profile__title");
const popupInputDescription = document.querySelector('.popup__input_type_description'); //поле ввода описания
const closePopup = document.querySelector(".popup__close");

//Для добавления нового изображения
const popupFormCardSave = addPopupNewCard.querySelector(".popup__form");
const inputNewNameCard = addPopupNewCard.querySelector(".popup__input_type_card-name"); //поле ввода наименования
const inputNewUrlCard = addPopupNewCard.querySelector(".popup__input_type_url"); //поле ввода URL 

//Для открытия изображения 
const popupImage = document.querySelector(".popup__image"); //изображение
const captionPopupImage = document.querySelector(".popup__caption"); //подпись
const popupImageType= document.querySelector(".popup_type_image");

// @todo: Вывести карточки на страницу
initialCards.forEach(function(value) {
  placesList.append(createCard(value, deleteCard, likeImage, openImage));
});

//Открытие модального окна (при нажатии на "+" / кнопку редактирования)
function openPopupProfile () {
  openModal (editPopupProfile);
  popupInputName.value = titleProfile.textContent;
  popupInputDescription.value = descriptionProfile.textContent;
}
buttonEditProfile.addEventListener("click", openPopupProfile);
buttonAddProfile.addEventListener("click", () => openModal (addPopupNewCard));

//Закрытие модального окна (при нажатии на "х")
popups.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
      if (evt.target.classList.contains(closePopup.classList)) {
          closeModal(modal);
      };
  });
});

//Закрытие модального окна (при нажатии на "оверлей")
popups.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    if (evt.target.classList.contains('popup_is-opened')) {
        closeModal (modal)
      };
  });
});

//Редактирование имени и информации о себе
function handleFormSubmitProfile(evt) {
  evt.preventDefault();
    titleProfile.textContent = popupInputName.value;
    descriptionProfile.textContent = popupInputDescription.value;
  closeModal(editPopupProfile);
}
editPopupProfile.addEventListener("submit", handleFormSubmitProfile); // отправка формы редактирования информации

//Создание новых карточек с изображением. Сохранение по кнопке.
function handleFormSubmitImage () { 
  const newImage = {
    name: inputNewNameCard.value,
    link: inputNewUrlCard.value,
  };
  placesList.prepend(createCard(newImage, deleteCard, likeImage, openImage))
}

popupFormCardSave.addEventListener("submit", function(evt) {
  evt.preventDefault();
  handleFormSubmitImage();
  popupFormCardSave.reset();
  closeModal(addPopupNewCard);
});

//Открытие полноразмерного изображения
function openImage(value) {
  popupImage.src = value.link;
  popupImage.alt = value.name;
  captionPopupImage.textContent = value.name;
    openModal(popupImageType);
}


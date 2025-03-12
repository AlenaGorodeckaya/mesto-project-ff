// импорт главного файла стилей
import "./pages/index.css";
import {openModal, closeModal} from "./scripts/components/modal.js";
import {createCard, deleteCard, likeImage} from "./scripts/components/card.js";
import {enableValidation, clearValidation} from "./scripts/components/validation.js";
import {receiveUserData, receiveCardsData, updateUserData, addNewCard, updateUserAvatar} from "./scripts/components/api.js"

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

// Для добавления нового изображения
const popupFormCardSave = addPopupNewCard.querySelector(".popup__form");
const inputNewNameCard = addPopupNewCard.querySelector(".popup__input_type_card-name"); //поле ввода наименования
const inputNewUrlCard = addPopupNewCard.querySelector(".popup__input_type_url"); //поле ввода URL

// Для открытия изображения 
const popupImage = document.querySelector(".popup__image"); //изображение
const captionPopupImage = document.querySelector(".popup__caption"); //подпись
const popupImageType= document.querySelector(".popup_type_image");

// Для валидации
const profileForm = editPopupProfile.querySelector(".popup__form");

// Для удаления
const confirmPopup = document.querySelector(".popup_type_confirm");
const confirmDeleteForm = confirmPopup.querySelector(".popup__form");

// Для редактирования аватара
const profileAvatarImage = document.querySelector(".profile__image");
const avatarPopupType = document.querySelector(".popup_type_avatar");
const avatarPopupForm = avatarPopupType.querySelector(".popup__form");
const avatarInputPopupTypeURL = avatarPopupType.querySelector(".popup__input_type_url");

// Открытие модального окна (при нажатии на "+" / кнопку редактирования)
function openPopupProfile () {
  openModal (editPopupProfile);
  popupInputName.value = titleProfile.textContent;
  popupInputDescription.value = descriptionProfile.textContent;
}

// Обработчик клика для кнопки сохранения
buttonEditProfile.addEventListener("click", () => {
  openModal(editPopupProfile);
  openPopupProfile ();
  clearValidation(profileForm, validationConfig);
});

// Обработчик клика для кнопки добавления
buttonAddProfile.addEventListener("click", () => {
  clearValidation(popupFormCardSave, validationConfig); 
  openModal(addPopupNewCard);
});

// Закрытие модального окна (при нажатии на "х")
popups.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
      if (evt.target.classList.contains(closePopup.classList)) {
      closeModal(modal);
      // Очистка поля формы
        if (modal === addPopupNewCard) {
        popupFormCardSave.reset();
        }
      }
  });
});

// Закрытие модального окна (при нажатии на "оверлей")
popups.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_is-opened")) {
      closeModal(modal);
        // Очистка поля формы
        if (modal === addPopupNewCard) { 
        popupFormCardSave.reset();
        };
      }
  });
});

// Редактирование имени и информации о себе (отправка данных на сервер и обновление)
function handleFormSubmitProfile(evt) {
  evt.preventDefault();
    const submitButton = evt.submitter;// Кнопка сохранить
    const newUserName = popupInputName.value; // Новое имя
    const newDescription = popupInputDescription.value; //О себе

    toggleButtonLoadingState(submitButton, true); //"Сохранение..."

// Отправка данных на сервер
updateUserData(newUserName, newDescription)
  .then((userData) => {
    // Обновление данных на странице
    titleProfile.textContent = userData.name;
    descriptionProfile.textContent = userData.about;
    closeModal(editPopupProfile);
  })
  // Выполнится в любом случае независимо от статуса промиса.Возвращение кнопки сохранения к исходу
  .finally(() => { 
    toggleButtonLoadingState(submitButton, false);
  });
}

// Отправка формы редактирования информации
editPopupProfile.addEventListener("submit", handleFormSubmitProfile);

// Создание новых карточек с изображением. Сохранение по кнопке.
function handleFormSubmitImage (evt,userId) {
  evt.preventDefault();
  const submitButton = evt.submitter;
  const newCardName = inputNewNameCard.value;
  const newCardLink = inputNewUrlCard.value;

  toggleButtonLoadingState(submitButton, true); // "Сохранение..."

  addNewCard(newCardName,newCardLink)
  .then((cardData) => {
    // Создаем новую карточку и добавляем её на страницу
    const cardElement = createCard(cardData, userId, deleteCard, likeImage, openImage);
    placesList.prepend(cardElement);
  closeModal(addPopupNewCard);
  popupFormCardSave.reset();
  })
  .finally(() => {
    toggleButtonLoadingState(submitButton, false);
  });
}

// Открытие полноразмерного изображения
function openImage(value) {
  popupImage.src = value.link;
  popupImage.alt = value.name;
  captionPopupImage.textContent = value.name;
    openModal(popupImageType);
}

// Валидация
const validationConfig = {
  formSelector: ".popup__form", // Форма
  inputSelector: ".popup__input", // Поле ввода
  submitButtonSelector: ".popup__button", // Кнопка 
  inactiveButtonClass: "popup__button_disabled", // Кнопка неактивна
  inputErrorClass: "popup__input_type_error", // Поле ошибки
  errorClass: "popup__error_visible" // Отображение ошибки
};

// Включение валидации. Передача настроек.
enableValidation(validationConfig);

//Загрузка данных пользователя и карточек методом Promise.all()
Promise.all([receiveUserData(), receiveCardsData()])
  .then(([userData, cardsData]) => {
    const userId = userData._id;
    
    // Обновление данных пользователя
    titleProfile.textContent = userData.name;
    descriptionProfile.textContent = userData.about;
    profileAvatarImage.style.backgroundImage = `url(${userData.avatar})`;

    // Отображение карточки
    renderCards(cardsData, userId);
    popupFormCardSave.addEventListener("submit", (evt) => handleFormSubmitImage(evt, userId));
  });

// Функция для отображения карточек
function renderCards(cardsData, userId) {
  // Очистка
  placesList.innerHTML = "";

  cardsData.forEach((displayCard) => {
    const cardElement = createCard(displayCard, userId, deleteCard, likeImage, openImage);
    placesList.append(cardElement);
  });
}

// Обработчик аватара
profileAvatarImage.addEventListener("click", () => {
  openModal(avatarPopupType);
  clearValidation(avatarPopupForm, validationConfig);
});

// Отправка формы обновления аватара
function handleFormSubmitAvatar(evt) {
  evt.preventDefault();
  const submitButton = evt.submitter;
  const newAvatarUrl = avatarInputPopupTypeURL.value;

  toggleButtonLoadingState(submitButton, true);

  updateUserAvatar(newAvatarUrl)
    .then((userData) => {
      //установка фона
      profileAvatarImage.style.backgroundImage = `url(${userData.avatar})`;
      closeModal(avatarPopupType);
      avatarPopupForm.reset(); // Очищаем поле формы
    })
    .finally(() => {
      // Возвращаем исходный текст кнопки
      toggleButtonLoadingState(submitButton, false);
    });
}

avatarPopupForm.addEventListener("submit", handleFormSubmitAvatar);

// Улучшение UX. Процесс загрузки. Функция для Сохранения
function toggleButtonLoadingState(button, loading,) {
  if (loading) {
    button.textContent = "Сохранение...";
    button.disabled = true; // Кнопкка неактивнаа
  } else {
    button.textContent = "Сохранить"; //
    button.disabled = false; // Кнопка активна
  }
}

// Реализация попапа удаления карточки
confirmDeleteForm.addEventListener("submit", handleFormSubmitConfirm);

function handleFormSubmitConfirm(evt) {
  evt.preventDefault();
}
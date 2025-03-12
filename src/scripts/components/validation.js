// Валидация

// Отображение ошибки
const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage; // текст ошибки
    errorElement.classList.add(config.errorClass);
};

// Скрытие ошибки
const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = ''; // очистка текста ошибки
    errorElement.classList.remove(config.errorClass); 
  };

// Проверка валидности
const checkInputValidity = (formElement, inputElement, config) => {
    // Проверка соответсвия поля регулярному выражению
    if (inputElement.validity.valueMissing) {
        inputElement.setCustomValidity("Вы пропустили это поле.");
    } 
    else if (inputElement.validity.tooShort) {
        inputElement.setCustomValidity(`Минимальное количество символов: ${inputElement.minLength}. Длина текста сейчас: ${inputElement.value.length} символ.`);
    } else if (inputElement.validity.typeMismatch && inputElement.type === "url") {
        inputElement.setCustomValidity("Введите адрес сайта.");
    
    } else if (inputElement.validity.patternMismatch) {
     inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }

    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, config); //При не валидном поле
    } else {
      hideInputError(formElement, inputElement, config); //скрываем ошибку, если поле валидно
    }
};

// Функция для проверки всех полей ввода формы на валидность
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

// Изменение состояние кнокпи
  const toggleButtonState = (inputList, buttonElement, config) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(config.inactiveButtonClass); //неактив
      buttonElement.disabled = true; //отключено
    } else {
      // Если все поля ввода прошли валидацию
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.disabled = false; //включаем кнопку
    }
  };

//Обработчик
const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector); // Поиск кнопки отправки 
    toggleButtonState(inputList, buttonElement, config);// начальное состояние кнопки

 // Для каждого поля
 inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config); //валидность при вводе
      toggleButtonState(inputList, buttonElement, config); //состояние кнопки
    });
  });
};

// Функция для включения валидации всех форм
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement, config);
  });
};

// Функция для очистки ошибок валидации
const clearValidation = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
        inputList.forEach((inputElement) => {
        hideInputError(formElement, inputElement, config);
        });
    toggleButtonState(inputList, buttonElement, config); //Если хотя бы одно из полей не прошло валидацию, кнопка «Сохранить» должна быть неактивной
};

export { enableValidation, clearValidation };
//Настройка для запроса
const config = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-33",
    headers: {
        authorization: "04da34de-471c-4d68-89ba-47789b851efa",
        "Content-Type": "application/json",
        },
};

//Get-запрос к серверу:
//Запрос данных о пользователе
function receiveUserData() {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers,
    })
    
//Проверка ответа от сервера
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

//Запрос данных карточек
function receiveCardsData() {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers,
    })

//Проверка ответа от сервера
    .then((res) => {
      if (res.ok) {
        return res.json(); 
      }
      return Promise.reject(`Ошибка: ${res.status}`); 
    });
  }

//Редактирование профиля
function updateUserData(name, about) {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

// Новая карточка
function addNewCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

// Лайк карточки
function likeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

// Удаление лайка карточки
function unlikeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

// Удаление карточки
function deleteCardApi(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

// Изменение аватара
function updateUserAvatar(avatarUrl) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarUrl,
    }),
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

  export { receiveUserData, receiveCardsData, updateUserData, addNewCard, likeCard, unlikeCard, deleteCardApi, updateUserAvatar};

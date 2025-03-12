(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",n)}function t(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n)}function n(e){if("Escape"===e.key){var n=document.querySelector(".popup_is-opened");n&&t(n)}}var r=document.querySelector("#card-template").content;function o(e,t,n,o,i){var c=r.querySelector(".places__item").cloneNode(!0),u=c.querySelector(".card__image"),a=c.querySelector(".card__title"),l=c.querySelector(".card__like-count"),s=c.querySelector(".card__like-button");u.src=e.link,u.alt=e.name,a.textContent=e.name;var d=c.querySelector(".card__delete-button");return e.owner._id===t?d.addEventListener("click",(function(){return n(c,e._id)})):d.style.display="none",l.textContent=e.likes.length,e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active"),s.addEventListener("click",(function(t){return o(t,e._id,s,l)})),c.querySelector(".card__image").addEventListener("click",(function(){return i(e)})),c}confirmForm.removeEventListener("submit",handleConfirmDelete),confirmForm.addEventListener("submit",handleConfirmDelete);var i=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass)},c=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)},u=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){i(e,n,t)})),c(n,r,t)},a={baseUrl:"https://nomoreparties.co/v1/wff-cohort-33",headers:{authorization:"04da34de-471c-4d68-89ba-47789b851efa","Content-Type":"application/json"}};function l(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var d=document.querySelector(".places__list"),p=document.querySelectorAll(".popup"),f=document.querySelector(".profile__edit-button"),m=document.querySelector(".profile__add-button"),_=document.querySelector(".popup_type_edit"),y=document.querySelector(".popup_type_new-card"),v=document.querySelector(".popup__input_type_name"),h=document.querySelector(".profile__description"),S=document.querySelector(".profile__title"),b=document.querySelector(".popup__input_type_description"),q=(document.querySelector(".popup__close"),y.querySelector(".popup__form")),C=y.querySelector(".popup__input_type_card-name"),L=y.querySelector(".popup__input_type_url"),g=document.querySelector(".popup__image"),k=document.querySelector(".popup__caption"),E=document.querySelector(".popup_type_image"),A=_.querySelector(".popup__form"),x=document.querySelector(".popup_type_confirm"),w=x.querySelector(".popup__form"),D=document.querySelector(".profile__image"),j=document.querySelector(".popup_type_avatar"),M=j.querySelector(".popup__form"),O=j.querySelector(".popup__input_type_url");function U(t){g.src=t.link,g.alt=t.name,k.textContent=t.name,e(E)}f.addEventListener("click",(function(){e(_),e(_),v.value=S.textContent,b.value=h.textContent,u(A,B)})),m.addEventListener("click",(function(){u(q,B),e(y),q.reset()})),p.forEach((function(e){e.addEventListener("click",(function(n){(n.target.classList.contains("popup__close")||n.target.classList.contains("popup_is-opened"))&&t(e)}))})),_.addEventListener("submit",(function(e){e.preventDefault();var n,r,o=e.submitter,i=v.value,c=b.value;T(o,!0),(n=i,r=c,fetch("".concat(a.baseUrl,"/users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:n,about:r})}).then(l)).then((function(e){S.textContent=e.name,h.textContent=e.about,t(_)})).finally((function(){T(o,!1)})).catch((function(e){return I("Ошибка обновления данных пользователя:",e)}))}));var B={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function T(e,t){t?(e.textContent="Сохранение...",e.disabled=!0):(e.textContent="Сохранить",e.disabled=!1)}function I(e,t){console.error(e,t)}function P(e,t){deleteCardApi(t).then((function(){!function(e){e.remove()}(e)})).catch((function(e){return I("Ошибка при удалении:",e)}))}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);c(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.valueMissing?t.setCustomValidity("Вы пропустили это поле."):t.validity.tooShort?t.setCustomValidity("Минимальное количество символов: ".concat(t.minLength,". Длина текста сейчас: ").concat(t.value.length," символ.")):t.validity.typeMismatch&&"url"===t.type?t.setCustomValidity("Введите адрес сайта."):t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?i(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),c(n,r,t)}))}))}(t,e)}))}(B),Promise.all([fetch("".concat(a.baseUrl,"/users/me"),{headers:a.headers}).then(l),fetch("".concat(a.baseUrl,"/cards"),{headers:a.headers}).then(l)]).then((function(e){var n,r,i=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,c,u=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return u}}(n,r)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],u=i[1],p=c._id;S.textContent=c.name,h.textContent=c.about,D.style.backgroundImage="url(".concat(c.avatar,")"),function(e,t){d.innerHTML="",e.forEach((function(e){var n=o(e,t,P,V,U);d.append(n)}))}(u,p),q.addEventListener("submit",(function(e){return function(e,n){e.preventDefault();var r,i,c=e.submitter,u=C.value,s=L.value;T(c,!0),(r=u,i=s,fetch("".concat(a.baseUrl,"/cards"),{method:"POST",headers:a.headers,body:JSON.stringify({name:r,link:i})}).then(l)).then((function(e){var r=o(e,n,P,V,U);d.prepend(r),t(y),q.reset()})).catch((function(e){return I("Ошибка добавления карточки:",e)})).finally((function(){T(c,!1)}))}(e,p)}))})).catch((function(e){return I("Ошибка при загрузке данных пользователя или карточек:",e)})),D.addEventListener("click",(function(){e(j),u(M,B),M.reset()})),M.addEventListener("submit",(function(e){e.preventDefault();var n,r=e.submitter,o=O.value;T(r,!0),(n=o,fetch("".concat(a.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:a.headers,body:JSON.stringify({avatar:n})}).then(l)).then((function(e){D.style.backgroundImage="url(".concat(e.avatar,")"),t(j),M.reset()})).catch((function(e){return I("Ошибка обновления аватара:",e)})).finally((function(){T(r,!1)}))})),confirmDeleteForm.addEventListener("submit",(function(e){e.preventDefault()})),w.addEventListener("submit",(function(e){e.preventDefault(),deleteCardApi(null).then((function(){P(null),t(x)})).catch((function(e){return I("Ошибка при удалении:",e)}))}));var V=function(e,t,n){t.classList.contains("card__like-button_is-active")?unlikeCard(e).then((function(e){n.textContent=e.likes.length,t.classList.remove("card__like-button_is-active")})).catch((function(e){return I("Ошибка при удалении лайка:",e)})):likeCard(e).then((function(e){n.textContent=e.likes.length,t.classList.add("card__like-button_is-active")})).catch((function(e){return I("Ошибка при добавлении лайка:",e)}))}})();
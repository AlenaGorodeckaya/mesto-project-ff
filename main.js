(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",n)}function t(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n)}function n(e){if("Escape"===e.key){var n=document.querySelector(".popup_is-opened");n&&t(n)}}var r={baseUrl:"https://nomoreparties.co/v1/wff-cohort-33",headers:{authorization:"04da34de-471c-4d68-89ba-47789b851efa","Content-Type":"application/json"}};function o(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}var c=document.querySelector("#card-template").content;function a(e,t,n,r,o,a){var u=c.querySelector(".places__item").cloneNode(!0),i=u.querySelector(".card__image"),l=u.querySelector(".card__title"),s=u.querySelector(".card__like-count"),d=u.querySelector(".card__like-button");i.src=e.link,i.alt=e.name,l.textContent=e.name;var p=u.querySelector(".card__delete-button");return e.owner._id===t?p.addEventListener("click",(function(){return a(u,e._id)})):p.style.display="none",s.textContent=e.likes.length,e.likes.some((function(e){return e._id===t}))&&d.classList.add("card__like-button_is-active"),d.addEventListener("click",(function(n){return r(n,e._id,t,d,s)})),u.querySelector(".card__image").addEventListener("click",(function(){return o(e)})),u}var u=function(e,t,n){t.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:r.headers}).then(o)}(e).then((function(e){n.textContent=e.likes.length,t.classList.remove("card__like-button_is-active")})).catch((function(e){console.error("Ошибка удаления лайка:",e)})):function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:r.headers}).then(o)}(e).then((function(e){n.textContent=e.likes.length,t.classList.add("card__like-button_is-active")})).catch((function(e){console.error("Ошибка добавления лайка:",e)}))},i=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass)},l=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)},s=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){i(e,n,t)})),l(n,r,t)};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var p=document.querySelector(".places__list"),f=document.querySelectorAll(".popup"),_=document.querySelector(".profile__edit-button"),m=document.querySelector(".profile__add-button"),y=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup_type_new-card"),h=document.querySelector(".popup__input_type_name"),S=document.querySelector(".profile__description"),b=document.querySelector(".profile__title"),q=document.querySelector(".popup__input_type_description"),C=(document.querySelector(".popup__close"),v.querySelector(".popup__form")),L=v.querySelector(".popup__input_type_card-name"),E=v.querySelector(".popup__input_type_url"),k=document.querySelector(".popup__image"),g=document.querySelector(".popup__caption"),x=document.querySelector(".popup_type_image"),A=y.querySelector(".popup__form"),U=document.querySelector(".popup_type_confirm"),T=U.querySelector(".popup__form"),w=null,j=null,O=document.querySelector(".profile__image"),B=document.querySelector(".popup_type_avatar"),D=B.querySelector(".popup__form"),P=B.querySelector(".popup__input_type_url");function I(t){k.src=t.link,k.alt=t.name,g.textContent=t.name,e(x)}_.addEventListener("click",(function(){e(y),e(y),h.value=b.textContent,q.value=S.textContent,s(A,M)})),m.addEventListener("click",(function(){s(C,M),e(v),C.reset()})),f.forEach((function(e){e.addEventListener("click",(function(n){(n.target.classList.contains("popup__close")||n.target.classList.contains("popup_is-opened"))&&t(e)}))})),y.addEventListener("submit",(function(e){e.preventDefault();var n,c,a=e.submitter,u=h.value,i=q.value;N(a,!0),(n=u,c=i,fetch("".concat(r.baseUrl,"/users/me"),{method:"PATCH",headers:r.headers,body:JSON.stringify({name:n,about:c})}).then(o)).then((function(e){b.textContent=e.name,S.textContent=e.about,t(y)})).finally((function(){N(a,!1)})).catch((function(e){return H("Ошибка обновления данных пользователя:",e)}))}));var M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function N(e,t){t?(e.textContent="Сохранение...",e.disabled=!0):(e.textContent="Сохранить",e.disabled=!1)}function H(e,t){console.error(e,t)}function J(t,n){w=n,j=t,e(U)}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);l(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?i(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),l(n,r,t)}))}))}(t,e)}))}(M),Promise.all([fetch("".concat(r.baseUrl,"/users/me"),{headers:r.headers}).then(o),fetch("".concat(r.baseUrl,"/cards"),{headers:r.headers}).then(o)]).then((function(e){var n,c,i=(c=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(n,c)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(n,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=i[0],s=i[1],f=l._id;b.textContent=l.name,S.textContent=l.about,O.style.backgroundImage="url(".concat(l.avatar,")"),function(e,t){p.innerHTML="",e.forEach((function(e){var n=a(e,t,deleteCard,u,I,J);p.append(n)}))}(s,f),C.addEventListener("submit",(function(e){return function(e,n){e.preventDefault();var c,i,l=e.submitter,s=L.value,d=E.value;N(l,!0),(c=s,i=d,fetch("".concat(r.baseUrl,"/cards"),{method:"POST",headers:r.headers,body:JSON.stringify({name:c,link:i})}).then(o)).then((function(e){var r=a(e,n,deleteCard,u,I,J);p.prepend(r),t(v),C.reset()})).catch((function(e){return H("Ошибка добавления карточки:",e)})).finally((function(){N(l,!1)}))}(e,f)}))})).catch((function(e){return H("Ошибка при загрузке данных пользователя или карточек:",e)})),O.addEventListener("click",(function(){e(B),s(D,M),D.reset()})),D.addEventListener("submit",(function(e){e.preventDefault();var n,c=e.submitter,a=P.value;N(c,!0),(n=a,fetch("".concat(r.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:r.headers,body:JSON.stringify({avatar:n})}).then(o)).then((function(e){O.style.backgroundImage="url(".concat(e.avatar,")"),t(B),D.reset()})).catch((function(e){return H("Ошибка обновления аватара:",e)})).finally((function(){N(c,!1)}))})),T.addEventListener("submit",(function(e){var n;e.preventDefault(),(n=w,fetch("".concat(r.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:r.headers}).then(o)).then((function(){deleteCard(j),t(U)})).catch((function(e){return H("Ошибка при удалении:",e)}))}))})();
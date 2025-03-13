(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",n)}function t(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n)}function n(e){if("Escape"===e.key){var n=document.querySelector(".popup_is-opened");n&&t(n)}}var r={baseUrl:"https://nomoreparties.co/v1/wff-cohort-33",headers:{authorization:"04da34de-471c-4d68-89ba-47789b851efa","Content-Type":"application/json"}};function o(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}var c=document.querySelector("#card-template").content;function a(e,t,n,r,o){var a=c.querySelector(".places__item").cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__like-count"),s=a.querySelector(".card__like-button");u.src=e.link,u.alt=e.name,i.textContent=e.name;var d=a.querySelector(".card__delete-button");return e.owner._id===t?d.addEventListener("click",(function(){return o(a,e._id)})):d.style.display="none",l.textContent=e.likes.length,e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active"),s.addEventListener("click",(function(r){return n(r,e._id,t,s,l)})),a.querySelector(".card__image").addEventListener("click",(function(){return r(e)})),a}function u(e){e.remove()}document.querySelector(".popup_type_confirm").querySelector(".popup__form");var i=function(e,t,n){t.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:r.headers}).then(o)}(e).then((function(e){n.textContent=e.likes.length,t.classList.remove("card__like-button_is-active")})).catch((function(e){console.error("Ошибка удаления лайка:",e)})):function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:r.headers}).then(o)}(e).then((function(e){n.textContent=e.likes.length,t.classList.add("card__like-button_is-active")})).catch((function(e){console.error("Ошибка добавления лайка:",e)}))},l=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass)},s=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)},d=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){l(e,n,t)})),s(n,r,t)};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector(".places__list"),_=document.querySelectorAll(".popup"),m=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_edit"),h=document.querySelector(".popup_type_new-card"),S=document.querySelector(".popup__input_type_name"),b=document.querySelector(".profile__description"),q=document.querySelector(".profile__title"),L=document.querySelector(".popup__input_type_description"),C=(document.querySelector(".popup__close"),h.querySelector(".popup__form")),E=h.querySelector(".popup__input_type_card-name"),k=h.querySelector(".popup__input_type_url"),g=document.querySelector(".popup__image"),x=document.querySelector(".popup__caption"),A=document.querySelector(".popup_type_image"),U=v.querySelector(".popup__form"),T=document.querySelector(".popup_type_confirm"),w=T.querySelector(".popup__form"),j=document.querySelector(".profile__image"),O=document.querySelector(".popup_type_avatar"),B=O.querySelector(".popup__form"),D=O.querySelector(".popup__input_type_url");function P(t){g.src=t.link,g.alt=t.name,x.textContent=t.name,e(A)}m.addEventListener("click",(function(){e(v),e(v),S.value=q.textContent,L.value=b.textContent,d(U,I)})),y.addEventListener("click",(function(){d(C,I),e(h),C.reset()})),_.forEach((function(e){e.addEventListener("click",(function(n){(n.target.classList.contains("popup__close")||n.target.classList.contains("popup_is-opened"))&&t(e)}))})),v.addEventListener("submit",(function(e){e.preventDefault();var n,c,a=e.submitter,u=S.value,i=L.value;M(a,!0),(n=u,c=i,fetch("".concat(r.baseUrl,"/users/me"),{method:"PATCH",headers:r.headers,body:JSON.stringify({name:n,about:c})}).then(o)).then((function(e){q.textContent=e.name,b.textContent=e.about,t(v)})).finally((function(){M(a,!1)})).catch((function(e){return N("Ошибка обновления данных пользователя:",e)}))}));var I={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function M(e,t){t?(e.textContent="Сохранение...",e.disabled=!0):(e.textContent="Сохранить",e.disabled=!1)}function N(e,t){console.error(e,t)}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);s(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),s(n,r,t)}))}))}(t,e)}))}(I),Promise.all([fetch("".concat(r.baseUrl,"/users/me"),{headers:r.headers}).then(o),fetch("".concat(r.baseUrl,"/cards"),{headers:r.headers}).then(o)]).then((function(e){var n,c,l=(c=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(n,c)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(n,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=l[0],d=l[1],_=s._id;q.textContent=s.name,b.textContent=s.about,j.style.backgroundImage="url(".concat(s.avatar,")"),function(e,t){f.innerHTML="",e.forEach((function(e){var n=a(e,t,u,i,P);f.append(n)}))}(d,_),C.addEventListener("submit",(function(e){return function(e,n){e.preventDefault();var c,l,s=e.submitter,d=E.value,p=k.value;M(s,!0),(c=d,l=p,fetch("".concat(r.baseUrl,"/cards"),{method:"POST",headers:r.headers,body:JSON.stringify({name:c,link:l})}).then(o)).then((function(e){var r=a(e,n,u,i,P);f.prepend(r),t(h),C.reset()})).catch((function(e){return N("Ошибка добавления карточки:",e)})).finally((function(){M(s,!1)}))}(e,_)}))})).catch((function(e){return N("Ошибка при загрузке данных пользователя или карточек:",e)})),j.addEventListener("click",(function(){e(O),d(B,I),B.reset()})),B.addEventListener("submit",(function(e){e.preventDefault();var n,c=e.submitter,a=D.value;M(c,!0),(n=a,fetch("".concat(r.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:r.headers,body:JSON.stringify({avatar:n})}).then(o)).then((function(e){j.style.backgroundImage="url(".concat(e.avatar,")"),t(O),B.reset()})).catch((function(e){return N("Ошибка обновления аватара:",e)})).finally((function(){M(c,!1)}))})),w.addEventListener("submit",(function(e){e.preventDefault(),fetch("".concat(r.baseUrl,"/cards/").concat(null),{method:"DELETE",headers:r.headers}).then(o).then((function(){u(null),t(T)})).catch((function(e){return N("Ошибка при удалении:",e)}))}))})();
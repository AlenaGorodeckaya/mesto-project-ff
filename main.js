(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",n)}function t(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n)}function n(e){if("Escape"===e.key){var n=document.querySelector(".popup_is-opened");n&&t(n)}}var r={baseUrl:"https://nomoreparties.co/v1/wff-cohort-33",headers:{authorization:"04da34de-471c-4d68-89ba-47789b851efa","Content-Type":"application/json"}};function o(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}var c=document.querySelector("#card-template").content,a=document.querySelector(".popup_type_confirm"),u=a.querySelector(".popup__form");function i(e,t,n,r,o){var a=c.querySelector(".places__item").cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__like-count"),s=a.querySelector(".card__like-button");u.src=e.link,u.alt=e.name,i.textContent=e.name;var d=a.querySelector(".card__delete-button");return e.owner._id===t?d.addEventListener("click",(function(){return n(a,e._id)})):d.style.display="none",l.textContent=e.likes.length,e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active"),s.addEventListener("click",(function(n){return r(n,e._id,t,s,l)})),a.querySelector(".card__image").addEventListener("click",(function(){return o(e)})),a}function l(n,c){e(a);var i=function(e){e.preventDefault(),function(e){return fetch("".concat(r.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:r.headers}).then(o)}(c).then((function(){n.remove(),t(a),u.removeEventListener("submit",i)}))};u.removeEventListener("submit",i),u.addEventListener("submit",i)}var s=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass)},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)},p=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){s(e,n,t)})),d(n,r,t)};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _=document.querySelector(".places__list"),m=document.querySelectorAll(".popup"),y=document.querySelector(".profile__edit-button"),v=document.querySelector(".profile__add-button"),h=document.querySelector(".popup_type_edit"),b=document.querySelector(".popup_type_new-card"),S=document.querySelector(".popup__input_type_name"),q=document.querySelector(".profile__description"),E=document.querySelector(".profile__title"),L=document.querySelector(".popup__input_type_description"),C=(document.querySelector(".popup__close"),b.querySelector(".popup__form")),k=b.querySelector(".popup__input_type_card-name"),g=b.querySelector(".popup__input_type_url"),x=document.querySelector(".popup__image"),A=document.querySelector(".popup__caption"),U=document.querySelector(".popup_type_image"),T=h.querySelector(".popup__form"),w=document.querySelector(".profile__image"),D=document.querySelector(".popup_type_avatar"),j=D.querySelector(".popup__form"),O=D.querySelector(".popup__input_type_url");function B(t){x.src=t.link,x.alt=t.name,A.textContent=t.name,e(U)}y.addEventListener("click",(function(){e(h),e(h),S.value=E.textContent,L.value=q.textContent,p(T,P)})),v.addEventListener("click",(function(){p(C,P),e(b),C.reset()})),m.forEach((function(e){e.addEventListener("click",(function(n){(n.target.classList.contains("popup__close")||n.target.classList.contains("popup_is-opened"))&&t(e)}))})),h.addEventListener("submit",(function(e){e.preventDefault();var n,c,a=e.submitter,u=S.value,i=L.value;I(a,!0),(n=u,c=i,fetch("".concat(r.baseUrl,"/users/me"),{method:"PATCH",headers:r.headers,body:JSON.stringify({name:n,about:c})}).then(o)).then((function(e){E.textContent=e.name,q.textContent=e.about,t(h)})).finally((function(){I(a,!1)})).catch((function(e){return M("Ошибка обновления данных пользователя:",e)}))}));var P={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function I(e,t){t?(e.textContent="Сохранение...",e.disabled=!0):(e.textContent="Сохранить",e.disabled=!1)}function M(e,t){console.error(e,t)}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),d(n,r,t)}))}))}(t,e)}))}(P),Promise.all([fetch("".concat(r.baseUrl,"/users/me"),{headers:r.headers}).then(o),fetch("".concat(r.baseUrl,"/cards"),{headers:r.headers}).then(o)]).then((function(e){var n,c,a=(c=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(n,c)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(n,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],s=a[1],d=u._id;E.textContent=u.name,q.textContent=u.about,w.style.backgroundImage="url(".concat(u.avatar,")"),function(e,t){_.innerHTML="",e.forEach((function(e){var n=i(e,t,l,N,B);_.append(n)}))}(s,d),C.addEventListener("submit",(function(e){return function(e,n){e.preventDefault();var c,a,u=e.submitter,s=k.value,d=g.value;I(u,!0),(c=s,a=d,fetch("".concat(r.baseUrl,"/cards"),{method:"POST",headers:r.headers,body:JSON.stringify({name:c,link:a})}).then(o)).then((function(e){var r=i(e,n,l,N,B);_.prepend(r),t(b),C.reset()})).catch((function(e){return M("Ошибка добавления карточки:",e)})).finally((function(){I(u,!1)}))}(e,d)}))})).catch((function(e){return M("Ошибка при загрузке данных пользователя или карточек:",e)})),w.addEventListener("click",(function(){e(D),p(j,P),j.reset()})),j.addEventListener("submit",(function(e){e.preventDefault();var n,c=e.submitter,a=O.value;I(c,!0),(n=a,fetch("".concat(r.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:r.headers,body:JSON.stringify({avatar:n})}).then(o)).then((function(e){w.style.backgroundImage="url(".concat(e.avatar,")"),t(D),j.reset()})).catch((function(e){return M("Ошибка обновления аватара:",e)})).finally((function(){I(c,!1)}))})),confirmDeleteForm.addEventListener("submit",(function(e){e.preventDefault()}));var N=function(e,t,n,c,a){var u=c.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:r.headers}).then(o)}(t):function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:r.headers}).then(o)}(t);u.then((function(e){var t=e.likes.some((function(e){return e._id===n}));a.textContent=e.likes.length,c.classList.toggle("card__like-button_is-active",t)})).catch((function(e){console.error("Ошибка при обновлении лайка:",e)}))}})();
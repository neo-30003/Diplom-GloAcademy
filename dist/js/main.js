/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalRequest */ \"./modules/modalRequest.js\");\n/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ \"./modules/sliders.js\");\n/* harmony import */ var _modules_serviceModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/serviceModal */ \"./modules/serviceModal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_validateForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validateForm */ \"./modules/validateForm.js\");\n/* harmony import */ var _modules_certificates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/certificates */ \"./modules/certificates.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modalRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__.benefitsSlider)();\r\n(0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__.serviceSlider)();\r\n(0,_modules_serviceModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"10 september 2024\");\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_validateForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_certificates__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst calculator = () => {\r\n  const body = document.querySelector(\".balkony\");\r\n  const calcBlock = document.getElementById(\"calc\");\r\n  const input = document.getElementById(\"calc-input\");\r\n  const total = document.getElementById(\"calc-total\");\r\n  const type = document.getElementById(\"calc-type\");\r\n  const material = document.getElementById(\"calc-type-material\");\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = type.options[type.selectedIndex].value;\r\n    const calcInputValue = input.value;\r\n    const calcMaterialValue = material.options[material.selectedIndex].value;\r\n    let totalValue;\r\n\r\n    totalValue = +calcTypeValue * +calcInputValue * +calcMaterialValue;\r\n    total.value = totalValue;\r\n\r\n    if (totalValue !== 0) {\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: 1000,\r\n        timing(timeFraction) {\r\n          return timeFraction;\r\n        },\r\n        draw(progress) {\r\n          total.value =\r\n            +total.value + Math.round(progress * (totalValue - total.value));\r\n        },\r\n      });\r\n    }\r\n  };\r\n\r\n  if (body) {\r\n    calcBlock.addEventListener(\"input\", (e) => {\r\n      if (\r\n        (e.target === type || e.target === material || e.target === input) &&\r\n        type.selectedIndex &&\r\n        material.selectedIndex &&\r\n        input.value\r\n      ) {\r\n        countCalc();\r\n      } else if (\r\n        !type.selectedIndex ||\r\n        !material.selectedIndex ||\r\n        input.value === \"\"\r\n      ) {\r\n        total.value = 0;\r\n      }\r\n    });\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\r\n\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/certificates.js":
/*!*********************************!*\
  !*** ./modules/certificates.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst certificates = () => {\r\n  const docs = document.querySelectorAll(\".sertificate-document\");\r\n  const docsImgs = document.querySelectorAll(\r\n    \".sertificate-document > img.img-responsive\"\r\n  );\r\n  const overlay = document.querySelector(\".overlay\");\r\n  const documentOverlay = document.querySelectorAll(\".document-overlay\");\r\n\r\n  const modal = document.createElement(\"div\");\r\n  modal.classList.add(\"docs-modal\");\r\n  modal.style.cssText =\r\n    \"display: none; position: fixed; top: 0%; left: 50%; transform: translate(-50%, -50%); z-index: 2; height: 100%; width: auto;\";\r\n  modal.innerHTML = '<img src=\"\" alt=\"\" class=\"modal-image\">';\r\n\r\n  document.querySelector(\".services-modal\").after(modal);\r\n  const modalImage = modal.querySelector(\".modal-image\");\r\n  modalImage.style.cssText =\r\n    \"margin: auto; display: block; width: auto; height: 100%;\";\r\n\r\n  const animate = ({ duration, timing, draw }) => {\r\n    const start = performance.now();\r\n\r\n    requestAnimationFrame(function animationLoop(time) {\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n\r\n      const progress = timing(timeFraction);\r\n      draw(progress);\r\n\r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animationLoop);\r\n      }\r\n    });\r\n  };\r\n\r\n  docs.forEach((item, index) => {\r\n    item.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      const srcImg = docsImgs[index]\r\n        .getAttribute(\"src\")\r\n        .replace(\"documents\", \"documents/original\");\r\n      modalImage.setAttribute(\"src\", srcImg);\r\n      modal.style.display = \"block\";\r\n      overlay.style.display = \"block\";\r\n      animate({\r\n        duration: 400,\r\n        timing: (timeFraction) => timeFraction,\r\n        draw: (progress) => {\r\n          modal.style.top = `${50 * progress}%`;\r\n        },\r\n      });\r\n    });\r\n    item.addEventListener(\"mouseenter\", () => {\r\n      documentOverlay[index].style.opacity = \"1\";\r\n      documentOverlay[index].style.width = \"200px\";\r\n      documentOverlay[index].style.left = \"50%\";\r\n      documentOverlay[index].style.transform = \"translateX(-50%)\";\r\n    });\r\n    item.addEventListener(\"mouseleave\", () => {\r\n      documentOverlay[index].style.opacity = \"0\";\r\n    });\r\n  });\r\n\r\n  overlay.addEventListener(\"click\", (e) => {\r\n    if (!e.target.closest(\".docs-modal\")) {\r\n      modal.style.display = \"none\";\r\n      overlay.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (certificates);\r\n\n\n//# sourceURL=webpack:///./modules/certificates.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modalRequest.js":
/*!*********************************!*\
  !*** ./modules/modalRequest.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalRequest = () => {\r\n  const requestBtn = document.querySelector(\"#header .button\");\r\n  const offerBtn = document.querySelector(\".utp-button\");\r\n  const overlay = document.querySelector(\".overlay\");\r\n  const requestModal = document.querySelector(\".header-modal\");\r\n  const closeBtn = document.querySelector(\".header-modal__close\");\r\n\r\n  const openModal = () => {\r\n    requestModal.style.display = \"flex\";\r\n    document.body.style.oveflow = \"hidden\";\r\n    overlay.style.display = \"flex\";\r\n  };\r\n\r\n  const closeModal = () => {\r\n    requestModal.style.display = \"none\";\r\n    document.body.style.oveflow = \"\";\r\n    overlay.style.display = \"none\";\r\n  };\r\n\r\n  requestBtn.addEventListener(\"click\", () => {\r\n    openModal();\r\n  });\r\n\r\n  offerBtn.addEventListener(\"click\", () => {\r\n    openModal();\r\n  });\r\n\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    closeModal();\r\n  });\r\n\r\n  overlay.addEventListener(\"click\", (e) => {\r\n    if (!e.target.closest(\".header-modal\")) {\r\n      closeModal();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalRequest);\r\n\n\n//# sourceURL=webpack:///./modules/modalRequest.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n  const scrollBtns = document.querySelectorAll(\".smooth-scroll\");\r\n  const bodies = document.querySelectorAll(\"body\");\r\n  scrollBtns.forEach((btn) => {\r\n    window.addEventListener(\"scroll\", () => {\r\n      if (window.scrollY > 540) {\r\n        btn.style.display = \"block\";\r\n      } else {\r\n        btn.style.display = \"none\";\r\n      }\r\n    });\r\n    btn.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n\r\n      bodies.forEach((body) => {\r\n        body.scrollIntoView({\r\n          behavior: \"smooth\",\r\n        });\r\n      });\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = () => {\r\n  const forms = document.querySelectorAll(\".order-form.rf, .box-modal_body.rf\");\r\n\r\n  forms.forEach((form) => {\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n\r\n      const username = form.querySelector('input[name=\"fio\"]');\r\n      const userphone = form.querySelector('input[name=\"phone\"]');\r\n      const responseModal = document.querySelector(\"#responseMessage\");\r\n      const modalContent = responseModal.querySelector(\".modal-content\");\r\n      const overlay = document.querySelector(\".overlay\");\r\n      const closeBtn = responseModal.querySelector(\r\n        \".btn.btn-success.fancyClose\"\r\n      );\r\n      const requestModal = document.querySelector(\".header-modal\");\r\n      const serviceModal = document.querySelector(\".services-modal\");\r\n      const total = document.getElementById(\"calc-total\");\r\n\r\n      const closeAnswer = () => {\r\n        username.value = \"\";\r\n        userphone.value = \"\";\r\n        username.classList.remove(\"error\");\r\n        userphone.classList.remove(\"error\");\r\n        requestModal.style.display = \"none\";\r\n        serviceModal.style.display = \"none\";\r\n        overlay.style.display = \"none\";\r\n        document.body.style.overflow = \"\";\r\n        responseModal.classList.add(\"open\");\r\n        responseModal.style.position = \"fixed\";\r\n        responseModal.style.left = \"38%\";\r\n        responseModal.style.top = \"40%\";\r\n      };\r\n\r\n      let data = {\r\n        name: username.value,\r\n        phone: userphone.value,\r\n        orderPrice: 0,\r\n      };\r\n\r\n      if (total) {\r\n        if (total.textContent !== null && total.textContent !== 0) {\r\n          data.orderPrice = total.textContent;\r\n        }\r\n      }\r\n\r\n      if (username.value === \"\") {\r\n        username.classList.add(\"error\");\r\n      } else {\r\n        username.classList.remove(\"error\");\r\n      }\r\n      username.addEventListener(\"focusout\", () => {\r\n        username.classList.remove(\"error\");\r\n      });\r\n      if ((userphone.value = \"\")) {\r\n        userphone.classList.add(\"error\");\r\n      }\r\n\r\n      if (username.closest(\".error\") || userphone.closest(\".error\")) {\r\n        return;\r\n      } else {\r\n        fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n          method: \"POST\",\r\n          body: JSON.stringify(data),\r\n          headers: {\r\n            \"Content-Type\": \"application/json; charset=UTF-8\",\r\n          },\r\n        })\r\n          .then((res) => {\r\n            res.json();\r\n            modalContent.innerHTML = \"Спасибо за вашу заявку\";\r\n            closeAnswer();\r\n          })\r\n          .catch((error) => {\r\n            error.message;\r\n            console.log(error.message);\r\n            modalContent.innerHTML = \"Ошибка\";\r\n            modalContent.style.cssText = \"color:red; font-size:20px\";\r\n            closeAnswer();\r\n          });\r\n\r\n        closeBtn.addEventListener(\"click\", (e) => {\r\n          e.preventDefault();\r\n          responseModal.classList.remove(\"open\");\r\n          modalContent.innerHTML = \"\";\r\n        });\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/serviceModal.js":
/*!*********************************!*\
  !*** ./modules/serviceModal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst serviceModal = () => {\r\n  const serviceRequestsBtns = document.querySelectorAll(\".service-button\");\r\n  const serviceModal = document.querySelector(\".services-modal\");\r\n  const overlay = document.querySelector(\".overlay\");\r\n  const serviceCloseBtn = document.querySelector(\".services-modal__close\");\r\n\r\n  const openServiceModal = () => {\r\n    serviceModal.style.display = \"flex\";\r\n    document.body.style.oveflow = \"hidden\";\r\n    overlay.style.display = \"flex\";\r\n  };\r\n\r\n  const closeServiceModal = () => {\r\n    serviceModal.style.display = \"none\";\r\n    document.body.style.oveflow = \"\";\r\n    overlay.style.display = \"none\";\r\n  };\r\n\r\n  serviceRequestsBtns.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      openServiceModal();\r\n    });\r\n  });\r\n\r\n  serviceCloseBtn.addEventListener(\"click\", () => {\r\n    closeServiceModal();\r\n  });\r\n\r\n  overlay.addEventListener(\"click\", (e) => {\r\n    if (!e.target.closest(\".services-modal\")) {\r\n      closeServiceModal();\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serviceModal);\r\n\n\n//# sourceURL=webpack:///./modules/serviceModal.js?");

/***/ }),

/***/ "./modules/sliders.js":
/*!****************************!*\
  !*** ./modules/sliders.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   benefitsSlider: () => (/* binding */ benefitsSlider),\n/* harmony export */   serviceSlider: () => (/* binding */ serviceSlider)\n/* harmony export */ });\nconst benefitsSlider = () => {\r\n  const slider = new Swiper(\".benefits-inner\", {\r\n    loop: true,\r\n    speed: 400,\r\n    slidesPerView: 1,\r\n    navigation: {\r\n      nextEl: \".benefits__arrow--right\",\r\n      prevEl: \".benefits__arrow--left\",\r\n    },\r\n    breakpoints: {\r\n      // when window width is >= 320px\r\n      576: {\r\n        slidesPerView: 3,\r\n      },\r\n    },\r\n  });\r\n};\r\n\r\nconst serviceSlider = () => {\r\n  const serviceSlider = new Swiper(\".service-slider\", {\r\n    loop: true,\r\n    speed: 400,\r\n    slidesPerView: 1,\r\n    navigation: {\r\n      nextEl: \".services__arrow--right\",\r\n      prevEl: \".services__arrow--left\",\r\n    },\r\n    breakpoints: {\r\n      // when window width is >= 320px\r\n      576: {\r\n        slidesPerView: 2,\r\n      },\r\n    },\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/sliders.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const orderBlocks = document.querySelectorAll(\".order\");\r\n\r\n  const zero = (el) => {\r\n    if (el < 10) {\r\n      return (el = `0${el}`);\r\n    } else {\r\n      return el;\r\n    }\r\n  };\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateNow = new Date().getTime();\r\n    let dateStop = new Date(deadline).getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRemaining / 3600 / 24);\r\n    let hours = Math.floor((timeRemaining / 3600) % 24);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    days = zero(days);\r\n    hours = zero(hours);\r\n    minutes = zero(minutes);\r\n    seconds = zero(seconds);\r\n\r\n    return { timeRemaining, days, hours, minutes, seconds };\r\n  };\r\n\r\n  orderBlocks.forEach((block) => {\r\n    const timerDays = block.querySelector(\".count.count_1 > span\");\r\n    const timerHours = block.querySelector(\".count.count_2 > span\");\r\n    const timerMinutes = block.querySelector(\".count.count_3 > span\");\r\n    const timerSeconds = block.querySelector(\".count.count_4 > span\");\r\n\r\n    let interval;\r\n\r\n    const updateClock = () => {\r\n      let getTime = getTimeRemaining();\r\n\r\n      timerDays.textContent = getTime.days;\r\n      timerHours.textContent = getTime.hours;\r\n      timerMinutes.textContent = getTime.minutes;\r\n      timerSeconds.textContent = getTime.seconds;\r\n\r\n      if (getTime.timeRemaining <= 0) {\r\n        timerDays.textContent = \"00\";\r\n        timerHours.textContent = \"00\";\r\n        timerMinutes.textContent = \"00\";\r\n        timerSeconds.textContent = \"00\";\r\n        clearInterval(interval);\r\n      }\r\n    };\r\n\r\n    interval = setInterval(updateClock, 500);\r\n    updateClock();\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validateForm.js":
/*!*********************************!*\
  !*** ./modules/validateForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validateForm = () => {\r\n  const body = document.querySelector(\".balkony\");\r\n  const usernames = document.querySelectorAll('input[name=\"fio\"]');\r\n  const userphones = document.querySelectorAll('input[name=\"phone\"]');\r\n  const calcInputs = document.getElementById(\"calc-input\");\r\n\r\n  usernames.forEach((input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z ]/g, \"\");\r\n    });\r\n  });\r\n  const re = /^\\d[\\d\\(\\)\\ -]{7,14}\\d$/;\r\n  userphones.forEach((input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      const valid = re.test(e.target.value);\r\n      if (!valid) {\r\n        input.classList.add(\"error\");\r\n      } else {\r\n        input.classList.remove(\"error\");\r\n      }\r\n    });\r\n  });\r\n\r\n  if (body) {\r\n    calcInputs.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^0-9]/g, \"\");\r\n    });\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateForm);\r\n\n\n//# sourceURL=webpack:///./modules/validateForm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
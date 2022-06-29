/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/es6/blocks/mask.js":
/*!***********************************!*\
  !*** ./assets/es6/blocks/mask.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./assets/es6/blocks/modal.js":
/*!************************************!*\
  !*** ./assets/es6/blocks/modal.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function modal() {
  try {
    const modalPlace = document.querySelector('.modal'),
          modalItems = document.querySelectorAll('.modal__item'),
          sliderCont = document.querySelector('.slider'),
          btnCall = document.querySelectorAll('button[data-modal]');
    const carNameInp = document.querySelector('#carName'),
          carTypeInp = document.querySelector('#carType');

    const closeModal = () => {
      modalItems.forEach(item => item.classList.remove('active'));
      modalPlace.classList.remove('active');
      document.querySelector('body').style.overflow = '';
    };

    const openModal = modalType => {
      modalItems.forEach(item => {
        if (item.classList.contains(modalType)) {
          item.classList.add('active');
        }
      });
      modalPlace.classList.add('active');
      document.querySelector('body').style.overflow = 'hidden';
    };

    btnCall.forEach(btn => {
      btn.addEventListener('click', () => {
        openModal(btn.getAttribute('data-modal'));
      });
    });
    sliderCont.addEventListener('click', e => {
      if (e.path.some(item => item.nodeName == 'ARTICLE')) {
        let elem = e.path.filter(item => item.nodeName == 'ARTICLE')[0];
        carNameInp.value = elem.getAttribute('data-name');
        carTypeInp.value = elem.getAttribute('data-type');
        openModal('order');
      }
    });
    modalPlace.addEventListener('click', e => {
      if (e.target == modalPlace || e.target.classList.contains('modal__close')) {
        closeModal();
      }
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./assets/es6/blocks/slider.js":
/*!*************************************!*\
  !*** ./assets/es6/blocks/slider.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function slider() {
  try {
    const sliderPages = document.querySelectorAll('.slider__page'),
          sliderTabs = document.querySelectorAll('.slider__tabs span');
    let isMobile = window.screen.width <= 576;

    const setPage = function () {
      let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      sliderPages.forEach(item => item.classList.remove('active'));
      sliderTabs.forEach(item => item.classList.remove('active'));
      sliderPages[i].classList.add('active');
      sliderTabs[i].classList.add('active');
    };

    setPage();
    sliderTabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        setPage(i);
      });
    });

    const itemRage = () => {
      if (isMobile) {
        return 1;
      } else {
        return 2;
      }
    };

    const itemWidth = item => {
      return itemRage() * (item.clientWidth + +window.getComputedStyle(item).marginRight.replace(/[a-zа-яё]/gi, ''));
    };

    sliderPages.forEach(page => {
      const sliderLine = page.querySelector('.slider__line'),
            sliderRight = page.querySelector('.slider__arrows img.right'),
            sliderLeft = page.querySelector('.slider__arrows img.left'),
            sliderItems = page.querySelectorAll('.slider__item'),
            sliderArrowsPlace = page.querySelector('.slider__arrows');
      let curr = 0,
          steps = Math.floor((sliderItems.length - 1) / 2);
      isMobile ? steps = sliderItems.length - 1 : '';

      if (sliderItems.length >= 4 || isMobile && sliderItems.length >= 1) {
        sliderRight.addEventListener('click', () => {
          curr == steps ? curr = 0 : curr++;
          sliderLine.style.transform = `translateX(-${curr * itemWidth(sliderItems[0])}px)`;
        });
        sliderLeft.addEventListener('click', () => {
          curr == 0 ? curr = steps : curr--;
          sliderLine.style.transform = `translateX(-${curr * itemWidth(sliderItems[0])}px)`;
        });
        let startPos = 0;
        sliderLine.addEventListener('touchstart', e => {
          startPos = e.changedTouches[0].screenX;
        });
        sliderLine.addEventListener('touchend', e => {
          if (startPos - e.changedTouches[0].screenX > 50) {
            curr == steps ? curr = 0 : curr++;
            sliderLine.style.transform = `translateX(-${curr * itemWidth(sliderItems[0])}px)`;
          } else if (startPos - e.changedTouches[0].screenX < -50) {
            curr == 0 ? curr = steps : curr--;
            sliderLine.style.transform = `translateX(-${curr * itemWidth(sliderItems[0])}px)`;
          }
        });
      } else {
        sliderArrowsPlace.classList.add('hide');
      }
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************************!*\
  !*** ./assets/es6/main.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/slider */ "./assets/es6/blocks/slider.js");
/* harmony import */ var _blocks_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/mask */ "./assets/es6/blocks/mask.js");
/* harmony import */ var _blocks_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/modal */ "./assets/es6/blocks/modal.js");



'use strict';

window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_mask__WEBPACK_IMPORTED_MODULE_1__["default"])('input[type="tel"]');
  (0,_blocks_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map
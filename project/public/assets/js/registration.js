/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"registration": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/registration.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/registration.js":
/*!********************************!*\
  !*** ./src/js/registration.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_regExp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/regExp */ "./src/js/utils/regExp.js");
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/request */ "./src/js/utils/request.js");





const phoneInput = document.querySelector('.js-phone');
const phoneMaskOptions = {
    mask: '+{7}(000)000-00-00'
};
const phoneMask = Object(imask__WEBPACK_IMPORTED_MODULE_1__["default"])(phoneInput, phoneMaskOptions);

const date = document.querySelector('.js-date');
const dateMaskOptions = {
    mask: Date
};
const dateMask = Object(imask__WEBPACK_IMPORTED_MODULE_1__["default"])(date, dateMaskOptions);

let step = 0;
const steps = document.querySelectorAll('.js-step');
const paginationItems = document.querySelectorAll('.pagination__item');
const values = {
    firstName: '',
    secondName: '',
    patronymic: ''
};

let errors = [];

function validation(name, value) {

    if (name === 'password' && value.length < 4 ) {
        errors.push(name);
        return false;
    }

    if (name === "date" && dateMask.unmaskedValue.length !== 10) {
        errors.push(name);
        return false;
    }

    if (name === 'email' && !_utils_regExp__WEBPACK_IMPORTED_MODULE_0__["emailRegExp"].test(value)) {
        errors.push(name);
        return false;
    }

    if (name === 'phone' && phoneMask.unmaskedValue.length !== 11) {
        errors.push(name);
        return false;
    }

    if (value === '') {
        errors.push(name);
        return false;
    }

    errors = errors.filter(errorField => errorField !== name);
}

function nextStep() {
    const inputs = steps[step].querySelectorAll('.input');

    Array.prototype.forEach.call(inputs, (input) => {
        validation(input.name, input.value);
        values[input.name] = input.value;
    });

    if (errors.length === 0) {
        steps[step].style.display = "none";
        step += 1;
        steps[step].style.display = "";

        Array.prototype.forEach.call(paginationItems, (item, index) => {
            if (index === step) {
                item.classList.add('pagination__item--active');
            } else {
                item.classList.remove('pagination__item--active');
            }
        });
    } else {
        inputs.forEach(input => {
            if (errors.includes(input.name)) {
                input.classList.add('input--error');
            } else {
                input.classList.remove('input--error');
            }
        });
    }
}

const nextStepBtns = document.querySelectorAll('.js-next-step');

nextStepBtns.forEach((btn) => {
    btn.addEventListener('click', nextStep);
});

const finishBtn = document.querySelector('.js-finish');

finishBtn.addEventListener('click', () => {
    const inputs = steps[step].querySelectorAll('.input');

    Array.prototype.forEach.call(inputs, (input) => {
        validation(input.name, input.value);
        values[input.name] = input.value;
    });

    if (errors.length === 0) {
        _utils_request__WEBPACK_IMPORTED_MODULE_2__["request"]
            .post('/api/registration', values)
            .then(() => {
                alert('Вы успешно зарегестрировались');
                window.location = '/login';
            });
    } else {
        inputs.forEach(input => {
            if (errors.includes(input.name)) {
                input.classList.add('input--error');
            } else {
                input.classList.remove('input--error');
            }
        });
    }
});


/***/ }),

/***/ "./src/js/utils/regExp.js":
/*!********************************!*\
  !*** ./src/js/utils/regExp.js ***!
  \********************************/
/*! exports provided: emailRegExp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailRegExp", function() { return emailRegExp; });
const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


/***/ }),

/***/ "./src/js/utils/request.js":
/*!*********************************!*\
  !*** ./src/js/utils/request.js ***!
  \*********************************/
/*! exports provided: request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
class Request {
    constructor() {
        this.csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        this.post = this.post.bind(this);
    }

    post(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;',
                'X-CSRF-TOKEN': this.csrf
            },
            body: JSON.stringify(data)
        }).then(response => response.json());
    }
}

const request = new Request();

/***/ })

/******/ });
//# sourceMappingURL=registration.js.map
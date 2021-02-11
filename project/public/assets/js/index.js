/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/request */ "./src/js/utils/request.js");


const applicants = document.querySelector('.applicants');
const groupName = document.querySelector('.js-group-name');
const groupsItems = document.querySelectorAll('.js-group');
const originalCheckbox = document.querySelector('.js-original');

const filters = {
    group: groupsItems[0].getAttribute('data-id'),
    original: false
};


originalCheckbox.addEventListener('click', () => {
    filters.original = !filters.original;
    filter();
});

groupsItems.forEach((item) => {
   item.addEventListener('click', () => {
       filters.group = item.getAttribute('data-id');
       groupName.textContent = item.querySelector('.chip__dropdown-title').textContent;
       filter();
   });
});

const filter = () => {
    _utils_request__WEBPACK_IMPORTED_MODULE_0__["request"]
        .post('/api/applicants-filter', filters)
        .then(response => {
            let html = '';

            response.forEach((item) => {
                html += `
                    <div class="data-item">
                        <div class="data-item__info">
                            <div class="data-item__icon data-item__icon--success">${item.score}</div>
                            <div class="data-item__content">
                                <div class="data-item__title">
                                    ${item.surname} ${item.name} ${item.patronymic}
                                </div>
                                <div class="data-item__subtitle">
        
                                </div>
                            </div>
                        </div>
                        <div class="data-item__status">
                            ${item.original === '1' ? 'Оригинал' : 'Не оригинал'}
                        </div>
                    </div>
                `;
            });

            applicants.innerHTML = html;
        });
};


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
//# sourceMappingURL=index.js.map
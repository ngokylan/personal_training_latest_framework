/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//if its non js, should include the extension

var image = document.createElement('img');;
image.src = _small2.default;

document.body.appendChild(image);

var bigImage = document.createElement('img');;
bigImage.src = _big2.default; // the path may be wrong, will use another way to fix the path problem

document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

// module.exports = sum;
exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "83fbdfef4e7a266b2aa7c540e51c883a.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// only run the code and no export

// const sum = require('./sum');
var total = (0, _sum2.default)(10, 5); // we need to import the sum function 

console.log(total);

/***/ }
/******/ ]);
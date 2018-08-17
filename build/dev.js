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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(mocks, log, b64enc, b64dec, TykJsResponse) {myVirtualHandler(mocks.req, mocks.sess, mocks.config);\n\nfunction myVirtualHandler(request, session, config) {\n    log(\"Virtual Test running\");\n\n    log(\"Request Body: \" + JSON.stringify(request.Body));\n    log(\"Session: \" + JSON.stringify(session));\n    log(\"Config: \" + JSON.stringify(config));\n    log(\"param-1: \" + request.Params[\"param1\"]);\n\n    log(\"b64Enc: foo \" + b64enc(\"foo\"));\n    log(\"b64dec: Zm9v \" + b64dec(\"Zm9v\"));\n\n    var resBody = { \"foo\": \"bar\" };\n\n    var responseObject = {\n        Body: JSON.stringify(resBody),\n        Headers: {\n            \"test\": \"virtual\",\n            \"test-2\": \"virtual\"\n        },\n        Code: 200\n    };\n\n    return TykJsResponse(responseObject, session.meta_data);\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./mocks.js */ \"./src/mocks.js\"), __webpack_require__(/*! ./stubs.js */ \"./src/stubs.js\"), __webpack_require__(/*! ./stubs.js */ \"./src/stubs.js\"), __webpack_require__(/*! ./stubs.js */ \"./src/stubs.js\"), __webpack_require__(/*! ./stubs.js */ \"./src/stubs.js\")))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mocks.js":
/*!**********************!*\
  !*** ./src/mocks.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet mocks = {\n    req: {\n        Method: \"POST\",\n        Body: JSON.stringify({ \"foo\": \"bar\" }),\n        Headers: {},\n        Domain: \"http://foo.com\",\n        Resource: \"/event/quotas\",\n        FormData: { \"field\": \"value\" },\n        Params: {\n            param1: \"foo\"\n        },\n    },\n    sess: {\n        meta_data: {},\n    },\n    config: {},\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mocks);\n\n\n//# sourceURL=webpack:///./src/mocks.js?");

/***/ }),

/***/ "./src/stubs.js":
/*!**********************!*\
  !*** ./src/stubs.js ***!
  \**********************/
/*! exports provided: log, rawLog, b64enc, b64dec, TykMakeHttpRequest, TykJsResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rawLog\", function() { return rawLog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b64enc\", function() { return b64enc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b64dec\", function() { return b64dec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TykMakeHttpRequest\", function() { return TykMakeHttpRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TykJsResponse\", function() { return TykJsResponse; });\nconst log = (message) => {\n    console.log(\"JSVM Log: \" + message);\n};\n\nconst rawLog = (message) => {\n    console.log(message);\n}\n\nlet b64 = {\n    characters: \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\",\n    encode: function (string) {\n        var characters = b64.characters;\n        var result = '';\n\n        var i = 0;\n        do {\n            var a = string.charCodeAt(i++);\n            var b = string.charCodeAt(i++);\n            var c = string.charCodeAt(i++);\n\n            a = a ? a : 0;\n            b = b ? b : 0;\n            c = c ? c : 0;\n\n            var b1 = (a >> 2) & 0x3F;\n            var b2 = ((a & 0x3) << 4) | ((b >> 4) & 0xF);\n            var b3 = ((b & 0xF) << 2) | ((c >> 6) & 0x3);\n            var b4 = c & 0x3F;\n\n            if (!b) {\n                b3 = b4 = 64;\n            } else if (!c) {\n                b4 = 64;\n            }\n\n            result += b64.characters.charAt(b1) + b64.characters.charAt(b2) + b64.characters.charAt(b3) + b64.characters.charAt(b4);\n\n        } while (i < string.length);\n\n        return result;\n    },\n\n    decode: function (string) {\n        var characters = b64.characters;\n        var result = '';\n\n        var i = 0;\n        do {\n            var b1 = b64.characters.indexOf(string.charAt(i++));\n            var b2 = b64.characters.indexOf(string.charAt(i++));\n            var b3 = b64.characters.indexOf(string.charAt(i++));\n            var b4 = b64.characters.indexOf(string.charAt(i++));\n\n            var a = ((b1 & 0x3F) << 2) | ((b2 >> 4) & 0x3);\n            var b = ((b2 & 0xF) << 4) | ((b3 >> 2) & 0xF);\n            var c = ((b3 & 0x3) << 6) | (b4 & 0x3F);\n\n            result += String.fromCharCode(a) + (b ? String.fromCharCode(b) : '') + (c ? String.fromCharCode(c) : '');\n\n        } while (i < string.length);\n\n        return result;\n    }\n};\n\nconst b64enc = (stringToEncode) => {\n    return b64.encode(stringToEncode);\n}\n\nconst b64dec = (stringToDecode) => {\n    return b64.decode(stringToDecode);\n}\n\nconst TykMakeHttpRequest = () => {\n    console.log(\"TykMakeHttpRequest called\");\n}\n\nconst TykJsResponse = (res, sessionMeta) => {\n    console.log(\"TykJsResponse.res: \" + JSON.stringify(res));\n\n    if (typeof meta === \"undefined\") {\n        return\n    }\n\n    console.log(\"TykJsResponse.sessionMeta: \" + JSON.stringify(meta));\n}\n\n\n//# sourceURL=webpack:///./src/stubs.js?");

/***/ })

/******/ });
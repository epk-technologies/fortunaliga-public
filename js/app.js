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
/******/ 	__webpack_require__.p = "./js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@superkoders/sk-tools/src/array.js":
/*!*********************************************************!*\
  !*** ./node_modules/@superkoders/sk-tools/src/array.js ***!
  \*********************************************************/
/*! exports provided: first, last, length, clone, map, flatten, join, inArray, arrayOrEmpty, groupBy, emptyBySize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inArray", function() { return inArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOrEmpty", function() { return arrayOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyBySize", function() { return emptyBySize; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function */ "./node_modules/@superkoders/sk-tools/src/function.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var first = function first(arr) {
  return arr[0] || null;
};
var last = function last(arr) {
  return arr[arr.length - 1] || null;
};
var length = function length(arr) {
  return arr.length;
};
var clone = function clone(arr) {
  return [].slice.call(arr);
};
var map = Object(_function__WEBPACK_IMPORTED_MODULE_1__["curry"])(function (fn, arr) {
  return arr.map(fn);
});
var flatten = function flatten(arr) {
  return arr.reduce(function (acc, cur) {
    return acc.concat(cur);
  }, []);
};
var join = Object(_function__WEBPACK_IMPORTED_MODULE_1__["curry"])(function (delimiter, arr) {
  return arr.join(delimiter);
});
var inArray = function inArray(value, arr) {
  return arr.indexOf(value) > -1;
};
var arrayOrEmpty = function arrayOrEmpty(arr) {
  return arr || [];
};
var groupBy = Object(_function__WEBPACK_IMPORTED_MODULE_1__["curry"])(function (prop, arr) {
  return arr.reduce(function (acc, cur) {
    return _objectSpread(_objectSpread({}, acc), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, cur[prop], cur));
  }, {});
});
var emptyBySize = function emptyBySize(size) {
  return Array.apply(null, Array(size));
};

/***/ }),

/***/ "./node_modules/@superkoders/sk-tools/src/emmiter.js":
/*!***********************************************************!*\
  !*** ./node_modules/@superkoders/sk-tools/src/emmiter.js ***!
  \***********************************************************/
/*! exports provided: create, on, one, off, trigger, log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "one", function() { return one; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./node_modules/@superkoders/sk-tools/src/array.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic */ "./node_modules/@superkoders/sk-tools/src/logic.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var create = function create(target) {
  var subscribers = {};

  var withEmmiter = _objectSpread(_objectSpread({}, target), {}, {
    on: function on(type, fn) {
      var arr = Object(_array__WEBPACK_IMPORTED_MODULE_2__["arrayOrEmpty"])(subscribers[type]);

      if (!Object(_array__WEBPACK_IMPORTED_MODULE_2__["inArray"])(fn, arr) && Object(_logic__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(fn)) {
        subscribers[type] = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(arr), [fn]);
      }

      return withEmmiter;
    },
    one: function one(type, fn) {
      fn._event_once = true;
      return withEmmiter.on(type, fn);
    },
    off: function off(type, fn) {
      if (type == null && fn == null) {
        Object.keys(subscribers).forEach(function (type) {
          return withEmmiter.off(type);
        });
      }

      if (!type || !subscribers[type]) return withEmmiter;
      subscribers[type] = subscribers[type].filter(function (fnI) {
        // console.log(is(fn, fnI))
        if (!fn || Object(_logic__WEBPACK_IMPORTED_MODULE_3__["is"])(fn, fnI)) {
          delete fnI._event_once;
          return false;
        }

        return true;
      });
      if (!subscribers[type].length) delete subscribers[type];
      return withEmmiter;
    },
    trigger: function trigger(type, data) {
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      Object(_array__WEBPACK_IMPORTED_MODULE_2__["arrayOrEmpty"])(subscribers[type]).filter(function (fn) {
        fn.call(context, {
          type: type
        }, data);
        return fn._event_once;
      }).forEach(withEmmiter.off.bind(withEmmiter, type));
      return withEmmiter;
    },
    log: function log() {
      console.log(subscribers);
      return withEmmiter;
    }
  });

  return withEmmiter;
};
var global = create({});
var on = global.on;
var one = global.one;
var off = global.off;
var trigger = global.trigger;
var log = global.log;

/***/ }),

/***/ "./node_modules/@superkoders/sk-tools/src/event.js":
/*!*********************************************************!*\
  !*** ./node_modules/@superkoders/sk-tools/src/event.js ***!
  \*********************************************************/
/*! exports provided: delegate, on, off */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegate", function() { return delegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector */ "./node_modules/@superkoders/sk-tools/src/selector.js");

var delegate = function delegate(selector, callback) {
  return function (event) {
    var node = Object(_selector__WEBPACK_IMPORTED_MODULE_0__["query"])(selector, event.currentTarget).find(function (node) {
      return node.contains(event.target);
    });

    if (node != null) {
      callback(event, node);
    }

    return event;
  };
};
var on = function on(node, type, handler) {
  node.addEventListener(type, handler, false);
};
var off = function off(node, type, handler) {
  node.removeEventListener(type, handler);
};

/***/ }),

/***/ "./node_modules/@superkoders/sk-tools/src/function.js":
/*!************************************************************!*\
  !*** ./node_modules/@superkoders/sk-tools/src/function.js ***!
  \************************************************************/
/*! exports provided: curry, pipe, tap, invoke, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return curry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return tap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return invoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
var curry = function curry(f) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (args.length >= f.length) return f.apply(void 0, args);
  return function () {
    for (var _len2 = arguments.length, next = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      next[_key2] = arguments[_key2];
    }

    return curry.apply(void 0, [f.bind.apply(f, [f].concat(args))].concat(next));
  };
};
var pipe = function pipe() {
  for (var _len3 = arguments.length, fns = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    fns[_key3] = arguments[_key3];
  }

  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v);
    }, x);
  };
};
var tap = curry(function (fn, arg) {
  fn(arg);
  return arg;
});
var invoke = curry(function (fnName, args, obj) {
  return obj[fnName].apply(obj, args);
});
var debounce = curry(function (wait, func) {
  var timeout;
  return function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    var later = function later() {
      timeout = null;
      func.apply(void 0, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
});

/***/ }),

/***/ "./node_modules/@superkoders/sk-tools/src/loadScript.js":
/*!**************************************************************!*\
  !*** ./node_modules/@superkoders/sk-tools/src/loadScript.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cache = {};
/* harmony default export */ __webpack_exports__["default"] = (function (src) {
  if (cache[src]) return cache[src];
  cache[src] = new Promise(function (resolve, reject) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.onload = resolve;
    s.onerror = reject;
    s.src = src;
    document.head.appendChild(s);
  });
  return cache[src];
});

/***/ }),

/***/ "./node_modules/@superkoders/sk-tools/src/loadYoutube.js":
/*!***************************************************************!*\
  !*** ./node_modules/@superkoders/sk-tools/src/loadYoutube.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadScript */ "./node_modules/@superkoders/sk-tools/src/loadScript.js");

var api = null;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (api) return api;
  api = new Promise(function (resolve, reject) {
    window.onYouTubeIframeAPIReady = function () {
      resolve(window.YT);
      delete window.onYouTubeIframeAPIReady;
    };

    Object(_loadScript__WEBPACK_IMPORTED_MODULE_0__["default"])('//www.youtube.com/player_api').catch(reject);
  });
  return api;
});

/***/ }),

/***/ "./node_modules/@superkoders/sk-tools/src/logic.js":
/*!*********************************************************!*\
  !*** ./node_modules/@superkoders/sk-tools/src/logic.js ***!
  \*********************************************************/
/*! exports provided: is, isFunction, isObject, isNil, isWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindow", function() { return isWindow; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

var is = function is(a, b) {
  return a === b ? a !== 0 || 1 / a !== 1 / b : a !== a && b !== b;
};
var isFunction = function isFunction(fn) {
  return is(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(fn), 'function');
};
var isObject = function isObject(obj) {
  return obj === Object(obj);
};
var isNil = function isNil(x) {
  return x == null;
};
var isWindow = function isWindow(node) {
  return node != null && node === node.window;
};

/***/ }),

/***/ "./node_modules/@superkoders/sk-tools/src/selector.js":
/*!************************************************************!*\
  !*** ./node_modules/@superkoders/sk-tools/src/selector.js ***!
  \************************************************************/
/*! exports provided: byID, byName, query, is */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byID", function() { return byID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byName", function() { return byName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/@superkoders/sk-tools/src/array.js");

var byID = function byID(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return [context.getElementById(selector)];
};
var byName = function byName(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return Object(_array__WEBPACK_IMPORTED_MODULE_0__["clone"])(context.getElementsByName(selector));
};
var query = function query(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return Object(_array__WEBPACK_IMPORTED_MODULE_0__["clone"])(context.querySelectorAll(selector));
};
var is = function is(node, selector) {
  return node.matches(selector);
};

/***/ }),

/***/ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js ***!
  \*****************************************************************/
/*! exports provided: disableBodyScroll, clearAllBodyScrollLocks, enableBodyScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return disableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAllBodyScrollLocks", function() { return clearAllBodyScrollLocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return enableBodyScroll; });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;

// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + 'px';
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
    return;
  }

  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some(function (lock) {
    return lock.targetElement === targetElement;
  })) {
    return;
  }

  var lock = {
    targetElement: targetElement,
    options: options || {}
  };

  locks = [].concat(_toConsumableArray(locks), [lock]);

  if (isIosDevice) {
    targetElement.ontouchstart = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
  }

  locks = [];
};

var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
    return;
  }

  locks = locks.filter(function (lock) {
    return lock.targetElement !== targetElement;
  });

  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }
  } else if (!locks.length) {
    restoreOverflowSetting();
  }
};



/***/ }),

/***/ "./node_modules/focus-trap/dist/focus-trap.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/focus-trap/dist/focus-trap.esm.js ***!
  \********************************************************/
/*! exports provided: createFocusTrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusTrap", function() { return createFocusTrap; });
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/dist/index.esm.js");
/*!
* focus-trap 6.1.3
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var activeFocusDelay;

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

function createFocusTrap(element, userOptions) {
  var doc = document;
  var container = typeof element === 'string' ? doc.querySelector(element) : element;

  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };
  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };
  return trap;

  function activate(activateOptions) {
    if (state.active) return;
    updateTabbableNodes();
    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;
    var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;
    clearTimeout(activeFocusDelay);
    removeListeners();
    state.active = false;
    state.paused = false;
    activeFocusTraps.deactivateTrap(trap);
    var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

    if (returnFocus) {
      delay(function () {
        tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    updateTabbableNodes();
    addListeners();
  }

  function addListeners() {
    if (!state.active) return; // There can be only one listening focus trap at a time

    activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    activeFocusDelay = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  }

  function removeListeners() {
    if (!state.active) return;
    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;

    if (!optionValue) {
      return null;
    }

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);

      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }

    if (typeof optionValue === 'function') {
      node = optionValue();

      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }

    return node;
  }

  function getInitialFocusNode() {
    var node;

    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }

    return node;
  }

  function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus');
    return node ? node : previousActiveElement;
  } // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  function checkPointerDown(e) {
    if (container.contains(e.target)) {
      // allow the click since it ocurred inside the trap
      return;
    }

    if (config.clickOutsideDeactivates) {
      // immediately deactivate the trap
      deactivate({
        // if, on deactivation, we should return focus to the node originally-focused
        //  when the trap was activated (or the configured `setReturnFocus` node),
        //  then assume it's also OK to return focus to the outside node that was
        //  just clicked, causing deactivation, as long as that node is focusable;
        //  if it isn't focusable, then return focus to the original node focused
        //  on activation (or the configured `setReturnFocus` node)
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked, whether it's focusable or not; by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node)
        returnFocus: config.returnFocusOnDeactivate && !Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["isFocusable"])(e.target)
      });
      return;
    } // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)


    if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
      // allow the click outside the trap to take place
      return;
    } // otherwise, prevent the click


    e.preventDefault();
  } // In case focus escapes the trap for some strange reason, pull it back in.


  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }

    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }

    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  } // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  function checkTab(e) {
    updateTabbableNodes();

    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }

    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;

    if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["tabbable"])(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode = tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}


//# sourceMappingURL=focus-trap.esm.js.map


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/tabbable/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/tabbable/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: focusable, isFocusable, isTabbable, tabbable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusable", function() { return focusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFocusable", function() { return isFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTabbable", function() { return isTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabbable", function() { return tabbable; });
/*!
* tabbable 5.1.4
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

var getCandidates = function getCandidates(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }

  candidates = candidates.filter(filter);
  return candidates;
};

var isContentEditable = function isContentEditable(node) {
  return node.contentEditable === 'true';
};

var getTabindex = function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.


  if (isContentEditable(node)) {
    return 0;
  } // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.


  if ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }

  return node.tabIndex;
};

var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};

var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};

var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};

var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};

var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};

var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }

  var radioScope = node.form || node.ownerDocument;
  var radioSet = radioScope.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};

var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};

var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

var isHidden = function isHidden(node) {
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }

  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }

  while (node) {
    if (getComputedStyle(node).display === 'none') {
      return true;
    }

    node = node.parentElement;
  }

  return false;
};

var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node) ||
  /* For a details element with a summary, the summary element gets the focused  */
  isDetailsWithSummary(node)) {
    return false;
  }

  return true;
};

var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(node) {
  if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }

  return true;
};

var tabbable = function tabbable(el, options) {
  options = options || {};
  var regularTabbables = [];
  var orderedTabbables = [];
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable);
  candidates.forEach(function (candidate, i) {
    var candidateTabindex = getTabindex(candidate);

    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  });
  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);
  return tabbableNodes;
};

var focusable = function focusable(el, options) {
  options = options || {};
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable);
  return candidates;
};

var isTabbable = function isTabbable(node) {
  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, candidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorTabbable(node);
};

var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

var isFocusable = function isFocusable(node) {
  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorFocusable(node);
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _superkoders_sk_tools_src_emmiter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @superkoders/sk-tools/src/emmiter */ "./node_modules/@superkoders/sk-tools/src/emmiter.js");
/* harmony import */ var _components_menuMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menuMain */ "./src/js/components/menuMain.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _components_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/video */ "./src/js/components/video.js");
 // import './tools/svg4everybody';
// import { media } from './tools/MQ';
// Components



 // content load components

var componentsload = [_components_modal__WEBPACK_IMPORTED_MODULE_2__, _components_video__WEBPACK_IMPORTED_MODULE_3__]; // once delegated components

var components = [_components_menuMain__WEBPACK_IMPORTED_MODULE_1__].concat(componentsload);
window.App = Object(_superkoders_sk_tools_src_emmiter__WEBPACK_IMPORTED_MODULE_0__["create"])({
  run: function run() {
    var targetNode = document.body;
    components.forEach(function (component) {
      return component.init(targetNode);
    });
    this.on('contentload', function (event, _ref) {
      var element = _ref.element;
      componentsload.forEach(function (component) {
        return component.init(element);
      });
    });
    this.on('contentunload', function (event, _ref2) {
      var element = _ref2.element;
      componentsload.forEach(function (component) {
        return component.destroy(element);
      });
    });
  },
  initComponent: function initComponent(component) {
    return component.init();
  }
});

/***/ }),

/***/ "./src/js/components/SKModal.ts":
/*!**************************************!*\
  !*** ./src/js/components/SKModal.ts ***!
  \**************************************/
/*! exports provided: initModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initModal", function() { return initModal; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");
/* harmony import */ var _superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @superkoders/sk-tools/src/event */ "./node_modules/@superkoders/sk-tools/src/event.js");
/* harmony import */ var _superkoders_sk_tools_src_emmiter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @superkoders/sk-tools/src/emmiter */ "./node_modules/@superkoders/sk-tools/src/emmiter.js");
/* harmony import */ var _superkoders_sk_tools_src_loadYoutube__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @superkoders/sk-tools/src/loadYoutube */ "./node_modules/@superkoders/sk-tools/src/loadYoutube.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ "./src/js/components/constants.ts");
/* harmony import */ var _tools_loadVimeoAPI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tools/loadVimeoAPI */ "./src/js/tools/loadVimeoAPI.ts");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var modals = [];

var loadContent = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(url) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url).then(function (response) {
              return response.text();
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadContent(_x) {
    return _ref.apply(this, arguments);
  };
}();

var loadImage = function loadImage(src) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.addEventListener('load', function () {
      return resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error("Failed to load image with src: ".concat(src)));
    });
    img.draggable = false;
    img.src = src;
  });
};

var getIframe = function getIframe(src, loadHandler) {
  var isVideo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var iframe = document.createElement('iframe');
  iframe.addEventListener('load', function () {
    return loadHandler();
  });
  iframe.addEventListener('error', function () {
    loadHandler();
    console.warn("Failed to load iframe with src: ".concat(src));
  });
  iframe.allowFullscreen = true;
  iframe.scrolling = isVideo ? 'no' : 'auto';
  iframe.allow = 'autoplay; fullscreen';
  iframe.frameBorder = '0';
  iframe.src = src;
  return iframe;
}; // force scrollbar gap for fixed elements


var toggleScrollbarGap = function toggleScrollbarGap() {
  var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var bodyStyle = document.body.style;
  Array.from(document.querySelectorAll('[data-scroll-lock-keep-gap]')).forEach(function (elem) {
    elem.style.marginRight = show ? bodyStyle.paddingRight : '';
  });
};

var defaultOpts = {
  context: document,
  closeSelector: ".".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].CLOSE),
  parentElement: document.body,
  infinite: false,
  closeIcon: '&#10005;',
  prevIcon: '&#x02190;',
  nextIcon: '&#x02192;',
  loadIcon: '<span class="b-modal__loader-icon"><span>&#x021BA;</span></span>',
  removeOnClose: false,
  buildStructure: _constants__WEBPACK_IMPORTED_MODULE_9__["buildStructure"],
  headerTpl: function headerTpl(options) {
    return "";
  },
  titleTpl: function titleTpl(text) {
    return "<h3>".concat(text, "</h3>");
  },
  descTpl: function descTpl(text) {
    return "<p>".concat(text, "<p>");
  },
  prevTpl: function prevTpl(options) {
    return "<button type=\"button\" class=\"b-modal__prev-btn ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].PREV_TRIGGER, "\">").concat(options.prevIcon, "</button>");
  },
  nextTpl: function nextTpl(options) {
    return "<button type=\"button\" class=\"b-modal__next-btn ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].NEXT_TRIGGER, "\">").concat(options.nextIcon, "</button>");
  },
  loaderTpl: function loaderTpl(options) {
    return options.loadIcon;
  },
  navTpl: function navTpl(items) {
    return items.map(function (_item, index) {
      return "<span class=\"b-modal__nav-item ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].NAV_TRIGGER, "\" data-modal-index=\"").concat(index, "\"></span>");
    }).join('');
  },
  imageLoader: loadImage,
  fetchLoader: loadContent
};

var createModal = function createModal(id, items, options) {
  var currentIndex = 0;

  var currentItems = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(items);

  var ytAPI = null;
  var vimeoAPI = null;
  var dragX = 0;
  var structurePrepared = false;
  var modalFragments = {};
  var slides = [];
  var isOpened = false;
  var modal = document.createElement('div');
  var emmiter = Object(_superkoders_sk_tools_src_emmiter__WEBPACK_IMPORTED_MODULE_7__["create"])({});
  var modalFocusTrap = Object(focus_trap__WEBPACK_IMPORTED_MODULE_4__["createFocusTrap"])(modal);
  var scrollLockOptions = {
    allowTouchMove: function allowTouchMove(el) {
      return el.isSameNode(modal);
    },
    reserveScrollBarGap: true
  };

  var prepareStructure = function prepareStructure() {
    modal.innerHTML = '';
    modal.setAttribute('id', "modal-".concat(id));
    modal.setAttribute('class', "b-modal ".concat(options.customWrapperClass || ''));
    modal.setAttribute('tabindex', '0');
    options.parentElement.appendChild(modal); // fragments

    var header = document.createElement('div');
    var titleElem = document.createElement('div');
    var descElem = document.createElement('div');
    var content = document.createElement('div');
    var prevElem = document.createElement('div');
    var nextElem = document.createElement('div');
    var navElem = document.createElement('div');
    var loader = document.createElement('div');
    var bg = document.createElement('div');
    modalFragments = {
      header: header,
      titleElem: titleElem,
      descElem: descElem,
      content: content,
      prevElem: prevElem,
      nextElem: nextElem,
      navElem: navElem,
      loader: loader,
      bg: bg
    };
    header.className = "b-modal__header ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].HEADER);
    titleElem.className = "b-modal__title ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].TITLE);
    descElem.className = "b-modal__description ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].DESC);
    content.className = "b-modal__content ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].CONTENT);
    prevElem.className = "b-modal__prev ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].PREV);
    nextElem.className = "b-modal__next ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].NEXT);
    navElem.className = "b-modal__nav ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].NAV);
    loader.className = "b-modal__loader ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].LOADER);
    bg.className = "b-modal__bg ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].BG, " ").concat(options.closeOnBgClick ? _constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].CLOSE : ''); // create structure

    options.buildStructure(modal, modalFragments); // get slides

    slides = getSlides(currentItems);
    header.innerHTML = options.headerTpl(options);

    if (!options.hideNav) {
      prevElem.innerHTML = options.prevTpl(options);
      nextElem.innerHTML = options.nextTpl(options);
      navElem.innerHTML = currentItems.length > 1 ? options.navTpl(currentItems) : '';
    }

    loader.innerHTML = options.loaderTpl(options); // bind events

    Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["on"])(modal, 'click', close);
    Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["on"])(modal, 'click', prev);
    Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["on"])(modal, 'click', next);
    Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["on"])(modal, 'click', nav);
    Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["on"])(modal, 'keydown', handleKeyDown);
    Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["on"])(content, 'touchstart', onTouchStart);
    Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["on"])(content, 'touchend', onTouchEnd);

    if (options.onModalOpen) {
      emmiter.on('modalOpen', options.onModalOpen);
    }

    if (options.onModalClose) {
      emmiter.on('modalClose', options.onModalClose);
    }

    if (options.onModalContentLoaded) {
      emmiter.on('modalContentLoaded', options.onModalContentLoaded);
    }

    if (options.onModalSlideChanged) {
      emmiter.on('modalSlideChanged', options.onModalSlideChanged);
    }
  };

  var getSlides = function getSlides(items) {
    var _modalFragments = modalFragments,
        content = _modalFragments.content;
    content.innerHTML = '';
    return items.map(function () {
      var slide = document.createElement('div');
      slide.setAttribute('class', "b-modal__slide ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].SLIDE));
      content.appendChild(slide);
      return slide;
    });
  };

  var iframeLoadHandler = function iframeLoadHandler() {
    emmiter.trigger('modalContentLoaded', null, modalFragments.content);
  };

  var resolveMedium = function resolveMedium(item, src) {
    var medium = item.medium;

    if (!src) {
      return null;
    }

    if (medium) {
      return medium;
    }

    if (Array.isArray(src)) {
      return resolveMedium(item, src[0]);
    }

    if (_constants__WEBPACK_IMPORTED_MODULE_9__["mediaRegex"].anchor.test(src)) {
      return _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].ELEMENT;
    }

    if (_constants__WEBPACK_IMPORTED_MODULE_9__["mediaRegex"].image.test(src)) {
      return _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].IMAGE;
    }

    if (_constants__WEBPACK_IMPORTED_MODULE_9__["mediaRegex"].video.test(src)) {
      return _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].VIDEO;
    }

    if (_constants__WEBPACK_IMPORTED_MODULE_9__["mediaRegex"].youtube.test(src)) {
      return _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].YOUTUBE;
    }

    if (_constants__WEBPACK_IMPORTED_MODULE_9__["mediaRegex"].vimeo.test(src)) {
      return _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].VIMEO;
    }

    if (src !== '') {
      return _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].IFRAME;
    }

    return null;
  };

  var getContent = /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(item) {
      var element, url, player, src, medium, imageSources, wrapperElement, _iterator, _step, source, img, contentElement, wrapElement, contentFetch, _contentElement, formatMatch, format, _wrapperElement, videoSrc, iframe, _wrapperElement2, urlMatcher, iframeUrl, _iframe, _wrapperElement3, _player, _urlMatcher, _iframeUrl, _iframe2, _wrapperElement4, _player2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              element = item.element, url = item.url, player = item.player;
              src = element ? element.getAttribute('href') : url;
              medium = resolveMedium(item, src);

              if (medium) {
                _context2.next = 6;
                break;
              }

              console.warn("SKModal: Modal medium type was not resolved. Check if the source is correct. Provided source was '".concat(src, "'."));
              return _context2.abrupt("return", null);

            case 6:
              if (!(medium === _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].IMAGE)) {
                _context2.next = 32;
                break;
              }

              imageSources = Array.isArray(src) ? _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(src) : [src];
              wrapperElement = document.createElement('div'); // for - of is resolving "await" in sequence - so we are sure with the order of images

              _iterator = _createForOfIteratorHelper(imageSources);
              _context2.prev = 10;

              _iterator.s();

            case 12:
              if ((_step = _iterator.n()).done) {
                _context2.next = 21;
                break;
              }

              source = _step.value;
              _context2.next = 16;
              return options.imageLoader(source);

            case 16:
              img = _context2.sent;
              wrapperElement.appendChild(img);

              if (img.height >= window.innerHeight && imageSources.length === 1) {
                img.classList.add('is-big');
              }

            case 19:
              _context2.next = 12;
              break;

            case 21:
              _context2.next = 26;
              break;

            case 23:
              _context2.prev = 23;
              _context2.t0 = _context2["catch"](10);

              _iterator.e(_context2.t0);

            case 26:
              _context2.prev = 26;

              _iterator.f();

              return _context2.finish(26);

            case 29:
              wrapperElement.classList.add('b-modal__image');

              if (imageSources.length > 1) {
                wrapperElement.classList.add('b-modal__image--multiple');
              }

              return _context2.abrupt("return", wrapperElement);

            case 32:
              if (!Array.isArray(src)) {
                _context2.next = 35;
                break;
              }

              console.warn('SKModal: Multiple urls are allowed only for images!');
              return _context2.abrupt("return", null);

            case 35:
              if (!(medium === _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].ELEMENT)) {
                _context2.next = 41;
                break;
              }

              contentElement = document.querySelector(src);
              wrapElement = document.createElement('div');
              wrapElement.className = 'b-modal__inner';

              if (contentElement) {
                wrapElement.innerHTML = contentElement.innerHTML + "<button type=\"button\" class=\"b-modal__close ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].CLOSE, "\"><span class=\"b-modal__close-text u-vhide\">Close</span>").concat(options.closeIcon, "</button>");
              } else {
                console.warn("SKModal: Content element not found. Check if the id is correct. Provided id was '".concat(src, "'."));
              }

              return _context2.abrupt("return", wrapElement);

            case 41:
              if (!(medium === _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].FETCH)) {
                _context2.next = 49;
                break;
              }

              _context2.next = 44;
              return options.fetchLoader(src);

            case 44:
              contentFetch = _context2.sent;
              _contentElement = document.createElement('div');
              _contentElement.className = 'b-modal__inner';
              _contentElement.innerHTML = contentFetch + "<button type=\"button\" class=\"b-modal__close ".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].CLOSE, "\"><span class=\"b-modal__close-text u-vhide\">Close</span>").concat(options.closeIcon, "</button>");
              return _context2.abrupt("return", _contentElement);

            case 49:
              if (!(medium === _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].VIDEO)) {
                _context2.next = 57;
                break;
              }

              formatMatch = src.match(_constants__WEBPACK_IMPORTED_MODULE_9__["mediaRegex"].video);
              format = "video/".concat(formatMatch[1] === 'ogv' ? 'ogg' : formatMatch[1]);
              _wrapperElement = document.createElement('div');
              videoSrc = "<video controls autoplay><source src=\"".concat(src, "\" type=\"").concat(format, "\"></video>");

              _wrapperElement.classList.add('b-modal__video');

              _wrapperElement.innerHTML = videoSrc;
              return _context2.abrupt("return", _wrapperElement);

            case 57:
              if (!(medium === _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].IFRAME)) {
                _context2.next = 63;
                break;
              }

              iframe = getIframe(src, iframeLoadHandler);
              _wrapperElement2 = document.createElement('div');

              _wrapperElement2.classList.add('b-modal__iframe');

              _wrapperElement2.appendChild(iframe);

              return _context2.abrupt("return", _wrapperElement2);

            case 63:
              if (!(medium === _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].YOUTUBE)) {
                _context2.next = 76;
                break;
              }

              urlMatcher = src.match(_constants__WEBPACK_IMPORTED_MODULE_9__["mediaRegex"].youtube);
              iframeUrl = "https://www.youtube.com/embed/".concat(urlMatcher[4], "?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1");
              _iframe = getIframe(iframeUrl, iframeLoadHandler, true);
              _wrapperElement3 = document.createElement('div');

              _wrapperElement3.classList.add('b-modal__embed');

              _wrapperElement3.appendChild(_iframe);

              if (ytAPI) {
                _context2.next = 74;
                break;
              }

              _context2.next = 73;
              return Object(_superkoders_sk_tools_src_loadYoutube__WEBPACK_IMPORTED_MODULE_8__["default"])();

            case 73:
              ytAPI = _context2.sent;

            case 74:
              if (!player) {
                _player = new ytAPI.Player(_iframe);
                item.player = _player;
              }

              return _context2.abrupt("return", _wrapperElement3);

            case 76:
              if (!(medium === _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].VIMEO)) {
                _context2.next = 89;
                break;
              }

              _urlMatcher = src.match(_constants__WEBPACK_IMPORTED_MODULE_9__["mediaRegex"].vimeo);
              _iframeUrl = "https://player.vimeo.com/video/".concat(_urlMatcher[2], "?autoplay=1&portrait=0");
              _iframe2 = getIframe(_iframeUrl, iframeLoadHandler, true);
              _wrapperElement4 = document.createElement('div');

              _wrapperElement4.classList.add('b-modal__embed');

              _wrapperElement4.appendChild(_iframe2);

              if (vimeoAPI) {
                _context2.next = 87;
                break;
              }

              _context2.next = 86;
              return Object(_tools_loadVimeoAPI__WEBPACK_IMPORTED_MODULE_10__["default"])();

            case 86:
              vimeoAPI = _context2.sent;

            case 87:
              if (!player) {
                _player2 = new vimeoAPI.Player(_iframe2);
                item.player = _player2;
              }

              return _context2.abrupt("return", _wrapperElement4);

            case 89:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[10, 23, 26, 29]]);
    }));

    return function getContent(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var goTo = /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(index) {
      var item, title, desc, element, url, _modalFragments2, titleElem, descElem, content, src, medium;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              currentIndex = index;
              item = currentItems[index];
              title = item.title, desc = item.desc, element = item.element, url = item.url;
              _modalFragments2 = modalFragments, titleElem = _modalFragments2.titleElem, descElem = _modalFragments2.descElem; // toggle nav arrows

              if (!options.infinite) {
                if (currentIndex === 0) {
                  modal.classList.add('is-first');
                } else {
                  modal.classList.remove('is-first');
                }

                if (currentIndex === currentItems.length - 1) {
                  modal.classList.add('is-last');
                } else {
                  modal.classList.remove('is-last');
                }
              } // render title and desc


              titleElem.innerHTML = title ? options.titleTpl(title) : '';
              descElem.innerHTML = desc ? options.descTpl(desc) : ''; // render content

              if (slides[index].classList.contains('is-loaded')) {
                _context3.next = 15;
                break;
              }

              modal.classList.add('is-loading');
              _context3.next = 11;
              return getContent(item);

            case 11:
              content = _context3.sent;
              slides[index].appendChild(content);
              modal.classList.remove('is-loading');
              slides[index].classList.add('is-loaded');

            case 15:
              // toggle active
              slides.forEach(function (slide, i) {
                slide.classList.remove('is-active');
                var video = slide.querySelector('video');
                var player = currentItems[i].player;

                if (player) {
                  if (i === currentIndex) {
                    player.playVideo ? player.playVideo() : player.play && player.play();
                  } else {
                    player.pauseVideo ? player.pauseVideo() : player.pause && player.pause();
                  }
                }

                if (i === currentIndex) {
                  slide.classList.add('is-active');
                  video && video.play();
                } else {
                  video && video.pause();
                }
              });
              Array.from(modal.querySelectorAll(".".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].NAV_TRIGGER))).forEach(function (navItem, i) {
                if (i === currentIndex) {
                  navItem.classList.add('is-active');
                } else {
                  navItem.classList.remove('is-active');
                }
              }); // trigger content loaded

              src = element ? element.getAttribute('href') : url;
              medium = resolveMedium(item, src);

              if (medium && medium !== _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].IFRAME && medium !== _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].VIMEO && medium !== _constants__WEBPACK_IMPORTED_MODULE_9__["ModalMedium"].YOUTUBE) {
                emmiter.trigger('modalContentLoaded', null, modalFragments.content);
                modalFocusTrap.activate();
              }

              emmiter.trigger('modalSlideChanged', {
                page: currentIndex + 1
              });

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function goTo(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var prev = Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["delegate"])(".".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].PREV_TRIGGER), function () {
    if (options.hideNav) return;
    var prevIndex = currentIndex - 1;

    if (prevIndex < 0 && options.infinite) {
      prevIndex = currentItems.length - 1;
    } else if (prevIndex < 0) {
      return;
    }

    goTo(prevIndex);
  });
  var next = Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["delegate"])(".".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].NEXT_TRIGGER), function () {
    if (options.hideNav) return;
    var nextIndex = currentIndex + 1;

    if (nextIndex > currentItems.length - 1 && options.infinite) {
      nextIndex = 0;
    } else if (nextIndex > currentItems.length - 1) {
      return;
    }

    goTo(nextIndex);
  });
  var nav = Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["delegate"])(".".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ModalClasses"].NAV_TRIGGER), function (event) {
    var index = event.target.dataset.modalIndex;

    if (index) {
      goTo(parseInt(index));
    }
  });

  var open = function open(index, event) {
    if (event) {
      event.preventDefault();
    }

    if (!structurePrepared) {
      prepareStructure();
      structurePrepared = true;
    }

    modal.classList.add('is-opened');
    goTo(index);
    Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__["disableBodyScroll"])(modal, scrollLockOptions);
    toggleScrollbarGap();
    emmiter.trigger('modalOpen');
    isOpened = true;
  };

  var close = Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["delegate"])(options.closeSelector, function (event) {
    if (event) {
      event.preventDefault();
    }

    modal.classList.remove('is-opened');
    isOpened = false;
    slides.forEach(function (slide, i) {
      var video = slide.querySelector('video');
      var player = currentItems[i].player;

      if (player) {
        player.pauseVideo ? player.pauseVideo() : player.pause && player.pause();
      }

      if (video) {
        video.pause();
      }
    });
    modalFocusTrap.deactivate();
    Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__["enableBodyScroll"])(modal);
    toggleScrollbarGap(false);
    emmiter.trigger('modalClose');

    if (options.removeOnClose) {
      modals[id].element.remove();
      structurePrepared = false;
    }
  });

  var redraw = function redraw(newItems, skipGoTo) {
    var _modalFragments3 = modalFragments,
        navElem = _modalFragments3.navElem;

    if (options.plugins && options.plugins.length) {
      options.plugins.forEach(function (plugin) {
        return plugin.reInitOnRedraw && plugin.destroy(modals[id]);
      });
    }

    currentItems = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(newItems);
    modals[id].items = currentItems;
    slides = getSlides(newItems);
    navElem.innerHTML = newItems.length > 1 ? options.navTpl(newItems) : '';

    if (options.plugins && options.plugins.length) {
      options.plugins.forEach(function (plugin) {
        return plugin.reInitOnRedraw && plugin.init(modals[id]);
      });
    }

    if (skipGoTo) return;
    goTo(newItems[currentIndex] ? currentIndex : 0);
  };

  var getIndex = function getIndex() {
    return currentIndex;
  };

  var handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      // navigate
      case _constants__WEBPACK_IMPORTED_MODULE_9__["KeyCodes"].ARR_LEFT:
      case _constants__WEBPACK_IMPORTED_MODULE_9__["KeyCodes"].ARR_UP:
        prev();
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_9__["KeyCodes"].ARR_RIGHT:
      case _constants__WEBPACK_IMPORTED_MODULE_9__["KeyCodes"].ARR_DOWN:
        next();
        break;
      // close

      case _constants__WEBPACK_IMPORTED_MODULE_9__["KeyCodes"].ESC:
        close(event);
        break;

      default:
        return;
    }
  };

  var onTouchStart = function onTouchStart(event) {
    dragX = event.changedTouches[0].clientX;
  };

  var onTouchEnd = function onTouchEnd(event) {
    if (!dragX) return;
    var dx = event.changedTouches[0].clientX - dragX;

    if (Math.abs(dx) >= 20) {
      dx < 0 ? next() : prev();
    }
  };

  var destroy = function destroy() {
    var _modalFragments4 = modalFragments,
        content = _modalFragments4.content; // unbind events

    Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["off"])(modal, 'click', close);
    Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["off"])(modal, 'click', prev);
    Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["off"])(modal, 'click', next);
    Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["off"])(modal, 'click', nav);
    Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["off"])(modal, 'keydown', handleKeyDown);
    Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["off"])(content, 'touchstart', onTouchStart);
    Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["off"])(content, 'touchend', onTouchEnd);
    emmiter.off(); // unbind modal items click

    items.forEach(function (item) {
      if (item.clickHandler) {
        Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["off"])(item.element, 'click', item.clickHandler);
      }
    }); // destroy plugins

    if (options.plugins && options.plugins.length) {
      options.plugins.forEach(function (plugin) {
        return plugin.destroy && plugin.destroy(modals[id]);
      });
    } // delete modal


    modals[id].element.remove();
    modals.splice(id, 1);
  }; // bind modal items click


  items.forEach(function (item, index) {
    var element = item.element;

    if (element) {
      item.clickHandler = function (event) {
        return open(index, event);
      };

      Object(_superkoders_sk_tools_src_event__WEBPACK_IMPORTED_MODULE_6__["on"])(element, 'click', item.clickHandler);
    }
  });
  var modalInstance = {
    options: options,
    emmiter: emmiter,
    context: options.context,
    element: modal,
    fragments: modalFragments,
    items: items,
    isOpened: isOpened,
    methods: {
      open: open,
      close: close,
      prev: prev,
      next: next,
      goTo: goTo,
      redraw: redraw,
      getIndex: getIndex,
      destroy: destroy
    }
  }; // init plugins

  if (options.plugins && options.plugins.length) {
    options.plugins.forEach(function (plugin) {
      return plugin.init(modalInstance);
    });
  }

  return modalInstance;
};

var initModal = function initModal(opts, modalItems) {
  var options = _objectSpread(_objectSpread({}, defaultOpts), opts);

  var context = options.context;
  var items = [];

  if (context) {
    var elements = Array.from(context.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_9__["modalSelector"]));
    items = elements.map(function (element) {
      return _objectSpread({
        element: element
      }, JSON.parse(element.dataset.modal || '{}'));
    });
  }

  if (modalItems) {
    items = modalItems;
  }

  var galleries = items.reduce(function (acc, item) {
    var _item$gallery = item.gallery,
        gallery = _item$gallery === void 0 ? 'default' : _item$gallery;

    if (acc[gallery]) {
      acc[gallery].push(item);
    } else {
      acc[gallery] = [item];
    }

    return acc;
  }, {});
  Object.keys(galleries).forEach(function (gallery) {
    var modalOptions = _objectSpread({}, options);

    if (gallery === 'default') {
      modalOptions.hideNav = true;
    }

    modals.push(createModal(modals.length, galleries[gallery], modalOptions));
  });
  return modals;
};

/***/ }),

/***/ "./src/js/components/constants.ts":
/*!****************************************!*\
  !*** ./src/js/components/constants.ts ***!
  \****************************************/
/*! exports provided: ModalClasses, ModalMedium, modalSelector, mediaRegex, buildStructure, KeyCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalClasses", function() { return ModalClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMedium", function() { return ModalMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalSelector", function() { return modalSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaRegex", function() { return mediaRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildStructure", function() { return buildStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCodes", function() { return KeyCodes; });
var ModalClasses;

(function (ModalClasses) {
  ModalClasses["HEADER"] = "js-modal-header";
  ModalClasses["TITLE"] = "js-modal-title";
  ModalClasses["TITLE_TEXT"] = "js-modal-title-text";
  ModalClasses["DESC"] = "js-modal-desc";
  ModalClasses["DESC_TEXT"] = "js-modal-desc-text";
  ModalClasses["CONTENT"] = "js-modal-content";
  ModalClasses["PREV"] = "js-modal-prev";
  ModalClasses["NEXT"] = "js-modal-next";
  ModalClasses["NAV"] = "js-modal-nav";
  ModalClasses["LOADER"] = "js-modal-loader";
  ModalClasses["BG"] = "js-modal-bg";
  ModalClasses["CLOSE"] = "js-modal-close";
  ModalClasses["SLIDE"] = "js-modal-slide";
  ModalClasses["PREV_TRIGGER"] = "js-modal-prev-trigger";
  ModalClasses["NEXT_TRIGGER"] = "js-modal-next-trigger";
  ModalClasses["NAV_TRIGGER"] = "js-modal-nav-trigger";
  ModalClasses["IFRAME"] = "js-modal-iframe";
})(ModalClasses || (ModalClasses = {}));

var ModalMedium;

(function (ModalMedium) {
  ModalMedium["IMAGE"] = "image";
  ModalMedium["VIDEO"] = "video";
  ModalMedium["YOUTUBE"] = "youtube";
  ModalMedium["VIMEO"] = "vimeo";
  ModalMedium["ELEMENT"] = "element";
  ModalMedium["FETCH"] = "fetch";
  ModalMedium["IFRAME"] = "iframe";
})(ModalMedium || (ModalMedium = {}));

var modalSelector = '[data-modal]';
var mediaRegex = {
  anchor: /^\#(.+)/,
  image: /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i,
  video: /\.(mp4|mov|ogv|webm)((\?|#).*)?$/i,
  youtube: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
  vimeo: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/i
};
var buildStructure = function buildStructure(modal, _ref) {
  var header = _ref.header,
      titleElem = _ref.titleElem,
      descElem = _ref.descElem,
      content = _ref.content,
      prevElem = _ref.prevElem,
      nextElem = _ref.nextElem,
      navElem = _ref.navElem,
      loader = _ref.loader,
      bg = _ref.bg;
  modal.appendChild(header);
  modal.appendChild(titleElem);
  modal.appendChild(descElem);
  modal.appendChild(content);
  modal.appendChild(prevElem);
  modal.appendChild(nextElem);
  modal.appendChild(navElem);
  modal.appendChild(loader);
  modal.appendChild(bg);
};
var KeyCodes;

(function (KeyCodes) {
  KeyCodes[KeyCodes["ARR_LEFT"] = 37] = "ARR_LEFT";
  KeyCodes[KeyCodes["ARR_RIGHT"] = 39] = "ARR_RIGHT";
  KeyCodes[KeyCodes["ARR_UP"] = 38] = "ARR_UP";
  KeyCodes[KeyCodes["ARR_DOWN"] = 40] = "ARR_DOWN";
  KeyCodes[KeyCodes["ESC"] = 27] = "ESC";
})(KeyCodes || (KeyCodes = {}));

/***/ }),

/***/ "./src/js/components/menuMain.js":
/*!***************************************!*\
  !*** ./src/js/components/menuMain.js ***!
  \***************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
var init = function init() {
  var trigger = document.querySelectorAll('.m-main__tool');
  var targetMenu = document.querySelectorAll('body');
  var menuOpenStatus = false;

  var menuOpen = function menuOpen(target) {
    menuOpenStatus = !menuOpenStatus;

    if (menuOpenStatus) {
      target[0].classList.add('menu-open');
    } else {
      target[0].classList.remove('menu-open');
    }
  };

  trigger[0].addEventListener('click', function (event) {
    event.preventDefault();
    menuOpen(targetMenu);
  });
};

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modalPlugins_emmitModalAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalPlugins/emmitModalAction */ "./src/js/components/modalPlugins/emmitModalAction.js");
/* harmony import */ var _SKModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SKModal */ "./src/js/components/SKModal.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var options = {
  closeOnBgClick: true,
  removeOnClose: true,
  plugins: [_modalPlugins_emmitModalAction__WEBPACK_IMPORTED_MODULE_1__["emmitModalAction"]],
  onModalContentLoaded: function onModalContentLoaded() {
    App.trigger('contentload', {
      element: this
    });
  }
};
var init = function init(context) {
  App.modals = Object(_SKModal__WEBPACK_IMPORTED_MODULE_2__["initModal"])(_objectSpread({
    context: context || document
  }, options));
};

/***/ }),

/***/ "./src/js/components/modalPlugins/emmitModalAction.js":
/*!************************************************************!*\
  !*** ./src/js/components/modalPlugins/emmitModalAction.js ***!
  \************************************************************/
/*! exports provided: emmitModalAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emmitModalAction", function() { return emmitModalAction; });
var emmitModalAction = {
  init: function init(modal) {
    App.on('modalAction', function (_event, _ref) {
      var action = _ref.action,
          content = _ref.content;
      if (!action || !modal.isOpened) return;

      if (action === 'close') {
        modal.methods.close();
      } else if (action === 'updateContent' && content && typeof content === 'string') {
        modal.fragments.content.innerHTML = content;
        App.trigger('contentload', {
          element: modal.fragments.content
        });
      }
    });
  }
};

/***/ }),

/***/ "./src/js/components/video.js":
/*!************************************!*\
  !*** ./src/js/components/video.js ***!
  \************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
var init = function init(context) {
  var videos = Array.from(context.querySelectorAll('.b-video__video'));

  if (videos.length) {
    videos.forEach(function (video) {
      var elementId = video.id;
      var videoUrl = video.dataset.video;
      var videoPoster = video.dataset.poster;
      var videoTitle = video.dataset.title;
      var src = {
        hls: videoUrl
      };
      var settings = {
        licenseKey: 'Kl8ldWVvNzhrPWNzZD0yNzk/cm9tNWRhc2lzMzBkYjBBJV8q',
        //licenseKey: 'Kl8ldWVvNzhrPTMwYTJpc2t6MDdvdj1pMnkxP3JvbTVkYXNpczMwZGIwQSVfKg==',
        src: src,
        width: 640,
        height: 360,
        skin: 's1',
        quickRewind: 10,
        sharing: true,
        contentMetadata: {
          title: videoTitle,
          poster: [videoPoster]
        }
      }; // eslint-disable-next-line no-undef

      var rmp = new RadiantMP(elementId);
      rmp.init(settings);
    });
  }
};

/***/ }),

/***/ "./src/js/tools/loadVimeoAPI.ts":
/*!**************************************!*\
  !*** ./src/js/tools/loadVimeoAPI.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _superkoders_sk_tools_src_loadScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @superkoders/sk-tools/src/loadScript */ "./node_modules/@superkoders/sk-tools/src/loadScript.js");

var api = null;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (api) return api;
  api = new Promise(function (resolve, reject) {
    Object(_superkoders_sk_tools_src_loadScript__WEBPACK_IMPORTED_MODULE_0__["default"])('https://player.vimeo.com/api/player.js').then(function () {
      return resolve(window.Vimeo);
    }).catch(reject);
  });
  return api;
});

/***/ })

/******/ });
//# sourceMappingURL=app.js.map
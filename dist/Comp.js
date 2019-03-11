/*!
 * react-rtween
 * Copyright (C) 2019  Nathanael Braun
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/TweenRef.js":
/*!*************************!*\
  !*** ./src/TweenRef.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweenRef; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "undefined?e108");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shortid */ "undefined?beec");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! is */ "undefined?63a5");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _TweenerContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TweenerContext */ "./src/TweenerContext.js");







/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */





function setTarget(anims, target) {
  return anims.map(function (tween) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_5___default()({}, tween, {
      target: target
    });
  });
}

var TweenRef =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TweenRef, _React$Component);

  function TweenRef() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TweenRef);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TweenRef)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    _this.__tweenableId = shortid__WEBPACK_IMPORTED_MODULE_7___default.a.generate();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TweenRef, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      if (this._scrollableAnims) {
        Object.keys(this._scrollableAnims).forEach(function (axe) {
          return _this2._previousTweener.rmScrollableAnim(_this2._scrollableAnims[axe], axe);
        });
      }

      delete this._previousTweener;
      delete this._previousScrollable;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          _this$props$id = _this$props.id,
          id = _this$props$id === void 0 ? this.__tweenableId : _this$props$id,
          style = _this$props.style,
          initial = _this$props.initial,
          pos = _this$props.pos,
          noRef = _this$props.noRef,
          reset = _this$props.reset,
          scrollableAnims = _this$props.scrollableAnims,
          _this$props$onClick = _this$props.onClick,
          onClick = _this$props$onClick === void 0 ? children && children.props && children.props.onClick : _this$props$onClick,
          _this$props$onDoubleC = _this$props.onDoubleClick,
          onDoubleClick = _this$props$onDoubleC === void 0 ? children && children.props && children.props.onDoubleClick : _this$props$onDoubleC;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_TweenerContext__WEBPACK_IMPORTED_MODULE_9__["default"].Consumer, null, function (tweener) {
        if (react__WEBPACK_IMPORTED_MODULE_6___default.a.isValidElement(children)) {
          children = react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(children, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_5___default()({}, tweener.tweenRef(id, style || children.props.style, initial, pos, noRef, reset), {
            onDoubleClick: onDoubleClick && function (e) {
              return onDoubleClick(e, tweener);
            },
            onClick: onClick && function (e) {
              return onClick(e, tweener);
            }
          }));
        }

        if (_this3._previousTweener !== tweener || _this3._previousScrollable !== scrollableAnims) {
          if (_this3._scrollableAnims) {
            Object.keys(_this3._scrollableAnims).forEach(function (axe) {
              return _this3._previousTweener.rmScrollableAnim(_this3._scrollableAnims[axe], axe);
            });
          }

          if (scrollableAnims && is__WEBPACK_IMPORTED_MODULE_8___default.a.array(scrollableAnims)) _this3._scrollableAnims = {
            scrollY: tweener.addScrollableAnim(setTarget(scrollableAnims, id))
          };else _this3._scrollableAnims = scrollableAnims && Object.keys(scrollableAnims).reduce(function (h, axe) {
            return h[axe] = tweener.addScrollableAnim(setTarget(scrollableAnims[axe], id), axe), h;
          }, {});
          _this3._previousTweener = tweener;
          _this3._previousScrollable = scrollableAnims;
        }

        return children;
      });
    }
  }]);

  return TweenRef;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

TweenRef.propTypes = {//record  : PropTypes.object.isRequired,
  //onSelect: PropTypes.func
};


/***/ }),

/***/ "./src/TweenerContext.js":
/*!*******************************!*\
  !*** ./src/TweenerContext.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

var context = {
  tweenerById: {}
};
var TweenerContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(context);
/* harmony default export */ __webpack_exports__["default"] = (TweenerContext);

/***/ }),

/***/ "./src/asTweener.js":
/*!**************************!*\
  !*** ./src/asTweener.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return asTweener; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "undefined?4d9b");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "undefined?e108");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "undefined?e4e5");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "undefined?56eb");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! is */ "undefined?63a5");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var taskflows__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! taskflows */ "undefined?c1e3");
/* harmony import */ var taskflows__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(taskflows__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _TweenerContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TweenerContext */ "./src/TweenerContext.js");
/* harmony import */ var rtween__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rtween */ "undefined?929e");
/* harmony import */ var rtween__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(rtween__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-dom */ "undefined?5e9a");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_15__);










/*
 *
 * Copyright (C) 2019 Nathan Braun
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */







/**
 * @todo : clean & comments
 */

var isBrowserSide = new Function("try {return this===window;}catch(e){ return false;}")(),
    isArray = is__WEBPACK_IMPORTED_MODULE_10___default.a.array,
    initialTweenable = {// while no matrix..
  //x      : 0,
  //y      : 0,
  //z      : 0,
  //_x     : 0,
  //_y     : 0,
  //_z     : 0,
  //// opacity   : 1,
  //rotateY: 0,
  //rotateX: 0,
  //rotate : 0
},
    unitsRe = new RegExp("([+-]?(?:[0-9]*[.])?[0-9]+)\\s*(" + ['em', 'ex', '%', 'px', 'cm', 'mm', 'in', 'pt', 'pc', 'ch', 'rem', 'vh', 'vw', 'vmin', 'vmax'].join('|') + ")"),
    extractUnits = function extractUnits(map) {
  var r = {};
  Object.keys(map).map(function (k) {
    if (unitsRe.test((map[k] + '').trim())) {
      r[k] = (map[k] + '').trim().replace(unitsRe, '$2');
      map[k] = parseFloat((map[k] + '').trim().replace(unitsRe, '$1'));
    }
  });
  return r;
};

var SimpleObjectProto = {}.constructor;
/**
 * asTweener decorator
 * @param argz
 * @returns {*}
 */

function asTweener() {
  var _class, _temp;

  for (var _len = arguments.length, argz = new Array(_len), _key = 0; _key < _len; _key++) {
    argz[_key] = arguments[_key];
  }

  var BaseComponent = (!argz[0] || argz[0].prototype instanceof react__WEBPACK_IMPORTED_MODULE_9___default.a.Component || argz[0] === react__WEBPACK_IMPORTED_MODULE_9___default.a.Component) && argz.shift(),
      opts = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift() || {};

  if (!(BaseComponent && (BaseComponent.prototype instanceof react__WEBPACK_IMPORTED_MODULE_9___default.a.Component || BaseComponent === react__WEBPACK_IMPORTED_MODULE_9___default.a.Component))) {
    return function (BaseComponent) {
      return asTweener(BaseComponent, opts);
    };
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_BaseComponent) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(TweenableComp, _BaseComponent);

    function TweenableComp() {
      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TweenableComp);

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(TweenableComp).apply(this, arguments));
      var _static = _this.constructor;
      _this._ = {
        refs: {}
      };
      _this._.box = {
        x: 100,
        y: 100,
        z: 800
      };
      _this._.curMotionStateId = _static.InitialMotionState || "stand";
      _this._._rafLoop = _this._rafLoop.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
      return _this;
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TweenableComp, [{
      key: "resetTweenable",
      value: function resetTweenable() {
        var _this2 = this;

        for (var _len2 = arguments.length, targets = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          targets[_key2] = arguments[_key2];
        }

        targets.forEach(function (t) {
          // delete this._.tweenRefs[t];
          // delete this._.tweenRefCSS[t];
          _this2._.tweenRefMaps[t] = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, _this2._.tweenRefOrigin[t]);
        });
      }
      /**
       * Register tweenable element
       * @param id
       * @param iStyle
       * @param iMap
       * @param pos
       * @param noref
       * @param mapReset
       * @returns {*}
       */

    }, {
      key: "tweenRef",
      value: function tweenRef(id, iStyle, iMap, pos, noref, mapReset) {
        var _this3 = this;

        // ref initial style
        this.makeTweenable();
        var _static = this.constructor,
            _ = this._,
            cState = _static.motionStates && _static.motionStates[this._.curMotionStateId];
        if (!this._.tweenRefs[id]) this._.tweenRefTargets.push(id);

        if (cState && cState.refs && cState.refs[id]) {
          iStyle = iStyle || _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, cState.refs[id][0]);
          iMap = iMap || _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, cState.refs[id][1]);
        } else {
          iStyle = iStyle || {};
          iMap = iMap || {};
        }

        this._.tweenRefs[id] = true;

        if (isArray(iMap)) {
          this._.tweenRefUnits[id] = iMap[1];
          iMap = iMap[0];
        }

        if (iMap.getPosAt) {
          // typeof rtween
          // debugger;
          // if (/btn_/.test(id)) debugger;
          iMap = iMap.getPosAt(pos, !mapReset && this._.tweenRefMaps[id] || Object.assign({}, initialTweenable, iMap.scope || {}));
        } else {
          mapReset = noref;
          noref = pos;
          this._.tweenRefUnits[id] = extractUnits(iMap);
        }

        this._.tweenRefOrigin[id] = iMap; //this._.tweenRefCSS[id]    = this._.tweenRefCSS[id] || {};

        if (!mapReset && this._.tweenRefCSS[id]) {
          this._.tweenRefCSS[id] = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, iStyle);
        } else this._.tweenRefCSS[id] = iStyle && _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, iStyle) || {};

        iStyle = this._.tweenRefCSS[id];
        iMap = this._.tweenRefMaps[id] = !mapReset && this._.tweenRefMaps[id] || Object.assign({}, initialTweenable, iMap || {});
        _utils__WEBPACK_IMPORTED_MODULE_12__["default"].mapInBoxCSS(iMap, iStyle, this._.box, this._.tweenRefUnits[id]); //this._.refs[id] = this._.refs[id] || React.createRef();

        if (noref) return {
          style: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, this._.tweenRefCSS[id])
        };else return {
          style: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, this._.tweenRefCSS[id]),
          ref: function ref(node) {
            return _this3._.refs[id] = node;
          } // __tweenMap : this._.tweenRefMaps[id],
          // __tweenCSS : this._.tweenRefCSS[id]

        };
      }
      /**
       * Push anims
       * @param anim
       * @param then
       * @param skipInit
       * @returns {rtween}
       */

    }, {
      key: "pushAnim",
      value: function pushAnim(anim, then, skipInit) {
        var _this4 = this;

        var sl, initial;

        if (isArray(anim)) {
          sl = anim;
        } else {
          sl = anim.anims;
          initial = anim.initial;
        }

        if (!(sl instanceof rtween__WEBPACK_IMPORTED_MODULE_14___default.a)) sl = new rtween__WEBPACK_IMPORTED_MODULE_14___default.a(sl, this._.tweenRefMaps); // console.warn("Should start anim ", sl);

        this.makeTweenable();
        !skipInit && initial && Object.keys(initial).map(function (id) {
          return _this4.applyTweenState(id, initial[id], anim.reset);
        });
        sl.run(this._.tweenRefMaps, function () {
          var i = _this4._.runningAnims.indexOf(sl);

          if (i != -1) _this4._.runningAnims.splice(i, 1);
          then && then(sl); // if (anim.resetAfter)
          //     setTimeout(()=>sl.go(0,me._tweenRefMaps),133);
        }); //launch

        this._.runningAnims.push(sl);

        if (!this._.live) {
          this._.live = true; //console.log("RAF On");

          requestAnimationFrame(this._._rafLoop = this._._rafLoop || this._rafLoop.bind(this));
        }

        return sl;
      } // ------------------------------------------------------------
      // ------------------ Scrollable anims ------------------------
      // ------------------------------------------------------------

    }, {
      key: "addScrollableAnim",
      value: function addScrollableAnim(anim) {
        var axe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "scrollY";
        var size = arguments.length > 2 ? arguments[2] : undefined;
        var sl,
            _ = this._;

        if (isArray(anim)) {
          sl = anim;
        } else {
          sl = anim.anims;
          size = anim.length;
        }

        if (!(sl instanceof rtween__WEBPACK_IMPORTED_MODULE_14___default.a)) sl = new rtween__WEBPACK_IMPORTED_MODULE_14___default.a(sl, _.tweenRefMaps);
        this.makeTweenable();
        this.makeScrollable(); // init scroll

        _.axes[axe] = _.axes[axe] || {
          scrollableAnims: [],
          scrollPos: opts.initialScrollPos && opts.initialScrollPos[axe] || 0,
          scrollableArea: 0
        };

        _.axes[axe].scrollableAnims.push(sl);

        _.axes[axe].scrollPos = _.axes[axe].scrollPos || 0;
        _.axes[axe].scrollableArea = _.axes[axe].scrollableArea || 0;
        _.axes[axe].scrollableArea = Math.max(_.axes[axe].scrollableArea, sl.duration);
        _.axes[axe].scrollPos && sl.goTo(_.axes[axe].scrollPos, this._.tweenRefMaps);
      }
    }, {
      key: "rmScrollableAnim",
      value: function rmScrollableAnim(sl) {
        var _this5 = this;

        var _ = this._;

        if (_.axes) {
          Object.keys(_.axes).forEach(function (axe) {
            var i = _.axes[axe].scrollableAnims.indexOf(sl);

            if (i != -1) {
              _.axes[axe].scrollableAnims.splice(i);

              _.axes[axe].scrollableArea = Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_.axes[axe].scrollableAnims.map(function (tl) {
                return tl.duration;
              })).concat([0]));
              sl.goTo(0, _this5._.tweenRefMaps);
            }
          });
        }
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(newPos) {
        var _this6 = this;

        var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var axe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "scrollY";

        if (this._.axes) {
          var oldPos = newPos,
              setPos = function setPos(pos) {
            return _this6._.axes[axe].scrollPos = pos, _this6.componentDidScroll && _this6.componentDidScroll(~~pos), requestAnimationFrame(_this6._._rafLoop);
          };

          newPos = Math.max(0, newPos);
          newPos = Math.min(newPos, this._.axes[axe].scrollableArea);

          if (!ms) {
            this._.axes[axe].scrollableAnims.forEach(function (sl) {
              return sl.goTo(newPos, _this6._.tweenRefMaps);
            });

            setPos(newPos);
          } else this._.axes[axe].scrollableAnims.forEach(function (sl) {
            return sl.runTo(newPos, ms, undefined, setPos);
          });

          if (!this._.live) {
            this._.live = true;
            requestAnimationFrame(this._._rafLoop);
          }

          return !(oldPos - newPos);
        }
      } // ------------------------------------------------------------
      // ------------------ Motion/FSM anims ------------------------
      // ------------------------------------------------------------

    }, {
      key: "goToMotionStateId",
      value: function goToMotionStateId(targetId) {
        var _this7 = this;

        var _static = this.constructor,
            tState = _static.motionStates[targetId],
            cState = this._.curMotionStateId;
        if (!this._.rendered) return this._.delayedMotionTarget = targetId;
        if (this.running) this.running = arguments;

        if (!this.running && targetId != this._.curMotionStateId) {
          if (!this._.tweenRefCSS) this.makeTweenable();
          this.running = true;
          var flow = new taskflows__WEBPACK_IMPORTED_MODULE_11___default.a([_static.motionStates[this._.curMotionStateId] && function (ctx, flow) {
            return _static.motionStates[cState].leaving(ctx, flow, cState);
          }, function () {
            _this7._.curMotionStateId = targetId;
            if (_this7.running !== true) setTimeout(function () {
              return _this7.goToMotionStateId.apply(_this7, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this7.running));
            });
            _this7.running = false;
          }, tState && function (ctx, flow) {
            return tState.entering(ctx, flow, cState);
          }, function () {
            tState.refs && Object.keys(tState.refs).map(function (k) {
              _this7.updateRefStyle(k, tState.refs[k][0]);

              _this7.applyTweenState(k, tState.refs[k][1]);
            });
          }], this);
          flow.run();
        }
      }
    }, {
      key: "applyTweenState",
      value: function applyTweenState(id, map, reset) {
        var me = this;
        Object.keys(map).map(function (p) {
          return me._tweenRefMaps[id][p] = (!reset && me._tweenRefMaps[id][p] || 0) + map[p];
        });
      }
    }, {
      key: "updateRefStyle",
      value: function updateRefStyle(target, style, postPone) {
        var _this8 = this;

        if (isArray(target) && isArray(style)) return target.map(function (m, i) {
          return _this8.updateRefStyle(m, style[i], postPone);
        });
        if (isArray(target)) return target.map(function (m) {
          return _this8.updateRefStyle(m, style, postPone);
        });
        if (!this._.tweenRefCSS) this.makeTweenable();

        if (!postPone && this.refs[target]) {
          var node = this.refs[target] instanceof Element ? this.refs[target] : react_dom__WEBPACK_IMPORTED_MODULE_15___default.a.findDOMNode(this.refs[target]);
          node && Object.assign(node.style, style);
        }

        this._.tweenRefCSS[target] = this._.tweenRefCSS[target] || {};
        Object.assign(this._.tweenRefCSS[target], style);
      } //
      //shouldApplyScroll( to, from ) {
      //	return this._.scrollHook.reduce(( r, hook ) => (!r
      //	                                                ? false
      //	                                                : hook(to, from)), true)
      //		|| super.shouldApplyScroll && super.shouldApplyScroll(to, from);
      //}

    }, {
      key: "makeScrollable",
      value: function makeScrollable() {
        if (!this._.scrollEnabled) {
          this._.scrollEnabled = true;
          this._.scrollHook = [];
          this._.axes = {
            scrollX: {
              scrollableAnims: [],
              scrollPos: opts.initialScrollPos && opts.initialScrollPos["scrollX"] || 0,
              scrollableArea: 0
            },
            scrollY: {
              scrollableAnims: [],
              scrollPos: opts.initialScrollPos && opts.initialScrollPos["scrollY"] || 0,
              scrollableArea: 0
            }
          };

          this._registerScrollListeners(); //ReactDom.findDOMNode(this).addEventListener("onscroll", this._.onScroll)

        }
      }
    }, {
      key: "_registerScrollListeners",
      value: function _registerScrollListeners() {
        var _this9 = this;

        if (this._.rendered) {
          isBrowserSide && _utils__WEBPACK_IMPORTED_MODULE_12__["default"].addWheelEvent(react_dom__WEBPACK_IMPORTED_MODULE_15___default.a.findDOMNode(this), this._.onScroll = function (e) {
            //@todo
            var prevent,
                axe = "scrollY",
                oldPos = _this9._.axes[axe].scrollPos,
                newPos = oldPos + e.deltaY;

            if (oldPos !== newPos) {
              if (!_this9.shouldApplyScroll || _this9.shouldApplyScroll(newPos, oldPos, axe)) {
                if (_this9.scrollTo(newPos, undefined, axe)) prevent = true;
              }
            }

            axe = "scrollX";
            oldPos = _this9._.axes[axe].scrollPos;
            newPos = oldPos + e.deltaX;

            if (oldPos !== newPos) {
              if (!_this9.shouldApplyScroll || _this9.shouldApplyScroll(newPos, oldPos, axe)) {
                if (_this9.scrollTo(newPos, undefined, axe)) prevent = true;
              }
            }

            if (prevent) {
              e.preventDefault();
              e.originalEvent.stopPropagation();
            }
          });
          isBrowserSide && _utils__WEBPACK_IMPORTED_MODULE_12__["default"].addEvent(react_dom__WEBPACK_IMPORTED_MODULE_15___default.a.findDOMNode(this), 'drag', function (e, touch, descr) {
            //@todo
            var prevent,
                axe = "scrollY",
                oldPos = _this9._.axes[axe].scrollPos,
                newPos = oldPos + (descr._startPos.y - descr._lastPos.y) / 10;

            if (!_this9.shouldApplyScroll || _this9.shouldApplyScroll(newPos, oldPos, axe)) {
              descr._startPos.y = descr._lastPos.y;
              prevent = !!_this9.scrollTo(newPos, undefined, axe);
            }

            axe = "scrollX";
            oldPos = _this9._.axes[axe].scrollPos;
            newPos = oldPos + (descr._startPos.x - descr._lastPos.x) / 10;

            if (!_this9.shouldApplyScroll || _this9.shouldApplyScroll(newPos, oldPos, axe)) {
              descr._startPos.x = descr._lastPos.x;
              prevent = !!_this9.scrollTo(newPos, undefined, axe) && prevent;
            } //e.preventDefault();
            //debugger


            if (prevent) {
              e.preventDefault();
              e.stopPropagation(); //e.defaultPrevented=true;
              //console.log(this.constructor.displayName, prevent, e.defaultPrevented)
            }

            return !prevent;
          });
        } else {
          this._.doRegister = true;
        }
      }
    }, {
      key: "makeTweenable",
      value: function makeTweenable() {
        var _this10 = this;

        if (!this._.tweenEnabled) {
          this._.rtweensByProp = {};
          this._.rtweensByStateProp = {};
          this._.tweenRefCSS = {};
          this._.tweenRefs = {};
          this._.tweenRefMaps = {};
          this._.tweenRefUnits = {};
          this._.tweenEnabled = true;
          this._.tweenRefOrigin = {};
          this._.tweenRefTargets = this._.tweenRefTargets || [];
          this._.runningAnims = this._.runningAnims || [];
          isBrowserSide && window.addEventListener("resize", this._.onResize = function () {
            //@todo
            _this10._updateBox();

            _this10._updateTweenRefs();
          });
        }
      }
    }, {
      key: "_updateBox",
      value: function _updateBox() {
        var node = react_dom__WEBPACK_IMPORTED_MODULE_15___default.a.findDOMNode(this);

        if (node) {
          this._.box.inited = true;
          this._.box.x = node.offsetWidth;
          this._.box.y = node.offsetHeight;
        }
      }
    }, {
      key: "getTweenableRef",
      value: function getTweenableRef(id) {
        return this._.refs[id];
      }
    }, {
      key: "_rafLoop",
      value: function _rafLoop() {
        this._updateTweenRefs();

        if (this._.runningAnims.length) requestAnimationFrame(this._._rafLoop);else {
          this._.live = false;
        }
      }
    }, {
      key: "_updateTweenRefs",
      value: function _updateTweenRefs() {
        //if ( this._.tweenEnabled ) {
        for (var i = 0, target, node; i < this._.tweenRefTargets.length; i++) {
          target = this._.tweenRefTargets[i];
          _utils__WEBPACK_IMPORTED_MODULE_12__["default"].mapInBoxCSS(this._.tweenRefMaps[target], this._.tweenRefCSS[target], this._.box, this._.tweenRefUnits[target]);
          node = this._.tweenEnabled && target == "__root" ? react_dom__WEBPACK_IMPORTED_MODULE_15___default.a.findDOMNode(this) : this.getTweenableRef(target);
          node && Object.assign(node.style, this._.tweenRefCSS[target]); //console.log(this._.tweenRefCSS[target].transform)
        } //}

      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this._.tweenEnabled) {
          this._.tweenEnabled = false;
          window.removeEventListener("resize", this._.onResize);
        }

        if (this._.scrollEnabled) {
          this._.scrollEnabled = false;
          this._.axes = undefined;
          _utils__WEBPACK_IMPORTED_MODULE_12__["default"].rmWheelEvent(react_dom__WEBPACK_IMPORTED_MODULE_15___default.a.findDOMNode(this), this._.onScroll);
        }

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(TweenableComp.prototype), "componentWillUnmount", this) && _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(TweenableComp.prototype), "componentWillUnmount", this).call(this);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this11 = this;

        var _static = this.constructor;
        this._.rendered = true;

        if (this._.tweenEnabled) {
          // debugger;
          this._updateBox();

          this._updateTweenRefs();
        }

        if (this._.delayedMotionTarget) {
          this.goToMotionStateId(this._.delayedMotionTarget);
          delete this._.delayedMotionTarget;
        }

        if (_static.scrollableAnim) {
          if (is__WEBPACK_IMPORTED_MODULE_10___default.a.array(_static.scrollableAnim)) this.addScrollableAnim(_static.scrollableAnim);else Object.keys(_static.scrollableAnim).forEach(function (axe) {
            return _this11.addScrollableAnim(_static.scrollableAnim[axe], axe);
          });
        }

        if (this._.doRegister) {
          this._registerScrollListeners();

          this._.doRegister = false;
        }

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(TweenableComp.prototype), "componentDidMount", this) && _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(TweenableComp.prototype), "componentDidMount", this).call(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        var _this12 = this;

        if (this._.tweenEnabled) {
          this._updateBox();

          this._updateTweenRefs();

          this._.rtweensByProp && Object.keys(prevProps).forEach(function (k) {
            return _this12._.rtweensByProp[k] && _this12.props[k] !== prevProps[k] && _this12._.rtweensByProp[k][_this12.props[k]] && _this12.pushAnim(_this12._.rtweensByProp[k][_this12.props[k]]
            /*get current pos*/
            );
          }, this);
          this._.rtweensByStateProp && prevState && Object.keys(prevState).forEach(function (k) {
            return _this12._.rtweensByStateProp[k] && _this12.state[k] !== prevState[k] && _this12._.rtweensByStateProp[k][_this12.state[k]] && _this12.pushAnim(_this12._.rtweensByStateProp[k][_this12.state[k]]
            /*get current pos*/
            );
          }, this);
        }

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(TweenableComp.prototype), "componentDidUpdate", this) && _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(TweenableComp.prototype), "componentDidUpdate", this).call(this); // return;
      }
    }, {
      key: "registerPropChangeAnim",
      value: function registerPropChangeAnim(propId, propValue, anims) {
        this._.rtweensByProp = this._.rtweensByProp || {};
        this._.rtween = this._.rtween || new rtween__WEBPACK_IMPORTED_MODULE_14___default.a();
        this._.rtweensByProp[propId] = this._.rtweensByProp[propId] || {};
        this._.rtweensByProp[propId][propValue] = this._.rtweensByProp[propId][propValue] || new rtween__WEBPACK_IMPORTED_MODULE_14___default.a();

        this._.rtweensByProp[propId][propValue].mount(anims);
      }
    }, {
      key: "registerStateChangeAnim",
      value: function registerStateChangeAnim(propId, propValue, anims) {
        this._.rtweensByStateProp = this._.rtweensByStateProp || {};
        this._.rtween = this._.rtween || new rtween__WEBPACK_IMPORTED_MODULE_14___default.a();
        this._.rtweensByStateProp[propId] = this._.rtweensByStateProp[propId] || {};
        this._.rtweensByStateProp[propId][propValue] = this._.rtweensByStateProp[propId][propValue] || new rtween__WEBPACK_IMPORTED_MODULE_14___default.a();

        this._.rtweensByStateProp[propId][propValue].mount(anims);
      }
    }, {
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_TweenerContext__WEBPACK_IMPORTED_MODULE_13__["default"].Provider, {
          value: this
        }, _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(TweenableComp.prototype), "render", this).call(this));
      }
    }]);

    return TweenableComp;
  }(BaseComponent), _class.displayName = (BaseComponent.displayName || BaseComponent.name) + " (tweener)", _temp;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: asTweener, TweenRef, Component, TweenerContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _asTweener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asTweener */ "./src/asTweener.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asTweener", function() { return _asTweener__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _TweenRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TweenRef */ "./src/TweenRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenRef", function() { return _TweenRef__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _TweenerContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TweenerContext */ "./src/TweenerContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenerContext", function() { return _TweenerContext__WEBPACK_IMPORTED_MODULE_8__["default"]; });







/*
 *
 * Copyright (C) 2019 Nathan Braun
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */




var Component = Object(_asTweener__WEBPACK_IMPORTED_MODULE_6__["default"])({})(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var TweenableComponent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TweenableComponent, _Component);

  function TweenableComponent() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TweenableComponent);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TweenableComponent).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TweenableComponent, [{
    key: "render",
    value: function render() {
      return 'Should have some render fn here in ' + this.constructor.displayName;
    }
  }]);

  return TweenableComponent;
}(Component);


/* harmony default export */ __webpack_exports__["default"] = (TweenableComponent);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 *
 * Copyright (C) 2019 Nathan Braun
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var is = __webpack_require__(/*! is */ "undefined?63a5"),
    floatCut = function floatCut(v, l) {
  var p = Math.pow(10, l);
  return Math.round(v * p) / p;
},
    min = Math.min,
    max = Math.max,
    isBrowser = typeof window !== 'undefined',
    Dom = isBrowser ? {
  prefix: /webkit/i.test(navigator.appVersion) ? 'webkit' : /firefox/i.test(navigator.userAgent) ? 'Moz' : /trident/i.test(navigator.userAgent) ? 'ms' : 'opera' in window ? 'O' : '',
  dashedPrefix: /webkit/i.test(navigator.appVersion) ? '-webkit-' : /firefox/i.test(navigator.userAgent) ? '-moz-' : /trident/i.test(navigator.userAgent) ? '-ms-' : 'opera' in window ? '-o-' : ''
} : {
  prefix: '',
  dashedPrefix: ''
},
    customProps = {
  _x: true,
  x: true,
  _y: true,
  y: true,
  _z: true,
  z: true,
  transform: true,
  perspective: true,
  matrix: true,
  // @todo
  rotate: true,
  rotateX: true,
  rotateY: true,
  _width: true,
  _height: true
},
    __ = {
  onPageHided: [],
  onPageShown: [],
  dragging: [],
  dragEnabled: [],
  dragEnabledDesc: [],
  fingers: {},
  nbFingers: 0,
  dragstartAnywhere: function dragstartAnywhere(e) {
    var o,
        me = __,
        i = me.dragEnabled.indexOf(this),
        finger,
        desc,
        fingers = [];

    if (i === -1) {
      return;
    } //e.preventDefault();
    //e.stopPropagation();


    if (!me.nbFingers) {
      Dom.addEvent(document, {
        'touchmove': me.dragAnywhere,
        //'mousemove': me.dragAnywhere,
        'touchend': me.dropAnywhere //'mouseup'  : me.dropAnywhere

      });
    }

    if (e.changedTouches && e.changedTouches.length) {
      fingers = e.changedTouches;
    } else fingers.push(e);

    for (var t = 0, ln = fingers.length; t < ln; t++) {
      finger = fingers[t];
      desc = me.dragEnabledDesc[i];
      if (desc.nbFingers) continue;
      me.nbFingers++;
      me.fingers[finger.identifier] = me.fingers[finger.identifier] || [];
      me.fingers[finger.identifier].push(desc);
      desc.nbFingers++;
      desc._startPos.x = Dom.prefix == 'MS' ? finger.x : finger.pageX;
      desc._startPos.y = Dom.prefix == 'MS' ? finger.y : finger.pageY;
      if (!desc) continue;
      desc._lastPos.x = Dom.prefix == 'MS' ? finger.x : finger.pageX;
      desc._lastPos.y = Dom.prefix == 'MS' ? finger.y : finger.pageY;

      for (o = 0; o < desc.dragstart.length; o++) {
        desc.dragstart[o][0].call(desc.dragstart[o][1] || this, e, finger, desc);
      }
    }
  },
  dragAnywhere: function dragAnywhere(e) {
    var _this = this;

    var o,
        me = __,
        finger,
        fingers = [],
        stopped,
        desc = __.dragging[0];

    if (e.changedTouches && e.changedTouches.length) {
      fingers = e.changedTouches;
    } else fingers.push(e);

    for (var i = 0, ln = fingers.length; i < ln; i++) {
      finger = fingers[i];
      desc = me.fingers[finger.identifier];
      me.fingers[finger.identifier] && me.fingers[finger.identifier].forEach(function (desc) {
        if (stopped) {
          desc._lastPos.x = desc._startPos.x = Dom.prefix == 'MS' ? finger.x : finger.pageX;
          desc._lastPos.y = desc._startPos.y = Dom.prefix == 'MS' ? finger.y : finger.pageY;
          return;
        }

        desc._lastPos.x = Dom.prefix == 'MS' ? finger.x : finger.pageX;
        desc._lastPos.y = Dom.prefix == 'MS' ? finger.y : finger.pageY;

        for (o = 0; o < desc.drag.length; o++) {
          stopped = desc.drag[o][0].call(desc.drag[o][1] || _this, e, finger, desc) === false;
        }
      });
    }
  },
  dropAnywhere: function dropAnywhere(e) {
    var _this2 = this;

    var o,
        me = __,
        finger,
        fingers = [],
        desc;

    if (e.changedTouches && e.changedTouches.length) {
      fingers = e.changedTouches;
    } else fingers.push(e);

    for (var i = 0, ln = fingers.length; i < ln; i++) {
      finger = fingers[i];
      me.fingers[finger.identifier] && me.fingers[finger.identifier].forEach(function (desc) {
        me.nbFingers--;
        desc.nbFingers--;
        desc._lastPos.x = Dom.prefix == 'MS' ? finger.x : finger.pageX;
        desc._lastPos.y = Dom.prefix == 'MS' ? finger.y : finger.pageY;

        for (o = 0; o < desc.dropped.length; o++) {
          desc.dropped[o][0].call(desc.dropped[o][1] || _this2, e, finger, desc);
        }
      });
    }

    me.fingers[finger.identifier] = null;

    if (!me.nbFingers) {
      Dom.removeEvent(document, {
        'touchmove': me.dragAnywhere,
        'mousemove': me.dragAnywhere,
        'touchend': me.dropAnywhere,
        'mouseup': me.dropAnywhere
      });
    }
  },
  getDraggable: function getDraggable(node) {
    var i = this.dragEnabled.indexOf(node),
        desc;

    if (i === -1) {
      i = this.dragEnabled.length;
      this.dragEnabled.push(node);
      this.dragEnabledDesc.push(desc = {
        nbFingers: 0,
        locks: 0,
        _startPos: {
          x: 0,
          y: 0
        },
        _lastPos: {
          x: 0,
          y: 0
        },
        dragstart: [],
        drag: [],
        dragEnd: [],
        dropped: []
      }); //debugger;

      Dom.addEvent(node, {
        //'mousedown' : this.dragstartAnywhere,
        'touchstart': this.dragstartAnywhere
      }, null, null, true);
    } else desc = this.dragEnabledDesc[i];

    return desc;
  },
  freeDraggable: function freeDraggable(node) {
    var i = this.dragEnabled.indexOf(node),
        desc;

    if (i !== -1) {
      this.dragEnabled.splice(i, 1);
      this.dragEnabledDesc.splice(i, 1);
      Dom.removeEvent(node, {
        'mousedown': this.dragstartAnywhere,
        'touchstart': this.dragstartAnywhere
      });
    }
  },
  addOverflowEvent: function addFlowListener(element, fn) {
    var type = 'over',
        flow = type == 'over';
    element.addEventListener('OverflowEvent' in window ? 'overflowchanged' : type + 'flow', function (e) {
      if (e.type == type + 'flow' || e.orient == 0 && e.horizontalOverflow == flow || e.orient == 1 && e.verticalOverflow == flow || e.orient == 2 && e.horizontalOverflow == flow && e.verticalOverflow == flow) {
        return fn.call(this, e);
      }
    }, false);
  },
  addEvent: function addEvent(node, type, fn, bubble) {
    if (node.addEventListener) {
      node.addEventListener(type, fn, bubble);
    } else if (node.attachEvent) {
      node.attachEvent('on' + type, fn.related = function (e) {
        return fn.call(node, e);
      });
    }
  },
  removeEvent: function removeEvent(node, type, fn, bubble) {
    if (node.removeEventListener) {
      node.removeEventListener(type, fn, bubble);
    } else if (node.attachEvent) {
      node.detachEvent('on' + type, fn.related);
    }
  },
  rmFnScopePair: function rmFnScopePair(arr, fn, scope) {
    for (var i = 0, ln = arr.length; i < ln; i++) {
      if (arr[i][0] == fn && arr[i][1] == scope) return arr.splice(i, 1);
    }

    console.warn("Rm event : Listener not found !!");
  },
  _createElement: function _createElement(tag, opt, refs, parent) {
    var a,
        o,
        i,
        ln,
        node = parent || document.createElement(tag); //if (parent) opt = {content:opt};

    if (opt) for (o in opt) {
      if (opt.hasOwnProperty(o) && opt[o] !== undefined && !_createElementAttr.hasOwnProperty(o)) {
        a = document.createAttribute(o);
        a.value = opt[o];
        node.setAttributeNode(a);
      }
    }
    refs && opt.$id && (refs[opt.$id] = node);
    opt.style && Dom.applyCss(node, opt.style);
    opt.cls && Dom.addCls(node, opt.cls);

    if (opt.events) {
      for (o in opt.events) {
        if (opt.events.hasOwnProperty(o) && o !== "$scope") Dom.addEvent(node, o, opt.events[o], opt.events.$scope);
      }
    }

    if (opt.content) {
      if (typeof opt.content === 'string' || typeof opt.content[o] == 'number') {
        node.innerHTML = opt.content;
      } else if (opt.content instanceof Array) {
        for (i = 0, ln = opt.content.length; i < ln; i++) {
          node.appendChild(typeof opt.content[i] == 'string' || typeof opt.content[i] == 'number' || !opt.content[i] ? document.createTextNode(opt.content[i] || '') : isElement(opt.content[i]) ? opt.content[i] : __createElement(opt.content[i].tagName || 'div', opt.content[i], refs));
        }
      } else {
        node.appendChild(opt.content instanceof HTMLElement ? opt.content : __createElement(opt.content.tagName || 'div', opt.content, refs));
      }
    }

    return node;
  }
},
    Dom = {
  addEvent: function addEvent(node, type, fn, scope, bubble) {
    var desc;

    if (is.object(type)) {
      for (var o in type) {
        if (type.hasOwnProperty(o)) this.addEvent(node, o, type[o], fn);
      }

      return;
    } else if (type == 'dragstart') {
      __.getDraggable(node).dragstart.push([fn, scope]);
    } else if (type == 'drag') {
      __.getDraggable(node).drag.push([fn, scope]);
    } else if (type == 'dropped') {
      __.getDraggable(node).dropped.push([fn, scope]);
    } else {
      if (node.addEventListener) {
        node.addEventListener(type, fn, bubble);
      } else if (node.attachEvent) {
        node.attachEvent('on' + type, fn.related = function (e) {
          return fn.call(node, e);
        });
      }
    }
  },
  removeEvent: function removeEvent(node, type, fn, scope, bubble) {
    var i, desc;

    if (is.object(type)) {
      for (var o in type) {
        if (type.hasOwnProperty(o)) this.removeEvent(node, o, type[o], scope);
      }
    } else if (/^(drag|drop)/.test(type)) {
      desc = __.getDraggable(node);

      __.rmFnScopePair(desc[type], fn, scope);

      if (!desc.dragstart.length && !desc.drag.length && !desc.dragEnd.length && !desc.dropped.length) __.freeDraggable(node);
    } else {
      if (node.removeEventListener) {
        node.removeEventListener(type, fn, bubble);
      } else if (node.attachEvent) {
        node.detachEvent('on' + type, fn.related);
      }
    }
  },
  offset: function offset(elem) {
    // @todo
    var dims = {
      top: 0,
      left: 0,
      width: elem.offsetWidth,
      height: elem.offsetHeight
    };

    while (elem) {
      dims.top = dims.top + parseInt(elem.offsetTop);
      dims.left = dims.left + parseInt(elem.offsetLeft);
      elem = elem.offsetParent;
    }

    return dims;
  },
  addWheelEvent: isBrowser && function (window, document) {
    var prefix = "",
        _addEventListener,
        _rmEventListener,
        onwheel,
        support; // detect event model


    if (window.addEventListener) {
      _addEventListener = "addEventListener";
      _rmEventListener = "removeEventListener";
    } else {
      _addEventListener = "attachEvent";
      _rmEventListener = "detachEvent";
      prefix = "on";
    } // detect available wheel event


    support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
    document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
    "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

    var addWheelListener = function addWheelListener(elem, callback, scope, useCapture) {
      _addWheelListener(elem, support, callback, scope, useCapture); // handle MozMousePixelScroll in older Firefox


      if (support == "DOMMouseScroll") {
        _addWheelListener(elem, "MozMousePixelScroll", callback, scope, useCapture);
      }
    }; // Reasonable defaults


    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;

    function normalizeWheel(
    /*object*/
    event)
    /*object*/
    {
      var sX = 0,
          sY = 0,
          // spinX, spinY
      pX = 0,
          pY = 0; // pixelX, pixelY
      // Legacy

      if ('detail' in event) {
        sY = event.detail;
      }

      if ('wheelDelta' in event) {
        sY = -event.wheelDelta / 120;
      }

      if ('wheelDeltaY' in event) {
        sY = -event.wheelDeltaY / 120;
      }

      if ('wheelDeltaX' in event) {
        sX = -event.wheelDeltaX / 120;
      } // side scrolling on FF with DOMMouseScroll


      if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ('deltaY' in event) {
        pY = event.deltaY;
      }

      if ('deltaX' in event) {
        pX = event.deltaX;
      }

      if ((pX || pY) && event.deltaMode) {
        if (event.deltaMode == 1) {
          // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      } // Fall-back if spin cannot be determined


      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }

      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
      };
    }

    function _addWheelListener(elem, eventName, callback, scope, useCapture) {
      elem[_addEventListener](prefix + eventName, callback._wheelList = function (originalEvent) {
        !originalEvent && (originalEvent = window.event); // create a normalized event object

        var event = {
          // keep a ref to the original event object
          originalEvent: originalEvent,
          target: originalEvent.target || originalEvent.srcElement,
          type: "wheel",
          deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
          deltaX: 0,
          delatZ: 0,
          preventDefault: function preventDefault() {
            originalEvent.preventDefault ? originalEvent.preventDefault() : originalEvent.returnValue = false;
          },
          normalized: normalizeWheel(originalEvent)
        }; // calculate deltaY (and deltaX) according to the event

        if (support == "mousewheel") {
          event.deltaY = -1 / 40 * originalEvent.wheelDelta; // Webkit also support wheelDeltaX
          //                            originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 *
          // originalEvent.wheelDeltaX );
        } else if (support == "wheel" && Dom.prefix == "Moz") {
          event.deltaY = originalEvent.deltaY / 3;
        } else if (support == "wheel") {
          event.deltaY = originalEvent.deltaY / 100;
        } else {
          event.deltaY = originalEvent.deltaY;
        } //                        if (typeof originalEvent.wheelDeltaY !== 'number')
        //                            event.wheelDeltaY = originalEvent.deltaY/100;
        //                        event.wheelDelta = deltaY*120;
        // it's time to fire the callback


        return callback.call(scope || this, event);
      }, useCapture || false);
    }

    return addWheelListener;
  }(window, document),
  rmWheelEvent: isBrowser && function (window, document) {
    var prefix = "",
        _rmEventListener,
        onwheel,
        support; // detect event model


    if (addEventListener) {
      _rmEventListener = "removeEventListener";
    } else {
      _rmEventListener = "detachEvent";
      prefix = "on";
    } // detect available wheel event


    support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
    document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
    "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

    var rmWheelListener = function rmWheelListener(elem, callback, scope, useCapture) {
      _EventListener(elem, support, callback, scope, useCapture); // handle MozMousePixelScroll in older Firefox


      if (support == "DOMMouseScroll") {
        _EventListener(elem, "MozMousePixelScroll", callback, scope, useCapture);
      }
    };

    function _EventListener(elem, eventName, callback, scope, useCapture) {
      elem[_rmEventListener](prefix + eventName, callback._wheelList);
    }

    return rmWheelListener;
  }(window, document),
  mapInBoxCSS: function mapInBoxCSS(pos, css, box, units, offset) {
    var t = '';
    if (is.number(pos._z) || is.number(pos._x) || is.number(pos._y) || is.number(pos.z) || is.number(pos.x) || is.number(pos.y)) t = 'translate3d(' + floatCut((pos._x || 0) * (box.x || 0) + (pos.x || 0) + (offset && offset.x || 0), 2) + (units && units.x || 'px') + ', ' + floatCut((pos._y || 0) * (box.y || 0) + (pos.y || 0) + (offset && offset.y || 0), 2) + (units && units.y || 'px') + ', ' + floatCut((pos._z || 0) * (box.z || 0) + (pos.z || 0) + (offset && offset.z || 0), 2) + (units && units.z || 'px') + '' + ')'; //@todo matrix

    if (pos.rotate && is.number(pos.rotate)) t += ' rotate(' + floatCut((pos.rotate || 0) % 360, 2) + 'deg)';
    if (pos.rotateX && is.number(pos.rotateX)) t += ' rotateX(' + floatCut((pos.rotateX || 0) % 360, 2) + 'deg)';
    if (pos.rotateY && is.number(pos.rotateY)) t += ' rotateY(' + floatCut((pos.rotateY || 0) % 360, 2) + 'deg)';
    if (is.number(pos.opacity)) css.opacity = min(1, max(0, floatCut(pos.opacity, 2)));
    pos.perspective && (t = "perspective(" + pos.perspective + (units && units.perspective || 'px') + ") " + t);
    t && (css.transform = t);
    is.number(pos._width) && (css.width = pos._width * (box.x || 0) + 'px');
    is.number(pos._height) && (css.height = pos._height * (box.y || 0) + 'px');
    is.number(pos.width) && (css.width = pos.width + (units && units.x || 'px'));
    is.number(pos.height) && (css.height = pos.height + (units && units.y || 'px'));
    is.number(pos.zIndex) && (css.zIndex = pos.zIndex);
    Object.keys(pos).forEach(function (key) {
      if (!(key in customProps)) css[key] = pos[key] + (units && units[key] || 'px');
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Dom);

/***/ }),

/***/ "undefined?03c7":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "undefined?20a8":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "undefined?24b3":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "undefined?36a1":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "undefined?4d9b":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "undefined?56eb":
/*!*********************************************!*\
  !*** external "@babel/runtime/helpers/get" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/get");

/***/ }),

/***/ "undefined?588e":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "undefined?5e9a":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "undefined?63a5":
/*!*********************!*\
  !*** external "is" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is");

/***/ }),

/***/ "undefined?74ba":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "undefined?929e":
/*!*************************!*\
  !*** external "rtween" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rtween");

/***/ }),

/***/ "undefined?beec":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "undefined?c1e3":
/*!****************************!*\
  !*** external "taskflows" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("taskflows");

/***/ }),

/***/ "undefined?e108":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ }),

/***/ "undefined?e4e5":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ })

/******/ });
//# sourceMappingURL=Comp.js.map
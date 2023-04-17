/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LE": function() { return /* binding */ MinimogTheme; }
/* harmony export */ });
/* unused harmony exports MinimogEvents, MinimogSettings, MinimogStrings, MinimogLibs */
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8971);
/* harmony import */ var _libs_loadjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9280);
/* harmony import */ var _libs_loadjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_loadjs__WEBPACK_IMPORTED_MODULE_0__);


window.MinimogEvents = window.MinimogEvents || new _utils_events__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();
window._ThemeEvent = window.MinimogEvents;
window.MinimogLibs.loadjs = __loadjs;
const MinimogEvents = window.MinimogEvents;
const MinimogTheme = window.MinimogTheme || {};
const MinimogSettings = window.MinimogSettings || {};
const MinimogStrings = window.MinimogStrings || {};
const MinimogLibs = window.MinimogLibs || {};

/***/ }),

/***/ 9280:
/***/ (function() {

__loadjs = function () {
  var h = function () {},
    c = {},
    u = {},
    f = {};
  function o(e, n) {
    if (e) {
      var r = f[e];
      if (u[e] = n, r) for (; r.length;) r[0](e, n), r.splice(0, 1);
    }
  }
  function l(e, n) {
    e.call && (e = {
      success: e
    }), n.length ? (e.error || h)(n) : (e.success || h)(e);
  }
  function d(r, t, s, i) {
    var c,
      o,
      e = document,
      n = s.async,
      u = (s.numRetries || 0) + 1,
      f = s.before || h,
      l = r.replace(/[\?|#].*$/, ""),
      a = r.replace(/^(css|img)!/, "");
    i = i || 0, /(^css!|\.css$)/.test(l) ? ((o = e.createElement("link")).rel = "stylesheet", o.href = a, (c = "hideFocus" in o) && o.relList && (c = 0, o.rel = "preload", o.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l) ? (o = e.createElement("img")).src = a : ((o = e.createElement("script")).src = r, o.async = void 0 === n || n), !(o.onload = o.onerror = o.onbeforeload = function (e) {
      var n = e.type[0];
      if (c) try {
        o.sheet.cssText.length || (n = "e");
      } catch (e) {
        18 != e.code && (n = "e");
      }
      if ("e" == n) {
        if ((i += 1) < u) return d(r, t, s, i);
      } else if ("preload" == o.rel && "style" == o.as) return o.rel = "stylesheet";
      t(r, n, e.defaultPrevented);
    }) !== f(r, o) && e.head.appendChild(o);
  }
  function r(e, n, r) {
    var t, s;
    if (n && n.trim && (t = n), s = (t ? r : n) || {}, t) {
      if (t in c) throw "LoadJS";
      c[t] = !0;
    }
    function i(n, r) {
      !function (e, t, n) {
        var r,
          s,
          i = (e = e.push ? e : [e]).length,
          c = i,
          o = [];
        for (r = function (e, n, r) {
          if ("e" == n && o.push(e), "b" == n) {
            if (!r) return;
            o.push(e);
          }
          --i || t(o);
        }, s = 0; s < c; s++) d(e[s], r, n);
      }(e, function (e) {
        l(s, e), n && l({
          success: n,
          error: r
        }, e), o(t, e);
      }, s);
    }
    if (s.returnPromise) return new Promise(i);
    i();
  }
  return r.ready = function (e, n) {
    return function (e, r) {
      e = e.push ? e : [e];
      var n,
        t,
        s,
        i = [],
        c = e.length,
        o = c;
      for (n = function (e, n) {
        n.length && i.push(e), --o || r(i);
      }; c--;) t = e[c], (s = u[t]) ? n(t, s) : (f[t] = f[t] || []).push(n);
    }(e, function (e) {
      l(n, e);
    }), r;
  }, r.done = function (e) {
    o(e, []);
  }, r.reset = function () {
    c = {}, u = {}, f = {};
  }, r.isDefined = function (e) {
    return e in c;
  }, r;
}();

/***/ }),

/***/ 6295:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2422);
/* harmony import */ var mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0__);

class JSX {
  constructor() {
    this.component = this.component.bind(this);
    return this.component;
  }
  component(tagName, attrs) {
    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }
    if (typeof tagName === 'function') {
      // Override children
      return tagName({
        ...attrs,
        children
      });
    }
    if (children) {
      children = children.filter(val => val !== null);
    }
    if (attrs) {
      if (attrs.class) {
        attrs.className = attrs.class;
      }
      delete attrs.children;
    }

    // Normal DOM node tagName
    function createWithAttrs(tagName, attrs) {
      attrs = attrs || {};
      let elem = document.createElement(tagName);
      try {
        elem = Object.assign(elem, attrs);
      } catch {
        const attrKeys = Object.keys(attrs);
        for (let i = 0; i < attrKeys.length; i++) {
          if (attrs[i] !== 'dataSet') {
            elem.setAttribute(attrKeys[i], attrs[attrKeys[i]]);
          }
        }
      }
      return elem;
    }
    let elem = tagName !== 'fragment' ? createWithAttrs(tagName, attrs) : document.createDocumentFragment();
    // Evaluate SVG DOM node tagName

    // All svg inner tags: https://developer.mozilla.org/en-US/docs/Web/SVG/Element
    const svgInnerTags = ['svg', 'path', 'rect', 'text', 'circle', 'g'];
    if (svgInnerTags.indexOf(tagName) !== -1) {
      elem = document.createElementNS('http://www.w3.org/2000/svg', tagName);
      for (const key in attrs) {
        const attrName = key === 'className' ? 'class' : key;
        elem.setAttribute(attrName, attrs[key]);
      }
    }

    // Populate children to created DOM Node
    for (const child of children) {
      if (Array.isArray(child)) {
        elem.append(...child);
      } else {
        elem.append(child);
      }
    }

    // After elements are created
    if (attrs !== null && attrs !== void 0 && attrs.dataSet) {
      for (const key in attrs.dataSet) {
        if (Object.prototype.hasOwnProperty.call(attrs.dataSet, key)) {
          elem.dataset[key] = attrs.dataSet[key];
        }
      }
    }
    if (attrs && !window.__aleartedJSXData) {
      if (Object.keys(attrs).find(key => key.match(/^data-/))) {
        console.trace(`Your "${tagName}" component uses a data-* attribute! Use dataSet instead!!`);
        alert('Do not use data-* in your JSX component! Use dataSet instead!! - Check the console.trace for more info');
        window.__aleartedJSXData = true;
      }
    }
    if (attrs !== null && attrs !== void 0 && attrs.ref) {
      // Create a custom reference to DOM node
      if (typeof attrs.ref === 'function') {
        attrs.ref(elem);
      } else {
        attrs.ref = elem;
      }
    }
    if (attrs !== null && attrs !== void 0 && attrs.on) {
      Object.entries(attrs.on).forEach(_ref => {
        let [event, handler] = _ref;
        elem.addEventListener(event, handler);
      });
    }

    // Append style attributes to created DOM node
    if (attrs !== null && attrs !== void 0 && attrs.style) {
      Object.entries(attrs.style).forEach(_ref2 => {
        let [property, value] = _ref2;
        elem.style.setProperty(property, value);
      });
      // Object.assign(elem.style, attrs.style);
    }

    return elem;
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (new JSX());

/***/ }),

/***/ 8971:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": function() { return /* binding */ addEventDelegate; },
/* harmony export */   "Z": function() { return /* binding */ Event; }
/* harmony export */ });
const addEventDelegate = _ref => {
  let {
    context = document.documentElement,
    event = 'click',
    selector,
    handler,
    capture = false
  } = _ref;
  const listener = function (e) {
    // loop parent nodes from the target to the delegation node
    for (let target = e.target; target && target !== this; target = target.parentNode) {
      if (target.matches(selector)) {
        handler.call(target, e, target);
        break;
      }
    }
  };
  context.addEventListener(event, listener, capture);
  return () => {
    context.removeEventListener(event, listener, capture);
  };
};
class Event {
  constructor() {
    this.events = {};
  }
  get evts() {
    return Object.keys(this.events);
  }
  subscribe(event, handler) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(handler);
    return () => this.unSubscribe(event, handler);
  }
  unSubscribe(event, handler) {
    const handlers = this.events[event];
    if (handlers && Array.isArray(handlers)) {
      for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i, 1);
          break;
        }
      }
    }
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    console.groupCollapsed(`Event emitted: ${event}`);
    console.trace();
    console.groupEnd();
    (this.events[event] || []).forEach(handler => {
      handler(...args);
    });
  }
}

/***/ }),

/***/ 2422:
/***/ (function() {

!function () {
  function t() {
    var e = Array.prototype.slice.call(arguments),
      n = document.createDocumentFragment();
    e.forEach(function (e) {
      var t = e instanceof Node;
      n.appendChild(t ? e : document.createTextNode(String(e)));
    }), this.appendChild(n);
  }
  [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {
    e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  });
}();

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
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
;// CONCATENATED MODULE: ./src/js/modules/boost-sales-helper.js
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];

class BoostSales {
  constructor() {
    _defineProperty(this, "selectors", {
      liveViews: ['.prod__live-views'],
      stockCountdowns: ['.prod__stock-countdown']
    });
    _defineProperty(this, "init", () => {
      try {
        this.domNodes = queryDomNodes(this.selectors);
        this.initLiveViews();
        this.initStockCountDown();
      } catch (error) {
        console.error("Failed to init Boost Sales Helper");
      }
    });
    _defineProperty(this, "initLiveViews", () => {
      var _this$domNodes, _this$domNodes$liveVi;
      (_this$domNodes = this.domNodes) === null || _this$domNodes === void 0 ? void 0 : (_this$domNodes$liveVi = _this$domNodes.liveViews) === null || _this$domNodes$liveVi === void 0 ? void 0 : _this$domNodes$liveVi.forEach(liveViews => {
        if (liveViews.dataset.initialized !== "true") {
          const liveViewElem = liveViews.querySelector('.live-views-text');
          const settings = liveViews.dataset;
          if (liveViewElem) {
            const lvtHTML = liveViewElem.innerHTML;
            liveViewElem.innerHTML = lvtHTML.replace(settings.liveViewsCurrent, `<span class="live-view-numb">${settings.liveViewsCurrent}</span>`);
            this.changeLiveViewsNumber(liveViewElem, settings);
          }
          liveViews.dataset.initialized = true;
        }
      });
    });
    _defineProperty(this, "changeLiveViewsNumber", (liveViewElem, settings) => {
      const numbElem = liveViewElem.querySelector('.live-view-numb');
      const {
        liveViewsDuration,
        liveViewsMax,
        liveViewsMin
      } = settings;
      const duration = Number(liveViewsDuration) || 5;
      const max = Number(liveViewsMax) || 30;
      const min = Number(liveViewsMin) || 20;
      if (numbElem) {
        setInterval(() => {
          const newViews = Math.floor(Math.random() * (max - min + 1)) + min;
          numbElem.textContent = newViews;
        }, duration * 1000);
      }
    });
    _defineProperty(this, "initStockCountDown", () => {
      var _this$domNodes2, _this$domNodes2$stock;
      (_this$domNodes2 = this.domNodes) === null || _this$domNodes2 === void 0 ? void 0 : (_this$domNodes2$stock = _this$domNodes2.stockCountdowns) === null || _this$domNodes2$stock === void 0 ? void 0 : _this$domNodes2$stock.forEach(stockCountdown => {
        if (stockCountdown.dataset.initialized !== "true") {
          stockCountdown.classList.remove('hidden');
          const progress = stockCountdown.querySelector('.psc__progress');
          const width = progress.dataset.stockCountdownWidth;
          if (progress) {
            progress.style.width = "100%";
            setTimeout(() => {
              progress.style.width = width;
            }, 2000);
          }
          stockCountdown.dataset.initialized = true;
        }
      });
    });
    this.init();
  }
}
MinimogTheme = MinimogTheme || {};
MinimogTheme.BoostSales = new BoostSales();
;// CONCATENATED MODULE: ./src/js/components/Modal.jsx
/* provided dependency */ var createElement = __webpack_require__(6295)["Z"];
function Modal_Modal(_ref) {
  let {
    wrapper_class = ''
  } = _ref;
  return createElement("div", {
    style: {
      '--tw-bg-opacity': '0.3'
    },
    className: `sf-modal sf-modal__wrapper fixed inset-0 px-5 bg-black flex items-center justify-center transition-opacity opacity-0 duration-200 ease-out ${wrapper_class}`
  }, createElement("div", {
    className: "sf-modal__content bg-white relative rounded max-h-[90vh]"
  }, createElement("button", {
    className: "sf-modal__close text-black absolute p-2 bg-white hover:bg-gray-300 rounded-full z-10"
  }, createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  }))), createElement("div", {
    className: "sf-modal__content-inner"
  })));
}
// EXTERNAL MODULE: ./src/js/utilities/events.js
var events = __webpack_require__(8971);
;// CONCATENATED MODULE: ./src/js/modules/modal.js
/* provided dependency */ var modal_createElement = __webpack_require__(6295)["Z"];

// eslint-disable-next-line no-unused-vars


class Modal {
  constructor(wrapper_class) {
    var _this = this,
      _this$modal,
      _this$modal2;
    _defineProperty(this, "init", () => {
      (0,events/* addEventDelegate */.X)({
        selector: '.sf-modal__wrapper',
        handler: e => {
          var _e$target;
          if ((e === null || e === void 0 ? void 0 : e.target) === this.modal || e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && _e$target.closest('.sf-modal__close')) {
            this.close(e);
          }
        }
      });
    });
    _defineProperty(this, "setSizes", function () {
      let sizes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      _this.resetSize();
      _this.sizes = sizes;
      sizes.split(" ").forEach(size => {
        var _this$modalContent, _this$modalContent$cl;
        (_this$modalContent = _this.modalContent) === null || _this$modalContent === void 0 ? void 0 : (_this$modalContent$cl = _this$modalContent.classList) === null || _this$modalContent$cl === void 0 ? void 0 : _this$modalContent$cl.add(size);
      });
    });
    _defineProperty(this, "setWidth", width => {
      this.modalContent.style.width = width;
    });
    _defineProperty(this, "resetSize", () => {
      if (this.sizes) {
        this.sizes.split(" ").forEach(size => {
          var _this$modalContent2, _this$modalContent2$c;
          (_this$modalContent2 = this.modalContent) === null || _this$modalContent2 === void 0 ? void 0 : (_this$modalContent2$c = _this$modalContent2.classList) === null || _this$modalContent2$c === void 0 ? void 0 : _this$modalContent2$c.remove(size);
        });
        this.sizes = '';
      }
    });
    _defineProperty(this, "appendChild", child => {
      var _this$modalContentInn;
      this === null || this === void 0 ? void 0 : (_this$modalContentInn = this.modalContentInner) === null || _this$modalContentInn === void 0 ? void 0 : _this$modalContentInn.appendChild(child);
      this.children = child;
    });
    _defineProperty(this, "removeChild", () => {
      var _this$children;
      this === null || this === void 0 ? void 0 : (_this$children = this.children) === null || _this$children === void 0 ? void 0 : _this$children.remove();
    });
    _defineProperty(this, "open", () => {
      document.documentElement.classList.add('prevent-scroll');
      document.body.appendChild(this.modal);
      setTimeout(() => this.modal.classList.add('opacity-100'));
      window.addEventListener("keydown", this.handleKeyDown);
    });
    _defineProperty(this, "close", e => {
      e === null || e === void 0 ? void 0 : e.preventDefault();
      this.modal.classList.remove('opacity-100');
      window.removeEventListener("keydown", this.handleKeyDown);
      setTimeout(() => {
        this.modal.remove();
        this.removeChild();
        this.resetSize();
        this.modalContent.style.removeProperty('width');
        document.documentElement.classList.remove('prevent-scroll');
      }, this.transitionDuration);
    });
    _defineProperty(this, "handleKeyDown", e => {
      // ESC
      if (e.keyCode === 27) {
        this.close();
      }
    });
    this.modal = modal_createElement(Modal_Modal, {
      wrapper_class: wrapper_class || undefined
    });
    this.modalContent = (_this$modal = this.modal) === null || _this$modal === void 0 ? void 0 : _this$modal.querySelector('.sf-modal__content');
    this.modalContentInner = (_this$modal2 = this.modal) === null || _this$modal2 === void 0 ? void 0 : _this$modal2.querySelector('.sf-modal__content-inner');
    this.transitionDuration = 200;
    this.init();
  }
}
/* harmony default export */ var modal = (Modal);
;// CONCATENATED MODULE: ./src/js/modules/contact-form-ask.js
/* provided dependency */ var contact_form_ask_MinimogTheme = __webpack_require__(4558)["LE"];



class ContactFormAsk {
  constructor() {
    _defineProperty(this, "init", () => {
      this.showSuccessMessage();
      (0,events/* addEventDelegate */.X)({
        selector: '.form-ask__button',
        handler: e => {
          e.preventDefault();
          this.modal.appendChild(this.container);
          this.modal.setWidth('500px');
          this.modal.setSizes('max-w-[90vw]');
          this.container.classList.remove('hidden');
          this.modal.open();
        }
      });
    });
    _defineProperty(this, "showSuccessMessage", () => {
      const successMessage = this.container.querySelector('.form-ask__success');
      if (successMessage) {
        const notiBlock = document.querySelector('.form-ask__success-block');
        const target = window.innerWidth < 768 ? successMessage : notiBlock;
        if (window.innerWidth < 768) {
          document.body.appendChild(successMessage);
        }
        contact_form_ask_MinimogTheme.Notification.show({
          target,
          method: 'appendChild',
          type: 'success',
          message: successMessage.dataset.message,
          delay: 2000
        });
        setTimeout(() => {
          const url = window.location.origin + window.location.pathname;
          window.history.replaceState({}, document.title, url);
        }, 2500);
      }
    });
    this.container = document.querySelector('.form-ask__wrapper');
    if (!this.container) return;
    this.init();
    this.modal = new modal();
  }
}
new ContactFormAsk();
;// CONCATENATED MODULE: ./src/js/modules/sharing.js
/* provided dependency */ var sharing_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var sharing_MinimogTheme = __webpack_require__(4558)["LE"];

// eslint-disable-next-line no-unused-vars


class Sharing {
  constructor() {
    _defineProperty(this, "selectors", {
      shareContent: '.sf-sharing',
      openBtn: '[data-open-share]'
    });
    _defineProperty(this, "init", () => {
      var _this$domNodes$openBt;
      (_this$domNodes$openBt = this.domNodes.openBtn) === null || _this$domNodes$openBt === void 0 ? void 0 : _this$domNodes$openBt.classList.remove('hidden');
      this.modal = new modal();
      (0,events/* addEventDelegate */.X)({
        selector: this.selectors.openBtn,
        handler: e => {
          e.preventDefault();
          if (this.shareContent) {
            const html = sharing_createElement("div", null);
            html.innerHTML = this.shareContent;
            this.modal.appendChild(html);
            this.modal.setSizes('bg-white sf-sharing');
            this.modal.open();
          }
        }
      });
    });
    this.domNodes = queryDomNodes(this.selectors);
    const {
      shareContent
    } = this.domNodes;
    if (shareContent && shareContent.innerHTML) {
      this.shareContent = shareContent.innerHTML;
      this.init();
    }
  }
}
sharing_MinimogTheme = sharing_MinimogTheme || {};
sharing_MinimogTheme.Sharing = new Sharing();
;// CONCATENATED MODULE: ./src/js/pages/product-template.js




}();
/******/ })()
;
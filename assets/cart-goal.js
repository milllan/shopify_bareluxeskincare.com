/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7345:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* provided dependency */ var MinimogSettings = __webpack_require__(4558)["GQ"];

class I18N {
  constructor() {
    var _MinimogSettings$shop,
      _this = this;
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "shop_locale", ((_MinimogSettings$shop = MinimogSettings.shop_locale) === null || _MinimogSettings$shop === void 0 ? void 0 : _MinimogSettings$shop.current) || 'en');
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "locales", {
      'default': {
        date_format: 'MM/dd/yyyy',
        add_button: "Add",
        added_button: "Added",
        bundle_button: "Add selected item(s)",
        bundle_saved: "Saved",
        bundle_select: "Select",
        bundle_selected: "Selected",
        bundle_this_item: "This item",
        bundle_total: "Total price",
        checkout: "Checkout",
        discount_summary: "You will get <strong>{discount_value} OFF</strong> on each product",
        discount_title: "SPECIAL OFFER",
        free: "FREE",
        incart_title: "Customers also bought with \"{product_title}\"",
        prepurchase_added: "You just added",
        prepurchase_title: "Frequently bought with \"{product_title}\"",
        qty_discount_note: "on each product",
        qty_discount_title: '{item_count} item(s) get {discount_value} OFF',
        sizechart_button: "Size chart",
        field_name: 'Enter your name',
        field_email: 'Enter your email',
        field_birthday: 'Date of birth',
        discount_noti: '* Discount will be calculated and applied at checkout',
        fox_discount_noti: `* You are entitled to 1 discount offer of <span>{price}</span> (<span>{discount_title}</span>). This offer <b>can't be combined</b> with any other discount you add here!`,
        bis_open: "Notify me when available",
        bis_heading: "Back in stock alert 📬",
        bis_desc: "We will send you a notification as soon as this product is available again.",
        bis_submit: "Notify me",
        bis_email: "Your email",
        bis_name: "Your name",
        bis_phone: "Your phone number",
        bis_note: "Your note",
        bis_signup: "Email me with news and offers",
        bis_thankyou: "Thank you! We'll send you an email when this product is available!",
        preorder_discount_title: "🎁 Preorder now to get <strong>{discount_value} OFF</strong>",
        preorder_shipping_note: "🚚 Item will be delivered on or before <strong>{eta}</strong>",
        preorder_end_note: "🔥 Preorder will end at <strong>{end_time}</strong>"
      }
    });
    // translate
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "tr", function (key) {
      var _locales$shop_locale;
      let _params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const {
        locales,
        shop_locale
      } = _this;
      let text = ((_locales$shop_locale = locales[shop_locale]) === null || _locales$shop_locale === void 0 ? void 0 : _locales$shop_locale[key]) || locales['default'][key] || `Foxkit: translation missing for ${key}!`;
      const params = Object.keys(_params);
      if (params.length) {
        Object.entries(_params).forEach(_ref => {
          let [k, v] = _ref;
          return text = text.replace(`{${k}}`, v);
        });
      }
      return text;
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "setLocales", (locale, data) => {
      this.locales[locale] = data;
    });
  }
}
const i18n = window.__i18n || new I18N();
window.__i18n = window.__i18n || i18n;
/* harmony default export */ __webpack_exports__["Z"] = (i18n);

/***/ }),

/***/ 4558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GQ": function() { return /* binding */ MinimogSettings; },
/* harmony export */   "LE": function() { return /* binding */ MinimogTheme; },
/* harmony export */   "rZ": function() { return /* binding */ MinimogStrings; },
/* harmony export */   "s0": function() { return /* binding */ MinimogEvents; }
/* harmony export */ });
/* unused harmony export MinimogLibs */
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
/* harmony export */   "Z": function() { return /* binding */ Event; }
/* harmony export */ });
/* unused harmony export addEventDelegate */
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

/***/ }),

/***/ 4942:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7343);

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(key);
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

/***/ }),

/***/ 5512:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1002);

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ 7343:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1002);
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5512);


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ 1002:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./src/js/foxkit/confetti.js

class Confetti {
  constructor(container) {
    (0,defineProperty/* default */.Z)(this, "confettiInterval", null);
    (0,defineProperty/* default */.Z)(this, "containerEl", null);
    (0,defineProperty/* default */.Z)(this, "confettiColors", ['#EF2964', '#00C09D', '#2D87B0', '#48485E', '#EFFF1D']);
    (0,defineProperty/* default */.Z)(this, "confettiAnimations", ['slow', 'medium', 'fast']);
    (0,defineProperty/* default */.Z)(this, "timeRun", 0);
    (0,defineProperty/* default */.Z)(this, "setupElement", () => {
      const containerEl = document.createElement('div');
      const elPosition = this.container.style.position;
      if (elPosition !== 'relative' || elPosition !== 'absolute') {
        this.container.style.position = 'relative';
      }
      containerEl.classList.add('confetti-container');
      this.container.appendChild(containerEl);
      this.containerEl = containerEl;
    });
    (0,defineProperty/* default */.Z)(this, "stopConfetti", () => {
      clearInterval(this.confettiInterval);
      setTimeout(() => this.containerEl.remove(), 1500);
    });
    (0,defineProperty/* default */.Z)(this, "render", () => {
      this.confettiInterval = setInterval(() => {
        this.timeRun += 1;
        if (this.timeRun >= 160) this.stopConfetti();
        const confettiEl = document.createElement('div');
        const confettiSize = Math.floor(Math.random() * 3) + 7 + 'px';
        const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
        const confettiLeft = Math.floor(Math.random() * this.container.offsetWidth) + 'px';
        const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
        confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
        confettiEl.style.left = confettiLeft;
        confettiEl.style.width = confettiSize;
        confettiEl.style.height = confettiSize;
        confettiEl.style.backgroundColor = confettiBackground;
        confettiEl.removeTimeout = setTimeout(function () {
          confettiEl.parentNode.removeChild(confettiEl);
        }, 3000);
        this.containerEl.appendChild(confettiEl);
      }, 20);
    });
    this.container = container;
    this.setupElement();
    this.render();
  }
}
/* harmony default export */ var confetti = (Confetti);
;// CONCATENATED MODULE: ./src/js/modules/cartgoal.js
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var MinimogEvents = __webpack_require__(4558)["s0"];
/* provided dependency */ var createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var MinimogStrings = __webpack_require__(4558)["rZ"];
/* provided dependency */ var i18n = __webpack_require__(7345)["Z"];

// eslint-disable-next-line no-unused-vars

class CartGoal {
  constructor(settings) {
    var _window$Shopify, _window$Shopify$curre;
    (0,defineProperty/* default */.Z)(this, "selectors", {
      cartDrawer: '.scd__content',
      cartGoal: '.f-cartgoal',
      cartSummary: '[data-cart-summary]',
      cartSubtotal: '[data-cart-subtotal]',
      shippingNote: '[data-shipping-note]',
      title: '.f-cartgoal__title',
      progressBar: '[data-progress]',
      goalLeft: '[data-goal-left]',
      icon: '.f-cartgoal__icon'
    });
    (0,defineProperty/* default */.Z)(this, "defaultIcon", `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M5.56445.761719C5.69336.503906 5.90104.375 6.1875.375s.49414.128906.62305.386719L8.20703 3.59766l3.13677.47265c.2864.02865.4726.17904.5585.45117.086.27214.0287.50847-.1718.70899L9.45312 7.44336l.53711 3.13674c.04297.2721-.05013.487-.27929.6445-.22917.1719-.4655.1934-.70899.0645L6.1875 9.82812 3.37305 11.2891c-.24349.1432-.47982.1289-.70899-.043-.22916-.1719-.32226-.3939-.27929-.666l.53711-3.13674L.644531 5.23047C.44401 5.02995.386719 4.79362.472656 4.52148c.085938-.27213.272136-.42252.558594-.45117l3.13672-.47265L5.56445.761719z"/></svg>`);
    (0,defineProperty/* default */.Z)(this, "doneIcon", `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M5.56445.761719C5.69336.503906 5.90104.375 6.1875.375s.49414.128906.62305.386719L8.20703 3.59766l3.13677.47265c.2864.02865.4726.17904.5585.45117.086.27214.0287.50847-.1718.70899L9.45312 7.44336l.53711 3.13674c.04297.2721-.05013.487-.27929.6445-.22917.1719-.4655.1934-.70899.0645L6.1875 9.82812 3.37305 11.2891c-.24349.1432-.47982.1289-.70899-.043-.22916-.1719-.32226-.3939-.27929-.666l.53711-3.13674L.644531 5.23047C.44401 5.02995.386719 4.79362.472656 4.52148c.085938-.27213.272136-.42252.558594-.45117l3.13672-.47265L5.56445.761719z"/></svg>`);
    (0,defineProperty/* default */.Z)(this, "progress", 0);
    (0,defineProperty/* default */.Z)(this, "confettiShow", false);
    (0,defineProperty/* default */.Z)(this, "goalDone", false);
    (0,defineProperty/* default */.Z)(this, "enabled", true);
    (0,defineProperty/* default */.Z)(this, "init", () => {
      var _MinimogTheme, _MinimogTheme$Cart, _window$FoxKit, _MinimogTheme2, _MinimogTheme2$Cart;
      this.enabled = (_MinimogTheme = MinimogTheme) === null || _MinimogTheme === void 0 ? void 0 : (_MinimogTheme$Cart = _MinimogTheme.Cart) === null || _MinimogTheme$Cart === void 0 ? void 0 : _MinimogTheme$Cart.cart.requires_shipping;
      this.updateProgress(((_window$FoxKit = window.FoxKit) === null || _window$FoxKit === void 0 ? void 0 : _window$FoxKit.newCart) || ((_MinimogTheme2 = MinimogTheme) === null || _MinimogTheme2 === void 0 ? void 0 : (_MinimogTheme2$Cart = _MinimogTheme2.Cart) === null || _MinimogTheme2$Cart === void 0 ? void 0 : _MinimogTheme2$Cart.cart));
      this.listenCartChange();
      this.confettiShow = this.goalDone;
    });
    (0,defineProperty/* default */.Z)(this, "updateProgress", cart => {
      var _cart$_foxCartPrices;
      const cartTotal = ((_cart$_foxCartPrices = cart._foxCartPrices) === null || _cart$_foxCartPrices === void 0 ? void 0 : _cart$_foxCartPrices.total_price) || (cart === null || cart === void 0 ? void 0 : cart.total_price);
      this.goalLeft = this.goal * 100 - cartTotal;
      this.progress = this.goalLeft > 0 ? cartTotal / this.goal : 100;
      this.goalDone = this.goalLeft <= 0;
      this.goalTitle = this.goalDone ? this.reached_message : this.message;
      this.domNodes.icon.innerHTML = this.goalDone ? this.doneIcon : this.defaultIcon;
      this.domNodes.cartGoal.style.setProperty('--progress', this.progress + '%');
      this.goalTitle = this.goalTitle.replace('{{variable}}', `<strong>${formatMoney(this.goalLeft, MinimogSettings.money_format)}</strong>`);
      setTimeout(() => this.domNodes.title.innerHTML = this.goalTitle, 500);
      this.setDone();
    });
    (0,defineProperty/* default */.Z)(this, "listenCartChange", () => {
      MinimogEvents.subscribe('ON_FOX_CART_UPDATE', async cart => {
        if (cart) {
          this.domNodes = queryDomNodes(this.selectors);
          this.enabled = cart.requires_shipping;
          this.updateProgress(cart);
          const method = this.goalDone ? 'add' : 'remove';
          this.domNodes.cartGoal.classList[method]('shakeY');
          if (this.goalLeft <= 0) {
            this.showConfetti();
          } else {
            this.confettiShow = false;
          }
          if (this.enabled) {
            this.domNodes.cartGoal.classList.remove('hidden');
          } else {
            var _this$shippingNote;
            this.domNodes.cartGoal.classList.add('hidden');
            (_this$shippingNote = this.shippingNote) === null || _this$shippingNote === void 0 ? void 0 : _this$shippingNote.remove();
          }
        }
      });
    });
    (0,defineProperty/* default */.Z)(this, "setDone", () => {
      var _this$shippingNote2, _this$domNodes$shippi;
      const method = this.goalDone ? 'add' : 'remove';
      this.domNodes.cartGoal.classList[method]('f-cartgoal--done');
      (_this$shippingNote2 = this.shippingNote) === null || _this$shippingNote2 === void 0 ? void 0 : _this$shippingNote2.remove();
      (_this$domNodes$shippi = this.domNodes.shippingNote) === null || _this$domNodes$shippi === void 0 ? void 0 : _this$domNodes$shippi.classList.remove('hidden');
      if (this.goalDone && this.enabled) {
        this.addShippingNote();
      }
    });
    (0,defineProperty/* default */.Z)(this, "showConfetti", () => {
      if (this.enabled && !this.confettiShow && MinimogSettings.template !== 'cart') {
        new confetti(this.domNodes.cartDrawer);
        this.confettiShow = true;
      }
    });
    (0,defineProperty/* default */.Z)(this, "addShippingNote", () => {
      var _this$domNodes$shippi2;
      this.shippingNote = createElement("div", {
        className: 'f-cartgoal-free-shipping flex justify-between items-center'
      }, createElement("span", null, MinimogStrings.shipping, ":"), " ", i18n.tr('free'));
      this.domNodes.cartSummary.insertBefore(this.shippingNote, this.domNodes.cartSubtotal);
      (_this$domNodes$shippi2 = this.domNodes.shippingNote) === null || _this$domNodes$shippi2 === void 0 ? void 0 : _this$domNodes$shippi2.classList.add('hidden');
    });
    this.settings = settings;
    this.domNodes = queryDomNodes(this.selectors);
    this.goal = Number(this.settings.goal_amount) * Number(((_window$Shopify = window.Shopify) === null || _window$Shopify === void 0 ? void 0 : (_window$Shopify$curre = _window$Shopify.currency) === null || _window$Shopify$curre === void 0 ? void 0 : _window$Shopify$curre.rate) || 1) || 0;
    this.reached_message = this.settings.message_reached;
    this.message = this.settings.message;
    if (this.domNodes.cartGoal) {
      this.init();
      this.domNodes.cartDrawer.classList.add('scd--has-cartgoal');
    }
  }
}
window.FoxKit = window.FoxKit || {};
window.FoxKit.CartGoal = CartGoal;
}();
/******/ })()
;
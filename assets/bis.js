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
// EXTERNAL MODULE: ./src/js/foxkit/i18n.js
var i18n = __webpack_require__(7345);
;// CONCATENATED MODULE: ./src/js/components/BIS/NotifyButton.jsx
/* provided dependency */ var createElement = __webpack_require__(6295)["Z"];

const NotifyButton = _ref => {
  let {
    className
  } = _ref;
  return createElement("button", {
    className: `sf__btn ${className} btn-back-in-stock flex-grow shrink not-change`
  }, i18n/* default.tr */.Z.tr('bis_open'));
};
/* harmony default export */ var BIS_NotifyButton = (NotifyButton);
;// CONCATENATED MODULE: ./src/js/components/LazyImage.jsx
/* provided dependency */ var LazyImage_createElement = __webpack_require__(6295)["Z"];
/* harmony default export */ function LazyImage(props) {
  const {
    src,
    alt,
    style = {},
    className = '',
    onLoad = () => {},
    onError = () => {}
  } = props;
  const image = LazyImage_createElement("img", {
    style: style,
    className: `transition-opacity opacity-0 ${className}`,
    src: `${src}&width=300`,
    loading: "lazy",
    alt: alt
  });
  image.addEventListener('load', imgLoaded);
  image.addEventListener('error', imgError);
  if (image.complete && image.naturalWidth) {
    imgLoaded();
  }
  function imgLoaded() {
    onLoad && onLoad();
    image.classList.add('opacity-100');
    image.removeEventListener('load', imgLoaded);
    image.removeEventListener('error', imgError);
  }
  function imgError(err) {
    console.error('Failed to load LazyImage. ', err, props);
    onError && onError();
    image.style.opacity = 0;
    image.removeEventListener('load', imgLoaded);
    image.removeEventListener('error', imgError);
  }
  return image;
}
;// CONCATENATED MODULE: ./src/js/components/Spinner.jsx
/* provided dependency */ var Spinner_createElement = __webpack_require__(6295)["Z"];
/* harmony default export */ function Spinner(_ref) {
  let {
    className = ''
  } = _ref;
  return Spinner_createElement("svg", {
    className: `animate-spin hidden w-[20px] h-[20px] ${className}`,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none"
  }, Spinner_createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }), Spinner_createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
}
;// CONCATENATED MODULE: ./src/js/components/BIS/Popup.jsx
/* provided dependency */ var MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var MinimogStrings = __webpack_require__(4558)["rZ"];
/* provided dependency */ var Popup_createElement = __webpack_require__(6295)["Z"];



const Popup = _ref => {
  let {
    settings,
    handleSubmit
  } = _ref;
  const {
    show_name,
    show_phone_number,
    show_note,
    show_signup_newsletter,
    productData,
    save_to = []
  } = settings;
  const {
    title,
    has_only_default_variant,
    current_variant_id,
    variants
  } = productData;
  const variant = productData.variants.find(v => v.id === current_variant_id);
  if (!variant) return false;
  const {
    price,
    title: variant_title,
    featured_image
  } = variant;
  const {
    money_format
  } = MinimogSettings;
  const {
    soldOut
  } = MinimogStrings;
  const src = (featured_image === null || featured_image === void 0 ? void 0 : featured_image.src) || productData.images[0];
  const syncWithShopify = save_to.indexOf('shopify_customers') !== -1;
  const saveToSubscriptionList = save_to.indexOf('foxkit_subscribers') !== -1;
  const priceNode = Popup_createElement("span", null);
  priceNode.classList.add('bis-popup__product-price');
  priceNode.innerHTML = formatMoney(price, money_format);
  return Popup_createElement("div", {
    className: "lg:flex lg:p-4 bis-popup"
  }, Popup_createElement("div", {
    className: "bis-popup__product p-4 flex lg:block lg:w-1/2"
  }, Popup_createElement("div", {
    className: "relative"
  }, Popup_createElement(LazyImage, {
    src: src,
    alt: title,
    className: "w-20 lg:w-full object-contain"
  }), Popup_createElement("span", {
    class: "hidden lg:flex prod__tag--soldout"
  }, soldOut)), Popup_createElement("div", {
    className: "ml-2 lg:ml-0"
  }, Popup_createElement("span", {
    class: "inline-flex lg:hidden prod__tag--soldout-mobile"
  }, soldOut), Popup_createElement("h3", {
    className: "bis-popup__product-title mt-2 lg:mt-6 font-medium text-xl"
  }, title), Popup_createElement("p", null, (variants === null || variants === void 0 ? void 0 : variants.length) > 1 ? `${variant_title}  -  ` : null, priceNode))), Popup_createElement("div", {
    className: "bis-popup__form pt-0 p-4 lg:p-4 lg:w-1/2"
  }, Popup_createElement("h3", {
    className: "font-medium text-2xl mb-2.5"
  }, i18n/* default.tr */.Z.tr('bis_heading')), Popup_createElement("p", {
    className: "mb-2.5 text-color-subtext"
  }, i18n/* default.tr */.Z.tr('bis_desc')), Popup_createElement("form", {
    id: "bis-form",
    on: {
      submit: handleSubmit
    }
  }, Popup_createElement("input", {
    type: "text",
    className: "form-control",
    name: "email",
    required: true,
    placeholder: i18n/* default.tr */.Z.tr('bis_email')
  }), show_name ? Popup_createElement("input", {
    type: "text",
    className: "form-control",
    name: "firstName",
    placeholder: i18n/* default.tr */.Z.tr('bis_name')
  }) : null, show_phone_number ? Popup_createElement("input", {
    type: "text",
    className: "form-control",
    name: "phone",
    placeholder: i18n/* default.tr */.Z.tr('bis_phone')
  }) : null, show_note ? Popup_createElement("textarea", {
    className: "form-control",
    name: "note",
    rows: "4",
    placeholder: i18n/* default.tr */.Z.tr('bis_note')
  }) : null, !show_signup_newsletter ? null : Popup_createElement("label", {
    className: "flex items-center cursor-pointer"
  }, Popup_createElement("input", {
    type: "checkbox",
    name: "saveToApp",
    value: "true"
  }), Popup_createElement("span", {
    className: "ml-2"
  }, i18n/* default.tr */.Z.tr('bis_signup'))), syncWithShopify ? Popup_createElement("input", {
    type: "hidden",
    className: "hidden",
    name: "syncWithShopify",
    value: "true"
  }) : null, saveToSubscriptionList ? Popup_createElement("input", {
    type: "hidden",
    className: "hidden",
    name: "saveToSubscriptionList",
    value: "true"
  }) : null, Popup_createElement("input", {
    type: "hidden",
    className: "hidden",
    name: "acceptsMarketing",
    value: "true"
  }), Popup_createElement("button", {
    type: "submit",
    class: "sf__btn bis-popup__submit sf__btn-primary w-full mt-5"
  }, Popup_createElement(Spinner, null), Popup_createElement("span", null, i18n/* default.tr */.Z.tr('bis_submit'))))));
};
/* harmony default export */ var BIS_Popup = (Popup);
;// CONCATENATED MODULE: ./src/js/components/Modal.jsx
/* provided dependency */ var Modal_createElement = __webpack_require__(6295)["Z"];
function Modal_Modal(_ref) {
  let {
    wrapper_class = ''
  } = _ref;
  return Modal_createElement("div", {
    style: {
      '--tw-bg-opacity': '0.3'
    },
    className: `sf-modal sf-modal__wrapper fixed inset-0 px-5 bg-black flex items-center justify-center transition-opacity opacity-0 duration-200 ease-out ${wrapper_class}`
  }, Modal_createElement("div", {
    className: "sf-modal__content bg-white relative rounded max-h-[90vh]"
  }, Modal_createElement("button", {
    className: "sf-modal__close text-black absolute p-2 bg-white hover:bg-gray-300 rounded-full z-10"
  }, Modal_createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, Modal_createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  }))), Modal_createElement("div", {
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
    (0,defineProperty/* default */.Z)(this, "init", () => {
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
    (0,defineProperty/* default */.Z)(this, "setSizes", function () {
      let sizes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      _this.resetSize();
      _this.sizes = sizes;
      sizes.split(" ").forEach(size => {
        var _this$modalContent, _this$modalContent$cl;
        (_this$modalContent = _this.modalContent) === null || _this$modalContent === void 0 ? void 0 : (_this$modalContent$cl = _this$modalContent.classList) === null || _this$modalContent$cl === void 0 ? void 0 : _this$modalContent$cl.add(size);
      });
    });
    (0,defineProperty/* default */.Z)(this, "setWidth", width => {
      this.modalContent.style.width = width;
    });
    (0,defineProperty/* default */.Z)(this, "resetSize", () => {
      if (this.sizes) {
        this.sizes.split(" ").forEach(size => {
          var _this$modalContent2, _this$modalContent2$c;
          (_this$modalContent2 = this.modalContent) === null || _this$modalContent2 === void 0 ? void 0 : (_this$modalContent2$c = _this$modalContent2.classList) === null || _this$modalContent2$c === void 0 ? void 0 : _this$modalContent2$c.remove(size);
        });
        this.sizes = '';
      }
    });
    (0,defineProperty/* default */.Z)(this, "appendChild", child => {
      var _this$modalContentInn;
      this === null || this === void 0 ? void 0 : (_this$modalContentInn = this.modalContentInner) === null || _this$modalContentInn === void 0 ? void 0 : _this$modalContentInn.appendChild(child);
      this.children = child;
    });
    (0,defineProperty/* default */.Z)(this, "removeChild", () => {
      var _this$children;
      this === null || this === void 0 ? void 0 : (_this$children = this.children) === null || _this$children === void 0 ? void 0 : _this$children.remove();
    });
    (0,defineProperty/* default */.Z)(this, "open", () => {
      document.documentElement.classList.add('prevent-scroll');
      document.body.appendChild(this.modal);
      setTimeout(() => this.modal.classList.add('opacity-100'));
      window.addEventListener("keydown", this.handleKeyDown);
    });
    (0,defineProperty/* default */.Z)(this, "close", e => {
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
    (0,defineProperty/* default */.Z)(this, "handleKeyDown", e => {
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
;// CONCATENATED MODULE: ./src/js/foxkit/plugins/bis.js
/* provided dependency */ var bis_MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var bis_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var MinimogEvents = __webpack_require__(4558)["s0"];
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var bis_i18n = __webpack_require__(7345)["Z"];




class BIS {
  constructor(settings) {
    (0,defineProperty/* default */.Z)(this, "modal", new modal());
    (0,defineProperty/* default */.Z)(this, "appURL", bis_MinimogSettings.foxkitAppURL ? `https://${bis_MinimogSettings.foxkitAppURL}` : '');
    (0,defineProperty/* default */.Z)(this, "shop", window.Shopify.shop);
    (0,defineProperty/* default */.Z)(this, "productId", bis_MinimogSettings.productId);
    (0,defineProperty/* default */.Z)(this, "init", () => {
      var _this$atcButton;
      (_this$atcButton = this.atcButton) === null || _this$atcButton === void 0 ? void 0 : _this$atcButton.after(this.bisButton);
      this.bisButton.addEventListener("click", e => {
        e.preventDefault();
        this.modal.appendChild(bis_createElement(BIS_Popup, {
          settings: this.settings,
          handleSubmit: this.handleSubmit
        }));
        this.modal.setWidth('700px');
        this.modal.setSizes('max-w-[90vw]');
        this.modal.open();
      });
      let current_variant_id = this.currentVariant.id;
      const currentVariant = this.productData.variants.find(v => v.id === current_variant_id);
      this.toggleShowBISButton(currentVariant);
      this.settings.productData.current_variant_id = currentVariant.id;
      MinimogEvents.subscribe(`${this.productId}__VARIANT_CHANGE`, (variant, prodInstance) => {
        this.settings.productData.current_variant_id = variant.id;
        if (!prodInstance.view) {
          const isMainProduct = prodInstance === null || prodInstance === void 0 ? void 0 : prodInstance.closest('.main-product');
          if (isMainProduct) {
            this.toggleShowBISButton(variant);
          }
        }
      });
    });
    (0,defineProperty/* default */.Z)(this, "initSticky", () => {
      this.atcStickyButton.after(this.bisStickyButton);
      this.bisStickyButton.addEventListener("click", e => {
        e.preventDefault();
        this.modal.appendChild(bis_createElement(BIS_Popup, {
          settings: this.settings,
          handleSubmit: this.handleSubmit
        }));
        this.modal.setWidth('700px');
        this.modal.setSizes('max-w-[90vw]');
        this.modal.open();
      });
      let current_variant_id = this.currentVariant.id;
      const currentVariant = this.productData.variants.find(v => v.id === current_variant_id);
      this.toggleShowBISButtonSticky(currentVariant);
      MinimogEvents.subscribe(`${this.productId}__VARIANT_CHANGE`, (variant, prodInstance) => {
        this.settings.productData.current_variant_id = variant.id;
        if (!prodInstance.view) {
          const isMainProduct = prodInstance.closest('.main-product');
          if (isMainProduct) {
            this.toggleShowBISButtonSticky(variant);
          }
        }
      });
    });
    (0,defineProperty/* default */.Z)(this, "toggleShowBISButton", variant => {
      if ((variant === null || variant === void 0 ? void 0 : variant.available) === false) {
        if (this.atcButton) {
          this.atcButton.style.display = 'none';
          this.bisButton.style.display = 'inline-block';
        }
        if (this.dynamicButton) {
          this.dynamicButton.style.display = 'none';
        }
      } else {
        if (this.atcButton) {
          this.bisButton.style.display = 'none';
          this.atcButton.style.removeProperty('display');
        }
        if (this.dynamicButton) {
          this.dynamicButton.style.removeProperty('display');
        }
      }
    });
    (0,defineProperty/* default */.Z)(this, "toggleShowBISButtonSticky", variant => {
      if ((variant === null || variant === void 0 ? void 0 : variant.available) === false) {
        if (this.atcStickyButton) {
          this.atcStickyButton.style.display = 'none';
          this.bisStickyButton.style.display = 'inline-block';
        }
        if (this.stickyDynamicButton) {
          this.stickyDynamicButton.style.display = 'none';
        }
      } else {
        if (this.atcStickyButton) {
          this.bisStickyButton.style.display = 'none';
          this.atcStickyButton.style.removeProperty('display');
        }
        if (this.stickyDynamicButton) {
          this.stickyDynamicButton.style.removeProperty('display');
        }
      }
    });
    (0,defineProperty/* default */.Z)(this, "handleSubmit", e => {
      e.preventDefault();
      const form = e.target;
      const submitButton = form.querySelector('button[type="submit"]');
      const formData = new FormData(form);
      const {
        productData,
        domNodes: {
          error: feedBackNode
        }
      } = this;
      const {
        current_variant_id,
        title,
        id,
        handle,
        images
      } = productData;
      const variant = productData.variants.find(v => v.id === current_variant_id);
      const {
        featured_image,
        title: variant_title
      } = variant;
      formData.set('title', title);
      formData.set('product_id', id);
      formData.set('product_handle', handle);
      formData.set('product_image_url', (featured_image === null || featured_image === void 0 ? void 0 : featured_image.src) || images[0]);
      formData.set('variant_id', current_variant_id);
      formData.set('variant_title', variant_title);
      formData.set('platforms', this.settings.platforms || []);
      this.toggleLoading(submitButton, true);
      fetch(`${this.appURL}/api/public/back-in-stock?shop=${this.shop}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData)
      }).then(r => r.json()).then(res => {
        this.toggleLoading(submitButton, false);
        this.modal.close();
        MinimogTheme.Notification.show({
          target: feedBackNode,
          method: 'appendChild',
          type: res.ok ? 'success' : 'warning',
          message: res.ok ? bis_i18n.tr('bis_thankyou') : res.message || 'Something went wrong! Please try again later.',
          delay: 300
        });
        if (!res.ok) console.error(res.message);
      }).catch(console.error);
    });
    (0,defineProperty/* default */.Z)(this, "toggleLoading", (submitButton, active) => {
      const method = active ? 'add' : 'remove';
      submitButton.classList[method]('sf-spinner-loading');
    });
    this.selectors = {
      error: '.prod__form-error'
    };
    this.container = document.querySelector('.product-template');
    this.settings = settings;
    this.mainProduct = document.querySelector('.main-product__block-buy_buttons product-form');
    this.mainStickyAddToCart = document.querySelector('sticky-atc');
    this.domNodes = queryDomNodes(this.selectors, this.container);
    this.initData();
  }
  async initData() {
    var _this$container, _this$currentVariant;
    const themeProducts = window._themeProducts || {};
    let productData = themeProducts[this.container.dataset.productId];
    this.productUrl = (_this$container = this.container) === null || _this$container === void 0 ? void 0 : _this$container.dataset.productUrl;
    this.productData = Object.assign(await this.getProductJson(), productData);
    const selectedVariantId = this.container.querySelector('[name="id"]').value;
    this.currentVariant = this.productData.variants.find(variant => variant.id === Number(selectedVariantId));
    this.productData.current_variant_id = (_this$currentVariant = this.currentVariant) === null || _this$currentVariant === void 0 ? void 0 : _this$currentVariant.id;
    this.productData.initialVariant = this.currentVariant;
    if (this.mainProduct && this.productData) {
      var _this$mainProduct, _this$mainProduct2;
      this.atcButton = (_this$mainProduct = this.mainProduct) === null || _this$mainProduct === void 0 ? void 0 : _this$mainProduct.querySelector('.add-to-cart');
      this.dynamicButton = (_this$mainProduct2 = this.mainProduct) === null || _this$mainProduct2 === void 0 ? void 0 : _this$mainProduct2.querySelector('.prod__dynamic_checkout');
      this.bisButton = bis_createElement(BIS_NotifyButton, {
        className: 'sf__btn-primary'
      });
      this.bisButton.style.display = 'none';
      this.settings.productData = this.productData;
      this.init();
    }
    if (this.mainStickyAddToCart && this.productData) {
      var _this$mainStickyAddTo, _this$mainStickyAddTo2;
      this.atcStickyButton = (_this$mainStickyAddTo = this.mainStickyAddToCart) === null || _this$mainStickyAddTo === void 0 ? void 0 : _this$mainStickyAddTo.querySelector('.add-to-cart');
      this.stickyDynamicButton = (_this$mainStickyAddTo2 = this.mainStickyAddToCart) === null || _this$mainStickyAddTo2 === void 0 ? void 0 : _this$mainStickyAddTo2.querySelector('.prod__dynamic_checkout');
      this.bisStickyButton = bis_createElement(BIS_NotifyButton, {
        className: 'sf__btn-primary'
      });
      this.bisStickyButton.style.display = 'none';
      this.settings.productData = this.productData;
      this.initSticky();
    }
  }
  getProductJson() {
    return fetch(this.productUrl + ".js").then(function (response) {
      return response.json();
    });
  }
}
window.FoxKit = window.FoxKit || {};
window.FoxKit.BIS = BIS;
}();
/******/ })()
;
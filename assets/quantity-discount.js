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
/* harmony export */   "s0": function() { return /* binding */ MinimogEvents; }
/* harmony export */ });
/* unused harmony exports MinimogStrings, MinimogLibs */
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

/***/ 643:
/***/ (function(module) {

var COMPLETE = 'complete',
  CANCELED = 'canceled';
function raf(task) {
  if ('requestAnimationFrame' in window) {
    return window.requestAnimationFrame(task);
  }
  setTimeout(task, 16);
}
function setElementScroll(element, x, y) {
  Math.max(0, x);
  Math.max(0, y);
  if (element.self === element) {
    element.scrollTo(x, y);
  } else {
    element.scrollLeft = x;
    element.scrollTop = y;
  }
}
function getTargetScrollLocation(scrollSettings, parent) {
  var align = scrollSettings.align,
    target = scrollSettings.target,
    targetPosition = target.getBoundingClientRect(),
    parentPosition,
    x,
    y,
    differenceX,
    differenceY,
    targetWidth,
    targetHeight,
    leftAlign = align && align.left != null ? align.left : 0.5,
    topAlign = align && align.top != null ? align.top : 0.5,
    leftOffset = align && align.leftOffset != null ? align.leftOffset : 0,
    topOffset = align && align.topOffset != null ? align.topOffset : 0,
    leftScalar = leftAlign,
    topScalar = topAlign;
  if (scrollSettings.isWindow(parent)) {
    targetWidth = Math.min(targetPosition.width, parent.innerWidth);
    targetHeight = Math.min(targetPosition.height, parent.innerHeight);
    x = targetPosition.left + parent.pageXOffset - parent.innerWidth * leftScalar + targetWidth * leftScalar;
    y = targetPosition.top + parent.pageYOffset - parent.innerHeight * topScalar + targetHeight * topScalar;
    x -= leftOffset;
    y -= topOffset;
    x = scrollSettings.align.lockX ? parent.pageXOffset : x;
    y = scrollSettings.align.lockY ? parent.pageYOffset : y;
    differenceX = x - parent.pageXOffset;
    differenceY = y - parent.pageYOffset;
  } else {
    targetWidth = targetPosition.width;
    targetHeight = targetPosition.height;
    parentPosition = parent.getBoundingClientRect();
    var offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft);
    var offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
    x = offsetLeft + targetWidth * leftScalar - parent.clientWidth * leftScalar;
    y = offsetTop + targetHeight * topScalar - parent.clientHeight * topScalar;
    x -= leftOffset;
    y -= topOffset;
    x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0);
    y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0);
    x = scrollSettings.align.lockX ? parent.scrollLeft : x;
    y = scrollSettings.align.lockY ? parent.scrollTop : y;
    differenceX = x - parent.scrollLeft;
    differenceY = y - parent.scrollTop;
  }
  return {
    x: x,
    y: y,
    differenceX: differenceX,
    differenceY: differenceY
  };
}
function animate(parent) {
  var scrollSettings = parent._scrollSettings;
  if (!scrollSettings) {
    return;
  }
  var maxSynchronousAlignments = scrollSettings.maxSynchronousAlignments;
  var location = getTargetScrollLocation(scrollSettings, parent),
    time = Date.now() - scrollSettings.startTime,
    timeValue = Math.min(1 / scrollSettings.time * time, 1);
  if (scrollSettings.endIterations >= maxSynchronousAlignments) {
    setElementScroll(parent, location.x, location.y);
    parent._scrollSettings = null;
    return scrollSettings.end(COMPLETE);
  }
  var easeValue = 1 - scrollSettings.ease(timeValue);
  setElementScroll(parent, location.x - location.differenceX * easeValue, location.y - location.differenceY * easeValue);
  if (time >= scrollSettings.time) {
    scrollSettings.endIterations++;
    // Align ancestor synchronously
    scrollSettings.scrollAncestor && animate(scrollSettings.scrollAncestor);
    animate(parent);
    return;
  }
  raf(animate.bind(null, parent));
}
function defaultIsWindow(target) {
  return target.self === target;
}
function transitionScrollTo(target, parent, settings, scrollAncestor, callback) {
  var idle = !parent._scrollSettings,
    lastSettings = parent._scrollSettings,
    now = Date.now(),
    cancelHandler,
    passiveOptions = {
      passive: true
    };
  if (lastSettings) {
    lastSettings.end(CANCELED);
  }
  function end(endType) {
    parent._scrollSettings = null;
    if (parent.parentElement && parent.parentElement._scrollSettings) {
      parent.parentElement._scrollSettings.end(endType);
    }
    if (settings.debug) {
      console.log('Scrolling ended with type', endType, 'for', parent);
    }
    callback(endType);
    if (cancelHandler) {
      parent.removeEventListener('touchstart', cancelHandler, passiveOptions);
      parent.removeEventListener('wheel', cancelHandler, passiveOptions);
    }
  }
  var maxSynchronousAlignments = settings.maxSynchronousAlignments;
  if (maxSynchronousAlignments == null) {
    maxSynchronousAlignments = 3;
  }
  parent._scrollSettings = {
    startTime: now,
    endIterations: 0,
    target: target,
    time: settings.time,
    ease: settings.ease,
    align: settings.align,
    isWindow: settings.isWindow || defaultIsWindow,
    maxSynchronousAlignments: maxSynchronousAlignments,
    end: end,
    scrollAncestor
  };
  if (!('cancellable' in settings) || settings.cancellable) {
    cancelHandler = end.bind(null, CANCELED);
    parent.addEventListener('touchstart', cancelHandler, passiveOptions);
    parent.addEventListener('wheel', cancelHandler, passiveOptions);
  }
  if (idle) {
    animate(parent);
  }
  return cancelHandler;
}
function defaultIsScrollable(element) {
  return 'pageXOffset' in element || (element.scrollHeight !== element.clientHeight || element.scrollWidth !== element.clientWidth) && getComputedStyle(element).overflow !== 'hidden';
}
function defaultValidTarget() {
  return true;
}
function findParentElement(el) {
  if (el.assignedSlot) {
    return findParentElement(el.assignedSlot);
  }
  if (el.parentElement) {
    if (el.parentElement.tagName.toLowerCase() === 'body') {
      return el.parentElement.ownerDocument.defaultView || el.parentElement.ownerDocument.ownerWindow;
    }
    return el.parentElement;
  }
  if (el.getRootNode) {
    var parent = el.getRootNode();
    if (parent.nodeType === 11) {
      return parent.host;
    }
  }
}
module.exports = function (target, settings, callback) {
  if (!target) {
    return;
  }
  if (typeof settings === 'function') {
    callback = settings;
    settings = null;
  }
  if (!settings) {
    settings = {};
  }
  settings.time = isNaN(settings.time) ? 1000 : settings.time;
  settings.ease = settings.ease || function (v) {
    return 1 - Math.pow(1 - v, v / 2);
  };
  settings.align = settings.align || {};
  var parent = findParentElement(target),
    parents = 1;
  function done(endType) {
    parents--;
    if (!parents) {
      callback && callback(endType);
    }
  }
  var validTarget = settings.validTarget || defaultValidTarget;
  var isScrollable = settings.isScrollable;
  if (settings.debug) {
    console.log('About to scroll to', target);
    if (!parent) {
      console.error('Target did not have a parent, is it mounted in the DOM?');
    }
  }
  var scrollingElements = [];
  while (parent) {
    if (settings.debug) {
      console.log('Scrolling parent node', parent);
    }
    if (validTarget(parent, parents) && (isScrollable ? isScrollable(parent, defaultIsScrollable) : defaultIsScrollable(parent))) {
      parents++;
      scrollingElements.push(parent);
    }
    parent = findParentElement(parent);
    if (!parent) {
      done(COMPLETE);
      break;
    }
  }
  return scrollingElements.reduce((cancel, parent, index) => transitionScrollTo(target, parent, settings, scrollingElements[index + 1], done), null);
};

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
// EXTERNAL MODULE: ./node_modules/scroll-into-view/scrollIntoView.js
var scrollIntoView = __webpack_require__(643);
var scrollIntoView_default = /*#__PURE__*/__webpack_require__.n(scrollIntoView);
;// CONCATENATED MODULE: ./src/js/utilities/index.js
/* provided dependency */ var MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var createElement = __webpack_require__(6295)["Z"];



window.__getSectionInstanceByType = type => window.Shopify.theme.sections.instances.find(inst => inst.type === type);
function productFormCheck(form) {
  const fieldSelectors = '[data-theme-fields] [name][required]:not([hidden]):not([type="hidden"])';
  const requiredFields = form.querySelectorAll(fieldSelectors);
  const missingFields = [];
  requiredFields.forEach(field => {
    if (field.type === 'radio') {
      const raidoButtons = form.querySelectorAll(`input[name="${field.name}"]`);
      const selected = Array.from(raidoButtons).some(btn => btn.checked);
      if (!selected) {
        missingFields.push(field);
      }
    } else if (!field.value) {
      missingFields.push(field);
    }
  });
  return missingFields;
}
function utilities_queryDomNodes() {
  let selectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  const domNodes = Object.entries(selectors).reduce((acc, _ref) => {
    var _context$queryMethod;
    let [name, selector] = _ref;
    const findOne = typeof selector === 'string';
    const queryMethod = findOne ? 'querySelector' : 'querySelectorAll';
    const sl = findOne ? selector : selector[0];
    acc[name] = context === null || context === void 0 ? void 0 : (_context$queryMethod = context[queryMethod]) === null || _context$queryMethod === void 0 ? void 0 : _context$queryMethod.call(context, sl);
    if (!findOne && acc[name]) {
      acc[name] = [...acc[name]];
    }
    return acc;
  }, {});
  return domNodes;
}
const utilities_camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, $1 => `_${$1.toLowerCase()}`);
function animateReplace(oldNode, newNode) {
  if (!oldNode || !newNode) {
    return;
  }
  oldNode.classList.add('ar__old-node');
  newNode.classList.add('ar__new-node');
  oldNode.style.opacity = 0;
  oldNode.replaceWith(newNode);
  setTimeout(() => newNode.style.opacity = 1);
}
function isInViewport(elem) {
  const rect = elem.getBoundingClientRect();
  // NOTE: not accuracy in all cases but we only need this
  return rect.top > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
}
function loadStyles() {
  const {
    themeStyleURLs = {}
  } = window;
  Object.values(themeStyleURLs).forEach(style => {
    const {
      url,
      required,
      afterWindowLoaded
    } = style;
    if (url && required) {
      var _window;
      if (!afterWindowLoaded || (_window = window) !== null && _window !== void 0 && _window.__sfWindowLoaded) {
        loadCSS(url);
      } else {
        window.addEventListener("load", () => loadCSS(url));
      }
    }
  });
}
function loadScripts() {
  const {
    themeScriptURLs = {}
  } = window;
  Object.values(themeScriptURLs).forEach(script => {
    const {
      url,
      required,
      afterWindowLoaded
    } = script;
    if (url && required) {
      var _window2;
      if (!afterWindowLoaded || (_window2 = window) !== null && _window2 !== void 0 && _window2.__sfWindowLoaded) {
        loadJS(url);
      } else {
        window.addEventListener("load", () => loadJS(url));
      }
    }
  });
}
function addCustomerFormHandlers() {
  addEventDelegate({
    selector: '.sf-customer__forms',
    handler: (e, form) => {
      if (e.target.classList.contains('sf-customer__reset-password-btn')) {
        form.classList.add('show-recover-password-form');
        return;
      }
      if (e.target.classList.contains('sf-customer__cancel-reset')) {
        form.classList.remove('show-recover-password-form');
        return;
      }
    }
  });
  if (document.querySelector('.sf-customer__recover-form-posted')) {
    var _document$querySelect, _document$querySelect2;
    (_document$querySelect = document.querySelector('.sf-customer__forms')) === null || _document$querySelect === void 0 ? void 0 : (_document$querySelect2 = _document$querySelect.classList) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.add('show-recover-password-form');
  }
}
function getVideoURL(id, host) {
  if (host === 'youtube') {
    return `https://www.youtube.com/watch?v=${id}&gl=true`;
  }
  if (host === 'vimeo') {
    return `https://vimeo.com/${id}`;
  }
  return '';
}
function initTermsCheckbox() {
  addEventDelegate({
    selector: '.agree-terms [name="agree_terms"]',
    event: 'change',
    handler: (e, target) => {
      const button = target.closest('.agree-terms').nextElementSibling;
      if (button && button.hasAttributes('data-terms-action')) {
        if (target.checked) {
          button.removeAttribute('disabled');
        } else {
          button.setAttribute('disabled', true);
        }
      }
    }
  });
}
const scrollToTopTarget = document.querySelector('#scroll-to-top-target');
function scrollToTop(callback) {
  scrollIntoView_default()(scrollToTopTarget, callback);
}
function initScrollTop() {
  const scrollTopButton = document.querySelector('#scroll-to-top-button');
  if (scrollTopButton) {
    scrollTopButton.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', function () {
      const method = window.scrollY > 100 ? 'add' : 'remove';
      scrollTopButton.classList[method]('opacity-100');
    });
  }
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
function addRecentViewedProduct() {
  const cookies = getCookie('sf-recent-viewed-products');
  let products = cookies ? JSON.parse(cookies) : [];
  if (products.indexOf(MinimogSettings.productHandle) === -1) {
    products.unshift(MinimogSettings.productHandle);
    products = products.slice(0, 20);
    setCookie('sf-recent-viewed-products', JSON.stringify(products));
  }
}
const generateDomFromString = value => {
  const d = createElement("div", null);
  d.innerHTML = value;
  return d;
};
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function updateParam(key, value) {
  var {
    location
  } = window;
  var baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.has(key)) {
    if (value !== '' && value !== 'undefined') {
      urlParams.set(key, value);
    }
    if (value === '' || value === 'undefined') {
      urlParams.delete(key);
    }
  } else {
    if (value) urlParams.append(key, value);
  }
  window.history.replaceState({}, "", baseUrl + '?' + urlParams.toString());
  return false;
}
function getParams() {
  let params = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  for (const entry of urlParams.entries()) {
    params[entry[0]] = entry[1];
  }
  return params;
}
const setSwatchesOptions = () => {
  try {
    MinimogSettings._colorSwatches = [];
    MinimogSettings._imageSwatches = [];
    MinimogSettings.product_colors.split(',').filter(Boolean).forEach(colorSwatch => {
      var _value$trim;
      const [key, value] = colorSwatch.split(':');
      MinimogSettings._colorSwatches.push({
        key: key.trim().toLowerCase(),
        value: (value === null || value === void 0 ? void 0 : (_value$trim = value.trim) === null || _value$trim === void 0 ? void 0 : _value$trim.call(value)) || ''
      });
    });
    Object.keys(MinimogSettings).forEach(key => {
      if (key.includes('filter_color') && !key.includes('.png')) {
        if (MinimogSettings[`${key}.png`]) {
          MinimogSettings._imageSwatches.push({
            key: MinimogSettings[key].toLowerCase(),
            value: MinimogSettings[`${key}.png`]
          });
        }
      }
    });
  } catch (e) {
    console.error('Failed to convert color/image swatch structure!', e);
  }
};
const refreshProductReview = () => {
  if (typeof SMARTIFYAPPS !== 'undefined' && SMARTIFYAPPS.rv.installed) {
    SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();
  }
  if (typeof Yotpo !== 'undefined' && typeof Yotpo.API === 'function') {
    const yotpoApi = new Yotpo.API(yotpo);
    yotpoApi === null || yotpoApi === void 0 ? void 0 : yotpoApi.refreshWidgets();
  }
};
const utilities_formatUrl = (pageType, handle, query) => {
  let url;
  const {
    routes
  } = MinimogSettings;
  const root = routes.root.endsWith('/') ? '' : routes.root;
  url = `${root}/${pageType}/${handle}`;
  if (query) url += `?${query}`;
  return url;
};
function runHelpers() {
  try {
    loadScripts();
    loadStyles();
    ////////////////////
    setSwatchesOptions();
    initTermsCheckbox();
    initLocalization();
    addCustomerFormHandlers();
    initScrollTop();
  } catch (err) {
    console.error('Failed to run helpers.', err);
  }
}
window.MinimogLibs.getVideoURL = getVideoURL;
window.MinimogLibs.scrollToTop = scrollToTop;
;// CONCATENATED MODULE: ./src/js/components/QuantityDiscount.jsx
/* provided dependency */ var QuantityDiscount_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var i18n = __webpack_require__(7345)["Z"];
/* provided dependency */ var QuantityDiscount_MinimogSettings = __webpack_require__(4558)["GQ"];
function QuantityUpsell(_ref) {
  var _product$variants;
  let {
    settings,
    product,
    selectedVariant
  } = _ref;
  const {
    offer_heading,
    discounts
  } = settings;
  const variant = (product === null || product === void 0 ? void 0 : (_product$variants = product.variants) === null || _product$variants === void 0 ? void 0 : _product$variants.find(v => v.id === Number(selectedVariant))) || (product === null || product === void 0 ? void 0 : product.variants[0]);
  return QuantityDiscount_createElement("div", {
    className: "f-quantity-upsell"
  }, QuantityDiscount_createElement("h3", null, offer_heading), QuantityDiscount_createElement("div", {
    className: `f-quantity-upsell__products ${!variant.available ? 'soldout' : ''}`
  }, discounts.map(discount => {
    const discountTitle = QuantityDiscount_createElement("h4", null);
    discountTitle.innerHTML = formatTitle(discount);
    return QuantityDiscount_createElement("div", {
      className: 'f-quantity-upsell__product'
    }, QuantityDiscount_createElement("div", {
      className: "f-quantity-upsell__product-info"
    }, discountTitle, QuantityDiscount_createElement("p", null, i18n.tr('qty_discount_note'))), QuantityDiscount_createElement("button", {
      dataSet: {
        quantity: discount.min_qty
      },
      className: 'sf__btn sf__btn btn-add sf__btn-secondary'
    }, QuantityDiscount_createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "15",
      height: "11",
      fill: "none",
      viewBox: "0 0 15 11"
    }, QuantityDiscount_createElement("path", {
      fill: "#868686",
      d: "M12.7734.306641c.1563-.15625.3223-.15625.4981 0l.8203.849609c.1758.15625.1758.32227 0 .49805l-8.78907 8.7891c-.15625.1562-.32226.1562-.49804 0L.908203 6.51758c-.175781-.15625-.175781-.32227 0-.49805l.820317-.82031c.17578-.17578.34179-.17578.49804 0l2.8418 2.8418L12.7734.306641z"
    })), QuantityDiscount_createElement("svg", {
      className: "animate-spin medium",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none"
    }, QuantityDiscount_createElement("circle", {
      className: "opacity-25",
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "4"
    }), QuantityDiscount_createElement("path", {
      className: "opacity-75",
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    })), QuantityDiscount_createElement("span", null, i18n.tr('add_button'))));
  })));
}
const formatTitle = discount => {
  var _window$Shopify, _window$Shopify$curre;
  const {
    type,
    value
  } = discount;
  const {
    money_format
  } = QuantityDiscount_MinimogSettings;
  const rate = Number(((_window$Shopify = window.Shopify) === null || _window$Shopify === void 0 ? void 0 : (_window$Shopify$curre = _window$Shopify.currency) === null || _window$Shopify$curre === void 0 ? void 0 : _window$Shopify$curre.rate) || 1);
  const discountValue = type === 'PERCENTAGE' ? `${value}%` : formatMoney(value * 100 * rate, money_format);
  return i18n.tr('qty_discount_title', {
    'item_count': discount === null || discount === void 0 ? void 0 : discount.min_qty,
    'discount_value': discountValue
  });
};
;// CONCATENATED MODULE: ./src/js/foxkit/helpers.js
/* provided dependency */ var helpers_MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var helpers_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var helpers_i18n = __webpack_require__(7345)["Z"];
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];
if (!String.prototype.capitalize) {
  String.prototype.capitalize = function () {
    var _this$, _this$$toUpperCase;
    return this.replace(this[0], (_this$ = this[0]) === null || _this$ === void 0 ? void 0 : (_this$$toUpperCase = _this$.toUpperCase) === null || _this$$toUpperCase === void 0 ? void 0 : _this$$toUpperCase.call(_this$));
  };
}
function handleSubscribe(data) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      data: JSON.stringify(data)
    })
  };
  return new Promise((resolve, reject) => {
    fetch(`${window.FoxKit.appURL}/api/public/subscribe?shop=${window.Shopify.shop}`, requestOptions).then(response => response.json()).then(resolve).catch(reject);
  });
}
async function applyDiscountCode(code) {
  if (code) {
    fetch(`${helpers_MinimogSettings.shop_domain}/discount/${code}`).then(() => console.log(`[Foxkit] - Discount applied. Code: ${code}`)).catch(console.error);
  }
}
function copyToClipboard(value, button) {
  navigator.clipboard.writeText(value);
  if (button) {
    button.classList.add('copied');
    button.innerText = window.MinimogStrings.copied || 'Copied';
  }
}
function insertAfter(newNode, referenceNode) {
  if (!referenceNode) return;
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function productUrlByHandle(handle) {
  return `${Shopify.routes.root}products/${handle}`;
}
function addToCart() {
  let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise((resolve, reject) => {
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
      resolve(data);
      const addedItem = data === null || data === void 0 ? void 0 : data.items[0];
      addedItem.source = 'quantity-upsell';
      window.Shopify.onItemAdded(addedItem);
    }).catch(reject);
  });
}
function getDiscountSummary(discount) {
  var _window$Shopify, _window$Shopify$curre;
  const discountText = helpers_createElement("span", null);
  const discountValue = (discount === null || discount === void 0 ? void 0 : discount.type) === 'PERCENTAGE' ? `${discount === null || discount === void 0 ? void 0 : discount.value}%` : formatMoney((discount === null || discount === void 0 ? void 0 : discount.value) * 100 * Number(((_window$Shopify = window.Shopify) === null || _window$Shopify === void 0 ? void 0 : (_window$Shopify$curre = _window$Shopify.currency) === null || _window$Shopify$curre === void 0 ? void 0 : _window$Shopify$curre.rate) || 1), helpers_MinimogSettings.money_format);
  discountText.innerHTML = helpers_i18n.tr('discount_summary', {
    'discount_value': discountValue
  });
  return discountText;
}
function lightOrDark(color) {
  var r, g, b, hsp;
  if (color.match(/^rgb/)) {
    [, r, g, b] = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
  } else {
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
    r = color >> 16;
    g = color >> 8 & 255;
    b = color & 255;
  }
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  return hsp > 127.5 ? 'light' : 'dark';
}
const updateCartAttributes = offer => {
  return new Promise((resolve, reject) => {
    try {
      var _MinimogTheme, _MinimogTheme$Cart;
      if (!offer || !(offer !== null && offer !== void 0 && offer.offer_id)) return;
      const {
        attributes = {}
      } = ((_MinimogTheme = MinimogTheme) === null || _MinimogTheme === void 0 ? void 0 : (_MinimogTheme$Cart = _MinimogTheme.Cart) === null || _MinimogTheme$Cart === void 0 ? void 0 : _MinimogTheme$Cart.cart) || {};
      let {
        _foxCartDiscounts
      } = attributes;
      let newAttributes = [];
      if (_foxCartDiscounts) {
        _foxCartDiscounts = JSON.parse(_foxCartDiscounts);
        const found = _foxCartDiscounts.find(d => JSON.parse(d).product_id === offer.product_id);
        if (found) return;
        newAttributes = [..._foxCartDiscounts];
      }
      newAttributes.push(JSON.stringify(offer));
      fetchJSON('/cart/update.js', {
        ...getRequestDefaultConfigs(),
        method: 'POST',
        body: JSON.stringify({
          attributes: {
            _foxCartDiscounts: newAttributes
          }
        })
      }).then(cart => {
        console.info('Cart attributes updated!. New cart:', cart.attributes);
        window.Shopify.onCartUpdate();
        resolve(true);
      }).catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};
const isMobile = () => {
  let check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
// EXTERNAL MODULE: ./src/js/utilities/events.js
var events = __webpack_require__(8971);
;// CONCATENATED MODULE: ./src/js/utilities/product-fns.js
/* provided dependency */ var product_fns_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var product_fns_MinimogTheme = __webpack_require__(4558)["LE"];

const themeProducts = window._themeProducts || {};
const fetchProductByHandle = async handle => {
  const url = utilities_formatUrl('products', handle + '.js');
  const product = await fetchJsonCache(url).catch(console.error);
  if (product) {
    themeProducts[product.id] = product;
    return product;
  }
  return false;
};
const getProductData = async _ref => {
  let {
    productId,
    productHandle
  } = _ref;
  let productData = themeProducts[productId];
  if (!productData) {
    productData = await fetchProductByHandle(productHandle).catch(console.error);
  }
  if (productData) {
    var _productData, _productData2;
    productData.has_only_default_variant = ((_productData = productData) === null || _productData === void 0 ? void 0 : _productData.has_only_default_variant) || productHasOnlyDefaultVariant((_productData2 = productData) === null || _productData2 === void 0 ? void 0 : _productData2.options);
  }
  return Object.assign({}, productData);
};
const getProductJSON = async handle => {
  const url = formatUrl('products', handle, 'section_id=product-json');
  const html = await fetchCache(url);
  if (html && !/^<!doctype html>/.test(html)) {
    const node = product_fns_createElement("div", null);
    node.innerHTML = html;
    const productJSONNode = node.querySelector('script.product-json');
    if (productJSONNode) {
      const data = JSON.parse(productJSONNode.innerText);
      if (data) {
        const {
          dataset
        } = productJSONNode;
        Object.entries(dataset).forEach(_ref2 => {
          let [k, v] = _ref2;
          return data[camelCaseToSnakeCase(k)] = ['true', 'false'].indexOf(v) + 1 ? v === "true" : v;
        });
        const selectedVariantNode = node.querySelector('script.selected-variant-json');
        if (selectedVariantNode) {
          data.selected_variant = JSON.parse(selectedVariantNode.innerText);
        }
        const selectedOrFirstAvailableVariantNode = node.querySelector('script.selected-or-first-available-variant-json');
        if (selectedOrFirstAvailableVariantNode) {
          data.selected_or_first_available_variant = JSON.parse(selectedOrFirstAvailableVariantNode.innerText);
        }
        return data;
      }
    }
  }
  return null;
};
const getProductsJSON = async handles => {
  const productData = {};
  const promises = handles.map(async hdl => {
    productData[hdl] = await getProductJSON(hdl);
  });
  await Promise.all(promises);
  return handles.map(hdl => productData[hdl]);
};
const productHasOnlyDefaultVariant = prodOptions => {
  if (Array.isArray(prodOptions) && prodOptions.length === 1) {
    var _firstOption$values;
    const firstOption = prodOptions[0];
    if ((firstOption === null || firstOption === void 0 ? void 0 : firstOption.name) === "Title" && (firstOption === null || firstOption === void 0 ? void 0 : (_firstOption$values = firstOption.values) === null || _firstOption$values === void 0 ? void 0 : _firstOption$values.join()) === "Default Title") {
      return true;
    }
  }
  return false;
};
const getProductInstances = query => {
  let fieldSearch = 'id';
  if (typeof query === "string") {
    fieldSearch = 'handle';
  }
  return product_fns_MinimogTheme.Products.productInstances.filter(pro => {
    var _pro$productData;
    return ((_pro$productData = pro.productData) === null || _pro$productData === void 0 ? void 0 : _pro$productData[fieldSearch]) === query;
  });
};
window._getProductInstances = getProductInstances;
const isValidColor = color => {
  const otpNode = new Option();
  otpNode.style.color = color.replace(/\s/g, '').toLowerCase();
  return otpNode.style.color === color;
};
const getOptionValueFromOptionNode = optNode => {
  if (optNode.type === 'checkbox') {
    return optNode.value;
  }
  if (optNode.tagName === 'OPTION') {
    const select = optNode.closest('select');
    return select.value;
  }
  return optNode.innerText.trim();
};
;// CONCATENATED MODULE: ./src/js/modules/quantity-discount.js
/* provided dependency */ var quantity_discount_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var MinimogEvents = __webpack_require__(4558)["s0"];
/* provided dependency */ var quantity_discount_MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var quantity_discount_MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var quantity_discount_i18n = __webpack_require__(7345)["Z"];






class QuantityDiscount {
  constructor(settings) {
    var _this$productForm, _this$productForm$dat;
    (0,defineProperty/* default */.Z)(this, "selectors", {
      productForm: '.f-product-form',
      mainATC: 'form.main-product button.add-to-cart[name="add"]',
      hook: '.quantity-discount-hook',
      productList: '.f-quantity-upsell__products',
      buttons: ['.btn-add'],
      formError: '.prod__form-error',
      productWrapper: '.product-template'
    });
    (0,defineProperty/* default */.Z)(this, "classes", {
      adding: 'adding',
      loading: 'sf-spinner-loading'
    });
    (0,defineProperty/* default */.Z)(this, "variantId", null);
    (0,defineProperty/* default */.Z)(this, "init", async () => {
      if (!this.productForm) return;
      this.productData = await getProductData(this.productWrapper.dataset);
      this.variantId = this.productForm.querySelector(`[name="id"]`).value;
      this.component = quantity_discount_createElement(QuantityUpsell, {
        settings: this.settings,
        product: this.productData,
        selectedVariant: this.variantId
      });
      this.domNodes.hook.appendChild(this.component);
      this.domNodes = queryDomNodes(this.selectors);
      (0,events/* addEventDelegate */.X)({
        selector: '.btn-add',
        context: this.domNodes.productList,
        handler: (e, addButton) => {
          e.preventDefault();
          const missing = productFormCheck(this.productForm);
          if (missing.length > 0) {
            const {
              mainATC
            } = this.domNodes;
            mainATC.click();
          } else {
            this.toggleSpinner(addButton, true);
            this.addItemsToCart(addButton);
          }
        }
      });
      this.updateButtonStatus();
      this.listenEvents();
    });
    (0,defineProperty/* default */.Z)(this, "listenEvents", () => {
      MinimogEvents.subscribe('ON_CART_UPDATE', this.updateButtonStatus);
      MinimogEvents.subscribe(`${this.productId}__VARIANT_CHANGE`, (variant, prodInstance) => {
        if (!prodInstance.view) {
          var _prodInstance$closest;
          const isMainProduct = (_prodInstance$closest = prodInstance.closest('.product-form')) === null || _prodInstance$closest === void 0 ? void 0 : _prodInstance$closest.classList.contains('main-product');
          if (isMainProduct) {
            if (variant !== null && variant !== void 0 && variant.available) {
              this.variantId = variant.id;
              this.domNodes.productList.classList.remove('soldout');
            } else {
              this.domNodes.productList.classList.add('soldout');
            }
          }
        }
      });
      if (quantity_discount_MinimogSettings.use_ajax_atc) {
        MinimogEvents.subscribe('ON_ITEM_ADDED', this.updateCartAttributes);
      } else {
        console.info('AJAX ATC is disabled, Added a click event on main ATC button to handle Quantity Discount Offer');
        const {
          mainATC,
          productForm
        } = this.domNodes;
        if (mainATC) {
          const submitProductForm = () => {
            if (productForm.requestSubmit && typeof productForm.requestSubmit === "function") {
              productForm.requestSubmit();
            } else {
              productForm.submit();
            }
          };
          mainATC.addEventListener('click', e => {
            const missing = productFormCheck(this.productForm);
            if (!missing.length) {
              e.preventDefault();
              this.updateCartAttributes(true).catch(console.error).finally(submitProductForm);
            }
          }, true);
        }
      }
    });
    (0,defineProperty/* default */.Z)(this, "updateCartAttributes", async addedItem => {
      if (addedItem) {
        var _this$settings;
        await updateCartAttributes({
          offer_id: (_this$settings = this.settings) === null || _this$settings === void 0 ? void 0 : _this$settings._id,
          plugin: 'QuantityDiscount',
          product_id: this.productId
        });
      }
    });
    // TODO: should add to cart by form to get all custom field values
    (0,defineProperty/* default */.Z)(this, "addItemsToCart", async button => {
      const qty = button.dataset.quantity;
      const quantity = this.getQuantityToAdd(qty);
      const res = await addToCart({
        items: [{
          id: this.variantId,
          quantity
        }]
      }).catch(console.error).finally(() => {
        button.blur();
        this.toggleSpinner(button, false);
        if (!quantity_discount_MinimogSettings.use_ajax_atc) {
          var _MinimogSettings$rout;
          window.location.href = ((_MinimogSettings$rout = quantity_discount_MinimogSettings.routes) === null || _MinimogSettings$rout === void 0 ? void 0 : _MinimogSettings$rout.cart) || '/cart';
        }
      });
      if ((res === null || res === void 0 ? void 0 : res.status) === 422) {
        var _this$domNodes;
        return quantity_discount_MinimogTheme.Notification.show({
          target: this === null || this === void 0 ? void 0 : (_this$domNodes = this.domNodes) === null || _this$domNodes === void 0 ? void 0 : _this$domNodes.formError,
          method: 'appendChild',
          type: 'warning',
          message: (res === null || res === void 0 ? void 0 : res.description) || "Unprocessable Entity"
        });
      }
      await this.updateCartAttributes(true);
    });
    (0,defineProperty/* default */.Z)(this, "getQuantityToAdd", quantity => {
      var _MinimogTheme, _MinimogTheme$Cart;
      const {
        items = []
      } = ((_MinimogTheme = quantity_discount_MinimogTheme) === null || _MinimogTheme === void 0 ? void 0 : (_MinimogTheme$Cart = _MinimogTheme.Cart) === null || _MinimogTheme$Cart === void 0 ? void 0 : _MinimogTheme$Cart.cart) || {};
      let totalAdded = 0;
      items.forEach(_ref => {
        let {
          product_id,
          quantity
        } = _ref;
        return product_id === this.productId && (totalAdded += quantity);
      });
      return quantity > totalAdded ? quantity - totalAdded : 0;
    });
    (0,defineProperty/* default */.Z)(this, "getQuantityAdded", cart => {
      var _MinimogTheme2, _MinimogTheme2$Cart, _MinimogTheme2$Cart$c;
      const items = cart ? cart.items : (_MinimogTheme2 = quantity_discount_MinimogTheme) === null || _MinimogTheme2 === void 0 ? void 0 : (_MinimogTheme2$Cart = _MinimogTheme2.Cart) === null || _MinimogTheme2$Cart === void 0 ? void 0 : (_MinimogTheme2$Cart$c = _MinimogTheme2$Cart.cart) === null || _MinimogTheme2$Cart$c === void 0 ? void 0 : _MinimogTheme2$Cart$c.items;
      let totalAdded = 0;
      items.length && items.forEach(_ref2 => {
        let {
          product_id,
          quantity
        } = _ref2;
        return product_id === this.productId && (totalAdded += quantity);
      });
      return totalAdded;
    });
    (0,defineProperty/* default */.Z)(this, "updateButtonStatus", cart => {
      var _this$settings2, _this$settings2$disco;
      this.totalAdded = this.getQuantityAdded(cart);
      (_this$settings2 = this.settings) === null || _this$settings2 === void 0 ? void 0 : (_this$settings2$disco = _this$settings2.discounts) === null || _this$settings2$disco === void 0 ? void 0 : _this$settings2$disco.forEach((_ref3, index) => {
        let {
          min_qty
        } = _ref3;
        const addButton = this.domNodes.buttons[index];
        if (this.totalAdded >= min_qty) {
          addButton.querySelector('span').textContent = quantity_discount_i18n.tr('added_button');
          addButton.classList.add('added');
        } else {
          addButton.querySelector('span').textContent = quantity_discount_i18n.tr('add_button');
          addButton.classList.remove('added');
        }
      });
    });
    (0,defineProperty/* default */.Z)(this, "toggleSpinner", (target, status) => {
      var _this$domNodes$produc;
      const method = status ? 'add' : 'remove';
      (_this$domNodes$produc = this.domNodes.productList) === null || _this$domNodes$produc === void 0 ? void 0 : _this$domNodes$produc.classList[method](this.classes.adding);
      target.classList[method](this.classes.loading);
    });
    this.settings = settings;
    this.domNodes = queryDomNodes(this.selectors);
    this.productForm = this.domNodes.productForm;
    this.productWrapper = this.domNodes.productWrapper;
    this.productId = Number((_this$productForm = this.productForm) === null || _this$productForm === void 0 ? void 0 : (_this$productForm$dat = _this$productForm.dataset) === null || _this$productForm$dat === void 0 ? void 0 : _this$productForm$dat.productId);
    this.init();
  }
}
window.FoxKit = window.FoxKit || {};
window.FoxKit.QuantityDiscount = QuantityDiscount;
}();
/******/ })()
;
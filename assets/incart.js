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
/* harmony export */   "gM": function() { return /* binding */ MinimogLibs; },
/* harmony export */   "rZ": function() { return /* binding */ MinimogStrings; },
/* harmony export */   "s0": function() { return /* binding */ MinimogEvents; }
/* harmony export */ });
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

/***/ 3578:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var QueryHandler = __webpack_require__(3745);
var each = (__webpack_require__(2178).each);

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
  this.query = query;
  this.isUnconditional = isUnconditional;
  this.handlers = [];
  this.mql = window.matchMedia(query);
  var self = this;
  this.listener = function (mql) {
    // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
    self.mql = mql.currentTarget || mql;
    self.assess();
  };
  this.mql.addListener(this.listener);
}
MediaQuery.prototype = {
  constuctor: MediaQuery,
  /**
   * add a handler for this query, triggering if already active
   *
   * @param {object} handler
   * @param {function} handler.match callback for when query is activated
   * @param {function} [handler.unmatch] callback for when query is deactivated
   * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
   * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
   */
  addHandler: function (handler) {
    var qh = new QueryHandler(handler);
    this.handlers.push(qh);
    this.matches() && qh.on();
  },
  /**
   * removes the given handler from the collection, and calls it's destroy methods
   *
   * @param {object || function} handler the handler to remove
   */
  removeHandler: function (handler) {
    var handlers = this.handlers;
    each(handlers, function (h, i) {
      if (h.equals(handler)) {
        h.destroy();
        return !handlers.splice(i, 1); //remove from array and exit each early
      }
    });
  },

  /**
   * Determine whether the media query should be considered a match
   *
   * @return {Boolean} true if media query can be considered a match, false otherwise
   */
  matches: function () {
    return this.mql.matches || this.isUnconditional;
  },
  /**
   * Clears all handlers and unbinds events
   */
  clear: function () {
    each(this.handlers, function (handler) {
      handler.destroy();
    });
    this.mql.removeListener(this.listener);
    this.handlers.length = 0; //clear array
  },

  /*
      * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
      */
  assess: function () {
    var action = this.matches() ? 'on' : 'off';
    each(this.handlers, function (handler) {
      handler[action]();
    });
  }
};
module.exports = MediaQuery;

/***/ }),

/***/ 6779:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MediaQuery = __webpack_require__(3578);
var Util = __webpack_require__(2178);
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch() {
  if (!window.matchMedia) {
    throw new Error('matchMedia not present, legacy browsers require a polyfill');
  }
  this.queries = {};
  this.browserIsIncapable = !window.matchMedia('only all').matches;
}
MediaQueryDispatch.prototype = {
  constructor: MediaQueryDispatch,
  /**
   * Registers a handler for the given media query
   *
   * @param {string} q the media query
   * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
   * @param {function} options.match fired when query matched
   * @param {function} [options.unmatch] fired when a query is no longer matched
   * @param {function} [options.setup] fired when handler first triggered
   * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
   * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
   */
  register: function (q, options, shouldDegrade) {
    var queries = this.queries,
      isUnconditional = shouldDegrade && this.browserIsIncapable;
    if (!queries[q]) {
      queries[q] = new MediaQuery(q, isUnconditional);
    }

    //normalise to object in an array
    if (isFunction(options)) {
      options = {
        match: options
      };
    }
    if (!isArray(options)) {
      options = [options];
    }
    each(options, function (handler) {
      if (isFunction(handler)) {
        handler = {
          match: handler
        };
      }
      queries[q].addHandler(handler);
    });
    return this;
  },
  /**
   * unregisters a query and all it's handlers, or a specific handler for a query
   *
   * @param {string} q the media query to target
   * @param {object || function} [handler] specific handler to unregister
   */
  unregister: function (q, handler) {
    var query = this.queries[q];
    if (query) {
      if (handler) {
        query.removeHandler(handler);
      } else {
        query.clear();
        delete this.queries[q];
      }
    }
    return this;
  }
};
module.exports = MediaQueryDispatch;

/***/ }),

/***/ 3745:
/***/ (function(module) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
  this.options = options;
  !options.deferSetup && this.setup();
}
QueryHandler.prototype = {
  constructor: QueryHandler,
  /**
   * coordinates setup of the handler
   *
   * @function
   */
  setup: function () {
    if (this.options.setup) {
      this.options.setup();
    }
    this.initialised = true;
  },
  /**
   * coordinates setup and triggering of the handler
   *
   * @function
   */
  on: function () {
    !this.initialised && this.setup();
    this.options.match && this.options.match();
  },
  /**
   * coordinates the unmatch event for the handler
   *
   * @function
   */
  off: function () {
    this.options.unmatch && this.options.unmatch();
  },
  /**
   * called when a handler is to be destroyed.
   * delegates to the destroy or unmatch callbacks, depending on availability.
   *
   * @function
   */
  destroy: function () {
    this.options.destroy ? this.options.destroy() : this.off();
  },
  /**
   * determines equality by reference.
   * if object is supplied compare options, if function, compare match callback
   *
   * @function
   * @param {object || function} [target] the target for comparison
   */
  equals: function (target) {
    return this.options === target || this.options.match === target;
  }
};
module.exports = QueryHandler;

/***/ }),

/***/ 2178:
/***/ (function(module) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
  var i = 0,
    length = collection.length,
    cont;
  for (i; i < length; i++) {
    cont = fn(collection[i], i);
    if (cont === false) {
      break; //allow early exit
    }
  }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
  return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
  return typeof target === 'function';
}
module.exports = {
  isFunction: isFunction,
  isArray: isArray,
  each: each
};

/***/ }),

/***/ 1179:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(6779);
module.exports = new MediaQueryDispatch();

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
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-images/images.js
/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * https://github.com/Shopify/slate.git.
 *
 */

/**
 * Preloads an image in memory and uses the browsers cache to store it until needed.
 *
 * @param {Array} images - A list of image urls
 * @param {String} size - A shopify image size attribute
 */

function preload(images, size) {
  if (typeof images === 'string') {
    images = [images];
  }
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    loadImage(getSizedImageUrl(image, size));
  }
}

/**
 * Loads and caches an image in the browsers cache.
 * @param {string} path - An image url
 */
function loadImage(path) {
  new Image().src = path;
}

/**
 * Find the Shopify image attribute size
 *
 * @param {string} src
 * @returns {null}
 */
function imageSize(src) {
  const match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
  if (match) {
    return match[1];
  } else {
    return null;
  }
}

/**
 * Adds a Shopify size attribute to a URL
 *
 * @param src
 * @param size
 * @returns {*}
 */
function getSizedImageUrl(src, size) {
  if (size === null) {
    return src;
  }
  if (size === 'master') {
    return removeProtocol(src);
  }
  const match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
  if (match) {
    const prefix = src.split(match[0]);
    const suffix = match[0];
    return removeProtocol(`${prefix[0]}_${size}${suffix}`);
  } else {
    return null;
  }
}
function removeProtocol(path) {
  return path.replace(/http(s)?:/, '');
}
;// CONCATENATED MODULE: ./src/js/foxkit/helpers.js
/* provided dependency */ var MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var i18n = __webpack_require__(7345)["Z"];
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
    fetch(`${MinimogSettings.shop_domain}/discount/${code}`).then(() => console.log(`[Foxkit] - Discount applied. Code: ${code}`)).catch(console.error);
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
  const discountText = createElement("span", null);
  const discountValue = (discount === null || discount === void 0 ? void 0 : discount.type) === 'PERCENTAGE' ? `${discount === null || discount === void 0 ? void 0 : discount.value}%` : formatMoney((discount === null || discount === void 0 ? void 0 : discount.value) * 100 * Number(((_window$Shopify = window.Shopify) === null || _window$Shopify === void 0 ? void 0 : (_window$Shopify$curre = _window$Shopify.currency) === null || _window$Shopify$curre === void 0 ? void 0 : _window$Shopify$curre.rate) || 1), MinimogSettings.money_format);
  discountText.innerHTML = i18n.tr('discount_summary', {
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
;// CONCATENATED MODULE: ./src/js/components/InCartUpsell.jsx
/* provided dependency */ var InCartUpsell_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var InCartUpsell_i18n = __webpack_require__(7345)["Z"];
/* provided dependency */ var InCartUpsell_MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var MinimogStrings = __webpack_require__(4558)["rZ"];


function InCartUpSell(_ref) {
  let {
    recommended_products,
    settings,
    product
  } = _ref;
  const {
    discount,
    active_discount
  } = settings;
  if (!recommended_products.length) return null;
  return InCartUpsell_createElement("div", {
    className: `f-incart`
  }, InCartUpsell_createElement("h3", {
    className: 'f-incart__title'
  }, InCartUpsell_i18n.tr('incart_title', {
    'product_title': product === null || product === void 0 ? void 0 : product.product_title
  })), active_discount ? InCartUpsell_createElement("div", {
    className: 'f-upsell__discount'
  }, InCartUpsell_createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "19",
    fill: "none",
    viewBox: "0 0 18 19"
  }, InCartUpsell_createElement("path", {
    fill: "#DA3F3F",
    d: "M17.4375 7.49219C17.8125 8.00781 18 8.59375 18 9.25s-.1875 1.2539-.5625 1.793c-.375.5156-.8555.8789-1.4414 1.0898.2578.5625.3281 1.1719.2109 1.8281-.0937.6329-.375 1.1836-.8437 1.6524-.4688.4687-1.0195.75-1.6524.8437-.6328.1172-1.2421.0469-1.8281-.2109-.1406.3984-.3516.7383-.6328 1.0195-.2812.3047-.6211.5391-1.0195.7032-.37503.1874-.78519.2812-1.2305.2812-.65625 0-1.25391-.1875-1.79297-.5625-.51562-.375-.87891-.8555-1.08984-1.4414-.58594.2578-1.19531.3281-1.82813.2109-.63281-.0937-1.18359-.375-1.65234-.8437-.46875-.4688-.76172-1.0195-.87891-1.6524-.09375-.6562-.01172-1.2656.2461-1.8281C1.41797 11.9219.9375 11.5586.5625 11.043.1875 10.5039 0 9.90625 0 9.25s.1875-1.24219.5625-1.75781c.375-.53906.85547-.91407 1.44141-1.125-.25782-.5625-.33985-1.16016-.2461-1.79297.11719-.65625.41016-1.21875.87891-1.6875.46875-.46875 1.01953-.75 1.65234-.84375.65625-.11719 1.26563-.04688 1.82813.21094.21093-.58594.57422-1.06641 1.08984-1.44141C7.74609.4375 8.34375.25 9 .25s1.2422.1875 1.7578.5625c.5391.375.9141.85547 1.125 1.44141.5625-.25782 1.1602-.32813 1.793-.21094.6562.09375 1.2187.375 1.6875.84375.4687.46875.75 1.03125.8437 1.6875.1172.63281.0469 1.23047-.2109 1.79297.5859.21093 1.0664.58594 1.4414 1.125zM7.52344 6.22656C7.3125 5.99219 7.05469 5.875 6.75 5.875s-.57422.11719-.80859.35156C5.73047 6.4375 5.625 6.69531 5.625 7s.10547.57422.31641.80859c.23437.21094.5039.31641.80859.31641s.5625-.10547.77344-.31641C7.75781 7.57422 7.875 7.30469 7.875 7s-.11719-.5625-.35156-.77344zm-.35156 6.04684l4.85152-4.85152c.2578-.25782.2578-.51563 0-.77344l-.4218-.42188c-.2578-.25781-.5157-.25781-.7735 0L5.97656 11.0781c-.25781.2578-.25781.5157 0 .7735l.42188.4218c.25781.2578.51562.2578.77344 0zm3.26952.0352c.2344.2109.5039.3164.8086.3164.3047 0 .5625-.1055.7734-.3164.2344-.2344.3516-.5039.3516-.8086 0-.3047-.1172-.5625-.3516-.7734-.2109-.2344-.4687-.3516-.7734-.3516-.3047 0-.5742.1172-.8086.3516-.2109.2109-.3164.4687-.3164.7734 0 .3047.1055.5742.3164.8086z"
  })), getDiscountSummary(discount)) : '', InCartUpsell_createElement("div", {
    className: "f-incart__products"
  }, recommended_products.map(product => {
    var _product$variants;
    if (!product) return false;
    const priceNode = InCartUpsell_createElement("div", {
      className: "f-incart__product-prices prod__price"
    });
    const {
      price_max,
      price_min,
      available
    } = product;
    if (price_max === price_min) {
      priceNode.innerHTML = formatMoney(price_max, InCartUpsell_MinimogSettings.money_format);
    } else {
      priceNode.innerHTML = `from ${formatMoney(price_min, InCartUpsell_MinimogSettings.money_format)}`;
    }
    console.log(product, 'selected_or_first_available_variant');
    const selectedVariant = product.selected_or_first_available_variant;
    const hasOnlyDefaultVariant = product.has_only_default_variant && selectedVariant.title.toLowerCase() === 'default title';
    return InCartUpsell_createElement("div", {
      className: "f-incart__product sf-prod__block",
      dataSet: {
        view: 'card'
      }
    }, InCartUpsell_createElement("form", {
      className: "f-incart__product-inner product-form form",
      noValidate: true,
      dataSet: {
        productId: product.id,
        productHandle: product.handle
      },
      action: "/cart/add",
      method: "POST"
    }, InCartUpsell_createElement("input", {
      type: "hidden",
      name: "form_type",
      value: "product"
    }), InCartUpsell_createElement("input", {
      type: "hidden",
      name: "utf8",
      value: "\u2713"
    }), InCartUpsell_createElement("input", {
      type: "hidden",
      name: "source_event",
      value: "incart-upsell"
    }), InCartUpsell_createElement("input", {
      type: "hidden",
      name: "id",
      value: selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.id
    }), active_discount ? InCartUpsell_createElement("input", {
      type: "hidden",
      name: "properties[_foxDiscount]",
      value: `{"discount_value": ${discount.value}, "discount_type": "${discount.type}", "offer_id": "${settings._id}", "plugin": "InCart"}`
    }) : '', InCartUpsell_createElement("div", {
      className: "f-incart__product-image spc__main-img"
    }, InCartUpsell_createElement("a", {
      href: productUrlByHandle(product.handle)
    }, InCartUpsell_createElement("img", {
      src: product.featured_image ? getSizedImageUrl(product.featured_image, '200x') : 'https://dummyimage.com/300x/ddd/aaa',
      alt: product.title
    }))), InCartUpsell_createElement("div", {
      className: "f-incart__product-info"
    }, InCartUpsell_createElement("p", {
      className: "f-incart__product-title"
    }, InCartUpsell_createElement("a", {
      href: productUrlByHandle(product.handle)
    }, product.title)), priceNode, !hasOnlyDefaultVariant ? InCartUpsell_createElement("div", {
      className: "f-incart__product-options"
    }, InCartUpsell_createElement("select", {
      className: 'sf-product-variant-option-dropdown form-control combined-variant max-w-full'
    }, (_product$variants = product.variants) === null || _product$variants === void 0 ? void 0 : _product$variants.map(variant => {
      return InCartUpsell_createElement("option", {
        value: variant.id,
        disabled: !variant.available
      }, variant === null || variant === void 0 ? void 0 : variant.title);
    }))) : '', InCartUpsell_createElement("button", {
      type: 'submit',
      className: 'f-incart__product-add add-to-cart sf__btn sf__btn-primary btn-atc relative',
      disabled: !available,
      dataSet: {
        atcText: InCartUpsell_i18n.tr('add_button')
      }
    }, InCartUpsell_createElement("span", {
      className: "atc-spinner inset-0 absolute items-center justify-center"
    }, InCartUpsell_createElement("svg", {
      className: "animate-spin medium",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none"
    }, InCartUpsell_createElement("circle", {
      className: "opacity-25",
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "4"
    }), InCartUpsell_createElement("path", {
      className: "opacity-75",
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }))), InCartUpsell_createElement("span", {
      className: "atc-text"
    }, available ? InCartUpsell_i18n.tr('add_button') : MinimogStrings.soldOut)))));
  })));
}
// EXTERNAL MODULE: ./node_modules/scroll-into-view/scrollIntoView.js
var scrollIntoView = __webpack_require__(643);
var scrollIntoView_default = /*#__PURE__*/__webpack_require__.n(scrollIntoView);
;// CONCATENATED MODULE: ./src/js/utilities/index.js
/* provided dependency */ var utilities_MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var utilities_createElement = __webpack_require__(6295)["Z"];



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
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, $1 => `_${$1.toLowerCase()}`);
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
  if (products.indexOf(utilities_MinimogSettings.productHandle) === -1) {
    products.unshift(utilities_MinimogSettings.productHandle);
    products = products.slice(0, 20);
    setCookie('sf-recent-viewed-products', JSON.stringify(products));
  }
}
const generateDomFromString = value => {
  const d = utilities_createElement("div", null);
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
    utilities_MinimogSettings._colorSwatches = [];
    utilities_MinimogSettings._imageSwatches = [];
    utilities_MinimogSettings.product_colors.split(',').filter(Boolean).forEach(colorSwatch => {
      var _value$trim;
      const [key, value] = colorSwatch.split(':');
      utilities_MinimogSettings._colorSwatches.push({
        key: key.trim().toLowerCase(),
        value: (value === null || value === void 0 ? void 0 : (_value$trim = value.trim) === null || _value$trim === void 0 ? void 0 : _value$trim.call(value)) || ''
      });
    });
    Object.keys(utilities_MinimogSettings).forEach(key => {
      if (key.includes('filter_color') && !key.includes('.png')) {
        if (utilities_MinimogSettings[`${key}.png`]) {
          utilities_MinimogSettings._imageSwatches.push({
            key: utilities_MinimogSettings[key].toLowerCase(),
            value: utilities_MinimogSettings[`${key}.png`]
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
const formatUrl = (pageType, handle, query) => {
  let url;
  const {
    routes
  } = utilities_MinimogSettings;
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
;// CONCATENATED MODULE: ./src/js/utilities/product-fns.js
/* provided dependency */ var product_fns_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var product_fns_MinimogTheme = __webpack_require__(4558)["LE"];

const themeProducts = window._themeProducts || {};
const fetchProductByHandle = async handle => {
  const url = formatUrl('products', handle + '.js');
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
// EXTERNAL MODULE: ./src/js/utilities/events.js
var events = __webpack_require__(8971);
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-product/theme-product.js
/**
 * Returns a product JSON object when passed a product URL
 * @param {*} url
 */
function getProductJson(handle) {
  return fetch('/products/' + handle + '.js').then(function (response) {
    return response.json();
  });
}

/**
 * Find a match in the project JSON (using a ID number) and return the variant (as an Object)
 * @param {Object} product Product JSON object
 * @param {Number} value Accepts Number (e.g. 6908023078973)
 * @returns {Object} The variant object once a match has been successful. Otherwise null will be return
 */
function getVariantFromId(product, value) {
  _validateProductStructure(product);
  if (typeof value !== 'number') {
    throw new TypeError(value + ' is not a Number.');
  }
  var result = product.variants.filter(function (variant) {
    return variant.id === value;
  });
  return result[0] || null;
}

/**
 * Convert the Object (with 'name' and 'value' keys) into an Array of values, then find a match & return the variant (as an Object)
 * @param {Object} product Product JSON object
 * @param {Object} collection Object with 'name' and 'value' keys (e.g. [{ name: "Size", value: "36" }, { name: "Color", value: "Black" }])
 * @returns {Object || null} The variant object once a match has been successful. Otherwise null will be returned
 */
function getVariantFromSerializedArray(product, collection) {
  _validateProductStructure(product);

  // If value is an array of options
  var optionArray = _createOptionArrayFromOptionCollection(product, collection);
  return getVariantFromOptionArray(product, optionArray);
}

/**
 * Find a match in the project JSON (using Array with option values) and return the variant (as an Object)
 * @param {Object} product Product JSON object
 * @param {Array} options List of submitted values (e.g. ['36', 'Black'])
 * @returns {Object || null} The variant object once a match has been successful. Otherwise null will be returned
 */
function getVariantFromOptionArray(product, options) {
  _validateProductStructure(product);
  _validateOptionsArray(options);
  var result = product.variants.filter(function (variant) {
    return options.every(function (option, index) {
      return variant.options[index] === option;
    });
  });
  return result[0] || null;
}

/**
 * Creates an array of selected options from the object
 * Loops through the project.options and check if the "option name" exist (product.options.name) and matches the target
 * @param {Object} product Product JSON object
 * @param {Array} collection Array of object (e.g. [{ name: "Size", value: "36" }, { name: "Color", value: "Black" }])
 * @returns {Array} The result of the matched values. (e.g. ['36', 'Black'])
 */
function _createOptionArrayFromOptionCollection(product, collection) {
  _validateProductStructure(product);
  _validateSerializedArray(collection);
  var optionArray = [];
  collection.forEach(function (option) {
    for (var i = 0; i < product.options.length; i++) {
      if (product.options[i].name.toLowerCase() === option.name.toLowerCase()) {
        optionArray[i] = option.value;
        break;
      }
    }
  });
  return optionArray;
}

/**
 * Check if the product data is a valid JS object
 * Error will be thrown if type is invalid
 * @param {object} product Product JSON object
 */
function _validateProductStructure(product) {
  if (typeof product !== 'object') {
    throw new TypeError(product + ' is not an object.');
  }
  if (Object.keys(product).length === 0 && product.constructor === Object) {
    throw new Error(product + ' is empty.');
  }
}

/**
 * Validate the structure of the array
 * It must be formatted like jQuery's serializeArray()
 * @param {Array} collection Array of object [{ name: "Size", value: "36" }, { name: "Color", value: "Black" }]
 */
function _validateSerializedArray(collection) {
  if (!Array.isArray(collection)) {
    throw new TypeError(collection + ' is not an array.');
  }
  if (collection.length === 0) {
    return [];
  }
  if (collection[0].hasOwnProperty('name')) {
    if (typeof collection[0].name !== 'string') {
      throw new TypeError('Invalid value type passed for name of option ' + collection[0].name + '. Value should be string.');
    }
  } else {
    throw new Error(collection[0] + 'does not contain name key.');
  }
}

/**
 * Validate the structure of the array
 * It must be formatted as list of values
 * @param {Array} collection Array of object (e.g. ['36', 'Black'])
 */
function _validateOptionsArray(options) {
  if (Array.isArray(options) && typeof options[0] === 'object') {
    throw new Error(options + 'is not a valid array of options.');
  }
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-product-form/listeners.js
function Listeners() {
  this.entries = [];
}
Listeners.prototype.add = function (element, event, fn) {
  this.entries.push({
    element: element,
    event: event,
    fn: fn
  });
  element.addEventListener(event, fn);
};
Listeners.prototype.removeAll = function () {
  this.entries = this.entries.filter(function (listener) {
    listener.element.removeEventListener(listener.event, listener.fn);
    return false;
  });
};
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-product-form/theme-product-form.js


var selectors = {
  idInput: '[name="id"]',
  optionInput: '[name^="options"]',
  quantityInput: '[name="quantity"]',
  propertyInput: '[name^="properties"]'
};

// Public Methods
// -----------------------------------------------------------------------------

/**
 * Returns a URL with a variant ID query parameter. Useful for updating window.history
 * with a new URL based on the currently select product variant.
 * @param {string} url - The URL you wish to append the variant ID to
 * @param {number} id  - The variant ID you wish to append to the URL
 * @returns {string} - The new url which includes the variant ID query parameter
 */

function getUrlWithVariant(url, id) {
  if (/variant=/.test(url)) {
    return url.replace(/(variant=)[^&]+/, '$1' + id);
  } else if (/\?/.test(url)) {
    return url.concat('&variant=').concat(id);
  }
  return url.concat('?variant=').concat(id);
}

/**
 * Constructor class that creates a new instance of a product form controller.
 *
 * @param {Element} element - DOM element which is equal to the <form> node wrapping product form inputs
 * @param {Object} product - A product object
 * @param {Object} options - Optional options object
 * @param {Function} options.onOptionChange - Callback for whenever an option input changes
 * @param {Function} options.onQuantityChange - Callback for whenever an quantity input changes
 * @param {Function} options.onPropertyChange - Callback for whenever a property input changes
 * @param {Function} options.onFormSubmit - Callback for whenever the product form is submitted
 */
function ProductForm(element, product, options) {
  this.element = element;
  this.product = _validateProductObject(product);
  options = options || {};
  this._listeners = new Listeners();
  this._listeners.add(this.element, 'submit', this._onSubmit.bind(this, options));
  this.optionInputs = this._initInputs(selectors.optionInput, options.onOptionChange);
  this.quantityInputs = this._initInputs(selectors.quantityInput, options.onQuantityChange);
  this.propertyInputs = this._initInputs(selectors.propertyInput, options.onPropertyChange);
}

/**
 * Cleans up all event handlers that were assigned when the Product Form was constructed.
 * Useful for use when a section needs to be reloaded in the theme editor.
 */
ProductForm.prototype.destroy = function () {
  this._listeners.removeAll();
};

/**
 * Getter method which returns the array of currently selected option values
 *
 * @returns {Array} An array of option values
 */
ProductForm.prototype.options = function () {
  return _serializeOptionValues(this.optionInputs, function (item) {
    var regex = /(?:^(options\[))(.*?)(?:\])/;
    item.name = regex.exec(item.name)[2]; // Use just the value between 'options[' and ']'
    return item;
  });
};

/**
 * Getter method which returns the currently selected variant, or `null` if variant
 * doesn't exist.
 *
 * @returns {Object|null} Variant object
 */
ProductForm.prototype.variant = function () {
  return getVariantFromSerializedArray(this.product, this.options());
};

/**
 * Getter method which returns a collection of objects containing name and values
 * of property inputs
 *
 * @returns {Array} Collection of objects with name and value keys
 */
ProductForm.prototype.properties = function () {
  var properties = _serializePropertyValues(this.propertyInputs, function (propertyName) {
    var regex = /(?:^(properties\[))(.*?)(?:\])/;
    var name = regex.exec(propertyName)[2]; // Use just the value between 'properties[' and ']'
    return name;
  });
  return Object.entries(properties).length === 0 ? null : properties;
};

/**
 * Getter method which returns the current quantity or 1 if no quantity input is
 * included in the form
 *
 * @returns {Array} Collection of objects with name and value keys
 */
ProductForm.prototype.quantity = function () {
  return this.quantityInputs[0] ? Number.parseInt(this.quantityInputs[0].value, 10) : 1;
};

// Private Methods
// -----------------------------------------------------------------------------
ProductForm.prototype._setIdInputValue = function (value) {
  var idInputElement = this.element.querySelector(selectors.idInput);
  if (!idInputElement) {
    idInputElement = document.createElement('input');
    idInputElement.type = 'hidden';
    idInputElement.name = 'id';
    this.element.appendChild(idInputElement);
  }
  idInputElement.value = value.toString();
};
ProductForm.prototype._onSubmit = function (options, event) {
  event.dataset = this._getProductFormEventData();
  if (event.dataset.variant) {
    this._setIdInputValue(event.dataset.variant.id);
  }
  if (options.onFormSubmit) {
    options.onFormSubmit(event);
  }
};
ProductForm.prototype._onFormEvent = function (cb) {
  if (typeof cb === 'undefined') {
    return Function.prototype;
  }
  return function (event) {
    event.dataset = this._getProductFormEventData();
    cb(event);
  }.bind(this);
};
ProductForm.prototype._initInputs = function (selector, cb) {
  var elements = Array.prototype.slice.call(this.element.querySelectorAll(selector));
  return elements.map(function (element) {
    this._listeners.add(element, 'change', this._onFormEvent(cb));
    return element;
  }.bind(this));
};
ProductForm.prototype._getProductFormEventData = function () {
  return {
    options: this.options(),
    variant: this.variant(),
    properties: this.properties(),
    quantity: this.quantity()
  };
};
function _serializeOptionValues(inputs, transform) {
  return inputs.reduce(function (options, input) {
    if (input.checked ||
    // If input is a checked (means type radio or checkbox)
    input.type !== 'radio' && input.type !== 'checkbox' // Or if its any other type of input
    ) {
      options.push(transform({
        name: input.name,
        value: input.value
      }));
    }
    return options;
  }, []);
}
function _serializePropertyValues(inputs, transform) {
  return inputs.reduce(function (properties, input) {
    if (input.checked ||
    // If input is a checked (means type radio or checkbox)
    input.type !== 'radio' && input.type !== 'checkbox' // Or if its any other type of input
    ) {
      properties[transform(input.name)] = input.value;
    }
    return properties;
  }, {});
}
function _validateProductObject(product) {
  if (typeof product !== 'object') {
    throw new TypeError(product + ' is not an object.');
  }
  if (typeof product.variants[0].options === 'undefined') {
    throw new TypeError('Product object is invalid. Make sure you use the product object that is output from {{ product | json }} or from the http://[your-product-url].js route');
  }
  return product;
}
;// CONCATENATED MODULE: ./src/js/data/product-slider.config.js
const commonConfigs = {
  loop: true
};
const configs = {
  'mobile': {
    autoHeight: true,
    loop: true
  },
  'quick-view': {
    autoHeight: true
  },
  'layout-4': {},
  'layout-5': {
    slidesPerView: 1,
    slidesPerGroup: 1,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10
      }
    }
  },
  'layout-6': {},
  'layout-7': {
    slidesPerView: 3,
    speed: 500,
    centeredSlides: true
  }
};
function getProductSliderConfig(layout) {
  const conf = configs[layout] || configs['layout-4'];
  return Object.assign({}, commonConfigs, conf);
}
// EXTERNAL MODULE: ./node_modules/enquire.js/src/index.js
var src = __webpack_require__(1179);
var src_default = /*#__PURE__*/__webpack_require__.n(src);
;// CONCATENATED MODULE: ./src/js/modules/product-helper.js
/* provided dependency */ var MinimogLibs = __webpack_require__(4558)["gM"];





class ProductHelper {
  // "galley" | "slider" | "featured-image"
  // 'sticky-atc' | 'card' | 'quick-view' | 'mobile' | 'product-template'

  constructor(_ref) {
    var _container$dataset;
    let {
      container,
      productData
    } = _ref;
    (0,defineProperty/* default */.Z)(this, "mediaMode", '');
    (0,defineProperty/* default */.Z)(this, "view", '');
    (0,defineProperty/* default */.Z)(this, "selectors", {
      form: 'form[data-product-id]',
      productSection: '[data-section-type="product-page"]',
      infoWrapper: '.sf-prod__info-wrapper',
      info: '.sf-prod__info',
      featuredImage: '.spc__main-img',
      mediaWrapper: '.sf-prod-media__wrapper',
      previewWrapper: '.sf-preview__wrapper',
      mediaDesktop: '.sf-product-media__desktop',
      mediaMobile: '.sf-product-media__mobile',
      slider: '.swiper-container',
      sliderPagination: '.swiper-pagination',
      sliderPrevEl: '.swiper-button-prev',
      sliderNextEl: '.swiper-button-next',
      navSlider: '.nav-swiper-container',
      navSliderMobile: '.nav-swiper-container-mobile',
      medias: ['.sf-prod-media-item'],
      mediaZoomIns: ['.sf-prod-media__zoom-in'],
      videos: ['.media-video']
    });
    (0,defineProperty/* default */.Z)(this, "currPlayer", void 0);
    (0,defineProperty/* default */.Z)(this, "mobileSlider", null);
    (0,defineProperty/* default */.Z)(this, "enableVideoAutoplay", false);
    (0,defineProperty/* default */.Z)(this, "enableImageZoom", true);
    (0,defineProperty/* default */.Z)(this, "init", async () => {
      var _this$container, _this$container$close, _this$container$close2, _this$container$close3;
      switch (this.view) {
        case 'product-template':
          this.layout = ((_this$container = this.container) === null || _this$container === void 0 ? void 0 : (_this$container$close = _this$container.closest) === null || _this$container$close === void 0 ? void 0 : (_this$container$close2 = _this$container$close.call(_this$container, 'div[data-section-type="product-page"]')) === null || _this$container$close2 === void 0 ? void 0 : (_this$container$close3 = _this$container$close2.dataset) === null || _this$container$close3 === void 0 ? void 0 : _this$container$close3.layout) || 'layout-1';
          if (window.__sfWindowLoaded) {
            this.initLightbox();
            this.initPlyrs();
          } else {
            window.addEventListener("load", () => {
              this.initPlyrs();
              this.initLightbox();
            });
          }
          this.addEventToMainMedias();
          await this.initSlider();
          if (this.mediaMode !== 'slider') {
            this.mediaMode = 'gallery';
          }
          break;
        case 'featured-product':
          this.initSlider();
          break;
        case 'card':
          this.mediaMode = 'featured-image';
          break;
        case 'sticky-atc':
          this.mediaMode = 'featured-image';
          break;
        case 'quick-view':
          this.mediaMode = 'featured-image';
          this.initSlider();
          break;
        default:
          console.warn('Unknown product view: ', this, this.view);
          break;
      }
    });
    (0,defineProperty/* default */.Z)(this, "initPlyrs", () => {
      var _this$domNodes, _this$domNodes$videos;
      if ((_this$domNodes = this.domNodes) !== null && _this$domNodes !== void 0 && (_this$domNodes$videos = _this$domNodes.videos) !== null && _this$domNodes$videos !== void 0 && _this$domNodes$videos.length) {
        loadAssets(['plyr.css', 'plyr.js']).then(() => {
          var _ref2, _this$domNodes2;
          (_ref2 = [...((_this$domNodes2 = this.domNodes) === null || _this$domNodes2 === void 0 ? void 0 : _this$domNodes2.videos)]) === null || _ref2 === void 0 ? void 0 : _ref2.forEach(vid => {
            var _vid$classList;
            const elm = vid !== null && vid !== void 0 && (_vid$classList = vid.classList) !== null && _vid$classList !== void 0 && _vid$classList.contains('local-video') ? vid === null || vid === void 0 ? void 0 : vid.querySelector('video') : vid;
            const player = new MinimogLibs.Plyr(elm);
            player.on('playing', () => {
              if ((this === null || this === void 0 ? void 0 : this.currPlayer) !== player) {
                var _this$currPlayer, _this$currPlayer$paus;
                this === null || this === void 0 ? void 0 : (_this$currPlayer = this.currPlayer) === null || _this$currPlayer === void 0 ? void 0 : (_this$currPlayer$paus = _this$currPlayer.pause) === null || _this$currPlayer$paus === void 0 ? void 0 : _this$currPlayer$paus.call(_this$currPlayer);
                this.currPlayer = player;
              }
            });
            vid.plyr = player;
            if (this.enableVideoAutoplay) {
              const isOnDesktop = !!!elm.closest('.product-mb__media');
              if (isOnDesktop) {
                const nodeToObserve = elm.closest('.sf-prod-media-item');
                const observer = new IntersectionObserver(entries => {
                  entries.forEach(entry => {
                    if (entry.intersectionRatio === 1) {
                      var _this$currPlayer2, _this$currPlayer2$pau;
                      this === null || this === void 0 ? void 0 : (_this$currPlayer2 = this.currPlayer) === null || _this$currPlayer2 === void 0 ? void 0 : (_this$currPlayer2$pau = _this$currPlayer2.pause) === null || _this$currPlayer2$pau === void 0 ? void 0 : _this$currPlayer2$pau.call(_this$currPlayer2);
                      player.play();
                      this.currPlayer = player;
                    } else {
                      player.pause();
                    }
                  });
                }, {
                  threshold: 1
                });
                observer.observe(nodeToObserve);
                player.on('pause', () => observer.unobserve(nodeToObserve));
              }
            }
          });
        }).catch(err => console.error("Failed to init Plyr", err));
      }
    });
    (0,defineProperty/* default */.Z)(this, "initLightbox", () => {
      if (!this.enableImageZoom) return;
      console.log('init lightbox');
      loadAssets(['glightbox.css', 'glightbox.js']).then(() => {
        var _this$productData, _this$productData$med;
        const elements = this === null || this === void 0 ? void 0 : (_this$productData = this.productData) === null || _this$productData === void 0 ? void 0 : (_this$productData$med = _this$productData.media) === null || _this$productData$med === void 0 ? void 0 : _this$productData$med.map(media => {
          if (media.media_type === 'image') {
            return {
              href: media.src,
              type: 'image'
            };
          }
          if (media.media_type === 'external_video') {
            // TODO: fix Youtube video on lightbox
            const href = getVideoURL(media.external_id, media.host);
            return {
              href,
              type: 'video',
              source: media.host
            };
          }
          if (media.media_type === 'video') {
            var _media$sources, _media$sources$;
            const href = media === null || media === void 0 ? void 0 : (_media$sources = media.sources) === null || _media$sources === void 0 ? void 0 : (_media$sources$ = _media$sources[0]) === null || _media$sources$ === void 0 ? void 0 : _media$sources$.url;
            return {
              href,
              type: 'video'
            };
          }
          if (media.media_type === 'model') {
            var _document$querySelect;
            const mediaElem = (_document$querySelect = document.querySelector(`.media-model[data-media-id="${media.id}"]`)) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.cloneNode(true);
            mediaElem.classList.remove('hidden');
            mediaElem.classList.add('model-in-lightbox');
            return {
              content: mediaElem,
              width: '80vw',
              height: '70vh'
            };
          }
        });
        this.lightbox = new MinimogLibs.GLightbox({
          elements,
          openEffect: 'fade',
          closeEffect: 'fade',
          draggable: false,
          autofocusVideos: true
        });

        // console.log('lightbox', this.lightbox)

        // TODO: fix video width https://github.com/biati-digital/glightbox/issues/203
      }).catch(err => console.error("Failed to init Glightbox", err));
    });
    (0,defineProperty/* default */.Z)(this, "initSlider", async () => {
      var _this$domNodes3;
      if (!(this !== null && this !== void 0 && (_this$domNodes3 = this.domNodes) !== null && _this$domNodes3 !== void 0 && _this$domNodes3.slider)) return;
      this.mediaMode = 'slider';
      loadAssets(['swiper.css', 'swiper.js']).then(() => {
        const {
          view,
          domNodes: {
            slider,
            sliderPagination,
            navSlider,
            sliderNextEl: nextEl,
            sliderPrevEl: prevEl
          }
        } = this;
        const layout = view === 'product-template' ? this.layout : view;
        let initialSlide = 0;
        if (this.productData.initialVariant && this.productData.selected_variant) {
          var _this$productData$ini;
          initialSlide = ((_this$productData$ini = this.productData.initialVariant.featured_media) === null || _this$productData$ini === void 0 ? void 0 : _this$productData$ini.position) - 1 || 0;
        }
        this.navSlider = navSlider ? new MinimogLibs.Swiper(navSlider, {
          initialSlide,
          slidesPerView: 5,
          freeMode: true,
          spaceBetween: 10,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          direction: layout === 'layout-6' ? 'vertical' : 'horizontal',
          on: {
            init: () => navSlider.style.opacity = 1
          }
        }) : null;
        const thumbs = this.navSlider ? {
          thumbs: {
            swiper: this.navSlider
          }
        } : {};
        const config = Object.assign({}, getProductSliderConfig(layout), {
          initialSlide,
          autoHeight: true,
          navigation: {
            nextEl,
            prevEl
          },
          pagination: {
            el: sliderPagination,
            clickable: true,
            type: 'bullets'
          },
          ...thumbs,
          on: {
            init: () => {
              slider.style.opacity = 1;
              this.domNodes = queryDomNodes(this.selectors, this.container);
            }
          }
        });
        if (this.view === 'product-template') {
          src_default().register("screen and (max-width: 767px)", {
            match: this.initMobileSlider
          });
          src_default().register("screen and (min-width: 768px)", {
            match: () => this.slider = new MinimogLibs.Swiper(slider, config)
          });
        } else {
          this.slider = new MinimogLibs.Swiper(slider, config);
        }
        this.handleSlideChange();
      }).catch(err => console.error("Failed to init Slider", err));
    });
    (0,defineProperty/* default */.Z)(this, "initMobileSlider", () => {
      const {
        domNodes: {
          navSliderMobile
        }
      } = this;
      let initialSlide = 0;
      if (this.productData.initialVariant && this.productData.selected_variant) {
        var _this$productData$ini2;
        initialSlide = ((_this$productData$ini2 = this.productData.initialVariant.featured_media) === null || _this$productData$ini2 === void 0 ? void 0 : _this$productData$ini2.position) - 1 || 0;
      }
      this.navSliderMobile = navSliderMobile ? new MinimogLibs.Swiper(navSliderMobile, {
        initialSlide,
        slidesPerView: 3,
        spaceBetween: 10,
        // loop: true,
        // centeredSlides: true,
        // slideToClickedSlide: true,
        on: {
          init: () => navSliderMobile.style.opacity = 1
        }
      }) : null;
      const slider = this.domNodes.mediaMobile.querySelector(this.selectors.slider);
      this.mobileSlider = new MinimogLibs.Swiper(slider, {
        initialSlide,
        autoHeight: true,
        // loop: true,
        pagination: {
          el: this.domNodes.mediaMobile.querySelector(this.selectors.sliderPagination),
          clickable: true,
          type: 'bullets'
        },
        thumbs: {
          swiper: this.navSliderMobile,
          autoScrollOffset: 1
        },
        on: {
          init: () => slider.style.opacity = 1
        }
      });
    });
    (0,defineProperty/* default */.Z)(this, "handleSlideChange", () => {
      console.log('old change slide');
      if (!this.slider) return;
      let draggable = true;
      let mediaType = '';
      let visibleSlides = [];
      const {
        previewWrapper
      } = this.domNodes;
      this.slider.on('slideChange', swiper => {
        try {
          var _this$currPlayer3, _this$currPlayer3$pau;
          // Change previewWrapper aspectRatio
          const {
            slides,
            activeIndex
          } = swiper;
          if (previewWrapper) {
            const aspectRatio = slides[activeIndex].dataset.aspectRatio || 1;
            const layout = this.view === 'product-template' ? this.layout : this.view;
            const scale = layout === 'layout-5' ? 2 : 1;
            previewWrapper.style.setProperty('--aspect-ratio', aspectRatio * scale);
          }

          // Play the video if existed, and pause the previous playing one
          this === null || this === void 0 ? void 0 : (_this$currPlayer3 = this.currPlayer) === null || _this$currPlayer3 === void 0 ? void 0 : (_this$currPlayer3$pau = _this$currPlayer3.pause) === null || _this$currPlayer3$pau === void 0 ? void 0 : _this$currPlayer3$pau.call(_this$currPlayer3);
          const currSlide = slides[activeIndex];
          if (currSlide && currSlide.dataset.mediaType === "video") {
            const player = currSlide.firstElementChild.plyr;
            if (player) {
              player.play();
              this.currPlayer = player;
            }
          }

          // Change touchMove state, for making the model inside slide draggable
          visibleSlides = [activeIndex];
          if (this.layout === 'layout-5' || this.layout === 'layout-7') {
            visibleSlides.push(activeIndex + 1);
          }
          for (let index of visibleSlides) {
            var _currSlide$dataset;
            const currSlide = slides[index];
            mediaType = currSlide === null || currSlide === void 0 ? void 0 : (_currSlide$dataset = currSlide.dataset) === null || _currSlide$dataset === void 0 ? void 0 : _currSlide$dataset.mediaType;
            if (mediaType === 'model') break;
          }
          if (mediaType === 'model') {
            this.slider.allowTouchMove = false;
            draggable = false;
          } else {
            if (!draggable) this.slider.allowTouchMove = true;
            draggable = true;
          }
        } catch (error) {
          console.error("Failed to execute slideChange event.", error);
        }
      });
    });
    (0,defineProperty/* default */.Z)(this, "changeMediaByVariant", variant => {
      if (!variant) return;
      if (this.mediaMode === 'slider') {
        if (variant.featured_media) {
          var _variant$featured_med, _this$slider, _this$mobileSlider;
          const slideIndex = (variant === null || variant === void 0 ? void 0 : (_variant$featured_med = variant.featured_media) === null || _variant$featured_med === void 0 ? void 0 : _variant$featured_med.position) || 0;
          if (this.slider && (_this$slider = this.slider) !== null && _this$slider !== void 0 && _this$slider.wrapperEl) {
            var _this$slider2, _this$slider2$slideTo;
            this === null || this === void 0 ? void 0 : (_this$slider2 = this.slider) === null || _this$slider2 === void 0 ? void 0 : (_this$slider2$slideTo = _this$slider2.slideToLoop) === null || _this$slider2$slideTo === void 0 ? void 0 : _this$slider2$slideTo.call(_this$slider2, slideIndex - 1);
          }
          if (this.mobileSlider && (_this$mobileSlider = this.mobileSlider) !== null && _this$mobileSlider !== void 0 && _this$mobileSlider.wrapperEl) {
            var _this$mobileSlider2, _this$mobileSlider2$s;
            this === null || this === void 0 ? void 0 : (_this$mobileSlider2 = this.mobileSlider) === null || _this$mobileSlider2 === void 0 ? void 0 : (_this$mobileSlider2$s = _this$mobileSlider2.slideToLoop) === null || _this$mobileSlider2$s === void 0 ? void 0 : _this$mobileSlider2$s.call(_this$mobileSlider2, slideIndex - 1);
          }
        }
      } else if (this.mediaMode === 'featured-image') {
        var _variant$featured_ima;
        const src = variant === null || variant === void 0 ? void 0 : (_variant$featured_ima = variant.featured_image) === null || _variant$featured_ima === void 0 ? void 0 : _variant$featured_ima.src;
        const {
          featuredImage
        } = this.domNodes;
        const img = featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.querySelector('img');
        if (img && src) {
          var _this$productData2, _this$productData2$in, _featuredImage$classL, _featuredImage$classL2;
          img.src = src;
          img.removeAttribute('srcset');
          const method = ((_this$productData2 = this.productData) === null || _this$productData2 === void 0 ? void 0 : (_this$productData2$in = _this$productData2.initialVariant) === null || _this$productData2$in === void 0 ? void 0 : _this$productData2$in.id) === (variant === null || variant === void 0 ? void 0 : variant.id) ? 'add' : 'remove';
          featuredImage === null || featuredImage === void 0 ? void 0 : (_featuredImage$classL = featuredImage.classList) === null || _featuredImage$classL === void 0 ? void 0 : (_featuredImage$classL2 = _featuredImage$classL[method]) === null || _featuredImage$classL2 === void 0 ? void 0 : _featuredImage$classL2.call(_featuredImage$classL, 'group-hover:opacity-0');
        }
      } else {
        // handle change image in gallery mode
      }
    });
    (0,defineProperty/* default */.Z)(this, "addEventToMainMedias", () => {
      (0,events/* addEventDelegate */.X)({
        selector: this.selectors.medias[0],
        context: this.container,
        handler: (e, media) => {
          var _e$target;
          const isImage = media.classList.contains('media-type-image');
          const isZoomButton = e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest(this.selectors.mediaZoomIns[0]);
          if (isImage || isZoomButton) {
            var _media$dataset, _this$currPlayer4, _this$lightbox;
            const index = Number(media === null || media === void 0 ? void 0 : (_media$dataset = media.dataset) === null || _media$dataset === void 0 ? void 0 : _media$dataset.index) || 0;
            (_this$currPlayer4 = this.currPlayer) === null || _this$currPlayer4 === void 0 ? void 0 : _this$currPlayer4.pause();
            this === null || this === void 0 ? void 0 : (_this$lightbox = this.lightbox) === null || _this$lightbox === void 0 ? void 0 : _this$lightbox.openAt(index);
          }
        }
      });
    });
    this.productData = productData;
    this.container = container;
    this.view = (container === null || container === void 0 ? void 0 : (_container$dataset = container.dataset) === null || _container$dataset === void 0 ? void 0 : _container$dataset.view) || 'product-template';
    this.domNodes = queryDomNodes(this.selectors, this.container);
    this.enableVideoAutoplay = this.domNodes.form.dataset.enableVideoAutoplay === 'true';
    this.enableImageZoom = this.domNodes.form.dataset.enableImageZoom === 'true';
    this.init().catch(console.error);
  }
}
;// CONCATENATED MODULE: ./src/js/modules/product.js
/* provided dependency */ var product_MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var product_MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var product_MinimogStrings = __webpack_require__(4558)["rZ"];
/* provided dependency */ var MinimogEvents = __webpack_require__(4558)["s0"];








class Product {
  constructor(productForm) {
    var _productForm$classLis, _MinimogTheme$Product, _MinimogTheme$Product2;
    let _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0,defineProperty/* default */.Z)(this, "selectors", {
      price: '.prod__price',
      comparePrice: '.prod__compare_price',
      error: '.prod__form-error',
      addToCart: '.add-to-cart',
      variantIdNode: '[name="id"]',
      optionNodes: ['.product-option-item'],
      optionLabels: ['[data-option-label]'],
      quantityInput: '.quantity-input__element[name="quantity"]',
      quantityBtns: ['.quantity-input__button'],
      variantDropdown: '.sf-product-variant-option-dropdown',
      dynamicCheckout: '.prod__dynamic_checkout',
      productSKU: '[data-variant-sku]',
      productAvailability: '[data-availability]',
      savingLabel: '.prod__tag-saving',
      savingAmount: '[data-saved-price]',
      unitPrice: '.price-unit-price',
      stockCountdown: '.prod__stock-countdown',
      soldOutBadge: '.prod__tag--soldout'
    });
    (0,defineProperty/* default */.Z)(this, "setData", () => {
      this.view = this.productBlock.dataset.view || 'product-template'; // 'sticky-atc' | 'card' | 'quick-view' | 'mobile' | 'product-template'
      this.hasCustomRequiredFields = !!this.productForm.querySelector('.product__custom-field [name][required]');
      this.hide_unavailable_product_options = product_MinimogSettings.hide_unavailable_product_options;
      this.activeOptionNodeByPosition = {};
      this.listeners = [];
    });
    (0,defineProperty/* default */.Z)(this, "init", async () => {
      var _this$productData;
      this.productData = await getProductData(this.productForm.dataset);
      if (!((_this$productData = this.productData) !== null && _this$productData !== void 0 && _this$productData.variants)) return;
      if (this.domNodes.dynamicCheckout) this.productData.enable_dynamic_checkout = true;
      this.initProductEvents();
      this.productHelper = new ProductHelper({
        container: this.productBlock,
        productData: this.productData
      });
      this.initProductVariant();
    });
    (0,defineProperty/* default */.Z)(this, "initProductVariant", () => {
      const {
        domNodes: {
          variantIdNode
        },
        productData,
        productData: {
          variants
        } = {}
      } = this;
      if (productData && variantIdNode) {
        let currentVariantId = Number(variantIdNode.value);
        if (!currentVariantId) {
          var _productData$selected;
          currentVariantId = (_productData$selected = productData.selected_or_first_available_variant) === null || _productData$selected === void 0 ? void 0 : _productData$selected.id;
        }
        const currentVariant = variants.find(v => v.id === currentVariantId) || variants[0];
        this.productData.initialVariant = currentVariant;
        if (!this.productData.selected_variant && variantIdNode.dataset.selectedVariant) {
          this.productData.selected_variant = variants.find(v => v.id === Number(variantIdNode.dataset.selectedVariant));
        }
        if (currentVariant !== null && currentVariant !== void 0 && currentVariant.options) {
          if (this.view === "card") {
            this.updateOptionByVariant(currentVariant);
            this.updateProductCardSoldOutBadge(currentVariant);
          } else {
            this.updateBySelectedVariant(currentVariant);
          }
        }
        this.initOptions();
      }
    });
    (0,defineProperty/* default */.Z)(this, "initOptions", () => {
      const {
        _colorSwatches = [],
        _imageSwatches = []
      } = product_MinimogSettings;
      this.domNodes.optionNodes.forEach(optNode => {
        var _variantToShowSwatchI, _variantToShowSwatchI2, _imageSwatches$find, _colorSwatches$find;
        const {
          optionType,
          optionPosition,
          value: optionValue
        } = optNode === null || optNode === void 0 ? void 0 : optNode.dataset;
        const optionValueLowerCase = optionValue === null || optionValue === void 0 ? void 0 : optionValue.toLowerCase();
        const variantToShowSwatchImage = this.productData.variants.find(v => v[`option${optionPosition}`] === optionValue);
        const variantImage = variantToShowSwatchImage !== null && variantToShowSwatchImage !== void 0 && (_variantToShowSwatchI = variantToShowSwatchImage.featured_image) !== null && _variantToShowSwatchI !== void 0 && _variantToShowSwatchI.src ? getSizedImageUrl(variantToShowSwatchImage === null || variantToShowSwatchImage === void 0 ? void 0 : (_variantToShowSwatchI2 = variantToShowSwatchImage.featured_image) === null || _variantToShowSwatchI2 === void 0 ? void 0 : _variantToShowSwatchI2.src, '150x') : '';
        const customImage = (_imageSwatches$find = _imageSwatches.find(i => i.key === optionValueLowerCase)) === null || _imageSwatches$find === void 0 ? void 0 : _imageSwatches$find.value;
        const customColor = (_colorSwatches$find = _colorSwatches.find(c => c.key === optionValueLowerCase)) === null || _colorSwatches$find === void 0 ? void 0 : _colorSwatches$find.value;
        // if (variantImage || customImage) optNode.classList.add('has-bg-img')

        switch (optionType) {
          case 'default':
            optNode.style.backgroundImage = `url(${customImage || variantImage || ''})`;
            break;
          case 'image':
            optNode.style.backgroundImage = `url(${variantImage || customImage || ''})`;
            break;
          case 'color':
            optNode.textContent = optionValueLowerCase;
            optNode.style.backgroundColor = customColor ? customColor : optionValueLowerCase;
            customImage && (optNode.style.backgroundImage = `url(${customImage})`);
            break;
          default:
            break;
        }
      });
    });
    (0,defineProperty/* default */.Z)(this, "initProductEvents", async () => {
      // this.domNodes.variantDropdown?.addEventListener('change', this.handleSelectVariant)
      this.listeners = [(0,events/* addEventDelegate */.X)({
        event: 'change',
        context: this.productForm,
        selector: this.selectors.variantDropdown,
        handler: this.handleSelectVariant
      }), (0,events/* addEventDelegate */.X)({
        context: this.productForm,
        selector: this.selectors.optionNodes[0],
        handler: this.handleSelectVariant
      }), (0,events/* addEventDelegate */.X)({
        context: this.productForm,
        selector: this.selectors.addToCart,
        handler: this.handleAddToCart
      }), (0,events/* addEventDelegate */.X)({
        context: this.productForm,
        selector: this.selectors.quantityBtns[0],
        handler: this.handleQtyBtnClick
      }), (0,events/* addEventDelegate */.X)({
        event: 'change',
        context: this.productForm,
        selector: this.selectors.quantityInput,
        handler: this.handleQtyInputChange
      })];
      const {
        dynamicCheckout
      } = this.domNodes;
      if (dynamicCheckout && this.hasCustomRequiredFields) {
        dynamicCheckout.addEventListener('click', e => {
          const missing = productFormCheck(this.productForm);
          if (missing.length > 0) {
            e.stopPropagation();
            product_MinimogTheme.Notification.show({
              target: this.domNodes.error,
              method: 'appendChild',
              type: 'warning',
              message: product_MinimogStrings.requiredField,
              delay: 100
            });
            console.warn('Missing field(s): ', missing);
          }
        }, true);
      }
    });
    (0,defineProperty/* default */.Z)(this, "unsubscribeEvents", () => {
      this.listeners.forEach(unsubscribeFunc => unsubscribeFunc());
    });
    (0,defineProperty/* default */.Z)(this, "handleQtyInputChange", e => {
      MinimogEvents.emit(`${this.productData.id}__QUANTITY_CHANGE`, Number(e.target.value), this);
    });
    (0,defineProperty/* default */.Z)(this, "handleQtyBtnClick", (e, btn) => {
      const {
        quantitySelector
      } = btn.dataset;
      const {
        quantityInput
      } = this.domNodes;
      const currentQty = Number(quantityInput.value);
      let newQty = currentQty;
      if (quantitySelector === 'decrease') {
        newQty = currentQty > 1 ? currentQty - 1 : 1;
      } else {
        newQty = currentQty + 1;
      }
      quantityInput.value = newQty;
      MinimogEvents.emit(`${this.productData.id}__QUANTITY_CHANGE`, newQty, this);
    });
    (0,defineProperty/* default */.Z)(this, "getVariantFromActiveOptions", () => {
      const {
        productData,
        productData: {
          initialVariant
        },
        activeOptionNodeByPosition,
        productBlock
      } = this;
      let options;
      if (productBlock.dataset.view === 'card') {
        const initialVariantOptions = {
          1: initialVariant.option1,
          2: initialVariant.option2,
          3: initialVariant.option3
        };
        Object.values(activeOptionNodeByPosition).forEach(optNode => {
          const {
            optionPosition,
            value
          } = optNode.dataset;
          initialVariantOptions[optionPosition] = value;
        });
        options = Object.values(initialVariantOptions);
      } else {
        options = Object.values(activeOptionNodeByPosition).map(optNode => optNode.dataset.value);
      }
      options = options.filter(Boolean);
      let variant = getVariantFromOptionArray(productData, options);
      if (!variant && this.hide_unavailable_product_options) {
        options.pop();
        variant = getVariantFromOptionArray(productData, options);
        if (!variant) {
          options.pop();
          variant = getVariantFromOptionArray(productData, options);
        }
      }
      return variant;
    });
    (0,defineProperty/* default */.Z)(this, "handleSelectVariant", e => {
      let {
        target
      } = e;
      let newVariant;
      if (target.classList.contains('combined-variant')) {
        var _e$target, _this$productData2, _this$productData2$va, _this$productData2$va2;
        const variantId = Number(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
        newVariant = (_this$productData2 = this.productData) === null || _this$productData2 === void 0 ? void 0 : (_this$productData2$va = _this$productData2.variants) === null || _this$productData2$va === void 0 ? void 0 : (_this$productData2$va2 = _this$productData2$va.find) === null || _this$productData2$va2 === void 0 ? void 0 : _this$productData2$va2.call(_this$productData2$va, v => v.id === variantId);
      } else {
        if (target.tagName === 'SELECT') {
          target = target.querySelectorAll('option')[target.selectedIndex];
        }
        if (!target.classList.contains('product-option-item')) {
          target = target.closest('.product-option-item');
          if (target) console.error("Unable to find option node!");
        }
        const {
          optionPosition
        } = target.dataset;
        const currActiveOptNode = this.activeOptionNodeByPosition[optionPosition];
        this.toggleOptionNodeActive(currActiveOptNode, false);
        this.toggleOptionNodeActive(target, true);
        newVariant = this.getVariantFromActiveOptions();
      }
      const {
        variantIdNode
      } = this.domNodes;
      if (variantIdNode) {
        var _newVariant, _newVariant2;
        variantIdNode.setAttribute('value', String((_newVariant = newVariant) === null || _newVariant === void 0 ? void 0 : _newVariant.id));
        variantIdNode.value = String((_newVariant2 = newVariant) === null || _newVariant2 === void 0 ? void 0 : _newVariant2.id);
      }
      this.updateBySelectedVariant(newVariant);
    });
    (0,defineProperty/* default */.Z)(this, "hideSoldoutAndUnavailableOptions", variant => {
      if (this.view === "card") return;
      const {
        productData,
        productData: {
          variants,
          options: {
            length: maxOptions
          }
        },
        domNodes: {
          optionNodes
        }
      } = this;
      optionNodes.forEach(optNode => {
        const {
          optionPosition,
          value
        } = optNode.dataset;
        const optPos = Number(optionPosition);
        let matchVariants = [];
        if (optPos === maxOptions) {
          const optionsArray = Array.from(variant.options);
          optionsArray[maxOptions - 1] = value;
          matchVariants.push(getVariantFromOptionArray(productData, optionsArray));
        } else {
          matchVariants = variants.filter(v => v.options[optPos - 1] === value && v.options[optPos - 2] === variant[`option${optPos - 1}`]);
        }
        matchVariants = matchVariants.filter(Boolean);
        const isSelectOption = optNode.tagName === 'OPTION';
        console.log(isSelectOption, 'isSelectOption');
        const unavailableOptClass = this.hide_unavailable_product_options ? 'unavailable-opt' : '_';
        if (matchVariants.length) {
          optNode.classList.remove(unavailableOptClass);
          if (isSelectOption) optNode.removeAttribute('disabled');
          const isSoldout = matchVariants.every(v => v.available === false);
          const method = isSoldout ? 'add' : 'remove';
          optNode.classList[method]('soldout-opt');
        } else {
          optNode.classList.add(unavailableOptClass);
          if (isSelectOption) optNode.disabled = true;
        }
      });
    });
    (0,defineProperty/* default */.Z)(this, "updatePriceByVariant", variant => {
      console.log(variant, 'updatePriceByVariant');
      if (this.view === "card" && product_MinimogSettings.pcard_show_lowest_prices) return;
      const {
        comparePrice,
        price,
        savingAmount,
        savingLabel
      } = this.domNodes;
      if (variant) {
        const money_format = product_MinimogSettings.money_format;
        const priceText = formatMoney(variant.price, money_format);
        if (price) price.innerHTML = priceText;
        if (comparePrice) {
          if (variant.compare_at_price > variant.price) {
            const comparePriceText = formatMoney(variant.compare_at_price, money_format);
            comparePrice.innerHTML = comparePriceText;
            comparePrice.classList.remove('hidden');
          } else {
            comparePrice.classList.add('hidden');
          }
        }
        if (savingLabel && savingAmount) {
          if (variant.compare_at_price > variant.price) {
            savingLabel.classList.remove('hidden');
          } else {
            savingLabel.classList.add('hidden');
          }
          const saving = (variant.compare_at_price - variant.price) * 100 / variant.compare_at_price;
          console.log(saving, 'saving');
          savingAmount.textContent = Math.round(saving) + '%';
        }
        if (variant.unit_price_measurement) {
          var _this$domNodes$unitPr;
          (_this$domNodes$unitPr = this.domNodes.unitPrice) === null || _this$domNodes$unitPr === void 0 ? void 0 : _this$domNodes$unitPr.classList.remove('hidden');
          const unitPrice = `<span data-unit-price>${formatMoney(variant.unit_price, product_MinimogSettings.money_format)}</span>/<span data-unit-price-base-unit>${this._getBaseUnit(variant)}</span>`;
          this.domNodes.unitPrice.innerHTML = unitPrice;
        } else {
          var _this$domNodes$unitPr2;
          (_this$domNodes$unitPr2 = this.domNodes.unitPrice) === null || _this$domNodes$unitPr2 === void 0 ? void 0 : _this$domNodes$unitPr2.classList.add('hidden');
        }
      } else {
        if (savingLabel) savingLabel.classList.add('hidden');
      }
    });
    (0,defineProperty/* default */.Z)(this, "_getBaseUnit", variant => {
      return variant.unit_price_measurement.reference_value === 1 ? variant.unit_price_measurement.reference_unit : variant.unit_price_measurement.reference_value + variant.unit_price_measurement.reference_unit;
    });
    (0,defineProperty/* default */.Z)(this, "updateStockCountdownByVariant", variant => {
      const {
        stockCountdown
      } = this.domNodes;
      if (stockCountdown) {
        var _stockCountdown$class, _stockCountdown$class2;
        const method = !variant.available ? 'add' : 'remove';
        stockCountdown === null || stockCountdown === void 0 ? void 0 : (_stockCountdown$class = stockCountdown.classList) === null || _stockCountdown$class === void 0 ? void 0 : (_stockCountdown$class2 = _stockCountdown$class[method]) === null || _stockCountdown$class2 === void 0 ? void 0 : _stockCountdown$class2.call(_stockCountdown$class, 'hidden');
        if (stockCountdown.dataset.countdownType === 'use_quantity') {
          const countdownNumber = stockCountdown.querySelector('[data-countdown-number]');
          if (countdownNumber) {
            countdownNumber.textContent = variant.inventory_quantity > 0 ? variant.inventory_quantity : variant.id.toString().split('')[13] - -1;
          }
        }
      }
    });
    (0,defineProperty/* default */.Z)(this, "updateSkuByVariant", variant => {
      var _this$domNodes;
      if (variant.sku && (_this$domNodes = this.domNodes) !== null && _this$domNodes !== void 0 && _this$domNodes.productSKU) {
        this.domNodes.productSKU.innerText = variant.sku;
      }
    });
    (0,defineProperty/* default */.Z)(this, "updateAvailabilityByVariant", variant => {
      const {
        productAvailability
      } = this.domNodes;
      if (productAvailability) {
        const {
          inStock,
          outOfStock
        } = product_MinimogStrings;
        const method = !variant.available ? 'add' : 'remove';
        productAvailability.innerText = variant.available ? inStock : outOfStock;
        productAvailability.classList[method]('prod__availability--outofstock');
      }
    });
    (0,defineProperty/* default */.Z)(this, "updateOptionLabel", (position, value) => {
      var _this$domNodes$option, _this$domNodes$option2;
      const label = (_this$domNodes$option = this.domNodes.optionLabels) === null || _this$domNodes$option === void 0 ? void 0 : (_this$domNodes$option2 = _this$domNodes$option.find) === null || _this$domNodes$option2 === void 0 ? void 0 : _this$domNodes$option2.call(_this$domNodes$option, label => Number(label.dataset.labelPosition) === Number(position));
      if (label) label.textContent = value;
    });
    (0,defineProperty/* default */.Z)(this, "toggleOptionNodeActive", (optNode, active) => {
      if (!optNode) return;
      if (active) {
        const {
          optionPosition,
          value: optionValue
        } = optNode.dataset;
        this.activeOptionNodeByPosition[optionPosition] = optNode;
        this.updateOptionLabel(optionPosition, optionValue);
        switch (optNode.tagName) {
          case 'INPUT':
            optNode.checked = 'checked';
            optNode.dataset.selected = 'true';
            break;
          case 'OPTION':
            optNode.dataset.selected = 'true';
            const select = optNode.closest('select');
            if (select) select.value = optNode.value;
            break;
          case 'DIV':
            optNode.dataset.selected = 'true';
            if (['default', 'image', 'color'].includes(optNode.dataset.optionType)) {
              optNode.parentElement.classList.add('sf_variant-selected');
            }
            break;
          default:
            console.warn('Unable to activate option node', optNode);
            break;
        }
      } else {
        if (['default', 'image', 'color'].includes(optNode.dataset.optionType)) {
          optNode.parentElement.classList.remove('sf_variant-selected');
        } else {
          optNode.style.border = '';
        }
        optNode.checked = false;
        delete optNode.dataset.selected;
        const select = optNode.closest('select');
        if (select) select.value = '';
      }
    });
    (0,defineProperty/* default */.Z)(this, "updateBySelectedVariant", variant => {
      this.updateATCButtonByVariant(variant);
      if (variant) {
        if (variant.id !== this.productData.current_variant_id) {
          this.updateOptionByVariant(variant);
          this.updatePriceByVariant(variant);
          this.updateStockCountdownByVariant(variant);
          this.updateSkuByVariant(variant);
          this.updateAvailabilityByVariant(variant);
          this.updateBrowserHistory(variant);
          this.hideSoldoutAndUnavailableOptions(variant);
          this.updateProductCardSoldOutBadge(variant);
          this.productData.current_variant_id = variant.id;
          this.changeProductImage(variant);
        }
      }
      MinimogEvents.emit(`${this.productData.id}__VARIANT_CHANGE`, variant, this);
      // window?.DoublyGlobalCurrency?.convertAll?.($?.('[name=doubly-currencies]')?.val?.());
    });
    (0,defineProperty/* default */.Z)(this, "updateProductCardSoldOutBadge", variant => {
      if (this.view === "card" && this.domNodes.soldOutBadge) {
        this.domNodes.soldOutBadge.style.display = variant.available ? 'none' : 'flex';
      }
    });
    (0,defineProperty/* default */.Z)(this, "updateOptionByVariant", variant => {
      Object.values(this.activeOptionNodeByPosition).forEach(optNode => this.toggleOptionNodeActive(optNode, false));
      const {
        optionNodes
      } = this.domNodes;
      const {
        options = []
      } = variant || {};
      options.forEach((option, index) => {
        const optPosition = index + 1;
        optionNodes.forEach(optNode => {
          const _optPosition = Number(optNode.dataset.optionPosition);
          const _optValue = optNode.dataset.value;
          if (_optPosition === optPosition && option === _optValue) {
            this.toggleOptionNodeActive(optNode, true);
          }
        });
      });
    });
    (0,defineProperty/* default */.Z)(this, "updateATCButtonByVariant", variant => {
      var _addToCart$querySelec;
      const {
        soldOut,
        unavailable,
        addToCart: atcText
      } = product_MinimogStrings;
      const {
        addToCart,
        dynamicCheckout
      } = this.domNodes;
      const atcTextNode = addToCart === null || addToCart === void 0 ? void 0 : (_addToCart$querySelec = addToCart.querySelector) === null || _addToCart$querySelec === void 0 ? void 0 : _addToCart$querySelec.call(addToCart, '.atc-text');
      if (variant !== null && variant !== void 0 && variant.available) {
        var _addToCart$classList, _addToCart$classList$, _dynamicCheckout$clas, _dynamicCheckout$clas2;
        addToCart === null || addToCart === void 0 ? void 0 : (_addToCart$classList = addToCart.classList) === null || _addToCart$classList === void 0 ? void 0 : (_addToCart$classList$ = _addToCart$classList.remove) === null || _addToCart$classList$ === void 0 ? void 0 : _addToCart$classList$.call(_addToCart$classList, 'disabled');
        if (atcTextNode) {
          atcTextNode.innerText = addToCart.dataset.atcText || atcText;
        }
        dynamicCheckout === null || dynamicCheckout === void 0 ? void 0 : (_dynamicCheckout$clas = dynamicCheckout.classList) === null || _dynamicCheckout$clas === void 0 ? void 0 : (_dynamicCheckout$clas2 = _dynamicCheckout$clas.remove) === null || _dynamicCheckout$clas2 === void 0 ? void 0 : _dynamicCheckout$clas2.call(_dynamicCheckout$clas, 'disabled');
      } else {
        var _addToCart$classList2, _addToCart$classList3, _dynamicCheckout$clas3, _dynamicCheckout$clas4;
        addToCart === null || addToCart === void 0 ? void 0 : (_addToCart$classList2 = addToCart.classList) === null || _addToCart$classList2 === void 0 ? void 0 : (_addToCart$classList3 = _addToCart$classList2.add) === null || _addToCart$classList3 === void 0 ? void 0 : _addToCart$classList3.call(_addToCart$classList2, 'disabled');
        if (atcTextNode) {
          if (typeof (variant === null || variant === void 0 ? void 0 : variant.available) === 'boolean') {
            atcTextNode.innerText = soldOut;
          } else {
            atcTextNode.innerText = unavailable;
          }
        }
        dynamicCheckout === null || dynamicCheckout === void 0 ? void 0 : (_dynamicCheckout$clas3 = dynamicCheckout.classList) === null || _dynamicCheckout$clas3 === void 0 ? void 0 : (_dynamicCheckout$clas4 = _dynamicCheckout$clas3.add) === null || _dynamicCheckout$clas4 === void 0 ? void 0 : _dynamicCheckout$clas4.call(_dynamicCheckout$clas3, 'disabled');
      }
    });
    (0,defineProperty/* default */.Z)(this, "updateBrowserHistory", variant => {
      var _this$productForm, _this$productForm$dat;
      const enableHistoryState = ((_this$productForm = this.productForm) === null || _this$productForm === void 0 ? void 0 : (_this$productForm$dat = _this$productForm.dataset) === null || _this$productForm$dat === void 0 ? void 0 : _this$productForm$dat.enableHistoryState) === 'true';
      const {
        has_only_default_variant,
        current_variant_id
      } = this.productData;
      if (variant && enableHistoryState && !has_only_default_variant && current_variant_id) {
        const url = getUrlWithVariant(window.location.href, variant.id);
        window.history.replaceState({
          path: url
        }, '', url);
      }
    });
    (0,defineProperty/* default */.Z)(this, "changeProductImage", variant => {
      var _this$productHelper;
      (_this$productHelper = this.productHelper) === null || _this$productHelper === void 0 ? void 0 : _this$productHelper.changeMediaByVariant(variant);
    });
    (0,defineProperty/* default */.Z)(this, "handleAddToCart", async e => {
      const missing = productFormCheck(this.productForm);
      if (missing.length > 0) {
        var _e$preventDefault, _this$domNodes2;
        console.warn('Missing field(s): ', missing);
        e === null || e === void 0 ? void 0 : (_e$preventDefault = e.preventDefault) === null || _e$preventDefault === void 0 ? void 0 : _e$preventDefault.call(e);
        return product_MinimogTheme.Notification.show({
          target: this === null || this === void 0 ? void 0 : (_this$domNodes2 = this.domNodes) === null || _this$domNodes2 === void 0 ? void 0 : _this$domNodes2.error,
          method: 'appendChild',
          type: 'warning',
          message: product_MinimogStrings.requiredField
        });
      }
      if (product_MinimogSettings.use_ajax_atc) {
        var _e$preventDefault2;
        e === null || e === void 0 ? void 0 : (_e$preventDefault2 = e.preventDefault) === null || _e$preventDefault2 === void 0 ? void 0 : _e$preventDefault2.call(e);
        this.toggleSpinner(true);
        // Some 3rd apps might override the default FormData, use this code to prevent it.
        let formData = new FormData(this.productForm);
        if (typeof formData._asNative === 'function') {
          formData = formData._asNative().fd;
        }
        const sourceEvent = formData.get('source_event') || 'product-form';
        this.cartAddFromForm(formData).then(r => r.json()).then(res => {
          if ((res === null || res === void 0 ? void 0 : res.status) === 422) {
            var _this$domNodes3;
            product_MinimogTheme.Notification.show({
              target: this === null || this === void 0 ? void 0 : (_this$domNodes3 = this.domNodes) === null || _this$domNodes3 === void 0 ? void 0 : _this$domNodes3.error,
              method: 'appendChild',
              type: 'warning',
              message: (res === null || res === void 0 ? void 0 : res.description) || "Unable to add item to cart!"
            });
          } else {
            res.source = sourceEvent;
            window.Shopify.onItemAdded(res);
          }
          setTimeout(() => this.toggleSpinner(false), 500);
        });
      }
    });
    (0,defineProperty/* default */.Z)(this, "cartAddFromForm", formData => {
      const config = getRequestDefaultConfigs();
      delete config.headers['Content-Type'];
      config.method = 'POST';
      config.body = formData;
      return fetch('/cart/add.js', config);
    });
    (0,defineProperty/* default */.Z)(this, "toggleSpinner", show => {
      const method = show ? 'add' : 'remove';
      this.productForm.classList[method]('adding');
    });
    (0,defineProperty/* default */.Z)(this, "serializeForm", formData => {
      let obj = {};
      for (var key of formData.keys()) {
        obj[key] = formData.get(key);
      }
      return obj;
    });
    if (productForm !== null && productForm !== void 0 && (_productForm$classLis = productForm.classList) !== null && _productForm$classLis !== void 0 && _productForm$classLis.contains('initialized')) return;
    const {
      autoInit = true,
      saveInstanceToDOM = false
    } = _options;
    this.productForm = productForm;
    this.productBlock = productForm === null || productForm === void 0 ? void 0 : productForm.closest('.sf-prod__block');
    this.domNodes = queryDomNodes(this.selectors, this.productBlock);
    this.setData();
    if (saveInstanceToDOM) this.productForm._productInstane = this;
    if (autoInit) this.init().catch(console.error);
    this.productForm.classList.add('initialized');
    (_MinimogTheme$Product = product_MinimogTheme.Products) === null || _MinimogTheme$Product === void 0 ? void 0 : (_MinimogTheme$Product2 = _MinimogTheme$Product.productInstances) === null || _MinimogTheme$Product2 === void 0 ? void 0 : _MinimogTheme$Product2.push(this);
  }
}
class Products {
  constructor() {
    var _this = this;
    (0,defineProperty/* default */.Z)(this, "productInstances", []);
    (0,defineProperty/* default */.Z)(this, "initProductForms", async function () {
      let {
        context = document.documentElement,
        forceReInit = false
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (forceReInit) {
        _this.productInstances.forEach(prodInstance => prodInstance === null || prodInstance === void 0 ? void 0 : prodInstance.unsubscribeEvents());
        _this.productInstances = [];
      }
      ;
      [...context.querySelectorAll('form[data-product-id]')].forEach(form => {
        console.log(form, 'init product');
        if (!form.classList.contains('initialized') || forceReInit) {
          new Product(form);
        }
      });
    });
  }
}

// MinimogTheme.Product = Product
// MinimogTheme.Products = new Products()
;// CONCATENATED MODULE: ./src/js/modules/incart.js
/* provided dependency */ var incart_MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var incart_MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var incart_MinimogEvents = __webpack_require__(4558)["s0"];
/* provided dependency */ var incart_createElement = __webpack_require__(6295)["Z"];




// import '@modules/cart'

class InCart {
  constructor(settings) {
    var _this = this;
    (0,defineProperty/* default */.Z)(this, "appURL", incart_MinimogSettings.foxkitAppURL ? `https://${incart_MinimogSettings.foxkitAppURL}` : '');
    (0,defineProperty/* default */.Z)(this, "cartItems", []);
    (0,defineProperty/* default */.Z)(this, "renderedProducts", []);
    (0,defineProperty/* default */.Z)(this, "init", async () => {
      var _MinimogEvents$subscr2, _MinimogEvents2;
      if (incart_MinimogTheme.Cart.cart) {
        this.cartItems = incart_MinimogTheme.Cart.cart.items;
      } else {
        const cart = await incart_MinimogTheme.Cart.getCart();
        if (cart) this.cartItems = cart.items;
      }
      if (incart_MinimogSettings.template === 'cart') {
        this.renderIncartProducts();
      } else {
        var _MinimogEvents$subscr, _MinimogEvents;
        (_MinimogEvents$subscr = (_MinimogEvents = incart_MinimogEvents).subscribe) === null || _MinimogEvents$subscr === void 0 ? void 0 : _MinimogEvents$subscr.call(_MinimogEvents, 'ON_OPEN_DRAWER_CART', this.renderIncartProducts);
      }
      (_MinimogEvents$subscr2 = (_MinimogEvents2 = incart_MinimogEvents).subscribe) === null || _MinimogEvents$subscr2 === void 0 ? void 0 : _MinimogEvents$subscr2.call(_MinimogEvents2, 'ON_CART_UPDATE', this.renderIncartProducts);
    });
    (0,defineProperty/* default */.Z)(this, "fetchIncartData", function () {
      let cartItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      const productIds = Array.from(new Set(cartItems.map(_ref => {
        let {
          product_id
        } = _ref;
        return product_id;
      })));
      if (!productIds.length) return {};
      return new Promise((resolve, reject) => {
        fetch(`${_this.appURL}/api/public/in-cart/?shop=${window.Shopify.shop}&productIds=${productIds}`).then(response => response.json()).then(resolve).catch(reject);
      });
    });
    (0,defineProperty/* default */.Z)(this, "renderIncartProducts", async cart => {
      if (cart) {
        this.cartItems = cart.items;
      }
      const res = await this.fetchIncartData(this.cartItems);
      if (res.ok) {
        var _MinimogTheme$Cart;
        const {
          cartDrawer
        } = (_MinimogTheme$Cart = incart_MinimogTheme.Cart) === null || _MinimogTheme$Cart === void 0 ? void 0 : _MinimogTheme$Cart.domNodes;
        if (cartDrawer) {
          this.renderedProducts = [];
          await Promise.all(res.payload.map(async offer => {
            const products = await this.getIncartItemRecommendedProducts(offer, this.cartItems);
            if (products !== null && products !== void 0 && products.length) {
              const targetItem = cartDrawer.querySelector(`[data-cart-item][data-product-id="${offer === null || offer === void 0 ? void 0 : offer.product_id}"]`);
              if (targetItem && !targetItem.dataset.hasUpsell) {
                targetItem.setAttribute('data-has-upsell', true);
                const incartComponent = incart_createElement(InCartUpSell, {
                  product: this.cartItems.find(_ref2 => {
                    let {
                      product_id
                    } = _ref2;
                    return product_id === offer.product_id;
                  }),
                  recommended_products: products,
                  settings: offer
                });
                targetItem.appendChild(incartComponent);
                const productForm = new Products();
                productForm.initProductForms({
                  context: incartComponent
                }).catch(console.error);
              }
            }
          }));
        }
      }
    });
    (0,defineProperty/* default */.Z)(this, "getIncartItemRecommendedProducts", async (offer, cartItems) => {
      let {
        recommended_products
      } = offer;
      const handles = Array.from(new Set(cartItems.map(_ref3 => {
        let {
          handle
        } = _ref3;
        return handle;
      })));
      recommended_products = recommended_products.filter(hdl => handles.indexOf(hdl) === -1 && this.renderedProducts.indexOf(hdl) === -1);
      this.renderedProducts = this.renderedProducts.concat(recommended_products);
      const products = await getProductsJSON(recommended_products);
      return products;
    });
    this.settings = settings;
    this.cartItems = [];
    this.init().catch(console.error);
  }
}
window.FoxKit = window.FoxKit || {};
window.FoxKit.InCart = InCart;
}();
/******/ })()
;
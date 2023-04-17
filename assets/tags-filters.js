/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GQ": function() { return /* binding */ MinimogSettings; },
/* harmony export */   "LE": function() { return /* binding */ MinimogTheme; }
/* harmony export */ });
/* unused harmony exports MinimogEvents, MinimogStrings, MinimogLibs */
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

/***/ 821:
/***/ (function() {

(function () {
  /*
  
   Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   Google as part of the polymer project is also subject to an additional IP
   rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';

  var n = window.Document.prototype.createElement,
    p = window.Document.prototype.createElementNS,
    aa = window.Document.prototype.importNode,
    ba = window.Document.prototype.prepend,
    ca = window.Document.prototype.append,
    da = window.DocumentFragment.prototype.prepend,
    ea = window.DocumentFragment.prototype.append,
    q = window.Node.prototype.cloneNode,
    r = window.Node.prototype.appendChild,
    t = window.Node.prototype.insertBefore,
    u = window.Node.prototype.removeChild,
    v = window.Node.prototype.replaceChild,
    w = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
    y = window.Element.prototype.attachShadow,
    z = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
    A = window.Element.prototype.getAttribute,
    B = window.Element.prototype.setAttribute,
    C = window.Element.prototype.removeAttribute,
    D = window.Element.prototype.getAttributeNS,
    E = window.Element.prototype.setAttributeNS,
    F = window.Element.prototype.removeAttributeNS,
    G = window.Element.prototype.insertAdjacentElement,
    H = window.Element.prototype.insertAdjacentHTML,
    fa = window.Element.prototype.prepend,
    ha = window.Element.prototype.append,
    ia = window.Element.prototype.before,
    ja = window.Element.prototype.after,
    ka = window.Element.prototype.replaceWith,
    la = window.Element.prototype.remove,
    ma = window.HTMLElement,
    I = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
    na = window.HTMLElement.prototype.insertAdjacentElement,
    oa = window.HTMLElement.prototype.insertAdjacentHTML;
  var pa = new Set();
  "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function (a) {
    return pa.add(a);
  });
  function qa(a) {
    var b = pa.has(a);
    a = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);
    return !b && a;
  }
  var ra = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
  function J(a) {
    var b = a.isConnected;
    if (void 0 !== b) return b;
    if (ra(a)) return !0;
    for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
    return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }
  function K(a) {
    var b = a.children;
    if (b) return Array.prototype.slice.call(b);
    b = [];
    for (a = a.firstChild; a; a = a.nextSibling) a.nodeType === Node.ELEMENT_NODE && b.push(a);
    return b;
  }
  function L(a, b) {
    for (; b && b !== a && !b.nextSibling;) b = b.parentNode;
    return b && b !== a ? b.nextSibling : null;
  }
  function M(a, b, c) {
    for (var f = a; f;) {
      if (f.nodeType === Node.ELEMENT_NODE) {
        var d = f;
        b(d);
        var e = d.localName;
        if ("link" === e && "import" === d.getAttribute("rel")) {
          f = d.import;
          void 0 === c && (c = new Set());
          if (f instanceof Node && !c.has(f)) for (c.add(f), f = f.firstChild; f; f = f.nextSibling) M(f, b, c);
          f = L(a, d);
          continue;
        } else if ("template" === e) {
          f = L(a, d);
          continue;
        }
        if (d = d.__CE_shadowRoot) for (d = d.firstChild; d; d = d.nextSibling) M(d, b, c);
      }
      f = f.firstChild ? f.firstChild : L(a, f);
    }
  }
  ;
  function N() {
    var a = !(null === O || void 0 === O || !O.noDocumentConstructionObserver),
      b = !(null === O || void 0 === O || !O.shadyDomFastWalk);
    this.m = [];
    this.g = [];
    this.j = !1;
    this.shadyDomFastWalk = b;
    this.I = !a;
  }
  function P(a, b, c, f) {
    var d = window.ShadyDOM;
    if (a.shadyDomFastWalk && d && d.inUse) {
      if (b.nodeType === Node.ELEMENT_NODE && c(b), b.querySelectorAll) for (a = d.nativeMethods.querySelectorAll.call(b, "*"), b = 0; b < a.length; b++) c(a[b]);
    } else M(b, c, f);
  }
  function sa(a, b) {
    a.j = !0;
    a.m.push(b);
  }
  function ta(a, b) {
    a.j = !0;
    a.g.push(b);
  }
  function Q(a, b) {
    a.j && P(a, b, function (c) {
      return R(a, c);
    });
  }
  function R(a, b) {
    if (a.j && !b.__CE_patched) {
      b.__CE_patched = !0;
      for (var c = 0; c < a.m.length; c++) a.m[c](b);
      for (c = 0; c < a.g.length; c++) a.g[c](b);
    }
  }
  function S(a, b) {
    var c = [];
    P(a, b, function (d) {
      return c.push(d);
    });
    for (b = 0; b < c.length; b++) {
      var f = c[b];
      1 === f.__CE_state ? a.connectedCallback(f) : T(a, f);
    }
  }
  function U(a, b) {
    var c = [];
    P(a, b, function (d) {
      return c.push(d);
    });
    for (b = 0; b < c.length; b++) {
      var f = c[b];
      1 === f.__CE_state && a.disconnectedCallback(f);
    }
  }
  function V(a, b, c) {
    c = void 0 === c ? {} : c;
    var f = c.J,
      d = c.upgrade || function (g) {
        return T(a, g);
      },
      e = [];
    P(a, b, function (g) {
      a.j && R(a, g);
      if ("link" === g.localName && "import" === g.getAttribute("rel")) {
        var h = g.import;
        h instanceof Node && (h.__CE_isImportDocument = !0, h.__CE_registry = document.__CE_registry);
        h && "complete" === h.readyState ? h.__CE_documentLoadHandled = !0 : g.addEventListener("load", function () {
          var k = g.import;
          if (!k.__CE_documentLoadHandled) {
            k.__CE_documentLoadHandled = !0;
            var l = new Set();
            f && (f.forEach(function (m) {
              return l.add(m);
            }), l.delete(k));
            V(a, k, {
              J: l,
              upgrade: d
            });
          }
        });
      } else e.push(g);
    }, f);
    for (b = 0; b < e.length; b++) d(e[b]);
  }
  function T(a, b) {
    try {
      var c = b.ownerDocument,
        f = c.__CE_registry;
      var d = f && (c.defaultView || c.__CE_isImportDocument) ? W(f, b.localName) : void 0;
      if (d && void 0 === b.__CE_state) {
        d.constructionStack.push(b);
        try {
          try {
            if (new d.constructorFunction() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
          } finally {
            d.constructionStack.pop();
          }
        } catch (k) {
          throw b.__CE_state = 2, k;
        }
        b.__CE_state = 1;
        b.__CE_definition = d;
        if (d.attributeChangedCallback && b.hasAttributes()) {
          var e = d.observedAttributes;
          for (d = 0; d < e.length; d++) {
            var g = e[d],
              h = b.getAttribute(g);
            null !== h && a.attributeChangedCallback(b, g, null, h, null);
          }
        }
        J(b) && a.connectedCallback(b);
      }
    } catch (k) {
      X(k);
    }
  }
  N.prototype.connectedCallback = function (a) {
    var b = a.__CE_definition;
    if (b.connectedCallback) try {
      b.connectedCallback.call(a);
    } catch (c) {
      X(c);
    }
  };
  N.prototype.disconnectedCallback = function (a) {
    var b = a.__CE_definition;
    if (b.disconnectedCallback) try {
      b.disconnectedCallback.call(a);
    } catch (c) {
      X(c);
    }
  };
  N.prototype.attributeChangedCallback = function (a, b, c, f, d) {
    var e = a.__CE_definition;
    if (e.attributeChangedCallback && -1 < e.observedAttributes.indexOf(b)) try {
      e.attributeChangedCallback.call(a, b, c, f, d);
    } catch (g) {
      X(g);
    }
  };
  function ua(a, b, c, f) {
    var d = b.__CE_registry;
    if (d && (null === f || "http://www.w3.org/1999/xhtml" === f) && (d = W(d, c))) try {
      var e = new d.constructorFunction();
      if (void 0 === e.__CE_state || void 0 === e.__CE_definition) throw Error("Failed to construct '" + c + "': The returned value was not constructed with the HTMLElement constructor.");
      if ("http://www.w3.org/1999/xhtml" !== e.namespaceURI) throw Error("Failed to construct '" + c + "': The constructed element's namespace must be the HTML namespace.");
      if (e.hasAttributes()) throw Error("Failed to construct '" + c + "': The constructed element must not have any attributes.");
      if (null !== e.firstChild) throw Error("Failed to construct '" + c + "': The constructed element must not have any children.");
      if (null !== e.parentNode) throw Error("Failed to construct '" + c + "': The constructed element must not have a parent node.");
      if (e.ownerDocument !== b) throw Error("Failed to construct '" + c + "': The constructed element's owner document is incorrect.");
      if (e.localName !== c) throw Error("Failed to construct '" + c + "': The constructed element's local name is incorrect.");
      return e;
    } catch (g) {
      return X(g), b = null === f ? n.call(b, c) : p.call(b, f, c), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), b.__CE_state = 2, b.__CE_definition = void 0, R(a, b), b;
    }
    b = null === f ? n.call(b, c) : p.call(b, f, c);
    R(a, b);
    return b;
  }
  function X(a) {
    var b = "",
      c = "",
      f = 0,
      d = 0;
    a instanceof Error ? (b = a.message, c = a.sourceURL || a.fileName || "", f = a.line || a.lineNumber || 0, d = a.column || a.columnNumber || 0) : b = "Uncaught " + String(a);
    var e = void 0;
    void 0 === ErrorEvent.prototype.initErrorEvent ? e = new ErrorEvent("error", {
      cancelable: !0,
      message: b,
      filename: c,
      lineno: f,
      colno: d,
      error: a
    }) : (e = document.createEvent("ErrorEvent"), e.initErrorEvent("error", !1, !0, b, c, f), e.preventDefault = function () {
      Object.defineProperty(this, "defaultPrevented", {
        configurable: !0,
        get: function () {
          return !0;
        }
      });
    });
    void 0 === e.error && Object.defineProperty(e, "error", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return a;
      }
    });
    window.dispatchEvent(e);
    e.defaultPrevented || console.error(a);
  }
  ;
  function va() {
    var a = this;
    this.g = void 0;
    this.F = new Promise(function (b) {
      a.l = b;
    });
  }
  va.prototype.resolve = function (a) {
    if (this.g) throw Error("Already resolved.");
    this.g = a;
    this.l(a);
  };
  function wa(a) {
    var b = document;
    this.l = void 0;
    this.h = a;
    this.g = b;
    V(this.h, this.g);
    "loading" === this.g.readyState && (this.l = new MutationObserver(this.G.bind(this)), this.l.observe(this.g, {
      childList: !0,
      subtree: !0
    }));
  }
  function xa(a) {
    a.l && a.l.disconnect();
  }
  wa.prototype.G = function (a) {
    var b = this.g.readyState;
    "interactive" !== b && "complete" !== b || xa(this);
    for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, f = 0; f < c.length; f++) V(this.h, c[f]);
  };
  function Y(a) {
    this.s = new Map();
    this.u = new Map();
    this.C = new Map();
    this.A = !1;
    this.B = new Map();
    this.o = function (b) {
      return b();
    };
    this.i = !1;
    this.v = [];
    this.h = a;
    this.D = a.I ? new wa(a) : void 0;
  }
  Y.prototype.H = function (a, b) {
    var c = this;
    if (!(b instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");
    ya(this, a);
    this.s.set(a, b);
    this.v.push(a);
    this.i || (this.i = !0, this.o(function () {
      return za(c);
    }));
  };
  Y.prototype.define = function (a, b) {
    var c = this;
    if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
    ya(this, a);
    Aa(this, a, b);
    this.v.push(a);
    this.i || (this.i = !0, this.o(function () {
      return za(c);
    }));
  };
  function ya(a, b) {
    if (!qa(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");
    if (W(a, b)) throw Error("A custom element with name '" + (b + "' has already been defined."));
    if (a.A) throw Error("A custom element is already being defined.");
  }
  function Aa(a, b, c) {
    a.A = !0;
    var f;
    try {
      var d = c.prototype;
      if (!(d instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
      var e = function (m) {
        var x = d[m];
        if (void 0 !== x && !(x instanceof Function)) throw Error("The '" + m + "' callback must be a function.");
        return x;
      };
      var g = e("connectedCallback");
      var h = e("disconnectedCallback");
      var k = e("adoptedCallback");
      var l = (f = e("attributeChangedCallback")) && c.observedAttributes || [];
    } catch (m) {
      throw m;
    } finally {
      a.A = !1;
    }
    c = {
      localName: b,
      constructorFunction: c,
      connectedCallback: g,
      disconnectedCallback: h,
      adoptedCallback: k,
      attributeChangedCallback: f,
      observedAttributes: l,
      constructionStack: []
    };
    a.u.set(b, c);
    a.C.set(c.constructorFunction, c);
    return c;
  }
  Y.prototype.upgrade = function (a) {
    V(this.h, a);
  };
  function za(a) {
    if (!1 !== a.i) {
      a.i = !1;
      for (var b = [], c = a.v, f = new Map(), d = 0; d < c.length; d++) f.set(c[d], []);
      V(a.h, document, {
        upgrade: function (k) {
          if (void 0 === k.__CE_state) {
            var l = k.localName,
              m = f.get(l);
            m ? m.push(k) : a.u.has(l) && b.push(k);
          }
        }
      });
      for (d = 0; d < b.length; d++) T(a.h, b[d]);
      for (d = 0; d < c.length; d++) {
        for (var e = c[d], g = f.get(e), h = 0; h < g.length; h++) T(a.h, g[h]);
        (e = a.B.get(e)) && e.resolve(void 0);
      }
      c.length = 0;
    }
  }
  Y.prototype.get = function (a) {
    if (a = W(this, a)) return a.constructorFunction;
  };
  Y.prototype.whenDefined = function (a) {
    if (!qa(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
    var b = this.B.get(a);
    if (b) return b.F;
    b = new va();
    this.B.set(a, b);
    var c = this.u.has(a) || this.s.has(a);
    a = -1 === this.v.indexOf(a);
    c && a && b.resolve(void 0);
    return b.F;
  };
  Y.prototype.polyfillWrapFlushCallback = function (a) {
    this.D && xa(this.D);
    var b = this.o;
    this.o = function (c) {
      return a(function () {
        return b(c);
      });
    };
  };
  function W(a, b) {
    var c = a.u.get(b);
    if (c) return c;
    if (c = a.s.get(b)) {
      a.s.delete(b);
      try {
        return Aa(a, b, c());
      } catch (f) {
        X(f);
      }
    }
  }
  Y.prototype.define = Y.prototype.define;
  Y.prototype.upgrade = Y.prototype.upgrade;
  Y.prototype.get = Y.prototype.get;
  Y.prototype.whenDefined = Y.prototype.whenDefined;
  Y.prototype.polyfillDefineLazy = Y.prototype.H;
  Y.prototype.polyfillWrapFlushCallback = Y.prototype.polyfillWrapFlushCallback;
  function Z(a, b, c) {
    function f(d) {
      return function (e) {
        for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
        h = [];
        for (var k = [], l = 0; l < g.length; l++) {
          var m = g[l];
          m instanceof Element && J(m) && k.push(m);
          if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) h.push(m);else h.push(m);
        }
        d.apply(this, g);
        for (g = 0; g < k.length; g++) U(a, k[g]);
        if (J(this)) for (g = 0; g < h.length; g++) k = h[g], k instanceof Element && S(a, k);
      };
    }
    void 0 !== c.prepend && (b.prepend = f(c.prepend));
    void 0 !== c.append && (b.append = f(c.append));
  }
  ;
  function Ba(a) {
    Document.prototype.createElement = function (b) {
      return ua(a, this, b, null);
    };
    Document.prototype.importNode = function (b, c) {
      b = aa.call(this, b, !!c);
      this.__CE_registry ? V(a, b) : Q(a, b);
      return b;
    };
    Document.prototype.createElementNS = function (b, c) {
      return ua(a, this, c, b);
    };
    Z(a, Document.prototype, {
      prepend: ba,
      append: ca
    });
  }
  ;
  function Ca(a) {
    function b(f) {
      return function (d) {
        for (var e = [], g = 0; g < arguments.length; ++g) e[g] = arguments[g];
        g = [];
        for (var h = [], k = 0; k < e.length; k++) {
          var l = e[k];
          l instanceof Element && J(l) && h.push(l);
          if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) g.push(l);else g.push(l);
        }
        f.apply(this, e);
        for (e = 0; e < h.length; e++) U(a, h[e]);
        if (J(this)) for (e = 0; e < g.length; e++) h = g[e], h instanceof Element && S(a, h);
      };
    }
    var c = Element.prototype;
    void 0 !== ia && (c.before = b(ia));
    void 0 !== ja && (c.after = b(ja));
    void 0 !== ka && (c.replaceWith = function (f) {
      for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
      e = [];
      for (var g = [], h = 0; h < d.length; h++) {
        var k = d[h];
        k instanceof Element && J(k) && g.push(k);
        if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) e.push(k);else e.push(k);
      }
      h = J(this);
      ka.apply(this, d);
      for (d = 0; d < g.length; d++) U(a, g[d]);
      if (h) for (U(a, this), d = 0; d < e.length; d++) g = e[d], g instanceof Element && S(a, g);
    });
    void 0 !== la && (c.remove = function () {
      var f = J(this);
      la.call(this);
      f && U(a, this);
    });
  }
  ;
  function Da(a) {
    function b(d, e) {
      Object.defineProperty(d, "innerHTML", {
        enumerable: e.enumerable,
        configurable: !0,
        get: e.get,
        set: function (g) {
          var h = this,
            k = void 0;
          J(this) && (k = [], P(a, this, function (x) {
            x !== h && k.push(x);
          }));
          e.set.call(this, g);
          if (k) for (var l = 0; l < k.length; l++) {
            var m = k[l];
            1 === m.__CE_state && a.disconnectedCallback(m);
          }
          this.ownerDocument.__CE_registry ? V(a, this) : Q(a, this);
          return g;
        }
      });
    }
    function c(d, e) {
      d.insertAdjacentElement = function (g, h) {
        var k = J(h);
        g = e.call(this, g, h);
        k && U(a, h);
        J(g) && S(a, h);
        return g;
      };
    }
    function f(d, e) {
      function g(h, k) {
        for (var l = []; h !== k; h = h.nextSibling) l.push(h);
        for (k = 0; k < l.length; k++) V(a, l[k]);
      }
      d.insertAdjacentHTML = function (h, k) {
        h = h.toLowerCase();
        if ("beforebegin" === h) {
          var l = this.previousSibling;
          e.call(this, h, k);
          g(l || this.parentNode.firstChild, this);
        } else if ("afterbegin" === h) l = this.firstChild, e.call(this, h, k), g(this.firstChild, l);else if ("beforeend" === h) l = this.lastChild, e.call(this, h, k), g(l || this.firstChild, null);else if ("afterend" === h) l = this.nextSibling, e.call(this, h, k), g(this.nextSibling, l);else throw new SyntaxError("The value provided (" + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
      };
    }
    y && (Element.prototype.attachShadow = function (d) {
      d = y.call(this, d);
      if (a.j && !d.__CE_patched) {
        d.__CE_patched = !0;
        for (var e = 0; e < a.m.length; e++) a.m[e](d);
      }
      return this.__CE_shadowRoot = d;
    });
    z && z.get ? b(Element.prototype, z) : I && I.get ? b(HTMLElement.prototype, I) : ta(a, function (d) {
      b(d, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return q.call(this, !0).innerHTML;
        },
        set: function (e) {
          var g = "template" === this.localName,
            h = g ? this.content : this,
            k = p.call(document, this.namespaceURI, this.localName);
          for (k.innerHTML = e; 0 < h.childNodes.length;) u.call(h, h.childNodes[0]);
          for (e = g ? k.content : k; 0 < e.childNodes.length;) r.call(h, e.childNodes[0]);
        }
      });
    });
    Element.prototype.setAttribute = function (d, e) {
      if (1 !== this.__CE_state) return B.call(this, d, e);
      var g = A.call(this, d);
      B.call(this, d, e);
      e = A.call(this, d);
      a.attributeChangedCallback(this, d, g, e, null);
    };
    Element.prototype.setAttributeNS = function (d, e, g) {
      if (1 !== this.__CE_state) return E.call(this, d, e, g);
      var h = D.call(this, d, e);
      E.call(this, d, e, g);
      g = D.call(this, d, e);
      a.attributeChangedCallback(this, e, h, g, d);
    };
    Element.prototype.removeAttribute = function (d) {
      if (1 !== this.__CE_state) return C.call(this, d);
      var e = A.call(this, d);
      C.call(this, d);
      null !== e && a.attributeChangedCallback(this, d, e, null, null);
    };
    Element.prototype.removeAttributeNS = function (d, e) {
      if (1 !== this.__CE_state) return F.call(this, d, e);
      var g = D.call(this, d, e);
      F.call(this, d, e);
      var h = D.call(this, d, e);
      g !== h && a.attributeChangedCallback(this, e, g, h, d);
    };
    na ? c(HTMLElement.prototype, na) : G && c(Element.prototype, G);
    oa ? f(HTMLElement.prototype, oa) : H && f(Element.prototype, H);
    Z(a, Element.prototype, {
      prepend: fa,
      append: ha
    });
    Ca(a);
  }
  ;
  var Ea = {};
  function Fa(a) {
    function b() {
      var c = this.constructor;
      var f = document.__CE_registry.C.get(c);
      if (!f) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
      var d = f.constructionStack;
      if (0 === d.length) return d = n.call(document, f.localName), Object.setPrototypeOf(d, c.prototype), d.__CE_state = 1, d.__CE_definition = f, R(a, d), d;
      var e = d.length - 1,
        g = d[e];
      if (g === Ea) throw Error("Failed to construct '" + f.localName + "': This element was already constructed.");
      d[e] = Ea;
      Object.setPrototypeOf(g, c.prototype);
      R(a, g);
      return g;
    }
    b.prototype = ma.prototype;
    Object.defineProperty(HTMLElement.prototype, "constructor", {
      writable: !0,
      configurable: !0,
      enumerable: !1,
      value: b
    });
    window.HTMLElement = b;
  }
  ;
  function Ga(a) {
    function b(c, f) {
      Object.defineProperty(c, "textContent", {
        enumerable: f.enumerable,
        configurable: !0,
        get: f.get,
        set: function (d) {
          if (this.nodeType === Node.TEXT_NODE) f.set.call(this, d);else {
            var e = void 0;
            if (this.firstChild) {
              var g = this.childNodes,
                h = g.length;
              if (0 < h && J(this)) {
                e = Array(h);
                for (var k = 0; k < h; k++) e[k] = g[k];
              }
            }
            f.set.call(this, d);
            if (e) for (d = 0; d < e.length; d++) U(a, e[d]);
          }
        }
      });
    }
    Node.prototype.insertBefore = function (c, f) {
      if (c instanceof DocumentFragment) {
        var d = K(c);
        c = t.call(this, c, f);
        if (J(this)) for (f = 0; f < d.length; f++) S(a, d[f]);
        return c;
      }
      d = c instanceof Element && J(c);
      f = t.call(this, c, f);
      d && U(a, c);
      J(this) && S(a, c);
      return f;
    };
    Node.prototype.appendChild = function (c) {
      if (c instanceof DocumentFragment) {
        var f = K(c);
        c = r.call(this, c);
        if (J(this)) for (var d = 0; d < f.length; d++) S(a, f[d]);
        return c;
      }
      f = c instanceof Element && J(c);
      d = r.call(this, c);
      f && U(a, c);
      J(this) && S(a, c);
      return d;
    };
    Node.prototype.cloneNode = function (c) {
      c = q.call(this, !!c);
      this.ownerDocument.__CE_registry ? V(a, c) : Q(a, c);
      return c;
    };
    Node.prototype.removeChild = function (c) {
      var f = c instanceof Element && J(c),
        d = u.call(this, c);
      f && U(a, c);
      return d;
    };
    Node.prototype.replaceChild = function (c, f) {
      if (c instanceof DocumentFragment) {
        var d = K(c);
        c = v.call(this, c, f);
        if (J(this)) for (U(a, f), f = 0; f < d.length; f++) S(a, d[f]);
        return c;
      }
      d = c instanceof Element && J(c);
      var e = v.call(this, c, f),
        g = J(this);
      g && U(a, f);
      d && U(a, c);
      g && S(a, c);
      return e;
    };
    w && w.get ? b(Node.prototype, w) : sa(a, function (c) {
      b(c, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          for (var f = [], d = this.firstChild; d; d = d.nextSibling) d.nodeType !== Node.COMMENT_NODE && f.push(d.textContent);
          return f.join("");
        },
        set: function (f) {
          for (; this.firstChild;) u.call(this, this.firstChild);
          null != f && "" !== f && r.call(this, document.createTextNode(f));
        }
      });
    });
  }
  ;
  var O = window.customElements;
  function Ha() {
    var a = new N();
    Fa(a);
    Ba(a);
    Z(a, DocumentFragment.prototype, {
      prepend: da,
      append: ea
    });
    Ga(a);
    Da(a);
    window.CustomElementRegistry = Y;
    a = new Y(a);
    document.__CE_registry = a;
    Object.defineProperty(window, "customElements", {
      configurable: !0,
      enumerable: !0,
      value: a
    });
  }
  O && !O.forcePolyfill && "function" == typeof O.define && "function" == typeof O.get || Ha();
  window.__CE_installPolyfill = Ha;
}).call(self);

/***/ }),

/***/ 9367:
/***/ (function(module) {

!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  return (() => {
    "use strict";

    var t = {
        d: (e, o) => {
          for (var a in o) t.o(o, a) && !t.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: o[a]
          });
        },
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        r: t => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(t, "__esModule", {
            value: !0
          });
        }
      },
      e = {};
    function o(t, e) {
      for (var o = 0; o < e.length; o++) {
        var a = e[o];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
      }
    }
    function a(t, e, a) {
      return e && o(t.prototype, e), a && o(t, a), Object.defineProperty(t, "prototype", {
        writable: !1
      }), t;
    }
    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e, o) {
      return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = o, t;
    }
    t.r(e), t.d(e, {
      default: () => s
    });
    var i = {
        overlay: null,
        thickness: "3px",
        color: "gray",
        startDuration: 1e3,
        finishDuration: 300
      },
      s = a(function t() {
        var e = this,
          o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        n(this, t), r(this, "setLoadingData", function () {
          var t = e.target,
            o = e.options,
            a = o.startDuration,
            n = o.finishDuration,
            r = o.thickness,
            i = o.color;
          t.style.setProperty("--al-thickness", " ".concat(r)), t.style.setProperty("--al-color", " ".concat(i)), t.style.setProperty("--al-start-duration", " ".concat(a, "ms")), t.style.setProperty("--al-finish-duration", " ".concat(n, "ms"));
        }), r(this, "start", function () {
          e.target.classList.add("al-loading-bar", "start", "loading"), e.overlay && e.overlay.classList.add("al-loading-overlay", "overlay-show");
        }), r(this, "finish", function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {},
            o = e.target,
            a = e.overlay,
            n = e.cleanUp,
            r = e.options.finishDuration,
            i = window.getComputedStyle(o, ":before").width;
          o.style.setProperty("--al-end-width", i), o.classList.add("loaded"), o.classList.remove("loading"), window.requestAnimationFrame(function () {
            o.classList.add("finished"), e.overlay && a.classList.remove("overlay-show");
          }), setTimeout(n, 2 * r), setTimeout(t, r);
        }), r(this, "cleanUp", function () {
          e.target.classList.remove("al-loading-bar", "start", "loaded", "finished"), e.overlay && e.overlay.classList.remove("al-loading-overlay");
        }), this.options = Object.assign({}, i, a), this.target = o, this.overlay = this.options.overlay, this.setLoadingData();
      });
    return e;
  })();
});

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
// EXTERNAL MODULE: ./node_modules/animate-loading/dist/main.js
var main = __webpack_require__(9367);
var main_default = /*#__PURE__*/__webpack_require__.n(main);
// EXTERNAL MODULE: ./src/js/utilities/events.js
var events = __webpack_require__(8971);
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
const formatUrl = (pageType, handle, query) => {
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
// EXTERNAL MODULE: ./node_modules/@webcomponents/custom-elements/custom-elements.min.js
var custom_elements_min = __webpack_require__(821);
;// CONCATENATED MODULE: ./src/js/pages/collection/tags-filters.js
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];






class TagsFilter extends HTMLElement {
  constructor() {
    super();
    _defineProperty(this, "setData", () => {
      const {
        section,
        initialActiveSortingOption
      } = this.domNodes;
      this.enableSorting = section.dataset.enableSorting === "true";
      this.filtersPosition = section.dataset.filtersPosition;
      this.sectionId = section.dataset.sectionId;
      this.activeSortingOption = initialActiveSortingOption;
    });
    _defineProperty(this, "handleFilter", (e, tag) => {
      e.preventDefault();
      if (this.preventClick) return;
      this.preventClick = true;
      const url = tag.querySelector('a').href;
      if (url) this.fetchSectionHtml(url);
    });
    _defineProperty(this, "handleSorting", value => {
      if (!value) return;
      updateParam('sort_by', value);
      this.fetchSectionHtml(window.location.href);
    });
    _defineProperty(this, "renderCollectionHeader", html => {
      var _this$domNodes, _this$domNodes$collec;
      const dom = new DOMParser().parseFromString(html, 'text/html');
      const newCollectionHeader = dom.querySelector(this.selectors.collectionHeader);
      (_this$domNodes = this.domNodes) === null || _this$domNodes === void 0 ? void 0 : (_this$domNodes$collec = _this$domNodes.collectionHeader) === null || _this$domNodes$collec === void 0 ? void 0 : _this$domNodes$collec.replaceWith(newCollectionHeader);
    });
    _defineProperty(this, "renderProductGrid", html => {
      var _dom$querySelector;
      const dom = new DOMParser().parseFromString(html, 'text/html');
      document.title = dom === null || dom === void 0 ? void 0 : (_dom$querySelector = dom.querySelector('title')) === null || _dom$querySelector === void 0 ? void 0 : _dom$querySelector.innerText;
      const newSection = dom.querySelector(this.selectors.section);
      this.domNodes.section.replaceWith(newSection);
    });
    _defineProperty(this, "setLoadingTarget", () => {
      const screen = window.innerWidth < 768 ? 'mobile' : 'desktop';
      const {
        productGridContainer
      } = this.domNodes;
      const isFiltersOffCanvas = screen === "mobile" || this.filtersPosition === "fixed";
      const options = isFiltersOffCanvas ? {} : {
        overlay: productGridContainer
      };
      this.loading = new (main_default())(document.body, options);
    });
    _defineProperty(this, "scrollToTop", () => {
      const target = document.getElementById('CollectionProductGrid');
      scrollIntoView_default()(target, {
        align: {
          topOffset: 80
        }
      });
    });
    this.selectors = {
      mainContent: '#MainContent',
      section: 'section[data-section-type="collection-template"]',
      collectionHeader: '[data-section-type="collection-header"]',
      productGridContainer: '#CollectionProductGrid',
      sorting: 'select[name="sort_by"]',
      initialActiveSortingOption: '.sf__sortmb-list li.active'
    };
    this.preventClick = false;
  }
  connectedCallback() {
    this.domNodes = queryDomNodes(this.selectors);
    this.setData();
    this.listeners = [(0,events/* addEventDelegate */.X)({
      selector: '[data-tag-filter]',
      handler: this.handleFilter
    })];
    this.initSorting();
    this.setLoadingTarget();
  }
  disconnectedCallback() {
    this.listeners.forEach(unsubscribeFunc => unsubscribeFunc());
  }
  initSorting() {
    var _this$domNodes$sortin;
    if (!this.enableSorting) return;
    (_this$domNodes$sortin = this.domNodes.sorting) === null || _this$domNodes$sortin === void 0 ? void 0 : _this$domNodes$sortin.addEventListener('change', e => {
      var _e$target;
      const value = e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value;
      this.handleSorting(value);
    });
    (0,events/* addEventDelegate */.X)({
      selector: '.sf__sortmb-list li',
      handler: (e, option) => {
        if (option !== this.activeSortingOption) {
          var _this$activeSortingOp, _this$activeSortingOp2, _this$activeSortingOp3;
          (_this$activeSortingOp = this.activeSortingOption) === null || _this$activeSortingOp === void 0 ? void 0 : (_this$activeSortingOp2 = _this$activeSortingOp.classList) === null || _this$activeSortingOp2 === void 0 ? void 0 : (_this$activeSortingOp3 = _this$activeSortingOp2.remove) === null || _this$activeSortingOp3 === void 0 ? void 0 : _this$activeSortingOp3.call(_this$activeSortingOp2, 'active');
          option.classList.add('active');
          this.activeSortingOption = option;
          MinimogTheme.Collection.closeMobileSorting();
          this.handleSorting(option.dataset.value);
        }
      }
    });
  }
  fetchSectionHtml(url) {
    this.loading.start();
    fetch(url).then(res => {
      if (res.ok) return res.text();
      throw new Error("Failed to load section!");
    }).then(text => {
      this.preventClick = false;
      this.renderCollectionHeader(text);
      this.renderProductGrid(text);
      this.updateBrowserHistory(url);
      MinimogTheme.Collection.init();
      this.loading.finish(this.scrollToTop);
    });
  }
  updateBrowserHistory(url) {
    window.history.replaceState({
      path: url
    }, '', url);
  }
}
customElements.define('collection-tags-filters', TagsFilter);
}();
/******/ })()
;
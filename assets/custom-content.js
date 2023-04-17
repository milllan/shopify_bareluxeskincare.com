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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/* provided dependency */ var MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];
if (!customElements.get("m-custom-content")) {
  class MCustomContent extends HTMLElement {
    constructor() {
      super();
      this.selectors = {
        cdtContainer: ['.countdown-timer-container'],
        bundleError: '.product-bundles__error',
        productBundles: ['.product-bundles'],
        productVariantSelects: '.sf-product-variant-option-dropdown',
        totalPrice: '[data-total-price]',
        submitBundle: '[data-add-bundle]',
        errorWrapper: '.product-bundles__error'
      };
      this.domNodes = queryDomNodes(this.selectors, this);
      this.spinner = `<svg class='animate-spin hidden w-[20px] h-[20px] m-0.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
			<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		  </svg>`;
    }
    connectedCallback() {
      this.initCountDown();
      if (this.domNodes.productBundles) this.initProductBundles();
    }
    initCountDown() {
      const countdowns = this.domNodes.cdtContainer;
      if (countdowns.length) {
        for (let countdown of countdowns) {
          const time = countdown.dataset.time;
          const endTime = Date.parse(time.split(' ').join('T'));
          if (endTime) {
            new CountdownTimer(countdown, Date.now(), endTime);
          }
        }
      }
    }
    initProductBundles() {
      this.products = [];
      this.variants = [];
      this.domNodes.productBundles.length && this.domNodes.productBundles.map(bundle => {
        const products = bundle.querySelectorAll('.product-bundles__item');
        for (let product of products) {
          let variants = product.nextElementSibling.innerHTML;
          variants = JSON.parse(variants);
          this.variants.push(variants);
          this.products.push(product);
          addEventDelegate({
            context: product,
            event: 'change',
            selector: this.selectors.productVariantSelects,
            handler: e => this._handleChangePrice(e, product, variants)
          });
        }
        addEventDelegate({
          context: bundle,
          selector: this.selectors.submitBundle,
          handler: e => this._handleAddItems(e, bundle)
        });
      });
    }
    _handleChangePrice(evt, product, variants) {
      const regularPrice = product.querySelector('[data-regular-price]');
      const comparePrice = product.querySelector('[data-compare-price]');
      const savedPrice = product.querySelector('[data-saved-price]');
      const selectedVariant = evt.target.value;
      const variant = variants.find(v => v.id === parseInt(selectedVariant));
      regularPrice.innerHTML = formatMoney(variant.price, MinimogSettings.money_format);
      regularPrice.dataset.price = variant.price;
      if (variant.compare_at_price && variant.compare_at_price > variant.price) {
        comparePrice === null || comparePrice === void 0 ? void 0 : comparePrice.classList.remove('hidden');
        savedPrice === null || savedPrice === void 0 ? void 0 : savedPrice.classList.remove('hidden');
        comparePrice.innerHTML = formatMoney(variant.compare_at_price, MinimogSettings.money_format);
        savedPrice.innerHTML = formatMoney(variant.compare_at_price - variant.price, MinimogSettings.money_format);
      } else {
        comparePrice === null || comparePrice === void 0 ? void 0 : comparePrice.classList.add('hidden');
        savedPrice === null || savedPrice === void 0 ? void 0 : savedPrice.classList.add('hidden');
      }

      // Calculate total price
      const selectedVariants = this.products.map(product => {
        var _variants, _variants$find;
        let variants = product.nextElementSibling.innerHTML;
        variants = JSON.parse(variants);
        const select = product.querySelector('[name="id"]');
        return (_variants = variants) === null || _variants === void 0 ? void 0 : (_variants$find = _variants.find) === null || _variants$find === void 0 ? void 0 : _variants$find.call(_variants, v => (v === null || v === void 0 ? void 0 : v.id) === Number(select === null || select === void 0 ? void 0 : select.value));
      }).filter(Boolean);
      const totalPrice = selectedVariants.reduce((s, v) => s + v.price, 0);
      const container = product.closest('.product-bundles');
      container.querySelector(this.selectors.totalPrice).innerHTML = formatMoney(totalPrice, MinimogSettings.money_format);
    }
    _handleAddItems(e, bundle) {
      e.preventDefault();
      const inputIds = bundle.querySelectorAll('[name="id"]');
      const errorWrapper = bundle.querySelector(this.selectors.errorWrapper);
      const button = bundle.querySelector(this.selectors.submitBundle);
      const ids = [...inputIds].map(input => input.value);
      const data = {
        items: ids.map(id => ({
          id,
          quantity: 1
        }))
      };
      const config = getRequestDefaultConfigs();
      config.method = 'POST';
      config.body = JSON.stringify(data);
      this._toggleLoading(true, button);
      fetch('/cart/add.js', config).then(async res => {
        if (!(res !== null && res !== void 0 && res.ok)) {
          const err = await res.json();
          this._showError((err === null || err === void 0 ? void 0 : err.description) || "Failed to add all items to cart!", errorWrapper);
        } else {
          const {
            items
          } = await res.json();
          const firstItem = items.shift();
          window.Shopify.onItemAdded(firstItem);
          items.forEach(itm => window.Shopify.onItemAdded(itm, false));
        }
        setTimeout(() => {
          this._toggleLoading(false, button);
        }, 300);
      }).catch(err => {
        var _err$toString;
        this._showError(err === null || err === void 0 ? void 0 : (_err$toString = err.toString) === null || _err$toString === void 0 ? void 0 : _err$toString.call(err), errorWrapper);
        this._toggleLoading(false, button);
      });
    }
    _showError(err, errorWrapper) {
      MinimogTheme.Notification.show({
        target: errorWrapper,
        method: 'appendChild',
        type: 'warning',
        message: err
      });
    }
    _toggleLoading(loading, button) {
      if (loading) {
        button.insertAdjacentHTML('beforeend', this.spinner);
        button.classList.add('sf-spinner-loading');
      } else {
        const spinner = button.querySelector('svg.animate-spin');
        spinner === null || spinner === void 0 ? void 0 : spinner.remove();
        button.classList.remove('sf-spinner-loading');
      }
    }
  }
  customElements.define('m-custom-content', MCustomContent);
}
}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// extracted by mini-css-extract-plugin

}();
/******/ })()
;
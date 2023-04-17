/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gM": function() { return /* binding */ MinimogLibs; }
/* harmony export */ });
/* unused harmony exports MinimogEvents, MinimogTheme, MinimogSettings, MinimogStrings */
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// extracted by mini-css-extract-plugin

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/* provided dependency */ var MinimogLibs = __webpack_require__(4558)["gM"];
if (!customElements.get("favorite-product-slider")) {
  class FavoriteProductSlider extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.selectors = {
        mainImages: ".sf-favorite-product-slider__images",
        thumbs: ".sf-favorite-product-slider__thumbs"
      };
      this.domNodes = queryDomNodes(this.selectors, this);
      this.mediaSize = parseInt(this.dataset.mediaSize);
      this.mainImagesContainer = this.domNodes.mainImages.querySelector(".swiper-container");
      this.thumbsContainer = this.domNodes.thumbs.querySelector(".swiper-container");
      this.initSlider();
    }
    initSlider() {
      this.initMainImagesSlider();
      this.initThumbsSlider();
      this.thumbsSlider.on('slideChange', swiper => {
        const {
          realIndex
        } = swiper;
        let index = realIndex - 1;
        if (index < 0) {
          index = this.mediaSize - 1;
        }
        this.mainImagesSlider.slideToLoop(index);
      });
      this.mainImagesSlider.on('slideChange', swiper => {
        const {
          slides,
          realIndex
        } = swiper;
        let index = realIndex + 1;
        if (index > this.mediaSize) {
          index = 0;
        }
        this.playActiveMedia(slides[index]);
      });
    }
    initMainImagesSlider() {
      const controlsContainer = this.domNodes.mainImages.querySelector(".sf-slider__controls-wrapper");
      const prevButton = controlsContainer && controlsContainer.querySelector(".sf-slider__controls-prev");
      const nextButton = controlsContainer && controlsContainer.querySelector(".sf-slider__controls-next");
      this.mainImagesSlider = new MinimogLibs.Swiper(this.mainImagesContainer, {
        slidesPerView: 1,
        showPagination: true,
        showNavigation: true,
        loop: true,
        pagination: {
          el: this.domNodes.mainImages.querySelector(".swiper-pagination"),
          clickable: true,
          type: 'fraction'
        },
        autoplay: false,
        threshold: 2,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        breakpoints: {
          768: {
            simulateTouch: false,
            allowTouchMove: false,
            showPagination: false,
            showNavigation: false
          }
        },
        simulateTouch: true,
        allowTouchMove: true
      });
      if (this.mainImagesSlider) {
        prevButton && prevButton.addEventListener("click", () => this.mainImagesSlider.slidePrev());
        nextButton && nextButton.addEventListener("click", () => this.mainImagesSlider.slideNext());
      }
    }
    initThumbsSlider() {
      const thumbsControlsContainer = this.domNodes.thumbs.querySelector(".sf-slider__controls");
      const thumbsPrevButton = thumbsControlsContainer && thumbsControlsContainer.querySelector(".sf-slider__controls-prev");
      const thumbsNextButton = thumbsControlsContainer && thumbsControlsContainer.querySelector(".sf-slider__controls-next");
      const slideItemsLength = this.domNodes.thumbs.querySelector('.swiper-wrapper').childElementCount;
      this.thumbsSlider = new MinimogLibs.Swiper(this.thumbsContainer, {
        initialSlide: slideItemsLength > 1 ? 1 : 0,
        slidesPerView: slideItemsLength == 2 ? 1 : 2,
        showPagination: true,
        showNavigation: true,
        loop: true,
        autoplay: false,
        pagination: {
          el: this.domNodes.thumbs.querySelector(".swiper-pagination"),
          clickable: true,
          type: 'fraction'
        },
        spaceBetween: 15,
        breakpoints: {
          1024: {
            spaceBetween: 30
          }
        },
        threshold: 2
      });
      if (this.thumbsSlider) {
        thumbsPrevButton && thumbsPrevButton.addEventListener("click", () => this.thumbsSlider.slidePrev());
        thumbsNextButton && thumbsNextButton.addEventListener("click", () => this.thumbsSlider.slideNext());
      }
    }
    playActiveMedia(selected) {
      const deferredMedia = selected.querySelector(".deferred-media");
      if (deferredMedia) {
        const autoplay = deferredMedia.dataset.autoPlay === "true";
        if (autoplay) {
          deferredMedia.loadContent(false);
        }
      }
    }
  }
  customElements.define("favorite-product-slider", FavoriteProductSlider);
}
}();
/******/ })()
;
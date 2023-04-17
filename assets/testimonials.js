/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LE": function() { return /* binding */ MinimogTheme; },
/* harmony export */   "gM": function() { return /* binding */ MinimogLibs; }
/* harmony export */ });
/* unused harmony exports MinimogEvents, MinimogSettings, MinimogStrings */
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
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var MinimogLibs = __webpack_require__(4558)["gM"];
if (!customElements.get("m-testimonials")) {
  class MTestimonials extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      var _this$dataset, _this$dataset2, _this$dataset3;
      this.design = this === null || this === void 0 ? void 0 : (_this$dataset = this.dataset) === null || _this$dataset === void 0 ? void 0 : _this$dataset.design;
      const containerType = this === null || this === void 0 ? void 0 : (_this$dataset2 = this.dataset) === null || _this$dataset2 === void 0 ? void 0 : _this$dataset2.container;
      const autorotate = (this === null || this === void 0 ? void 0 : (_this$dataset3 = this.dataset) === null || _this$dataset3 === void 0 ? void 0 : _this$dataset3.autoplay) === "true";
      if (!this.design) {
        return console.warn("Failed to init Testimonials: design not found!!");
      }
      this.sliderContainer = this.querySelector(".swiper-container");
      if (!this.sliderContainer) {
        this.classList.add("opacity-100");
        return;
      }
      this.defaultSettings = {
        pagination: {
          el: this.querySelector(".swiper-pagination"),
          clickable: true
        },
        navigation: {
          nextEl: this.querySelector(".sf-slider__controls-next"),
          prevEl: this.querySelector(".sf-slider__controls-prev")
        },
        autoHeight: true,
        autoplay: autorotate ? {
          delay: 5000,
          pauseOnMouseEnter: false
        } : false,
        loop: true,
        slidesPerView: 1
      };
      this.settings = {};
      let gutter = 400;
      switch (this.design) {
        case "testimonials-1":
          this.settings = {
            centeredSlides: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
            speed: 300,
            slideToClickedSlide: true,
            loop: true,
            breakpoints: {
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
                speed: 1000
              },
              1280: {
                slidesPerView: 5,
                slidesPerGroup: 3,
                spaceBetween: 30
              },
              2560: {
                slidesPerView: 7,
                slidesPerGroup: 3
              }
            }
          };
          break;
        case "testimonials-2":
          this.settings = {
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: {
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3
              }
            }
          };
          break;
        case "testimonials-3":
          this.settings = {
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: {
              768: {
                slidesPerView: containerType === "w-full" ? 3 : 2
              }
            }
          };
          break;
        case "testimonials-4":
          if (containerType === "container-fluid") gutter = 200;
          if (containerType === "container") gutter = 150;
          this.settings = {
            slidesPerView: 1,
            centeredSlides: true,
            slideToClickedSlide: true,
            breakpoints: {
              768: {
                spaceBetween: parseInt(gutter / 4),
                slidesPerView: 3
              },
              992: {
                spaceBetween: gutter / 2,
                slidesPerView: 3
              },
              1920: {
                spaceBetween: gutter,
                slidesPerView: 3
              }
            }
          };
          break;
        case "testimonials-6":
          this.settings = {
            slidesPerView: 1,
            loop: true,
            breakpoints: {
              768: {
                slidesPerView: 2
              },
              1366: {
                slidesPerView: containerType === "container" ? 2 : 3
              },
              1600: {
                slidesPerView: containerType === "container" ? 2 : 4
              }
            }
          };
          break;
        case "testimonials-5":
          this.settings = {
            fade: {
              crossFade: true
            }
          };
          break;
      }

      // Testimonials 5
      const images = this.querySelector(".sf-tabs");
      if (images) {
        const interval = setInterval(() => {
          if (MinimogTheme.Tabs) {
            this.imagesTab = new MinimogTheme.Tabs(images);
            clearInterval(interval);
          }
        }, 50);
      }
      this.initSlider();
    }
    initSlider() {
      loadAssets(["swiper.css", "swiper.js"]).then(() => {
        this.slider = new MinimogLibs.Swiper(this.sliderContainer, {
          ...this.defaultSettings,
          ...this.settings
        });
        if (this.design === "testimonials-4") {
          this.slider.on("activeIndexChange", swiper => {
            const {
              realIndex
            } = swiper;
            this.querySelector(".sf-slider-index").innerHTML = parseInt(realIndex) + 1;
          });
        }
        if (this.design === "testimonials-5") {
          this.slider.on("slideChange", swiper => {
            const {
              realIndex
            } = swiper;
            this.imagesTab.setActiveTab(realIndex);
          });
        }
      });
      document.addEventListener('shopify:block:select', e => this.onBlockSelect(e));
    }
    onBlockSelect(ev) {
      var _this$slider, _this$slider$slideToL;
      const block = ev.target;
      const index = Number(block.dataset.index);
      this === null || this === void 0 ? void 0 : (_this$slider = this.slider) === null || _this$slider === void 0 ? void 0 : (_this$slider$slideToL = _this$slider.slideToLoop) === null || _this$slider$slideToL === void 0 ? void 0 : _this$slider$slideToL.call(_this$slider, index);
    }
  }
  customElements.define("m-testimonials", MTestimonials);
}
}();
/******/ })()
;
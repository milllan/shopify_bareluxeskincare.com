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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/* provided dependency */ var MinimogLibs = __webpack_require__(4558)["gM"];
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];
if (!customElements.get("media-gallery")) {
  customElements.define("media-gallery", class MediaGallery extends HTMLElement {
    constructor() {
      super();
      this.selectors = {
        container: ".sf-product-wrapper",
        slider: ".swiper-container",
        sliderMobile: ".swiper-container.f-media-mobile",
        sliderPagination: ".swiper-pagination",
        sliderPrevEl: ".swiper-button-prev",
        sliderNextEl: ".swiper-button-next",
        navSlider: ".nav-swiper-container",
        medias: [".sf-prod-media-item"],
        mediaWrapper: '.sf-prod-media__wrapper',
        mediaZoomIns: [".sf-prod-media__zoom-in"],
        navSliderMobile: '.nav-swiper-container-mobile',
        videos: [".media-video"],
        productBlock: ".sf-prod__block",
        mediaMobile: ".sf-product-media__mobile",
        variantIdNode: '.main-product-form [name="id"]'
      };
      this.container = this.closest(this.selectors.container);
      this.domNodes = queryDomNodes(this.selectors, this);
      this.enableVideoAutoplay = this.dataset.enableVideoAutoplay === "true";
      this.enableImageZoom = this.dataset.enableImageZoom === "true";
      this.enableVariantGroupImages = this.dataset.enableVariantGroupImages === "true";
      if (this.closest('.sf-prod__block')) {
        this.view = this.closest('.sf-prod__block').dataset.view || 'product-template';
      }
      this.section = this.closest(`[data-section-id="${this.sectionId}"]`);
      this.layout = this.dataset.layout;
      this.setupData();
    }
    async init() {
      switch (this.view) {
        case 'product-template':
          await this.initSlider();
          if (!this.enableVariantGroupImages) {
            this.addEventToMainMedias();
            this.initLightbox();
          }
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
      if (this.mediaMode === 'slider') {
        const mediaWrapper = this.querySelector('.swiper-wrapper');
        const firstELM = mediaWrapper.firstElementChild;
        const firstElmMediaType = firstELM.dataset.mediaType;
        if (firstElmMediaType === 'video' || firstElmMediaType == 'external_video') {
          const deferredMedia = firstELM.querySelector(".deferred-media");
          const autoplay = deferredMedia.dataset.autoPlay === "true";
          if (deferredMedia && autoplay) deferredMedia.loadContent(false);
        }
      } else {
        const allMedia = this.querySelectorAll('.sf-prod-media-item');
        if (allMedia) {
          allMedia.forEach(media => {
            const mediaType = media.dataset.mediaType;
            if (mediaType === 'video' || mediaType === 'external_video') {
              const deferredMedia = media.querySelector(".deferred-media");
              const autoplay = deferredMedia.dataset.autoPlay === "true";
              if (deferredMedia && autoplay) deferredMedia.loadContent(false);
            }
          });
        }
      }
    }
    getProductJson(productUrl) {
      return fetch(productUrl + '.js').then(function (response) {
        return response.json();
      });
    }
    async setupData() {
      this.productHandle = this.dataset.productHandle;
      this.productUrl = this.dataset.productUrl;
      this.productData = await this.getProductJson(this.productUrl);
      const {
        productData,
        productData: {
          variants
        } = {}
      } = this;
      const variantIdNode = this.container.querySelector(this.selectors.variantIdNode);
      if (productData && variantIdNode) {
        let currentVariantId = Number(variantIdNode.value);
        if (!currentVariantId) {
          currentVariantId = productData.selected_or_first_available_variant.id;
        }
        const currentVariant = variants.find(v => v.id === currentVariantId) || variants[0];
        this.productData.initialVariant = currentVariant;
        if (!this.productData.selected_variant && variantIdNode.dataset.selectedVariant) {
          this.productData.selected_variant = variants.find(v => v.id === Number(variantIdNode.dataset.selectedVariant));
        }
      }
      this.init();
    }
    initSlider() {
      if (!this.domNodes.slider) return;
      this.mediaMode = "slider";
      const {
        domNodes: {
          slider,
          sliderPagination,
          navSlider,
          sliderNextEl: nextEl,
          sliderPrevEl: prevEl
        }
      } = this;
      let initialSlide = 0,
        configNav = {},
        config = {};
      if (this.productData.initialVariant && this.productData.selected_variant) {
        initialSlide = this.productData.initialVariant.featured_media.position - 1 || 0;
      }
      configNav = {
        loop: false,
        initialSlide,
        slidesPerView: 5,
        freeMode: true,
        spaceBetween: 10,
        threshold: 2,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: this.layout === "layout-6" ? "vertical" : "horizontal",
        on: {
          init: () => navSlider.style.opacity = 1
        }
      };
      this.navSlider = navSlider ? new MinimogLibs.Swiper(navSlider, configNav) : null;
      const thumbs = this.navSlider ? {
        thumbs: {
          swiper: this.navSlider
        }
      } : {};
      config = Object.assign({}, getProductSliderConfig(this.layout), {
        initialSlide,
        autoHeight: true,
        navigation: {
          nextEl,
          prevEl
        },
        threshold: 2,
        loop: this.enableVariantGroupImages ? false : true,
        pagination: {
          el: sliderPagination,
          clickable: true,
          type: "bullets"
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
        if (MinimogTheme.config.mqlMobile) {
          if (this.dataset.screen === 'mobile') this.slider = new MinimogLibs.Swiper(slider, config);
        } else {
          if (this.dataset.screen === 'desktop') this.slider = new MinimogLibs.Swiper(slider, config);
        }
        document.addEventListener('matchMobile', () => {
          if (this.dataset.screen === 'mobile') this.slider = new MinimogLibs.Swiper(slider, config);
        });
        document.addEventListener('unmatchMobile', () => {
          if (this.dataset.screen === 'desktop') this.slider = new MinimogLibs.Swiper(slider, config);
        });
      } else {
        this.slider = new MinimogLibs.Swiper(slider, config);
      }
      if (!this.enableVariantGroupImages) this.handleSlideChange();
    }
    handleSlideChange() {
      if (!this.slider) return;
      let draggable = true,
        mediaType = "",
        visibleSlides = [];
      this.slider.on("slideChange", swiper => {
        try {
          // Change previewWrapper aspectRatio
          const {
            slides,
            activeIndex
          } = swiper;
          this.playActiveMedia(slides[activeIndex]);

          // Change touchMove state, for making the model inside slide draggable
          visibleSlides = [activeIndex];
          if (this.layout === "layout-5" || this.layout === "layout-7") {
            visibleSlides.push(activeIndex + 1);
          }
          for (let index of visibleSlides) {
            const currSlide = slides[index];
            mediaType = currSlide.dataset.mediaType;
            if (mediaType === "model") break;
          }
          if (mediaType === "model") {
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
    initLightbox() {
      let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.productData.media;
      if (!this.enableImageZoom) return;
      loadAssets(["glightbox.css", "glightbox.js"]).then(() => {
        const elements = data.map(media => {
          if (media.media_type === "image") {
            return {
              href: media.src,
              type: "image",
              id_media: media.id
            };
          }
          if (media.media_type === "external_video") {
            // TODO: fix Youtube video on lightbox
            const href = window.MinimogLibs.getVideoURL(media.external_id, media.host);
            return {
              href,
              type: "video",
              source: media.host,
              id_media: media.id
            };
          }
          if (media.media_type === "video") {
            const href = media.sources[0].url;
            return {
              href,
              type: "video"
            };
          }
          if (media.media_type === "model") {
            const mediaElem = document.querySelector(`.media-model[data-media-id="${media.id}"]`).cloneNode(true);
            mediaElem.classList.remove("hidden");
            mediaElem.classList.add("model-in-lightbox");
            return {
              content: mediaElem,
              width: "80vw",
              height: "70vh",
              id_media: media.id
            };
          }
        });
        this.lightbox = new MinimogLibs.GLightbox({
          elements,
          openEffect: "fade",
          closeEffect: "fade",
          draggable: false,
          autofocusVideos: true
        });
      }).catch(err => console.error("Failed to init Glightbox", err));
    }
    addEventToMainMedias() {
      addEventDelegate({
        selector: this.selectors.medias[0],
        context: this,
        handler: (e, media) => {
          const isImage = media.classList.contains('media-type-image');
          const isZoomButton = e.target.closest(this.selectors.mediaZoomIns[0]);
          if (isImage || isZoomButton) {
            const index = Number(media.dataset.index) || 0;
            this.lightbox.openAt(index);
          }
        }
      });
    }
    setActiveMedia(variant) {
      if (!variant) return;
      if (this.mediaMode === 'slider') {
        if (variant.featured_media) {
          const slideIndex = variant.featured_media.position || 0;
          if (this.slider && this.slider.wrapperEl) {
            this.slider.slideToLoop(slideIndex - 1);
          }
        }
      } else if (this.mediaMode === 'featured-image') {
        const src = variant.featured_image.src;
        const {
          featuredImage
        } = this.domNodes;
        const img = featuredImage.querySelector('img');
        if (img && src) {
          img.src = src;
          img.removeAttribute('srcset');
          const method = this.productData.initialVariant.id === variant.id ? 'add' : 'remove';
          featuredImage.classList[method]('group-hover:opacity-0');
        }
      } else {
        // handle change image in gallery mode
        if (variant.featured_media) {
          const selectedMedia = this.querySelector(`[data-media-id="${variant.featured_media.id}"]`);
          if (selectedMedia) {
            this.scrollIntoView(selectedMedia);
          }
        }
      }
    }
    scrollIntoView(selectedMedia) {
      selectedMedia.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}
}();
/******/ })()
;
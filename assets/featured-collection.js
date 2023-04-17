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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./node_modules/@shopify/theme-sections/section.js
var SECTION_ID_ATTR = 'data-section-id';
function Section(container, properties) {
  this.container = validateContainerElement(container);
  this.id = container.getAttribute(SECTION_ID_ATTR);
  this.extensions = [];

  // eslint-disable-next-line es5/no-es6-static-methods
  Object.assign(this, validatePropertiesObject(properties));
  this.onLoad();
}
Section.prototype = {
  onLoad: Function.prototype,
  onUnload: Function.prototype,
  onSelect: Function.prototype,
  onDeselect: Function.prototype,
  onBlockSelect: Function.prototype,
  onBlockDeselect: Function.prototype,
  extend: function extend(extension) {
    this.extensions.push(extension); // Save original extension

    // eslint-disable-next-line es5/no-es6-static-methods
    var extensionClone = Object.assign({}, extension);
    delete extensionClone.init; // Remove init function before assigning extension properties

    // eslint-disable-next-line es5/no-es6-static-methods
    Object.assign(this, extensionClone);
    if (typeof extension.init === 'function') {
      extension.init.apply(this);
    }
  }
};
function validateContainerElement(container) {
  if (!(container instanceof Element)) {
    throw new TypeError('Theme Sections: Attempted to load section. The section container provided is not a DOM element.');
  }
  if (container.getAttribute(SECTION_ID_ATTR) === null) {
    throw new Error('Theme Sections: The section container provided does not have an id assigned to the ' + SECTION_ID_ATTR + ' attribute.');
  }
  return container;
}
function validatePropertiesObject(value) {
  if (typeof value !== 'undefined' && typeof value !== 'object' || value === null) {
    throw new TypeError('Theme Sections: The properties object provided is not a valid');
  }
  return value;
}

// Object.assign() polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    value: function assign(target) {
      // .length of function is 2
      'use strict';

      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-sections/theme-sections.js
/*
 * @shopify/theme-sections
 * -----------------------------------------------------------------------------
 *
 * A framework to provide structure to your Shopify sections and a load and unload
 * lifecycle. The lifecycle is automatically connected to theme editor events so
 * that your sections load and unload as the editor changes the content and
 * settings of your sections.
 */


var SECTION_TYPE_ATTR = 'data-section-type';
var theme_sections_SECTION_ID_ATTR = 'data-section-id';
window.Shopify = window.Shopify || {};
window.Shopify.theme = window.Shopify.theme || {};
window.Shopify.theme.sections = window.Shopify.theme.sections || {};
var registered = window.Shopify.theme.sections.registered = window.Shopify.theme.sections.registered || {};
var instances = window.Shopify.theme.sections.instances = window.Shopify.theme.sections.instances || [];
function register(type, properties) {
  if (typeof type !== 'string') {
    throw new TypeError('Theme Sections: The first argument for .register must be a string that specifies the type of the section being registered');
  }
  if (typeof registered[type] !== 'undefined') {
    throw new Error('Theme Sections: A section of type "' + type + '" has already been registered. You cannot register the same section type twice');
  }
  function TypedSection(container) {
    Section.call(this, container, properties);
  }
  TypedSection.constructor = Section;
  TypedSection.prototype = Object.create(Section.prototype);
  TypedSection.prototype.type = type;
  return registered[type] = TypedSection;
}
function unregister(types) {
  types = normalizeType(types);
  types.forEach(function (type) {
    delete registered[type];
  });
}
function load(types, containers) {
  types = normalizeType(types);
  if (typeof containers === 'undefined') {
    containers = document.querySelectorAll('[' + SECTION_TYPE_ATTR + ']');
  }
  containers = normalizeContainers(containers);
  types.forEach(function (type) {
    var TypedSection = registered[type];
    if (typeof TypedSection === 'undefined') {
      return;
    }
    containers = containers.filter(function (container) {
      // Filter from list of containers because container already has an instance loaded
      if (isInstance(container)) {
        return false;
      }

      // Filter from list of containers because container doesn't have data-section-type attribute
      if (container.getAttribute(SECTION_TYPE_ATTR) === null) {
        return false;
      }

      // Keep in list of containers because current type doesn't match
      if (container.getAttribute(SECTION_TYPE_ATTR) !== type) {
        return true;
      }
      instances.push(new TypedSection(container));

      // Filter from list of containers because container now has an instance loaded
      return false;
    });
  });
}
function unload(selector) {
  var instancesToUnload = getInstances(selector);
  instancesToUnload.forEach(function (instance) {
    var index = instances.map(function (e) {
      return e.id;
    }).indexOf(instance.id);
    instances.splice(index, 1);
    instance.onUnload();
  });
}
function extend(selector, extension) {
  var instancesToExtend = getInstances(selector);
  instancesToExtend.forEach(function (instance) {
    instance.extend(extension);
  });
}
function getInstances(selector) {
  var filteredInstances = [];

  // Fetch first element if its an array
  if (NodeList.prototype.isPrototypeOf(selector) || Array.isArray(selector)) {
    var firstElement = selector[0];
  }

  // If selector element is DOM element
  if (selector instanceof Element || firstElement instanceof Element) {
    var containers = normalizeContainers(selector);
    containers.forEach(function (container) {
      filteredInstances = filteredInstances.concat(instances.filter(function (instance) {
        return instance.container === container;
      }));
    });

    // If select is type string
  } else if (typeof selector === 'string' || typeof firstElement === 'string') {
    var types = normalizeType(selector);
    types.forEach(function (type) {
      filteredInstances = filteredInstances.concat(instances.filter(function (instance) {
        return instance.type === type;
      }));
    });
  }
  return filteredInstances;
}
function getInstanceById(id) {
  var instance;
  for (var i = 0; i < instances.length; i++) {
    if (instances[i].id === id) {
      instance = instances[i];
      break;
    }
  }
  return instance;
}
function isInstance(selector) {
  return getInstances(selector).length > 0;
}
function normalizeType(types) {
  // If '*' then fetch all registered section types
  if (types === '*') {
    types = Object.keys(registered);

    // If a single section type string is passed, put it in an array
  } else if (typeof types === 'string') {
    types = [types];

    // If single section constructor is passed, transform to array with section
    // type string
  } else if (types.constructor === Section) {
    types = [types.prototype.type];

    // If array of typed section constructors is passed, transform the array to
    // type strings
  } else if (Array.isArray(types) && types[0].constructor === Section) {
    types = types.map(function (TypedSection) {
      return TypedSection.prototype.type;
    });
  }
  types = types.map(function (type) {
    return type.toLowerCase();
  });
  return types;
}
function normalizeContainers(containers) {
  // Nodelist with entries
  if (NodeList.prototype.isPrototypeOf(containers) && containers.length > 0) {
    containers = Array.prototype.slice.call(containers);

    // Empty Nodelist
  } else if (NodeList.prototype.isPrototypeOf(containers) && containers.length === 0) {
    containers = [];

    // Handle null (document.querySelector() returns null with no match)
  } else if (containers === null) {
    containers = [];

    // Single DOM element
  } else if (!Array.isArray(containers) && containers instanceof Element) {
    containers = [containers];
  }
  return containers;
}
if (window.Shopify.designMode) {
  document.addEventListener('shopify:section:load', function (event) {
    var id = event.detail.sectionId;
    var container = event.target.querySelector('[' + theme_sections_SECTION_ID_ATTR + '="' + id + '"]');
    if (container !== null) {
      load(container.getAttribute(SECTION_TYPE_ATTR), container);
    }
  });
  document.addEventListener('shopify:section:unload', function (event) {
    var id = event.detail.sectionId;
    var container = event.target.querySelector('[' + theme_sections_SECTION_ID_ATTR + '="' + id + '"]');
    var instance = getInstances(container)[0];
    if (typeof instance === 'object') {
      unload(container);
    }
  });
  document.addEventListener('shopify:section:select', function (event) {
    var instance = getInstanceById(event.detail.sectionId);
    if (typeof instance === 'object') {
      instance.onSelect(event);
    }
  });
  document.addEventListener('shopify:section:deselect', function (event) {
    var instance = getInstanceById(event.detail.sectionId);
    if (typeof instance === 'object') {
      instance.onDeselect(event);
    }
  });
  document.addEventListener('shopify:block:select', function (event) {
    var instance = getInstanceById(event.detail.sectionId);
    if (typeof instance === 'object') {
      instance.onBlockSelect(event);
    }
  });
  document.addEventListener('shopify:block:deselect', function (event) {
    var instance = getInstanceById(event.detail.sectionId);
    if (typeof instance === 'object') {
      instance.onBlockDeselect(event);
    }
  });
}
;// CONCATENATED MODULE: ./src/js/sections/featured-collection.js
/* provided dependency */ var MinimogLibs = __webpack_require__(4558)["gM"];
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];

// import {fetchCountDown} from '@utils/section'
// import Spinner from '@components/Spinner'
// import SaleProgress from '@components/SaleProgress'

register('featured-collection', {
  onLoad: function () {
    this.selectors = {
      loadMoreBtn: '[data-load-more]',
      productsContainer: '[data-products-container]',
      products: ['.sf__pcard'],
      soldNumber: ['[data-sold-number]'],
      availableNumber: ['[data-available-number]'],
      countDown: '[data-flashsale-countdown]',
      slideContainer: '.swiper-container'
    };
    this.domNodes = queryDomNodes(this.selectors, this.container);
    const {
      container
    } = this;
    const buttonType = container.dataset.buttonType;
    const infiniteLoad = container.dataset.infiniteLoad;
    const enableSlider = container.dataset.enableSlider === 'true';
    const showPagination = container.dataset.showPagination === 'true';
    const showNavigation = container.dataset.showNavigation === 'true';
    this.enableFlashsale = container.dataset.enableFlashsale === 'true';
    const enableCountdown = container.dataset.enableCountdown === 'true';
    const items = container.dataset.items;
    if (enableSlider) {
      const controlsContainer = container.querySelector('.sf-slider__controls');
      const prevButton = controlsContainer && controlsContainer.querySelector('.sf-slider__controls-prev');
      const nextButton = controlsContainer && controlsContainer.querySelector('.sf-slider__controls-next');
      const slideItemsLength = this.domNodes.slideContainer.querySelector('.swiper-wrapper').childElementCount;
      loadAssets(["swiper.css", "swiper.js"]).then(() => {
        this.slider = new MinimogLibs.Swiper(this.domNodes.slideContainer, {
          slidesPerView: 2,
          showPagination: showPagination,
          showNavigation: showNavigation,
          loop: this.enableFlashsale ? false : true,
          pagination: showPagination ? {
            el: container.querySelector('.swiper-pagination'),
            clickable: true
          } : false,
          breakpoints: {
            480: {
              slidesPerView: 3
            },
            768: {
              slidesPerView: 4
            },
            1280: {
              slidesPerView: parseInt(items),
              slidesPerGroup: 2
            }
          },
          on: {
            init: function () {
              setTimeout(() => {
                // Calculate controls position
                const firstItem = container.querySelector('.sf-image');
                if (firstItem && controlsContainer) {
                  const itemHeight = firstItem.clientHeight;
                  controlsContainer.style.setProperty('--offset-top', parseInt(itemHeight) / 2 + 'px');
                }
              }, 200);
            },
            breakpoint: (swiper, breakpointParams) => {
              if (controlsContainer) {
                const {
                  slidesPerView
                } = breakpointParams;
                if (slideItemsLength > slidesPerView) {
                  controlsContainer.classList.remove('hidden');
                  swiper.allowTouchMove = true;
                } else {
                  controlsContainer.classList.add('hidden');
                  swiper.allowTouchMove = false;
                }
              }
            }
          }
        });
        if (this.slider && showNavigation) {
          prevButton && prevButton.addEventListener('click', () => this.slider.slidePrev());
          nextButton && nextButton.addEventListener('click', () => this.slider.slideNext());
        }
      });
    }
    if (this.enableFlashsale) this.initFlashSale();
    this.canLoad = true;
    this.currentPage = 1;
    this.spinner = spinner();
    this.enableCountdown = enableCountdown;
    if (infiniteLoad === 'true') this.initInfiniteLoad();
    if (buttonType === 'load' && this.domNodes.loadMoreBtn) this.initLoadMore();
  },
  initLoadMore: function () {
    const {
      container
    } = this;
    this.triggerLoad = false;
    this.totalPages = parseInt(container.dataset.totalPages);
    addEventDelegate({
      context: this.container,
      selector: this.selectors.loadMoreBtn,
      handler: e => {
        e.preventDefault();
        this.handleLoadMore();
      }
    });
  },
  initInfiniteLoad: function () {
    const maxPages = this.container.dataset.maxPages;
    window.addEventListener('scroll', e => {
      this.canLoad = this.currentPage < parseInt(maxPages);
      if (!this.canLoad) return;
      if (this.container.offsetTop + this.container.clientHeight - window.innerHeight < window.scrollY && !this.triggerLoad) {
        this.triggerLoad = true;
        this.handleLoadMore();
      }
    });
  },
  handleLoadMore: async function () {
    this.currentPage++;
    this.canLoad = this.currentPage < this.totalPages;
    this.toggleLoading(true);
    const collectionID = this.container.dataset.collectionId;
    const res = await fetchCountDown(collectionID);
    const url = this.container.dataset.url;
    const dataUrl = `${url}?page=${this.currentPage}&section_id=${this.id}`;
    console.log(dataUrl, 'dataurl');
    fetchCache(dataUrl).then(html => {
      this.toggleLoading(false);
      const dom = generateDomFromString(html);
      const products = dom.querySelector(this.selectors.productsContainer);
      const oldCards = this.domNodes.productsContainer.childElementCount;
      let isAppended = false;
      if (products) {
        Array.from(products.childNodes).forEach(product => {
          this.domNodes.productsContainer.appendChild(product);
          const check = setInterval(() => {
            if (this.domNodes.productsContainer.childElementCount > oldCards) {
              clearInterval(check);
              isAppended = true;
            }
          }, 50);
        });
      }
      if (this.enableFlashsale && res.ok && res.payload && res.payload.length) {
        const {
          expires_date
        } = res.payload[0];
        this.expires_date = expires_date;
        const check = setInterval(() => {
          if (isAppended) {
            clearInterval(check);
            const cards = this.domNodes.productsContainer.querySelectorAll('.sf__pcard');
            cards.forEach(card => {
              const content = card.querySelector('.sf__pcard-content');
              const progress = card.querySelector('.pcard-sale');
              if (!progress) {
                var _card$dataset;
                const soldNumber = (_card$dataset = card.dataset) === null || _card$dataset === void 0 ? void 0 : _card$dataset.soldNumber;
                const component = saleProgress(res.payload[0], card.dataset.productId, soldNumber);
                const newComponent = generateDomFromString(component);
                content.appendChild(newComponent);
              }
            });
          }
        }, 50);
      }
      this.triggerLoad = false;
      if (!this.canLoad) {
        this.domNodes.loadMoreBtn && this.domNodes.loadMoreBtn.classList.add('hidden');
      }
    });
  },
  toggleLoading: function (status) {
    if (!this.domNodes.loadMoreBtn) return;
    if (status) {
      this.newSpinner = generateDomeFromStringNew(this.spinner, 'svg');
      this.domNodes.loadMoreBtn.appendChild(this.newSpinner);
      this.domNodes.loadMoreBtn.classList.add('sf-spinner-loading');
    } else {
      // this?.spinner?.remove()
      this.domNodes.loadMoreBtn.removeChild(this.newSpinner);
      this.domNodes.loadMoreBtn.classList.remove('sf-spinner-loading');
    }
  },
  initFlashSale: async function () {
    const collectionID = this.container.dataset.collectionId;
    const res = await fetchCountDown(collectionID);
    if (res.ok && res.payload && res.payload.length) {
      const {
        expires_date
      } = res.payload[0];
      this.expires_date = expires_date;
      this.domNodes.products.forEach(card => {
        var _card$dataset2;
        // const productForm = card.querySelector('.f-product-form')
        const content = card.querySelector('.sf__pcard-content');
        const soldNumber = (_card$dataset2 = card.dataset) === null || _card$dataset2 === void 0 ? void 0 : _card$dataset2.soldNumber;
        // const component = <SaleProgress settings={res.payload[0]} productId={card.dataset.productId} soldNumber={soldNumber} />
        const component = saleProgress(res.payload[0], card.dataset.productId, soldNumber);
        // const dom = new DOMParser().parseFromString(component, 'text/html')
        const newComponent = generateDomFromString(component);
        content.appendChild(newComponent);
      });
      this.initCountDown();
    }
  },
  initCountDown: function () {
    const endTime = new Date(this.expires_date).getTime();
    this.countDownTimer = new MinimogTheme.CountdownTimer(this.domNodes.countDown, Date.now(), endTime, {
      loop: true
    });
  }
});
load('featured-collection');
}();
/******/ })()
;
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GQ": function() { return /* binding */ MinimogSettings; },
/* harmony export */   "LE": function() { return /* binding */ MinimogTheme; },
/* harmony export */   "gM": function() { return /* binding */ MinimogLibs; }
/* harmony export */ });
/* unused harmony exports MinimogEvents, MinimogStrings */
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
;// CONCATENATED MODULE: ./src/js/modules/mega-menu.js
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var MinimogLibs = __webpack_require__(4558)["gM"];

class Megamenu {
  constructor(container) {
    _defineProperty(this, "selectors", {
      hamburgerButtons: ['.sf-menu-button'],
      menuWrapper: '.sf-menu-wrapper',
      menu: '.sf-menu-content',
      links: ['.sf-link'],
      userSection: '.sf-customer-section',
      desktopMenuItems: ['.sf-menu-item'],
      desktopSubMenus: '.sf-menu__desktop-sub-menu'
    });
    _defineProperty(this, "menuSelectors", {
      subMenu: '.sf-menu__desktop-sub-menu'
    });
    _defineProperty(this, "signInTabSelectors", {
      button: '.my-account-btn.signin',
      header: '.tab-header input.signin',
      content: '.tab-content.signin'
    });
    _defineProperty(this, "registerTabSelectors", {
      button: '.my-account-btn.register',
      header: '.tab-header input.register',
      content: '.tab-content.register'
    });
    _defineProperty(this, "activeDesktopMenuItem", null);
    _defineProperty(this, "sliders", {});
    _defineProperty(this, "closeDesktopSubmenu", menuItemIndex => {
      var _header$classList;
      const menuItem = this.menuData[menuItemIndex];
      const {
        header
      } = menuItem;
      header === null || header === void 0 ? void 0 : (_header$classList = header.classList) === null || _header$classList === void 0 ? void 0 : _header$classList.remove('show-menu');
    });
    this.container = container;
    this.transitionDuration = 300;
    this.domNodes = queryDomNodes(this.selectors);
    this.menuData = [...this.domNodes.desktopMenuItems].map(item => {
      const header = item.closest('header');
      const menuNodes = queryDomNodes(this.menuSelectors, item);
      return {
        header,
        item,
        ...menuNodes,
        active: false
      };
    });
    if (this.domNodes.userSection) {
      this.accountTabs = {
        signin: queryDomNodes(this.signInTabSelectors, this.container),
        register: queryDomNodes(this.registerTabSelectors, this.container)
      };
      this.domNodes.closeBtn = this.domNodes.userSection.querySelector('.close-btn');
    }
    this.init();
    MinimogTheme = MinimogTheme || {};
    MinimogTheme.headerSliders = this.sliders;
  }
  init() {
    [...this.domNodes.hamburgerButtons].forEach(btn => {
      btn.addEventListener("click", () => {
        document.documentElement.classList.add('prevent-scroll');
        this.openMenu();
      });
    });
    this.domNodes.menuWrapper.addEventListener("click", e => {
      if (e.target === this.domNodes.menuWrapper) {
        this.closeMenu();
      }
    });
    this.initMobileMegaMenu();
    if (this.domNodes.userSection) {
      this.initUserSection();
    }
    this.initDesktopMegaMenu();
  }
  initDesktopMegaMenu() {
    [...this.menuData].forEach(menuItem => {
      const {
        item,
        subMenu
      } = menuItem;
      if (subMenu) {
        const productsBanner = subMenu.querySelector('.sf-mega-menu-products');
        if (productsBanner) {
          var _window;
          if ((_window = window) !== null && _window !== void 0 && _window.__sfWindowLoaded) {
            menuItem.productsBannerSlider = this.initProductsBanner(productsBanner);
          } else {
            window.addEventListener("load", () => {
              menuItem.productsBannerSlider = this.initProductsBanner(productsBanner);
            });
          }
        }
      }
      // if (item?.classList?.contains('sf-menu-item--no-mega')) {
      //     const menuWrap = item.querySelector('.sf-menu__dropdown')
      //     let itemPos = item.getBoundingClientRect()
      //     let itemPosOb = {
      //         bottom: itemPos.bottom,
      //         left: itemPos.left,
      //         paddingBottom: window.getComputedStyle(item.firstElementChild, null).getPropertyValue('padding-bottom')
      //     }
      //     if(menuWrap) {
      //         menuWrap.style.bottom = -itemPosOb.bottom + itemPosOb.paddingBottom + 'px'
      //         menuWrap.style.left = itemPosOb.left + 'px'
      //         item?.addEventListener('mouseover', () => {
      //             itemPos = item.getBoundingClientRect()
      //             itemPosOb['bottom'] = itemPos.bottom
      //             itemPosOb['left'] = itemPos.left
      //             menuWrap.style.bottom = -itemPosOb.bottom + itemPosOb.paddingBottom + 'px'
      //             menuWrap.style.left = itemPosOb.left + 'px'
      //         })
      //     }
      // }
    });
  }

  initProductsBanner(banner) {
    var _header$dataset;
    const header = banner.closest('header');
    const menuItem = banner.closest('.sf-menu-item');
    const screenClass = `.${header === null || header === void 0 ? void 0 : (_header$dataset = header.dataset) === null || _header$dataset === void 0 ? void 0 : _header$dataset.screen}` || '';
    const id = banner.dataset.id;
    const sliderContainer = document.querySelector(`.sf-slider-${id}`);
    const columns = sliderContainer.dataset.column;
    let slider;
    slider = new MinimogLibs.Swiper(`${screenClass} .sf-slider-${id}`, {
      slidesPerView: 1,
      loop: false,
      autoplay: false,
      breakpoints: {
        1200: {
          slidesPerView: columns
        },
        992: {
          slidesPerView: columns >= 2 ? 2 : columns
        }
      }
    });
    this.sliders[menuItem.dataset.index] = slider;
    if (slider) {
      const prevBtn = document.querySelector(`#sf-slider-controls-${id} .sf-slider__controls-prev`);
      const nextBtn = document.querySelector(`#sf-slider-controls-${id} .sf-slider__controls-next`);
      prevBtn && prevBtn.addEventListener('click', () => slider.slidePrev());
      nextBtn && nextBtn.addEventListener('click', () => slider.slideNext());
    }
  }
  initMobileMegaMenu() {
    [...this.domNodes.links].forEach(link => {
      const subLinks = link.querySelector('.sf-sub-links');
      const backBtn = link.querySelector('.back');
      if (subLinks) {
        addEventDelegate({
          context: link,
          selector: '[data-toggle-submenu]',
          handler: (e, target) => {
            e.preventDefault();
            const level = target.dataset.toggleSubmenu;
            console.log(level, 'level');
            const parentNode = e.target.parentNode;
            if (e.target.classList.contains('back') || parentNode.classList.contains('back')) {
              return;
            }
            this.openSubMenu(subLinks, level);
          }
        });
      }
      if (backBtn) {
        addEventDelegate({
          context: link,
          selector: '[data-toggle-submenu]',
          handler: (e, target) => {
            e.preventDefault();
            const level = target.dataset.toggleSubmenu;
            console.log(level, 'level');
            const parentNode = e.target.parentNode;
            if (e.target.classList.contains('back') || parentNode.classList.contains('back')) {
              return;
            }
            this.openSubMenu(subLinks, level);
          }
        });
        backBtn.addEventListener("click", e => {
          const level = e.target.dataset.level;
          this.closeSubMenu(subLinks, level);
        });
      }
    });
  }
  initUserSection() {
    document.body.appendChild(this.domNodes.userSection);
    let activeTab = this.accountTabs['signin'].content;
    Object.values(this.accountTabs).forEach(_ref => {
      let {
        button,
        header,
        content
      } = _ref;
      header.addEventListener('click', () => {
        activeTab.classList.add('hidden');
        content.classList.remove('hidden');
        activeTab = content;
      });
      button.addEventListener('click', () => {
        header.click();
        this.domNodes.userSection.classList.add('-translate-x-full');
        this.closeMenu();
      });
    });
    this.domNodes.closeBtn.addEventListener('click', () => {
      this.domNodes.userSection.classList.remove('-translate-x-full');
    });
  }

  //////////////// MOBILE MENU EVENTS
  openMenu() {
    const {
      menuWrapper
    } = this.domNodes;
    menuWrapper.style.setProperty('--window-inner-height', `${window.innerHeight}px`);
    menuWrapper.classList.remove('hidden');
    setTimeout(() => {
      menuWrapper.style.setProperty('--tw-bg-opacity', '0.3');
      menuWrapper.firstElementChild.classList.remove('-translate-x-full');
    });
  }
  closeMenu() {
    const {
      menuWrapper,
      menu
    } = this.domNodes;
    menuWrapper.style.setProperty('--tw-bg-opacity', '0');
    menuWrapper.firstElementChild.classList.add('-translate-x-full');
    setTimeout(() => {
      menuWrapper.classList.add('hidden');
      document.documentElement.classList.remove('prevent-scroll');
      menu.classList.remove('sf-sub-menu-open');
      menu.classList.remove('open-level-1', 'open-level-2');
      // Close search
    }, this.transitionDuration);
  }
  openSubMenu(subLinks, level) {
    let openClass = `open-level-${level}`;
    subLinks.classList.add('flex');
    subLinks.classList.remove('hidden');
    this.domNodes.menu.classList.add(openClass);
    setTimeout(() => {
      this.domNodes.menu.classList.add('sf-sub-menu-open');
    }, this.transitionDuration);
  }
  closeSubMenu(subLinks, level) {
    let openClass = `open-level-${level}`;
    console.log(openClass, 'openClass');
    if (level === '1') this.domNodes.menu.classList.remove('sf-sub-menu-open');
    this.domNodes.menu.classList.remove(openClass);
    setTimeout(() => {
      subLinks.classList.add('hidden');
    }, this.transitionDuration);
  }
}
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
;// CONCATENATED MODULE: ./src/js/modules/siteNav.js
/* provided dependency */ var siteNav_MinimogTheme = __webpack_require__(4558)["LE"];

class SiteNav {
  constructor(container) {
    _defineProperty(this, "selectors", {
      menuItems: ['.sf-nav .sf-menu-item'],
      dropdowns: ['.sf-menu__submenu'],
      subMenu: '.sf-menu__submenu',
      dropdownBg: '.sf-nav__bg',
      overlay: '.sf-header__overlay',
      swiper: '.swiper-container'
    });
    _defineProperty(this, "classes", {
      slideFromRight: 'slide-from-right',
      slideReveal: 'slide-reveal',
      active: 'sf-mega-active'
    });
    _defineProperty(this, "headerSticky", false);
    _defineProperty(this, "attachEvents", () => {
      this.domNodes.menuItems.forEach((menuItem, index) => {
        menuItem.addEventListener('mouseenter', evt => this.onMenuItemEnter(evt, index));
        menuItem.addEventListener('mouseleave', evt => this.onMenuItemLeave(evt, index));
      });
    });
    _defineProperty(this, "initDropdownSize", () => {
      var _this$container, _this$container2;
      (_this$container = this.container) === null || _this$container === void 0 ? void 0 : _this$container.style.setProperty('--sf-dropdown-width', this.windowWidth());
      (_this$container2 = this.container) === null || _this$container2 === void 0 ? void 0 : _this$container2.style.setProperty('--sf-dropdown-height', this.windowHeight());
    });
    _defineProperty(this, "onMenuItemEnter", (evt, index) => {
      var _target$dataset, _this$container3, _this$container4, _this$container5, _this$container6, _this$container7;
      const {
        target
      } = evt;
      if (target.classList.contains('sf-menu-item--no-mega')) return;
      clearTimeout(this.timeoutLeave);
      this.activeIndex = Number((_target$dataset = target.dataset) === null || _target$dataset === void 0 ? void 0 : _target$dataset.index);
      this.headerSticky = ((_this$container3 = this.container) === null || _this$container3 === void 0 ? void 0 : _this$container3.dataset.sticky) === 'true';
      this.reInitSlider(target);
      this.visited ? (_this$container4 = this.container) === null || _this$container4 === void 0 ? void 0 : _this$container4.classList.remove(this.classes.slideReveal) : (_this$container5 = this.container) === null || _this$container5 === void 0 ? void 0 : _this$container5.classList.add(this.classes.slideReveal);
      this.visited = true;
      this.lastActiveIndex >= 0 && this.activeIndex >= 0 && (this.lastActiveIndex < this.activeIndex ? (_this$container6 = this.container) === null || _this$container6 === void 0 ? void 0 : _this$container6.classList.add(this.classes.slideFromRight) : this.lastActiveIndex > this.activeIndex && ((_this$container7 = this.container) === null || _this$container7 === void 0 ? void 0 : _this$container7.classList.remove(this.classes.slideFromRight)));
      this.getElementBoundingRect(target).then(rect => {
        if (rect) {
          var _this$container8, _this$container9;
          (_this$container8 = this.container) === null || _this$container8 === void 0 ? void 0 : _this$container8.style.setProperty('--sf-dropdown-width', rect.width);
          (_this$container9 = this.container) === null || _this$container9 === void 0 ? void 0 : _this$container9.style.setProperty('--sf-dropdown-height', rect.height);
        }
        this.timeoutEnter = setTimeout(() => {
          var _this$container10;
          if (this.activeIndex !== Number(target.dataset.index)) return;
          (_this$container10 = this.container) === null || _this$container10 === void 0 ? void 0 : _this$container10.classList.add(this.classes.active);
          target.closest('.sf-menu-item').classList.add('sf-menu-item--active');
        }, 120);
      });
    });
    _defineProperty(this, "onMenuItemLeave", (evt, index) => {
      // console.log(evt, 'leave')
      this.activeIndex = -1;
      this.lastActiveIndex = index;
      evt.target.closest('.sf-menu-item').classList.remove('sf-menu-item--active');
      this.timeoutLeave = setTimeout(() => {
        if (this.activeIndex === -1 || this.activeIndex < 0) {
          this.visited = false;
        }
        this.resetMegaMenu(evt.target);
      }, 80);
    });
    _defineProperty(this, "reInitSlider", menuItem => {
      var _MinimogTheme;
      const swiper = menuItem.querySelector(this.selectors.swiper);
      if (!swiper) return;
      const itemIndex = menuItem.dataset.index;
      const slider = (_MinimogTheme = siteNav_MinimogTheme) === null || _MinimogTheme === void 0 ? void 0 : _MinimogTheme.headerSliders[itemIndex];
      slider === null || slider === void 0 ? void 0 : slider.update();
    });
    _defineProperty(this, "getElementBoundingRect", async element => {
      const subMenu = element.querySelector(this.selectors.subMenu);
      if (subMenu) {
        const rect = subMenu.getBoundingClientRect();
        return {
          width: rect.width,
          height: rect.height,
          left: rect.left,
          top: rect.top
        };
      }
    });
    _defineProperty(this, "resetMegaMenu", () => {
      var _this$container11;
      this.activeIndex = -1;
      clearTimeout(this.timeoutEnter);
      (_this$container11 = this.container) === null || _this$container11 === void 0 ? void 0 : _this$container11.classList.remove(this.classes.active, this.classes.slideFromRight, this.classes.slideReveal, 'sf-header--bg-black', 'sf-header--bg-white');
    });
    _defineProperty(this, "windowWidth", () => {
      return window.innerWidth;
    });
    _defineProperty(this, "windowHeight", () => {
      return window.innerHeight;
    });
    _defineProperty(this, "destroy", () => {
      this.domNodes.menuItems.forEach((menuItem, index) => {
        menuItem.removeEventListener('mouseenter', evt => this.onMenuItemEnter(evt, index));
        menuItem.removeEventListener('mouseleave', evt => this.onMenuItemLeave(evt, index));
      });
    });
    if (!container) return;
    this.container = container;
    this.domNodes = queryDomNodes(this.selectors, this.container);
    this.activeIndex = -1;
    this.lastActiveIndex = -1;
    this.visited = false;
    this.timeoutEnter = null;
    this.timeoutLeave = null;
    this.attachEvents();
  }
}
;// CONCATENATED MODULE: ./src/js/utilities/select.js
function initCustomSelect(container) {
  let x, i, j, l, ll, selElmnt, a, b, c, ar, at;
  x = container.getElementsByClassName("sf__custom-select");
  l = x.length;
  if (x.length > 0) {
    for (i = 0; i < l; i++) {
      var _selElmnt$options$sel;
      selElmnt = x[i].getElementsByTagName("select")[0];
      x[i].innerHTML = '';
      x[i].appendChild(selElmnt);
      ll = selElmnt.length;
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      at = document.createElement("SPAN");
      at.innerHTML = (_selElmnt$options$sel = selElmnt.options[selElmnt.selectedIndex]) === null || _selElmnt$options$sel === void 0 ? void 0 : _selElmnt$options$sel.innerHTML;
      x[i].appendChild(a);
      a.appendChild(at);
      ar = document.createElement("SPAN");
      ar.innerHTML = `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"/></svg>`;
      ar.setAttribute("class", "select-arrow");
      a.appendChild(ar);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 0; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        if (selElmnt.options[j].getAttribute('selected')) {
          c.setAttribute("class", "same-as-selected");
        }
        c.addEventListener("click", function (e) {
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          let y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.childNodes[0].innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          s.dispatchEvent(new Event('change'));
          s.dispatchEvent(new Event('click'));
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
  }
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
;// CONCATENATED MODULE: ./src/js/sections/header.js
/* provided dependency */ var header_MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var MinimogSettings = __webpack_require__(4558)["GQ"];




register('header', {
  onLoad: function () {
    var _this$container, _this$container$datas, _this$container2, _this$container2$data;
    this.isDesignMode = ((_this$container = this.container) === null || _this$container === void 0 ? void 0 : (_this$container$datas = _this$container.dataset) === null || _this$container$datas === void 0 ? void 0 : _this$container$datas.designMode) === 'true';
    this.selectors = {
      headers: ['header'],
      logos: ['.sf-logo'],
      topbar: '.sf-topbar',
      headerWrapper: '.header__wrapper',
      topbarClose: '.sf-topbar__close'
    };
    initCustomSelect(this.container);
    this.domNodes = queryDomNodes(this.selectors, this.container);
    this.innerWidth = window.innerWidth;
    this.offsetTop = this.domNodes.headerWrapper.offsetTop;
    this.headerHeight = this.domNodes.headerWrapper.offsetHeight;
    this.stickyEnabled = ((_this$container2 = this.container) === null || _this$container2 === void 0 ? void 0 : (_this$container2$data = _this$container2.dataset) === null || _this$container2$data === void 0 ? void 0 : _this$container2$data.sticky) === 'true' || false;
    this.classes = {
      scrollUp: 'scroll-up',
      scrollDown: 'scroll-down',
      stuck: 'stuck'
    };
    try {
      var _this$domNodes, _this$domNodes$header, _this$domNodes$header2, _this$domNodes$header3;
      this.transparentHeader = ((_this$domNodes = this.domNodes) === null || _this$domNodes === void 0 ? void 0 : (_this$domNodes$header = _this$domNodes.headers) === null || _this$domNodes$header === void 0 ? void 0 : (_this$domNodes$header2 = _this$domNodes$header[0]) === null || _this$domNodes$header2 === void 0 ? void 0 : (_this$domNodes$header3 = _this$domNodes$header2.dataset) === null || _this$domNodes$header3 === void 0 ? void 0 : _this$domNodes$header3.transparent) === 'true';
      this.initAddon();
      this.handleSticky();
      this.siteNav = new SiteNav(this.container);
      window.__sfHeader = this;
      window.addEventListener('resize', () => {
        this.innerWidth = window.innerWidth;
      });
      if (this.transparentHeader && this.innerWidth > 1280) {
        var _this$domNodes$header4, _this$domNodes$header5;
        (_this$domNodes$header4 = this.domNodes.headerWrapper) === null || _this$domNodes$header4 === void 0 ? void 0 : (_this$domNodes$header5 = _this$domNodes$header4.classList) === null || _this$domNodes$header5 === void 0 ? void 0 : _this$domNodes$header5.add('transparent-on-top');
      } else {
        var _this$domNodes$header6, _this$domNodes$header7;
        (_this$domNodes$header6 = this.domNodes.headerWrapper) === null || _this$domNodes$header6 === void 0 ? void 0 : (_this$domNodes$header7 = _this$domNodes$header6.classList) === null || _this$domNodes$header7 === void 0 ? void 0 : _this$domNodes$header7.remove('transparent-on-top');
      }
    } catch (error) {
      console.error('Failed to init header section.', error);
    }
  },
  initAddon: function () {
    this.megamenu = new Megamenu(this.container);
    if (this.isDesignMode) {
      var _MinimogTheme, _MinimogTheme$Wishlis, _MinimogTheme$Wishlis2, _MinimogTheme2, _MinimogTheme2$Search, _MinimogTheme2$Search2;
      header_MinimogTheme = header_MinimogTheme || {};
      (_MinimogTheme = header_MinimogTheme) === null || _MinimogTheme === void 0 ? void 0 : (_MinimogTheme$Wishlis = _MinimogTheme.Wishlist) === null || _MinimogTheme$Wishlis === void 0 ? void 0 : (_MinimogTheme$Wishlis2 = _MinimogTheme$Wishlis.updateWishlistCount) === null || _MinimogTheme$Wishlis2 === void 0 ? void 0 : _MinimogTheme$Wishlis2.call(_MinimogTheme$Wishlis);
      (_MinimogTheme2 = header_MinimogTheme) === null || _MinimogTheme2 === void 0 ? void 0 : (_MinimogTheme2$Search = _MinimogTheme2.Search) === null || _MinimogTheme2$Search === void 0 ? void 0 : (_MinimogTheme2$Search2 = _MinimogTheme2$Search.init) === null || _MinimogTheme2$Search2 === void 0 ? void 0 : _MinimogTheme2$Search2.call(_MinimogTheme2$Search);
    }
  },
  handleSticky: function () {
    let extraSpace = MinimogSettings.template === 'product' ? 20 : 50;
    if (!this.stickyEnabled) return;
    let lastScroll = 0;
    if (this.offsetTop === 0) {
      this.container.classList.add(this.classes.stuck);
    }
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= this.offsetTop) {
        this.container.classList.remove(this.classes.scrollUp, this.classes.stuck);
        if (this.transparentHeader && this.innerWidth > 1279) {
          var _this$domNodes$header8, _this$domNodes$header9, _this$domNodes$header10;
          (_this$domNodes$header8 = this.domNodes.headerWrapper) === null || _this$domNodes$header8 === void 0 ? void 0 : (_this$domNodes$header9 = _this$domNodes$header8.classList) === null || _this$domNodes$header9 === void 0 ? void 0 : (_this$domNodes$header10 = _this$domNodes$header9.add) === null || _this$domNodes$header10 === void 0 ? void 0 : _this$domNodes$header10.call(_this$domNodes$header9, 'transparent-on-top');
        }
        return;
      }
      this.container.classList.add(this.classes.stuck);
      if (currentScroll > this.headerHeight + extraSpace && currentScroll > lastScroll && !this.container.classList.contains(this.classes.scrollDown)) {
        this.container.classList.remove(this.classes.scrollUp);
        this.container.classList.add(this.classes.scrollDown);
      } else if (currentScroll < lastScroll && this.container.classList.contains(this.classes.scrollDown)) {
        this.container.classList.remove(this.classes.scrollDown);
        this.container.classList.add(this.classes.scrollUp);
        if (this.transparentHeader && this.innerWidth > 1279) {
          var _this$domNodes$header11, _this$domNodes$header12, _this$domNodes$header13;
          (_this$domNodes$header11 = this.domNodes.headerWrapper) === null || _this$domNodes$header11 === void 0 ? void 0 : (_this$domNodes$header12 = _this$domNodes$header11.classList) === null || _this$domNodes$header12 === void 0 ? void 0 : (_this$domNodes$header13 = _this$domNodes$header12.remove) === null || _this$domNodes$header13 === void 0 ? void 0 : _this$domNodes$header13.call(_this$domNodes$header12, 'transparent-on-top');
        }
      }
      lastScroll = currentScroll;
    });
  },
  onUnload: function () {
    this.siteNav.destroy();
  }
});
load('header');
}();
/******/ })()
;
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ 7196:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

;// CONCATENATED MODULE: ./src/js/components/Spinner.jsx
/* provided dependency */ var createElement = __webpack_require__(6295)["Z"];
/* harmony default export */ function Spinner(_ref) {
  let {
    className = ''
  } = _ref;
  return createElement("svg", {
    className: `animate-spin hidden w-[20px] h-[20px] ${className}`,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none"
  }, createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }), createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
}
// EXTERNAL MODULE: ./node_modules/@shopify/theme-sections/theme-sections.js
var theme_sections = __webpack_require__(9191);
// EXTERNAL MODULE: ./src/js/utilities/index.js
var utilities = __webpack_require__(2870);
;// CONCATENATED MODULE: ./src/js/utilities/section.js
/* provided dependency */ var MinimogLibs = __webpack_require__(4558)["gM"];
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];

function initSlider(_ref) {
  let {
    container,
    pagination,
    items = 4,
    slidesPerView = 2,
    slidesPerGroup = 2,
    slidesPerGroupMobile = 2,
    loop = false,
    showPagination = false,
    showNavigation = false,
    autoplay = false,
    speed = 300
  } = _ref;
  if (!container) return;
  const sliderContainer = container.querySelector('.swiper-container');
  if (!sliderContainer) return;
  const controlsContainer = container.querySelector('.sf-slider__controls');
  const prevButton = controlsContainer && controlsContainer.querySelector('.sf-slider__controls-prev');
  const nextButton = controlsContainer && controlsContainer.querySelector('.sf-slider__controls-next');
  const lgItems = items > 4 ? items - 1 : items;
  const mdItems = items > 4 ? items - 2 : items;
  const slideItemsLength = sliderContainer.querySelector('.swiper-wrapper').childElementCount;
  let slider;
  if (showPagination) sliderContainer.classList.add('swiper-container-show-pagination');
  if (showNavigation) sliderContainer.classList.add('swiper-container-show-nav');
  const _initSlider = () => {
    loadAssets(['swiper.css', 'swiper.js']).then(() => {
      slider = new MinimogLibs.Swiper(sliderContainer, {
        init: false,
        autoHeight: true,
        autoplay: autoplay ? {
          delay: 4000,
          disableOnInteraction: true
        } : false,
        slidesPerView: slidesPerView,
        slidesPerGroup: slidesPerGroup || slidesPerView,
        loop: loop,
        touchRatio: 1.5,
        speed: speed,
        simulateTouch: true,
        threshold: 2,
        pagination: showPagination ? pagination || {
          el: container.querySelector('.swiper-pagination'),
          clickable: true
        } : false,
        breakpoints: {
          280: {
            slidesPerView: slidesPerView,
            slidesPerGroup: slidesPerGroupMobile || slidesPerView
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 2
          },
          992: {
            slidesPerView: mdItems,
            slidesPerGroup: slidesPerGroup || mdItems
          },
          1200: {
            slidesPerView: lgItems,
            slidesPerGroup: slidesPerGroup || lgItems
          },
          1366: {
            slidesPerView: items,
            slidesPerGroup: slidesPerGroup || items
          }
        },
        on: {
          breakpoint: (swiper, breakpointParams) => {
            controlsContainer && handleControls(swiper, breakpointParams);
          },
          slideChange: swiper => {
            const {
              isBeginning,
              isEnd
            } = swiper;
            if (!loop && prevButton) prevButton.disabled = isBeginning;
            if (!loop && nextButton) nextButton.disabled = isEnd;
          }
        }
      });
      slider.on('init', () => {
        var _MinimogTheme$Compare, _MinimogTheme$Wishlis;
        // Update prod form ids
        const forms = container.querySelectorAll('.swiper-slide form.shopify-product-form');
        forms.length && [...forms].forEach((form, ind) => {
          form.setAttribute('id', `${form.getAttribute('id')}__${ind}`);
        });
        setTimeout(() => {
          // Calculate controls position
          const firstItem = container.querySelector('.sf-image');
          if (firstItem && controlsContainer) {
            const itemHeight = firstItem.clientHeight;
            controlsContainer.style.setProperty('--offset-top', parseInt(itemHeight) / 2 + 'px');
          }
        }, 200);

        // Attach events for custom controls
        if (slider && showNavigation) {
          prevButton && prevButton.addEventListener('click', () => slider.slidePrev());
          nextButton && nextButton.addEventListener('click', () => slider.slideNext());
        }
        if (!loop && prevButton) prevButton.disabled = true;
        (_MinimogTheme$Compare = MinimogTheme.CompareProduct) === null || _MinimogTheme$Compare === void 0 ? void 0 : _MinimogTheme$Compare.setCompareButtonsState();
        (_MinimogTheme$Wishlis = MinimogTheme.Wishlist) === null || _MinimogTheme$Wishlis === void 0 ? void 0 : _MinimogTheme$Wishlis.setWishlistButtonsState();
      });

      // Init swiper
      slider.init();
    }).catch(console.error);
  };
  if ((0,utilities/* isInViewport */.v4)(container)) {
    _initSlider();
  } else {
    if (window.__sfWindowLoaded) _initSlider();else window.addEventListener("load", _initSlider);
  }
  const handleControls = (swiper, breakpointParams) => {
    const {
      slidesPerView
    } = breakpointParams;
    if (slideItemsLength > slidesPerView) {
      controlsContainer.classList.remove('hidden');
      slider.allowTouchMove = true;
    } else {
      controlsContainer.classList.add('hidden');
      slider.allowTouchMove = false;
    }
  };
}

// export function fetchCountDown(collectionID) {
//   const appURL = MinimogSettings.foxkitAppURL ? `https://${MinimogSettings.foxkitAppURL}` : ''

//   return new Promise((resolve, reject) => {
//     let requestUrl =`${appURL}/api/public/countdown?shop=${window.Shopify?.shop}&collectionIds=${collectionID}`

//     fetch(requestUrl)
//     .then(response => response.json())
//     .then(resolve)
//     .catch(reject)
//   })
// }
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
;// CONCATENATED MODULE: ./src/js/sections/product-tabs.js
/* provided dependency */ var product_tabs_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var product_tabs_MinimogTheme = __webpack_require__(4558)["LE"];
// eslint-disable-next-line no-unused-vars




(0,theme_sections/* register */.z2)('product-tabs', {
  onLoad: function () {
    this.initTabs();
    this.initMobileSelect();
    this.selectors = {
      loadMoreBtn: '[data-load-more]',
      productsContainer: '[data-products-container]'
    };
    this.domNodes = queryDomNodes(this.selectors);
    this.tabSliders = [];
    initCustomSelect(this.container);
    const sliderEnabled = this.container.dataset.enableSlider === 'true';
    const buttonType = this.container.dataset.buttonType;
    const blocks = this.container.querySelectorAll('.sf-tab-content');
    if (sliderEnabled) {
      this.showPagination = this.container.dataset.showPagination === 'true';
      this.showNavigation = this.container.dataset.showNavigation === 'true';
      this.items = this.container.dataset.items;
      for (let block of blocks) {
        this.initSlider(block);
      }
    }
    if (!sliderEnabled && buttonType === 'load') {
      this.canLoad = true;
      this.currentPage = 1;
      this.spinner = product_tabs_createElement(Spinner, null);
      for (let block of blocks) {
        this.initLoadMore(block);
      }
    }
  },
  initTabs: function () {
    this.tabs = new product_tabs_MinimogTheme.Tabs(this === null || this === void 0 ? void 0 : this.container, target => {
      const tabId = target.getAttribute('href');
      const slider = this.container.querySelector(tabId + ' .swiper-container');
      const controlsContainer = this.container.querySelector(tabId + ' .sf-slider__controls');
      // trigger update slider
      slider && slider.swiper.update();
      const firstItem = slider === null || slider === void 0 ? void 0 : slider.querySelector('.sf-image');
      if (firstItem) {
        const itemHeight = firstItem.clientHeight;
        controlsContainer.style.setProperty('--offset-top', parseInt(itemHeight) / 2 + 25 + 'px');
      }
    });
  },
  initSlider: function (sliderContainer) {
    initSlider({
      container: sliderContainer,
      items: parseInt(this.items),
      slidesPerGroup: 2,
      slidesPerGroupMobile: 2,
      showPagination: this.showPagination,
      showNavigation: this.showNavigation
    });
  },
  initMobileSelect: function () {
    this.select = this.container.querySelector('[data-tab-select]');
    this.select.addEventListener('change', () => {
      var _this$tabs, _this$tabs$currentTab, _this$tabs2, _this$tabs2$currentTa;
      this.tabs.setActiveTab(parseInt(this.select.value));
      const slider = (_this$tabs = this.tabs) === null || _this$tabs === void 0 ? void 0 : (_this$tabs$currentTab = _this$tabs.currentTab) === null || _this$tabs$currentTab === void 0 ? void 0 : _this$tabs$currentTab.querySelector('.swiper-container');
      const controlsContainer = (_this$tabs2 = this.tabs) === null || _this$tabs2 === void 0 ? void 0 : (_this$tabs2$currentTa = _this$tabs2.currentTab) === null || _this$tabs2$currentTa === void 0 ? void 0 : _this$tabs2$currentTa.querySelector('.sf-slider__controls');
      slider && slider.swiper.update();
      const firstItem = slider === null || slider === void 0 ? void 0 : slider.querySelector('.sf-image');
      if (firstItem) {
        const itemHeight = firstItem.clientHeight;
        controlsContainer.style.setProperty('--offset-top', parseInt(itemHeight) / 2 + 25 + 'px');
      }
    });
  },
  initLoadMore: function (wrapper) {
    addEventDelegate({
      context: wrapper,
      selector: this.selectors.loadMoreBtn,
      handler: e => {
        e.preventDefault();
        this.handleLoadMore(wrapper);
      }
    });
  },
  handleLoadMore: function (wrapper) {
    const loadBtn = wrapper.querySelector(this.selectors.loadMoreBtn);
    const productsContainer = wrapper.querySelector(this.selectors.productsContainer);
    let currentPage = wrapper.dataset.page;
    currentPage = parseInt(currentPage);
    const totalPages = wrapper.dataset.totalPages;
    this.toggleLoading(loadBtn, true);
    const url = wrapper.dataset.url;
    const dataUrl = `${url}?page=${currentPage + 1}&section_id=${this.id}`;
    fetchCache(dataUrl).then(html => {
      currentPage++;
      wrapper.dataset.page = currentPage;
      this.toggleLoading(loadBtn, false);
      const dom = generateDomFromString(html);
      const products = dom.querySelector(this.selectors.productsContainer);
      if (products) {
        Array.from(products.childNodes).forEach(product => productsContainer.appendChild(product));
      }
      if (currentPage >= parseInt(totalPages)) loadBtn && loadBtn.remove();
    });
  },
  toggleLoading: function (loadBtn, status) {
    if (!loadBtn) return;
    if (status) {
      loadBtn.appendChild(this.spinner);
      loadBtn.classList.add('sf-spinner-loading');
    } else {
      var _this$spinner;
      this === null || this === void 0 ? void 0 : (_this$spinner = this.spinner) === null || _this$spinner === void 0 ? void 0 : _this$spinner.remove();
      loadBtn.classList.remove('sf-spinner-loading');
    }
  },
  onBlockSelect: function (evt) {
    const {
      index
    } = evt.target.dataset;
    this.tabs.setActiveTab(index);
  }
});

// load('product-tabs')

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

/***/ 6662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCache": function() { return /* binding */ fetchCache; },
/* harmony export */   "fetchJSON": function() { return /* binding */ fetchJSON; },
/* harmony export */   "fetchJsonCache": function() { return /* binding */ fetchJsonCache; },
/* harmony export */   "fetchSection": function() { return /* binding */ fetchSection; },
/* harmony export */   "getRequestDefaultConfigs": function() { return /* binding */ getRequestDefaultConfigs; }
/* harmony export */ });
/* provided dependency */ var createElement = __webpack_require__(6295)["Z"];
const requestDefaultConfigs = {
  mode: 'same-origin',
  credentials: 'same-origin',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
};
function getRequestDefaultConfigs() {
  return JSON.parse(JSON.stringify(requestDefaultConfigs));
}
const fetchJSON = function (url) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getRequestDefaultConfigs();
  return fetch(url, config).then(function (response) {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  });
};
const cache = new Map();
const fetchCache = function (url) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getRequestDefaultConfigs();
  return new Promise((resolve, reject) => {
    let cached = cache.get(url);
    if (cached) return resolve(cached);
    fetch(url, config).then(res => {
      cached = res.text();
      cache.set(url, cached);
      resolve(cached);
    }).catch(reject);
  });
};
const sectionCache = new Map();
const fetchSection = function (sectionId) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    url: _url,
    fromCache = false,
    params = {}
  } = options;
  return new Promise((resolve, reject) => {
    const url = new URL(_url || window.location.href);
    url.searchParams.set('section_id', sectionId);
    Object.entries(params).forEach(_ref => {
      let [k, v] = _ref;
      return url.searchParams.set(k, v);
    });
    if (fromCache) {
      const cached = sectionCache.get(url);
      if (cached) return resolve(cached);
    }
    fetch(url, getRequestDefaultConfigs()).then(res => {
      if (res.ok) return res.text();
      reject(`Failed to load section: ${sectionId}`);
    }).then(html => {
      const div = createElement("div", null);
      div.innerHTML = html;
      sectionCache.set(url, div);
      resolve(div);
    }).catch(reject);
  });
};
const cache2 = new Map();
const fetchJsonCache = function (url) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : requestDefaultConfigs;
  return new Promise((resolve, reject) => {
    if (cache2.get(url)) {
      return resolve(cache2.get(url));
    }
    fetch(url, config).then(res => {
      if (res.ok) {
        const json = res.json();
        resolve(json);
        cache2.set(url, json);
        return json;
      } else {
        reject(res);
      }
    }).catch(reject);
  });
};

/***/ }),

/***/ 2870:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ad": function() { return /* binding */ runHelpers; },
/* harmony export */   "CN": function() { return /* binding */ formatUrl; },
/* harmony export */   "fY": function() { return /* binding */ getVideoURL; },
/* harmony export */   "sR": function() { return /* binding */ productFormCheck; },
/* harmony export */   "v4": function() { return /* binding */ isInViewport; }
/* harmony export */ });
/* unused harmony exports queryDomNodes, camelCaseToSnakeCase, animateReplace, scrollToTop, setCookie, getCookie, addRecentViewedProduct, generateDomFromString, emailIsValid, updateParam, getParams, refreshProductReview */
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(643);
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scroll_into_view__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8971);
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1137);
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
function queryDomNodes() {
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
  (0,_events__WEBPACK_IMPORTED_MODULE_1__/* .addEventDelegate */ .X)({
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
  (0,_events__WEBPACK_IMPORTED_MODULE_1__/* .addEventDelegate */ .X)({
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
  scroll_into_view__WEBPACK_IMPORTED_MODULE_0___default()(scrollToTopTarget, callback);
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
    (0,_localization__WEBPACK_IMPORTED_MODULE_2__/* .initLocalization */ .D)();
    addCustomerFormHandlers();
    initScrollTop();
  } catch (err) {
    console.error('Failed to run helpers.', err);
  }
}
window.MinimogLibs.getVideoURL = getVideoURL;
window.MinimogLibs.scrollToTop = scrollToTop;

/***/ }),

/***/ 1137:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ initLocalization; }
/* harmony export */ });
function initLocalization() {
  const switchers = document.querySelectorAll('[data-localization-select]');
  switchers && switchers.forEach(function (select) {
    select.addEventListener('change', function (e) {
      const value = e.target.value;
      const form = select.closest('[data-localization-form]');
      const input = form.querySelector('input[data-localization-input]');
      input && input.setAttribute('value', value);
      input && form.submit();
    });
  });
}

/***/ }),

/***/ 5118:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var MinimogEvents = __webpack_require__(4558)["s0"];
/* provided dependency */ var MinimogStrings = __webpack_require__(4558)["rZ"];
const {
  getRequestDefaultConfigs
} = __webpack_require__(6662);
const Shopify = window.Shopify || {};

/**
 * Override the behavior of https://cdn.shopify.com/s/shopify/api.jquery.js
 */

/*

IMPORTANT:

Ajax requests that update Shopify's cart must be queued and sent synchronously to the server.
Meaning: you must wait for your 1st ajax callback to send your 2nd request, and then wait
for its callback to send your 3rd request, etc.

*/

/*

Override so that Shopify.formatMoney returns pretty
money values instead of cents.

*/

// Shopify.money_format = '${{amount}}';

/*

Events (override!)

Example override:
  ... add to your theme.liquid's script tag....

  Shopify.onItemAdded = function(line_item) {
    $('message').update('Added '+line_item.title + '...');
  }

*/

Shopify.onError = function (XMLHttpRequest, textStatus) {
  // Shopify returns a description of the error in XMLHttpRequest.responseText.
  // It is JSON.
  // Example: {"description":"The product 'Amelia - Small' is already sold out.","status":500,"message":"Cart Error"}
  var data = eval('(' + XMLHttpRequest.responseText + ')');
  if (data.message) {
    alert(data.message + '(' + data.status + '): ' + data.description);
  } else {
    alert('Error : ' + Shopify.fullMessagesFromErrors(data).join('; ') + '.');
  }
};
Shopify.fullMessagesFromErrors = function (errors) {
  var fullMessages = [];
  Array.from(errors).forEach(function (messages, attribute) {
    Array.from(messages).forEach(function (message, index) {
      fullMessages.push(attribute + ' ' + message);
    });
  });
  return fullMessages;
};
Shopify.onCartUpdate = async function (cart) {
  let open_drawer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  try {
    const {
      Cart
    } = MinimogTheme;
    if (Cart) {
      if (!cart) {
        await Cart.refreshCart();
        cart = Cart.cart;
      }
      if (open_drawer) {
        await Cart.renderNewCart();
        Cart.openCartDrawer();
      }
      MinimogEvents.emit('ON_CART_UPDATE', cart);
      console.info(`There are now ${cart.item_count} items in the cart. Should open drawer: ${open_drawer}`);
    }
  } catch (err) {
    console.error("Failed to trigger Shopify.onCartUpdate()", err);
  }
};
Shopify.onCartShippingRatesUpdate = function (rates, shipping_address) {
  var readable_address = '';
  if (shipping_address.zip) readable_address += shipping_address.zip + ', ';
  if (shipping_address.province) readable_address += shipping_address.province + ', ';
  readable_address += shipping_address.country;
  alert('There are ' + rates.length + ' shipping rates available for ' + readable_address + ', starting at ' + Shopify.formatMoney(rates[0].price) + '.');
};

/**
 * Shopify will override the fetch and XHR request for analytics so we will not override it.
 * Use the Shopify.onItemAdded instead.
 * @param line_item
 * @param open_drawer
 */
Shopify.onItemAdded = async function (line_item) {
  let open_drawer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  console.info(`New item added to cart: `, line_item, `Should open drawer: ${open_drawer}`);
  try {
    const {
      Cart
    } = MinimogTheme;
    MinimogEvents.emit('ON_ITEM_ADDED', line_item);
    if (Cart) {
      await Cart.refreshCart();
      if (open_drawer) {
        var _Cart$domNodes;
        await Cart.renderNewCart();
        Cart.openCartDrawer();
        MinimogTheme.Notification.show({
          target: (_Cart$domNodes = Cart.domNodes) === null || _Cart$domNodes === void 0 ? void 0 : _Cart$domNodes.cartDrawerItems,
          method: 'prepend',
          type: 'success',
          message: MinimogStrings.itemAdded,
          delay: 400
        });
      }
      await Shopify.onCartUpdate(Cart.cart, false);
    }
  } catch (err) {
    console.error(`Failed to execute Shopify.onItemAdded()`, err);
  }
};
Shopify.onProduct = function (product) {
  alert('Received everything we ever wanted to know about ' + product.title);
};

/* Tools */

/*
Examples of call:
Shopify.formatMoney(600000, 'â‚¬{{amount_with_comma_separator}} EUR')
Shopify.formatMoney(600000, 'â‚¬{{amount}} EUR')
Shopify.formatMoney(600000, '${{amount_no_decimals}}')
Shopify.formatMoney(600000, '{{ shop.money_format }}') in a Liquid template!

In a Liquid template, you have access to a shop money formats with:
{{ shop.money_format }}
{{ shop.money_with_currency_format }}
{{ shop.money_without_currency_format }}
All these formats are editable on the Preferences page in your admin.
*/
Shopify.formatMoney = function (cents, format) {
  if (typeof cents == 'string') {
    cents = cents.replace('.', '');
  }
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = format || this.money_format;
  function defaultOption(opt, def) {
    return typeof opt == 'undefined' ? def : opt;
  }
  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal = defaultOption(decimal, '.');
    if (isNaN(number) || number == null) {
      return 0;
    }
    number = (number / 100.0).toFixed(precision);
    var parts = number.split('.'),
      dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
      cents = parts[1] ? decimal + parts[1] : '';
    return dollars + cents;
  }
  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }
  return formatString.replace(placeholderRegex, value);
};
Shopify.resizeImage = function (image, size) {
  try {
    if (size === 'original') {
      return image;
    } else {
      var matches = image.match(/(.*\/[\w\-_.]+)\.(\w{2,4})/);
      return matches[1] + '_' + size + '.' + matches[2];
    }
  } catch (e) {
    return image;
  }
};

/* Ajax API */

// -------------------------------------------------------------------------------------
// POST to cart/add.js returns the JSON of the line item associated with the added item.
// -------------------------------------------------------------------------------------
Shopify.addItem = function (variant_id, quantity, callback) {
  console.info('// TODO: Implement Shopify.addItem function!');
  //  quantity = quantity || 1
  // let params = {
  //   type: 'POST',
  //   url: '/cart/add.js',
  //   data: 'quantity=' + quantity + '&id=' + variant_id,
  //   dataType: 'json',
  //   success: function (line_item) {
  //     if ((typeof callback) === 'function') {
  //       callback(line_item)
  //     } else {
  //       Shopify.onItemAdded(line_item)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

// ---------------------------------------------------------
// POST to cart/add.js returns the JSON of the line item.
// ---------------------------------------------------------
Shopify.addItemFromForm = function (form_id, callback) {
  console.info('// TODO: Implement Shopify.addItemFromForm function!');

  // var params = {
  //   type: 'POST',
  //   url: '/cart/add.js',
  //   data: jQuery('#' + form_id).serialize(),
  //   dataType: 'json',
  //   success: function (line_item) {
  //     if ((typeof callback) === 'function') {
  //       callback(line_item)
  //     } else {
  //       Shopify.onItemAdded(line_item)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

// ---------------------------------------------------------
// GET cart.js returns the cart in JSON.
// ---------------------------------------------------------
Shopify.getCart = function (callback) {
  console.info('// TODO: Implement Shopify.getCart function!');

  // jQuery.getJSON('/cart.js', function (cart, textStatus) {
  //   if ((typeof callback) === 'function') {
  //     callback(cart)
  //   } else {
  //     Shopify.onCartUpdate(cart)
  //   }
  // })
};

Shopify.pollForCartShippingRatesForDestination = function (shippingAddress, callback, errback) {
  console.info('// TODO: Implement Shopify.pollForCartShippingRatesForDestination function!');

  // errback = errback || Shopify.onError
  // var poller = function () {
  //   jQuery.ajax('/cart/async_shipping_rates', {
  //     dataType: 'json',
  //     success: function (response, textStatus, xhr) {
  //       if (xhr.status === 200) {
  //         if ((typeof callback) == 'function') {
  //           callback(response.shipping_rates, shippingAddress)
  //         } else {
  //           Shopify.onCartShippingRatesUpdate(response.shipping_rates, shippingAddress)
  //         }
  //       } else {
  //         setTimeout(poller, 500)
  //       }
  //     },
  //     error: errback
  //   })
  // }
  //
  // return poller
};

Shopify.getCartShippingRatesForDestination = function (shippingAddress, callback, errback) {
  console.info('// TODO: Implement Shopify.getCartShippingRatesForDestination function!');

  // errback = errback || Shopify.onError
  // var params = {
  //   type: 'POST',
  //   url: '/cart/prepare_shipping_rates',
  //   data: Shopify.param({'shipping_address': shippingAddress}),
  //   success: Shopify.pollForCartShippingRatesForDestination(shippingAddress, callback, errback),
  //   error: errback
  // }
  //
  // jQuery.ajax(params)
};

// ---------------------------------------------------------
// GET products/<product-handle>.js returns the product in JSON.
// ---------------------------------------------------------
Shopify.getProduct = function (handle, callback) {
  console.info('// TODO: Implement Shopify.getProduct function!');

  // jQuery.getJSON('/products/' + handle + '.js', function (product, textStatus) {
  //   if ((typeof callback) === 'function') {
  //     callback(product)
  //   } else {
  //     Shopify.onProduct(product)
  //   }
  // })
};

// ---------------------------------------------------------
// POST to cart/change.js returns the cart in JSON.
// ---------------------------------------------------------
Shopify.changeItem = function (variant_id, quantity, callback) {
  console.info('// TODO: Implement Shopify.changeItem function!');

  // var params = {
  //   type: 'POST',
  //   url: '/cart/change.js',
  //   data: 'quantity=' + quantity + '&id=' + variant_id,
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

// ---------------------------------------------------------
// POST to cart/change.js returns the cart in JSON.
// ---------------------------------------------------------
Shopify.removeItem = function (variant_id, callback) {
  console.info('// TODO: Implement Shopify.removeItem function!');

  // var params = {
  //   type: 'POST',
  //   url: '/cart/change.js',
  //   data: 'quantity=0&id=' + variant_id,
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

// ---------------------------------------------------------
// POST to cart/clear.js returns the cart in JSON.
// It removes all the items in the cart, but does
// not clear the cart attributes nor the cart note.
// ---------------------------------------------------------
Shopify.clear = async function () {
  let removeAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  try {
    await Promise.all([await fetch('/cart/clear.js'), removeAttributes && (await fetch('/cart/update.js', {
      ...getRequestDefaultConfigs(),
      method: 'POST',
      body: JSON.stringify({
        attributes: {
          _foxCartDiscounts: null
        }
      })
    }))]);
  } catch (error) {
    console.error("Failed to clear cart. ", error);
  }
};

// ---------------------------------------------------------
// POST to cart/update.js returns the cart in JSON.
// ---------------------------------------------------------
Shopify.updateCartFromForm = function (form_id, callback) {
  console.info('// TODO: Implement Shopify.updateCartFromForm function!');

  // var params = {
  //   type: 'POST',
  //   url: '/cart/update.js',
  //   data: jQuery('#' + form_id).serialize(),
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

// ---------------------------------------------------------
// POST to cart/update.js returns the cart in JSON.
// To clear a particular attribute, set its value to an empty string.
// Receives attributes as a hash or array. Look at comments below.
// ---------------------------------------------------------
Shopify.updateCartAttributes = function (attributes, callback) {
  console.info('// TODO: Implement Shopify.updateCartAttributes function!');

  // var data = ''
  // // If attributes is an array of the form:
  // // [ { key: 'my key', value: 'my value' }, ... ]
  // if (jQuery.isArray(attributes)) {
  //   jQuery.each(attributes, function (indexInArray, valueOfElement) {
  //     var key = attributeToString(valueOfElement.key)
  //     if (key !== '') {
  //       data += 'attributes[' + key + ']=' + attributeToString(valueOfElement.value) + '&'
  //     }
  //   })
  // }
  //   // If attributes is a hash of the form:
  // // { 'my key' : 'my value', ... }
  // else if ((typeof attributes === 'object') && attributes !== null) {
  //   jQuery.each(attributes, function (key, value) {
  //     data += 'attributes[' + attributeToString(key) + ']=' + attributeToString(value) + '&'
  //   })
  // }
  // var params = {
  //   type: 'POST',
  //   url: '/cart/update.js',
  //   data: data,
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

// ---------------------------------------------------------
// POST to cart/update.js returns the cart in JSON.
// ---------------------------------------------------------
Shopify.updateCartNote = function (note, callback) {
  console.info('// TODO: Implement Shopify.updateCartNote function!');

  // var params = {
  //   type: 'POST',
  //   url: '/cart/update.js',
  //   data: 'note=' + attributeToString(note),
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

/***/ }),

/***/ 2105:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Section; }
/* harmony export */ });
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

/***/ }),

/***/ 9191:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z2": function() { return /* binding */ register; },
/* harmony export */   "zD": function() { return /* binding */ load; }
/* harmony export */ });
/* unused harmony exports registered, instances, unregister, unload, extend, getInstances, getInstanceById, isInstance */
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2105);
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
var SECTION_ID_ATTR = 'data-section-id';
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
    _section__WEBPACK_IMPORTED_MODULE_0__/* ["default"].call */ .Z.call(this, container, properties);
  }
  TypedSection.constructor = _section__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
  TypedSection.prototype = Object.create(_section__WEBPACK_IMPORTED_MODULE_0__/* ["default"].prototype */ .Z.prototype);
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
  } else if (types.constructor === _section__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z) {
    types = [types.prototype.type];

    // If array of typed section constructors is passed, transform the array to
    // type strings
  } else if (Array.isArray(types) && types[0].constructor === _section__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z) {
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
    var container = event.target.querySelector('[' + SECTION_ID_ATTR + '="' + id + '"]');
    if (container !== null) {
      load(container.getAttribute(SECTION_TYPE_ATTR), container);
    }
  });
  document.addEventListener('shopify:section:unload', function (event) {
    var id = event.detail.sectionId;
    var container = event.target.querySelector('[' + SECTION_ID_ATTR + '="' + id + '"]');
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

/***/ 1339:
/***/ (function() {

Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
  var t = this;
  do {
    if (t.matches(e)) return t;
    t = t.parentElement || t.parentNode;
  } while (null !== t && 1 === t.nodeType);
  return null;
});

/***/ }),

/***/ 2297:
/***/ (function() {

!function () {
  function t() {
    var e = Array.prototype.slice.call(arguments),
      r = document.createDocumentFragment();
    e.forEach(function (e) {
      var t = e instanceof Node;
      r.appendChild(t ? e : document.createTextNode(String(e)));
    }), this.parentNode.insertBefore(r, this.nextSibling);
  }
  [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (e) {
    e.hasOwnProperty("after") || Object.defineProperty(e, "after", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  });
}();

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

/***/ 598:
/***/ (function() {

!function () {
  function t() {
    var e = Array.prototype.slice.call(arguments),
      n = document.createDocumentFragment();
    e.forEach(function (e) {
      var t = e instanceof Node;
      n.appendChild(t ? e : document.createTextNode(String(e)));
    }), this.insertBefore(n, this.firstChild);
  }
  [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {
    e.hasOwnProperty("prepend") || Object.defineProperty(e, "prepend", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  });
}();

/***/ }),

/***/ 1713:
/***/ (function() {

!function () {
  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };
  function t() {
    var e,
      t = this.parentNode,
      o = arguments.length;
    if (t) for (o || t.removeChild(this); o--;) "object" !== (void 0 === (e = arguments[o]) ? "undefined" : r(e)) ? e = this.ownerDocument.createTextNode(e) : e.parentNode && e.parentNode.removeChild(e), o ? t.insertBefore(this.previousSibling, e) : t.replaceChild(e, this);
  }
  [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (e) {
    e.hasOwnProperty("replaceWith") || Object.defineProperty(e, "replaceWith", {
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./node_modules/@shopify/theme-sections/theme-sections.js
var theme_sections = __webpack_require__(9191);
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
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/loader.js
var query = "query countries($locale: SupportedLocale!) {" + "  countries(locale: $locale) {" + "    name" + "    code" + "    labels {" + "      address1" + "      address2" + "      city" + "      company" + "      country" + "      firstName" + "      lastName" + "      phone" + "      postalCode" + "      zone" + "    }" + "    formatting {" + "      edit" + "    }" + "    zones {" + "      name" + "      code" + "    }" + "  }" + "}";
var GRAPHQL_ENDPOINT = 'https://country-service.shopifycloud.com/graphql';
function loadCountries(locale) {
  var response = fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      query: query,
      operationName: 'countries',
      variables: {
        locale: toSupportedLocale(locale)
      }
    })
  });
  return response.then(function (res) {
    return res.json();
  }).then(function (countries) {
    return countries.data.countries;
  });
}
var DEFAULT_LOCALE = 'EN';
var SUPPORTED_LOCALES = ['DA', 'DE', 'EN', 'ES', 'FR', 'IT', 'JA', 'NL', 'PT', 'PT_BR'];
function toSupportedLocale(locale) {
  var supportedLocale = locale.replace(/-/, '_').toUpperCase();
  if (SUPPORTED_LOCALES.indexOf(supportedLocale) !== -1) {
    return supportedLocale;
  } else if (SUPPORTED_LOCALES.indexOf(supportedLocale.substring(0, 2)) !== -1) {
    return supportedLocale.substring(0, 2);
  } else {
    return DEFAULT_LOCALE;
  }
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/helpers.js
function mergeObjects() {
  var to = Object({});
  for (var index = 0; index < arguments.length; index++) {
    var nextSource = arguments[index];
    if (nextSource) {
      for (var nextKey in nextSource) {
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/addressForm.js


var FIELD_REGEXP = /({\w+})/g;
var LINE_DELIMITER = '_';
var INPUT_SELECTORS = {
  lastName: '[name="address[last_name]"]',
  firstName: '[name="address[first_name]"]',
  company: '[name="address[company]"]',
  address1: '[name="address[address1]"]',
  address2: '[name="address[address2]"]',
  country: '[name="address[country]"]',
  zone: '[name="address[province]"]',
  postalCode: '[name="address[zip]"]',
  city: '[name="address[city]"]',
  phone: '[name="address[phone]"]'
};
function AddressForm(rootEl, locale, options) {
  locale = locale || 'en';
  options = options || {
    inputSelectors: {}
  };
  var formElements = loadFormElements(rootEl, mergeObjects(INPUT_SELECTORS, options.inputSelectors));
  validateElements(formElements);
  return loadShippingCountries(options.shippingCountriesOnly).then(function (shippingCountryCodes) {
    return loadCountries(locale).then(function (countries) {
      init(rootEl, formElements, filterCountries(countries, shippingCountryCodes));
    });
  });
}

/**
 * Runs when countries have been loaded
 */
function init(rootEl, formElements, countries) {
  populateCountries(formElements, countries);
  var selectedCountry = formElements.country.input ? formElements.country.input.value : null;
  setEventListeners(rootEl, formElements, countries);
  handleCountryChange(rootEl, formElements, selectedCountry, countries);
}

/**
 * Handles when a country change: set labels, reorder fields, populate zones
 */
function handleCountryChange(rootEl, formElements, countryCode, countries) {
  var country = getCountry(countryCode, countries);
  setLabels(formElements, country);
  reorderFields(rootEl, formElements, country);
  populateZones(formElements, country);
}

/**
 * Sets up event listener for country change
 */
function setEventListeners(rootEl, formElements, countries) {
  formElements.country.input.addEventListener('change', function (event) {
    handleCountryChange(rootEl, formElements, event.target.value, countries);
  });
}

/**
 * Reorder fields in the DOM and add data-attribute to fields given a country
 */
function reorderFields(rootEl, formElements, country) {
  var formFormat = country.formatting.edit;
  var countryWrapper = formElements.country.wrapper;
  var afterCountry = false;
  getOrderedField(formFormat).forEach(function (row) {
    row.forEach(function (line) {
      formElements[line].wrapper.dataset.lineCount = row.length;
      if (!formElements[line].wrapper) {
        return;
      }
      if (line === 'country') {
        afterCountry = true;
        return;
      }
      if (afterCountry) {
        rootEl.append(formElements[line].wrapper);
      } else {
        rootEl.insertBefore(formElements[line].wrapper, countryWrapper);
      }
    });
  });
}

/**
 * Update labels for a given country
 */
function setLabels(formElements, country) {
  Object.keys(formElements).forEach(function (formElementName) {
    formElements[formElementName].labels.forEach(function (label) {
      label.textContent = country.labels[formElementName];
    });
  });
}

/**
 * Add right countries in the dropdown for a given country
 */
function populateCountries(formElements, countries) {
  var countrySelect = formElements.country.input;
  var duplicatedCountrySelect = countrySelect.cloneNode(true);
  countries.forEach(function (country) {
    var optionElement = document.createElement('option');
    optionElement.value = country.code;
    optionElement.textContent = country.name;
    duplicatedCountrySelect.appendChild(optionElement);
  });
  countrySelect.innerHTML = duplicatedCountrySelect.innerHTML;
  if (countrySelect.dataset.default) {
    countrySelect.value = countrySelect.dataset.default;
  }
}

/**
 * Add right zones in the dropdown for a given country
 */
function populateZones(formElements, country) {
  var zoneEl = formElements.zone;
  if (!zoneEl) {
    return;
  }
  if (country.zones.length === 0) {
    zoneEl.wrapper.dataset.ariaHidden = 'true';
    zoneEl.input.innerHTML = '';
    return;
  }
  zoneEl.wrapper.dataset.ariaHidden = 'false';
  var zoneSelect = zoneEl.input;
  var duplicatedZoneSelect = zoneSelect.cloneNode(true);
  duplicatedZoneSelect.innerHTML = '';
  country.zones.forEach(function (zone) {
    var optionElement = document.createElement('option');
    optionElement.value = zone.code;
    optionElement.textContent = zone.name;
    duplicatedZoneSelect.appendChild(optionElement);
  });
  zoneSelect.innerHTML = duplicatedZoneSelect.innerHTML;
  if (zoneSelect.dataset.default) {
    zoneSelect.value = zoneSelect.dataset.default;
  }
}

/**
 * Will throw if an input or a label is missing from the wrapper
 */
function validateElements(formElements) {
  Object.keys(formElements).forEach(function (elementKey) {
    var element = formElements[elementKey].input;
    var labels = formElements[elementKey].labels;
    if (!element) {
      return;
    }
    if (typeof element !== 'object') {
      throw new TypeError(formElements[elementKey] + ' is missing an input or select.');
    } else if (typeof labels !== 'object') {
      throw new TypeError(formElements[elementKey] + ' is missing a label.');
    }
  });
}

/**
 * Given an countryCode (eg. 'CA'), will return the data of that country
 */
function getCountry(countryCode, countries) {
  countryCode = countryCode || 'CA';
  return countries.filter(function (country) {
    return country.code === countryCode;
  })[0];
}

/**
 * Given a format (eg. "{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{country}{province}{zip}_{phone}")
 * will return an array of how the form needs to be formatted, eg.:
 * =>
 * [
 *   ['firstName', 'lastName'],
 *   ['company'],
 *   ['address1'],
 *   ['address2'],
 *   ['city'],
 *   ['country', 'province', 'zip'],
 *   ['phone']
 * ]
 */
function getOrderedField(format) {
  return format.split(LINE_DELIMITER).map(function (fields) {
    var result = fields.match(FIELD_REGEXP);
    if (!result) {
      return [];
    }
    return result.map(function (fieldName) {
      var newFieldName = fieldName.replace(/[{}]/g, '');
      switch (newFieldName) {
        case 'zip':
          return 'postalCode';
        case 'province':
          return 'zone';
        default:
          return newFieldName;
      }
    });
  });
}

/**
 * Given a rootEl where all `input`s, `select`s, and `labels` are nested, it
 * will returns all form elements (wrapper, input and labels) of the form.
 * See `FormElements` type for details
 */
function loadFormElements(rootEl, inputSelectors) {
  var elements = {};
  Object.keys(INPUT_SELECTORS).forEach(function (inputKey) {
    var input = rootEl.querySelector(inputSelectors[inputKey]);
    elements[inputKey] = input ? {
      wrapper: input.parentElement,
      input: input,
      labels: document.querySelectorAll('[for="' + input.id + '"]')
    } : {};
  });
  return elements;
}

/**
 * If shippingCountriesOnly is set to true, will return the list of countries the
 * shop ships to. Otherwise returns null.
 */
function loadShippingCountries(shippingCountriesOnly) {
  if (!shippingCountriesOnly) {
    // eslint-disable-next-line no-undef
    return Promise.resolve(null);
  }
  var response = fetch(location.origin + '/meta.json');
  return response.then(function (res) {
    return res.json();
  }).then(function (meta) {
    // If ships_to_countries has * in the list, it means the shop ships to
    // all countries
    return meta.ships_to_countries.indexOf('*') !== -1 ? null : meta.ships_to_countries;
  }).catch(function () {
    return null;
  });
}

/**
 * Only returns countries that are in includedCountryCodes
 * Returns all countries if no includedCountryCodes is passed
 */
function filterCountries(countries, includedCountryCodes) {
  if (!includedCountryCodes) {
    return countries;
  }
  return countries.filter(function (country) {
    return includedCountryCodes.indexOf(country.code) !== -1;
  });
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/theme-addresses.js


;// CONCATENATED MODULE: ./src/js/modules/cart.js
/* provided dependency */ var MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var MinimogStrings = __webpack_require__(4558)["rZ"];
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var MinimogEvents = __webpack_require__(4558)["s0"];
/* provided dependency */ var createElement = __webpack_require__(6295)["Z"];

// import CountdownTimer from '@modules/countdown-timer'


class Cart {
  constructor() {
    _defineProperty(this, "selectors", {
      cartIcon: '.sf-cart-icon',
      cartCounts: ['.sf-cart-count'],
      cartDrawer: '.scd__wrapper',
      cartDrawerContent: '.scd__content',
      cartDrawerFooter: '.scd__footer',
      cartDrawerClose: '.scd__close',
      cartDiscountCode: '[name="discount"]',
      cartDiscountCodeNoti: '[data-discount-noti]',
      cartDrawerItems: '.scd__items',
      cartCountDown: '.scd__countdown',
      cartCountDownMessage: "[data-countdown-message]",
      overlay: '.scd__overlay',
      addressForm: '[data-address="root"]',
      zipCode: '[name="address[zip]"]',
      province: '[name="address[province]"]',
      country: '[name="address[country]"]',
      shippingContent: '.scd__addon-message',
      cartNote: '[name="note"]',
      checkoutButton: '[name="checkout"]'
    });
    _defineProperty(this, "cartItemSelectors", {
      btn: '.scd-item__btn',
      qtyInput: '.scd-item__qty_input',
      remove: '.scd-item__remove'
    });
    _defineProperty(this, "cart", {});
    _defineProperty(this, "scrollHandlerAdded", false);
    _defineProperty(this, "countdownTimerStarted", false);
    _defineProperty(this, "openAddon", null);
    _defineProperty(this, "discountCodeKey", 'mn-discount-code');
    _defineProperty(this, "isCartPage", MinimogSettings.templateName === 'cart');
    _defineProperty(this, "enableCartDrawer", MinimogSettings.enable_cart_drawer);
    _defineProperty(this, "cartSection", this.isCartPage ? 'cart-template' : 'cart-drawer');
    _defineProperty(this, "rootUrl", window.Shopify.routes.root);
    _defineProperty(this, "fetchCartSection", async () => {
      return await fetchSection(this.cartSection);
    });
    _defineProperty(this, "initCartCountDown", () => {
      const {
        cartCountDown
      } = this.domNodes;
      if (cartCountDown) {
        const startTime = Date.now();
        const duration = Number(cartCountDown.dataset.countdownTime) || 5;
        const repeat = cartCountDown.dataset.repeat === 'true';
        const message = cartCountDown.dataset.timeoutMessage;
        const endTime = startTime + duration * 60 * 1000;
        this.countdownTimer = new CountdownTimer(cartCountDown, startTime, endTime, {
          addZeroPrefix: false,
          loop: repeat,
          callback: () => {
            if (!repeat && message) {
              this.domNodes.cartCountDownMessage.innerHTML = message;
              cartCountDown.classList.add('time-out');
              cartCountDown.style.color = '#f44336';
            }
          }
        });
        this.countdownTimerStarted = true;
      }
    });
    _defineProperty(this, "addScrollHandler", () => {
      var _this$domNodes, _this$domNodes$cartDr, _this$domNodes2, _this$domNodes2$cartD, _this$domNodes3, _this$domNodes3$cartD, _this$domNodes3$cartD2;
      const cartItemsOffsetTop = (_this$domNodes = this.domNodes) === null || _this$domNodes === void 0 ? void 0 : (_this$domNodes$cartDr = _this$domNodes.cartDrawerItems) === null || _this$domNodes$cartDr === void 0 ? void 0 : _this$domNodes$cartDr.offsetTop;
      const footerHeight = (_this$domNodes2 = this.domNodes) === null || _this$domNodes2 === void 0 ? void 0 : (_this$domNodes2$cartD = _this$domNodes2.cartDrawerFooter) === null || _this$domNodes2$cartD === void 0 ? void 0 : _this$domNodes2$cartD.offsetHeight;
      const cartItemsPaddingTop = '10px';
      (_this$domNodes3 = this.domNodes) === null || _this$domNodes3 === void 0 ? void 0 : (_this$domNodes3$cartD = _this$domNodes3.cartDrawerItems) === null || _this$domNodes3$cartD === void 0 ? void 0 : (_this$domNodes3$cartD2 = _this$domNodes3$cartD.style) === null || _this$domNodes3$cartD2 === void 0 ? void 0 : _this$domNodes3$cartD2.setProperty('--scd-items-max-height', `calc(100vh - ${cartItemsOffsetTop}px - ${footerHeight}px - ${cartItemsPaddingTop})`);
      this.scrollHandlerAdded = true;
    });
    _defineProperty(this, "getCartItemByKey", key => {
      const {
        items
      } = this.cart;
      if (Array.isArray(items)) {
        const item = items.find(_ref => {
          let {
            key: _key
          } = _ref;
          return _key === key;
        });
        if (item) return item;
      }
    });
    _defineProperty(this, "getCart", () => {
      return fetchJSON(this.rootUrl + 'cart.json');
    });
    _defineProperty(this, "changeCart", lineItem => {
      return fetchJSON(MinimogSettings.routes.cart_change_url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': `application/json`
        },
        method: 'POST',
        body: JSON.stringify(lineItem)
      });
    });
    _defineProperty(this, "updateCart", data => {
      return fetchJSON(MinimogSettings.routes.cart_update_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': `application/json`
        },
        body: JSON.stringify(data)
      });
    });
    _defineProperty(this, "changeItemQty", async lineItem => {
      const {
        not_enough_item_message,
        sold_out_items_message
      } = MinimogStrings;
      try {
        const {
          id: key,
          quantity
        } = lineItem;
        this.loading.start();
        const newCart = await this.changeCart(lineItem);
        this.cart = newCart;
        const cartHTML = await this.fetchCartSection();
        this.loading.finish(() => {
          this.renderNewCart(cartHTML);
          window.Shopify.onCartUpdate(newCart, false);
          const newItem = newCart.items.find(_ref2 => {
            let {
              key: _key
            } = _ref2;
            return _key === key;
          });
          if (quantity > (newItem === null || newItem === void 0 ? void 0 : newItem.quantity)) {
            const {
              product_id
            } = newItem;
            const lineItems = newCart.items.filter(_ref3 => {
              let {
                product_id: pId
              } = _ref3;
              return pId === product_id;
            });
            if (lineItems.length === 1) {
              const lineItemNode = this.getLineItemNode(lineItem);
              MinimogTheme.Notification.show({
                target: lineItemNode,
                type: 'warning',
                message: not_enough_item_message.replace('__inventory_quantity__', newItem.quantity)
              });
            }
          }
        });
      } catch (err) {
        this.loading.finish();
        if ((err === null || err === void 0 ? void 0 : err.status) === 422) {
          const lineItemNode = this.getLineItemNode(lineItem);
          if (lineItemNode) {
            MinimogTheme.Notification.show({
              target: lineItemNode,
              type: 'warning',
              message: sold_out_items_message
            });
          }
        }
        console.warn("Failed to change item quantity: ", err);
      }
    });
    _defineProperty(this, "getLineItemNode", lineItem => {
      const {
        cartDrawerItems
      } = this.domNodes;
      let lineItemNode = cartDrawerItems.querySelector(`.scd-item[data-id="${lineItem.id}"]`);
      if (!lineItemNode) {
        lineItemNode = cartDrawerItems.querySelector(`.scd-item[data-index="${lineItem.line}"]`);
      }
      return lineItemNode;
    });
    _defineProperty(this, "renderNewCart", async cartHTML => {
      if (!cartHTML) {
        cartHTML = await this.fetchCartSection();
      }
      const newCartBody = cartHTML.querySelector('.scd__body');
      const newCartSummary = cartHTML.querySelector('.scd__summary');
      const currentCartBody = this.domNodes.cartDrawer.querySelector('.scd__body');
      const currentCartSummary = this.domNodes.cartDrawer.querySelector('.scd__summary');
      currentCartBody.replaceWith(newCartBody);
      currentCartSummary.replaceWith(newCartSummary);
      this.domNodes = queryDomNodes(this.selectors);
    });
    _defineProperty(this, "refreshCart", async () => {
      this.cart = await this.getCart();
    });
    _defineProperty(this, "updateCartCount", cart => {
      if (Number(cart.item_count) < 1) {
        var _this$container, _this$container$class;
        (_this$container = this.container) === null || _this$container === void 0 ? void 0 : (_this$container$class = _this$container.classList) === null || _this$container$class === void 0 ? void 0 : _this$container$class.remove('cart-has-items');
        if (this.countdownTimer) {
          this.countdownTimer.clear();
          this.countdownTimerStarted = false;
        }
        document.body.classList.add('cart-empty');
      } else {
        var _this$container2, _this$container2$clas;
        (_this$container2 = this.container) === null || _this$container2 === void 0 ? void 0 : (_this$container2$clas = _this$container2.classList) === null || _this$container2$clas === void 0 ? void 0 : _this$container2$clas.add('cart-has-items');
        document.body.classList.remove('cart-empty');
        if (!this.countdownTimerStarted && this.countdownTimer) {
          this.countdownTimer.start();
          this.countdownTimerStarted = true;
        }
      }
      [...this.domNodes.cartCounts].forEach(cartCount => {
        cartCount.textContent = cart.item_count;
      });
    });
    _defineProperty(this, "updateCartNote", () => {
      this.updateCart({
        note: this.domNodes.cartNote.value
      });
    });
    _defineProperty(this, "openCartDrawer", e => {
      var _e$preventDefault;
      if (this.isCartPage || !this.enableCartDrawer) return;
      e === null || e === void 0 ? void 0 : (_e$preventDefault = e.preventDefault) === null || _e$preventDefault === void 0 ? void 0 : _e$preventDefault.call(e);
      const {
        cartDrawer,
        cartDrawerContent
      } = this.domNodes;
      if (cartDrawer && cartDrawerContent) {
        if (window.innerWidth < 770) {
          document.documentElement.classList.add('prevent-scroll');
          cartDrawer.classList.add('mobile');
        }
        cartDrawer.classList.remove('hidden');
        requestAnimationFrame(() => {
          cartDrawer.style.setProperty('--tw-bg-opacity', '0.5');
          cartDrawerContent.classList.remove('translate-x-full');
          !this.scrollHandlerAdded && this.addScrollHandler();
        });
        MinimogEvents.emit('ON_OPEN_DRAWER_CART', this.cart);
      }
    });
    _defineProperty(this, "closeCartDrawer", () => {
      const {
        cartDrawer,
        cartDrawerContent
      } = this.domNodes;
      if (cartDrawer && cartDrawerContent) {
        var _cartDrawer$style;
        cartDrawer === null || cartDrawer === void 0 ? void 0 : (_cartDrawer$style = cartDrawer.style) === null || _cartDrawer$style === void 0 ? void 0 : _cartDrawer$style.setProperty('--tw-bg-opacity', '0');
        cartDrawerContent === null || cartDrawerContent === void 0 ? void 0 : cartDrawerContent.classList.add('translate-x-full');
        setTimeout(() => {
          var _cartDrawer$classList, _cartDrawer$classList2;
          cartDrawer === null || cartDrawer === void 0 ? void 0 : (_cartDrawer$classList = cartDrawer.classList) === null || _cartDrawer$classList === void 0 ? void 0 : _cartDrawer$classList.add('hidden');
          cartDrawer === null || cartDrawer === void 0 ? void 0 : (_cartDrawer$classList2 = cartDrawer.classList) === null || _cartDrawer$classList2 === void 0 ? void 0 : _cartDrawer$classList2.remove('mobile');
          document.documentElement.classList.remove('prevent-scroll');
          this.closeAddon();
        }, 300);
      }
    });
    _defineProperty(this, "initCartAddons", () => {
      addEventDelegate({
        selector: '.scd__footer-actions button',
        handler: (e, addonButton) => {
          e.preventDefault();
          if (this.isCartPage) {
            var _document$querySelect, _document$querySelect2;
            (_document$querySelect = document.querySelector('.scd__addon.open')) === null || _document$querySelect === void 0 ? void 0 : (_document$querySelect2 = _document$querySelect.classList) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.remove('open');
          }
          const {
            cartDrawer,
            overlay,
            addressForm,
            cartDiscountCodeNoti
          } = this.domNodes;
          const {
            open: addonTarget
          } = addonButton.dataset;
          const addonNode = cartDrawer.querySelector(`#scd-${addonTarget}`);
          addonButton.classList.add('active');
          addonNode === null || addonNode === void 0 ? void 0 : addonNode.classList.add('open');
          overlay === null || overlay === void 0 ? void 0 : overlay.classList.add('open');
          this.openAddon = addonNode;
          if (addonTarget === 'shipping') {
            AddressForm(addressForm, window.Shopify.locale);
          }
          if (addonTarget === 'coupon' && cartDiscountCodeNoti) {
            cartDiscountCodeNoti.style.display = 'none';
          }
        }
      });
      addEventDelegate({
        selector: '.btn-cancel',
        context: this.domNodes.cartDrawer,
        handler: this.closeAddon
      });
      addEventDelegate({
        selector: '.btn-calc',
        context: this.domNodes.cartDrawer,
        handler: this.calculateShipping
      });
      const {
        cartDiscountCode,
        cartDiscountCodeNoti
      } = this.domNodes;
      if (cartDiscountCode) {
        const code = localStorage.getItem(this.discountCodeKey);
        if (code) {
          cartDiscountCode.value = code;
          if (cartDiscountCodeNoti) {
            cartDiscountCodeNoti.style.display = 'inline';
          }
        }
      }
      this.saveAddonValue();
    });
    _defineProperty(this, "closeAddon", e => {
      var _e$preventDefault2, _this$openAddon, _this$domNodes$overla;
      e === null || e === void 0 ? void 0 : (_e$preventDefault2 = e.preventDefault) === null || _e$preventDefault2 === void 0 ? void 0 : _e$preventDefault2.call(e);
      (_this$openAddon = this.openAddon) === null || _this$openAddon === void 0 ? void 0 : _this$openAddon.classList.remove('open');
      (_this$domNodes$overla = this.domNodes.overlay) === null || _this$domNodes$overla === void 0 ? void 0 : _this$domNodes$overla.classList.remove('open');
      this.openAddon = null;
    });
    _defineProperty(this, "calculateShipping", e => {
      var _this$domNodes$zipCod;
      e.preventDefault();
      const actionsWrapper = e.target.closest('.scd__addon-actions');
      actionsWrapper.classList.add('shipping-calculating');
      const zipCode = (_this$domNodes$zipCod = this.domNodes.zipCode.value) === null || _this$domNodes$zipCod === void 0 ? void 0 : _this$domNodes$zipCod.trim();
      const country = this.domNodes.country.value;
      const province = this.domNodes.province.value;
      this.domNodes.shippingContent.classList.remove('error');
      this.domNodes.shippingContent.innerHTML = '';
      const showDeliveryDays = actionsWrapper.dataset.showDeliveryDays === 'true';
      fetch(`${this.rootUrl}cart/shipping_rates.json?shipping_address%5Bzip%5D=${zipCode}&shipping_address%5Bcountry%5D=${country}&shipping_address%5Bprovince%5D=${province}`).then(res => res.json()).then(res => {
        if (res && res.shipping_rates) {
          const {
            shipping_rates
          } = res;
          const {
            shippingRatesResult,
            noShippingRate
          } = MinimogStrings;
          if (shipping_rates.length > 0) {
            actionsWrapper.classList.remove('shipping-calculating');
            this.domNodes.shippingContent.appendChild(createElement("p", {
              className: "mb-3 text-base"
            }, shippingRatesResult.replace('{{count}}', shipping_rates.length), ":"));
            shipping_rates.map(rate => {
              const {
                deliveryOne = 'Day',
                deliveryOther = 'Days'
              } = actionsWrapper.dataset;
              let deliveryDays = '';
              if (rate.delivery_days.length > 0 && showDeliveryDays) {
                let textDay = deliveryOne;
                const firstDeliveryDay = rate.delivery_days[0];
                const lastDeliveryDay = rate.delivery_days.at(-1);
                if (firstDeliveryDay > 1) textDay = deliveryOther;
                if (firstDeliveryDay === lastDeliveryDay) {
                  deliveryDays = `(${firstDeliveryDay} ${textDay})`;
                } else {
                  deliveryDays = `(${firstDeliveryDay} - ${lastDeliveryDay} ${textDay})`;
                }
              }
              const rateNode = createElement("span", null);
              rateNode.innerHTML = formatMoney(rate.price, MinimogSettings.money_format);
              this.domNodes.shippingContent.appendChild(createElement("p", null, rate.name, ": ", rateNode, " ", deliveryDays));
            });
          } else {
            actionsWrapper.classList.remove('shipping-calculating');
            this.domNodes.shippingContent.innerHTML = `<p>${noShippingRate}</p>`;
          }
        } else {
          actionsWrapper.classList.remove('shipping-calculating');
          Object.entries(res).map(error => {
            var _error$;
            this.domNodes.shippingContent.classList.add((_error$ = error[0]) === null || _error$ === void 0 ? void 0 : _error$.toLowerCase());
            console.log(error, 'error');
            const message = `${error[1][0]}`;
            this.domNodes.shippingContent.appendChild(createElement("p", null, message));
          });
        }
      }).catch(console.error);
    });
    _defineProperty(this, "saveAddonValue", () => {
      addEventDelegate({
        event: 'click',
        context: this.domNodes.cartDrawer,
        selector: '.btn-save',
        handler: (e, target) => {
          e.preventDefault();
          if ((target === null || target === void 0 ? void 0 : target.dataset.action) === 'coupon' && this.domNodes.cartDiscountCode) {
            const code = this.domNodes.cartDiscountCode.value;
            localStorage.setItem(this.discountCodeKey, code);
            const {
              cartDiscountCodeNoti
            } = this.domNodes;
            if (code !== '' && cartDiscountCodeNoti) {
              cartDiscountCodeNoti.style.display = 'inline';
            }
          }
          if ((target === null || target === void 0 ? void 0 : target.dataset.action) === 'note') {
            this.updateCartNote();
          }
          this.closeAddon();
        }
      });
    });
    this.getCart().then(cart => {
      this.cart = cart;
      if (this.isCartPage) {
        this.init();
      } else {
        this.fetchCartSection().then(drawer => {
          const cartDrawerContainer = document.querySelector('#cart-drawer-container');
          cartDrawerContainer.appendChild(drawer);
          this.init();
        }).catch(console.error);
      }
    }).catch(console.error);
  }
  init() {
    var _MinimogEvents$subscr, _MinimogEvents;
    this.container = this.isCartPage ? document.documentElement : document.querySelector('section.sf-header');
    this.domNodes = queryDomNodes(this.selectors);
    const loadingTarget = this.domNodes.cartDrawerContent || document.body;
    this.loading = new (main_default())(loadingTarget, {
      overlay: loadingTarget
    });
    if (this.enableCartDrawer && !this.isCartPage) {
      addEventDelegate({
        selector: this.selectors.cartIcon,
        handler: this.openCartDrawer
      });
      addEventDelegate({
        selector: this.selectors.cartDrawerClose,
        handler: this.closeCartDrawer
      });
      addEventDelegate({
        selector: this.selectors.cartDrawer,
        handler: e => {
          if (e.target === this.domNodes.cartDrawer) {
            this.closeCartDrawer();
          }
        }
      });
    }
    addEventDelegate({
      context: this.domNodes.cartDrawer,
      selector: this.cartItemSelectors.btn,
      handler: (e, btn) => {
        e.preventDefault();
        const {
          qtyChange,
          id
        } = btn.dataset;
        const item = this.getCartItemByKey(id);
        if (item) {
          let {
            quantity
          } = item;
          quantity += qtyChange === 'dec' ? -1 : +1;
          this.changeItemQty({
            id,
            quantity
          });
        } else {
          console.warn(`Cart item to change quantity not found. Key: ${id}`);
        }
      }
    });
    addEventDelegate({
      context: this.domNodes.cartDrawer,
      event: 'change',
      selector: this.cartItemSelectors.qtyInput,
      handler: (e, input) => {
        e.preventDefault();
        const {
          id
        } = input.dataset;
        const quantity = Number(input.value);
        this.changeItemQty({
          id,
          quantity
        });
      }
    });
    addEventDelegate({
      context: this.domNodes.cartDrawer,
      selector: this.cartItemSelectors.remove,
      handler: (e, removeBtn) => {
        e.preventDefault();
        const {
          id
        } = removeBtn.dataset;
        const item = this.getCartItemByKey(id);
        if (item) {
          const index = this.cart.items.indexOf(item);
          this.changeItemQty({
            line: index + 1,
            quantity: 0
          });
        } else {
          console.warn(`Cart item to remove not found. Key: ${id}`);
        }
      }
    });
    addEventDelegate({
      selector: this.selectors.checkoutButton,
      handler: (e, button) => {
        button.classList.add('sf-spinner-loading');
      }
    });
    this.initCartCountDown();
    this.initCartAddons();
    (_MinimogEvents$subscr = (_MinimogEvents = MinimogEvents).subscribe) === null || _MinimogEvents$subscr === void 0 ? void 0 : _MinimogEvents$subscr.call(_MinimogEvents, 'ON_CART_UPDATE', cart => {
      this.cart = cart;
      this.updateCartCount(cart);
    });
  }
}
MinimogTheme.Cart = new Cart();
;// CONCATENATED MODULE: ./src/js/components/Notification.jsx
/* provided dependency */ var Notification_createElement = __webpack_require__(6295)["Z"];
/* harmony default export */ function components_Notification(_ref) {
  let {
    type,
    message,
    onclick,
    sticky
  } = _ref;
  let icon;
  if (type === 'warning') {
    icon = Notification_createElement("svg", {
      class: "w-6 h-6",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, Notification_createElement("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }));
  } else if (type === 'success') {
    icon = Notification_createElement("svg", {
      class: "w-6 h-6",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, Notification_createElement("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }));
  }
  return Notification_createElement("div", {
    className: `notification ${type} ${sticky ? 'notification--sticky' : null}`,
    onclick: onclick
  }, icon, Notification_createElement("div", {
    className: "ml-3"
  }, message));
}
;// CONCATENATED MODULE: ./src/js/modules/notification.js
/* provided dependency */ var notification_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var notification_MinimogTheme = __webpack_require__(4558)["LE"];

// eslint-disable-next-line no-unused-vars

class Notification {
  constructor() {
    _defineProperty(this, "noti", null);
    _defineProperty(this, "removeTimeoutId", null);
    _defineProperty(this, "hideTimeoutId", null);
    _defineProperty(this, "transitionDuration", 300);
    _defineProperty(this, "show", _ref => {
      let {
        target,
        type,
        message,
        method = 'after',
        last = 3000,
        delay = 0,
        debug = false,
        sticky = false
      } = _ref;
      this.clearTimeout();
      this.removeNoti();
      setTimeout(() => {
        this.noti = notification_createElement(components_Notification, {
          type: type,
          message: message,
          onclick: this.handleClick,
          sticky: sticky
        });
        target === null || target === void 0 ? void 0 : target[method](this.noti);
        requestAnimationFrame(() => this.noti.classList.add('show'));
        if (!debug) {
          this.hideTimeoutId = setTimeout(() => {
            this.noti.classList.add('hide');
            this.removeTimeoutId = setTimeout(this.removeNoti, this.transitionDuration * 2);
          }, last);
        }
      }, delay);
    });
    _defineProperty(this, "handleClick", () => {
      clearTimeout(this.removeTimeoutId);
      this.noti.classList.add('hide');
      setTimeout(this.removeNoti, this.transitionDuration * 2);
    });
    _defineProperty(this, "clearTimeout", () => {
      clearTimeout(this.removeTimeoutId);
      clearTimeout(this.hideTimeoutId);
    });
    _defineProperty(this, "removeNoti", () => {
      var _this$noti;
      this === null || this === void 0 ? void 0 : (_this$noti = this.noti) === null || _this$noti === void 0 ? void 0 : _this$noti.remove();
    });
  }
}
notification_MinimogTheme.Notification = new Notification();
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
;// CONCATENATED MODULE: ./src/js/components/InstagramImage.jsx
/* provided dependency */ var InstagramImage_createElement = __webpack_require__(6295)["Z"];
// eslint-disable-next-line no-unused-vars

/* harmony default export */ function InstagramImage(_ref) {
  let {
    image
  } = _ref;
  return InstagramImage_createElement("div", {
    className: "sf-column"
  }, InstagramImage_createElement("a", {
    href: image.permalink,
    target: "_blank",
    className: "sf__insta-item block relative"
  }, InstagramImage_createElement("div", {
    className: "sf__insta-content absolute z-10 inset-0 flex items-center justify-center"
  }, InstagramImage_createElement("div", {
    class: "sf__insta-icon"
  }, InstagramImage_createElement("svg", {
    className: "w-10 h-10",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, InstagramImage_createElement("path", {
    fill: "currentColor",
    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
  })))), InstagramImage_createElement("div", {
    className: "sf__insta-image",
    style: {
      "--aspect-ratio": "1/1"
    }
  }, InstagramImage_createElement(LazyImage, {
    src: image.media_url,
    alt: `instagram-image-${image.username}-${image.id}`
  })), InstagramImage_createElement("div", {
    className: "sf__item-bg"
  })));
}
;// CONCATENATED MODULE: ./src/js/modules/instagram.js
/* provided dependency */ var instagram_createElement = __webpack_require__(6295)["Z"];

// eslint-disable-next-line no-unused-vars

class Instagram {
  constructor(container, accessToken) {
    let imagesCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
    _defineProperty(this, "mediaAPI", 'https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username');
    this.container = container;
    this.imagesContainer = container.querySelector('.instagram-images');
    this.accessToken = accessToken;
    this.imagesCount = imagesCount;
    if (window.__sfWindowLoaded) this.init().catch(console.error);else window.addEventListener("load", () => this.init().catch(console.error));
  }
  async init() {
    const media = await fetchJsonCache(`${this.mediaAPI}&access_token=${this.accessToken}`, {
      cache: 'force-cache'
    });
    if (!media) return;
    if (media.error) {
      var _media$error;
      return console.error('Instagram error: ', (_media$error = media.error) === null || _media$error === void 0 ? void 0 : _media$error.message);
    }
    media.data.filter(d => d.media_type === 'IMAGE' || d.media_type === 'CAROUSEL_ALBUM')
    // .reverse()
    .slice(0, this.imagesCount).forEach(image => {
      console.log(image, 'img insta');
      const imgNode = instagram_createElement(InstagramImage, {
        image: image
      });
      this.imagesContainer.appendChild(imgNode);
    });
  }
}
window.MinimogTheme.Instagram = Instagram;
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
// EXTERNAL MODULE: ./src/js/utilities/index.js
var utilities = __webpack_require__(2870);
;// CONCATENATED MODULE: ./src/js/utilities/product-fns.js
/* provided dependency */ var product_fns_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var product_fns_MinimogTheme = __webpack_require__(4558)["LE"];

const themeProducts = window._themeProducts || {};
const fetchProductByHandle = async handle => {
  const url = (0,utilities/* formatUrl */.CN)('products', handle + '.js');
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
    _defineProperty(this, "mediaMode", '');
    _defineProperty(this, "view", '');
    _defineProperty(this, "selectors", {
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
    _defineProperty(this, "currPlayer", void 0);
    _defineProperty(this, "mobileSlider", null);
    _defineProperty(this, "enableVideoAutoplay", false);
    _defineProperty(this, "enableImageZoom", true);
    _defineProperty(this, "init", async () => {
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
    _defineProperty(this, "initPlyrs", () => {
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
    _defineProperty(this, "initLightbox", () => {
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
            const href = (0,utilities/* getVideoURL */.fY)(media.external_id, media.host);
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
    _defineProperty(this, "initSlider", async () => {
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
    _defineProperty(this, "initMobileSlider", () => {
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
    _defineProperty(this, "handleSlideChange", () => {
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
    _defineProperty(this, "changeMediaByVariant", variant => {
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
    _defineProperty(this, "addEventToMainMedias", () => {
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
;// CONCATENATED MODULE: ./src/js/modules/product.js
/* provided dependency */ var product_MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var product_MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var product_MinimogStrings = __webpack_require__(4558)["rZ"];
/* provided dependency */ var product_MinimogEvents = __webpack_require__(4558)["s0"];








class Product {
  constructor(productForm) {
    var _productForm$classLis, _MinimogTheme$Product, _MinimogTheme$Product2;
    let _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _defineProperty(this, "selectors", {
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
    _defineProperty(this, "setData", () => {
      this.view = this.productBlock.dataset.view || 'product-template'; // 'sticky-atc' | 'card' | 'quick-view' | 'mobile' | 'product-template'
      this.hasCustomRequiredFields = !!this.productForm.querySelector('.product__custom-field [name][required]');
      this.hide_unavailable_product_options = product_MinimogSettings.hide_unavailable_product_options;
      this.activeOptionNodeByPosition = {};
      this.listeners = [];
    });
    _defineProperty(this, "init", async () => {
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
    _defineProperty(this, "initProductVariant", () => {
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
    _defineProperty(this, "initOptions", () => {
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
    _defineProperty(this, "initProductEvents", async () => {
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
          const missing = (0,utilities/* productFormCheck */.sR)(this.productForm);
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
    _defineProperty(this, "unsubscribeEvents", () => {
      this.listeners.forEach(unsubscribeFunc => unsubscribeFunc());
    });
    _defineProperty(this, "handleQtyInputChange", e => {
      product_MinimogEvents.emit(`${this.productData.id}__QUANTITY_CHANGE`, Number(e.target.value), this);
    });
    _defineProperty(this, "handleQtyBtnClick", (e, btn) => {
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
      product_MinimogEvents.emit(`${this.productData.id}__QUANTITY_CHANGE`, newQty, this);
    });
    _defineProperty(this, "getVariantFromActiveOptions", () => {
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
    _defineProperty(this, "handleSelectVariant", e => {
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
    _defineProperty(this, "hideSoldoutAndUnavailableOptions", variant => {
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
    _defineProperty(this, "updatePriceByVariant", variant => {
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
    _defineProperty(this, "_getBaseUnit", variant => {
      return variant.unit_price_measurement.reference_value === 1 ? variant.unit_price_measurement.reference_unit : variant.unit_price_measurement.reference_value + variant.unit_price_measurement.reference_unit;
    });
    _defineProperty(this, "updateStockCountdownByVariant", variant => {
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
    _defineProperty(this, "updateSkuByVariant", variant => {
      var _this$domNodes;
      if (variant.sku && (_this$domNodes = this.domNodes) !== null && _this$domNodes !== void 0 && _this$domNodes.productSKU) {
        this.domNodes.productSKU.innerText = variant.sku;
      }
    });
    _defineProperty(this, "updateAvailabilityByVariant", variant => {
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
    _defineProperty(this, "updateOptionLabel", (position, value) => {
      var _this$domNodes$option, _this$domNodes$option2;
      const label = (_this$domNodes$option = this.domNodes.optionLabels) === null || _this$domNodes$option === void 0 ? void 0 : (_this$domNodes$option2 = _this$domNodes$option.find) === null || _this$domNodes$option2 === void 0 ? void 0 : _this$domNodes$option2.call(_this$domNodes$option, label => Number(label.dataset.labelPosition) === Number(position));
      if (label) label.textContent = value;
    });
    _defineProperty(this, "toggleOptionNodeActive", (optNode, active) => {
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
    _defineProperty(this, "updateBySelectedVariant", variant => {
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
      product_MinimogEvents.emit(`${this.productData.id}__VARIANT_CHANGE`, variant, this);
      // window?.DoublyGlobalCurrency?.convertAll?.($?.('[name=doubly-currencies]')?.val?.());
    });
    _defineProperty(this, "updateProductCardSoldOutBadge", variant => {
      if (this.view === "card" && this.domNodes.soldOutBadge) {
        this.domNodes.soldOutBadge.style.display = variant.available ? 'none' : 'flex';
      }
    });
    _defineProperty(this, "updateOptionByVariant", variant => {
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
    _defineProperty(this, "updateATCButtonByVariant", variant => {
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
    _defineProperty(this, "updateBrowserHistory", variant => {
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
    _defineProperty(this, "changeProductImage", variant => {
      var _this$productHelper;
      (_this$productHelper = this.productHelper) === null || _this$productHelper === void 0 ? void 0 : _this$productHelper.changeMediaByVariant(variant);
    });
    _defineProperty(this, "handleAddToCart", async e => {
      const missing = (0,utilities/* productFormCheck */.sR)(this.productForm);
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
    _defineProperty(this, "cartAddFromForm", formData => {
      const config = getRequestDefaultConfigs();
      delete config.headers['Content-Type'];
      config.method = 'POST';
      config.body = formData;
      return fetch('/cart/add.js', config);
    });
    _defineProperty(this, "toggleSpinner", show => {
      const method = show ? 'add' : 'remove';
      this.productForm.classList[method]('adding');
    });
    _defineProperty(this, "serializeForm", formData => {
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
    _defineProperty(this, "productInstances", []);
    _defineProperty(this, "initProductForms", async function () {
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
;// CONCATENATED MODULE: ./src/js/pages/compare-product.js
/* provided dependency */ var compare_product_MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var compare_product_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var compare_product_MinimogTheme = __webpack_require__(4558)["LE"];


class CompareProduct {
  constructor() {
    _defineProperty(this, "storageKey", 'sf__compare-products');
    _defineProperty(this, "products", []);
    _defineProperty(this, "productNodes", {});
    _defineProperty(this, "pageTemplate", 'page.product-compare');
    _defineProperty(this, "addedClass", 'added-to-compare');
    _defineProperty(this, "selectors", {
      container: '.sf-prod-compare__container',
      noProducts: '.sf-prod-compare__no_products',
      wrapper: '.sf-prod-compare__wrapper',
      item: '.sf-prod-compare',
      compareButton: '.sf-prod-compare__button',
      compareText: '.sf-prod-compare__button-content',
      removeButton: '.sf-prod-compare__remove'
    });
    _defineProperty(this, "init", () => {
      if (compare_product_MinimogSettings.template === this.pageTemplate) {
        this.renderComparePage();
        this.addEventToRemoveButtons();
      } else {
        this.setCompareButtonsState();
        this.addEventToCompareButtons();
      }
    });
    _defineProperty(this, "saveToStorage", () => {
      this.products = Array.from(new Set(this.products));
      localStorage.setItem(this.storageKey, JSON.stringify(this.products));
    });
    _defineProperty(this, "setCompareButtonsState", () => {
      const buttons = document.querySelectorAll(this.selectors.compareButton);
      buttons.forEach(btn => {
        var _btn$dataset, _btn$classList;
        const prodHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset = btn.dataset) === null || _btn$dataset === void 0 ? void 0 : _btn$dataset.productHandle;
        if (this.products.indexOf(prodHandle) >= 0 && !(btn !== null && btn !== void 0 && (_btn$classList = btn.classList) !== null && _btn$classList !== void 0 && _btn$classList.contains(this.addedClass))) {
          this.toggleButtonState(btn, true);
        }
      });
    });
    _defineProperty(this, "addEventToCompareButtons", () => {
      addEventDelegate({
        selector: this.selectors.compareButton,
        handler: (e, btn) => {
          var _btn$dataset2;
          e.preventDefault();
          const productHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset2 = btn.dataset) === null || _btn$dataset2 === void 0 ? void 0 : _btn$dataset2.productHandle;
          if (productHandle) {
            const active = !btn.classList.contains(this.addedClass);
            this.toggleButtonState(btn, active);
            document.querySelectorAll(this.selectors.compareButton).forEach(btnItem => {
              var _btnItem$dataset;
              if ((btnItem === null || btnItem === void 0 ? void 0 : (_btnItem$dataset = btnItem.dataset) === null || _btnItem$dataset === void 0 ? void 0 : _btnItem$dataset.productHandle) === productHandle && btnItem !== btn) {
                var _btnItem$classList;
                const isAdded = !(btnItem !== null && btnItem !== void 0 && (_btnItem$classList = btnItem.classList) !== null && _btnItem$classList !== void 0 && _btnItem$classList.contains(this.addedClass));
                this.toggleButtonState(btnItem, isAdded);
              }
            });
          }
        }
      });
    });
    _defineProperty(this, "toggleButtonState", (btn, active) => {
      var _btn$dataset3;
      const productHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset3 = btn.dataset) === null || _btn$dataset3 === void 0 ? void 0 : _btn$dataset3.productHandle;
      const compareText = btn.querySelector(this.selectors.compareText);
      if (active) {
        this.addToCompare(productHandle);
        btn.classList.add(this.addedClass);
      } else {
        this.removeFromCompare(productHandle);
        btn.classList.remove(this.addedClass);
      }
      if (compareText) {
        var _compareText$dataset;
        const temp = compareText === null || compareText === void 0 ? void 0 : (_compareText$dataset = compareText.dataset) === null || _compareText$dataset === void 0 ? void 0 : _compareText$dataset.revertText;
        compareText.dataset.revertText = compareText.textContent;
        compareText.textContent = temp;
      }
    });
    _defineProperty(this, "addEventToRemoveButtons", () => {
      addEventDelegate({
        selector: this.selectors.removeButton,
        handler: (e, btn) => {
          var _btn$dataset4;
          e.preventDefault();
          const prod = btn === null || btn === void 0 ? void 0 : btn.closest(this.selectors.wrapper);
          prod === null || prod === void 0 ? void 0 : prod.remove();
          const productHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset4 = btn.dataset) === null || _btn$dataset4 === void 0 ? void 0 : _btn$dataset4.productHandle;
          if (productHandle) {
            this.removeFromCompare(productHandle);
            if (!this.products.length) {
              this.showNoProductsMessage();
            }
          }
        }
      });
    });
    _defineProperty(this, "renderComparePage", async () => {
      const container = document.querySelector(this.selectors.container);
      if (container) {
        let noItemAvailable = true;
        if (this.products.length) {
          const promises = this.products.map(async hdl => {
            const prodHTML = await fetchCache(`/products/${hdl}?view=compare`);
            const item = compare_product_createElement("div", {
              className: `hidden ${this.selectors.wrapper.replace('.', '')}`
            });
            item.innerHTML = prodHTML;
            if (item.querySelector(this.selectors.item)) {
              noItemAvailable = false;
              this.productNodes[hdl] = item;
            }
          });
          await Promise.all(promises);

          // Render in order
          this.products.forEach(hdl => {
            const prodNode = this.productNodes[hdl];
            if (prodNode) {
              container.appendChild(prodNode);
              prodNode.classList.remove('hidden');
            }
          });
          const productForm = new Products();
          productForm.initProductForms().catch(console.error);
        }
        if (noItemAvailable) {
          this.showNoProductsMessage();
        }
        container.classList.add('opacity-100');
      }
    });
    _defineProperty(this, "showNoProductsMessage", () => {
      const container = document.querySelector(this.selectors.container);
      const noProducts = document.querySelector(this.selectors.noProducts);
      container.classList.add('hidden');
      noProducts.classList.remove('hidden');
    });
    this.products = Array.from(new Set(Array.from(JSON.parse(localStorage.getItem(this.storageKey)) || [])));
    this.init();
  }
  addToCompare(handle) {
    if (handle && this.products.indexOf(handle) === -1) {
      this.products.push(handle);
      this.saveToStorage();
    }
  }
  removeFromCompare(handle) {
    this.products = this.products.filter(hdl => hdl !== handle);
    this.saveToStorage();
  }
}
compare_product_MinimogTheme.CompareProduct = new CompareProduct();
;// CONCATENATED MODULE: ./src/js/components/WishlistRemoveButton.jsx
/* provided dependency */ var WishlistRemoveButton_createElement = __webpack_require__(6295)["Z"];
/* harmony default export */ function WishlistRemoveButton(_ref) {
  let {
    productHandle
  } = _ref;
  return WishlistRemoveButton_createElement("div", {
    className: "block md:hidden absolute z-10 right-5 top-5"
  }, WishlistRemoveButton_createElement("div", {
    className: "sf__tooltip-item sf-wishlist__remove",
    dataSet: {
      productHandle
    }
  }, WishlistRemoveButton_createElement("svg", {
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, WishlistRemoveButton_createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  }))));
}
;// CONCATENATED MODULE: ./src/js/pages/wishlist.js
/* provided dependency */ var wishlist_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var wishlist_MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var wishlist_MinimogTheme = __webpack_require__(4558)["LE"];

// eslint-disable-next-line no-unused-vars


class Wishlist {
  constructor() {
    _defineProperty(this, "isWishlistPage", false);
    _defineProperty(this, "storageKey", 'sf__wishlist-products');
    _defineProperty(this, "products", []);
    _defineProperty(this, "productNodes", {});
    _defineProperty(this, "pageTemplate", 'page.wishlist');
    _defineProperty(this, "addedClass", 'added-to-wishlist');
    _defineProperty(this, "hasItemClass", 'wishlist-has-item');
    _defineProperty(this, "selectors", {
      container: '.sf-wishlist__container',
      noProducts: '.sf-wishlist__no_products',
      wrapper: '.sf-wishlist__wrapper',
      productCard: '.sf__pcard',
      wishlistButton: '.sf-wishlist__button',
      wishlistText: '.sf-wishlist__button-content',
      removeButton: '.sf-wishlist__remove',
      count: '.sf-wishlist-count'
    });
    _defineProperty(this, "init", async () => {
      if (this.isWishlistPage) {
        await this.renderWishlistPage();
        this.addEventToRemoveButtons();
      }
      this.setWishlistButtonsState();
      this.addEventToWishlistButtons();
      this.updateWishlistCount();
    });
    _defineProperty(this, "saveToStorage", () => {
      this.products = Array.from(new Set(this.products));
      localStorage.setItem(this.storageKey, JSON.stringify(this.products));
    });
    _defineProperty(this, "setWishlistButtonsState", () => {
      const buttons = document.querySelectorAll(this.selectors.wishlistButton);
      buttons.forEach(btn => {
        var _btn$dataset, _btn$classList;
        const prodHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset = btn.dataset) === null || _btn$dataset === void 0 ? void 0 : _btn$dataset.productHandle;
        if (this.products.indexOf(prodHandle) >= 0 && !(btn !== null && btn !== void 0 && (_btn$classList = btn.classList) !== null && _btn$classList !== void 0 && _btn$classList.contains(this.addedClass))) {
          this.toggleButtonState(btn, true);
          if (this.isWishlistPage) {
            btn.classList.remove(this.selectors.wishlistButton.replace('.', ''));
            btn.classList.add(this.selectors.removeButton.replace('.', ''));
          }
        }
      });
    });
    _defineProperty(this, "updateWishlistCount", () => {
      const size = this.products.length;
      const countElems = document.querySelectorAll(this.selectors.count);
      [...countElems].forEach(elem => {
        elem.textContent = size;
        if (size < 1) {
          elem.style.setProperty('display', 'none');
        } else {
          elem.style.removeProperty('display');
        }
      });
      const method = size ? 'add' : 'remove';
      document.body.classList[method](this.hasItemClass);
    });
    _defineProperty(this, "addEventToWishlistButtons", () => {
      addEventDelegate({
        selector: this.selectors.wishlistButton,
        handler: (e, btn) => {
          var _btn$dataset2;
          e.preventDefault();
          const productHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset2 = btn.dataset) === null || _btn$dataset2 === void 0 ? void 0 : _btn$dataset2.productHandle;
          if (productHandle) {
            const active = !btn.classList.contains(this.addedClass);
            this.toggleButtonState(btn, active);
            this.updateWishlistCount();
            document.querySelectorAll(this.selectors.wishlistButton).forEach(btnItem => {
              var _btnItem$dataset;
              if ((btnItem === null || btnItem === void 0 ? void 0 : (_btnItem$dataset = btnItem.dataset) === null || _btnItem$dataset === void 0 ? void 0 : _btnItem$dataset.productHandle) === productHandle && btnItem !== btn) {
                var _btnItem$classList;
                const isAdded = !(btnItem !== null && btnItem !== void 0 && (_btnItem$classList = btnItem.classList) !== null && _btnItem$classList !== void 0 && _btnItem$classList.contains(this.addedClass));
                this.toggleButtonState(btnItem, isAdded);
              }
            });
          }
        }
      });
    });
    _defineProperty(this, "toggleButtonState", (btn, active) => {
      var _btn$dataset3;
      const productHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset3 = btn.dataset) === null || _btn$dataset3 === void 0 ? void 0 : _btn$dataset3.productHandle;
      const wishlistText = btn.querySelector(this.selectors.wishlistText);
      if (active) {
        this.addToWishlist(productHandle);
        btn.classList.add(this.addedClass);
      } else {
        this.removeFromWishlist(productHandle);
        btn.classList.remove(this.addedClass);
      }
      if (wishlistText) {
        var _wishlistText$dataset;
        const temp = wishlistText === null || wishlistText === void 0 ? void 0 : (_wishlistText$dataset = wishlistText.dataset) === null || _wishlistText$dataset === void 0 ? void 0 : _wishlistText$dataset.revertText;
        wishlistText.dataset.revertText = wishlistText.textContent;
        wishlistText.textContent = temp;
      }
    });
    _defineProperty(this, "addEventToRemoveButtons", () => {
      addEventDelegate({
        selector: this.selectors.removeButton,
        handler: (e, btn) => {
          var _btn$dataset4;
          e.preventDefault();
          const prod = btn === null || btn === void 0 ? void 0 : btn.closest(this.selectors.wrapper);
          prod === null || prod === void 0 ? void 0 : prod.remove();
          const productHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset4 = btn.dataset) === null || _btn$dataset4 === void 0 ? void 0 : _btn$dataset4.productHandle;
          if (productHandle) {
            this.removeFromWishlist(productHandle);
            this.updateWishlistCount();
            if (!this.products.length) {
              this.showNoProductsMessage();
            }
          }
        }
      });
    });
    _defineProperty(this, "renderWishlistPage", async () => {
      const container = document.querySelector(this.selectors.container);
      if (container) {
        let noItemAvailable = true;
        if (this.products.length) {
          const promises = this.products.map(async hdl => {
            const url = (0,utilities/* formatUrl */.CN)('products', hdl, 'view=grid-card-item');
            const prodHTML = await fetchCache(url);
            const item = wishlist_createElement("div", {
              className: `hidden relative ${this.selectors.wrapper.replace('.', '')}`
            });
            item.innerHTML = prodHTML;
            if (item.querySelector(this.selectors.productCard)) {
              noItemAvailable = false;
              item.appendChild(wishlist_createElement(WishlistRemoveButton, {
                productHandle: hdl
              }));
              this.productNodes[hdl] = item;
            }
          });
          await Promise.all(promises);

          // Render in order
          this.products.forEach(hdl => {
            const prod = this.productNodes[hdl];
            if (prod) {
              container.appendChild(prod);
              prod.classList.remove('hidden');
            }
          });
        }
        if (noItemAvailable) {
          this.showNoProductsMessage();
        } else {
          this.setWishlistButtonsState();
        }
        container.classList.add('opacity-100');
      }
    });
    _defineProperty(this, "showNoProductsMessage", () => {
      const container = document.querySelector(this.selectors.container);
      const noProducts = document.querySelector(this.selectors.noProducts);
      container.classList.add('hidden');
      noProducts.classList.remove('hidden');
    });
    this.products = Array.from(new Set(Array.from(JSON.parse(localStorage.getItem(this.storageKey)) || [])));
    this.isWishlistPage = wishlist_MinimogSettings.template === this.pageTemplate;
    this.init();
  }
  addToWishlist(handle) {
    if (handle && this.products.indexOf(handle) === -1) {
      this.products.push(handle);
      this.saveToStorage();
    }
  }
  removeFromWishlist(handle) {
    this.products = this.products.filter(hdl => hdl !== handle);
    this.saveToStorage();
  }
}
wishlist_MinimogTheme.Wishlist = new Wishlist();
;// CONCATENATED MODULE: ./src/js/utilities/dom-intersection-observer.js
if (!window.IntersectionObserver) {
  loadJS('https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver');
}
function handleBackgroundImageLazyload() {
  return addIntersectionObserver('sf-bg-lazy');
}
handleBackgroundImageLazyload();
async function addIntersectionObserver(classSelector) {
  let newClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  let lazyImages = [].slice.call(document.getElementsByClassName(classSelector));
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.classList.remove(classSelector);
          newClass && lazyImage.classList.remove(newClass);
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
}
function observeElement(target, callback) {
  let option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let observer = new IntersectionObserver(callback, option);
  observer.observe(target);
}
// EXTERNAL MODULE: ./node_modules/mdn-polyfills/Element.prototype.closest.js
var Element_prototype_closest = __webpack_require__(1339);
// EXTERNAL MODULE: ./node_modules/mdn-polyfills/Node.prototype.replaceWith.js
var Node_prototype_replaceWith = __webpack_require__(1713);
// EXTERNAL MODULE: ./node_modules/mdn-polyfills/Node.prototype.after.js
var Node_prototype_after = __webpack_require__(2297);
// EXTERNAL MODULE: ./node_modules/mdn-polyfills/Node.prototype.prepend.js
var Node_prototype_prepend = __webpack_require__(598);
;// CONCATENATED MODULE: ./src/js/utilities/polyfill.js




// EXTERNAL MODULE: ./src/js/utilities/shopify.js
var shopify = __webpack_require__(5118);
;// CONCATENATED MODULE: ./src/js/modules/boost-sales-helper.js
/* provided dependency */ var boost_sales_helper_MinimogTheme = __webpack_require__(4558)["LE"];

class BoostSales {
  constructor() {
    _defineProperty(this, "selectors", {
      liveViews: ['.prod__live-views'],
      stockCountdowns: ['.prod__stock-countdown']
    });
    _defineProperty(this, "init", () => {
      try {
        this.domNodes = queryDomNodes(this.selectors);
        this.initLiveViews();
        this.initStockCountDown();
      } catch (error) {
        console.error("Failed to init Boost Sales Helper");
      }
    });
    _defineProperty(this, "initLiveViews", () => {
      var _this$domNodes, _this$domNodes$liveVi;
      (_this$domNodes = this.domNodes) === null || _this$domNodes === void 0 ? void 0 : (_this$domNodes$liveVi = _this$domNodes.liveViews) === null || _this$domNodes$liveVi === void 0 ? void 0 : _this$domNodes$liveVi.forEach(liveViews => {
        if (liveViews.dataset.initialized !== "true") {
          const liveViewElem = liveViews.querySelector('.live-views-text');
          const settings = liveViews.dataset;
          if (liveViewElem) {
            const lvtHTML = liveViewElem.innerHTML;
            liveViewElem.innerHTML = lvtHTML.replace(settings.liveViewsCurrent, `<span class="live-view-numb">${settings.liveViewsCurrent}</span>`);
            this.changeLiveViewsNumber(liveViewElem, settings);
          }
          liveViews.dataset.initialized = true;
        }
      });
    });
    _defineProperty(this, "changeLiveViewsNumber", (liveViewElem, settings) => {
      const numbElem = liveViewElem.querySelector('.live-view-numb');
      const {
        liveViewsDuration,
        liveViewsMax,
        liveViewsMin
      } = settings;
      const duration = Number(liveViewsDuration) || 5;
      const max = Number(liveViewsMax) || 30;
      const min = Number(liveViewsMin) || 20;
      if (numbElem) {
        setInterval(() => {
          const newViews = Math.floor(Math.random() * (max - min + 1)) + min;
          numbElem.textContent = newViews;
        }, duration * 1000);
      }
    });
    _defineProperty(this, "initStockCountDown", () => {
      var _this$domNodes2, _this$domNodes2$stock;
      (_this$domNodes2 = this.domNodes) === null || _this$domNodes2 === void 0 ? void 0 : (_this$domNodes2$stock = _this$domNodes2.stockCountdowns) === null || _this$domNodes2$stock === void 0 ? void 0 : _this$domNodes2$stock.forEach(stockCountdown => {
        if (stockCountdown.dataset.initialized !== "true") {
          stockCountdown.classList.remove('hidden');
          const progress = stockCountdown.querySelector('.psc__progress');
          const width = progress.dataset.stockCountdownWidth;
          if (progress) {
            progress.style.width = "100%";
            setTimeout(() => {
              progress.style.width = width;
            }, 2000);
          }
          stockCountdown.dataset.initialized = true;
        }
      });
    });
    this.init();
  }
}
boost_sales_helper_MinimogTheme = boost_sales_helper_MinimogTheme || {};
boost_sales_helper_MinimogTheme.BoostSales = new BoostSales();
// EXTERNAL MODULE: ./src/js/sections/product-tabs.js + 3 modules
var product_tabs = __webpack_require__(7196);
;// CONCATENATED MODULE: ./src/js/app.js



// import '@modules/product'
// import '@modules/search'
// import '@modules/tabs'









function initTheme() {
  (0,utilities/* runHelpers */.Ad)();
  (0,theme_sections/* load */.zD)('product-tabs');
  // loadAllSections()
}

initTheme();
}();
/******/ })()
;
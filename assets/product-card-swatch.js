/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GQ": function() { return /* binding */ MinimogSettings; }
/* harmony export */ });
/* unused harmony exports MinimogEvents, MinimogTheme, MinimogStrings, MinimogLibs */
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
;// CONCATENATED MODULE: ./src/js/modules/product-card-swatch.js
/* provided dependency */ var MinimogSettings = __webpack_require__(4558)["GQ"];



if (!customElements.get("pcard-swatch")) {
  class PcardColorSwatch extends HTMLElement {
    constructor() {
      super();
      _defineProperty(this, "getVariantFromActiveOptions", () => {
        const {
          productData,
          productData: {
            initialVariant
          },
          activeOptionNodeByPosition
        } = this;
        let options;
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
        this.currentVariant = variant;
        return variant;
      });
      _defineProperty(this, "_getBaseUnit", () => {
        return this.currentVariant.unit_price_measurement.reference_value === 1 ? this.currentVariant.unit_price_measurement.reference_unit : this.currentVariant.unit_price_measurement.reference_value + this.currentVariant.unit_price_measurement.reference_unit;
      });
      this.selectors = {
        container: "[data-pcard-variant-picker]",
        optionNodes: [".product-option-item"],
        featuredImage: ".spc__main-img",
        pcard: ".sf__pcard",
        variantDropdown: ".sf-product-variant-option-dropdown",
        priceWrapper: ".f-price",
        salePrice: ".f-price-item--sale",
        compareAtPrice: [".f-price-item--regular"],
        unitPrice: ".f-price__unit",
        soldOutBadge: ".prod__tag--soldout"
      };
    }
    connectedCallback() {
      var _this$pcard, _this$pcard2;
      this.container = this.closest(this.selectors.container);
      this.pcard = this.closest(this.selectors.pcard);
      this.variantIdNode = (_this$pcard = this.pcard) === null || _this$pcard === void 0 ? void 0 : _this$pcard.querySelector('[name="id"]');
      this.featuredImage = (_this$pcard2 = this.pcard) === null || _this$pcard2 === void 0 ? void 0 : _this$pcard2.querySelector(this.selectors.featuredImage);
      this.domNodes = queryDomNodes(this.selectors, this.pcard);
      this.setupData();
    }
    async setupData() {
      var _this$domNodes$option, _this$domNodes$varian;
      this.variantData = this.getVariantData();
      this.productUrl = this.container.dataset.productUrl;
      this.productData = await this.getProductJson();
      this.activeOptionNodeByPosition = {};
      this.hide_unavailable_product_options = MinimogSettings.hide_unavailable_product_options;
      const {
        variantIdNode,
        productData,
        productData: {
          variants
        } = {}
      } = this;
      if (productData) {
        let currentVariantId = Number(variantIdNode === null || variantIdNode === void 0 ? void 0 : variantIdNode.value);
        if (!currentVariantId) {
          var _productData$selected;
          currentVariantId = (_productData$selected = productData.selected_or_first_available_variant) === null || _productData$selected === void 0 ? void 0 : _productData$selected.id;
        }
        const currentVariant = variants.find(v => v.id === currentVariantId) || variants[0];
        this.productData.initialVariant = currentVariant;
        if (!this.productData.selected_variant && variantIdNode !== null && variantIdNode !== void 0 && variantIdNode.dataset.selectedVariant) {
          this.productData.selected_variant = variants.find(v => v.id === Number(variantIdNode === null || variantIdNode === void 0 ? void 0 : variantIdNode.dataset.selectedVariant));
        }
        this.updateOptionByVariant(currentVariant);
        this.updateProductCardSoldOutBadge(currentVariant);
      }
      this.initOptionSwatches();
      (_this$domNodes$option = this.domNodes.optionNodes) === null || _this$domNodes$option === void 0 ? void 0 : _this$domNodes$option.forEach(node => node.addEventListener("click", this.handleSelectVariant.bind(this)));
      (_this$domNodes$varian = this.domNodes.variantDropdown) === null || _this$domNodes$varian === void 0 ? void 0 : _this$domNodes$varian.addEventListener("change", this.handleSelectVariant.bind(this));
    }
    getVariantData() {
      var _this$container;
      this.variantData = this.variantData || JSON.parse((_this$container = this.container) === null || _this$container === void 0 ? void 0 : _this$container.querySelector('[type="application/json"]').textContent);
      return this.variantData;
    }
    getProductJson() {
      return fetch(this.productUrl + ".js").then(function (response) {
        return response.json();
      });
    }
    initOptionSwatches() {
      const {
        _colorSwatches = [],
        _imageSwatches = []
      } = window.MinimogSettings;
      this.domNodes.optionNodes.forEach(optNode => {
        var _variantToShowSwatchI, _variantToShowSwatchI2, _imageSwatches$find, _colorSwatches$find;
        const {
          optionType,
          optionPosition,
          value: optionValue
        } = optNode === null || optNode === void 0 ? void 0 : optNode.dataset;
        const optionValueLowerCase = optionValue === null || optionValue === void 0 ? void 0 : optionValue.toLowerCase();
        const variantToShowSwatchImage = this.variantData.find(v => v[`option${optionPosition}`] === optionValue);
        const variantImage = variantToShowSwatchImage !== null && variantToShowSwatchImage !== void 0 && (_variantToShowSwatchI = variantToShowSwatchImage.featured_image) !== null && _variantToShowSwatchI !== void 0 && _variantToShowSwatchI.src ? getSizedImageUrl(variantToShowSwatchImage === null || variantToShowSwatchImage === void 0 ? void 0 : (_variantToShowSwatchI2 = variantToShowSwatchImage.featured_image) === null || _variantToShowSwatchI2 === void 0 ? void 0 : _variantToShowSwatchI2.src, "60x") : "";
        const customImage = (_imageSwatches$find = _imageSwatches.find(i => i.key === optionValueLowerCase)) === null || _imageSwatches$find === void 0 ? void 0 : _imageSwatches$find.value;
        const customColor = (_colorSwatches$find = _colorSwatches.find(c => c.key === optionValueLowerCase)) === null || _colorSwatches$find === void 0 ? void 0 : _colorSwatches$find.value;
        if (variantImage || customImage) optNode.classList.add("has-bg-img");
        switch (optionType) {
          case "default":
            optNode.style.backgroundImage = `url(${customImage || variantImage || ""})`;
            break;
          case "image":
            optNode.style.backgroundImage = `url(${variantImage || customImage || ""})`;
            break;
          case "color":
            optNode.style.background = `${customColor ? customColor : optionValueLowerCase}`;
            // optNode.style.setProperty('--option-color', customColor ? customColor : optionValueLowerCase)
            if (customImage) optNode.style.backgroundImage = `url(${customImage})`;
            break;
          default:
            break;
        }
      });
    }
    toggleOptionNodeActive(optNode, active) {
      if (!optNode) return;
      if (active) {
        const {
          optionPosition,
          value: optionValue
        } = optNode.dataset;
        this.activeOptionNodeByPosition[optionPosition] = optNode;
        // this.updateOptionLabel(optionPosition, optionValue)

        switch (optNode.tagName) {
          case "INPUT":
            optNode.checked = "checked";
            optNode.dataset.selected = "true";
            break;
          case "OPTION":
            optNode.dataset.selected = "true";
            const select = optNode.closest("select");
            if (select) select.value = optNode.value;
            break;
          case "DIV":
            optNode.dataset.selected = "true";
            if (["default", "image", "color"].includes(optNode.dataset.optionType)) {
              optNode.parentElement.classList.add("sf_variant-selected");
            }
            break;
          default:
            console.warn("Unable to activate option node", optNode);
            break;
        }
      } else {
        if (["default", "image", "color"].includes(optNode.dataset.optionType)) {
          optNode.parentElement.classList.remove("sf_variant-selected");
        } else {
          optNode.style.border = "";
        }
        optNode.checked = false;
        delete optNode.dataset.selected;
        const select = optNode.closest("select");
        if (select) select.value = "";
      }
    }
    updateOptionByVariant(variant) {
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
      this.updatePrice(variant);
    }
    handleSelectVariant(e) {
      let {
        target
      } = e;
      let newVariant;
      if (target.classList.contains("combined-variant")) {
        var _e$target, _this$productData, _this$productData$var, _this$productData$var2;
        const variantId = Number(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
        newVariant = (_this$productData = this.productData) === null || _this$productData === void 0 ? void 0 : (_this$productData$var = _this$productData.variants) === null || _this$productData$var === void 0 ? void 0 : (_this$productData$var2 = _this$productData$var.find) === null || _this$productData$var2 === void 0 ? void 0 : _this$productData$var2.call(_this$productData$var, v => v.id === variantId);
      } else {
        if (target.tagName === "SELECT") {
          target = target.querySelectorAll("option")[target.selectedIndex];
        }
        if (!target.classList.contains("product-option-item")) {
          target = target.closest(".product-option-item");
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
      } = this;
      if (variantIdNode) {
        var _newVariant, _newVariant2;
        variantIdNode.setAttribute("value", String((_newVariant = newVariant) === null || _newVariant === void 0 ? void 0 : _newVariant.id));
        variantIdNode.value = String((_newVariant2 = newVariant) === null || _newVariant2 === void 0 ? void 0 : _newVariant2.id);
      }
      this.updateBySelectedVariant(newVariant);
    }
    updateBySelectedVariant(variant) {
      if (variant) {
        this.changeProductImage(variant);
        this.updatePrice(variant);
        this.updateProductCardSoldOutBadge(variant);
      }
    }
    updateProductCardSoldOutBadge(variant) {
      if (this.domNodes.soldOutBadge) {
        this.domNodes.soldOutBadge.style.display = variant.available ? "none" : "flex";
      }
    }
    changeProductImage(variant) {
      var _variant$featured_ima;
      const src = variant === null || variant === void 0 ? void 0 : (_variant$featured_ima = variant.featured_image) === null || _variant$featured_ima === void 0 ? void 0 : _variant$featured_ima.src;
      const {
        featuredImage
      } = this;
      const img = featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.querySelector("img");
      if (img && src) {
        var _this$productData2, _this$productData2$in, _featuredImage$classL, _featuredImage$classL2;
        img.src = src;
        img.removeAttribute("srcset");
        const method = ((_this$productData2 = this.productData) === null || _this$productData2 === void 0 ? void 0 : (_this$productData2$in = _this$productData2.initialVariant) === null || _this$productData2$in === void 0 ? void 0 : _this$productData2$in.id) === (variant === null || variant === void 0 ? void 0 : variant.id) ? "add" : "remove";
        featuredImage === null || featuredImage === void 0 ? void 0 : (_featuredImage$classL = featuredImage.classList) === null || _featuredImage$classL === void 0 ? void 0 : (_featuredImage$classL2 = _featuredImage$classL[method]) === null || _featuredImage$classL2 === void 0 ? void 0 : _featuredImage$classL2.call(_featuredImage$classL, "group-hover:opacity-0");
      }
    }
    updatePrice(variant) {
      if (MinimogSettings.pcard_show_lowest_prices) return;
      const classes = {
        onSale: "f-price--on-sale",
        soldOut: "f-price--sold-out"
      };
      const money_format = window.MinimogSettings.money_format;
      const {
        priceWrapper,
        salePrice,
        unitPrice,
        compareAtPrice
      } = this.domNodes;
      const {
        compare_at_price,
        price,
        unit_price_measurement
      } = variant;
      const onSale = compare_at_price && compare_at_price > price;
      const soldOut = !variant.available;
      if (onSale) {
        priceWrapper.classList.add(classes.onSale);
      } else {
        priceWrapper.classList.remove(classes.onSale);
      }
      if (soldOut) {
        priceWrapper.classList.add(classes.soldOut);
      } else {
        priceWrapper.classList.remove(classes.soldOut);
      }
      if (priceWrapper) priceWrapper.classList.remove("visibility-hidden");
      if (salePrice) salePrice.innerHTML = formatMoney(price, money_format);
      if (compareAtPrice !== null && compareAtPrice !== void 0 && compareAtPrice.length && compare_at_price > price) {
        compareAtPrice.forEach(item => item.innerHTML = formatMoney(compare_at_price, money_format));
      } else {
        compareAtPrice.forEach(item => item.innerHTML = formatMoney(price, money_format));
      }
      if (unit_price_measurement && unitPrice && this.currentVariant) {
        unitPrice.classList.remove("f-hidden");
        const unitPriceContent = `<span>${formatMoney(this.currentVariant.unit_price, money_format)}</span>/<span data-unit-price-base-unit>${this._getBaseUnit()}</span>`;
        unitPrice.innerHTML = unitPriceContent;
      } else {
        unitPrice === null || unitPrice === void 0 ? void 0 : unitPrice.classList.add("f-hidden");
      }
    }
  }
  customElements.define("pcard-swatch", PcardColorSwatch);
  if (!customElements.get("swatch-button")) {
    class PcardVariantButton extends HTMLElement {
      constructor() {
        super();
      }
    }
    customElements.define("swatch-button", PcardVariantButton);
    if (!customElements.get("swatch-dropdown")) {
      class PcardVariantSelect extends PcardVariantButton {
        constructor() {
          super();
        }
      }
      customElements.define("swatch-dropdown", PcardVariantSelect);
    }
    if (!customElements.get("swatch-image")) {
      class PcardVariantImage extends PcardVariantButton {
        constructor() {
          super();
        }
      }
      customElements.define("swatch-image", PcardVariantImage);
    }
    if (!customElements.get("swatch-color")) {
      class PcardVariantColor extends PcardVariantButton {
        constructor() {
          super();
        }
      }
      customElements.define("swatch-color", PcardVariantColor);
    }
  }
}
}();
/******/ })()
;
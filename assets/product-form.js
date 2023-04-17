/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

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
;// CONCATENATED MODULE: ./src/js/pages/product/product-form.js

if (!customElements.get("product-form")) {
  customElements.define("product-form", class ProductForm extends HTMLElement {
    constructor() {
      super();
      _defineProperty(this, "toggleSpinner", show => {
        const method = show ? "add" : "remove";
        this.form.closest(".product-form").classList[method]("adding");
      });
      this.selectors = {
        form: "form",
        inputId: "[name=id]",
        submitButton: '[name="add"]',
        errorWrapper: ".prod__form-error",
        customFields: ["[data-product-custom-field]"],
        dynamicCheckout: ".prod__dynamic_checkout"
      };
      this.domNodes = queryDomNodes(this.selectors, this);
      this.form = this.domNodes.form;
      this.submitButton = this.domNodes.submitButton;
      this.domNodes.inputId.disabled = false;
      this.notificationType = this.dataset.notificationType;
      this.customFields = document.querySelectorAll(this.selectors.customFields);
      if (this.domNodes.dynamicCheckout) this.enable_dynamic_checkout = true;
      this.form.addEventListener("submit", this.onSubmitHandler.bind(this));
      if (this.domNodes.dynamicCheckout && this.customFields) {
        this.domNodes.dynamicCheckout.addEventListener('click', e => {
          const missing = validateForm(this.form.closest(".main-product__blocks"));
          if (missing.length > 0) {
            e.stopPropagation();
            window.MinimogTheme.Notification.show({
              target: this.domNodes.errorWrapper,
              method: 'appendChild',
              type: 'warning',
              message: window.MinimogStrings.requiredField,
              delay: 100
            });
            console.warn('Missing field(s): ', missing);
          }
        }, true);
      }
    }
    onSubmitHandler(evt) {
      evt.preventDefault();
      this.toggleSpinner(true);
      const missing = validateForm(this.form.closest(".main-product__blocks"));
      if ((missing === null || missing === void 0 ? void 0 : missing.length) > 0) {
        var _this$domNodes;
        console.warn("Missing field(s): ", missing);
        this.toggleSpinner(false);
        return window.MinimogTheme.Notification.show({
          target: this === null || this === void 0 ? void 0 : (_this$domNodes = this.domNodes) === null || _this$domNodes === void 0 ? void 0 : _this$domNodes.errorWrapper,
          method: "appendChild",
          type: "warning",
          message: window.MinimogStrings.requiredField
        });
      }
      const config = {
        method: "POST",
        headers: {
          Accept: "application/javascript",
          "X-Requested-With": "XMLHttpRequest"
        }
      };
      const formData = new FormData(this.form);
      config.body = formData;
      const {
        MinimogSettings,
        MinimogStrings
      } = window;
      if (MinimogSettings.use_ajax_atc) {
        fetch(`${MinimogSettings.routes.cart_add_url}`, config).then(response => response.json()).then(response => {
          if (response.status) {
            return window.MinimogTheme.Notification.show({
              target: this.notificationType === "toast" ? document.body : this.domNodes.errorWrapper,
              method: "appendChild",
              type: "warning",
              message: response.description,
              last: 3000,
              sticky: this.notificationType === "toast"
            });
          }
          if (!MinimogSettings.enable_cart_drawer) {
            window.MinimogTheme.Notification.show({
              target: this.domNodes.errorWrapper,
              method: "appendChild",
              type: "success",
              message: window.MinimogStrings.itemAdded,
              last: 3000,
              sticky: this.notificationType === "toast"
            });
          }
          window.MinimogEvents.emit(`ON_ITEM_ADDED`, response);
          window.Shopify.onItemAdded(response);
        }).catch(e => {
          console.error(e);
        }).finally(() => {
          this.toggleSpinner(false);
        });
      } else {
        // this.form.submit();
        fetch(`${MinimogSettings.routes.cart_add_url}`, config).then(response => response.json()).then(response => {
          if (response.status) {
            return window.MinimogTheme.Notification.show({
              target: this.domNodes.errorWrapper,
              method: "appendChild",
              type: "warning",
              message: response.description,
              last: 3000
            });
          } else if (!MinimogSettings.use_ajax_atc) {
            // window.location = MinimogSettings.routes.cart;
          }
          window.MinimogEvents.emit(`ON_ITEM_ADDED`, response);
          window.Shopify.onItemAdded(response);
        }).catch(e => {
          console.error(e);
        }).finally(() => {
          this.toggleSpinner(false);
        });
      }
    }
  });
}
/******/ })()
;
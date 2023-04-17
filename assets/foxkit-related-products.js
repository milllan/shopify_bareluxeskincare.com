/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
if (!customElements.get('fox-related-product')) {
  class FoxRelatedProduct extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      var _window, _window$FoxKit, _window$FoxKit$foxKit;
      if ((_window = window) !== null && _window !== void 0 && (_window$FoxKit = _window.FoxKit) !== null && _window$FoxKit !== void 0 && (_window$FoxKit$foxKit = _window$FoxKit.foxKitSettings) !== null && _window$FoxKit$foxKit !== void 0 && _window$FoxKit$foxKit.productRecommendations) {
        var _window2, _window2$FoxKit, _window2$FoxKit$initP;
        (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$FoxKit = _window2.FoxKit) === null || _window2$FoxKit === void 0 ? void 0 : (_window2$FoxKit$initP = _window2$FoxKit.initProductRecommendations) === null || _window2$FoxKit$initP === void 0 ? void 0 : _window2$FoxKit$initP.call(_window2$FoxKit);
      }
    }
  }
  customElements.define('fox-related-product', FoxRelatedProduct);
}
/******/ })()
;
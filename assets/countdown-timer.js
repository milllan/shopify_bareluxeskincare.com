/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
if (!customElements.get('m-countdown-timer')) {
  class MCountdownTimer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const time = this.dataset.time;
      const endTime = Date.parse(time.split(' ').join('T'));
      if (endTime) {
        new CountdownTimer(this, Date.now(), endTime);
      }
    }
  }
  customElements.define('m-countdown-timer', MCountdownTimer);
}
}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// extracted by mini-css-extract-plugin

}();
/******/ })()
;
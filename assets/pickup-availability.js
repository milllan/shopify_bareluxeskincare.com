/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

if (!customElements.get('pickup-availability')) {
  class PickupAvailability extends HTMLElement {
    constructor() {
      super();
      if (!this.hasAttribute('available')) return;
      this.errorHtml = this.querySelector('template').content.firstElementChild.cloneNode(true);
      this.onClickRefreshList = this.onClickRefreshList.bind(this);
      this.fetchAvailability(this.dataset.variantId);
    }
    fetchAvailability(variantId) {
      let rootUrl = this.dataset.baseUrl;
      if (!rootUrl.endsWith("/")) {
        rootUrl = rootUrl + "/";
      }
      const variantSectionUrl = `${rootUrl}variants/${variantId}/?section_id=pickup-availability`;
      fetch(variantSectionUrl).then(response => response.text()).then(text => {
        const sectionInnerHTML = new DOMParser().parseFromString(text, 'text/html').querySelector('.shopify-section');
        this.renderPreview(sectionInnerHTML);
      }).catch(e => {
        const button = this.querySelector('button');
        if (button) button.removeEventListener('click', this.onClickRefreshList);
        this.renderError();
      });
    }
    onClickRefreshList(evt) {
      this.fetchAvailability(this.dataset.variantId);
    }
    renderError() {
      this.innerHTML = '';
      this.appendChild(this.errorHtml);
      this.querySelector('button').addEventListener('click', this.onClickRefreshList);
    }
    renderPreview(sectionInnerHTML) {
      const drawer = document.querySelector('#Drawer-Pickup-Availability');
      if (drawer) drawer.remove();
      if (!sectionInnerHTML.querySelector('pickup-availability-preview')) {
        this.innerHTML = "";
        this.removeAttribute('available');
        return;
      }
      this.innerHTML = sectionInnerHTML.querySelector('pickup-availability-preview').outerHTML;
      this.setAttribute('available', '');
      document.body.appendChild(sectionInnerHTML.querySelector('#Drawer-Pickup-Availability'));
      const button = this.querySelector('button');
      if (button) {
        button.addEventListener('click', e => {
          document.querySelector('#Drawer-Pickup-Availability').openDrawer();
        });
      }
    }
  }
  customElements.define('pickup-availability', PickupAvailability);
}
if (!customElements.get('pickup-availability-drawer')) {
  class PickupAvailabilityDrawer extends HTMLElement {
    constructor() {
      super();
      this.drawerWapper = this.querySelector('.sf-drawer__wrapper');
      this.drawerContent = this.querySelector('.sf-drawer__content');
      this.drawerClose = this.querySelector('.sf-drawer__close');
      this.drawerClose.addEventListener('click', e => {
        e.preventDefault();
        this.closeDrawer();
      });
      document.body.addEventListener('click', e => {
        if (e.target.classList.contains('sf-drawer__wrapper')) this.closeDrawer();
      });
    }
    openDrawer() {
      if (window.innerWidth < 770) {
        document.documentElement.classList.add('prevent-scroll');
        this.drawerWapper.classList.add('mobile');
      }
      this.drawerWapper.classList.remove('hidden');
      requestAnimationFrame(() => {
        this.drawerWapper.style.setProperty('--tw-bg-opacity', '0.5');
        this.drawerContent.classList.remove('translate-x-full');
      });
    }
    closeDrawer() {
      var _this$drawerWapper, _this$drawerWapper$st, _this$drawerContent;
      (_this$drawerWapper = this.drawerWapper) === null || _this$drawerWapper === void 0 ? void 0 : (_this$drawerWapper$st = _this$drawerWapper.style) === null || _this$drawerWapper$st === void 0 ? void 0 : _this$drawerWapper$st.setProperty('--tw-bg-opacity', '0');
      (_this$drawerContent = this.drawerContent) === null || _this$drawerContent === void 0 ? void 0 : _this$drawerContent.classList.add('translate-x-full');
      setTimeout(() => {
        var _this$drawerWapper2, _this$drawerWapper2$c, _this$drawerWapper3, _this$drawerWapper3$c;
        (_this$drawerWapper2 = this.drawerWapper) === null || _this$drawerWapper2 === void 0 ? void 0 : (_this$drawerWapper2$c = _this$drawerWapper2.classList) === null || _this$drawerWapper2$c === void 0 ? void 0 : _this$drawerWapper2$c.add('hidden');
        (_this$drawerWapper3 = this.drawerWapper) === null || _this$drawerWapper3 === void 0 ? void 0 : (_this$drawerWapper3$c = _this$drawerWapper3.classList) === null || _this$drawerWapper3$c === void 0 ? void 0 : _this$drawerWapper3$c.remove('mobile');
        document.documentElement.classList.remove('prevent-scroll');
      }, 300);
    }
  }
  customElements.define('pickup-availability-drawer', PickupAvailabilityDrawer);
}
/******/ })()
;
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
;// CONCATENATED MODULE: ./src/js/modules/predictive-search.js

class PredictiveSearch extends HTMLElement {
  constructor() {
    super();
    _defineProperty(this, "setPopularSearchesLink", () => {
      const {
        popularSearchItems
      } = this.domNodes;
      popularSearchItems.forEach(itm => itm.href = createSearchLink(itm.dataset.psQuery));
    });
    this.selectors = {
      searchQuery: '[data-query]',
      searchMessage: '[data-message]',
      input: '[data-search-input]',
      submit: 'button[type="submit"]',
      loading: '[data-spinner]',
      clear: '[data-clear-search]',
      popularSearchItems: ['[data-ps-item]']
    };
    this.container = document.querySelector('[data-search-popup]');
    this.domNodes = queryDomNodes(this.selectors, this.container);
    this.cachedResults = {};
    this.transitionDuration = 300;
    this.input = this.querySelector('input[type="search"]');
    this.predictiveSearchResults = this.querySelector('[data-predictive-search]');
    this.popularSearches = this.querySelector('[data-popular-searches]');
    this.searchCount = this.querySelector('[data-search-count]');
    this.setupEventListeners();
    // this.setPopularSearchesLink();
  }

  setupEventListeners() {
    const {
      clear
    } = this.domNodes;
    const form = this.querySelector('form.m-search-form');
    form.addEventListener('submit', this.onFormSubmit.bind(this));
    this.input.addEventListener('input', debounce(event => {
      this.onChange(event);
    }, 300).bind(this));
    clear.addEventListener('click', this.onClearSearch.bind(this));
  }
  getQuery() {
    return this.input.value.trim();
  }
  onChange() {
    const searchTerm = this.getQuery();
    if (!searchTerm.length) {
      this.close(true);
      return;
    }
    this.getSearchResults(searchTerm);
  }
  onFormSubmit(event) {
    if (!this.getQuery().length || this.querySelector('[aria-selected="true"] a')) event.preventDefault();
  }
  onClearSearch(event) {
    event.preventDefault();
    this.input.value = '';
    this.onChange();
  }
  getSearchResults(searchTerm) {
    const queryKey = searchTerm.replace(" ", "-").toLowerCase();
    this.toggleSpinnerLoading(true);
    this.toggleClearSearch(false);
    const searchByTag = this.dataset.searchByTag === 'true';
    const searchByBody = this.dataset.searchByBody === 'true';
    const unavailableProductsOption = this.dataset.unavailableProductsOption;
    let searchFields = 'title,product_type,vendor,variants.sku,variants.title';
    if (searchByTag) searchFields += ',body';
    if (searchByBody) searchFields += ',tag';
    if (this.cachedResults[queryKey]) {
      this.renderSearchResults(this.cachedResults[queryKey]);
      return;
    }
    let searchURL = `${window.MinimogSettings.routes.predictive_search_url}?q=${encodeURIComponent(searchTerm)}&resources[type]=product&resources[options][unavailable_products]=${unavailableProductsOption}&resources[options][fields]=${searchFields}&section_id=predictive-search`;
    fetch(`${searchURL}`).then(response => {
      if (!response.ok) {
        var error = new Error(response.status);
        this.close();
        throw error;
      }
      return response.text();
    }).then(text => {
      const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;
      this.cachedResults[queryKey] = resultsMarkup;
      this.renderSearchResults(resultsMarkup);
    }).catch(error => {
      this.close();
      throw error;
    });
  }
  renderSearchResults(resultsMarkup) {
    this.predictiveSearchResults.innerHTML = resultsMarkup;
    this.setAttribute('results', true);
    const searchItemsWrapper = this.querySelector('[data-search-items-wrapper]');
    if (searchItemsWrapper.childElementCount > 0) {
      this.renderSearchQueryAndMessage(true);
    } else {
      this.renderSearchQueryAndMessage(false);
    }
    this.toggleSpinnerLoading(false);
    this.toggleClearSearch(true);
    this.open();
  }
  renderSearchQueryAndMessage(results) {
    const {
      input,
      searchQuery,
      searchMessage
    } = this.domNodes;
    const query = input.value;
    const {
      resultsTitle
    } = searchMessage.dataset;
    searchQuery.textContent = query;
    if (results) {
      searchMessage.textContent = resultsTitle;
    } else {
      searchMessage.textContent = searchMessage.dataset.noResults;
    }
  }
  toggleSpinnerLoading(show) {
    const {
      loading,
      submit
    } = this.domNodes;
    submit.style.visibility = show ? 'hidden' : 'visible';
    loading.style.visibility = show ? 'visible' : 'hidden';
  }
  toggleClearSearch(show) {
    const {
      clear
    } = this.domNodes;
    clear.style.visibility = show ? "visible" : "hidden";
  }
  open() {
    this.setAttribute('open', true);
    this.input.setAttribute('aria-expanded', true);
    this.isOpen = true;
    this.predictiveSearchResults.classList.remove('hidden');
    this.popularSearches.classList.add('hidden');
    this.searchCount.classList.remove('hidden');
  }
  close() {
    let clearSearchTerm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (clearSearchTerm) {
      this.input.value = '';
      this.removeAttribute('results');
      this.toggleClearSearch(false);
    }
    this.removeAttribute('open');
    this.predictiveSearchResults.classList.add('hidden');
    this.popularSearches.classList.remove('hidden');
    this.searchCount.classList.add('hidden');
  }
}
customElements.define('predictive-search', PredictiveSearch);
/******/ })()
;
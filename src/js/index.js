/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/map.js":
/*!**********************************!*\
  !*** ./src/js/components/map.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar defaults = {\n  mapCenter: { lat: 43.258711, lng: 76.844779 },\n  mapStyles: [{\n    featureType: 'water',\n    elementType: 'geometry',\n    stylers: [{\n      color: '#e9e9e9'\n    }, {\n      lightness: 17\n    }]\n  }, {\n    featureType: 'landscape',\n    elementType: 'geometry',\n    stylers: [{\n      color: '#f5f5f5'\n    }, {\n      lightness: 20\n    }]\n  }, {\n    featureType: 'road.highway',\n    elementType: 'geometry.fill',\n    stylers: [{\n      color: '#ffffff'\n    }, {\n      lightness: 17\n    }]\n  }, {\n    featureType: 'road.highway',\n    elementType: 'geometry.stroke',\n    stylers: [{\n      color: '#ffffff'\n    }, {\n      lightness: 29\n    }, {\n      weight: 0.2\n    }]\n  }, {\n    featureType: 'road.arterial',\n    elementType: 'geometry',\n    stylers: [{\n      color: '#ffffff'\n    }, {\n      lightness: 18\n    }]\n  }, {\n    featureType: 'road.local',\n    elementType: 'geometry',\n    stylers: [{\n      color: '#ffffff'\n    }, {\n      lightness: 16\n    }]\n  }, {\n    featureType: 'poi',\n    elementType: 'geometry',\n    stylers: [{\n      color: '#f5f5f5'\n    }, {\n      lightness: 21\n    }]\n  }, {\n    featureType: 'poi.park',\n    elementType: 'geometry',\n    stylers: [{\n      color: '#dedede'\n    }, {\n      lightness: 21\n    }]\n  }, {\n    elementType: 'labels.text.stroke',\n    stylers: [{\n      visibility: 'on'\n    }, {\n      color: '#ffffff'\n    }, {\n      lightness: 16\n    }]\n  }, {\n    elementType: 'labels.text.fill',\n    stylers: [{\n      saturation: 36\n    }, {\n      color: '#333333'\n    }, {\n      lightness: 40\n    }]\n  }, {\n    elementType: 'labels.icon',\n    stylers: [{\n      visibility: 'off'\n    }]\n  }, {\n    featureType: 'transit',\n    elementType: 'geometry',\n    stylers: [{\n      color: '#f2f2f2'\n    }, {\n      lightness: 19\n    }]\n  }, {\n    featureType: 'administrative',\n    elementType: 'geometry.fill',\n    stylers: [{\n      color: '#fefefe'\n    }, {\n      lightness: 20\n    }]\n  }, {\n    featureType: 'administrative',\n    elementType: 'geometry.stroke',\n    stylers: [{\n      color: '#fefefe'\n    }, {\n      lightness: 17\n    }, {\n      weight: 1.2\n    }]\n  }],\n  url: window.location.origin + '/img/map-icon.svg',\n  zoom: 15,\n  disableDefaultUI: true,\n  zoomControl: false,\n  scrollwheel: true\n};\n\nvar Map = function () {\n  function Map(_ref) {\n    var _ref$center = _ref.center,\n        center = _ref$center === undefined ? defaults.mapCenter : _ref$center,\n        _ref$mapStyles = _ref.mapStyles,\n        mapStyles = _ref$mapStyles === undefined ? defaults.mapStyles : _ref$mapStyles,\n        _ref$disableDefaultUI = _ref.disableDefaultUI,\n        disableDefaultUI = _ref$disableDefaultUI === undefined ? defaults.disableDefaultUI : _ref$disableDefaultUI,\n        _ref$zoomControl = _ref.zoomControl,\n        zoomControl = _ref$zoomControl === undefined ? defaults.zoomControl : _ref$zoomControl,\n        _ref$scrollwheel = _ref.scrollwheel,\n        scrollwheel = _ref$scrollwheel === undefined ? defaults.scrollwheel : _ref$scrollwheel,\n        _ref$zoom = _ref.zoom,\n        zoom = _ref$zoom === undefined ? defaults.zoom : _ref$zoom,\n        _ref$map = _ref.map,\n        map = _ref$map === undefined ? '' : _ref$map;\n\n    _classCallCheck(this, Map);\n\n    this.createIcon = function (url) {\n      return {\n        url: url\n      };\n    };\n\n    this.mapSettings = {\n      center: center,\n      disableDefaultUI: disableDefaultUI,\n      zoomControl: zoomControl,\n      scrollwheel: scrollwheel,\n      zoom: zoom\n    };\n    this.mapStyles = mapStyles;\n    this.markers = [];\n    this.circles = [];\n    this.bounds = new window.google.maps.LatLngBounds();\n\n    this.createMap(map);\n  }\n\n  _createClass(Map, [{\n    key: 'getMap',\n    value: function getMap() {\n      return this.map;\n    }\n  }, {\n    key: 'getMarkers',\n    value: function getMarkers() {\n      return this.markers;\n    }\n  }, {\n    key: 'overlay',\n    value: function overlay() {\n      var myoverlay = new window.google.maps.OverlayView();\n\n      myoverlay.draw = function drawOverlay() {\n        this.getPanes().markerLayer.id = 'markerLayer';\n      };\n      myoverlay.setMap(this.map);\n    }\n  }, {\n    key: 'createMap',\n    value: function createMap(map) {\n      if (typeof map === 'string') {\n        this.mapNode = document.querySelector(map);\n      } else {\n        this.mapNode = map;\n      }\n\n      if (this.mapNode) {\n        this.map = new window.google.maps.Map(this.mapNode, this.mapSettings);\n        this.map.setOptions({ styles: this.mapStyles });\n\n        this.overlay();\n      }\n    }\n  }, {\n    key: 'autoZoom',\n    value: function autoZoom() {\n      this.map.fitBounds(this.bounds);\n    }\n  }, {\n    key: 'autoCenter',\n    value: function autoCenter() {\n      this.map.panToBounds(this.bounds);\n    }\n  }, {\n    key: 'centerMap',\n    value: function centerMap() {\n      if (this.mapNode) {\n        if (!this.markers.length === 1) this.autoZoom();\n        this.autoCenter();\n      }\n    }\n  }, {\n    key: 'createBound',\n    value: function createBound(marker) {\n      var loc = new window.google.maps.LatLng(marker.position.lat(), marker.position.lng());\n      this.bounds.extend(loc);\n    }\n  }, {\n    key: 'drawRadius',\n    value: function drawRadius(radius, position) {\n      var circle = new window.google.maps.Circle({\n        strokeWeight: 0,\n        fillColor: '#ff0000',\n        fillOpacity: 0.2,\n        map: this.map,\n        center: position,\n        radius: radius\n      });\n      this.circles.push(circle);\n    }\n  }, {\n    key: 'renderMarker',\n    value: function renderMarker(_ref2) {\n      var location = _ref2.location;\n      var map = this.map;\n      var position = location.position,\n          icon = location.icon,\n          radius = location.radius;\n\n      var createdIcon = this.createIcon(icon);\n\n      var marker = new window.google.maps.Marker({\n        map: map,\n        position: position,\n        optimized: false,\n        icon: createdIcon,\n        title: 'markerLayer'\n      });\n\n      if (radius) {\n        this.drawRadius(radius, position);\n      }\n\n      this.createBound(marker);\n      this.markers.push(marker);\n\n      return marker;\n    }\n  }]);\n\n  return Map;\n}();\n\nexports.default = Map;\n\n//# sourceURL=webpack:///./src/js/components/map.js?");

/***/ }),

/***/ "./src/js/helpers/utils.js":
/*!*********************************!*\
  !*** ./src/js/helpers/utils.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar qs = exports.qs = function qs(selector) {\n  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  return ctx.querySelector(selector);\n};\n\nvar qsa = exports.qsa = function qsa(selector) {\n  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  return Array.from(ctx.querySelectorAll(selector));\n};\n\nvar siblings = exports.siblings = function siblings(el) {\n  return [].concat(_toConsumableArray(el.parentElement.children)).filter(function (c) {\n    return c !== el;\n  });\n};\n\nvar nodeIndex = exports.nodeIndex = function nodeIndex(el) {\n  return [].concat(_toConsumableArray(el.parentNode.children)).indexOf(el);\n};\n\nvar listen = exports.listen = function listen(selector, event, cb) {\n  qsa(selector).forEach(function (el) {\n    el.addEventListener(event, cb);\n  });\n};\n\nvar outerHeight = exports.outerHeight = function outerHeight(el) {\n  var height = el.offsetHeight;\n  var style = getComputedStyle(el);\n\n  height += window.parseFloat(style.marginTop) + window.parseFloat(style.marginBottom);\n\n  return height;\n};\n\nvar each = exports.each = function each(selector, cb) {\n  var elements = qsa(selector);\n\n  if (elements.length <= 0) return false;\n\n  elements.forEach(function (el, i) {\n    cb(el, i);\n  });\n};\n\n//# sourceURL=webpack:///./src/js/helpers/utils.js?");

/***/ }),

/***/ "./src/js/init/css-props.js":
/*!**********************************!*\
  !*** ./src/js/init/css-props.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nvar set = function set() {\n  // Viewport height\n  var vh = window.innerHeight * 0.01;\n  document.documentElement.style.setProperty('--vh', vh + 'px');\n\n  // Header height\n  var headerHeight = $.qs('.header').offsetHeight;\n  document.documentElement.style.setProperty('--header', headerHeight + 'px');\n};\n\nwindow.addEventListener('DOMContentLoaded', set);\nwindow.addEventListener('resize', set);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! utils */ \"./src/js/helpers/utils.js\")))\n\n//# sourceURL=webpack:///./src/js/init/css-props.js?");

/***/ }),

/***/ "./src/js/init/map.js":
/*!****************************!*\
  !*** ./src/js/init/map.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nvar _map = __webpack_require__(/*! @/components/map */ \"./src/js/components/map.js\");\n\nvar _map2 = _interopRequireDefault(_map);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  $.each('.js-map', function (el) {\n    var map = new _map2.default({ map: el });\n\n    map.renderMarker({\n      location: {\n        position: { lat: 43.258711, lng: 76.844779 },\n        icon: window.location.origin + '/img/map-icon.svg'\n      }\n    });\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! utils */ \"./src/js/helpers/utils.js\")))\n\n//# sourceURL=webpack:///./src/js/init/map.js?");

/***/ }),

/***/ "./src/js/init/menu.js":
/*!*****************************!*\
  !*** ./src/js/init/menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var menu = $.qs('.menu');\n  var hamburger = $.qs('.hamburger');\n  var header = $.qs('.header');\n\n  hamburger.addEventListener('click', function () {\n    hamburger.classList.toggle('active');\n    menu.classList.toggle('active');\n    header.classList.toggle('header--burger-only');\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! utils */ \"./src/js/helpers/utils.js\")))\n\n//# sourceURL=webpack:///./src/js/init/menu.js?");

/***/ }),

/***/ "./src/js/pages/index.js":
/*!*******************************!*\
  !*** ./src/js/pages/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! @/init/css-props */ \"./src/js/init/css-props.js\");\n\n__webpack_require__(/*! @/init/menu */ \"./src/js/init/menu.js\");\n\n__webpack_require__(/*! @/init/map */ \"./src/js/init/map.js\");\n\n/* eslint-disable */\n\nvar msgStyles = ['\\n %c Made with ♥️ by its.agency %c %c %c https://its.agency/ %c %c \\n', 'color: #fff; background: #333333; padding:5px 0;', 'background: #333333; padding:5px 0;', 'background: #333333; padding:5px 0;', 'color: #fff; background: #333333; padding:5px 0;', 'background: #fff; padding:5px 0;', 'color: #333333; background: #fff; padding:5px 0;'];\nwindow.console.log.apply(console, msgStyles);\n\n//# sourceURL=webpack:///./src/js/pages/index.js?");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/js/pages/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\Dexdot\\Desktop\\Projects\\personal\\infini\\src\\js\\pages\\index.js */\"./src/js/pages/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/pages/index.js?");

/***/ })

/******/ });
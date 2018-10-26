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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bent/Component.js":
/*!*******************************!*\
  !*** ./src/bent/Component.js ***!
  \*******************************/
/*! exports provided: BentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BentComponent\", function() { return BentComponent; });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./src/bent/services/index.js\");\n\r\nclass BentComponent extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n  }\r\n  connectedCallback() {\r\n    // get data\r\n    this._state = this.data();\r\n\r\n    // create shadow root\r\n    const shadow = this.attachShadow({ mode: \"open\" });\r\n    this._node = document.createElement(\"div\");\r\n    shadow.appendChild(this._node);\r\n\r\n    //make local state reactive\r\n    Object(_services__WEBPACK_IMPORTED_MODULE_0__[\"watch\"])(this._state, () => {\r\n      console.log(\"change!\");\r\n      this.render();\r\n    });\r\n\r\n    //run initialize methods\r\n    this.onInit();\r\n\r\n    //render the HTML\r\n    this.render();\r\n  }\r\n  render() {\r\n    this._node.innerHTML = Object(_services__WEBPACK_IMPORTED_MODULE_0__[\"templateEngine\"])(this.template, this._state);\r\n  }\r\n  getState() {\r\n    return this._state;\r\n  }\r\n\r\n  data() {\r\n    return {};\r\n  }\r\n\r\n  onInit() {}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/bent/Component.js?");

/***/ }),

/***/ "./src/bent/core.js":
/*!**************************!*\
  !*** ./src/bent/core.js ***!
  \**************************/
/*! exports provided: getState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getState\", function() { return getState; });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./src/bent/services/index.js\");\n\r\n\r\nconst stateContainer = {};\r\n/**\r\n * exports the stat container\r\n */\r\nconst getState = () => stateContainer;\r\n\r\n/**\r\n * Bootstrap\r\n * @param root the root node\r\n * @param cmpnts the component data to load defaults to nothing\r\n */\r\nconst Bent = root => {\r\n  //Object.assign(components, cmpnts);\r\n  // Object.keys(cmpnts).forEach(key => {\r\n  //   console.log(cmpnts);\r\n  //   components[key] = RegisterComponent(cmpnts[key]);\r\n  // });\r\n  //storeNodes(document.querySelector(root) || document);\r\n  //render();\r\n  return {\r\n    RegisterComponent: _services__WEBPACK_IMPORTED_MODULE_0__[\"RegisterComponent\"]\r\n  };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bent);\r\n\n\n//# sourceURL=webpack:///./src/bent/core.js?");

/***/ }),

/***/ "./src/bent/services/RegisterComponent.js":
/*!************************************************!*\
  !*** ./src/bent/services/RegisterComponent.js ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisterComponent\", function() { return RegisterComponent; });\nconst RegisterComponent = (name, obj) => {\r\n  customElements.define(name, obj);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/bent/services/RegisterComponent.js?");

/***/ }),

/***/ "./src/bent/services/index.js":
/*!************************************!*\
  !*** ./src/bent/services/index.js ***!
  \************************************/
/*! exports provided: RegisterComponent, templateEngine, twoway_binding, watch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RegisterComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterComponent */ \"./src/bent/services/RegisterComponent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RegisterComponent\", function() { return _RegisterComponent__WEBPACK_IMPORTED_MODULE_0__[\"RegisterComponent\"]; });\n\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ \"./src/bent/services/templates.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"templateEngine\", function() { return _templates__WEBPACK_IMPORTED_MODULE_1__[\"templateEngine\"]; });\n\n/* harmony import */ var _two_waybinding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./two-waybinding */ \"./src/bent/services/two-waybinding.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"twoway_binding\", function() { return _two_waybinding__WEBPACK_IMPORTED_MODULE_2__[\"twoway_binding\"]; });\n\n/* harmony import */ var _watch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./watch */ \"./src/bent/services/watch.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"watch\", function() { return _watch__WEBPACK_IMPORTED_MODULE_3__[\"watch\"]; });\n\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/bent/services/index.js?");

/***/ }),

/***/ "./src/bent/services/templates.js":
/*!****************************************!*\
  !*** ./src/bent/services/templates.js ***!
  \****************************************/
/*! exports provided: templateEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"templateEngine\", function() { return templateEngine; });\n/**\r\n * Templates a string with {{ content }} to binded value\r\n * @param tpl string to template\r\n * @param data data array containing the binded value\r\n */\r\nconst templateEngine = function(tpl, data) {\r\n  let regex = /\\{\\{([^}]+)\\}\\}/g;\r\n  let match;\r\n  while ((match = regex.exec(tpl))) {\r\n    tpl = tpl.replace(match[0], data[match[1]]);\r\n  }\r\n  return tpl;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/bent/services/templates.js?");

/***/ }),

/***/ "./src/bent/services/two-waybinding.js":
/*!*********************************************!*\
  !*** ./src/bent/services/two-waybinding.js ***!
  \*********************************************/
/*! exports provided: twoway_binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"twoway_binding\", function() { return twoway_binding; });\n/**\r\n * add events regarding two way data binding back to the state container\r\n * @param element the html element on which to bind the events\r\n * @param controllerName  name of the controller so its possible to lookup the property to bind the data to\r\n */\r\nconst twoway_binding = (element, controllerName) => {\r\n  //get prop name on attribute b-bind\r\n  let prop = element.getAttribute([\"b-bind\"]);\r\n\r\n  //bind initial value\r\n  //bind multiple events\r\n  [\"change\", \"keypress\"].forEach(event => {\r\n    element.addEventListener(event, () => {\r\n      //get current value for type checking\r\n      let stateVal = getState()[controllerName][prop];\r\n      //cast to type\r\n      if (typeof stateVal === \"number\") stateVal = Number(element.value);\r\n      else if (typeof stateVal === \"string\") stateVal = String(element.value);\r\n      //put new value in state container\r\n      getState()[controllerName][prop] = stateVal;\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/bent/services/two-waybinding.js?");

/***/ }),

/***/ "./src/bent/services/watch.js":
/*!************************************!*\
  !*** ./src/bent/services/watch.js ***!
  \************************************/
/*! exports provided: watch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"watch\", function() { return watch; });\n/**\r\n *  https://davidwalsh.name/watch-object-changes\r\n * attach propery change watcher\r\n * @param  object object to watch\r\n * @param onChange change event on which to watch\r\n */\r\nconst watch = (object, onChange) => {\r\n  const handler = {\r\n    get(target, property, receiver) {\r\n      try {\r\n        return new Proxy(target[property], handler);\r\n      } catch (err) {\r\n        return Reflect.get(target, property, receiver);\r\n      }\r\n    },\r\n    defineProperty(target, property, descriptor) {\r\n      onChange();\r\n      return Reflect.defineProperty(target, property, descriptor);\r\n    },\r\n    deleteProperty(target, property) {\r\n      onChange();\r\n      return Reflect.deleteProperty(target, property);\r\n    }\r\n  };\r\n\r\n  return new Proxy(object, handler);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/bent/services/watch.js?");

/***/ }),

/***/ "./src/components/ExampleComponent.js":
/*!********************************************!*\
  !*** ./src/components/ExampleComponent.js ***!
  \********************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExampleComponent\", function() { return ExampleComponent; });\n/* harmony import */ var _bent_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../bent/Component */ \"./src/bent/Component.js\");\n\r\nclass ExampleComponent extends _bent_Component__WEBPACK_IMPORTED_MODULE_0__[\"BentComponent\"] {\r\n  constructor() {\r\n    super();\r\n    this.template = `<div><h1>Timer: <span>{{timer}}</span></h1><input type=\"number\" b-bind=\"timer\"><p>testtekst {{someVal}} bla</p></div><p>{{timer}}</p>`;\r\n  }\r\n  data() {\r\n    return {\r\n      timer: 0,\r\n      someVal: 1\r\n    };\r\n  }\r\n\r\n  onInit() {\r\n    setInterval(() => {\r\n      this.getState().timer += 1;\r\n    }, 1000);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/ExampleComponent.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ExampleComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExampleComponent */ \"./src/components/ExampleComponent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ExampleComponent\", function() { return _ExampleComponent__WEBPACK_IMPORTED_MODULE_0__[\"ExampleComponent\"]; });\n\n\r\n\n\n//# sourceURL=webpack:///./src/components/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bent_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bent/core */ \"./src/bent/core.js\");\n/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ */ \"./src/components/index.js\");\n\r\n\r\n\r\nconst bent = Object(_bent_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"#app\");\r\nbent.RegisterComponent(\"example-component\", _components___WEBPACK_IMPORTED_MODULE_1__[\"ExampleComponent\"]);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
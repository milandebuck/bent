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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BentComponent\", function() { return BentComponent; });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./src/bent/services/index.js\");\n\r\nclass BentComponent extends HTMLElement {\r\n  constructor() {\r\n    this._state = {};\r\n    this.template = \"\";\r\n    Object(_services__WEBPACK_IMPORTED_MODULE_0__[\"watch\"])(this._state, () => {\r\n      let prop_names = Object.keys(this._state);\r\n      prop_names.forEach(prop_name =>\r\n        Object(_services__WEBPACK_IMPORTED_MODULE_0__[\"watch\"])(this._state[prop_name], () => this.render())\r\n      );\r\n    });\r\n  }\r\n\r\n  render() {\r\n    this.innerHTML = templateEngine(this.template, this._state);\r\n  }\r\n\r\n  bindData(data = {}) {\r\n    Object.assign(this._state, data);\r\n  }\r\n\r\n  getState() {\r\n    return this._state;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/bent/Component.js?");

/***/ }),

/***/ "./src/bent/core.js":
/*!**************************!*\
  !*** ./src/bent/core.js ***!
  \**************************/
/*! exports provided: render, getState, Bent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getState\", function() { return getState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bent\", function() { return Bent; });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./src/bent/services/index.js\");\n\r\n\r\n//contains root nodes with bent-controller attributes\r\nconst nodeContainer = [];\r\n\r\n//state container\r\nconst stateContainer = {};\r\n\r\n//initial configuration of the different bant-controllers\r\nconst components = {};\r\n/**\r\n * stores and processes the DOM nodes in the nodeContainer\r\n * @param root root DOM element\r\n */\r\nfunction storeNodes(root) {\r\n  //get nodes\r\n  let nodes = root.querySelectorAll(\"[bent-controller]\");\r\n  for (let i = 0; i < nodes.length; i++) {\r\n    appendNode(nodes[i]);\r\n  }\r\n}\r\n/**\r\n * get the corresponding Data of the DOM node and store it in node & state container\r\n * @param element the dom element\r\n */\r\nfunction appendNode(element) {\r\n  //get Controller name\r\n  let name = element.getAttribute(\"bent-controller\");\r\n  //get two way binding nodes\r\n  let bindNodes = element.querySelectorAll(\"input[b-bind]\");\r\n  for (let i = 0; i < bindNodes.length; i++) {\r\n    //add twowaybinding where needed\r\n    Object(_services__WEBPACK_IMPORTED_MODULE_0__[\"twoway_binding\"])(bindNodes[i], name);\r\n  }\r\n  //deep clone to preserve template syntax\r\n  let clone = element.cloneNode(true);\r\n  try {\r\n    //get data from corresponding component\r\n    let data = new components[name]();\r\n    let node = {\r\n      element,\r\n      name,\r\n      clone\r\n    };\r\n    //add Data to state container + enable watching on var change\r\n    stateContainer[name] = Object(_services__WEBPACK_IMPORTED_MODULE_0__[\"watch\"])(data, () => {\r\n      render();\r\n    });\r\n    nodeContainer.push(node);\r\n  } catch (e) {\r\n    console.error(`${name} not found`, e);\r\n  }\r\n}\r\n/**\r\n * Renders the manipluated Dom\r\n */\r\nfunction render() {\r\n  for (let i = 0; i < nodeContainer.length; i++) {\r\n    BrowseNodes(\r\n      nodeContainer[i].element,\r\n      nodeContainer[i].clone,\r\n      getState()[nodeContainer[i].name]\r\n    );\r\n  }\r\n}\r\n\r\n/**\r\n * Browse all nodes and Templates the leaf nodes (recursive)\r\n * @param parentNode the root node on which to start\r\n * @param\r\n */\r\nfunction BrowseNodes(parentNode, original, data) {\r\n  if (parentNode.children.length > 0) {\r\n    //brows children\r\n    for (let i = 0; i < parentNode.children.length; i++) {\r\n      BrowseNodes(parentNode.children[i], original.children[i], data);\r\n    }\r\n  } else {\r\n    //template leaf node\r\n    parentNode.innerHTML = Object(_services__WEBPACK_IMPORTED_MODULE_0__[\"TemplateEngine\"])(original.innerHTML, data);\r\n  }\r\n}\r\n\r\n/**\r\n * exports the stat container\r\n */\r\nconst getState = () => stateContainer;\r\n\r\n/**\r\n * Bootstrap\r\n * @param root the root node\r\n * @param cmpnts the component data to load defaults to nothing\r\n */\r\nconst Bent = (root, cmpnts = {}) => {\r\n  //Object.assign(components, cmpnts);\r\n  Object.keys(cmpnts).forEach(key => {\r\n    console.log(cmpnts);\r\n    components[key] = Object(_services__WEBPACK_IMPORTED_MODULE_0__[\"registerComponent\"])(new cmpnts[key]());\r\n  });\r\n  //storeNodes(document.querySelector(root) || document);\r\n  //render();\r\n};\r\n\n\n//# sourceURL=webpack:///./src/bent/core.js?");

/***/ }),

/***/ "./src/bent/services/RegisterComponent.js":
/*!************************************************!*\
  !*** ./src/bent/services/RegisterComponent.js ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisterComponent\", function() { return RegisterComponent; });\nconst RegisterComponent = obj => {\r\n  customElements.define(obj.name, obj);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/bent/services/RegisterComponent.js?");

/***/ }),

/***/ "./src/bent/services/index.js":
/*!************************************!*\
  !*** ./src/bent/services/index.js ***!
  \************************************/
/*! exports provided: RegisterComponent, TemplateEngine, twoway_binding, watch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RegisterComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterComponent */ \"./src/bent/services/RegisterComponent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RegisterComponent\", function() { return _RegisterComponent__WEBPACK_IMPORTED_MODULE_0__[\"RegisterComponent\"]; });\n\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ \"./src/bent/services/templates.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TemplateEngine\", function() { return _templates__WEBPACK_IMPORTED_MODULE_1__[\"TemplateEngine\"]; });\n\n/* harmony import */ var _two_waybinding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./two-waybinding */ \"./src/bent/services/two-waybinding.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"twoway_binding\", function() { return _two_waybinding__WEBPACK_IMPORTED_MODULE_2__[\"twoway_binding\"]; });\n\n/* harmony import */ var _watch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./watch */ \"./src/bent/services/watch.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"watch\", function() { return _watch__WEBPACK_IMPORTED_MODULE_3__[\"watch\"]; });\n\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/bent/services/index.js?");

/***/ }),

/***/ "./src/bent/services/templates.js":
/*!****************************************!*\
  !*** ./src/bent/services/templates.js ***!
  \****************************************/
/*! exports provided: TemplateEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TemplateEngine\", function() { return TemplateEngine; });\n/**\r\n * Templates a string with {{ content }} to binded value\r\n * @param tpl string to template\r\n * @param data data array containing the binded value\r\n */\r\nconst TemplateEngine = function(tpl, data) {\r\n  let regex = /\\{\\{([^}]+)\\}\\}/g;\r\n  let match;\r\n  while ((match = regex.exec(tpl))) {\r\n    tpl = tpl.replace(match[0], data[match[1]]);\r\n  }\r\n  return tpl;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/bent/services/templates.js?");

/***/ }),

/***/ "./src/bent/services/two-waybinding.js":
/*!*********************************************!*\
  !*** ./src/bent/services/two-waybinding.js ***!
  \*********************************************/
/*! exports provided: twoway_binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"twoway_binding\", function() { return twoway_binding; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core */ \"./src/bent/core.js\");\n\r\n/**\r\n * add events regarding two way data binding back to the state container\r\n * @param element the html element on which to bind the events\r\n * @param controllerName  name of the controller so its possible to lookup the property to bind the data to\r\n */\r\nconst twoway_binding = (element, controllerName) => {\r\n  //get prop name on attribute b-bind\r\n  let prop = element.getAttribute([\"b-bind\"]);\r\n\r\n  //bind initial value\r\n  //bind multiple events\r\n  [\"change\", \"keypress\"].forEach(event => {\r\n    element.addEventListener(event, () => {\r\n      //get current value for type checking\r\n      let stateVal = Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])()[controllerName][prop];\r\n      //cast to type\r\n      if (typeof stateVal === \"number\") stateVal = Number(element.value);\r\n      else if (typeof stateVal === \"string\") stateVal = String(element.value);\r\n      //put new value in state container\r\n      Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])()[controllerName][prop] = stateVal;\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/bent/services/two-waybinding.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExampleComponent\", function() { return ExampleComponent; });\n/* harmony import */ var _bent_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../bent/Component */ \"./src/bent/Component.js\");\n\r\nclass ExampleComponent extends _bent_Component__WEBPACK_IMPORTED_MODULE_0__[\"BentComponent\"] {\r\n  constructor() {\r\n    super();\r\n    this.name = \"example-component\";\r\n    this.template = `<div><h1>Timer: <span>{{timer}}</span></h1><input type=\"number\" b-bind=\"timer\"><p>testtekst {{someVal}} bla</p></div><p>{{timer}}</p>`;\r\n\r\n    bindData({\r\n      timer: 0,\r\n      someValue: 1,\r\n      someExample: 2\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/ExampleComponent.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! no exports provided */
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bent_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bent/core */ \"./src/bent/core.js\");\n/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ */ \"./src/components/index.js\");\n\r\n\r\n\r\nObject(_bent_core__WEBPACK_IMPORTED_MODULE_0__[\"Bent\"])(\"#app\", {\r\n  ExampleComponent: _components___WEBPACK_IMPORTED_MODULE_1__[\"ExampleComponent\"]\r\n});\r\nconst state = Object(_bent_core__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])();\r\nsetInterval(() => {\r\n  state.ExampleController.timer += 1;\r\n}, 1000);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
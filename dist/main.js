/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/style.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/style.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,*::after,*::before {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n}\\r\\n\\r\\n\\r\\n:root{\\r\\n  --color-darkRed: rgb(98, 25, 25);\\r\\n}\\r\\n\\r\\n\\r\\nhtml {\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n\\r\\nbutton {\\r\\n  all: unset;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n\\r\\n#main-header {\\r\\n  color: white;\\r\\n  background-color: var(--color-darkRed);\\r\\n  padding: 10px;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n\\r\\n#main-header h1 {\\r\\n  margin-left: 5%;\\r\\n}\\r\\n\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n\\r\\n#open-project {\\r\\n  font-size: 1.3rem;\\r\\n  font-weight: bold;\\r\\n  margin-top: 10%;\\r\\n}\\r\\n\\r\\n\\r\\n.tabs {\\r\\n  list-style-type: none;\\r\\n  width: 250px;\\r\\n  height: 70px;\\r\\n  border-bottom: 1px solid rgb(196, 196, 196);\\r\\n  padding-left: 20px;\\r\\n  margin-right: 5px;\\r\\n  border-left: 5px solid transparent;\\r\\n}\\r\\n\\r\\n\\r\\nnav {\\r\\n  border-right: 1px solid black;\\r\\n  position: fixed;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n\\r\\n.tabs:hover{\\r\\n  border-left: 5px solid var(--color-darkRed);\\r\\n  transition: all .3s ease-in-out;\\r\\n}\\r\\n\\r\\n\\r\\n.projects {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.projects .delete-project{\\r\\n  visibility: hidden;\\r\\n  opacity:0;\\r\\n}\\r\\n\\r\\n.projects:hover .delete-project {\\r\\n  visibility: visible;\\r\\n  opacity: 1;\\r\\n  transition: all .3s ease-in-out;\\r\\n}\\r\\n\\r\\n\\r\\n.delete-project {\\r\\n  border: 1px solid rgba(0, 0, 0, 0.179);\\r\\n  position: absolute;\\r\\n  top: 50%; right: 20%;\\r\\n  transform: translate(50%,-50%);\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n\\r\\nnav h1 {\\r\\n  text-align: center;\\r\\n  border-bottom: 3px solid var(--color-darkRed);\\r\\n  margin-left: 20%;\\r\\n  margin-right: 20%;\\r\\n  margin-top: 25%;\\r\\n  margin-bottom: 5%;\\r\\n}\\r\\n\\r\\n\\r\\n.dropdown {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n  text-align: center;\\r\\n  position: absolute;\\r\\n  top: 0%; right: 50%;\\r\\n  transform: translate(50%,-50%);\\r\\n  visibility: hidden;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n\\r\\n.dropdown-active {\\r\\n  position: relative !important; \\r\\n  top: 10%;\\r\\n  visibility: visible !important;\\r\\n  transition: all .5s;\\r\\n}\\r\\n\\r\\n\\r\\n.dropdown input {\\r\\n  border: 0;\\r\\n  border-bottom: 1px solid black;\\r\\n  text-align: center;\\r\\n  margin-top: 20%;\\r\\n  margin-bottom: 10%;\\r\\n}\\r\\n\\r\\n\\r\\n.dropdown input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n\\r\\n#add-project {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  width: 70px;\\r\\n  height: 30px;\\r\\n  border: 1px solid var(--color-darkRed);\\r\\n}\\r\\n\\r\\n\\r\\n.active-button {\\r\\n  border-left: 5px solid var(--color-darkRed);\\r\\n}\\r\\n\\r\\n\\r\\n.project-container {\\r\\n  position: absolute;\\r\\n  left: 20%;\\r\\n  visibility: hidden;\\r\\n  opacity: 0;\\r\\n}\\r\\n\\r\\n\\r\\n.project-header {\\r\\n  font-size: 1.5rem;\\r\\n  display: flex;\\r\\n  border-bottom: 2px solid rgba(0, 0, 0, 0.207);\\r\\n  width: 65vw;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  margin-left: 10%;\\r\\n  margin-right: 10%;\\r\\n  margin-bottom: 5%;\\r\\n}\\r\\n\\r\\n\\r\\n.project-header > * {\\r\\n  padding: 10px 15px 10px 15px;\\r\\n}\\r\\n\\r\\n\\r\\n.active-content {\\r\\n  visibility: visible !important;\\r\\n  opacity: 1 !important;\\r\\n}\\r\\n\\r\\n\\r\\n.task-container {\\r\\n  display: flex;\\r\\n  border: 2px solid var(--color-darkRed);\\r\\n  width: 65vw;\\r\\n  margin-left: 10%;\\r\\n  margin-right: 10%;\\r\\n  margin-bottom: 1%;\\r\\n}\\r\\n\\r\\n\\r\\n.task-container input {\\r\\n  margin-left: 3%;\\r\\n}\\r\\n\\r\\n\\r\\n.task-container > * {\\r\\n  padding: 12px;\\r\\n}\\r\\n\\r\\n\\r\\n.task-container p:nth-child(2) {\\r\\n  margin-left: 1%;\\r\\n  font-weight: bold;\\r\\n  width: 150px;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n\\r\\n.task-container p:nth-child(3) {\\r\\n  margin-left: 2%;\\r\\n  flex-grow: 1;\\r\\n}\\r\\n\\r\\n\\r\\n.task-container p:nth-child(4) {\\r\\n  margin-right: 1%;\\r\\n}\\r\\n\\r\\n\\r\\n.task-container button:nth-child(5) {\\r\\n  margin-right: 1%;\\r\\n}\\r\\n\\r\\n\\r\\n.task-container button:nth-child(6) {\\r\\n  margin-right: 1%;\\r\\n}\\r\\n\\r\\n\\r\\n#task-form {\\r\\n  position: absolute;\\r\\n  top: 50%; right: 50%;\\r\\n  transform: translate(50%, -50%);\\r\\n  border: 2px solid black;\\r\\n  background-color: white;\\r\\n  text-align: center;\\r\\n  visibility: hidden;\\r\\n  opacity: 0;\\r\\n}\\r\\n\\r\\n\\r\\n#task-form li {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n\\r\\n#task-form h1 {\\r\\n  border-bottom: 1px solid grey;\\r\\n}\\r\\n\\r\\n\\r\\n#task-form > * {\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n\\r\\nfieldset {\\r\\n  border: 0;\\r\\n}\\r\\n\\r\\n\\r\\n.active-form {\\r\\n  visibility: visible !important;\\r\\n  opacity: 1 !important;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./dist/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./dist/style.css":
/*!************************!*\
  !*** ./dist/style.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./dist/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./dist/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProject\": () => (/* binding */ displayProject),\n/* harmony export */   \"displayTask\": () => (/* binding */ displayTask)\n/* harmony export */ });\n\r\n\r\n//  Display projects on nav bar\r\nfunction displayProject() {\r\n  const getProjectName = document.querySelector('#project-name').value;\r\n  const projectsContainer = document.querySelector('#project-container');\r\n  const list = document.createElement('li');\r\n  const projectTab = document.createElement('button');\r\n  const deleteProjectBtn = document.createElement('button');\r\n\r\n  deleteProjectBtn.textContent = 'X';\r\n  projectsContainer.appendChild(list);\r\n  list.appendChild(projectTab);\r\n  list.appendChild(deleteProjectBtn);\r\n  projectTab.textContent = getProjectName;\r\n  projectTab.setAttribute('data-tab-target', `#${getProjectName}`);\r\n\r\n  deleteProjectBtn.classList.add('delete-project');\r\n  list.classList.add('projects');\r\n  projectTab.classList.add('tabs');\r\n  list.setAttribute('data-project', projectId());\r\n\r\n  //Project panel\r\n  const main = document.querySelector('main');\r\n  const section = document.createElement('section');\r\n  const header = document.createElement('header');\r\n  const h1 = document.createElement('h1');\r\n  const taskButton = document.createElement('button');\r\n\r\n  main.appendChild(section);\r\n  section.appendChild(header);\r\n  header.appendChild(h1);\r\n  header.appendChild(taskButton);\r\n\r\n  taskButton.textContent = 'Add task';\r\n  h1.textContent = getProjectName;\r\n  section.setAttribute('id', getProjectName);\r\n  section.classList.add('project-container');\r\n  section.setAttribute('data-tab-content', '');\r\n  header.classList.add('project-header');\r\n  taskButton.classList.add('open-task');\r\n}\r\n\r\nlet idProject = 0;\r\nfunction projectId() {\r\n  return idProject++;\r\n}\r\n\r\n\r\n\r\n\r\nfunction displayTask() {\r\n  // <div class=\"task-container\">\r\n    // <input type=\"checkbox\">\r\n    // <p>Refactor</p>\r\n    // <p>Description...</p>\r\n    // <p>29/10/2022</p>\r\n    // <button>Edit</button>\r\n    // <button>Delete</button>\r\n  // </div>\r\n  const main = document.querySelector('main');\r\n  const section = document.querySelector('.active-content');\r\n  const container = document.createElement('div');\r\n  const checkBox = document.createElement('input');\r\n  const taskName = document.createElement('p');\r\n  const description = document.createElement('p');\r\n  const dueDate = document.createElement('p');\r\n  const editBtn = document.createElement('button');\r\n  const deleteBtn = document.createElement('button');\r\n\r\n  checkBox.type = 'checkbox';\r\n\r\n  main.appendChild(section);\r\n  section.appendChild(container);\r\n  container.appendChild(checkBox);\r\n  container.appendChild(taskName);\r\n  container.appendChild(description);\r\n  container.appendChild(dueDate);\r\n  container.appendChild(editBtn);\r\n  container.appendChild(deleteBtn);\r\n  \r\n  container.classList.add('task-container');\r\n  deleteBtn.classList.add('delete-task');\r\n\r\n  const getTaskName = document.querySelector('#task-name').value;\r\n  const getPriority = document.querySelector('#priority').value;\r\n  const getDescription = document.querySelector('#description').value;\r\n  const getDueDate = document.querySelector('#due-date').value;\r\n\r\n  taskName.textContent = getTaskName;\r\n  description.textContent = getDescription;\r\n  dueDate.textContent = getDueDate;\r\n  editBtn.textContent = 'Edit';\r\n  deleteBtn.textContent = 'Delete';\r\n\r\n  container.setAttribute('data-task', taskId());\r\n}\r\n\r\n// add data attribute for task \r\nlet counter = 0;\r\nfunction taskId() {\r\n  return counter ++;\r\n}\r\n\r\n\r\n// use today as minimum date\r\n(function () {\r\n  let minDate = new Date().toISOString().split('T')[0];\r\n  document.querySelector('#due-date').value = minDate;\r\n  document.querySelector('#due-date').setAttribute('min', minDate);\r\n})();\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?");

/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectToArray\": () => (/* binding */ addProjectToArray),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n\r\n'use strict';\r\n\r\n\r\nconst projectList = [];\r\nconst taskList = [];\r\n\r\n\r\n\r\nfunction addProjectToArray() {\r\n  const getProjectName = document.querySelector('#project-name').value;\r\n\r\n  if(getProjectName === '') {\r\n    alert('Please input project name');\r\n  } else {\r\n    projectList.push((0,_projects__WEBPACK_IMPORTED_MODULE_1__.project)(getProjectName, projectId()));\r\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayProject)();\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\nfunction addTask() {\r\n  const getId = document.querySelector('.active-content');\r\n  const projectId = getId.getAttribute('id');\r\n  const getTaskName = document.querySelector('#task-name').value;\r\n  const getPriority = document.querySelector('#priority').value;\r\n  const getDescription = document.querySelector('#description').value;\r\n  const getDueDate = document.querySelector('#due-date').value;\r\n\r\n  if (getTaskName === '' || getDescription === '' || getDueDate === '') {\r\n    alert('Please complete the field');\r\n  } else if (getTaskName.length >= 14) {\r\n    alert('Task name too long');\r\n  } else if (getDescription.length >= 58) {\r\n    alert('Description too long');\r\n  } else {\r\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayTask)();\r\n    taskList.push((0,_task__WEBPACK_IMPORTED_MODULE_2__.task)(projectId, taskId(), getTaskName, getDescription,getPriority, getDueDate));\r\n  }\r\n}\r\n\r\n\r\n\r\n// create task id\r\nlet idTask = 0;\r\nfunction taskId() {\r\n  return idTask++;\r\n}\r\n\r\n\r\nlet idProject = 0;\r\nfunction projectId() {\r\n  return idProject++\r\n}\r\n\r\n\r\n\r\n// delete task\r\nconst ul = document.querySelector('.active-content');\r\n\r\nul.addEventListener('click', e => {\r\n  if(e.target.className === 'delete-task') {\r\n    const taskId = e.target.parentNode.dataset.task;  \r\n    const fooBar = taskList.findIndex(f => f.id === +taskId);\r\n    taskList.splice(fooBar, 1);\r\n    e.target.parentNode.remove();\r\n  }\r\n});\r\n\r\n\r\n\r\n//  delete project\r\nconst container = document.querySelector('#project-container');\r\n\r\ncontainer.addEventListener('click', e => {\r\n  if(e.target.className === 'delete-project') {\r\n    const projectId = e.target.parentNode.dataset.project;\r\n    const foobar = projectList.findIndex(p => p.id === +projectId);\r\n    projectList.splice(foobar, 1);\r\n    e.target.parentNode.remove();\r\n  }\r\n});\n\n//# sourceURL=webpack://todo-list/./src/function.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabSwitch\": () => (/* binding */ tabSwitch)\n/* harmony export */ });\n/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ \"./src/function.js\");\n/* harmony import */ var _dist_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../dist/style.css */ \"./dist/style.css\");\n\r\n\r\n'use strict';\r\n\r\n\r\n\r\ntabSwitch();\r\ntaskModal();\r\n// dropdown menu \r\n(function () {\r\n    const openProjectBtn = document.querySelector('#open-project');\r\n    const dropdown = document.querySelector('.dropdown');\r\n\r\n  openProjectBtn.addEventListener('click' , () => {\r\n    dropdown.classList.toggle('dropdown-active');\r\n    openProjectBtn.classList.toggle('active-button');\r\n  });\r\n})();\r\n\r\n\r\n\r\n// tab switching\r\nfunction tabSwitch() {\r\n  const tabs = document.querySelectorAll('[data-tab-target]');\r\n  const tabContents = document.querySelectorAll('[data-tab-content]');\r\n  tabs.forEach(tab => {\r\n    tab.addEventListener('click', () => {\r\n      const target = document.querySelector(tab.dataset.tabTarget);\r\n      tabContents.forEach(tabContent => {\r\n        tabContent.classList.remove('active-content');\r\n      });\r\n      tabs.forEach(tab => {\r\n        tab.classList.remove('active-button');\r\n      });\r\n      tab.classList.add('active-button');\r\n      target.classList.add('active-content');\r\n    });\r\n  });\r\n};\r\n\r\n\r\n// Add project\r\nconst addProjectBtn = document.querySelector('#add-project');\r\naddProjectBtn.addEventListener('click', e => {\r\n    e.preventDefault();\r\n    addProject();\r\n    tabSwitch(); // call tabswitch to make it work on new project\r\n    taskModal();//  call taskmodal to make it work on new task \r\n});\r\n\r\nfunction addProject() {\r\n  (0,_function__WEBPACK_IMPORTED_MODULE_0__.addProjectToArray)();\r\n  const dropdown = document.querySelector('.dropdown');\r\n  const projectName = document.querySelector('#project-name');\r\n  const dropdownButton = document.querySelector('#open-project');\r\n\r\n  //reset\r\n  dropdown.classList.remove('dropdown-active');\r\n  projectName.value = '';\r\n  dropdownButton.classList.remove('active-button');\r\n}\r\n\r\n\r\n// task modal \r\nfunction taskModal() {\r\n  const openTaskButtons = document.querySelectorAll('.open-task');\r\n  const cancelButton = document.querySelectorAll('.cancel'); \r\n  const taskForm = document.querySelector('#task-form');\r\n\r\n  openTaskButtons.forEach(btn => {\r\n    btn.addEventListener('click', e => {\r\n      e.preventDefault();\r\n      taskForm.classList.add('active-form');\r\n    });\r\n  });\r\n\r\n  cancelButton.forEach(btn => {\r\n    btn.addEventListener('click', e => {\r\n      e.preventDefault();\r\n      taskForm.classList.remove('active-form');\r\n    });\r\n  });\r\n};\r\n\r\n\r\n\r\n// add  task\r\n(function() {\r\n  const addTaskBtn = document.querySelector('#add-task');\r\n  addTaskBtn.addEventListener('click', e => {\r\n    e.preventDefault();\r\n    (0,_function__WEBPACK_IMPORTED_MODULE_0__.addTask)();\r\n\r\n    // Reset \r\n    const taskForm = document.querySelector('#task-form');\r\n    const getTaskName = document.querySelector('#task-name');\r\n    const getDescription = document.querySelector('#description');\r\n\r\n    taskForm.classList.remove('active-form');\r\n    getTaskName.value = '';\r\n    getDescription.value = '';\r\n  });\r\n})();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project)\n/* harmony export */ });\nconst project = (title, id) => {\r\n  return {\r\n    title: title,\r\n    id: id\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"task\": () => (/* binding */ task)\n/* harmony export */ });\nconst task = (projectId, id, name, description, priority, dueDate) => {\r\n  return {\r\n    projectId: projectId,\r\n    id: id,\r\n    name: name,\r\n    description: description,\r\n    priority: priority,\r\n    dueDate: dueDate,\r\n    status: false\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
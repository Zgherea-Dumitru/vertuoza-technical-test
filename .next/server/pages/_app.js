/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/apollo-client.ts":
/*!******************************!*\
  !*** ./lib/apollo-client.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: \"http://localhost:4000\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBvbGxvLWNsaWVudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkQ7QUFFN0QsTUFBTUUsU0FBUyxJQUFJRix3REFBWUEsQ0FBQztJQUM1QkcsS0FBSztJQUNMQyxPQUFPLElBQUlILHlEQUFhQTtBQUM1QjtBQUVBLGlFQUFlQyxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvZHVtaXRydS9Eb2N1bWVudHMvQ29kaW5nL0ludGVydmlld3MvdmVydHVvemEtdGVjaG5pY2FsLXRlc3QvbGliL2Fwb2xsby1jbGllbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHVyaTogXCJodHRwOi8vbG9jYWxob3N0OjQwMDBcIixcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7Il0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJjbGllbnQiLCJ1cmkiLCJjYWNoZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/apollo-client.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Outfit_arguments_subsets_latin_weight_400_500_variable_font_outfit_variableName_outfit___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages/_app.tsx\",\"import\":\"Outfit\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\",\"500\"],\"variable\":\"--font-outfit\"}],\"variableName\":\"outfit\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages/_app.tsx\\\",\\\"import\\\":\\\"Outfit\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\",\\\"500\\\"],\\\"variable\\\":\\\"--font-outfit\\\"}],\\\"variableName\\\":\\\"outfit\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Outfit_arguments_subsets_latin_weight_400_500_variable_font_outfit_variableName_outfit___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_tsx_import_Outfit_arguments_subsets_latin_weight_400_500_variable_font_outfit_variableName_outfit___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/apollo-client */ \"./lib/apollo-client.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: _lib_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (next_font_google_target_css_path_pages_app_tsx_import_Outfit_arguments_subsets_latin_weight_400_500_variable_font_outfit_variableName_outfit___WEBPACK_IMPORTED_MODULE_4___default().className),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/dumitru/Documents/Coding/Interviews/vertuoza-technical-test/pages/_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/dumitru/Documents/Coding/Interviews/vertuoza-technical-test/pages/_app.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dumitru/Documents/Coding/Interviews/vertuoza-technical-test/pages/_app.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnRDtBQU8xQ0M7QUFMbUM7QUFDWDtBQVVmLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0UsOERBQUNMLDBEQUFjQTtRQUFDRSxRQUFRQSwwREFBTUE7a0JBQzVCLDRFQUFDSTtZQUFLQyxXQUFXTixnTUFBZ0I7c0JBQy9CLDRFQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBS2hDIiwic291cmNlcyI6WyIvVXNlcnMvZHVtaXRydS9Eb2N1bWVudHMvQ29kaW5nL0ludGVydmlld3MvdmVydHVvemEtdGVjaG5pY2FsLXRlc3QvcGFnZXMvX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IE91dGZpdCB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCJcbmltcG9ydCBjbGllbnQgZnJvbSBcIkAvbGliL2Fwb2xsby1jbGllbnRcIjtcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcblxuY29uc3Qgb3V0Zml0ID0gT3V0Zml0KHtcbiAgc3Vic2V0czogW1wibGF0aW5cIl0sXG4gIHdlaWdodDogW1wiNDAwXCIsIFwiNTAwXCJdLFxuICB2YXJpYWJsZTogXCItLWZvbnQtb3V0Zml0XCIsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e291dGZpdC5jbGFzc05hbWV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKVxuICAgIDtcbn1cbiJdLCJuYW1lcyI6WyJBcG9sbG9Qcm92aWRlciIsIm91dGZpdCIsImNsaWVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1haW4iLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();
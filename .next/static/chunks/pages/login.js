/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/login"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fken%2FDocuments%2FNextJs%2Fspotify%2Fpages%2Flogin.js&page=%2Flogin!":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fken%2FDocuments%2FNextJs%2Fspotify%2Fpages%2Flogin.js&page=%2Flogin! ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/login\",\n      function () {\n        return __webpack_require__(/*! ./pages/login.js */ \"./pages/login.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/login\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmtlbiUyRkRvY3VtZW50cyUyRk5leHRKcyUyRnNwb3RpZnklMkZwYWdlcyUyRmxvZ2luLmpzJnBhZ2U9JTJGbG9naW4hLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsMENBQWtCO0FBQ3pDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz8xOGI3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvbG9naW5cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2xvZ2luLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9sb2dpblwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fken%2FDocuments%2FNextJs%2Fspotify%2Fpages%2Flogin.js&page=%2Flogin!\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n//The login page need to be render on the server\n\nvar __N_SSP = true;\nfunction Login(param) {\n    var providers = param.providers;\n    console.log(\"PROVIDER FROM NEXT AUTHEN\", providers);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center bg-black min-h-screen w-full justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-52 mb-5\",\n                src: \"https://links.papareact.com/9xl\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/ken/Documents/NextJs/spotify/pages/login.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-[#18D860] text-white p-5\",\n                    onClick: function() {\n                        return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(providers.spotify.id, {\n                            callbackUrl: \"/\"\n                        });\n                    },\n                    children: [\n                        \"Login with \",\n                        providers.spotify.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ken/Documents/NextJs/spotify/pages/login.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, providers.spotify.name, false, {\n                fileName: \"/Users/ken/Documents/NextJs/spotify/pages/login.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ken/Documents/NextJs/spotify/pages/login.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n};\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQURBLGdEQUFnRDtBQUNPOztBQUN4QyxTQUFTQyxLQUFLLENBQUMsS0FBYSxFQUFFO1FBQWYsU0FBVyxHQUFYLEtBQWEsQ0FBWEMsU0FBUztJQUN2Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLEVBQUVGLFNBQVMsQ0FBQyxDQUFDO0lBRXBELHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx3RUFBd0U7OzBCQUNyRiw4REFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLFdBQVc7Z0JBQUNFLEdBQUcsRUFBQyxpQ0FBaUM7Z0JBQUNDLEdBQUcsRUFBQyxFQUFFOzs7OztvQkFBRzswQkFDMUUsOERBQUNKLEtBQUc7MEJBQ0YsNEVBQUNLLFFBQU07b0JBQ0xKLFNBQVMsRUFBQyw2QkFBNkI7b0JBQ3ZDSyxPQUFPLEVBQUU7K0JBQ1BYLHVEQUFNLENBQUNFLFNBQVMsQ0FBQ1UsT0FBTyxDQUFDQyxFQUFFLEVBQUU7NEJBQzNCQyxXQUFXLEVBQUUsR0FBRzt5QkFDakIsQ0FBQztxQkFBQTs7d0JBRUwsYUFDWTt3QkFBQ1osU0FBUyxDQUFDVSxPQUFPLENBQUNHLElBQUk7Ozs7Ozt3QkFDM0I7ZUFWRGIsU0FBUyxDQUFDVSxPQUFPLENBQUNHLElBQUk7Ozs7b0JBVzFCOzs7Ozs7WUFDRixDQUNOO0NBQ0g7QUFwQnVCZCxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy9UaGUgbG9naW4gcGFnZSBuZWVkIHRvIGJlIHJlbmRlciBvbiB0aGUgc2VydmVyXHJcbmltcG9ydCB7IGdldFByb3ZpZGVycywgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbih7IHByb3ZpZGVycyB9KSB7XHJcbiAgY29uc29sZS5sb2coXCJQUk9WSURFUiBGUk9NIE5FWFQgQVVUSEVOXCIsIHByb3ZpZGVycyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWJsYWNrIG1pbi1oLXNjcmVlbiB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTUyIG1iLTVcIiBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vOXhsXCIgYWx0PVwiXCIgLz5cclxuICAgICAgPGRpdiBrZXk9e3Byb3ZpZGVycy5zcG90aWZ5Lm5hbWV9PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjMThEODYwXSB0ZXh0LXdoaXRlIHAtNVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICBzaWduSW4ocHJvdmlkZXJzLnNwb3RpZnkuaWQsIHtcclxuICAgICAgICAgICAgICBjYWxsYmFja1VybDogXCIvXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9naW4gd2l0aCB7cHJvdmlkZXJzLnNwb3RpZnkubmFtZX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IHByb3ZpZGVycyA9IGF3YWl0IGdldFByb3ZpZGVycygpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvdmlkZXJzLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzaWduSW4iLCJMb2dpbiIsInByb3ZpZGVycyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJidXR0b24iLCJvbkNsaWNrIiwic3BvdGlmeSIsImlkIiwiY2FsbGJhY2tVcmwiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fken%2FDocuments%2FNextJs%2Fspotify%2Fpages%2Flogin.js&page=%2Flogin!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
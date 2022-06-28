"use strict";
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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n//The login page need to be render on the server\n\nfunction Login({ providers  }) {\n    console.log(\"PROVIDER FROM NEXT AUTHEN\", providers);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center bg-black min-h-screen w-full justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-52 mb-5\",\n                src: \"https://links.papareact.com/9xl\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/ken/Documents/NextJs/spotify/pages/login.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-[#18D860] text-white p-5\",\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(providers.spotify.id, {\n                            callbackUrl: \"/\"\n                        })\n                    ,\n                    children: [\n                        \"Login with \",\n                        providers.spotify.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ken/Documents/NextJs/spotify/pages/login.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, providers.spotify.name, false, {\n                fileName: \"/Users/ken/Documents/NextJs/spotify/pages/login.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ken/Documents/NextJs/spotify/pages/login.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n};\nasync function getServerSideProps() {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQURBLGdEQUFnRDtBQUNPO0FBQ3hDLFNBQVNFLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUMzQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLEVBQUVGLFNBQVMsQ0FBQyxDQUFDO0lBRXBELHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx3RUFBd0U7OzBCQUNyRiw4REFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLFdBQVc7Z0JBQUNFLEdBQUcsRUFBQyxpQ0FBaUM7Z0JBQUNDLEdBQUcsRUFBQyxFQUFFOzs7OztvQkFBRzswQkFDMUUsOERBQUNKLEtBQUc7MEJBQ0YsNEVBQUNLLFFBQU07b0JBQ0xKLFNBQVMsRUFBQyw2QkFBNkI7b0JBQ3ZDSyxPQUFPLEVBQUUsSUFDUFgsdURBQU0sQ0FBQ0UsU0FBUyxDQUFDVSxPQUFPLENBQUNDLEVBQUUsRUFBRTs0QkFDM0JDLFdBQVcsRUFBRSxHQUFHO3lCQUNqQixDQUFDO29CQUFBOzt3QkFFTCxhQUNZO3dCQUFDWixTQUFTLENBQUNVLE9BQU8sQ0FBQ0csSUFBSTs7Ozs7O3dCQUMzQjtlQVZEYixTQUFTLENBQUNVLE9BQU8sQ0FBQ0csSUFBSTs7OztvQkFXMUI7Ozs7OztZQUNGLENBQ047Q0FDSDtBQUVNLGVBQWVDLGtCQUFrQixHQUFHO0lBQ3pDLE1BQU1kLFNBQVMsR0FBRyxNQUFNSCw2REFBWSxFQUFFO0lBRXRDLE9BQU87UUFDTGtCLEtBQUssRUFBRTtZQUNMZixTQUFTO1NBQ1Y7S0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5Ly4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1RoZSBsb2dpbiBwYWdlIG5lZWQgdG8gYmUgcmVuZGVyIG9uIHRoZSBzZXJ2ZXJcclxuaW1wb3J0IHsgZ2V0UHJvdmlkZXJzLCBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHsgcHJvdmlkZXJzIH0pIHtcclxuICBjb25zb2xlLmxvZyhcIlBST1ZJREVSIEZST00gTkVYVCBBVVRIRU5cIiwgcHJvdmlkZXJzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctYmxhY2sgbWluLWgtc2NyZWVuIHctZnVsbCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT1cInctNTIgbWItNVwiIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS85eGxcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICA8ZGl2IGtleT17cHJvdmlkZXJzLnNwb3RpZnkubmFtZX0+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyMxOEQ4NjBdIHRleHQtd2hpdGUgcC01XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIHNpZ25Jbihwcm92aWRlcnMuc3BvdGlmeS5pZCwge1xyXG4gICAgICAgICAgICAgIGNhbGxiYWNrVXJsOiBcIi9cIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMb2dpbiB3aXRoIHtwcm92aWRlcnMuc3BvdGlmeS5uYW1lfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm92aWRlcnMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbImdldFByb3ZpZGVycyIsInNpZ25JbiIsIkxvZ2luIiwicHJvdmlkZXJzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcG90aWZ5IiwiaWQiLCJjYWxsYmFja1VybCIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();
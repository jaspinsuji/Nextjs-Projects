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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"center\": \"Home_center__4BFgC\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"thirteen\": \"Home_thirteen__cMI_k\",\n\t\"rotate\": \"Home_rotate____XsI\",\n\t\"content\": \"Home_content__Zy02X\",\n\t\"vercelLogo\": \"Home_vercelLogo__dtSk9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtYXBwLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz8yNTRkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX180MU93a1wiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX3N1UEVSXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fR3hRODVcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX19fTHBMMVwiLFxuXHRcImNlbnRlclwiOiBcIkhvbWVfY2VudGVyX180QkZnQ1wiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzI3X3RiXCIsXG5cdFwidGhpcnRlZW5cIjogXCJIb21lX3RoaXJ0ZWVuX19jTUlfa1wiLFxuXHRcInJvdGF0ZVwiOiBcIkhvbWVfcm90YXRlX19fX1hzSVwiLFxuXHRcImNvbnRlbnRcIjogXCJIb21lX2NvbnRlbnRfX1p5MDJYXCIsXG5cdFwidmVyY2VsTG9nb1wiOiBcIkhvbWVfdmVyY2VsTG9nb19fZHRTazlcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst User = ()=>{\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Signed in as \",\n                    session.user.email,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\components\\\\User.js\",\n                        lineNumber: 8,\n                        columnNumber: 55\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                        className: \"bg-blue-500 text-white px-6 py-2 rounded-md hover:brightness-105\",\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\components\\\\User.js\",\n                        lineNumber: 9,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\components\\\\User.js\",\n                lineNumber: 7,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(),\n                className: \"bg-blue-500 text-white px-6 py-2 rounded-md hover:brightness-105\",\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\components\\\\User.js\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\components\\\\User.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE2RDtBQUM3RCxNQUFNRyxPQUFPLElBQU07SUFDZixNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRSxHQUFHTCwyREFBVUE7SUFDcEMsSUFBSUssU0FBUztRQUNULHFCQUNJO3NCQUNJLDRFQUFDQzs7b0JBQUk7b0JBQ2FELFFBQVFFLElBQUksQ0FBQ0MsS0FBSztvQkFBQztrQ0FBQyw4REFBQ0M7Ozs7O2tDQUNuQyw4REFBQ0M7d0JBQU9DLFNBQVMsSUFBTVQsd0RBQU9BO3dCQUFJVSxXQUFVO2tDQUFtRTs7Ozs7Ozs7Ozs7OztJQUkvSCxDQUFDO0lBQ0QscUJBQ0k7a0JBQ0ksNEVBQUNOO3NCQUVHLDRFQUFDSTtnQkFBT0MsU0FBUyxJQUFNVix1REFBTUE7Z0JBQUlXLFdBQVU7MEJBQW1FOzs7Ozs7Ozs7Ozs7QUFJOUg7QUFDQSxpRUFBZVQsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXV0aC1hcHAvLi9jb21wb25lbnRzL1VzZXIuanM/ZDZmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcclxuY29uc3QgVXNlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICBTaWduZWQgaW4gYXMge3Nlc3Npb24udXNlci5lbWFpbH0gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9IGNsYXNzTmFtZT0nYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC02IHB5LTIgcm91bmRlZC1tZCBob3ZlcjpicmlnaHRuZXNzLTEwNSc+U2lnbiBvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogTm90IHNpZ25lZCBpbiA8YnIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfSBjbGFzc05hbWU9J2JnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNiBweS0yIHJvdW5kZWQtbWQgaG92ZXI6YnJpZ2h0bmVzcy0xMDUnPlNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsIlVzZXIiLCJkYXRhIiwic2Vzc2lvbiIsImRpdiIsInVzZXIiLCJlbWFpbCIsImJyIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/User.js\n");

/***/ }),

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\n\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"flex justify-between p-5 text-sm text-gray-700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"About\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\components\\\\header.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Store\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\components\\\\header.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\components\\\\header.tsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Gmail\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\components\\\\header.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Images\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\components\\\\header.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\components\\\\header.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\components\\\\header.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\components\\\\header.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDQTtBQUV6QixTQUFTRSxTQUFTO0lBQ2hCLHFCQUNFLDhEQUFDQztRQUFPQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBTzs7Ozs7O2tDQUNwQiw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQU87Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQU87Ozs7OztrQ0FDcEIsOERBQUNFO3dCQUFFRixXQUFVO2tDQUFPOzs7Ozs7a0NBQ3BCLDhEQUFDSCw2Q0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpCO0FBRUEsaUVBQWVDLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtYXBwLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Pzg3MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCJcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIHAtNSB0ZXh0LXNtIHRleHQtZ3JheS03MDAnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtNCBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2xpbmsnPkFib3V0PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2xpbmsnPlN0b3JlPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtNCBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2xpbmsnPkdtYWlsPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2xpbmsnPkltYWdlczwvcD5cclxuICAgICAgICAgICAgPFVzZXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVXNlciIsIkhlYWRlciIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ \"./components/header.tsx\");\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\pages\\\\index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\pages\\\\index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\pages\\\\index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\pages\\\\index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\pages\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\pages\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().center),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Welcome to the Next Js Hello World \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\pages\\\\index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN PC\\\\Desktop\\\\Projects\\\\Nextjs-Projects\\\\next-auth-app-udemy\\\\pages\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUtNQTtBQUxzQjtBQUVrQjtBQUNMO0FBSTFCLFNBQVNJLE9BQU87SUFDN0IscUJBQ0U7OzBCQUNFLDhEQUFDSCxrREFBSUE7O2tDQUNILDhEQUFDSTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDUiwwREFBTUE7Ozs7OzBCQUNMLDhEQUFDUztnQkFBSUMsV0FBV1gsdUVBQWE7MEJBQzNCLDRFQUFDYTs4QkFBRzs7Ozs7Ozs7Ozs7OztBQUlkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtYXBwLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8SGVhZGVyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgIDxoMT5XZWxjb21lIHRvIHRoZSBOZXh0IEpzIEhlbGxvIFdvcmxkIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwic3R5bGVzIiwiSGVhZGVyIiwiSG9tZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJjZW50ZXIiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
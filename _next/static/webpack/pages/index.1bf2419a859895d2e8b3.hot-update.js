self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
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

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Newfolder_cv_and_portfolio_portfolio_website_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Newfolder\\cv and portfolio\\portfolio_website-main\\src\\components\\Projects\\Projects.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Newfolder_cv_and_portfolio_portfolio_website_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Projects = function Projects() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.Section, {
    nopadding: true,
    id: "projects",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {
      main: true,
      style: {
        paddingTop: '0px'
      },
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.projects.map(function (p, i) {
        // const ix = i % 2 != 0;
        var additionalImageStyles = p.additionalImageStyles || {};
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.RevProjectContainer, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Img, {
            src: p.image,
            style: _objectSpread({
              order: '0'
            }, additionalImageStyles)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            style: {
              order: '1'
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TitleContent, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.HeaderThree, {
                title: true,
                children: p.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.RevBadgeContainer, {
                children: p.badges.map(function (badge) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.RevBadge, {
                    children: badge
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.CardInfo, {
              className: "card-info",
              children: p.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TitleContent, {
                style: {
                  marginTop: '20px'
                },
                children: "Stack"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TagList, {
                children: p.tags.map(function (t, i) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Tag, {
                    children: t
                  }, i, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 48
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.UtilityList, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.ExternalLinks, {
                href: p.visit.indexOf('google') > -1 ? ".".concat(p.image) : p.visit,
                target: "_blank",
                children: "See More"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsInBhZGRpbmdUb3AiLCJwcm9qZWN0cyIsInAiLCJpIiwiYWRkaXRpb25hbEltYWdlU3R5bGVzIiwiaW1hZ2UiLCJvcmRlciIsInRpdGxlIiwiYmFkZ2VzIiwibWFwIiwiYmFkZ2UiLCJkZXNjcmlwdGlvbiIsIm1hcmdpblRvcCIsInRhZ3MiLCJ0IiwidmlzaXQiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFFQTtBQWdCQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsc0JBQ2IsOERBQUMsNkRBQUQ7QUFBUyxhQUFTLE1BQWxCO0FBQW1CLE1BQUUsRUFBQyxVQUF0QjtBQUFBLDRCQUVJLDhEQUFDLGtFQUFEO0FBQWMsVUFBSSxNQUFsQjtBQUFtQixXQUFLLEVBQUU7QUFBRUMsa0JBQVUsRUFBRTtBQUFkLE9BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFLSTtBQUFBLGdCQUNLQyw4REFBQSxDQUFhLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3BCO0FBQ0EsWUFBTUMscUJBQXFCLEdBQUdGLENBQUMsQ0FBQ0UscUJBQUYsSUFBMkIsRUFBekQ7QUFDQSw0QkFDSSw4REFBQyxnRUFBRDtBQUFBLGtDQUNJLDhEQUFDLGdEQUFEO0FBQ0ksZUFBRyxFQUFFRixDQUFDLENBQUNHLEtBRFg7QUFFSSxpQkFBSztBQUNEQyxtQkFBSyxFQUFFO0FBRE4sZUFFRUYscUJBRkY7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBU0k7QUFDSSxpQkFBSyxFQUFFO0FBQ0hFLG1CQUFLLEVBQUU7QUFESixhQURYO0FBQUEsb0NBS0ksOERBQUMseURBQUQ7QUFBQSxzQ0FDSSw4REFBQyx3REFBRDtBQUFhLHFCQUFLLE1BQWxCO0FBQUEsMEJBQW9CSixDQUFDLENBQUNLO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSSw4REFBQyw4REFBRDtBQUFBLDBCQUNLTCxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsR0FBVCxDQUFhLFVBQUNDLEtBQUQ7QUFBQSxzQ0FDViw4REFBQyxxREFBRDtBQUFBLDhCQUFXQTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRFU7QUFBQSxpQkFBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFPSSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSixlQWNJLDhEQUFDLHFEQUFEO0FBQVUsdUJBQVMsRUFBQyxXQUFwQjtBQUFBLHdCQUFpQ1IsQ0FBQyxDQUFDUztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRKLGVBZUk7QUFBQSxzQ0FDSSw4REFBQyx5REFBRDtBQUFjLHFCQUFLLEVBQUU7QUFBRUMsMkJBQVMsRUFBRTtBQUFiLGlCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLDhEQUFDLG9EQUFEO0FBQUEsMEJBQ0tWLENBQUMsQ0FBQ1csSUFBRixDQUFPSixHQUFQLENBQVcsVUFBQ0ssQ0FBRCxFQUFJWCxDQUFKLEVBQVU7QUFDbEIsc0NBQU8sOERBQUMsZ0RBQUQ7QUFBQSw4QkFBY1c7QUFBZCxxQkFBVVgsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFQO0FBQ0gsaUJBRkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmSixlQXVCSSw4REFBQyx3REFBRDtBQUFBLHFDQUNJLDhEQUFDLDBEQUFEO0FBQWUsb0JBQUksRUFBRUQsQ0FBQyxDQUFDYSxLQUFGLENBQVFDLE9BQVIsQ0FBZ0IsUUFBaEIsSUFBNEIsQ0FBQyxDQUE3QixjQUFxQ2QsQ0FBQyxDQUFDRyxLQUF2QyxJQUFpREgsQ0FBQyxDQUFDYSxLQUF4RTtBQUErRSxzQkFBTSxFQUFDLFFBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKO0FBQUEsV0FBMEJaLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUEwQ0gsT0E3Q0E7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGE7QUFBQSxDQUFqQjs7S0FBTUosUTtBQXlETiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYmYyNDE5YTg1OTg5NWQyZThiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge1xuICAgIEJsb2dDYXJkLFxuICAgIENhcmRJbmZvLFxuICAgIEV4dGVybmFsTGlua3MsXG4gICAgR3JpZENvbnRhaW5lcixcbiAgICBIZWFkZXJUaHJlZSxcbiAgICBIcixcbiAgICBUYWcsXG4gICAgVGFnTGlzdCxcbiAgICBUaXRsZUNvbnRlbnQsXG4gICAgVXRpbGl0eUxpc3QsXG4gICAgSW1nLFxuICAgIFJldlByb2plY3RDb250YWluZXIsXG4gICAgUmV2QmFkZ2VDb250YWluZXIsXG4gICAgUmV2QmFkZ2UsXG59IGZyb20gJy4vUHJvamVjdHNTdHlsZXMnXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxuICAgIDxTZWN0aW9uIG5vcGFkZGluZyBpZD0ncHJvamVjdHMnPlxuICAgICAgICB7LyogPFNlY3Rpb25EaXZpZGVyIC8+ICovfVxuICAgICAgICA8U2VjdGlvblRpdGxlIG1haW4gc3R5bGU9e3sgcGFkZGluZ1RvcDogJzBweCcgfX0+XG4gICAgICAgICAgICBQcm9qZWN0c1xuICAgICAgICA8L1NlY3Rpb25UaXRsZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHAsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBpeCA9IGkgJSAyICE9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkaXRpb25hbEltYWdlU3R5bGVzID0gcC5hZGRpdGlvbmFsSW1hZ2VTdHlsZXMgfHwge31cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8UmV2UHJvamVjdENvbnRhaW5lciBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hZGRpdGlvbmFsSW1hZ2VTdHlsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogJzEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlclRocmVlIHRpdGxlPntwLnRpdGxlfTwvSGVhZGVyVGhyZWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZCYWRnZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwLmJhZGdlcy5tYXAoKGJhZGdlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldkJhZGdlPntiYWRnZX08L1JldkJhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2QmFkZ2VDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGl0bGVDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSW5mbyBjbGFzc05hbWU9J2NhcmQtaW5mbyc+e3AuZGVzY3JpcHRpb259PC9DYXJkSW5mbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVDb250ZW50IHN0eWxlPXt7IG1hcmdpblRvcDogJzIwcHgnIH19PlN0YWNrPC9UaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3AudGFncy5tYXAoKHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRhZyBrZXk9e2l9Pnt0fTwvVGFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFnTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXRpbGl0eUxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3AudmlzaXQuaW5kZXhPZignZ29vZ2xlJykgPiAtMSA/IGAuJHtwLmltYWdlfWAgOiBwLnZpc2l0fSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWUgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0V4dGVybmFsTGlua3M+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8RXh0ZXJuYWxMaW5rcyBocmVmPXtwLnNvdXJjZX0gdGFyZ2V0PVwiX2JsYW5rXCI+U291cmNlPC9FeHRlcm5hbExpbmtzPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1V0aWxpdHlMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmV2UHJvamVjdENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9TZWN0aW9uPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
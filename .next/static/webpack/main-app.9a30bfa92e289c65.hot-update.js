"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("main-app",{

/***/ "(app-pages-browser)/./node_modules/next/dist/client/app-bootstrap.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/client/app-bootstrap.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval(__webpack_require__.ts("/**\n * Before starting the Next.js runtime and requiring any module, we need to make\n * sure the following scripts are executed in the correct order:\n * - Polyfills\n * - next/script with `beforeInteractive` strategy\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"appBootstrap\", ({\n    enumerable: true,\n    get: function() {\n        return appBootstrap;\n    }\n}));\nconst version = \"15.2.3\";\nwindow.next = {\n    version,\n    appDir: true\n};\nfunction loadScriptsInSequence(scripts, hydrate) {\n    if (!scripts || !scripts.length) {\n        return hydrate();\n    }\n    return scripts.reduce((promise, param)=>{\n        let [src, props] = param;\n        return promise.then(()=>{\n            return new Promise((resolve, reject)=>{\n                const el = document.createElement('script');\n                if (props) {\n                    for(const key in props){\n                        if (key !== 'children') {\n                            el.setAttribute(key, props[key]);\n                        }\n                    }\n                }\n                if (src) {\n                    el.src = src;\n                    el.onload = ()=>resolve();\n                    el.onerror = reject;\n                } else if (props) {\n                    el.innerHTML = props.children;\n                    setTimeout(resolve);\n                }\n                document.head.appendChild(el);\n            });\n        });\n    }, Promise.resolve()).catch((err)=>{\n        console.error(err);\n    // Still try to hydrate even if there's an error.\n    }).then(()=>{\n        hydrate();\n    });\n}\nfunction appBootstrap(hydrate) {\n    loadScriptsInSequence(self.__next_s, ()=>{\n        // If the static shell is being debugged, skip hydration if the\n        // `__nextppronly` query is present. This is only enabled when the\n        // environment variable `__NEXT_EXPERIMENTAL_STATIC_SHELL_DEBUGGING` is\n        // set to `1`. Otherwise the following is optimized out.\n        if (false) {}\n        hydrate();\n    });\n}\nif ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {\n    Object.defineProperty(exports.default, '__esModule', {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=app-bootstrap.js.map\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2FwcC1ib290c3RyYXAuanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0NBS0M7Ozs7Z0RBcURlQTs7O2VBQUFBOzs7QUFuRGhCLE1BQU1DLFVBQVVDLFFBQVFDO0FBRXhCRSxPQUFPQyxJQUFJLEdBQUc7SUFDWkw7SUFDQU0sUUFBUTtBQUNWO0FBRUEsU0FBU0Msc0JBQ1BDLE9BQXdELEVBQ3hEQyxPQUFtQjtJQUVuQixJQUFJLENBQUNELFdBQVcsQ0FBQ0EsUUFBUUUsTUFBTSxFQUFFO1FBQy9CLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPRCxRQUNKRyxNQUFNLENBQUMsQ0FBQ0MsU0FBQUE7WUFBUyxDQUFDQyxLQUFLQyxNQUFNO1FBQzVCLE9BQU9GLFFBQVFHLElBQUksQ0FBQztZQUNsQixPQUFPLElBQUlDLFFBQWMsQ0FBQ0MsU0FBU0M7Z0JBQ2pDLE1BQU1DLEtBQUtDLFNBQVNDLGFBQWEsQ0FBQztnQkFFbEMsSUFBSVAsT0FBTztvQkFDVCxJQUFLLE1BQU1RLE9BQU9SLE1BQU87d0JBQ3ZCLElBQUlRLFFBQVEsWUFBWTs0QkFDdEJILEdBQUdJLFlBQVksQ0FBQ0QsS0FBS1IsS0FBSyxDQUFDUSxJQUFJO3dCQUNqQztvQkFDRjtnQkFDRjtnQkFFQSxJQUFJVCxLQUFLO29CQUNQTSxHQUFHTixHQUFHLEdBQUdBO29CQUNUTSxHQUFHSyxNQUFNLEdBQUcsSUFBTVA7b0JBQ2xCRSxHQUFHTSxPQUFPLEdBQUdQO2dCQUNmLE9BQU8sSUFBSUosT0FBTztvQkFDaEJLLEdBQUdPLFNBQVMsR0FBR1osTUFBTWEsUUFBUTtvQkFDN0JDLFdBQVdYO2dCQUNiO2dCQUVBRyxTQUFTUyxJQUFJLENBQUNDLFdBQVcsQ0FBQ1g7WUFDNUI7UUFDRjtJQUNGLEdBQUdILFFBQVFDLE9BQU8sSUFDakJjLEtBQUssQ0FBQyxDQUFDQztRQUNOQyxRQUFRQyxLQUFLLENBQUNGO0lBQ2QsaURBQWlEO0lBQ25ELEdBQ0NqQixJQUFJLENBQUM7UUFDSk47SUFDRjtBQUNKO0FBRU8sU0FBU1YsYUFBYVUsT0FBbUI7SUFDOUNGLHNCQUF1QjRCLEtBQWFDLFFBQVEsRUFBRTtRQUM1QywrREFBK0Q7UUFDL0Qsa0VBQWtFO1FBQ2xFLHVFQUF1RTtRQUN2RSx3REFBd0Q7UUFDeEQsSUFBSW5DLEtBQThELEVBQUUsRUFXbkU7UUFFRFE7SUFDRjtBQUNGIiwic291cmNlcyI6WyIvaG9tZS9zcmMvY2xpZW50L2FwcC1ib290c3RyYXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCZWZvcmUgc3RhcnRpbmcgdGhlIE5leHQuanMgcnVudGltZSBhbmQgcmVxdWlyaW5nIGFueSBtb2R1bGUsIHdlIG5lZWQgdG8gbWFrZVxuICogc3VyZSB0aGUgZm9sbG93aW5nIHNjcmlwdHMgYXJlIGV4ZWN1dGVkIGluIHRoZSBjb3JyZWN0IG9yZGVyOlxuICogLSBQb2x5ZmlsbHNcbiAqIC0gbmV4dC9zY3JpcHQgd2l0aCBgYmVmb3JlSW50ZXJhY3RpdmVgIHN0cmF0ZWd5XG4gKi9cblxuY29uc3QgdmVyc2lvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9WRVJTSU9OXG5cbndpbmRvdy5uZXh0ID0ge1xuICB2ZXJzaW9uLFxuICBhcHBEaXI6IHRydWUsXG59XG5cbmZ1bmN0aW9uIGxvYWRTY3JpcHRzSW5TZXF1ZW5jZShcbiAgc2NyaXB0czogW3NyYzogc3RyaW5nLCBwcm9wczogeyBbcHJvcDogc3RyaW5nXTogYW55IH1dW10sXG4gIGh5ZHJhdGU6ICgpID0+IHZvaWRcbikge1xuICBpZiAoIXNjcmlwdHMgfHwgIXNjcmlwdHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGh5ZHJhdGUoKVxuICB9XG5cbiAgcmV0dXJuIHNjcmlwdHNcbiAgICAucmVkdWNlKChwcm9taXNlLCBbc3JjLCBwcm9wc10pID0+IHtcbiAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJykge1xuICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHByb3BzW2tleV0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICBlbC5zcmMgPSBzcmNcbiAgICAgICAgICAgIGVsLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoKVxuICAgICAgICAgICAgZWwub25lcnJvciA9IHJlamVjdFxuICAgICAgICAgIH0gZWxzZSBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IHByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgIC8vIFN0aWxsIHRyeSB0byBoeWRyYXRlIGV2ZW4gaWYgdGhlcmUncyBhbiBlcnJvci5cbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGh5ZHJhdGUoKVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBCb290c3RyYXAoaHlkcmF0ZTogKCkgPT4gdm9pZCkge1xuICBsb2FkU2NyaXB0c0luU2VxdWVuY2UoKHNlbGYgYXMgYW55KS5fX25leHRfcywgKCkgPT4ge1xuICAgIC8vIElmIHRoZSBzdGF0aWMgc2hlbGwgaXMgYmVpbmcgZGVidWdnZWQsIHNraXAgaHlkcmF0aW9uIGlmIHRoZVxuICAgIC8vIGBfX25leHRwcHJvbmx5YCBxdWVyeSBpcyBwcmVzZW50LiBUaGlzIGlzIG9ubHkgZW5hYmxlZCB3aGVuIHRoZVxuICAgIC8vIGVudmlyb25tZW50IHZhcmlhYmxlIGBfX05FWFRfRVhQRVJJTUVOVEFMX1NUQVRJQ19TSEVMTF9ERUJVR0dJTkdgIGlzXG4gICAgLy8gc2V0IHRvIGAxYC4gT3RoZXJ3aXNlIHRoZSBmb2xsb3dpbmcgaXMgb3B0aW1pemVkIG91dC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUEVSSU1FTlRBTF9TVEFUSUNfU0hFTExfREVCVUdHSU5HID09PSAnMScpIHtcbiAgICAgIGNvbnN0IHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgICAgIGlmIChcbiAgICAgICAgc2VhcmNoLmdldCgnX19uZXh0cHByb25seScpID09PSAnZmFsbGJhY2snIHx8XG4gICAgICAgIHNlYXJjaC5nZXQoJ19fbmV4dHBwcm9ubHknKSA9PT0gJzEnXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBTa2lwcGluZyBoeWRyYXRpb24gZHVlIHRvIF9fbmV4dHBwcm9ubHk9JHtzZWFyY2guZ2V0KCdfX25leHRwcHJvbmx5Jyl9YFxuICAgICAgICApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGh5ZHJhdGUoKVxuICB9KVxufVxuIl0sIm5hbWVzIjpbImFwcEJvb3RzdHJhcCIsInZlcnNpb24iLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX1ZFUlNJT04iLCJ3aW5kb3ciLCJuZXh0IiwiYXBwRGlyIiwibG9hZFNjcmlwdHNJblNlcXVlbmNlIiwic2NyaXB0cyIsImh5ZHJhdGUiLCJsZW5ndGgiLCJyZWR1Y2UiLCJwcm9taXNlIiwic3JjIiwicHJvcHMiLCJ0aGVuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImtleSIsInNldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJpbm5lckhUTUwiLCJjaGlsZHJlbiIsInNldFRpbWVvdXQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInNlbGYiLCJfX25leHRfcyIsIl9fTkVYVF9FWFBFUklNRU5UQUxfU1RBVElDX1NIRUxMX0RFQlVHR0lORyIsInNlYXJjaCIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwiZ2V0Iiwid2FybiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/app-bootstrap.js\n"));

/***/ })

});
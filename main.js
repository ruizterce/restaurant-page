/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__
          );
        // Imports

        var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./fonts/ReggaeOne-Regular.ttf */ "./src/fonts/ReggaeOne-Regular.ttf"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_URL_IMPORT_1___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./img/welcome.jpeg */ "./src/img/welcome.jpeg"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_URL_IMPORT_2___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./img/pattern.jpeg */ "./src/img/pattern.jpeg"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        var ___CSS_LOADER_URL_REPLACEMENT_0___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_0___
          );
        var ___CSS_LOADER_URL_REPLACEMENT_1___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_1___
          );
        var ___CSS_LOADER_URL_REPLACEMENT_2___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_2___
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `@font-face {
    font-family: "Reggae One";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
    font-weight: 400;
    font-style: normal;
}

body {
    --ivory: #fdfceaff;
    --alabaster: #f5f3e7ff;
    --lion: #bd9d71ff;
    --coyote: #756c4dff;
    --beaver: #95856fff;
    --caf-noir: #3d2a15ff;
    --yellow: #fbfd00ff;
    --yellow-green: #a2c702ff;
    --avocado: #4d790cff;
    --dark-moss-green: #48640eff;
    --pakistan-green: #1d3305ff;

    font-family: "Reggae One";
    max-width: max-content;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    background-color: var(--beaver);
    background-image: linear-gradient(90deg,
            var(--alabaster) 44.64%,
            var(--beaver) 44.64%,
            var(--beaver) 46.43%,
            var(--pakistan-green) 46.43%,
            var(--pakistan-green) 48.21%,
            var(--beaver) 48.21%,
            var(--beaver) 50%,
            var(--alabaster) 50%,
            var(--alabaster) 94.64%,
            var(--beaver) 94.64%,
            var(--beaver) 96.43%,
            var(--pakistan-green) 96.43%,
            var(--pakistan-green) 98.21%,
            var(--beaver) 98.21%,
            var(--beaver) 100%);
    background-size: 56px 56px;
    box-shadow: 3px 0px 5px var(--caf-noir), -3px 0px 5px var(--caf-noir);
}

header {
    position: fixed;
    width: auto;
    top: 1.6vh;
    left: 10%;
    right: 10%;
    display: flex;
    justify-content: center;

    nav {
        width: 70vh;
        display: flex;
        justify-content: space-between;

        button {
            font-family: "Reggae One";
            font-size: 1.8vh;
            font-weight: 500;
            color: var(--caf-noir);
            background-color: var(--alabaster);
            padding: 1.3vh 5vh;
            border: solid #3d2a15 3px;
            box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
            border-radius: 6px;
            transition: padding 1000ms;
            transform: translateY(0);
            display: flex;
            flex-direction: row;
            align-items: center;
            cursor: pointer;
            text-transform: uppercase;
        }

        button:hover {
            transition: 1000ms;
            padding: 1.3vh 7vh;
            transform: translateY(-0px);
            background-color: var(--ivory);
            color: var(--pakistan-green);
            border: solid 3px var(--pakistan-green);
        }
    }
}

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vh;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    h1 {
        text-align: center;
        font-size: 5.5vh;
        color: var(--ivory);
        padding: 0 2.5vh;
        border-radius: 6vh;
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
        background-size: 60vh 60vh;
        background-position: 40% 60%;
        text-shadow: 0px 0px 8px var(--caf-noir);
    }

    h1.home {
        margin: 29vh 0 -2.4vh;
    }

    h2.home {
        margin-bottom: 1vh;
        font-size: 1.7vh;
        color: var(--alabaster);
        background-color: var(--caf-noir);
        opacity: 90%;
        border-radius: 1.7vh;
        padding: 0vh 1vh;
    }

    p.home {
        font-size: 1.6vh;
        text-align: justify;
        text-indent: 6vh;
        margin: 0;
        padding: 1vh;
        width: 55%;
        color: var(--caf-noir);
        line-height: 1.8vh;
    }

    h1.menu {
        margin: 24vh 0 2vh;
    }

    div.menu#dishArea {
        color: var(--caf-noir);
        width: 52vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5vh 3vh;

        .menu.dish {
            display: flex;

            .iconWrapper {
                img {
                    width: 8.5vh;
                    height: 8.5vh;
                    margin-right: 1.5vh;
                    filter: invert(15%) sepia(13%) saturate(2020%) hue-rotate(351deg) brightness(95%) contrast(93%);
                }
            }

            h4 {
                margin: 0px;
                font-size: 1.6vh;
            }

            p {
                margin: 0px;
                font-size: 1.2vh;
                line-height: 1.2vh;
                text-align: left;
            }
        }
    }

    h1.about {
        margin: 24vh 0 0vh;
    }

    div.about#chefArea {
        position: relative;
        left: 1vh;
        color: var(--caf-noir);
        width: 55vh;

        .about.chef {
            display: flex;
            margin: 0.7vh 0;

            .iconWrapper {
                img {
                    width: 12vh;
                    height: 12vh;
                    margin-right: 1.5vh;
                }
            }

            h3 {
                margin: 0 0 -0.3vh;
                font-size: 2.3vh;
            }

            h4 {
                margin: 0px;
                font-size: 1.8vh;
            }

            p {
                margin: 0px;
                font-size: 1.3vh;
                line-height: 1.2vh;
                text-align: left;
            }
        }
    }
}

footer {
    position: absolute;
    padding: 5px;
    right: 0px;
    bottom: 10px;
    font-size: 1.3vh;
    background-color: var(--alabaster);
    border-radius: 5px 0 0 5px;
    box-shadow: -2px 2px 10px var(--caf-noir);

    a {
        text-decoration: none;
        color: var(--caf-noir);

        p {
            margin: 0;
            text-align: end;
            line-height: 1.3vh;
        }
    }

    a:after {
        text-decoration: none;
        color: var(--coyote);
    }
}`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "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",
            sourcesContent: [
              '@font-face {\n    font-family: "Reggae One";\n    src: url("./fonts/ReggaeOne-Regular.ttf") format("truetype");\n    font-weight: 400;\n    font-style: normal;\n}\n\nbody {\n    --ivory: #fdfceaff;\n    --alabaster: #f5f3e7ff;\n    --lion: #bd9d71ff;\n    --coyote: #756c4dff;\n    --beaver: #95856fff;\n    --caf-noir: #3d2a15ff;\n    --yellow: #fbfd00ff;\n    --yellow-green: #a2c702ff;\n    --avocado: #4d790cff;\n    --dark-moss-green: #48640eff;\n    --pakistan-green: #1d3305ff;\n\n    font-family: "Reggae One";\n    max-width: max-content;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    background-color: var(--beaver);\n    background-image: linear-gradient(90deg,\n            var(--alabaster) 44.64%,\n            var(--beaver) 44.64%,\n            var(--beaver) 46.43%,\n            var(--pakistan-green) 46.43%,\n            var(--pakistan-green) 48.21%,\n            var(--beaver) 48.21%,\n            var(--beaver) 50%,\n            var(--alabaster) 50%,\n            var(--alabaster) 94.64%,\n            var(--beaver) 94.64%,\n            var(--beaver) 96.43%,\n            var(--pakistan-green) 96.43%,\n            var(--pakistan-green) 98.21%,\n            var(--beaver) 98.21%,\n            var(--beaver) 100%);\n    background-size: 56px 56px;\n    box-shadow: 3px 0px 5px var(--caf-noir), -3px 0px 5px var(--caf-noir);\n}\n\nheader {\n    position: fixed;\n    width: auto;\n    top: 1.6vh;\n    left: 10%;\n    right: 10%;\n    display: flex;\n    justify-content: center;\n\n    nav {\n        width: 70vh;\n        display: flex;\n        justify-content: space-between;\n\n        button {\n            font-family: "Reggae One";\n            font-size: 1.8vh;\n            font-weight: 500;\n            color: var(--caf-noir);\n            background-color: var(--alabaster);\n            padding: 1.3vh 5vh;\n            border: solid #3d2a15 3px;\n            box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;\n            border-radius: 6px;\n            transition: padding 1000ms;\n            transform: translateY(0);\n            display: flex;\n            flex-direction: row;\n            align-items: center;\n            cursor: pointer;\n            text-transform: uppercase;\n        }\n\n        button:hover {\n            transition: 1000ms;\n            padding: 1.3vh 7vh;\n            transform: translateY(-0px);\n            background-color: var(--ivory);\n            color: var(--pakistan-green);\n            border: solid 3px var(--pakistan-green);\n        }\n    }\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    width: 100vh;\n    background-image: url(./img/welcome.jpeg);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    h1 {\n        text-align: center;\n        font-size: 5.5vh;\n        color: var(--ivory);\n        padding: 0 2.5vh;\n        border-radius: 6vh;\n        background-image: url("./img/pattern.jpeg");\n        background-size: 60vh 60vh;\n        background-position: 40% 60%;\n        text-shadow: 0px 0px 8px var(--caf-noir);\n    }\n\n    h1.home {\n        margin: 29vh 0 -2.4vh;\n    }\n\n    h2.home {\n        margin-bottom: 1vh;\n        font-size: 1.7vh;\n        color: var(--alabaster);\n        background-color: var(--caf-noir);\n        opacity: 90%;\n        border-radius: 1.7vh;\n        padding: 0vh 1vh;\n    }\n\n    p.home {\n        font-size: 1.6vh;\n        text-align: justify;\n        text-indent: 6vh;\n        margin: 0;\n        padding: 1vh;\n        width: 55%;\n        color: var(--caf-noir);\n        line-height: 1.8vh;\n    }\n\n    h1.menu {\n        margin: 24vh 0 2vh;\n    }\n\n    div.menu#dishArea {\n        color: var(--caf-noir);\n        width: 52vh;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 0.5vh 3vh;\n\n        .menu.dish {\n            display: flex;\n\n            .iconWrapper {\n                img {\n                    width: 8.5vh;\n                    height: 8.5vh;\n                    margin-right: 1.5vh;\n                    filter: invert(15%) sepia(13%) saturate(2020%) hue-rotate(351deg) brightness(95%) contrast(93%);\n                }\n            }\n\n            h4 {\n                margin: 0px;\n                font-size: 1.6vh;\n            }\n\n            p {\n                margin: 0px;\n                font-size: 1.2vh;\n                line-height: 1.2vh;\n                text-align: left;\n            }\n        }\n    }\n\n    h1.about {\n        margin: 24vh 0 0vh;\n    }\n\n    div.about#chefArea {\n        position: relative;\n        left: 1vh;\n        color: var(--caf-noir);\n        width: 55vh;\n\n        .about.chef {\n            display: flex;\n            margin: 0.7vh 0;\n\n            .iconWrapper {\n                img {\n                    width: 12vh;\n                    height: 12vh;\n                    margin-right: 1.5vh;\n                }\n            }\n\n            h3 {\n                margin: 0 0 -0.3vh;\n                font-size: 2.3vh;\n            }\n\n            h4 {\n                margin: 0px;\n                font-size: 1.8vh;\n            }\n\n            p {\n                margin: 0px;\n                font-size: 1.3vh;\n                line-height: 1.2vh;\n                text-align: left;\n            }\n        }\n    }\n}\n\nfooter {\n    position: absolute;\n    padding: 5px;\n    right: 0px;\n    bottom: 10px;\n    font-size: 1.3vh;\n    background-color: var(--alabaster);\n    border-radius: 5px 0 0 5px;\n    box-shadow: -2px 2px 10px var(--caf-noir);\n\n    a {\n        text-decoration: none;\n        color: var(--caf-noir);\n\n        p {\n            margin: 0;\n            text-align: end;\n            line-height: 1.3vh;\n        }\n    }\n\n    a:after {\n        text-decoration: none;\n        color: var(--coyote);\n    }\n}',
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        module.exports = function (cssWithMappingToString) {
          var list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function (item) {
              var content = "";
              var needLayer = typeof item[5] !== "undefined";
              if (item[4]) {
                content += "@supports (".concat(item[4], ") {");
              }
              if (item[2]) {
                content += "@media ".concat(item[2], " {");
              }
              if (needLayer) {
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
              }
              content += cssWithMappingToString(item);
              if (needLayer) {
                content += "}";
              }
              if (item[2]) {
                content += "}";
              }
              if (item[4]) {
                content += "}";
              }
              return content;
            }).join("");
          };

          // import a list of modules into the list
          list.i = function i(modules, media, dedupe, supports, layer) {
            if (typeof modules === "string") {
              modules = [[null, modules, undefined]];
            }
            var alreadyImportedModules = {};
            if (dedupe) {
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k]);
              if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
              }
              if (typeof layer !== "undefined") {
                if (typeof item[5] === "undefined") {
                  item[5] = layer;
                } else {
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
        module.exports = function (url, options) {
          if (!options) {
            options = {};
          }
          if (!url) {
            return url;
          }
          url = String(url.__esModule ? url.default : url);

          // If url is already wrapped in quotes, remove them
          if (/^['"].*['"]$/.test(url)) {
            url = url.slice(1, -1);
          }
          if (options.hash) {
            url += options.hash;
          }

          // Should url be wrapped?
          // See https://drafts.csswg.org/css-values-3/#urls
          if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
            return '"'.concat(
              url.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
              '"'
            );
          }
          return url;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );
        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        var stylesInDOM = [];
        function getIndexByIdentifier(identifier) {
          var result = -1;
          for (var i = 0; i < stylesInDOM.length; i++) {
            if (stylesInDOM[i].identifier === identifier) {
              result = i;
              break;
            }
          }
          return result;
        }
        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];
          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            var indexByIdentifier = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            };
            if (indexByIdentifier !== -1) {
              stylesInDOM[indexByIdentifier].references++;
              stylesInDOM[indexByIdentifier].updater(obj);
            } else {
              var updater = addElementStyle(obj, options);
              options.byIndex = i;
              stylesInDOM.splice(i, 0, {
                identifier: identifier,
                updater: updater,
                references: 1,
              });
            }
            identifiers.push(identifier);
          }
          return identifiers;
        }
        function addElementStyle(obj, options) {
          var api = options.domAPI(options);
          api.update(obj);
          var updater = function updater(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
            } else {
              api.remove();
            }
          };
          return updater;
        }
        module.exports = function (list, options) {
          options = options || {};
          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];
            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDOM[index].references--;
            }
            var newLastIdentifiers = modulesToDom(newList, options);
            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];
              var _index = getIndexByIdentifier(_identifier);
              if (stylesInDOM[_index].references === 0) {
                stylesInDOM[_index].updater();
                stylesInDOM.splice(_index, 1);
              }
            }
            lastIdentifiers = newLastIdentifiers;
          };
        };

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }
            memo[target] = styleTarget;
          }
          return memo[target];
        }

        /* istanbul ignore next  */
        function insertBySelector(insert, style) {
          var target = getTarget(insert);
          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function apply(styleElement, options, obj) {
          var css = "";
          if (obj.supports) {
            css += "@supports (".concat(obj.supports, ") {");
          }
          if (obj.media) {
            css += "@media ".concat(obj.media, " {");
          }
          var needLayer = typeof obj.layer !== "undefined";
          if (needLayer) {
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
          }
          css += obj.css;
          if (needLayer) {
            css += "}";
          }
          if (obj.media) {
            css += "}";
          }
          if (obj.supports) {
            css += "}";
          }
          var sourceMap = obj.sourceMap;
          if (sourceMap && typeof btoa !== "undefined") {
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
          }

          // For old IE
          /* istanbul ignore if  */
          options.styleTagTransform(css, styleElement, options.options);
        }
        function removeStyleElement(styleElement) {
          // istanbul ignore if
          if (styleElement.parentNode === null) {
            return false;
          }
          styleElement.parentNode.removeChild(styleElement);
        }

        /* istanbul ignore next  */
        function domAPI(options) {
          if (typeof document === "undefined") {
            return {
              update: function update() {},
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function styleTagTransform(css, styleElement) {
          if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
          } else {
            while (styleElement.firstChild) {
              styleElement.removeChild(styleElement.firstChild);
            }
            styleElement.appendChild(document.createTextNode(css));
          }
        }
        module.exports = styleTagTransform;

        /***/
      },

    /***/ "./src/loadAbout.js":
      /*!**************************!*\
  !*** ./src/loadAbout.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ loadAbout,
          /* harmony export */
        });
        /* harmony import */ var _img_yuki_png__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./img/yuki.png */ "./src/img/yuki.png");
        /* harmony import */ var _img_haruka_png__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./img/haruka.png */ "./src/img/haruka.png");
        /* harmony import */ var _img_ryuji_png__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./img/ryuji.png */ "./src/img/ryuji.png");

        const loadAbout = () => {
          const contentDiv = document.querySelector("#content");

          contentDiv.innerHTML = "";

          const h1Div = document.createElement("h1");
          h1Div.className = "about";
          h1Div.textContent = "About Us";

          const chefArea = document.createElement("div");
          chefArea.id = "chefArea";
          chefArea.className = "about";

          chefArea.appendChild(
            new Chef(
              _img_haruka_png__WEBPACK_IMPORTED_MODULE_1__,
              "Haruka Ishikawa",
              "Guardian of Tradition",
              "Three decades of culinary refinement.",
              "Upholder of traditional kaiseki dining and omakase experiences.",
              "Unmatched mastery in sushi and sashimi."
            ).loadDiv()
          );
          chefArea.appendChild(
            new Chef(
              _img_yuki_png__WEBPACK_IMPORTED_MODULE_0__,
              "Yuki Tanaka",
              "Minimalist Maven",
              "15 years dedicated to the culinary craft.",
              "Embracing simplicity in Japanese culinary traditions.",
              "Perfecting authentic ramen and delicate tea-infused desserts."
            ).loadDiv()
          );
          chefArea.appendChild(
            new Chef(
              _img_ryuji_png__WEBPACK_IMPORTED_MODULE_2__,
              "Ryuji Nakamura",
              "Culinary Fusion Virtuoso",
              "Trained in the kitchens of Japan and France for 16 years.",
              "Harmonious fusion of Japanese and French cuisines.",
              "Innovator of creative sushi rolls and exquisite desserts."
            ).loadDiv()
          );

          contentDiv.appendChild(h1Div);
          contentDiv.appendChild(chefArea);
        };

        class Chef {
          constructor(src, name, title, exp, style, special) {
            this.src = src;
            this.name = name;
            this.title = title;
            this.exp = exp;
            this.style = style;
            this.special = special;
          }

          //Return div node with the appropiate elements to append in #chefArea
          loadDiv() {
            const chefDiv = document.createElement("div");
            chefDiv.className = "about chef";

            const iconWrapper = document.createElement("div");
            iconWrapper.className = "menu iconWrapper";
            const img = document.createElement("img");
            img.src = this.src;
            iconWrapper.appendChild(img);

            const textWrapper = document.createElement("div");
            textWrapper.className = "about textWrapper";

            const name = document.createElement("h3");
            name.className = "about";
            name.textContent = this.name;

            const title = document.createElement("h4");
            title.className = "about";
            title.textContent = this.title;

            const exp = document.createElement("p");
            exp.className = "about";
            exp.textContent = this.exp;

            const style = document.createElement("p");
            style.className = "about";
            style.textContent = this.style;

            const special = document.createElement("p");
            special.className = "about";
            special.textContent = this.special;

            textWrapper.appendChild(name);
            textWrapper.appendChild(title);
            textWrapper.appendChild(exp);
            textWrapper.appendChild(style);
            textWrapper.appendChild(special);

            chefDiv.appendChild(iconWrapper);
            chefDiv.appendChild(textWrapper);

            return chefDiv;
          }
        }

        /***/
      },

    /***/ "./src/loadHome.js":
      /*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ loadHome,
          /* harmony export */
        });
        const loadHome = () => {
          const contentDiv = document.querySelector("#content");

          contentDiv.innerHTML = "";

          const h1Div = document.createElement("h1");
          h1Div.className = "home";
          h1Div.textContent = "Yuzu Blossom";

          const h2Div = document.createElement("h2");
          h2Div.className = "home";
          h2Div.textContent = "Japanese Fusion Cuisine";

          const p1Div = document.createElement("p");
          p1Div.className = "home";
          p1Div.textContent = `Welcome to Yuzu Blossom, where culinary innovation meets traditional Japanese craftsmanship. Nestled in the
    heart of Granada, Spain, our restaurant invites you on a gastronomic adventure like no other. From the
    moment
    you step inside, you're transported to a realm where every dish tells a story, where each bite is a symphony
    of flavors.`;

          const p2Div = document.createElement("p");
          p2Div.className = "home";
          p2Div.textContent = `Our menu is a testament to our dedication to excellence, blending the finest ingredients with creative flair
    to create a dining experience that's both familiar and exhilaratingly new. Whether you're craving the
    delicate balance of sushi rolls infused with unexpected ingredients, or the robust umami of our signature
    ramen bowls, every dish is a masterpiece crafted with care by our talented chefs.`;

          contentDiv.appendChild(h1Div);
          contentDiv.appendChild(h2Div);
          contentDiv.appendChild(p1Div);
          contentDiv.appendChild(p2Div);
        };

        /***/
      },

    /***/ "./src/loadMenu.js":
      /*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ loadMenu,
          /* harmony export */
        });
        /* harmony import */ var _img_fish_png__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./img/fish.png */ "./src/img/fish.png");
        /* harmony import */ var _img_lobster_png__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./img/lobster.png */ "./src/img/lobster.png");
        /* harmony import */ var _img_poke_png__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./img/poke.png */ "./src/img/poke.png");
        /* harmony import */ var _img_ramen_png__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./img/ramen.png */ "./src/img/ramen.png");
        /* harmony import */ var _img_rolls_png__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./img/rolls.png */ "./src/img/rolls.png");
        /* harmony import */ var _img_sake_png__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./img/sake.png */ "./src/img/sake.png");
        /* harmony import */ var _img_salad_png__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ./img/salad.png */ "./src/img/salad.png");
        /* harmony import */ var _img_sushi_png__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ./img/sushi.png */ "./src/img/sushi.png");

        const loadMenu = () => {
          const contentDiv = document.querySelector("#content");

          contentDiv.innerHTML = "";

          const h1Div = document.createElement("h1");
          h1Div.className = "menu";
          h1Div.textContent = "Menu";

          const dishArea = document.createElement("div");
          dishArea.id = "dishArea";
          dishArea.className = "menu";

          dishArea.appendChild(
            new Dish(
              _img_sake_png__WEBPACK_IMPORTED_MODULE_5__,
              "Sake Sunset",
              "Refreshing blend of premium sake, hints of citrus, and a touch of ginger root."
            ).loadDiv()
          );
          dishArea.appendChild(
            new Dish(
              _img_salad_png__WEBPACK_IMPORTED_MODULE_6__,
              "Garden Glow",
              "Wakame seaweed salad with sesame soy dressing."
            ).loadDiv()
          );
          dishArea.appendChild(
            new Dish(
              _img_poke_png__WEBPACK_IMPORTED_MODULE_2__,
              "Island Harmony",
              "Glazed Tofu, seaweed salad, edamame, poke sauce."
            ).loadDiv()
          );
          dishArea.appendChild(
            new Dish(
              _img_ramen_png__WEBPACK_IMPORTED_MODULE_3__,
              "Miso Mingle",
              "Miso broth, tofu, seaweed, corn, ramen noodles."
            ).loadDiv()
          );
          dishArea.appendChild(
            new Dish(
              _img_fish_png__WEBPACK_IMPORTED_MODULE_0__,
              "Tsunami Tataki",
              "Seared mahi mahi slices with ginger soy glaze."
            ).loadDiv()
          );
          dishArea.appendChild(
            new Dish(
              _img_lobster_png__WEBPACK_IMPORTED_MODULE_1__,
              "Tempura Tidal",
              "Tempura lobster bites with jasmin rice balls and spicy mayo dip."
            ).loadDiv()
          );
          dishArea.appendChild(
            new Dish(
              _img_rolls_png__WEBPACK_IMPORTED_MODULE_4__,
              "Dragon Dance",
              "Eel, avocado, cucumber, topped with shitake slices."
            ).loadDiv()
          );
          dishArea.appendChild(
            new Dish(
              _img_sushi_png__WEBPACK_IMPORTED_MODULE_7__,
              "Crunchy Maki",
              "Tempura shrimp, avocado, sushi rice roll."
            ).loadDiv()
          );

          contentDiv.appendChild(h1Div);
          contentDiv.appendChild(dishArea);
        };

        class Dish {
          constructor(src, name, desc) {
            this.src = src;
            this.name = name;
            this.desc = desc;
          }

          //Return div node with the appropiate elements to append in #dishArea
          loadDiv() {
            const dishDiv = document.createElement("div");
            dishDiv.className = "menu dish";

            const iconWrapper = document.createElement("div");
            iconWrapper.className = "menu iconWrapper";
            const img = document.createElement("img");
            img.src = this.src;
            iconWrapper.appendChild(img);

            const textWrapper = document.createElement("div");
            textWrapper.className = "menu textWrapper";
            const title = document.createElement("h4");
            title.className = "menu";
            title.textContent = this.name;
            const description = document.createElement("p");
            description.className = "menu";
            description.textContent = this.desc;
            textWrapper.appendChild(title);
            textWrapper.appendChild(description);

            dishDiv.appendChild(iconWrapper);
            dishDiv.appendChild(textWrapper);

            return dishDiv;
          }
        }

        /***/
      },

    /***/ "./src/fonts/ReggaeOne-Regular.ttf":
      /*!*****************************************!*\
  !*** ./src/fonts/ReggaeOne-Regular.ttf ***!
  \*****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "90a023f683f8cd4c0e7a.ttf";

        /***/
      },

    /***/ "./src/img/fish.png":
      /*!**************************!*\
  !*** ./src/img/fish.png ***!
  \**************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "426267140c5cbb3622ec.png";

        /***/
      },

    /***/ "./src/img/haruka.png":
      /*!****************************!*\
  !*** ./src/img/haruka.png ***!
  \****************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "e585d015246ef080040d.png";

        /***/
      },

    /***/ "./src/img/lobster.png":
      /*!*****************************!*\
  !*** ./src/img/lobster.png ***!
  \*****************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "598863a5e73bf31d8e99.png";

        /***/
      },

    /***/ "./src/img/pattern.jpeg":
      /*!******************************!*\
  !*** ./src/img/pattern.jpeg ***!
  \******************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "b10778690b59672f9071.jpeg";

        /***/
      },

    /***/ "./src/img/poke.png":
      /*!**************************!*\
  !*** ./src/img/poke.png ***!
  \**************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "c3c4deafdbff440f492a.png";

        /***/
      },

    /***/ "./src/img/ramen.png":
      /*!***************************!*\
  !*** ./src/img/ramen.png ***!
  \***************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "5c3ad0609f6d702f0384.png";

        /***/
      },

    /***/ "./src/img/rolls.png":
      /*!***************************!*\
  !*** ./src/img/rolls.png ***!
  \***************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "8b48198cf76cf9bd5f8e.png";

        /***/
      },

    /***/ "./src/img/ryuji.png":
      /*!***************************!*\
  !*** ./src/img/ryuji.png ***!
  \***************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "5be97edcd1e8bbf35dec.png";

        /***/
      },

    /***/ "./src/img/sake.png":
      /*!**************************!*\
  !*** ./src/img/sake.png ***!
  \**************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "f3d09149ec393eb71e2d.png";

        /***/
      },

    /***/ "./src/img/salad.png":
      /*!***************************!*\
  !*** ./src/img/salad.png ***!
  \***************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "a9761a8b7e5d4c78d602.png";

        /***/
      },

    /***/ "./src/img/sushi.png":
      /*!***************************!*\
  !*** ./src/img/sushi.png ***!
  \***************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "5c7056cf7a91ee45a795.png";

        /***/
      },

    /***/ "./src/img/welcome.jpeg":
      /*!******************************!*\
  !*** ./src/img/welcome.jpeg ***!
  \******************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "41a6c2c6535475f0e360.jpeg";

        /***/
      },

    /***/ "./src/img/yuki.png":
      /*!**************************!*\
  !*** ./src/img/yuki.png ***!
  \**************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "c15f23c46ab64428456a.png";

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (
            i > -1 &&
            (!scriptUrl || !/^http(s?):/.test(scriptUrl))
          )
            scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./style.css */ "./src/style.css");
    /* harmony import */ var _loadHome_js__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./loadHome.js */ "./src/loadHome.js");
    /* harmony import */ var _loadMenu_js__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(/*! ./loadMenu.js */ "./src/loadMenu.js");
    /* harmony import */ var _loadAbout_js__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(/*! ./loadAbout.js */ "./src/loadAbout.js");

    (0, _loadHome_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

    const homeBtn = document.querySelector("#homeBtn");
    homeBtn.addEventListener("click", () =>
      (0, _loadHome_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
    );

    const menuBtn = document.querySelector("#menuBtn");
    menuBtn.addEventListener("click", () =>
      (0, _loadMenu_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
    );

    const aboutBtn = document.querySelector("#aboutBtn");
    aboutBtn.addEventListener("click", () =>
      (0, _loadAbout_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
    );
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVJQUFnRDtBQUM1Riw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDRDQUE0QyxpSEFBcUM7QUFDakYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1DQUFtQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsb0JBQW9CLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxhQUFhLE1BQU0sVUFBVSxVQUFVLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFB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OztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNJO0FBQ007QUFDTjtBQUNFO0FBQ0E7QUFDRjtBQUNFO0FBQ0Q7O0FBRW5DO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsMENBQUk7QUFDdEMsa0NBQWtDLDJDQUFLO0FBQ3ZDLGtDQUFrQywwQ0FBSTtBQUN0QyxrQ0FBa0MsMkNBQUs7QUFDdkMsa0NBQWtDLDBDQUFJO0FBQ3RDLGtDQUFrQyw2Q0FBTztBQUN6QyxrQ0FBa0MsMkNBQUs7QUFDdkMsa0NBQWtDLDJDQUFLOztBQUV2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZ0I7QUFDQTtBQUNFOztBQUV2Qyx3REFBUTs7O0FBR1I7QUFDQSx3Q0FBd0Msd0RBQVE7O0FBRWhEO0FBQ0Esd0NBQXdDLHdEQUFROztBQUVoRDtBQUNBLHlDQUF5Qyx5REFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkQWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRIb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SZWdnYWVPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy93ZWxjb21lLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9wYXR0ZXJuLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUmVnZ2FlIE9uZVwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5ib2R5IHtcbiAgICAtLWl2b3J5OiAjZmRmY2VhZmY7XG4gICAgLS1hbGFiYXN0ZXI6ICNmNWYzZTdmZjtcbiAgICAtLWxpb246ICNiZDlkNzFmZjtcbiAgICAtLWNveW90ZTogIzc1NmM0ZGZmO1xuICAgIC0tYmVhdmVyOiAjOTU4NTZmZmY7XG4gICAgLS1jYWYtbm9pcjogIzNkMmExNWZmO1xuICAgIC0teWVsbG93OiAjZmJmZDAwZmY7XG4gICAgLS15ZWxsb3ctZ3JlZW46ICNhMmM3MDJmZjtcbiAgICAtLWF2b2NhZG86ICM0ZDc5MGNmZjtcbiAgICAtLWRhcmstbW9zcy1ncmVlbjogIzQ4NjQwZWZmO1xuICAgIC0tcGFraXN0YW4tZ3JlZW46ICMxZDMzMDVmZjtcblxuICAgIGZvbnQtZmFtaWx5OiBcIlJlZ2dhZSBPbmVcIjtcbiAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJlYXZlcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLFxuICAgICAgICAgICAgdmFyKC0tYWxhYmFzdGVyKSA0NC42NCUsXG4gICAgICAgICAgICB2YXIoLS1iZWF2ZXIpIDQ0LjY0JSxcbiAgICAgICAgICAgIHZhcigtLWJlYXZlcikgNDYuNDMlLFxuICAgICAgICAgICAgdmFyKC0tcGFraXN0YW4tZ3JlZW4pIDQ2LjQzJSxcbiAgICAgICAgICAgIHZhcigtLXBha2lzdGFuLWdyZWVuKSA0OC4yMSUsXG4gICAgICAgICAgICB2YXIoLS1iZWF2ZXIpIDQ4LjIxJSxcbiAgICAgICAgICAgIHZhcigtLWJlYXZlcikgNTAlLFxuICAgICAgICAgICAgdmFyKC0tYWxhYmFzdGVyKSA1MCUsXG4gICAgICAgICAgICB2YXIoLS1hbGFiYXN0ZXIpIDk0LjY0JSxcbiAgICAgICAgICAgIHZhcigtLWJlYXZlcikgOTQuNjQlLFxuICAgICAgICAgICAgdmFyKC0tYmVhdmVyKSA5Ni40MyUsXG4gICAgICAgICAgICB2YXIoLS1wYWtpc3Rhbi1ncmVlbikgOTYuNDMlLFxuICAgICAgICAgICAgdmFyKC0tcGFraXN0YW4tZ3JlZW4pIDk4LjIxJSxcbiAgICAgICAgICAgIHZhcigtLWJlYXZlcikgOTguMjElLFxuICAgICAgICAgICAgdmFyKC0tYmVhdmVyKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDU2cHggNTZweDtcbiAgICBib3gtc2hhZG93OiAzcHggMHB4IDVweCB2YXIoLS1jYWYtbm9pciksIC0zcHggMHB4IDVweCB2YXIoLS1jYWYtbm9pcik7XG59XG5cbmhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHRvcDogMS42dmg7XG4gICAgbGVmdDogMTAlO1xuICAgIHJpZ2h0OiAxMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIG5hdiB7XG4gICAgICAgIHdpZHRoOiA3MHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJlZ2dhZSBPbmVcIjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44dmg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNhZi1ub2lyKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsYWJhc3Rlcik7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjN2aCA1dmg7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkICMzZDJhMTUgM3B4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiKDAsIDAsIDApIDBweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMTAwMG1zO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxMDAwbXM7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjN2aCA3dmg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTBweCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdm9yeSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFraXN0YW4tZ3JlZW4pO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tcGFraXN0YW4tZ3JlZW4pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICBoMSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiA1LjV2aDtcbiAgICAgICAgY29sb3I6IHZhcigtLWl2b3J5KTtcbiAgICAgICAgcGFkZGluZzogMCAyLjV2aDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnZoO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjB2aCA2MHZoO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MCUgNjAlO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggdmFyKC0tY2FmLW5vaXIpO1xuICAgIH1cblxuICAgIGgxLmhvbWUge1xuICAgICAgICBtYXJnaW46IDI5dmggMCAtMi40dmg7XG4gICAgfVxuXG4gICAgaDIuaG9tZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgICAgICAgZm9udC1zaXplOiAxLjd2aDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFsYWJhc3Rlcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhZi1ub2lyKTtcbiAgICAgICAgb3BhY2l0eTogOTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjd2aDtcbiAgICAgICAgcGFkZGluZzogMHZoIDF2aDtcbiAgICB9XG5cbiAgICBwLmhvbWUge1xuICAgICAgICBmb250LXNpemU6IDEuNnZoO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICB0ZXh0LWluZGVudDogNnZoO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDF2aDtcbiAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNhZi1ub2lyKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOHZoO1xuICAgIH1cblxuICAgIGgxLm1lbnUge1xuICAgICAgICBtYXJnaW46IDI0dmggMCAydmg7XG4gICAgfVxuXG4gICAgZGl2Lm1lbnUjZGlzaEFyZWEge1xuICAgICAgICBjb2xvcjogdmFyKC0tY2FmLW5vaXIpO1xuICAgICAgICB3aWR0aDogNTJ2aDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBnYXA6IDAuNXZoIDN2aDtcblxuICAgICAgICAubWVudS5kaXNoIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgIC5pY29uV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDguNXZoO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDguNXZoO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXZoO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGludmVydCgxNSUpIHNlcGlhKDEzJSkgc2F0dXJhdGUoMjAyMCUpIGh1ZS1yb3RhdGUoMzUxZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoOTMlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnZoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnZoO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJ2aDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaDEuYWJvdXQge1xuICAgICAgICBtYXJnaW46IDI0dmggMCAwdmg7XG4gICAgfVxuXG4gICAgZGl2LmFib3V0I2NoZWZBcmVhIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAxdmg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jYWYtbm9pcik7XG4gICAgICAgIHdpZHRoOiA1NXZoO1xuXG4gICAgICAgIC5hYm91dC5jaGVmIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDAuN3ZoIDA7XG5cbiAgICAgICAgICAgIC5pY29uV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEydmg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJ2aDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjV2aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAtMC4zdmg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjN2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44dmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zdmg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMnZoO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDEuM3ZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsYWJhc3Rlcik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgYm94LXNoYWRvdzogLTJweCAycHggMTBweCB2YXIoLS1jYWYtbm9pcik7XG5cbiAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tY2FmLW5vaXIpO1xuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM3ZoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYTphZnRlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNveW90ZSk7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QiwrREFBNEQ7SUFDNUQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QiwyQkFBMkI7O0lBRTNCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JC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Y2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlJlZ2dhZSBPbmVcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi9mb250cy9SZWdnYWVPbmUtUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICAgIC0taXZvcnk6ICNmZGZjZWFmZjtcXG4gICAgLS1hbGFiYXN0ZXI6ICNmNWYzZTdmZjtcXG4gICAgLS1saW9uOiAjYmQ5ZDcxZmY7XFxuICAgIC0tY295b3RlOiAjNzU2YzRkZmY7XFxuICAgIC0tYmVhdmVyOiAjOTU4NTZmZmY7XFxuICAgIC0tY2FmLW5vaXI6ICMzZDJhMTVmZjtcXG4gICAgLS15ZWxsb3c6ICNmYmZkMDBmZjtcXG4gICAgLS15ZWxsb3ctZ3JlZW46ICNhMmM3MDJmZjtcXG4gICAgLS1hdm9jYWRvOiAjNGQ3OTBjZmY7XFxuICAgIC0tZGFyay1tb3NzLWdyZWVuOiAjNDg2NDBlZmY7XFxuICAgIC0tcGFraXN0YW4tZ3JlZW46ICMxZDMzMDVmZjtcXG5cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSZWdnYWUgT25lXFxcIjtcXG4gICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJlYXZlcik7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxcXG4gICAgICAgICAgICB2YXIoLS1hbGFiYXN0ZXIpIDQ0LjY0JSxcXG4gICAgICAgICAgICB2YXIoLS1iZWF2ZXIpIDQ0LjY0JSxcXG4gICAgICAgICAgICB2YXIoLS1iZWF2ZXIpIDQ2LjQzJSxcXG4gICAgICAgICAgICB2YXIoLS1wYWtpc3Rhbi1ncmVlbikgNDYuNDMlLFxcbiAgICAgICAgICAgIHZhcigtLXBha2lzdGFuLWdyZWVuKSA0OC4yMSUsXFxuICAgICAgICAgICAgdmFyKC0tYmVhdmVyKSA0OC4yMSUsXFxuICAgICAgICAgICAgdmFyKC0tYmVhdmVyKSA1MCUsXFxuICAgICAgICAgICAgdmFyKC0tYWxhYmFzdGVyKSA1MCUsXFxuICAgICAgICAgICAgdmFyKC0tYWxhYmFzdGVyKSA5NC42NCUsXFxuICAgICAgICAgICAgdmFyKC0tYmVhdmVyKSA5NC42NCUsXFxuICAgICAgICAgICAgdmFyKC0tYmVhdmVyKSA5Ni40MyUsXFxuICAgICAgICAgICAgdmFyKC0tcGFraXN0YW4tZ3JlZW4pIDk2LjQzJSxcXG4gICAgICAgICAgICB2YXIoLS1wYWtpc3Rhbi1ncmVlbikgOTguMjElLFxcbiAgICAgICAgICAgIHZhcigtLWJlYXZlcikgOTguMjElLFxcbiAgICAgICAgICAgIHZhcigtLWJlYXZlcikgMTAwJSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTZweCA1NnB4O1xcbiAgICBib3gtc2hhZG93OiAzcHggMHB4IDVweCB2YXIoLS1jYWYtbm9pciksIC0zcHggMHB4IDVweCB2YXIoLS1jYWYtbm9pcik7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHRvcDogMS42dmg7XFxuICAgIGxlZnQ6IDEwJTtcXG4gICAgcmlnaHQ6IDEwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIG5hdiB7XFxuICAgICAgICB3aWR0aDogNzB2aDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiUmVnZ2FlIE9uZVxcXCI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjh2aDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jYWYtbm9pcik7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxhYmFzdGVyKTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjN2aCA1dmg7XFxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjM2QyYTE1IDNweDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDEwMDBtcztcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDEwMDBtcztcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjN2aCA3dmg7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wcHgpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl2b3J5KTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFraXN0YW4tZ3JlZW4pO1xcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXBha2lzdGFuLWdyZWVuKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL3dlbGNvbWUuanBlZyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gICAgaDEge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiA1LjV2aDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pdm9yeSk7XFxuICAgICAgICBwYWRkaW5nOiAwIDIuNXZoO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnZoO1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZy9wYXR0ZXJuLmpwZWdcXFwiKTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjB2aCA2MHZoO1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDAlIDYwJTtcXG4gICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCB2YXIoLS1jYWYtbm9pcik7XFxuICAgIH1cXG5cXG4gICAgaDEuaG9tZSB7XFxuICAgICAgICBtYXJnaW46IDI5dmggMCAtMi40dmg7XFxuICAgIH1cXG5cXG4gICAgaDIuaG9tZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XFxuICAgICAgICBmb250LXNpemU6IDEuN3ZoO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWFsYWJhc3Rlcik7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWYtbm9pcik7XFxuICAgICAgICBvcGFjaXR5OiA5MCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjd2aDtcXG4gICAgICAgIHBhZGRpbmc6IDB2aCAxdmg7XFxuICAgIH1cXG5cXG4gICAgcC5ob21lIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42dmg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDZ2aDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgICAgIHdpZHRoOiA1NSU7XFxuICAgICAgICBjb2xvcjogdmFyKC0tY2FmLW5vaXIpO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOHZoO1xcbiAgICB9XFxuXFxuICAgIGgxLm1lbnUge1xcbiAgICAgICAgbWFyZ2luOiAyNHZoIDAgMnZoO1xcbiAgICB9XFxuXFxuICAgIGRpdi5tZW51I2Rpc2hBcmVhIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jYWYtbm9pcik7XFxuICAgICAgICB3aWR0aDogNTJ2aDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBnYXA6IDAuNXZoIDN2aDtcXG5cXG4gICAgICAgIC5tZW51LmRpc2gge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgICAgICAgLmljb25XcmFwcGVyIHtcXG4gICAgICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4LjV2aDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOC41dmg7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXZoO1xcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTUlKSBzZXBpYSgxMyUpIHNhdHVyYXRlKDIwMjAlKSBodWUtcm90YXRlKDM1MWRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDkzJSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaDQge1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZ2aDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnZoO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4ydmg7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGgxLmFib3V0IHtcXG4gICAgICAgIG1hcmdpbjogMjR2aCAwIDB2aDtcXG4gICAgfVxcblxcbiAgICBkaXYuYWJvdXQjY2hlZkFyZWEge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbGVmdDogMXZoO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWNhZi1ub2lyKTtcXG4gICAgICAgIHdpZHRoOiA1NXZoO1xcblxcbiAgICAgICAgLmFib3V0LmNoZWYge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgbWFyZ2luOiAwLjd2aCAwO1xcblxcbiAgICAgICAgICAgIC5pY29uV3JhcHBlciB7XFxuICAgICAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTJ2aDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJ2aDtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41dmg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaDMge1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAtMC4zdmg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4zdmg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGg0IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44dmg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjN2aDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMnZoO1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuM3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbGFiYXN0ZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcXG4gICAgYm94LXNoYWRvdzogLTJweCAycHggMTBweCB2YXIoLS1jYWYtbm9pcik7XFxuXFxuICAgIGEge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWNhZi1ub2lyKTtcXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM3ZoO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGE6YWZ0ZXIge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWNveW90ZSk7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHl1a2kgZnJvbSAnLi9pbWcveXVraS5wbmcnO1xuaW1wb3J0IGhhcnVrYSBmcm9tICcuL2ltZy9oYXJ1a2EucG5nJztcbmltcG9ydCByeXVqaSBmcm9tICcuL2ltZy9yeXVqaS5wbmcnO1xuXG5cblxuY29uc3QgbG9hZEFib3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgaDFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxRGl2LmNsYXNzTmFtZSA9ICdhYm91dCc7XG4gICAgaDFEaXYudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuXG4gICAgY29uc3QgY2hlZkFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVmQXJlYS5pZCA9ICdjaGVmQXJlYSc7XG4gICAgY2hlZkFyZWEuY2xhc3NOYW1lID0gJ2Fib3V0JztcblxuICAgIGNoZWZBcmVhLmFwcGVuZENoaWxkKG5ldyBDaGVmKGhhcnVrYSwgJ0hhcnVrYSBJc2hpa2F3YScsICdHdWFyZGlhbiBvZiBUcmFkaXRpb24nLCAnVGhyZWUgZGVjYWRlcyBvZiBjdWxpbmFyeSByZWZpbmVtZW50LicsICdVcGhvbGRlciBvZiB0cmFkaXRpb25hbCBrYWlzZWtpIGRpbmluZyBhbmQgb21ha2FzZSBleHBlcmllbmNlcy4nLCAnVW5tYXRjaGVkIG1hc3RlcnkgaW4gc3VzaGkgYW5kIHNhc2hpbWkuJykubG9hZERpdigpKTtcbiAgICBjaGVmQXJlYS5hcHBlbmRDaGlsZChuZXcgQ2hlZih5dWtpLCAnWXVraSBUYW5ha2EnLCAnTWluaW1hbGlzdCBNYXZlbicsICcxNSB5ZWFycyBkZWRpY2F0ZWQgdG8gdGhlIGN1bGluYXJ5IGNyYWZ0LicsICdFbWJyYWNpbmcgc2ltcGxpY2l0eSBpbiBKYXBhbmVzZSBjdWxpbmFyeSB0cmFkaXRpb25zLicsICdQZXJmZWN0aW5nIGF1dGhlbnRpYyByYW1lbiBhbmQgZGVsaWNhdGUgdGVhLWluZnVzZWQgZGVzc2VydHMuJykubG9hZERpdigpKTtcbiAgICBjaGVmQXJlYS5hcHBlbmRDaGlsZChuZXcgQ2hlZihyeXVqaSwgJ1J5dWppIE5ha2FtdXJhJywgJ0N1bGluYXJ5IEZ1c2lvbiBWaXJ0dW9zbycsICdUcmFpbmVkIGluIHRoZSBraXRjaGVucyBvZiBKYXBhbiBhbmQgRnJhbmNlIGZvciAxNiB5ZWFycy4nLCAnSGFybW9uaW91cyBmdXNpb24gb2YgSmFwYW5lc2UgYW5kIEZyZW5jaCBjdWlzaW5lcy4nLCAnSW5ub3ZhdG9yIG9mIGNyZWF0aXZlIHN1c2hpIHJvbGxzIGFuZCBleHF1aXNpdGUgZGVzc2VydHMuJykubG9hZERpdigpKTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaDFEaXYpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2hlZkFyZWEpO1xufTtcblxuY2xhc3MgQ2hlZiB7XG4gICAgY29uc3RydWN0b3Ioc3JjLCBuYW1lLCB0aXRsZSwgZXhwLCBzdHlsZSwgc3BlY2lhbCkge1xuICAgICAgICB0aGlzLnNyYyA9IHNyYztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB0aGlzLnNwZWNpYWwgPSBzcGVjaWFsO1xuICAgIH1cblxuICAgIC8vUmV0dXJuIGRpdiBub2RlIHdpdGggdGhlIGFwcHJvcGlhdGUgZWxlbWVudHMgdG8gYXBwZW5kIGluICNjaGVmQXJlYVxuICAgIGxvYWREaXYoKSB7XG4gICAgICAgIGNvbnN0IGNoZWZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlZkRpdi5jbGFzc05hbWUgPSAnYWJvdXQgY2hlZic7XG5cbiAgICAgICAgY29uc3QgaWNvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWNvbldyYXBwZXIuY2xhc3NOYW1lID0gJ21lbnUgaWNvbldyYXBwZXInO1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLnNyYyA9IHRoaXMuc3JjO1xuICAgICAgICBpY29uV3JhcHBlci5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgIGNvbnN0IHRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHRXcmFwcGVyLmNsYXNzTmFtZSA9ICdhYm91dCB0ZXh0V3JhcHBlcic7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIG5hbWUuY2xhc3NOYW1lID0gJ2Fib3V0JztcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTmFtZSA9ICdhYm91dCc7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcblxuICAgICAgICBjb25zdCBleHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGV4cC5jbGFzc05hbWUgPSAnYWJvdXQnO1xuICAgICAgICBleHAudGV4dENvbnRlbnQgPSB0aGlzLmV4cDtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgc3R5bGUuY2xhc3NOYW1lID0gJ2Fib3V0JztcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSB0aGlzLnN0eWxlO1xuXG4gICAgICAgIGNvbnN0IHNwZWNpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHNwZWNpYWwuY2xhc3NOYW1lID0gJ2Fib3V0JztcbiAgICAgICAgc3BlY2lhbC50ZXh0Q29udGVudCA9IHRoaXMuc3BlY2lhbDtcblxuXG4gICAgICAgIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICB0ZXh0V3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKGV4cCk7XG4gICAgICAgIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQoc3BlY2lhbCk7XG5cbiAgICAgICAgY2hlZkRpdi5hcHBlbmRDaGlsZChpY29uV3JhcHBlcik7XG4gICAgICAgIGNoZWZEaXYuYXBwZW5kQ2hpbGQodGV4dFdyYXBwZXIpO1xuXG4gICAgICAgIHJldHVybiBjaGVmRGl2O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgbG9hZEFib3V0IGFzIGRlZmF1bHQgfSIsImNvbnN0IGxvYWRIb21lID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgaDFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxRGl2LmNsYXNzTmFtZSA9ICdob21lJztcbiAgICBoMURpdi50ZXh0Q29udGVudCA9ICdZdXp1IEJsb3Nzb20nO1xuXG5cbiAgICBjb25zdCBoMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDJEaXYuY2xhc3NOYW1lID0gJ2hvbWUnO1xuICAgIGgyRGl2LnRleHRDb250ZW50ID0gJ0phcGFuZXNlIEZ1c2lvbiBDdWlzaW5lJztcblxuICAgIGNvbnN0IHAxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAxRGl2LmNsYXNzTmFtZSA9ICdob21lJztcbiAgICBwMURpdi50ZXh0Q29udGVudCA9IGBXZWxjb21lIHRvIFl1enUgQmxvc3NvbSwgd2hlcmUgY3VsaW5hcnkgaW5ub3ZhdGlvbiBtZWV0cyB0cmFkaXRpb25hbCBKYXBhbmVzZSBjcmFmdHNtYW5zaGlwLiBOZXN0bGVkIGluIHRoZVxuICAgIGhlYXJ0IG9mIEdyYW5hZGEsIFNwYWluLCBvdXIgcmVzdGF1cmFudCBpbnZpdGVzIHlvdSBvbiBhIGdhc3Ryb25vbWljIGFkdmVudHVyZSBsaWtlIG5vIG90aGVyLiBGcm9tIHRoZVxuICAgIG1vbWVudFxuICAgIHlvdSBzdGVwIGluc2lkZSwgeW91J3JlIHRyYW5zcG9ydGVkIHRvIGEgcmVhbG0gd2hlcmUgZXZlcnkgZGlzaCB0ZWxscyBhIHN0b3J5LCB3aGVyZSBlYWNoIGJpdGUgaXMgYSBzeW1waG9ueVxuICAgIG9mIGZsYXZvcnMuYDtcblxuICAgIGNvbnN0IHAyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAyRGl2LmNsYXNzTmFtZSA9ICdob21lJztcbiAgICBwMkRpdi50ZXh0Q29udGVudCA9IGBPdXIgbWVudSBpcyBhIHRlc3RhbWVudCB0byBvdXIgZGVkaWNhdGlvbiB0byBleGNlbGxlbmNlLCBibGVuZGluZyB0aGUgZmluZXN0IGluZ3JlZGllbnRzIHdpdGggY3JlYXRpdmUgZmxhaXJcbiAgICB0byBjcmVhdGUgYSBkaW5pbmcgZXhwZXJpZW5jZSB0aGF0J3MgYm90aCBmYW1pbGlhciBhbmQgZXhoaWxhcmF0aW5nbHkgbmV3LiBXaGV0aGVyIHlvdSdyZSBjcmF2aW5nIHRoZVxuICAgIGRlbGljYXRlIGJhbGFuY2Ugb2Ygc3VzaGkgcm9sbHMgaW5mdXNlZCB3aXRoIHVuZXhwZWN0ZWQgaW5ncmVkaWVudHMsIG9yIHRoZSByb2J1c3QgdW1hbWkgb2Ygb3VyIHNpZ25hdHVyZVxuICAgIHJhbWVuIGJvd2xzLCBldmVyeSBkaXNoIGlzIGEgbWFzdGVycGllY2UgY3JhZnRlZCB3aXRoIGNhcmUgYnkgb3VyIHRhbGVudGVkIGNoZWZzLmBcblxuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMURpdik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMkRpdik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwMURpdik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwMkRpdik7XG59O1xuXG5leHBvcnQgeyBsb2FkSG9tZSBhcyBkZWZhdWx0IH1cbiIsIlxuaW1wb3J0IGZpc2ggZnJvbSAnLi9pbWcvZmlzaC5wbmcnO1xuaW1wb3J0IGxvYnN0ZXIgZnJvbSAnLi9pbWcvbG9ic3Rlci5wbmcnO1xuaW1wb3J0IHBva2UgZnJvbSAnLi9pbWcvcG9rZS5wbmcnO1xuaW1wb3J0IHJhbWVuIGZyb20gJy4vaW1nL3JhbWVuLnBuZyc7XG5pbXBvcnQgcm9sbHMgZnJvbSAnLi9pbWcvcm9sbHMucG5nJztcbmltcG9ydCBzYWtlIGZyb20gJy4vaW1nL3Nha2UucG5nJztcbmltcG9ydCBzYWxhZCBmcm9tICcuL2ltZy9zYWxhZC5wbmcnO1xuaW1wb3J0IHN1c2hpIGZyb20gJy4vaW1nL3N1c2hpLnBuZydcblxuY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBoMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDFEaXYuY2xhc3NOYW1lID0gJ21lbnUnO1xuICAgIGgxRGl2LnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gICAgY29uc3QgZGlzaEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXNoQXJlYS5pZCA9ICdkaXNoQXJlYSc7XG4gICAgZGlzaEFyZWEuY2xhc3NOYW1lID0gJ21lbnUnO1xuXG4gICAgZGlzaEFyZWEuYXBwZW5kQ2hpbGQobmV3IERpc2goc2FrZSwgJ1Nha2UgU3Vuc2V0JywgJ1JlZnJlc2hpbmcgYmxlbmQgb2YgcHJlbWl1bSBzYWtlLCBoaW50cyBvZiBjaXRydXMsIGFuZCBhIHRvdWNoIG9mIGdpbmdlciByb290LicpLmxvYWREaXYoKSk7XG4gICAgZGlzaEFyZWEuYXBwZW5kQ2hpbGQobmV3IERpc2goc2FsYWQsICdHYXJkZW4gR2xvdycsICdXYWthbWUgc2Vhd2VlZCBzYWxhZCB3aXRoIHNlc2FtZSBzb3kgZHJlc3NpbmcuJykubG9hZERpdigpKTtcbiAgICBkaXNoQXJlYS5hcHBlbmRDaGlsZChuZXcgRGlzaChwb2tlLCAnSXNsYW5kIEhhcm1vbnknLCAnR2xhemVkIFRvZnUsIHNlYXdlZWQgc2FsYWQsIGVkYW1hbWUsIHBva2Ugc2F1Y2UuJykubG9hZERpdigpKTtcbiAgICBkaXNoQXJlYS5hcHBlbmRDaGlsZChuZXcgRGlzaChyYW1lbiwgJ01pc28gTWluZ2xlJywgJ01pc28gYnJvdGgsIHRvZnUsIHNlYXdlZWQsIGNvcm4sIHJhbWVuIG5vb2RsZXMuJykubG9hZERpdigpKTtcbiAgICBkaXNoQXJlYS5hcHBlbmRDaGlsZChuZXcgRGlzaChmaXNoLCAnVHN1bmFtaSBUYXRha2knLCAnU2VhcmVkIG1haGkgbWFoaSBzbGljZXMgd2l0aCBnaW5nZXIgc295IGdsYXplLicpLmxvYWREaXYoKSk7XG4gICAgZGlzaEFyZWEuYXBwZW5kQ2hpbGQobmV3IERpc2gobG9ic3RlciwgJ1RlbXB1cmEgVGlkYWwnLCAnVGVtcHVyYSBsb2JzdGVyIGJpdGVzIHdpdGggamFzbWluIHJpY2UgYmFsbHMgYW5kIHNwaWN5IG1heW8gZGlwLicpLmxvYWREaXYoKSk7XG4gICAgZGlzaEFyZWEuYXBwZW5kQ2hpbGQobmV3IERpc2gocm9sbHMsICdEcmFnb24gRGFuY2UnLCAnRWVsLCBhdm9jYWRvLCBjdWN1bWJlciwgdG9wcGVkIHdpdGggc2hpdGFrZSBzbGljZXMuJykubG9hZERpdigpKTtcbiAgICBkaXNoQXJlYS5hcHBlbmRDaGlsZChuZXcgRGlzaChzdXNoaSwgJ0NydW5jaHkgTWFraScsICdUZW1wdXJhIHNocmltcCwgYXZvY2Fkbywgc3VzaGkgcmljZSByb2xsLicpLmxvYWREaXYoKSk7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgxRGl2KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRpc2hBcmVhKTtcblxufTtcblxuY2xhc3MgRGlzaCB7XG4gICAgY29uc3RydWN0b3Ioc3JjLCBuYW1lLCBkZXNjKSB7XG4gICAgICAgIHRoaXMuc3JjID0gc3JjO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIH1cblxuICAgIC8vUmV0dXJuIGRpdiBub2RlIHdpdGggdGhlIGFwcHJvcGlhdGUgZWxlbWVudHMgdG8gYXBwZW5kIGluICNkaXNoQXJlYVxuICAgIGxvYWREaXYoKSB7XG4gICAgICAgIGNvbnN0IGRpc2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGlzaERpdi5jbGFzc05hbWUgPSAnbWVudSBkaXNoJztcblxuICAgICAgICBjb25zdCBpY29uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpY29uV3JhcHBlci5jbGFzc05hbWUgPSAnbWVudSBpY29uV3JhcHBlcic7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuc3JjID0gdGhpcy5zcmM7XG4gICAgICAgIGljb25XcmFwcGVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgICAgY29uc3QgdGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGV4dFdyYXBwZXIuY2xhc3NOYW1lID0gJ21lbnUgdGV4dFdyYXBwZXInO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTmFtZSA9ICdtZW51JztcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnbWVudSc7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGhpcy5kZXNjO1xuICAgICAgICB0ZXh0V3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBkaXNoRGl2LmFwcGVuZENoaWxkKGljb25XcmFwcGVyKTtcbiAgICAgICAgZGlzaERpdi5hcHBlbmRDaGlsZCh0ZXh0V3JhcHBlcik7XG5cbiAgICAgICAgcmV0dXJuIGRpc2hEaXY7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IGxvYWRNZW51IGFzIGRlZmF1bHQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2xvYWRIb21lLmpzJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL2xvYWRNZW51LmpzJztcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSAnLi9sb2FkQWJvdXQuanMnO1xuXG5sb2FkSG9tZSgpO1xuXG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZUJ0bicpXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9hZEhvbWUoKSk7XG5cbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudUJ0bicpO1xubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGxvYWRNZW51KCkpO1xuXG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dEJ0bicpO1xuYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBsb2FkQWJvdXQoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=

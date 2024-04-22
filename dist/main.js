/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/ReggaeOne-Regular.ttf */ "./src/fonts/ReggaeOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/welcome.jpeg */ "./src/img/welcome.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/pattern.jpeg */ "./src/img/pattern.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Reggae One';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
    font-weight: 400;
    font-style: normal;
}

body {
    --ivory: #FDFCEAff;
    --alabaster: #F5F3E7ff;
    --lion: #BD9D71ff;
    --coyote: #756C4Dff;
    --beaver: #95856Fff;
    --caf-noir: #3D2A15ff;
    --yellow: #FBFD00ff;
    --yellow-green: #A2C702ff;
    --avocado: #4D790Cff;
    --dark-moss-green: #48640Eff;
    --pakistan-green: #1D3305ff;

    font-family: 'Reggae One';
    max-width: max-content;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    background-color: var(--beaver);
    background-image: linear-gradient(90deg, var(--alabaster) 44.64%, var(--beaver) 44.64%, var(--beaver) 46.43%, var(--pakistan-green) 46.43%, var(--pakistan-green) 48.21%, var(--beaver) 48.21%, var(--beaver) 50%, var(--alabaster) 50%, var(--alabaster) 94.64%, var(--beaver) 94.64%, var(--beaver) 96.43%, var(--pakistan-green) 96.43%, var(--pakistan-green) 98.21%, var(--beaver) 98.21%, var(--beaver) 100%);
    background-size: 56.00px 56.00px;
    box-shadow: 3px 0px 5px var(--caf-noir),
        -3px 0px 5px var(--caf-noir);
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
            font-family: 'Reggae One';
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
                margin: 0 0 -0.3vh;;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,+DAA4D;IAC5D,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB;IACnB,yBAAyB;IACzB,oBAAoB;IACpB,4BAA4B;IAC5B,2BAA2B;;IAE3B,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,+BAA+B;IAC/B,mZAAmZ;IACnZ,gCAAgC;IAChC;oCACgC;AACpC;;AAEA;IACI,eAAe;IACf,WAAW;IACX,UAAU;IACV,SAAS;IACT,UAAU;IACV,aAAa;IACb,uBAAuB;;IAEvB;QACI,WAAW;QACX,aAAa;QACb,8BAA8B;;QAE9B;YACI,yBAAyB;YACzB,gBAAgB;YAChB,gBAAgB;YAChB,sBAAsB;YACtB,kCAAkC;YAClC,kBAAkB;YAClB,yBAAyB;YACzB,wCAAwC;YACxC,kBAAkB;YAClB,0BAA0B;YAC1B,wBAAwB;YACxB,aAAa;YACb,mBAAmB;YACnB,mBAAmB;YACnB,eAAe;YACf,yBAAyB;QAC7B;;QAEA;;YAEI,kBAAkB;YAClB,kBAAkB;YAClB,2BAA2B;YAC3B,8BAA8B;YAC9B,4BAA4B;YAC5B,uCAAuC;QAC3C;IACJ;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,yDAAyC;IACzC,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;;IAEtB;QACI,kBAAkB;QAClB,gBAAgB;QAChB,mBAAmB;QACnB,gBAAgB;QAChB,kBAAkB;QAClB,yDAA2C;QAC3C,0BAA0B;QAC1B,4BAA4B;QAC5B,wCAAwC;IAC5C;;IAEA;QACI,qBAAqB;;IAEzB;;IAEA;QACI,kBAAkB;QAClB,gBAAgB;QAChB,uBAAuB;QACvB,iCAAiC;QACjC,YAAY;QACZ,oBAAoB;QACpB,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;QAChB,mBAAmB;QACnB,gBAAgB;QAChB,SAAS;QACT,YAAY;QACZ,UAAU;QACV,sBAAsB;QACtB,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,sBAAsB;QACtB,WAAW;QACX,aAAa;QACb,8BAA8B;QAC9B,cAAc;;QAEd;YACI,aAAa;;YAEb;gBACI;oBACI,YAAY;oBACZ,aAAa;oBACb,mBAAmB;oBACnB,+FAA+F;gBACnG;YACJ;;YAEA;gBACI,WAAW;gBACX,gBAAgB;YACpB;;YAEA;gBACI,WAAW;gBACX,gBAAgB;gBAChB,kBAAkB;gBAClB,gBAAgB;YACpB;QACJ;IACJ;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;QAClB,SAAS;QACT,sBAAsB;QACtB,WAAW;;QAEX;YACI,aAAa;YACb,eAAe;;YAEf;gBACI;oBACI,WAAW;oBACX,YAAY;oBACZ,mBAAmB;;gBAEvB;YACJ;;YAEA;gBACI,kBAAkB;gBAClB,gBAAgB;YACpB;;YAEA;gBACI,WAAW;gBACX,gBAAgB;YACpB;;YAEA;gBACI,WAAW;gBACX,gBAAgB;gBAChB,kBAAkB;gBAClB,gBAAgB;YACpB;QACJ;IACJ;AACJ","sourcesContent":["@font-face {\n    font-family: 'Reggae One';\n    src: url('./fonts/ReggaeOne-Regular.ttf') format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\nbody {\n    --ivory: #FDFCEAff;\n    --alabaster: #F5F3E7ff;\n    --lion: #BD9D71ff;\n    --coyote: #756C4Dff;\n    --beaver: #95856Fff;\n    --caf-noir: #3D2A15ff;\n    --yellow: #FBFD00ff;\n    --yellow-green: #A2C702ff;\n    --avocado: #4D790Cff;\n    --dark-moss-green: #48640Eff;\n    --pakistan-green: #1D3305ff;\n\n    font-family: 'Reggae One';\n    max-width: max-content;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    background-color: var(--beaver);\n    background-image: linear-gradient(90deg, var(--alabaster) 44.64%, var(--beaver) 44.64%, var(--beaver) 46.43%, var(--pakistan-green) 46.43%, var(--pakistan-green) 48.21%, var(--beaver) 48.21%, var(--beaver) 50%, var(--alabaster) 50%, var(--alabaster) 94.64%, var(--beaver) 94.64%, var(--beaver) 96.43%, var(--pakistan-green) 96.43%, var(--pakistan-green) 98.21%, var(--beaver) 98.21%, var(--beaver) 100%);\n    background-size: 56.00px 56.00px;\n    box-shadow: 3px 0px 5px var(--caf-noir),\n        -3px 0px 5px var(--caf-noir);\n}\n\nheader {\n    position: fixed;\n    width: auto;\n    top: 1.6vh;\n    left: 10%;\n    right: 10%;\n    display: flex;\n    justify-content: center;\n\n    nav {\n        width: 70vh;\n        display: flex;\n        justify-content: space-between;\n\n        button {\n            font-family: 'Reggae One';\n            font-size: 1.8vh;\n            font-weight: 500;\n            color: var(--caf-noir);\n            background-color: var(--alabaster);\n            padding: 1.3vh 5vh;\n            border: solid #3d2a15 3px;\n            box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;\n            border-radius: 6px;\n            transition: padding 1000ms;\n            transform: translateY(0);\n            display: flex;\n            flex-direction: row;\n            align-items: center;\n            cursor: pointer;\n            text-transform: uppercase;\n        }\n\n        button:hover {\n\n            transition: 1000ms;\n            padding: 1.3vh 7vh;\n            transform: translateY(-0px);\n            background-color: var(--ivory);\n            color: var(--pakistan-green);\n            border: solid 3px var(--pakistan-green);\n        }\n    }\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    width: 100vh;\n    background-image: url(./img/welcome.jpeg);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    h1 {\n        text-align: center;\n        font-size: 5.5vh;\n        color: var(--ivory);\n        padding: 0 2.5vh;\n        border-radius: 6vh;\n        background-image: url('./img/pattern.jpeg');\n        background-size: 60vh 60vh;\n        background-position: 40% 60%;\n        text-shadow: 0px 0px 8px var(--caf-noir);\n    }\n\n    h1.home {\n        margin: 29vh 0 -2.4vh;\n\n    }\n\n    h2.home {\n        margin-bottom: 1vh;\n        font-size: 1.7vh;\n        color: var(--alabaster);\n        background-color: var(--caf-noir);\n        opacity: 90%;\n        border-radius: 1.7vh;\n        padding: 0vh 1vh;\n    }\n\n    p.home {\n        font-size: 1.6vh;\n        text-align: justify;\n        text-indent: 6vh;\n        margin: 0;\n        padding: 1vh;\n        width: 55%;\n        color: var(--caf-noir);\n        line-height: 1.8vh;\n    }\n\n    h1.menu {\n        margin: 24vh 0 2vh;\n    }\n\n    div.menu#dishArea {\n        color: var(--caf-noir);\n        width: 52vh;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 0.5vh 3vh;\n\n        .menu.dish {\n            display: flex;\n\n            .iconWrapper {\n                img {\n                    width: 8.5vh;\n                    height: 8.5vh;\n                    margin-right: 1.5vh;\n                    filter: invert(15%) sepia(13%) saturate(2020%) hue-rotate(351deg) brightness(95%) contrast(93%);\n                }\n            }\n\n            h4 {\n                margin: 0px;\n                font-size: 1.6vh;\n            }\n\n            p {\n                margin: 0px;\n                font-size: 1.2vh;\n                line-height: 1.2vh;\n                text-align: left;\n            }\n        }\n    }\n\n    h1.about {\n        margin: 24vh 0 0vh;\n    }\n\n    div.about#chefArea {\n        position: relative;\n        left: 1vh;\n        color: var(--caf-noir);\n        width: 55vh;\n\n        .about.chef {\n            display: flex;\n            margin: 0.7vh 0;\n\n            .iconWrapper {\n                img {\n                    width: 12vh;\n                    height: 12vh;\n                    margin-right: 1.5vh;\n\n                }\n            }\n\n            h3 {\n                margin: 0 0 -0.3vh;;\n                font-size: 2.3vh;\n            }\n\n            h4 {\n                margin: 0px;\n                font-size: 1.8vh;\n            }\n\n            p {\n                margin: 0px;\n                font-size: 1.3vh;\n                line-height: 1.2vh;\n                text-align: left;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
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
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



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
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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
      layer: item[5]
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
        references: 1
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
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
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
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
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
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
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
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/loadAbout.js":
/*!**************************!*\
  !*** ./src/loadAbout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAbout)
/* harmony export */ });
/* harmony import */ var _img_yuki_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/yuki.png */ "./src/img/yuki.png");
/* harmony import */ var _img_haruka_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/haruka.png */ "./src/img/haruka.png");
/* harmony import */ var _img_ryuji_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/ryuji.png */ "./src/img/ryuji.png");






const loadAbout = () => {
    const contentDiv = document.querySelector('#content')

    contentDiv.innerHTML = '';

    const h1Div = document.createElement('h1');
    h1Div.className = 'about';
    h1Div.textContent = 'About Us';

    const chefArea = document.createElement('div');
    chefArea.id = 'chefArea';
    chefArea.className = 'about';

    chefArea.appendChild(new Chef(_img_haruka_png__WEBPACK_IMPORTED_MODULE_1__, 'Haruka Ishikawa', 'Guardian of Tradition', 'Three decades of culinary refinement.', 'Upholder of traditional kaiseki dining and omakase experiences.', 'Unmatched mastery in sushi and sashimi.').loadDiv());
    chefArea.appendChild(new Chef(_img_yuki_png__WEBPACK_IMPORTED_MODULE_0__, 'Yuki Tanaka', 'Minimalist Maven', '15 years dedicated to the culinary craft.', 'Embracing simplicity in Japanese culinary traditions.', 'Perfecting authentic ramen and delicate tea-infused desserts.').loadDiv());
    chefArea.appendChild(new Chef(_img_ryuji_png__WEBPACK_IMPORTED_MODULE_2__, 'Ryuji Nakamura', 'Culinary Fusion Virtuoso', 'Trained in the kitchens of Japan and France for 16 years.', 'Harmonious fusion of Japanese and French cuisines.', 'Innovator of creative sushi rolls and exquisite desserts.').loadDiv());

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
        const chefDiv = document.createElement('div');
        chefDiv.className = 'about chef';

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'menu iconWrapper';
        const img = document.createElement('img');
        img.src = this.src;
        iconWrapper.appendChild(img);

        const textWrapper = document.createElement('div');
        textWrapper.className = 'about textWrapper';

        const name = document.createElement('h3');
        name.className = 'about';
        name.textContent = this.name;

        const title = document.createElement('h4');
        title.className = 'about';
        title.textContent = this.title;

        const exp = document.createElement('p');
        exp.className = 'about';
        exp.textContent = this.exp;

        const style = document.createElement('p');
        style.className = 'about';
        style.textContent = this.style;

        const special = document.createElement('p');
        special.className = 'about';
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



/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
const loadHome = () => {
    const contentDiv = document.querySelector('#content')

    contentDiv.innerHTML = '';

    const h1Div = document.createElement('h1');
    h1Div.className = 'home';
    h1Div.textContent = 'Yuzu Blossom';


    const h2Div = document.createElement('h2');
    h2Div.className = 'home';
    h2Div.textContent = 'Japanese Fusion Cuisine';

    const p1Div = document.createElement('p');
    p1Div.className = 'home';
    p1Div.textContent = `Welcome to Yuzu Blossom, where culinary innovation meets traditional Japanese craftsmanship. Nestled in the
    heart of Granada, Spain, our restaurant invites you on a gastronomic adventure like no other. From the
    moment
    you step inside, you're transported to a realm where every dish tells a story, where each bite is a symphony
    of flavors.`;

    const p2Div = document.createElement('p');
    p2Div.className = 'home';
    p2Div.textContent = `Our menu is a testament to our dedication to excellence, blending the finest ingredients with creative flair
    to create a dining experience that's both familiar and exhilaratingly new. Whether you're craving the
    delicate balance of sushi rolls infused with unexpected ingredients, or the robust umami of our signature
    ramen bowls, every dish is a masterpiece crafted with care by our talented chefs.`


    contentDiv.appendChild(h1Div);
    contentDiv.appendChild(h2Div);
    contentDiv.appendChild(p1Div);
    contentDiv.appendChild(p2Div);
};




/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _img_fish_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/fish.png */ "./src/img/fish.png");
/* harmony import */ var _img_lobster_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/lobster.png */ "./src/img/lobster.png");
/* harmony import */ var _img_poke_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/poke.png */ "./src/img/poke.png");
/* harmony import */ var _img_ramen_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/ramen.png */ "./src/img/ramen.png");
/* harmony import */ var _img_rolls_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/rolls.png */ "./src/img/rolls.png");
/* harmony import */ var _img_sake_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/sake.png */ "./src/img/sake.png");
/* harmony import */ var _img_salad_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/salad.png */ "./src/img/salad.png");
/* harmony import */ var _img_sushi_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/sushi.png */ "./src/img/sushi.png");










const loadMenu = () => {
    const contentDiv = document.querySelector('#content')

    contentDiv.innerHTML = '';

    const h1Div = document.createElement('h1');
    h1Div.className = 'menu';
    h1Div.textContent = 'Menu';

    const dishArea = document.createElement('div');
    dishArea.id = 'dishArea';
    dishArea.className = 'menu';

    dishArea.appendChild(new Dish(_img_sake_png__WEBPACK_IMPORTED_MODULE_5__, 'Sake Sunset', 'Refreshing blend of premium sake, hints of citrus, and a touch of ginger root.').loadDiv());
    dishArea.appendChild(new Dish(_img_salad_png__WEBPACK_IMPORTED_MODULE_6__, 'Garden Glow', 'Wakame seaweed salad with sesame soy dressing.').loadDiv());
    dishArea.appendChild(new Dish(_img_poke_png__WEBPACK_IMPORTED_MODULE_2__, 'Island Harmony', 'Glazed Tofu, seaweed salad, edamame, poke sauce.').loadDiv());
    dishArea.appendChild(new Dish(_img_ramen_png__WEBPACK_IMPORTED_MODULE_3__, 'Miso Mingle', 'Miso broth, tofu, seaweed, corn, ramen noodles.').loadDiv());
    dishArea.appendChild(new Dish(_img_fish_png__WEBPACK_IMPORTED_MODULE_0__, 'Tsunami Tataki', 'Seared mahi mahi slices with ginger soy glaze.').loadDiv());
    dishArea.appendChild(new Dish(_img_lobster_png__WEBPACK_IMPORTED_MODULE_1__, 'Tempura Tidal', 'Tempura lobster bites with jasmin rice balls and spicy mayo dip.').loadDiv());
    dishArea.appendChild(new Dish(_img_rolls_png__WEBPACK_IMPORTED_MODULE_4__, 'Dragon Dance', 'Eel, avocado, cucumber, topped with shitake slices.').loadDiv());
    dishArea.appendChild(new Dish(_img_sushi_png__WEBPACK_IMPORTED_MODULE_7__, 'Crunchy Maki', 'Tempura shrimp, avocado, sushi rice roll.').loadDiv());

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
        const dishDiv = document.createElement('div');
        dishDiv.className = 'menu dish';

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'menu iconWrapper';
        const img = document.createElement('img');
        img.src = this.src;
        iconWrapper.appendChild(img);

        const textWrapper = document.createElement('div');
        textWrapper.className = 'menu textWrapper';
        const title = document.createElement('h4');
        title.className = 'menu';
        title.textContent = this.name;
        const description = document.createElement('p');
        description.className = 'menu';
        description.textContent = this.desc;
        textWrapper.appendChild(title);
        textWrapper.appendChild(description);

        dishDiv.appendChild(iconWrapper);
        dishDiv.appendChild(textWrapper);

        return dishDiv;
    }

}



/***/ }),

/***/ "./src/fonts/ReggaeOne-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/ReggaeOne-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90a023f683f8cd4c0e7a.ttf";

/***/ }),

/***/ "./src/img/fish.png":
/*!**************************!*\
  !*** ./src/img/fish.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "426267140c5cbb3622ec.png";

/***/ }),

/***/ "./src/img/haruka.png":
/*!****************************!*\
  !*** ./src/img/haruka.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e585d015246ef080040d.png";

/***/ }),

/***/ "./src/img/lobster.png":
/*!*****************************!*\
  !*** ./src/img/lobster.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "598863a5e73bf31d8e99.png";

/***/ }),

/***/ "./src/img/pattern.jpeg":
/*!******************************!*\
  !*** ./src/img/pattern.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b10778690b59672f9071.jpeg";

/***/ }),

/***/ "./src/img/poke.png":
/*!**************************!*\
  !*** ./src/img/poke.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3c4deafdbff440f492a.png";

/***/ }),

/***/ "./src/img/ramen.png":
/*!***************************!*\
  !*** ./src/img/ramen.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c3ad0609f6d702f0384.png";

/***/ }),

/***/ "./src/img/rolls.png":
/*!***************************!*\
  !*** ./src/img/rolls.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b48198cf76cf9bd5f8e.png";

/***/ }),

/***/ "./src/img/ryuji.png":
/*!***************************!*\
  !*** ./src/img/ryuji.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5be97edcd1e8bbf35dec.png";

/***/ }),

/***/ "./src/img/sake.png":
/*!**************************!*\
  !*** ./src/img/sake.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3d09149ec393eb71e2d.png";

/***/ }),

/***/ "./src/img/salad.png":
/*!***************************!*\
  !*** ./src/img/salad.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9761a8b7e5d4c78d602.png";

/***/ }),

/***/ "./src/img/sushi.png":
/*!***************************!*\
  !*** ./src/img/sushi.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c7056cf7a91ee45a795.png";

/***/ }),

/***/ "./src/img/welcome.jpeg":
/*!******************************!*\
  !*** ./src/img/welcome.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41a6c2c6535475f0e360.jpeg";

/***/ }),

/***/ "./src/img/yuki.png":
/*!**************************!*\
  !*** ./src/img/yuki.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c15f23c46ab64428456a.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _loadHome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadHome.js */ "./src/loadHome.js");
/* harmony import */ var _loadMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMenu.js */ "./src/loadMenu.js");
/* harmony import */ var _loadAbout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadAbout.js */ "./src/loadAbout.js");





(0,_loadHome_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


const homeBtn = document.querySelector('#homeBtn')
homeBtn.addEventListener('click', () => (0,_loadHome_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', () => (0,_loadMenu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

const aboutBtn = document.querySelector('#aboutBtn');
aboutBtn.addEventListener('click', () => (0,_loadAbout_js__WEBPACK_IMPORTED_MODULE_3__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVJQUFnRDtBQUM1Riw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDRDQUE0QyxpSEFBcUM7QUFDakYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1DQUFtQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsYUFBYSxNQUFNLFVBQVUsVUFBVSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxL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QSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dCO0FBQ0E7QUFDRTs7QUFFdkMsd0RBQVE7OztBQUdSO0FBQ0Esd0NBQXdDLHdEQUFROztBQUVoRDtBQUNBLHdDQUF3Qyx3REFBUTs7QUFFaEQ7QUFDQSx5Q0FBeUMseURBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZEFib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkSG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZE1lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUmVnZ2FlT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvd2VsY29tZS5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvcGF0dGVybi5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUmVnZ2FlIE9uZSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5ib2R5IHtcbiAgICAtLWl2b3J5OiAjRkRGQ0VBZmY7XG4gICAgLS1hbGFiYXN0ZXI6ICNGNUYzRTdmZjtcbiAgICAtLWxpb246ICNCRDlENzFmZjtcbiAgICAtLWNveW90ZTogIzc1NkM0RGZmO1xuICAgIC0tYmVhdmVyOiAjOTU4NTZGZmY7XG4gICAgLS1jYWYtbm9pcjogIzNEMkExNWZmO1xuICAgIC0teWVsbG93OiAjRkJGRDAwZmY7XG4gICAgLS15ZWxsb3ctZ3JlZW46ICNBMkM3MDJmZjtcbiAgICAtLWF2b2NhZG86ICM0RDc5MENmZjtcbiAgICAtLWRhcmstbW9zcy1ncmVlbjogIzQ4NjQwRWZmO1xuICAgIC0tcGFraXN0YW4tZ3JlZW46ICMxRDMzMDVmZjtcblxuICAgIGZvbnQtZmFtaWx5OiAnUmVnZ2FlIE9uZSc7XG4gICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZWF2ZXIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYWxhYmFzdGVyKSA0NC42NCUsIHZhcigtLWJlYXZlcikgNDQuNjQlLCB2YXIoLS1iZWF2ZXIpIDQ2LjQzJSwgdmFyKC0tcGFraXN0YW4tZ3JlZW4pIDQ2LjQzJSwgdmFyKC0tcGFraXN0YW4tZ3JlZW4pIDQ4LjIxJSwgdmFyKC0tYmVhdmVyKSA0OC4yMSUsIHZhcigtLWJlYXZlcikgNTAlLCB2YXIoLS1hbGFiYXN0ZXIpIDUwJSwgdmFyKC0tYWxhYmFzdGVyKSA5NC42NCUsIHZhcigtLWJlYXZlcikgOTQuNjQlLCB2YXIoLS1iZWF2ZXIpIDk2LjQzJSwgdmFyKC0tcGFraXN0YW4tZ3JlZW4pIDk2LjQzJSwgdmFyKC0tcGFraXN0YW4tZ3JlZW4pIDk4LjIxJSwgdmFyKC0tYmVhdmVyKSA5OC4yMSUsIHZhcigtLWJlYXZlcikgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1Ni4wMHB4IDU2LjAwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDBweCA1cHggdmFyKC0tY2FmLW5vaXIpLFxuICAgICAgICAtM3B4IDBweCA1cHggdmFyKC0tY2FmLW5vaXIpO1xufVxuXG5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB0b3A6IDEuNnZoO1xuICAgIGxlZnQ6IDEwJTtcbiAgICByaWdodDogMTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBuYXYge1xuICAgICAgICB3aWR0aDogNzB2aDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JlZ2dhZSBPbmUnO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjh2aDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY2FmLW5vaXIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxhYmFzdGVyKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuM3ZoIDV2aDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgIzNkMmExNSAzcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogcGFkZGluZyAxMDAwbXM7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMTAwMG1zO1xuICAgICAgICAgICAgcGFkZGluZzogMS4zdmggN3ZoO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wcHgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXZvcnkpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXBha2lzdGFuLWdyZWVuKTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXBha2lzdGFuLWdyZWVuKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNS41dmg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pdm9yeSk7XG4gICAgICAgIHBhZGRpbmc6IDAgMi41dmg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZ2aDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDYwdmggNjB2aDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDAlIDYwJTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4IHZhcigtLWNhZi1ub2lyKTtcbiAgICB9XG5cbiAgICBoMS5ob21lIHtcbiAgICAgICAgbWFyZ2luOiAyOXZoIDAgLTIuNHZoO1xuXG4gICAgfVxuXG4gICAgaDIuaG9tZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgICAgICAgZm9udC1zaXplOiAxLjd2aDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFsYWJhc3Rlcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhZi1ub2lyKTtcbiAgICAgICAgb3BhY2l0eTogOTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjd2aDtcbiAgICAgICAgcGFkZGluZzogMHZoIDF2aDtcbiAgICB9XG5cbiAgICBwLmhvbWUge1xuICAgICAgICBmb250LXNpemU6IDEuNnZoO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICB0ZXh0LWluZGVudDogNnZoO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDF2aDtcbiAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNhZi1ub2lyKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOHZoO1xuICAgIH1cblxuICAgIGgxLm1lbnUge1xuICAgICAgICBtYXJnaW46IDI0dmggMCAydmg7XG4gICAgfVxuXG4gICAgZGl2Lm1lbnUjZGlzaEFyZWEge1xuICAgICAgICBjb2xvcjogdmFyKC0tY2FmLW5vaXIpO1xuICAgICAgICB3aWR0aDogNTJ2aDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBnYXA6IDAuNXZoIDN2aDtcblxuICAgICAgICAubWVudS5kaXNoIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgIC5pY29uV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDguNXZoO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDguNXZoO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXZoO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGludmVydCgxNSUpIHNlcGlhKDEzJSkgc2F0dXJhdGUoMjAyMCUpIGh1ZS1yb3RhdGUoMzUxZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoOTMlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnZoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnZoO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJ2aDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaDEuYWJvdXQge1xuICAgICAgICBtYXJnaW46IDI0dmggMCAwdmg7XG4gICAgfVxuXG4gICAgZGl2LmFib3V0I2NoZWZBcmVhIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAxdmg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jYWYtbm9pcik7XG4gICAgICAgIHdpZHRoOiA1NXZoO1xuXG4gICAgICAgIC5hYm91dC5jaGVmIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDAuN3ZoIDA7XG5cbiAgICAgICAgICAgIC5pY29uV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEydmg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJ2aDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjV2aDtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIC0wLjN2aDs7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjN2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44dmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zdmg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMnZoO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLCtEQUE0RDtJQUM1RCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLDJCQUEyQjs7SUFFM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLG1aQUFtWjtJQUNuWixnQ0FBZ0M7SUFDaEM7b0NBQ2dDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCOztJQUV2QjtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsOEJBQThCOztRQUU5QjtZQUNJLHlCQUF5QjtZQUN6QixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLHNCQUFzQjtZQUN0QixrQ0FBa0M7WUFDbEMsa0JBQWtCO1lBQ2xCLHlCQUF5QjtZQUN6Qix3Q0FBd0M7WUFDeEMsa0JBQWtCO1lBQ2xCLDBCQUEwQjtZQUMxQix3QkFBd0I7WUFDeEIsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLHlCQUF5QjtRQUM3Qjs7UUFFQTs7WUFFSSxrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLDJCQUEyQjtZQUMzQiw4QkFBOEI7WUFDOUIsNEJBQTRCO1lBQzVCLHVDQUF1QztRQUMzQztJQUNKO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlEQUF5QztJQUN6QywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjs7SUFFdEI7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLHlEQUEyQztRQUMzQywwQkFBMEI7UUFDMUIsNEJBQTRCO1FBQzVCLHdDQUF3QztJQUM1Qzs7SUFFQTtRQUNJLHFCQUFxQjs7SUFFekI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixpQ0FBaUM7UUFDakMsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsWUFBWTtRQUNaLFVBQVU7UUFDVixzQkFBc0I7UUFDdEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLGNBQWM7O1FBRWQ7WUFDSSxhQUFhOztZQUViO2dCQUNJO29CQUNJLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixtQkFBbUI7b0JBQ25CLCtGQUErRjtnQkFDbkc7WUFDSjs7WUFFQTtnQkFDSSxXQUFXO2dCQUNYLGdCQUFnQjtZQUNwQjs7WUFFQTtnQkFDSSxXQUFXO2dCQUNYLGdCQUFnQjtnQkFDaEIsa0JBQWtCO2dCQUNsQixnQkFBZ0I7WUFDcEI7UUFDSjtJQUNKOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxzQkFBc0I7UUFDdEIsV0FBVzs7UUFFWDtZQUNJLGFBQWE7WUFDYixlQUFlOztZQUVmO2dCQUNJO29CQUNJLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixtQkFBbUI7O2dCQUV2QjtZQUNKOztZQUVBO2dCQUNJLGtCQUFrQjtnQkFDbEIsZ0JBQWdCO1lBQ3BCOztZQUVBO2dCQUNJLFdBQVc7Z0JBQ1gsZ0JBQWdCO1lBQ3BCOztZQUVBO2dCQUNJLFdBQVc7Z0JBQ1gsZ0JBQWdCO2dCQUNoQixrQkFBa0I7Z0JBQ2xCLGdCQUFnQjtZQUNwQjtRQUNKO0lBQ0o7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSZWdnYWUgT25lJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUmVnZ2FlT25lLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgICAtLWl2b3J5OiAjRkRGQ0VBZmY7XFxuICAgIC0tYWxhYmFzdGVyOiAjRjVGM0U3ZmY7XFxuICAgIC0tbGlvbjogI0JEOUQ3MWZmO1xcbiAgICAtLWNveW90ZTogIzc1NkM0RGZmO1xcbiAgICAtLWJlYXZlcjogIzk1ODU2RmZmO1xcbiAgICAtLWNhZi1ub2lyOiAjM0QyQTE1ZmY7XFxuICAgIC0teWVsbG93OiAjRkJGRDAwZmY7XFxuICAgIC0teWVsbG93LWdyZWVuOiAjQTJDNzAyZmY7XFxuICAgIC0tYXZvY2FkbzogIzRENzkwQ2ZmO1xcbiAgICAtLWRhcmstbW9zcy1ncmVlbjogIzQ4NjQwRWZmO1xcbiAgICAtLXBha2lzdGFuLWdyZWVuOiAjMUQzMzA1ZmY7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnUmVnZ2FlIE9uZSc7XFxuICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZWF2ZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWFsYWJhc3RlcikgNDQuNjQlLCB2YXIoLS1iZWF2ZXIpIDQ0LjY0JSwgdmFyKC0tYmVhdmVyKSA0Ni40MyUsIHZhcigtLXBha2lzdGFuLWdyZWVuKSA0Ni40MyUsIHZhcigtLXBha2lzdGFuLWdyZWVuKSA0OC4yMSUsIHZhcigtLWJlYXZlcikgNDguMjElLCB2YXIoLS1iZWF2ZXIpIDUwJSwgdmFyKC0tYWxhYmFzdGVyKSA1MCUsIHZhcigtLWFsYWJhc3RlcikgOTQuNjQlLCB2YXIoLS1iZWF2ZXIpIDk0LjY0JSwgdmFyKC0tYmVhdmVyKSA5Ni40MyUsIHZhcigtLXBha2lzdGFuLWdyZWVuKSA5Ni40MyUsIHZhcigtLXBha2lzdGFuLWdyZWVuKSA5OC4yMSUsIHZhcigtLWJlYXZlcikgOTguMjElLCB2YXIoLS1iZWF2ZXIpIDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDU2LjAwcHggNTYuMDBweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDBweCA1cHggdmFyKC0tY2FmLW5vaXIpLFxcbiAgICAgICAgLTNweCAwcHggNXB4IHZhcigtLWNhZi1ub2lyKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgdG9wOiAxLjZ2aDtcXG4gICAgbGVmdDogMTAlO1xcbiAgICByaWdodDogMTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiA3MHZoO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSZWdnYWUgT25lJztcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHZoO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNhZi1ub2lyKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbGFiYXN0ZXIpO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuM3ZoIDV2aDtcXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkICMzZDJhMTUgM3B4O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYigwLCAwLCAwKSAwcHggMHB4IDBweCAwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMTAwMG1zO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XFxuXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMTAwMG1zO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuM3ZoIDd2aDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTBweCk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXZvcnkpO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWtpc3Rhbi1ncmVlbik7XFxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tcGFraXN0YW4tZ3JlZW4pO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvd2VsY29tZS5qcGVnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBoMSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDUuNXZoO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWl2b3J5KTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMi41dmg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA2dmg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL3BhdHRlcm4uanBlZycpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2MHZoIDYwdmg7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MCUgNjAlO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4IHZhcigtLWNhZi1ub2lyKTtcXG4gICAgfVxcblxcbiAgICBoMS5ob21lIHtcXG4gICAgICAgIG1hcmdpbjogMjl2aCAwIC0yLjR2aDtcXG5cXG4gICAgfVxcblxcbiAgICBoMi5ob21lIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDF2aDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43dmg7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYWxhYmFzdGVyKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhZi1ub2lyKTtcXG4gICAgICAgIG9wYWNpdHk6IDkwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuN3ZoO1xcbiAgICAgICAgcGFkZGluZzogMHZoIDF2aDtcXG4gICAgfVxcblxcbiAgICBwLmhvbWUge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjZ2aDtcXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgICAgICB0ZXh0LWluZGVudDogNnZoO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMXZoO1xcbiAgICAgICAgd2lkdGg6IDU1JTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jYWYtbm9pcik7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS44dmg7XFxuICAgIH1cXG5cXG4gICAgaDEubWVudSB7XFxuICAgICAgICBtYXJnaW46IDI0dmggMCAydmg7XFxuICAgIH1cXG5cXG4gICAgZGl2Lm1lbnUjZGlzaEFyZWEge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWNhZi1ub2lyKTtcXG4gICAgICAgIHdpZHRoOiA1MnZoO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICAgIGdhcDogMC41dmggM3ZoO1xcblxcbiAgICAgICAgLm1lbnUuZGlzaCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICAgICAgICAuaWNvbldyYXBwZXIge1xcbiAgICAgICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDguNXZoO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4LjV2aDtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41dmg7XFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGludmVydCgxNSUpIHNlcGlhKDEzJSkgc2F0dXJhdGUoMjAyMCUpIGh1ZS1yb3RhdGUoMzUxZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoOTMlKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBoNCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnZoO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ydmg7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJ2aDtcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgaDEuYWJvdXQge1xcbiAgICAgICAgbWFyZ2luOiAyNHZoIDAgMHZoO1xcbiAgICB9XFxuXFxuICAgIGRpdi5hYm91dCNjaGVmQXJlYSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBsZWZ0OiAxdmg7XFxuICAgICAgICBjb2xvcjogdmFyKC0tY2FmLW5vaXIpO1xcbiAgICAgICAgd2lkdGg6IDU1dmg7XFxuXFxuICAgICAgICAuYWJvdXQuY2hlZiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBtYXJnaW46IDAuN3ZoIDA7XFxuXFxuICAgICAgICAgICAgLmljb25XcmFwcGVyIHtcXG4gICAgICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMnZoO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnZoO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjV2aDtcXG5cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBoMyB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIC0wLjN2aDs7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4zdmg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGg0IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44dmg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjN2aDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMnZoO1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeXVraSBmcm9tICcuL2ltZy95dWtpLnBuZyc7XG5pbXBvcnQgaGFydWthIGZyb20gJy4vaW1nL2hhcnVrYS5wbmcnO1xuaW1wb3J0IHJ5dWppIGZyb20gJy4vaW1nL3J5dWppLnBuZyc7XG5cblxuXG5jb25zdCBsb2FkQWJvdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBoMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDFEaXYuY2xhc3NOYW1lID0gJ2Fib3V0JztcbiAgICBoMURpdi50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XG5cbiAgICBjb25zdCBjaGVmQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoZWZBcmVhLmlkID0gJ2NoZWZBcmVhJztcbiAgICBjaGVmQXJlYS5jbGFzc05hbWUgPSAnYWJvdXQnO1xuXG4gICAgY2hlZkFyZWEuYXBwZW5kQ2hpbGQobmV3IENoZWYoaGFydWthLCAnSGFydWthIElzaGlrYXdhJywgJ0d1YXJkaWFuIG9mIFRyYWRpdGlvbicsICdUaHJlZSBkZWNhZGVzIG9mIGN1bGluYXJ5IHJlZmluZW1lbnQuJywgJ1VwaG9sZGVyIG9mIHRyYWRpdGlvbmFsIGthaXNla2kgZGluaW5nIGFuZCBvbWFrYXNlIGV4cGVyaWVuY2VzLicsICdVbm1hdGNoZWQgbWFzdGVyeSBpbiBzdXNoaSBhbmQgc2FzaGltaS4nKS5sb2FkRGl2KCkpO1xuICAgIGNoZWZBcmVhLmFwcGVuZENoaWxkKG5ldyBDaGVmKHl1a2ksICdZdWtpIFRhbmFrYScsICdNaW5pbWFsaXN0IE1hdmVuJywgJzE1IHllYXJzIGRlZGljYXRlZCB0byB0aGUgY3VsaW5hcnkgY3JhZnQuJywgJ0VtYnJhY2luZyBzaW1wbGljaXR5IGluIEphcGFuZXNlIGN1bGluYXJ5IHRyYWRpdGlvbnMuJywgJ1BlcmZlY3RpbmcgYXV0aGVudGljIHJhbWVuIGFuZCBkZWxpY2F0ZSB0ZWEtaW5mdXNlZCBkZXNzZXJ0cy4nKS5sb2FkRGl2KCkpO1xuICAgIGNoZWZBcmVhLmFwcGVuZENoaWxkKG5ldyBDaGVmKHJ5dWppLCAnUnl1amkgTmFrYW11cmEnLCAnQ3VsaW5hcnkgRnVzaW9uIFZpcnR1b3NvJywgJ1RyYWluZWQgaW4gdGhlIGtpdGNoZW5zIG9mIEphcGFuIGFuZCBGcmFuY2UgZm9yIDE2IHllYXJzLicsICdIYXJtb25pb3VzIGZ1c2lvbiBvZiBKYXBhbmVzZSBhbmQgRnJlbmNoIGN1aXNpbmVzLicsICdJbm5vdmF0b3Igb2YgY3JlYXRpdmUgc3VzaGkgcm9sbHMgYW5kIGV4cXVpc2l0ZSBkZXNzZXJ0cy4nKS5sb2FkRGl2KCkpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMURpdik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjaGVmQXJlYSk7XG59O1xuXG5jbGFzcyBDaGVmIHtcbiAgICBjb25zdHJ1Y3RvcihzcmMsIG5hbWUsIHRpdGxlLCBleHAsIHN0eWxlLCBzcGVjaWFsKSB7XG4gICAgICAgIHRoaXMuc3JjID0gc3JjO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMuc3BlY2lhbCA9IHNwZWNpYWw7XG4gICAgfVxuXG4gICAgLy9SZXR1cm4gZGl2IG5vZGUgd2l0aCB0aGUgYXBwcm9waWF0ZSBlbGVtZW50cyB0byBhcHBlbmQgaW4gI2NoZWZBcmVhXG4gICAgbG9hZERpdigpIHtcbiAgICAgICAgY29uc3QgY2hlZkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVmRGl2LmNsYXNzTmFtZSA9ICdhYm91dCBjaGVmJztcblxuICAgICAgICBjb25zdCBpY29uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpY29uV3JhcHBlci5jbGFzc05hbWUgPSAnbWVudSBpY29uV3JhcHBlcic7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuc3JjID0gdGhpcy5zcmM7XG4gICAgICAgIGljb25XcmFwcGVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgICAgY29uc3QgdGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGV4dFdyYXBwZXIuY2xhc3NOYW1lID0gJ2Fib3V0IHRleHRXcmFwcGVyJztcblxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgbmFtZS5jbGFzc05hbWUgPSAnYWJvdXQnO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gJ2Fib3V0JztcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IGV4cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZXhwLmNsYXNzTmFtZSA9ICdhYm91dCc7XG4gICAgICAgIGV4cC50ZXh0Q29udGVudCA9IHRoaXMuZXhwO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBzdHlsZS5jbGFzc05hbWUgPSAnYWJvdXQnO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHRoaXMuc3R5bGU7XG5cbiAgICAgICAgY29uc3Qgc3BlY2lhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgc3BlY2lhbC5jbGFzc05hbWUgPSAnYWJvdXQnO1xuICAgICAgICBzcGVjaWFsLnRleHRDb250ZW50ID0gdGhpcy5zcGVjaWFsO1xuXG5cbiAgICAgICAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQoZXhwKTtcbiAgICAgICAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICB0ZXh0V3JhcHBlci5hcHBlbmRDaGlsZChzcGVjaWFsKTtcblxuICAgICAgICBjaGVmRGl2LmFwcGVuZENoaWxkKGljb25XcmFwcGVyKTtcbiAgICAgICAgY2hlZkRpdi5hcHBlbmRDaGlsZCh0ZXh0V3JhcHBlcik7XG5cbiAgICAgICAgcmV0dXJuIGNoZWZEaXY7XG4gICAgfVxufVxuXG5leHBvcnQgeyBsb2FkQWJvdXQgYXMgZGVmYXVsdCB9IiwiY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBoMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDFEaXYuY2xhc3NOYW1lID0gJ2hvbWUnO1xuICAgIGgxRGl2LnRleHRDb250ZW50ID0gJ1l1enUgQmxvc3NvbSc7XG5cblxuICAgIGNvbnN0IGgyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMkRpdi5jbGFzc05hbWUgPSAnaG9tZSc7XG4gICAgaDJEaXYudGV4dENvbnRlbnQgPSAnSmFwYW5lc2UgRnVzaW9uIEN1aXNpbmUnO1xuXG4gICAgY29uc3QgcDFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDFEaXYuY2xhc3NOYW1lID0gJ2hvbWUnO1xuICAgIHAxRGl2LnRleHRDb250ZW50ID0gYFdlbGNvbWUgdG8gWXV6dSBCbG9zc29tLCB3aGVyZSBjdWxpbmFyeSBpbm5vdmF0aW9uIG1lZXRzIHRyYWRpdGlvbmFsIEphcGFuZXNlIGNyYWZ0c21hbnNoaXAuIE5lc3RsZWQgaW4gdGhlXG4gICAgaGVhcnQgb2YgR3JhbmFkYSwgU3BhaW4sIG91ciByZXN0YXVyYW50IGludml0ZXMgeW91IG9uIGEgZ2FzdHJvbm9taWMgYWR2ZW50dXJlIGxpa2Ugbm8gb3RoZXIuIEZyb20gdGhlXG4gICAgbW9tZW50XG4gICAgeW91IHN0ZXAgaW5zaWRlLCB5b3UncmUgdHJhbnNwb3J0ZWQgdG8gYSByZWFsbSB3aGVyZSBldmVyeSBkaXNoIHRlbGxzIGEgc3RvcnksIHdoZXJlIGVhY2ggYml0ZSBpcyBhIHN5bXBob255XG4gICAgb2YgZmxhdm9ycy5gO1xuXG4gICAgY29uc3QgcDJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDJEaXYuY2xhc3NOYW1lID0gJ2hvbWUnO1xuICAgIHAyRGl2LnRleHRDb250ZW50ID0gYE91ciBtZW51IGlzIGEgdGVzdGFtZW50IHRvIG91ciBkZWRpY2F0aW9uIHRvIGV4Y2VsbGVuY2UsIGJsZW5kaW5nIHRoZSBmaW5lc3QgaW5ncmVkaWVudHMgd2l0aCBjcmVhdGl2ZSBmbGFpclxuICAgIHRvIGNyZWF0ZSBhIGRpbmluZyBleHBlcmllbmNlIHRoYXQncyBib3RoIGZhbWlsaWFyIGFuZCBleGhpbGFyYXRpbmdseSBuZXcuIFdoZXRoZXIgeW91J3JlIGNyYXZpbmcgdGhlXG4gICAgZGVsaWNhdGUgYmFsYW5jZSBvZiBzdXNoaSByb2xscyBpbmZ1c2VkIHdpdGggdW5leHBlY3RlZCBpbmdyZWRpZW50cywgb3IgdGhlIHJvYnVzdCB1bWFtaSBvZiBvdXIgc2lnbmF0dXJlXG4gICAgcmFtZW4gYm93bHMsIGV2ZXJ5IGRpc2ggaXMgYSBtYXN0ZXJwaWVjZSBjcmFmdGVkIHdpdGggY2FyZSBieSBvdXIgdGFsZW50ZWQgY2hlZnMuYFxuXG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgxRGl2KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgyRGl2KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHAxRGl2KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHAyRGl2KTtcbn07XG5cbmV4cG9ydCB7IGxvYWRIb21lIGFzIGRlZmF1bHQgfVxuIiwiXG5pbXBvcnQgZmlzaCBmcm9tICcuL2ltZy9maXNoLnBuZyc7XG5pbXBvcnQgbG9ic3RlciBmcm9tICcuL2ltZy9sb2JzdGVyLnBuZyc7XG5pbXBvcnQgcG9rZSBmcm9tICcuL2ltZy9wb2tlLnBuZyc7XG5pbXBvcnQgcmFtZW4gZnJvbSAnLi9pbWcvcmFtZW4ucG5nJztcbmltcG9ydCByb2xscyBmcm9tICcuL2ltZy9yb2xscy5wbmcnO1xuaW1wb3J0IHNha2UgZnJvbSAnLi9pbWcvc2FrZS5wbmcnO1xuaW1wb3J0IHNhbGFkIGZyb20gJy4vaW1nL3NhbGFkLnBuZyc7XG5pbXBvcnQgc3VzaGkgZnJvbSAnLi9pbWcvc3VzaGkucG5nJ1xuXG5jb25zdCBsb2FkTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGgxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMURpdi5jbGFzc05hbWUgPSAnbWVudSc7XG4gICAgaDFEaXYudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBjb25zdCBkaXNoQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpc2hBcmVhLmlkID0gJ2Rpc2hBcmVhJztcbiAgICBkaXNoQXJlYS5jbGFzc05hbWUgPSAnbWVudSc7XG5cbiAgICBkaXNoQXJlYS5hcHBlbmRDaGlsZChuZXcgRGlzaChzYWtlLCAnU2FrZSBTdW5zZXQnLCAnUmVmcmVzaGluZyBibGVuZCBvZiBwcmVtaXVtIHNha2UsIGhpbnRzIG9mIGNpdHJ1cywgYW5kIGEgdG91Y2ggb2YgZ2luZ2VyIHJvb3QuJykubG9hZERpdigpKTtcbiAgICBkaXNoQXJlYS5hcHBlbmRDaGlsZChuZXcgRGlzaChzYWxhZCwgJ0dhcmRlbiBHbG93JywgJ1dha2FtZSBzZWF3ZWVkIHNhbGFkIHdpdGggc2VzYW1lIHNveSBkcmVzc2luZy4nKS5sb2FkRGl2KCkpO1xuICAgIGRpc2hBcmVhLmFwcGVuZENoaWxkKG5ldyBEaXNoKHBva2UsICdJc2xhbmQgSGFybW9ueScsICdHbGF6ZWQgVG9mdSwgc2Vhd2VlZCBzYWxhZCwgZWRhbWFtZSwgcG9rZSBzYXVjZS4nKS5sb2FkRGl2KCkpO1xuICAgIGRpc2hBcmVhLmFwcGVuZENoaWxkKG5ldyBEaXNoKHJhbWVuLCAnTWlzbyBNaW5nbGUnLCAnTWlzbyBicm90aCwgdG9mdSwgc2Vhd2VlZCwgY29ybiwgcmFtZW4gbm9vZGxlcy4nKS5sb2FkRGl2KCkpO1xuICAgIGRpc2hBcmVhLmFwcGVuZENoaWxkKG5ldyBEaXNoKGZpc2gsICdUc3VuYW1pIFRhdGFraScsICdTZWFyZWQgbWFoaSBtYWhpIHNsaWNlcyB3aXRoIGdpbmdlciBzb3kgZ2xhemUuJykubG9hZERpdigpKTtcbiAgICBkaXNoQXJlYS5hcHBlbmRDaGlsZChuZXcgRGlzaChsb2JzdGVyLCAnVGVtcHVyYSBUaWRhbCcsICdUZW1wdXJhIGxvYnN0ZXIgYml0ZXMgd2l0aCBqYXNtaW4gcmljZSBiYWxscyBhbmQgc3BpY3kgbWF5byBkaXAuJykubG9hZERpdigpKTtcbiAgICBkaXNoQXJlYS5hcHBlbmRDaGlsZChuZXcgRGlzaChyb2xscywgJ0RyYWdvbiBEYW5jZScsICdFZWwsIGF2b2NhZG8sIGN1Y3VtYmVyLCB0b3BwZWQgd2l0aCBzaGl0YWtlIHNsaWNlcy4nKS5sb2FkRGl2KCkpO1xuICAgIGRpc2hBcmVhLmFwcGVuZENoaWxkKG5ldyBEaXNoKHN1c2hpLCAnQ3J1bmNoeSBNYWtpJywgJ1RlbXB1cmEgc2hyaW1wLCBhdm9jYWRvLCBzdXNoaSByaWNlIHJvbGwuJykubG9hZERpdigpKTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaDFEaXYpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGlzaEFyZWEpO1xuXG59O1xuXG5jbGFzcyBEaXNoIHtcbiAgICBjb25zdHJ1Y3RvcihzcmMsIG5hbWUsIGRlc2MpIHtcbiAgICAgICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgfVxuXG4gICAgLy9SZXR1cm4gZGl2IG5vZGUgd2l0aCB0aGUgYXBwcm9waWF0ZSBlbGVtZW50cyB0byBhcHBlbmQgaW4gI2Rpc2hBcmVhXG4gICAgbG9hZERpdigpIHtcbiAgICAgICAgY29uc3QgZGlzaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXNoRGl2LmNsYXNzTmFtZSA9ICdtZW51IGRpc2gnO1xuXG4gICAgICAgIGNvbnN0IGljb25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGljb25XcmFwcGVyLmNsYXNzTmFtZSA9ICdtZW51IGljb25XcmFwcGVyJztcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSB0aGlzLnNyYztcbiAgICAgICAgaWNvbldyYXBwZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgICBjb25zdCB0ZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0V3JhcHBlci5jbGFzc05hbWUgPSAnbWVudSB0ZXh0V3JhcHBlcic7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gJ21lbnUnO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdtZW51JztcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLmRlc2M7XG4gICAgICAgIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGRpc2hEaXYuYXBwZW5kQ2hpbGQoaWNvbldyYXBwZXIpO1xuICAgICAgICBkaXNoRGl2LmFwcGVuZENoaWxkKHRleHRXcmFwcGVyKTtcblxuICAgICAgICByZXR1cm4gZGlzaERpdjtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgbG9hZE1lbnUgYXMgZGVmYXVsdCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vbG9hZEhvbWUuanMnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbG9hZE1lbnUuanMnO1xuaW1wb3J0IGxvYWRBYm91dCBmcm9tICcuL2xvYWRBYm91dC5qcyc7XG5cbmxvYWRIb21lKCk7XG5cblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lQnRuJylcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBsb2FkSG9tZSgpKTtcblxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51QnRuJyk7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9hZE1lbnUoKSk7XG5cbmNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0QnRuJyk7XG5hYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGxvYWRBYm91dCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
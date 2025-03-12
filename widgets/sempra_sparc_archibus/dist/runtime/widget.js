System.register(["jimu-core","jimu-arcgis","esri/views/draw/Draw.js","esri/rest/support/IdentifyParameters.js","esri/rest/identify.js","esri/rest/support/RelationshipQuery.js","esri/rest/query.js","esri/geometry/Point.js","esri/Graphic.js","esri/Color.js"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_views_draw_Draw_js__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_support_IdentifyParameters_js__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_identify_js__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_support_RelationshipQuery_js__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_query_js__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Point_js__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic_js__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_Color_js__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_views_draw_Draw_js__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_support_IdentifyParameters_js__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_identify_js__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_support_RelationshipQuery_js__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_query_js__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Point_js__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic_js__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_Color_js__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_views_draw_Draw_js__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_support_IdentifyParameters_js__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_identify_js__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_support_RelationshipQuery_js__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_query_js__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Point_js__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic_js__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_Color_js__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "@arcgis/core/Color.js":
/*!********************************!*\
  !*** external "esri/Color.js" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_Color_js__;

/***/ }),

/***/ "@arcgis/core/Graphic.js":
/*!**********************************!*\
  !*** external "esri/Graphic.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic_js__;

/***/ }),

/***/ "@arcgis/core/geometry/Point.js":
/*!*****************************************!*\
  !*** external "esri/geometry/Point.js" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Point_js__;

/***/ }),

/***/ "@arcgis/core/rest/identify.js":
/*!****************************************!*\
  !*** external "esri/rest/identify.js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_identify_js__;

/***/ }),

/***/ "@arcgis/core/rest/query.js":
/*!*************************************!*\
  !*** external "esri/rest/query.js" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_query_js__;

/***/ }),

/***/ "@arcgis/core/rest/support/IdentifyParameters.js":
/*!**********************************************************!*\
  !*** external "esri/rest/support/IdentifyParameters.js" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_support_IdentifyParameters_js__;

/***/ }),

/***/ "@arcgis/core/rest/support/RelationshipQuery.js":
/*!*********************************************************!*\
  !*** external "esri/rest/support/RelationshipQuery.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_rest_support_RelationshipQuery_js__;

/***/ }),

/***/ "@arcgis/core/views/draw/Draw.js":
/*!******************************************!*\
  !*** external "esri/views/draw/Draw.js" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_views_draw_Draw_js__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/sempra_sparc_archibus/src/runtime/widget.tsx ***!
  \******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _arcgis_core_views_draw_Draw_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/views/draw/Draw.js */ "@arcgis/core/views/draw/Draw.js");
/* harmony import */ var _arcgis_core_rest_support_IdentifyParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/rest/support/IdentifyParameters.js */ "@arcgis/core/rest/support/IdentifyParameters.js");
/* harmony import */ var _arcgis_core_rest_identify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/rest/identify.js */ "@arcgis/core/rest/identify.js");
/* harmony import */ var _arcgis_core_rest_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @arcgis/core/rest/support/RelationshipQuery.js */ "@arcgis/core/rest/support/RelationshipQuery.js");
/* harmony import */ var _arcgis_core_rest_query_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @arcgis/core/rest/query.js */ "@arcgis/core/rest/query.js");
/* harmony import */ var _arcgis_core_geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @arcgis/core/geometry/Point.js */ "@arcgis/core/geometry/Point.js");
/* harmony import */ var _arcgis_core_Graphic_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @arcgis/core/Graphic.js */ "@arcgis/core/Graphic.js");
/* harmony import */ var _arcgis_core_Color_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @arcgis/core/Color.js */ "@arcgis/core/Color.js");










class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            jimuMapView: null,
            isModalOpen: false
        };
        this.pointDraw = null;
        this.draw = null;
        this.identifyParamsArray = [];
        this.identifyTaskArray = [];
        this.archibusParamsObject = {};
        this.foundFeatures = [];
        this.markerSymbol = {
            type: "simple-marker",
            style: "circle",
            color: new _arcgis_core_Color_js__WEBPACK_IMPORTED_MODULE_9__["default"]([255, 0, 0, 0.2]),
            size: "30px"
        };
        this.pointGraphic = null;
        this.textSymbol = {
            type: "text",
            color: "white",
            haloColor: "black",
            haloSize: "1px",
            text: "Found features: ",
            xoffset: 3,
            yoffset: 3,
            font: {
                size: 12,
                family: "Arial Italic",
                weight: "normal"
            }
        };
        this.textGraphic = null;
        this.activePointClick = () => {
            if (this.draw) {
                // creates and returns an instance of PolyLineDrawAction
                this.draw.reset();
                let pointDraw = this.draw.create("point");
                // Show tooltip when the drawing starts
                pointDraw.on("cursor-update", (event) => {
                    this.showTooltip(this.state.jimuMapView.view.toScreen(event.mapPoint));
                });
                // Show tooltip when the drawing starts
                pointDraw.on("draw-complete", (event) => {
                    //  pointDraw.on("click", (event) => {    //Click event does not work
                    this.doIdentify(event);
                });
            }
        };
        this.doIdentify = (event) => {
            if (this.props.state == "OPENED") {
                // Create identify tasks and wait for the response from the server
                this.state.jimuMapView.view.graphics.removeAll();
                const tooltip = document.getElementById('tooltip_Archibus');
                tooltip.innerText = 'Finding features in the map...';
                let point = new _arcgis_core_geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
                    x: event.coordinates[0],
                    y: event.coordinates[1],
                    spatialReference: this.state.jimuMapView.view.spatialReference
                });
                this.pointGraphic = new _arcgis_core_Graphic_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
                    geometry: point,
                    symbol: this.markerSymbol
                });
                this.state.jimuMapView.view.graphics.add(this.pointGraphic);
                this.textGraphic = new _arcgis_core_Graphic_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
                    geometry: point,
                    symbol: this.textSymbol
                });
                let promiseArray = [];
                let promiseArrayRelationship = [];
                this.archibusParamsObject = {};
                this.foundFeatures = [];
                for (let i = 0; i < this.props.config.layers.layer.length; i++) {
                    let identifyParams = new _arcgis_core_rest_support_IdentifyParameters_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
                    identifyParams.tolerance = 30;
                    identifyParams.returnGeometry = true;
                    identifyParams.layerIds = [this.props.config.layers.layer[i].id];
                    identifyParams.layerOption = "all";
                    identifyParams.width = this.state.jimuMapView.view.width;
                    identifyParams.height = this.state.jimuMapView.view.height;
                    identifyParams.mapExtent = this.state.jimuMapView.view.extent;
                    identifyParams.geometry = point;
                    this.identifyParamsArray.push(identifyParams);
                    // Capture the value of i using a closure
                    let layerIndex = i;
                    let promiseIdentify = _arcgis_core_rest_identify_js__WEBPACK_IMPORTED_MODULE_4__.identify(this.props.config.layers.layer[layerIndex].url, identifyParams).then((response) => {
                        let results = response.results;
                        if (response.results.length > 0) {
                            if (this.props.config.layers.layer[layerIndex].Relationships != null) {
                                let relatedQuery = new _arcgis_core_rest_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
                                relatedQuery.outFields = this.props.config.layers.layer[layerIndex].SelectFieldNames;
                                relatedQuery.relationshipId = this.props.config.layers.layer[layerIndex].Relationships.id;
                                relatedQuery.outSpatialReference = this.state.jimuMapView.view.spatialReference;
                                let objectIds = results.map(result => result.feature.attributes.OBJECTID);
                                relatedQuery.objectIds = objectIds;
                                // query related features that meet the query parameters
                                let url = this.props.config.layers.layer[layerIndex].url + "/" + this.props.config.layers.layer[layerIndex].id;
                                let promiseRelated = _arcgis_core_rest_query_js__WEBPACK_IMPORTED_MODULE_6__.executeRelationshipQuery(url, relatedQuery).then((results2) => {
                                    for (let i = 0; i < objectIds.length; i++) {
                                        if (objectIds[i] in results2) {
                                            let fieldName = this.props.config.layers.layer[layerIndex].SelectFieldNames[0];
                                            let paramName = this.props.config.layers.layer[layerIndex].fields.field[0].archibusparam;
                                            for (let j = 0; j < results2[objectIds[i]].features.length; j++) {
                                                let value = results2[objectIds[i]].features[j].attributes[fieldName];
                                                if (value) {
                                                    if (this.archibusParamsObject[paramName]) {
                                                        if (!this.archibusParamsObject[paramName].includes(value)) {
                                                            this.archibusParamsObject[paramName] += "," + value;
                                                        }
                                                    }
                                                    else {
                                                        this.archibusParamsObject[paramName] = value;
                                                    }
                                                    if (this.foundFeatures.indexOf(this.props.config.layers.layer[layerIndex].name) < 0) {
                                                        this.foundFeatures.push(this.props.config.layers.layer[layerIndex].name);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                });
                                promiseArrayRelationship.push(promiseRelated);
                            }
                            else {
                                for (let i = 0; i < this.props.config.layers.layer[layerIndex].fields.field.length; i++) {
                                    let fieldName = this.props.config.layers.layer[layerIndex].SelectFieldNames[i];
                                    let paramName = this.props.config.layers.layer[layerIndex].fields.field[i].archibusparam;
                                    let value = results[0].feature.attributes[fieldName];
                                    if (value) {
                                        if (this.archibusParamsObject[paramName]) {
                                            if (!this.archibusParamsObject[paramName].includes(value))
                                                this.archibusParamsObject[paramName] += "," + value;
                                        }
                                        else {
                                            this.archibusParamsObject[paramName] = value;
                                        }
                                        if (this.foundFeatures.indexOf(this.props.config.layers.layer[layerIndex].name) < 0) {
                                            this.foundFeatures.push(this.props.config.layers.layer[layerIndex].name);
                                        }
                                    }
                                }
                            }
                        }
                    })
                        .catch(function (error) {
                        tooltip.innerText = 'Error identifying features';
                        console.error("Error identifying features:", error);
                    });
                    promiseArray.push(promiseIdentify);
                }
                Promise.all(promiseArray).then(() => {
                    if (promiseArrayRelationship.length == 0) {
                        this.sendRequest();
                    }
                    else {
                        Promise.all(promiseArrayRelationship).then(() => {
                            this.sendRequest();
                        });
                    }
                });
                this.activePointClick();
            }
        };
        this.sendRequest = () => {
            try {
                const tooltip = document.getElementById('tooltip_Archibus');
                let postData = { "ViewName": this.props.config.ViewName };
                for (let items in this.archibusParamsObject) {
                    postData[items] = this.archibusParamsObject[items];
                }
                if (this.foundFeatures.length == 0) {
                    tooltip.innerText = `Found no features ${this.foundFeatures.join()}`;
                    return;
                }
                else {
                    tooltip.innerText = `Found features: ${this.foundFeatures.join()}`;
                    this.textGraphic.symbol.text = `Found features: ${this.foundFeatures.join()}`;
                }
                let url = this.props.config.WebServiceURL + "?" + postData.ViewName + "&";
                for (let itemsdata in postData) {
                    if (itemsdata != "ViewName")
                        url += itemsdata + "=" + postData[itemsdata] + "&";
                }
                console.log("Archibuc URL:" + url);
                console.log("URL length:", url.length);
                let urlLen = url.length;
                if (urlLen > 2048) {
                    let msgOver = "Please zoom in the map and select less features. Exceed maximum allowed features for Archibus.";
                    tooltip.innerText = msgOver;
                    console.warn(msgOver);
                }
                else {
                    this.hideTooltip();
                    this.state.jimuMapView.view.graphics.add(this.textGraphic);
                    window.setTimeout(() => {
                        window.open(url);
                    }, 1500);
                }
            }
            catch (ex) {
                console.log(ex);
            }
        };
        this.activeViewChange = (jmv) => {
            this.setState({
                jimuMapView: jmv
            });
            window.setTimeout(() => {
                // The jimuMapView does not appread immediately, so we need to wait for it to appear
                if (this.state.jimuMapView.view) {
                    this.draw = new _arcgis_core_views_draw_Draw_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
                        view: this.state.jimuMapView.view
                    });
                    // Create tooltip for drawing
                    const tooltip = document.createElement('div');
                    tooltip.id = 'tooltip_Archibus';
                    tooltip.style.position = 'absolute';
                    tooltip.style.display = 'none';
                    tooltip.style.background = 'white';
                    tooltip.style.padding = '5px';
                    tooltip.style.border = '1px solid black';
                    // Append the new div to the body
                    this.state.jimuMapView.view.container.appendChild(tooltip);
                    this.activePointClick();
                }
            }, 300);
        };
        this.showTooltip = (pixels) => {
            const tooltip = document.getElementById('tooltip_Archibus');
            if (tooltip) {
                tooltip.style.left = (pixels.x + 7) + `px`; //Important to add px. Otherwise, the mouse click event will always click on the tooltip
                tooltip.style.top = (pixels.y + 7) + `px`;
                tooltip.style.display = 'block';
                tooltip.innerText = 'Click on the feature to view Archibus Data';
            }
        };
        this.sleep = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        };
        this.hideTooltip = () => {
            const tooltip = document.getElementById('tooltip_Archibus');
            if (tooltip) {
                tooltip.style.display = 'none';
            }
        };
        // Using jQuery in REACT is debatable. If you do want to use it, use it in a consistent way for customized Experience Builder Widgets in SDGE. 
        // The code below will load jQuery if it is not already loaded.
        // if (window.jQuery?.fn?.jquery.startsWith("3.") != true) {
        //   const script = document.createElement('script');
        //   script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
        //   script.async = true;
        //   document.body.appendChild(script);
        //   console.log('Load jQuery in this widget: ' + this.props.manifest.name);
        // } else {
        //   console.log('jQuery is already loaded in other widget. No need to load in this widget: '+ this.props.manifest.name);
        // }
    }
    componentDidMount() {
        var _a;
        //Hide the panel 
        if (((_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a.length) === 1) {
            $('#id_archibus_panel').parent(".widget-content").parents(".controller-panel.flex-column").hide(); //style 1 
            $('#id_archibus_panel').parent(".widget-content").parents(".floating-panel.popper").hide(); //style 2
        }
    }
    render() {
        var _a, _b;
        if (this.props.state == "OPENED") {
            this.activePointClick();
        }
        else {
            this.hideTooltip();
            if (this.draw) {
                this.draw.reset();
            }
        }
        if (this.state.jimuMapView) {
            this.state.jimuMapView.view.graphics.removeAll();
        }
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { id: "id_archibus_panel", className: "widget-archibus jimu-widget" }, (((_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a.length) === 1) ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_b = this.props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b[0], onActiveViewChange: this.activeViewChange }))) : jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, "Your widget is not setup correctly with a map widget.")));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZW1wcmFfc3BhcmNfYXJjaGlidXMvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTk87QUFDVTtBQUlsQjtBQUM4QjtBQUN2QjtBQUNxQjtBQUMzQjtBQUVEO0FBRUw7QUFDSjtBQVExQixNQUFNLE1BQU8sU0FBUSw0Q0FBSyxDQUFDLGFBQStDO0lBd0N2RixZQUFhLEtBQUs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQztRQXZDZCxVQUFLLEdBQUc7WUFDTixXQUFXLEVBQUUsSUFBSTtZQUNqQixXQUFXLEVBQUUsS0FBSztTQUNuQjtRQUVELGNBQVMsR0FBUSxJQUFJO1FBQ3JC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QUssQ0FBQyxlQUFlLDBDQUFFLE1BQU0sTUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDNUMsMkRBQUMsNENBQUssQ0FBQyxRQUFRO1lBQ2IsMkRBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxVQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQy9DLGtCQUFrQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsR0FDekMsQ0FDYSxDQUNsQixDQUFDLENBQUMsQ0FBQyw4SEFBNEQsQ0FDMUQsQ0FDUDtJQUNILENBQUM7Q0FDRjtBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0NvbG9yLmpzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0dyYXBoaWMuanNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvUG9pbnQuanNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVzdC9pZGVudGlmeS5qc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZXN0L3F1ZXJ5LmpzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3Jlc3Qvc3VwcG9ydC9JZGVudGlmeVBhcmFtZXRlcnMuanNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVzdC9zdXBwb3J0L1JlbGF0aW9uc2hpcFF1ZXJ5LmpzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3ZpZXdzL2RyYXcvRHJhdy5qc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2VtcHJhX3NwYXJjX2FyY2hpYnVzL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9Db2xvcl9qc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfR3JhcGhpY19qc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfZ2VvbWV0cnlfUG9pbnRfanNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3Jlc3RfaWRlbnRpZnlfanNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3Jlc3RfcXVlcnlfanNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3Jlc3Rfc3VwcG9ydF9JZGVudGlmeVBhcmFtZXRlcnNfanNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3Jlc3Rfc3VwcG9ydF9SZWxhdGlvbnNoaXBRdWVyeV9qc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfdmlld3NfZHJhd19EcmF3X2pzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IHR5cGUgQWxsV2lkZ2V0UHJvcHMsIGpzeCwgUmVhY3R9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5pbXBvcnQgRHJhdyBmcm9tIFwiQGFyY2dpcy9jb3JlL3ZpZXdzL2RyYXcvRHJhdy5qc1wiXHJcbmltcG9ydCBJZGVudGlmeVBhcmFtZXRlcnMgZnJvbSBcIkBhcmNnaXMvY29yZS9yZXN0L3N1cHBvcnQvSWRlbnRpZnlQYXJhbWV0ZXJzLmpzXCJcclxuaW1wb3J0ICogYXMgaWRlbnRpZnkgZnJvbSBcIkBhcmNnaXMvY29yZS9yZXN0L2lkZW50aWZ5LmpzXCJcclxuaW1wb3J0IFJlbGF0aW9uc2hpcFF1ZXJ5IGZyb20gXCJAYXJjZ2lzL2NvcmUvcmVzdC9zdXBwb3J0L1JlbGF0aW9uc2hpcFF1ZXJ5LmpzXCJcclxuaW1wb3J0ICogYXMgcXVlcnkgZnJvbSBcIkBhcmNnaXMvY29yZS9yZXN0L3F1ZXJ5LmpzXCJcclxuXHJcbmltcG9ydCBQb2ludCBmcm9tIFwiQGFyY2dpcy9jb3JlL2dlb21ldHJ5L1BvaW50LmpzXCJcclxuaW1wb3J0IFNpbXBsZU1hcmtlclN5bWJvbCBmcm9tIFwiQGFyY2dpcy9jb3JlL3N5bWJvbHMvU2ltcGxlTWFya2VyU3ltYm9sLmpzXCJcclxuaW1wb3J0IEdyYXBoaWMgZnJvbSBcIkBhcmNnaXMvY29yZS9HcmFwaGljLmpzXCJcclxuaW1wb3J0IENvbG9yIGZyb20gXCJAYXJjZ2lzL2NvcmUvQ29sb3IuanNcIlxyXG5pbXBvcnQgVGV4dFN5bWJvbCBmcm9tIFwiQGFyY2dpcy9jb3JlL3N5bWJvbHMvVGV4dFN5bWJvbC5qc1wiXHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlIHtcclxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXdcclxuICBpc01vZGFsT3BlbjogYm9vbGVhblxyXG4gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sIElTdGF0ZT4ge1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGppbXVNYXBWaWV3OiBudWxsLFxyXG4gICAgaXNNb2RhbE9wZW46IGZhbHNlXHJcbiAgfVxyXG5cclxuICBwb2ludERyYXc6IGFueSA9IG51bGxcclxuICBkcmF3OiBEcmF3ID0gbnVsbFxyXG5cclxuICBpZGVudGlmeVBhcmFtc0FycmF5OiBhbnkgPSBbXVxyXG4gIGlkZW50aWZ5VGFza0FycmF5OiBhbnkgPSBbXVxyXG4gIGFyY2hpYnVzUGFyYW1zT2JqZWN0OiBhbnkgPSB7fVxyXG5cclxuICBmb3VuZEZlYXR1cmVzOiBBcnJheTxzdHJpbmc+ID0gW11cclxuXHJcbiAgbWFya2VyU3ltYm9sOiBTaW1wbGVNYXJrZXJTeW1ib2wgPSB7XHJcbiAgICB0eXBlOiBcInNpbXBsZS1tYXJrZXJcIiwgIFxyXG4gICAgc3R5bGU6IFwiY2lyY2xlXCIsXHJcbiAgICBjb2xvcjogbmV3IENvbG9yKFsgMjU1LCAwLCAwLCAwLjIgXSksXHJcbiAgICBzaXplOiBcIjMwcHhcIlxyXG4gIH1cclxuICBwb2ludEdyYXBoaWM6IEdyYXBoaWMgPSBudWxsXHJcblxyXG4gIHRleHRTeW1ib2w6IFRleHRTeW1ib2wgPSB7XHJcbiAgICB0eXBlOiBcInRleHRcIiwgIFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIGhhbG9Db2xvcjogXCJibGFja1wiLFxyXG4gICAgaGFsb1NpemU6IFwiMXB4XCIsXHJcbiAgICB0ZXh0OiBcIkZvdW5kIGZlYXR1cmVzOiBcIixcclxuICAgIHhvZmZzZXQ6IDMsXHJcbiAgICB5b2Zmc2V0OiAzLFxyXG4gICAgZm9udDogeyAgXHJcbiAgICAgIHNpemU6IDEyLFxyXG4gICAgICBmYW1pbHk6IFwiQXJpYWwgSXRhbGljXCIsXHJcbiAgICAgIHdlaWdodDogXCJub3JtYWxcIlxyXG4gICAgfVxyXG4gIH1cclxuICB0ZXh0R3JhcGhpYzogR3JhcGhpYyA9IG51bGwgIFxyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgLy8gVXNpbmcgalF1ZXJ5IGluIFJFQUNUIGlzIGRlYmF0YWJsZS4gSWYgeW91IGRvIHdhbnQgdG8gdXNlIGl0LCB1c2UgaXQgaW4gYSBjb25zaXN0ZW50IHdheSBmb3IgY3VzdG9taXplZCBFeHBlcmllbmNlIEJ1aWxkZXIgV2lkZ2V0cyBpbiBTREdFLiBcclxuICAgIC8vIFRoZSBjb2RlIGJlbG93IHdpbGwgbG9hZCBqUXVlcnkgaWYgaXQgaXMgbm90IGFscmVhZHkgbG9hZGVkLlxyXG4gICAgLy8gaWYgKHdpbmRvdy5qUXVlcnk/LmZuPy5qcXVlcnkuc3RhcnRzV2l0aChcIjMuXCIpICE9IHRydWUpIHtcclxuICAgIC8vICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAvLyAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuNy4xL2pxdWVyeS5taW4uanNcIjtcclxuICAgIC8vICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgIC8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygnTG9hZCBqUXVlcnkgaW4gdGhpcyB3aWRnZXQ6ICcgKyB0aGlzLnByb3BzLm1hbmlmZXN0Lm5hbWUpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ2pRdWVyeSBpcyBhbHJlYWR5IGxvYWRlZCBpbiBvdGhlciB3aWRnZXQuIE5vIG5lZWQgdG8gbG9hZCBpbiB0aGlzIHdpZGdldDogJysgdGhpcy5wcm9wcy5tYW5pZmVzdC5uYW1lKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy9IaWRlIHRoZSBwYW5lbCBcclxuICAgIGlmICh0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICQoJyNpZF9hcmNoaWJ1c19wYW5lbCcpLnBhcmVudChcIi53aWRnZXQtY29udGVudFwiKS5wYXJlbnRzKFwiLmNvbnRyb2xsZXItcGFuZWwuZmxleC1jb2x1bW5cIikuaGlkZSgpOyAgIC8vc3R5bGUgMSBcclxuICAgICAgJCgnI2lkX2FyY2hpYnVzX3BhbmVsJykucGFyZW50KFwiLndpZGdldC1jb250ZW50XCIpLnBhcmVudHMoXCIuZmxvYXRpbmctcGFuZWwucG9wcGVyXCIpLmhpZGUoKTsgICAgICAgICAgLy9zdHlsZSAyXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmVQb2ludENsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuZHJhdykgeyAgICAgXHJcbiAgICAgIC8vIGNyZWF0ZXMgYW5kIHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgUG9seUxpbmVEcmF3QWN0aW9uXHJcbiAgICAgIHRoaXMuZHJhdy5yZXNldCgpXHJcbiAgICAgIGxldCBwb2ludERyYXcgPSB0aGlzLmRyYXcuY3JlYXRlKFwicG9pbnRcIik7XHJcblxyXG4gICAgICAvLyBTaG93IHRvb2x0aXAgd2hlbiB0aGUgZHJhd2luZyBzdGFydHNcclxuICAgICAgcG9pbnREcmF3Lm9uKFwiY3Vyc29yLXVwZGF0ZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNob3dUb29sdGlwKHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy50b1NjcmVlbihldmVudC5tYXBQb2ludCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFNob3cgdG9vbHRpcCB3aGVuIHRoZSBkcmF3aW5nIHN0YXJ0c1xyXG4gICAgICBwb2ludERyYXcub24oXCJkcmF3LWNvbXBsZXRlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAvLyAgcG9pbnREcmF3Lm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7ICAgIC8vQ2xpY2sgZXZlbnQgZG9lcyBub3Qgd29ya1xyXG4gICAgICAgIHRoaXMuZG9JZGVudGlmeShldmVudCk7XHJcbiAgICAgIH0pOyAgICBcclxuICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvSWRlbnRpZnkgPSAoZXZlbnQpID0+IHtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9wcy5zdGF0ZSA9PSBcIk9QRU5FRFwiKSB7XHJcbiAgICAgIC8vIENyZWF0ZSBpZGVudGlmeSB0YXNrcyBhbmQgd2FpdCBmb3IgdGhlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxyXG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ3JhcGhpY3MucmVtb3ZlQWxsKCkgICAgICBcclxuICAgICAgY29uc3QgdG9vbHRpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b29sdGlwX0FyY2hpYnVzJyk7XHJcbiAgICAgIHRvb2x0aXAuaW5uZXJUZXh0ID0gJ0ZpbmRpbmcgZmVhdHVyZXMgaW4gdGhlIG1hcC4uLic7ICAgICAgXHJcblxyXG4gICAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoe1xyXG4gICAgICAgIHg6IGV2ZW50LmNvb3JkaW5hdGVzWzBdLFxyXG4gICAgICAgIHk6IGV2ZW50LmNvb3JkaW5hdGVzWzFdLFxyXG4gICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgIH0pICAgICAgXHJcbiAgICAgIHRoaXMucG9pbnRHcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgIGdlb21ldHJ5OiBwb2ludCxcclxuICAgICAgICBzeW1ib2w6IHRoaXMubWFya2VyU3ltYm9sXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5ncmFwaGljcy5hZGQodGhpcy5wb2ludEdyYXBoaWMpXHJcblxyXG4gICAgICB0aGlzLnRleHRHcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgIGdlb21ldHJ5OiBwb2ludCxcclxuICAgICAgICBzeW1ib2w6IHRoaXMudGV4dFN5bWJvbFxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgbGV0IHByb21pc2VBcnJheSA9IFtdXHJcbiAgICAgIGxldCBwcm9taXNlQXJyYXlSZWxhdGlvbnNoaXAgPSBbXVxyXG4gICAgICB0aGlzLmFyY2hpYnVzUGFyYW1zT2JqZWN0ID0ge31cclxuICAgICAgdGhpcy5mb3VuZEZlYXR1cmVzID0gW11cclxuICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5wcm9wcy5jb25maWcubGF5ZXJzLmxheWVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlkZW50aWZ5UGFyYW1zID0gbmV3IElkZW50aWZ5UGFyYW1ldGVycygpICAgICAgICBcclxuICAgICAgICBpZGVudGlmeVBhcmFtcy50b2xlcmFuY2UgPSAzMFxyXG4gICAgICAgIGlkZW50aWZ5UGFyYW1zLnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgICAgIGlkZW50aWZ5UGFyYW1zLmxheWVySWRzID0gW3RoaXMucHJvcHMuY29uZmlnLmxheWVycy5sYXllcltpXS5pZF1cclxuICAgICAgICBpZGVudGlmeVBhcmFtcy5sYXllck9wdGlvbiA9IFwiYWxsXCJcclxuICAgICAgICBpZGVudGlmeVBhcmFtcy53aWR0aCA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aWR0aFxyXG4gICAgICAgIGlkZW50aWZ5UGFyYW1zLmhlaWdodCA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5oZWlnaHRcclxuICAgICAgICBpZGVudGlmeVBhcmFtcy5tYXBFeHRlbnQgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZXh0ZW50XHJcbiAgICAgICAgaWRlbnRpZnlQYXJhbXMuZ2VvbWV0cnkgPSBwb2ludFxyXG4gICAgICAgIHRoaXMuaWRlbnRpZnlQYXJhbXNBcnJheS5wdXNoKGlkZW50aWZ5UGFyYW1zKVxyXG4gICAgICAgIC8vIENhcHR1cmUgdGhlIHZhbHVlIG9mIGkgdXNpbmcgYSBjbG9zdXJlXHJcbiAgICAgICAgbGV0IGxheWVySW5kZXggPSBpOyAgICAgICAgXHJcbiAgICAgICAgbGV0IHByb21pc2VJZGVudGlmeSA9IGlkZW50aWZ5LmlkZW50aWZ5KHRoaXMucHJvcHMuY29uZmlnLmxheWVycy5sYXllcltsYXllckluZGV4XS51cmwsIGlkZW50aWZ5UGFyYW1zKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgbGV0IHJlc3VsdHMgPSByZXNwb25zZS5yZXN1bHRzXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0cy5sZW5ndGggPiAwKSB7ICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jb25maWcubGF5ZXJzLmxheWVyW2xheWVySW5kZXhdLlJlbGF0aW9uc2hpcHMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIGxldCByZWxhdGVkUXVlcnkgPSBuZXcgUmVsYXRpb25zaGlwUXVlcnkoKTtcclxuICAgICAgICAgICAgICByZWxhdGVkUXVlcnkub3V0RmllbGRzID0gdGhpcy5wcm9wcy5jb25maWcubGF5ZXJzLmxheWVyW2xheWVySW5kZXhdLlNlbGVjdEZpZWxkTmFtZXNcclxuICAgICAgICAgICAgICByZWxhdGVkUXVlcnkucmVsYXRpb25zaGlwSWQgPSB0aGlzLnByb3BzLmNvbmZpZy5sYXllcnMubGF5ZXJbbGF5ZXJJbmRleF0uUmVsYXRpb25zaGlwcy5pZFxyXG4gICAgICAgICAgICAgIHJlbGF0ZWRRdWVyeS5vdXRTcGF0aWFsUmVmZXJlbmNlID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICAgICAgICBsZXQgb2JqZWN0SWRzID0gcmVzdWx0cy5tYXAocmVzdWx0ID0+IHJlc3VsdC5mZWF0dXJlLmF0dHJpYnV0ZXMuT0JKRUNUSUQpXHJcbiAgICAgICAgICAgICAgcmVsYXRlZFF1ZXJ5Lm9iamVjdElkcyA9IG9iamVjdElkc1xyXG5cclxuICAgICAgICAgICAgICAvLyBxdWVyeSByZWxhdGVkIGZlYXR1cmVzIHRoYXQgbWVldCB0aGUgcXVlcnkgcGFyYW1ldGVyc1xyXG4gICAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLmNvbmZpZy5sYXllcnMubGF5ZXJbbGF5ZXJJbmRleF0udXJsICsgXCIvXCIgKyB0aGlzLnByb3BzLmNvbmZpZy5sYXllcnMubGF5ZXJbbGF5ZXJJbmRleF0uaWQ7XHJcbiAgICAgICAgICAgICAgbGV0IHByb21pc2VSZWxhdGVkID0gcXVlcnkuZXhlY3V0ZVJlbGF0aW9uc2hpcFF1ZXJ5KHVybCwgcmVsYXRlZFF1ZXJ5KS50aGVuKChyZXN1bHRzMikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RJZHMubGVuZ3RoOyBpKyspIHsgXHJcbiAgICAgICAgICAgICAgICAgIGlmIChvYmplY3RJZHNbaV0gaW4gcmVzdWx0czIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGROYW1lID0gdGhpcy5wcm9wcy5jb25maWcubGF5ZXJzLmxheWVyW2xheWVySW5kZXhdLlNlbGVjdEZpZWxkTmFtZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtTmFtZSA9IHRoaXMucHJvcHMuY29uZmlnLmxheWVycy5sYXllcltsYXllckluZGV4XS5maWVsZHMuZmllbGRbMF0uYXJjaGlidXNwYXJhbTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdHMyW29iamVjdElkc1tpXV0uZmVhdHVyZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHJlc3VsdHMyW29iamVjdElkc1tpXV0uZmVhdHVyZXNbal0uYXR0cmlidXRlc1tmaWVsZE5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJjaGlidXNQYXJhbXNPYmplY3RbcGFyYW1OYW1lXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuYXJjaGlidXNQYXJhbXNPYmplY3RbcGFyYW1OYW1lXS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcmNoaWJ1c1BhcmFtc09iamVjdFtwYXJhbU5hbWVdICs9IFwiLFwiICsgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJjaGlidXNQYXJhbXNPYmplY3RbcGFyYW1OYW1lXSA9IHZhbHVlOyAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3VuZEZlYXR1cmVzLmluZGV4T2YodGhpcy5wcm9wcy5jb25maWcubGF5ZXJzLmxheWVyW2xheWVySW5kZXhdLm5hbWUpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm91bmRGZWF0dXJlcy5wdXNoKHRoaXMucHJvcHMuY29uZmlnLmxheWVycy5sYXllcltsYXllckluZGV4XS5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBwcm9taXNlQXJyYXlSZWxhdGlvbnNoaXAucHVzaChwcm9taXNlUmVsYXRlZClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmNvbmZpZy5sYXllcnMubGF5ZXJbbGF5ZXJJbmRleF0uZmllbGRzLmZpZWxkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmllbGROYW1lID0gdGhpcy5wcm9wcy5jb25maWcubGF5ZXJzLmxheWVyW2xheWVySW5kZXhdLlNlbGVjdEZpZWxkTmFtZXNbaV07XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1OYW1lID0gdGhpcy5wcm9wcy5jb25maWcubGF5ZXJzLmxheWVyW2xheWVySW5kZXhdLmZpZWxkcy5maWVsZFtpXS5hcmNoaWJ1c3BhcmFtO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcmVzdWx0c1swXS5mZWF0dXJlLmF0dHJpYnV0ZXNbZmllbGROYW1lXVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFyY2hpYnVzUGFyYW1zT2JqZWN0W3BhcmFtTmFtZV0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFyY2hpYnVzUGFyYW1zT2JqZWN0W3BhcmFtTmFtZV0uaW5jbHVkZXModmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyY2hpYnVzUGFyYW1zT2JqZWN0W3BhcmFtTmFtZV0gKz0gXCIsXCIgKyB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJjaGlidXNQYXJhbXNPYmplY3RbcGFyYW1OYW1lXSA9IHZhbHVlOyAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3VuZEZlYXR1cmVzLmluZGV4T2YodGhpcy5wcm9wcy5jb25maWcubGF5ZXJzLmxheWVyW2xheWVySW5kZXhdLm5hbWUpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm91bmRGZWF0dXJlcy5wdXNoKHRoaXMucHJvcHMuY29uZmlnLmxheWVycy5sYXllcltsYXllckluZGV4XS5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICB0b29sdGlwLmlubmVyVGV4dCA9ICdFcnJvciBpZGVudGlmeWluZyBmZWF0dXJlcyc7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaWRlbnRpZnlpbmcgZmVhdHVyZXM6XCIsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcHJvbWlzZUFycmF5LnB1c2gocHJvbWlzZUlkZW50aWZ5KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBQcm9taXNlLmFsbChwcm9taXNlQXJyYXkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9taXNlQXJyYXlSZWxhdGlvbnNoaXAubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIHRoaXMuc2VuZFJlcXVlc3QoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIFByb21pc2UuYWxsKHByb21pc2VBcnJheVJlbGF0aW9uc2hpcCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZFJlcXVlc3QoKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuYWN0aXZlUG9pbnRDbGljaygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZW5kUmVxdWVzdCA9ICgpID0+IHsgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9vbHRpcF9BcmNoaWJ1cycpOyAgICBcclxuICAgICAgbGV0IHBvc3REYXRhID0geyBcIlZpZXdOYW1lXCI6IHRoaXMucHJvcHMuY29uZmlnLlZpZXdOYW1lIH1cclxuICAgICAgZm9yIChsZXQgaXRlbXMgaW4gdGhpcy5hcmNoaWJ1c1BhcmFtc09iamVjdCkge1xyXG4gICAgICAgICAgcG9zdERhdGFbaXRlbXNdID0gdGhpcy5hcmNoaWJ1c1BhcmFtc09iamVjdFtpdGVtc11cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRoaXMuZm91bmRGZWF0dXJlcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgdG9vbHRpcC5pbm5lclRleHQgPSBgRm91bmQgbm8gZmVhdHVyZXMgJHt0aGlzLmZvdW5kRmVhdHVyZXMuam9pbigpfWBcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRvb2x0aXAuaW5uZXJUZXh0ID0gYEZvdW5kIGZlYXR1cmVzOiAke3RoaXMuZm91bmRGZWF0dXJlcy5qb2luKCl9YCAgICAgICAgXHJcbiAgICAgICAgdGhpcy50ZXh0R3JhcGhpYy5zeW1ib2wudGV4dCA9IGBGb3VuZCBmZWF0dXJlczogJHt0aGlzLmZvdW5kRmVhdHVyZXMuam9pbigpfWBcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMuY29uZmlnLldlYlNlcnZpY2VVUkwgKyBcIj9cIiArIHBvc3REYXRhLlZpZXdOYW1lICsgXCImXCI7XHJcbiAgICAgIGZvciAobGV0IGl0ZW1zZGF0YSBpbiBwb3N0RGF0YSkge1xyXG4gICAgICAgICAgaWYgKGl0ZW1zZGF0YSAhPSBcIlZpZXdOYW1lXCIpXHJcbiAgICAgICAgICAgICAgdXJsICs9IGl0ZW1zZGF0YSArIFwiPVwiICsgcG9zdERhdGFbaXRlbXNkYXRhXSArIFwiJlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQXJjaGlidWMgVVJMOlwiICsgdXJsKTtcclxuICAgICAgY29uc29sZS5sb2coXCJVUkwgbGVuZ3RoOlwiLHVybC5sZW5ndGgpO1xyXG4gICAgICBsZXQgdXJsTGVuID11cmwubGVuZ3RoO1xyXG4gICAgICBpZih1cmxMZW4gPjIwNDgpXHJcbiAgICAgIHtcclxuICAgICAgICBsZXQgbXNnT3ZlciA9IFwiUGxlYXNlIHpvb20gaW4gdGhlIG1hcCBhbmQgc2VsZWN0IGxlc3MgZmVhdHVyZXMuIEV4Y2VlZCBtYXhpbXVtIGFsbG93ZWQgZmVhdHVyZXMgZm9yIEFyY2hpYnVzLlwiXHJcbiAgICAgICAgdG9vbHRpcC5pbm5lclRleHQgPSBtc2dPdmVyXHJcbiAgICAgICAgY29uc29sZS53YXJuKG1zZ092ZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKSAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdyYXBoaWNzLmFkZCh0aGlzLnRleHRHcmFwaGljKVxyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCAoKT0+e1xyXG4gICAgICAgICAgd2luZG93Lm9wZW4odXJsKVxyXG4gICAgICAgIH0sIDE1MDApICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjdGl2ZVZpZXdDaGFuZ2UgPSAoam12OiBKaW11TWFwVmlldykgPT4geyBcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBqaW11TWFwVmlldzogam12XHJcbiAgICB9KSAgIFxyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gVGhlIGppbXVNYXBWaWV3IGRvZXMgbm90IGFwcHJlYWQgaW1tZWRpYXRlbHksIHNvIHdlIG5lZWQgdG8gd2FpdCBmb3IgaXQgdG8gYXBwZWFyXHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcpIHtcclxuICAgICAgICB0aGlzLmRyYXcgPSBuZXcgRHJhdyh7XHJcbiAgICAgICAgICB2aWV3OiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXdcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBDcmVhdGUgdG9vbHRpcCBmb3IgZHJhd2luZ1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b29sdGlwLmlkID0gJ3Rvb2x0aXBfQXJjaGlidXMnO1xyXG4gICAgICAgIHRvb2x0aXAuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHRvb2x0aXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0b29sdGlwLnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGUnO1xyXG4gICAgICAgIHRvb2x0aXAuc3R5bGUucGFkZGluZyA9ICc1cHgnO1xyXG4gICAgICAgIHRvb2x0aXAuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IGRpdiB0byB0aGUgYm9keVxyXG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5jb250YWluZXIuYXBwZW5kQ2hpbGQodG9vbHRpcClcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQb2ludENsaWNrKClcclxuICAgICAgfVxyXG4gICAgfSwgMzAwKTsgICAgXHJcbiAgfVxyXG5cclxuICBzaG93VG9vbHRpcCA9IChwaXhlbHMpID0+IHtcclxuICAgIGNvbnN0IHRvb2x0aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9vbHRpcF9BcmNoaWJ1cycpO1xyXG4gICAgaWYgKHRvb2x0aXApIHtcclxuICAgICAgdG9vbHRpcC5zdHlsZS5sZWZ0ID0gKHBpeGVscy54ICsgNykgKyBgcHhgOyAgIC8vSW1wb3J0YW50IHRvIGFkZCBweC4gT3RoZXJ3aXNlLCB0aGUgbW91c2UgY2xpY2sgZXZlbnQgd2lsbCBhbHdheXMgY2xpY2sgb24gdGhlIHRvb2x0aXBcclxuICAgICAgdG9vbHRpcC5zdHlsZS50b3AgPSAocGl4ZWxzLnkgKyA3KSArIGBweGA7XHJcbiAgICAgIHRvb2x0aXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHRvb2x0aXAuaW5uZXJUZXh0ID0gJ0NsaWNrIG9uIHRoZSBmZWF0dXJlIHRvIHZpZXcgQXJjaGlidXMgRGF0YSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzbGVlcCA9IChtcykgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gIH1cclxuXHJcbiAgaGlkZVRvb2x0aXAgPSAgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9vbHRpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b29sdGlwX0FyY2hpYnVzJyk7XHJcbiAgICBpZiAodG9vbHRpcCkge1xyXG4gICAgICB0b29sdGlwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfSAgXHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5zdGF0ZSA9PSBcIk9QRU5FRFwiKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlUG9pbnRDbGljaygpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5oaWRlVG9vbHRpcCgpXHJcbiAgICAgIGlmICh0aGlzLmRyYXcpIHtcclxuICAgICAgICB0aGlzLmRyYXcucmVzZXQoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xyXG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ3JhcGhpY3MucmVtb3ZlQWxsKClcclxuICAgIH0gICAgXHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQgPSBcImlkX2FyY2hpYnVzX3BhbmVsXCIgY2xhc3NOYW1lPVwid2lkZ2V0LWFyY2hpYnVzIGppbXUtd2lkZ2V0XCI+XHJcbiAgICAgIHsodGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCA9PT0gMSkgPyAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuYWN0aXZlVmlld0NoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgKSA6IDxwPllvdXIgd2lkZ2V0IGlzIG5vdCBzZXR1cCBjb3JyZWN0bHkgd2l0aCBhIG1hcCB3aWRnZXQuPC9wPn1cclxuICAgICAgPC9kaXY+ICAgICAgXHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
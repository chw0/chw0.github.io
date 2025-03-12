System.register(["jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/sempra_hub-uar_table/src/config.ts":
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/sempra_hub-uar_table/src/config.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerHonorModeType: () => (/* binding */ LayerHonorModeType),
/* harmony export */   ResponsiveType: () => (/* binding */ ResponsiveType),
/* harmony export */   SelectionModeType: () => (/* binding */ SelectionModeType),
/* harmony export */   TableArrangeType: () => (/* binding */ TableArrangeType),
/* harmony export */   TableDataActionType: () => (/* binding */ TableDataActionType)
/* harmony export */ });
var TableArrangeType;
(function (TableArrangeType) {
    TableArrangeType["Dropdown"] = "DROPDOWN";
    TableArrangeType["Tabs"] = "TABS";
})(TableArrangeType || (TableArrangeType = {}));
var SelectionModeType;
(function (SelectionModeType) {
    SelectionModeType["Single"] = "SINGLE";
    SelectionModeType["Multiple"] = "MULTIPLE";
})(SelectionModeType || (SelectionModeType = {}));
var LayerHonorModeType;
(function (LayerHonorModeType) {
    LayerHonorModeType["Webmap"] = "WEBMAP";
    LayerHonorModeType["Custom"] = "CUSTOM";
})(LayerHonorModeType || (LayerHonorModeType = {}));
var ResponsiveType;
(function (ResponsiveType) {
    ResponsiveType["Fit"] = "FIT";
    ResponsiveType["Fixed"] = "FIXED";
})(ResponsiveType || (ResponsiveType = {}));
var TableDataActionType;
(function (TableDataActionType) {
    TableDataActionType["View"] = "VIEW";
    TableDataActionType["Add"] = "ADD";
})(TableDataActionType || (TableDataActionType = {}));


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************************************************************!*\
  !*** ./your-extensions/widgets/sempra_hub-uar_table/src/data-actions/view-in-table.ts ***!
  \****************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewInTable)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/sempra_hub-uar_table/src/config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const { SELECTION_DATA_VIEW_ID } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS;
const supLayerTypes = [jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.BuildingComponentSubLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.OrientedImageryLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.ImageryLayer];
class ViewInTable extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
    constructor() {
        super(...arguments);
        this.deepClone = (obj) => {
            const isArray = Array.isArray(obj);
            const cloneObj = isArray ? [] : {};
            for (const key in obj) {
                const isObject = (typeof obj[key] === 'object' || typeof obj[key] === 'function') && obj[key] !== null;
                cloneObj[key] = isObject ? this.deepClone(obj[key]) : obj[key];
            }
            return cloneObj;
        };
    }
    isSupported(dataSets, dataLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            if (dataSets.length > 1) {
                return false;
            }
            let isActionSupported = true;
            const dataSet = dataSets[0];
            const { dataSource, records } = dataSet;
            const typeIsLayer = supLayerTypes.includes(dataSource.type);
            const isDataSourceSet = dataSource.isDataSourceSet;
            const notRecordLevel = dataLevel !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.Records;
            const recordIsEmpty = dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.Records && (records === null || records === void 0 ? void 0 : records.length) === 0;
            const notInConfigAndNotLayer = !dataSource.isInAppConfig() && !typeIsLayer;
            if (isDataSourceSet || notRecordLevel || recordIsEmpty || notInConfigAndNotLayer) {
                isActionSupported = false;
            }
            return isActionSupported && dataSource.getStatus() !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady;
        });
    }
    onExecute(dataSets, dataLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const dataSet = dataSets[0];
            const { dataSource, records } = dataSet;
            const allFields = dataSource && dataSource.getSchema();
            const isRuntimeData = !dataSource.isInAppConfig();
            const defaultInvisible = [
                'CreationDate',
                'Creator',
                'EditDate',
                'Editor',
                'GlobalID'
            ];
            const allFieldsDetails = Object.values(allFields === null || allFields === void 0 ? void 0 : allFields.fields);
            const initTableFields = allFieldsDetails.filter(item => !defaultInvisible.includes(item.jimuName)).map(ele => {
                return Object.assign(Object.assign({}, ele), { visible: true });
            });
            const newItemId = `DaTable-${jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getUUID()}`;
            const name = dataSet.name || dataSource.getLabel() || ((_a = dataSource.getDataSourceJson()) === null || _a === void 0 ? void 0 : _a.sourceLabel);
            const useDataSource = {
                dataSourceId: (_b = dataSource.getMainDataSource()) === null || _b === void 0 ? void 0 : _b.getDataView(SELECTION_DATA_VIEW_ID).id,
                mainDataSourceId: (_c = dataSource.getMainDataSource()) === null || _c === void 0 ? void 0 : _c.id,
                dataViewId: dataSource.dataViewId,
                rootDataSourceId: (_d = dataSource.getRootDataSource()) === null || _d === void 0 ? void 0 : _d.id
            };
            const daLayerItem = Object.assign({ id: newItemId, name: name, allFields: allFieldsDetails, tableFields: initTableFields, enableAttachements: false, enableEdit: false, allowCsv: false, enableSearch: false, searchFields: [], enableRefresh: false, enableSelect: true, enableDelete: false, selectMode: _config__WEBPACK_IMPORTED_MODULE_1__.SelectionModeType.Multiple, dataActionObject: true, dataActionType: _config__WEBPACK_IMPORTED_MODULE_1__.TableDataActionType.View }, (isRuntimeData ? { dataActionDataSource: dataSource } : { useDataSource }));
            const viewInTableObj = ((_e = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _e === void 0 ? void 0 : _e.viewInTableObj) || {};
            const copyRecords = [];
            let fullRecords;
            const queriableDs = dataSource;
            const isOutput = (_f = queriableDs === null || queriableDs === void 0 ? void 0 : queriableDs.getDataSourceJson()) === null || _f === void 0 ? void 0 : _f.isOutputFromWidget;
            if (isOutput) {
                fullRecords = records;
            }
            else {
                const objectIdField = ((_g = dataSource === null || dataSource === void 0 ? void 0 : dataSource.getLayerDefinition()) === null || _g === void 0 ? void 0 : _g.objectIdField) ||
                    ((_h = dataSource === null || dataSource === void 0 ? void 0 : dataSource.layer) === null || _h === void 0 ? void 0 : _h.objectIdField) ||
                    'OBJECTID';
                const recordsQuery = records && records.length > 0
                    ? `${objectIdField} IN (${records
                        .map(item => item.getId())
                        .join()})`
                    : '';
                fullRecords = yield queriableDs.query({
                    where: recordsQuery,
                    returnGeometry: true,
                    notAddFieldsToClient: true,
                    outFields: ['*']
                }).then(result => {
                    return (result === null || result === void 0 ? void 0 : result.records) || records;
                });
            }
            fullRecords.forEach(record => {
                copyRecords.push(record.clone(true));
            });
            viewInTableObj[newItemId] = { daLayerItem, records: copyRecords };
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'viewInTableObj', viewInTableObj);
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(this.widgetId, 'dataActionActiveObj', { activeTabId: newItemId, dataActionTable: true }));
            return true;
        });
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZW1wcmFfaHViLXVhcl90YWJsZS9kaXN0L2RhdGEtYWN0aW9ucy92aWV3LWluLXRhYmxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxJQUFZLGdCQUdYO0FBSEQsV0FBWSxnQkFBZ0I7SUFDMUIseUNBQXFCO0lBQ3JCLGlDQUFhO0FBQ2YsQ0FBQyxFQUhXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFHM0I7QUFFRCxJQUFZLGlCQUdYO0FBSEQsV0FBWSxpQkFBaUI7SUFDM0Isc0NBQWlCO0lBQ2pCLDBDQUFxQjtBQUN2QixDQUFDLEVBSFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUc1QjtBQUVELElBQVksa0JBR1g7QUFIRCxXQUFZLGtCQUFrQjtJQUM1Qix1Q0FBaUI7SUFDakIsdUNBQWlCO0FBQ25CLENBQUMsRUFIVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBRzdCO0FBYUQsSUFBWSxjQUdYO0FBSEQsV0FBWSxjQUFjO0lBQ3hCLDZCQUFXO0lBQ1gsaUNBQWU7QUFDakIsQ0FBQyxFQUhXLGNBQWMsS0FBZCxjQUFjLFFBR3pCO0FBY0QsSUFBWSxtQkFHWDtBQUhELFdBQVksbUJBQW1CO0lBQzdCLG9DQUFhO0lBQ2Isa0NBQVc7QUFDYixDQUFDLEVBSFcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUc5Qjs7Ozs7Ozs7Ozs7QUN0REQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEtBQUssRUFBRSxZQUFZO29CQUNuQixjQUFjLEVBQUUsSUFBSTtvQkFDcEIsb0JBQW9CLEVBQUUsSUFBSTtvQkFDMUIsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO2lCQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQzlCLE9BQU8sT0FBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLE9BQU8sS0FBSSxPQUFPO2dCQUNuQyxDQUFDLENBQUM7WUFDSixDQUFDO1lBQ0QsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDM0IsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQztZQUNGLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO1lBQ2pFLDBEQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO1lBRW5HLHNEQUFXLEVBQUUsQ0FBQyxRQUFRLENBQ3BCLGlEQUFVLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQzFIO1lBQ0QsT0FBTyxJQUFJO1FBQ2IsQ0FBQztLQUFBO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2VtcHJhX2h1Yi11YXJfdGFibGUvc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2VtcHJhX2h1Yi11YXJfdGFibGUvc3JjL2RhdGEtYWN0aW9ucy92aWV3LWluLXRhYmxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgdHlwZSBJbW11dGFibGVPYmplY3QsXHJcbiAgdHlwZSBJbW11dGFibGVBcnJheSxcclxuICB0eXBlIElNRmllbGRTY2hlbWEsXHJcbiAgdHlwZSBEYXRhU291cmNlLFxyXG4gIHR5cGUgVXNlRGF0YVNvdXJjZVxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuXHJcbmV4cG9ydCBlbnVtIFRhYmxlQXJyYW5nZVR5cGUge1xyXG4gIERyb3Bkb3duID0gJ0RST1BET1dOJyxcclxuICBUYWJzID0gJ1RBQlMnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNlbGVjdGlvbk1vZGVUeXBlIHtcclxuICBTaW5nbGUgPSAnU0lOR0xFJyxcclxuICBNdWx0aXBsZSA9ICdNVUxUSVBMRSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTGF5ZXJIb25vck1vZGVUeXBlIHtcclxuICBXZWJtYXAgPSAnV0VCTUFQJyxcclxuICBDdXN0b20gPSAnQ1VTVE9NJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN1Z2dlc3Rpb24ge1xyXG4gIHN1Z2dlc3Rpb25IdG1sOiBzdHJpbmcgfCBFbGVtZW50XHJcbiAgc3VnZ2VzdGlvbjogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVGaWVsZHNTY2hlbWEgZXh0ZW5kcyBJTUZpZWxkU2NoZW1hIHtcclxuICBlZGl0QXV0aG9yaXR5PzogYm9vbGVhblxyXG4gIGVkaXRhYmxlPzogYm9vbGVhblxyXG4gIHZpc2libGU/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFJlc3BvbnNpdmVUeXBlIHtcclxuICBGaXQgPSAnRklUJyxcclxuICBGaXhlZCA9ICdGSVhFRCdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2x1bW5TaXppbmcge1xyXG4gIHJlc3BvbnNpdmVUeXBlOiBSZXNwb25zaXZlVHlwZVxyXG4gIGNvbHVtbldpZHRoOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIZWFkZXJBdHRycyB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmdcclxuICBmb250U2l6ZTogbnVtYmVyXHJcbiAgYm9sZDogYm9vbGVhblxyXG4gIGNvbG9yOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGFibGVEYXRhQWN0aW9uVHlwZSB7XHJcbiAgVmlldyA9ICdWSUVXJyxcclxuICBBZGQgPSAnQUREJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheWVyc0NvbmZpZyB7XHJcbiAgaWQ6IHN0cmluZ1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHVzZURhdGFTb3VyY2U/OiBVc2VEYXRhU291cmNlXHJcbiAgYWxsRmllbGRzOiBJTUZpZWxkU2NoZW1hW11cclxuICB0YWJsZUZpZWxkcz86IFRhYmxlRmllbGRzU2NoZW1hW11cclxuICBlbmFibGVBdHRhY2hlbWVudHM6IGJvb2xlYW5cclxuICBlbmFibGVTZWFyY2g6IGJvb2xlYW5cclxuICBzZWFyY2hGaWVsZHM/OiBzdHJpbmdbXVxyXG4gIHNlYXJjaEV4YWN0PzogYm9vbGVhblxyXG4gIHNlYXJjaEhpbnQ/OiBzdHJpbmdcclxuICBlbmFibGVFZGl0OiBib29sZWFuXHJcbiAgZW5hYmxlUmVmcmVzaDogYm9vbGVhblxyXG4gIGVuYWJsZVNlbGVjdDogYm9vbGVhblxyXG4gIGVuYWJsZURlbGV0ZTogYm9vbGVhblxyXG4gIHNlbGVjdE1vZGU6IFNlbGVjdGlvbk1vZGVUeXBlXHJcbiAgc2hvd0NvdW50PzogYm9vbGVhblxyXG4gIHVwZGF0ZVRleHQ/OiBib29sZWFuXHJcbiAgc2hvd1NlbXByYUJ1dHRvbnM/OiBib29sZWFuXHJcbiAgYWxsb3dDc3Y6IGJvb2xlYW5cclxuICBkYXRhQWN0aW9uT2JqZWN0PzogYW55XHJcbiAgZGF0YUFjdGlvblR5cGU/OiBUYWJsZURhdGFBY3Rpb25UeXBlXHJcbiAgZGF0YUFjdGlvbkRhdGFTb3VyY2U/OiBEYXRhU291cmNlXHJcbiAgaGVhZGVyRm9udFNldHRpbmc/OiBIZWFkZXJBdHRyc1xyXG4gIGNvbHVtblNldHRpbmc/OiBDb2x1bW5TaXppbmdcclxuICBsYXllckhvbm9yTW9kZT86IExheWVySG9ub3JNb2RlVHlwZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XHJcbiAgbGF5ZXJzQ29uZmlnPzogSW1tdXRhYmxlQXJyYXk8TGF5ZXJzQ29uZmlnPlxyXG4gIGFycmFuZ2VUeXBlOiBUYWJsZUFycmFuZ2VUeXBlXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElNQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENvbmZpZz5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcclxuICBBYnN0cmFjdERhdGFBY3Rpb24sXHJcbiAgdHlwZSBEYXRhUmVjb3JkU2V0LFxyXG4gIHV0aWxzLFxyXG4gIGdldEFwcFN0b3JlLFxyXG4gIGFwcEFjdGlvbnMsXHJcbiAgTXV0YWJsZVN0b3JlTWFuYWdlcixcclxuICBEYXRhU291cmNlVHlwZXMsXHJcbiAgdHlwZSBVc2VEYXRhU291cmNlLFxyXG4gIERhdGFTb3VyY2VTdGF0dXMsXHJcbiAgRGF0YUxldmVsLFxyXG4gIENPTlNUQU5UUyxcclxuICB0eXBlIEZlYXR1cmVMYXllckRhdGFTb3VyY2UsXHJcbiAgdHlwZSBRdWVyeVBhcmFtcyxcclxuICB0eXBlIFF1ZXJpYWJsZURhdGFTb3VyY2VcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgTGF5ZXJzQ29uZmlnLCBTZWxlY3Rpb25Nb2RlVHlwZSwgVGFibGVEYXRhQWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IHsgU0VMRUNUSU9OX0RBVEFfVklFV19JRCB9ID0gQ09OU1RBTlRTXHJcbmNvbnN0IHN1cExheWVyVHlwZXMgPSBbRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllciwgRGF0YVNvdXJjZVR5cGVzLlNjZW5lTGF5ZXIsIERhdGFTb3VyY2VUeXBlcy5CdWlsZGluZ0NvbXBvbmVudFN1YkxheWVyLFxyXG4gIERhdGFTb3VyY2VUeXBlcy5PcmllbnRlZEltYWdlcnlMYXllciwgRGF0YVNvdXJjZVR5cGVzLkltYWdlcnlMYXllcl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdJblRhYmxlIGV4dGVuZHMgQWJzdHJhY3REYXRhQWN0aW9uIHtcclxuICBhc3luYyBpc1N1cHBvcnRlZCAoZGF0YVNldHM6IERhdGFSZWNvcmRTZXRbXSwgZGF0YUxldmVsOiBEYXRhTGV2ZWwpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGlmIChkYXRhU2V0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgbGV0IGlzQWN0aW9uU3VwcG9ydGVkID0gdHJ1ZVxyXG4gICAgY29uc3QgZGF0YVNldCA9IGRhdGFTZXRzWzBdXHJcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIHJlY29yZHMgfSA9IGRhdGFTZXRcclxuICAgIGNvbnN0IHR5cGVJc0xheWVyID0gc3VwTGF5ZXJUeXBlcy5pbmNsdWRlcyhkYXRhU291cmNlLnR5cGUgYXMgYW55KVxyXG4gICAgY29uc3QgaXNEYXRhU291cmNlU2V0ID0gZGF0YVNvdXJjZS5pc0RhdGFTb3VyY2VTZXRcclxuICAgIGNvbnN0IG5vdFJlY29yZExldmVsID0gZGF0YUxldmVsICE9PSBEYXRhTGV2ZWwuUmVjb3Jkc1xyXG4gICAgY29uc3QgcmVjb3JkSXNFbXB0eSA9IGRhdGFMZXZlbCA9PT0gRGF0YUxldmVsLlJlY29yZHMgJiYgcmVjb3Jkcz8ubGVuZ3RoID09PSAwXHJcbiAgICBjb25zdCBub3RJbkNvbmZpZ0FuZE5vdExheWVyID0gIWRhdGFTb3VyY2UuaXNJbkFwcENvbmZpZygpICYmICF0eXBlSXNMYXllclxyXG4gICAgaWYgKGlzRGF0YVNvdXJjZVNldCB8fCBub3RSZWNvcmRMZXZlbCB8fCByZWNvcmRJc0VtcHR5IHx8IG5vdEluQ29uZmlnQW5kTm90TGF5ZXIpIHtcclxuICAgICAgaXNBY3Rpb25TdXBwb3J0ZWQgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzQWN0aW9uU3VwcG9ydGVkICYmIGRhdGFTb3VyY2UuZ2V0U3RhdHVzKCkgIT09IERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHlcclxuICB9XHJcblxyXG4gIGRlZXBDbG9uZSA9IChvYmo6IGFueSk6IGFueSA9PiB7XHJcbiAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShvYmopXHJcbiAgICBjb25zdCBjbG9uZU9iaiA9IGlzQXJyYXkgPyBbXSA6IHt9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgY29uc3QgaXNPYmplY3QgPSAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqW2tleV0gPT09ICdmdW5jdGlvbicpICYmIG9ialtrZXldICE9PSBudWxsXHJcbiAgICAgIGNsb25lT2JqW2tleV0gPSBpc09iamVjdCA/IHRoaXMuZGVlcENsb25lKG9ialtrZXldKSA6IG9ialtrZXldXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xvbmVPYmpcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uRXhlY3V0ZSAoZGF0YVNldHM6IERhdGFSZWNvcmRTZXRbXSwgZGF0YUxldmVsOiBEYXRhTGV2ZWwpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGRhdGFTZXQgPSBkYXRhU2V0c1swXVxyXG4gICAgY29uc3QgeyBkYXRhU291cmNlLCByZWNvcmRzIH0gPSBkYXRhU2V0XHJcbiAgICBjb25zdCBhbGxGaWVsZHMgPSBkYXRhU291cmNlICYmIGRhdGFTb3VyY2UuZ2V0U2NoZW1hKClcclxuICAgIGNvbnN0IGlzUnVudGltZURhdGEgPSAhZGF0YVNvdXJjZS5pc0luQXBwQ29uZmlnKClcclxuICAgIGNvbnN0IGRlZmF1bHRJbnZpc2libGUgPSBbXHJcbiAgICAgICdDcmVhdGlvbkRhdGUnLFxyXG4gICAgICAnQ3JlYXRvcicsXHJcbiAgICAgICdFZGl0RGF0ZScsXHJcbiAgICAgICdFZGl0b3InLFxyXG4gICAgICAnR2xvYmFsSUQnXHJcbiAgICBdXHJcbiAgICBjb25zdCBhbGxGaWVsZHNEZXRhaWxzID0gT2JqZWN0LnZhbHVlcyhhbGxGaWVsZHM/LmZpZWxkcylcclxuICAgIGNvbnN0IGluaXRUYWJsZUZpZWxkcyA9IGFsbEZpZWxkc0RldGFpbHMuZmlsdGVyKFxyXG4gICAgICBpdGVtID0+ICFkZWZhdWx0SW52aXNpYmxlLmluY2x1ZGVzKGl0ZW0uamltdU5hbWUpXHJcbiAgICApLm1hcChlbGUgPT4ge1xyXG4gICAgICByZXR1cm4geyAuLi5lbGUsIHZpc2libGU6IHRydWUgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IG5ld0l0ZW1JZCA9IGBEYVRhYmxlLSR7dXRpbHMuZ2V0VVVJRCgpfWBcclxuICAgIGNvbnN0IG5hbWUgPSBkYXRhU2V0Lm5hbWUgfHwgZGF0YVNvdXJjZS5nZXRMYWJlbCgpIHx8IGRhdGFTb3VyY2UuZ2V0RGF0YVNvdXJjZUpzb24oKT8uc291cmNlTGFiZWxcclxuICAgIGNvbnN0IHVzZURhdGFTb3VyY2UgPSB7XHJcbiAgICAgIGRhdGFTb3VyY2VJZDogZGF0YVNvdXJjZS5nZXRNYWluRGF0YVNvdXJjZSgpPy5nZXREYXRhVmlldyhTRUxFQ1RJT05fREFUQV9WSUVXX0lEKS5pZCxcclxuICAgICAgbWFpbkRhdGFTb3VyY2VJZDogZGF0YVNvdXJjZS5nZXRNYWluRGF0YVNvdXJjZSgpPy5pZCxcclxuICAgICAgZGF0YVZpZXdJZDogZGF0YVNvdXJjZS5kYXRhVmlld0lkLFxyXG4gICAgICByb290RGF0YVNvdXJjZUlkOiBkYXRhU291cmNlLmdldFJvb3REYXRhU291cmNlKCk/LmlkXHJcbiAgICB9IGFzIFVzZURhdGFTb3VyY2VcclxuICAgIGNvbnN0IGRhTGF5ZXJJdGVtOiBMYXllcnNDb25maWcgPSB7XHJcbiAgICAgIGlkOiBuZXdJdGVtSWQsXHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIGFsbEZpZWxkczogYWxsRmllbGRzRGV0YWlscyxcclxuICAgICAgdGFibGVGaWVsZHM6IGluaXRUYWJsZUZpZWxkcyxcclxuICAgICAgZW5hYmxlQXR0YWNoZW1lbnRzOiBmYWxzZSxcclxuICAgICAgZW5hYmxlRWRpdDogZmFsc2UsXHJcbiAgICAgIGFsbG93Q3N2OiBmYWxzZSxcclxuICAgICAgZW5hYmxlU2VhcmNoOiBmYWxzZSxcclxuICAgICAgc2VhcmNoRmllbGRzOiBbXSxcclxuICAgICAgZW5hYmxlUmVmcmVzaDogZmFsc2UsXHJcbiAgICAgIGVuYWJsZVNlbGVjdDogdHJ1ZSxcclxuICAgICAgZW5hYmxlRGVsZXRlOiBmYWxzZSxcclxuICAgICAgc2VsZWN0TW9kZTogU2VsZWN0aW9uTW9kZVR5cGUuTXVsdGlwbGUsXHJcbiAgICAgIGRhdGFBY3Rpb25PYmplY3Q6IHRydWUsXHJcbiAgICAgIGRhdGFBY3Rpb25UeXBlOiBUYWJsZURhdGFBY3Rpb25UeXBlLlZpZXcsXHJcbiAgICAgIC4uLihpc1J1bnRpbWVEYXRhID8geyBkYXRhQWN0aW9uRGF0YVNvdXJjZTogZGF0YVNvdXJjZSB9IDogeyB1c2VEYXRhU291cmNlIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCB2aWV3SW5UYWJsZU9iaiA9IE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdGF0ZVZhbHVlKFt0aGlzLndpZGdldElkXSk/LnZpZXdJblRhYmxlT2JqIHx8IHt9XHJcbiAgICBjb25zdCBjb3B5UmVjb3JkcyA9IFtdXHJcbiAgICBsZXQgZnVsbFJlY29yZHNcclxuICAgIGNvbnN0IHF1ZXJpYWJsZURzID0gZGF0YVNvdXJjZSBhcyBRdWVyaWFibGVEYXRhU291cmNlXHJcbiAgICBjb25zdCBpc091dHB1dCA9IHF1ZXJpYWJsZURzPy5nZXREYXRhU291cmNlSnNvbigpPy5pc091dHB1dEZyb21XaWRnZXRcclxuICAgIGlmIChpc091dHB1dCkge1xyXG4gICAgICBmdWxsUmVjb3JkcyA9IHJlY29yZHNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG9iamVjdElkRmllbGQgPVxyXG4gICAgICAgIChkYXRhU291cmNlIGFzIEZlYXR1cmVMYXllckRhdGFTb3VyY2UpPy5nZXRMYXllckRlZmluaXRpb24oKT8ub2JqZWN0SWRGaWVsZCB8fFxyXG4gICAgICAgIChkYXRhU291cmNlIGFzIEZlYXR1cmVMYXllckRhdGFTb3VyY2UpPy5sYXllcj8ub2JqZWN0SWRGaWVsZCB8fFxyXG4gICAgICAgICdPQkpFQ1RJRCdcclxuICAgICAgY29uc3QgcmVjb3Jkc1F1ZXJ5ID0gcmVjb3JkcyAmJiByZWNvcmRzLmxlbmd0aCA+IDBcclxuICAgICAgICA/IGAke29iamVjdElkRmllbGR9IElOICgke3JlY29yZHNcclxuICAgICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0uZ2V0SWQoKSlcclxuICAgICAgICAgICAgLmpvaW4oKX0pYFxyXG4gICAgICAgIDogJydcclxuICAgICAgZnVsbFJlY29yZHMgPSBhd2FpdCBxdWVyaWFibGVEcy5xdWVyeSh7XHJcbiAgICAgICAgd2hlcmU6IHJlY29yZHNRdWVyeSxcclxuICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZSxcclxuICAgICAgICBub3RBZGRGaWVsZHNUb0NsaWVudDogdHJ1ZSxcclxuICAgICAgICBvdXRGaWVsZHM6IFsnKiddXHJcbiAgICAgIH0gYXMgUXVlcnlQYXJhbXMpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0Py5yZWNvcmRzIHx8IHJlY29yZHNcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGZ1bGxSZWNvcmRzLmZvckVhY2gocmVjb3JkID0+IHtcclxuICAgICAgY29weVJlY29yZHMucHVzaChyZWNvcmQuY2xvbmUodHJ1ZSkpXHJcbiAgICB9KVxyXG4gICAgdmlld0luVGFibGVPYmpbbmV3SXRlbUlkXSA9IHsgZGFMYXllckl0ZW0sIHJlY29yZHM6IGNvcHlSZWNvcmRzIH1cclxuICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICd2aWV3SW5UYWJsZU9iaicsIHZpZXdJblRhYmxlT2JqKVxyXG5cclxuICAgIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goXHJcbiAgICAgIGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKHRoaXMud2lkZ2V0SWQsICdkYXRhQWN0aW9uQWN0aXZlT2JqJywgeyBhY3RpdmVUYWJJZDogbmV3SXRlbUlkLCBkYXRhQWN0aW9uVGFibGU6IHRydWUgfSlcclxuICAgIClcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
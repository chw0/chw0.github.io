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
/*!***************************************************************************************!*\
  !*** ./your-extensions/widgets/sempra_hub-uar_table/src/data-actions/add-to-table.ts ***!
  \***************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddToTable)
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


const supLayerTypes = [jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.BuildingComponentSubLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.OrientedImageryLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.ImageryLayer];
class AddToTable extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
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
            const { dataSource } = dataSet;
            const typeIsLayer = supLayerTypes.includes(dataSource.type);
            const isDataSourceSet = dataSource.isDataSourceSet;
            const notDataSourceLevel = dataLevel !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.DataSource;
            const notInConfigAndNotLayer = !dataSource.isInAppConfig() && !typeIsLayer;
            if (isDataSourceSet || notDataSourceLevel || notInConfigAndNotLayer) {
                isActionSupported = false;
            }
            return isActionSupported && dataSource.getStatus() !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady;
        });
    }
    onExecute(dataSets, dataLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const isDsLevel = dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.DataSource;
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
            const name = (isDsLevel ? '' : dataSet.name) || dataSource.getLabel() || ((_a = dataSource.getDataSourceJson()) === null || _a === void 0 ? void 0 : _a.sourceLabel);
            const useDataSource = {
                dataSourceId: dataSource.id,
                mainDataSourceId: (_b = dataSource.getMainDataSource()) === null || _b === void 0 ? void 0 : _b.id,
                dataViewId: dataSource.dataViewId,
                rootDataSourceId: (_c = dataSource.getRootDataSource()) === null || _c === void 0 ? void 0 : _c.id
            };
            const daLayerItem = Object.assign({ id: newItemId, name: name, allFields: allFieldsDetails, tableFields: initTableFields, enableAttachements: false, enableEdit: false, allowCsv: false, enableSearch: false, searchFields: [], enableRefresh: false, enableSelect: true, enableDelete: false, selectMode: _config__WEBPACK_IMPORTED_MODULE_1__.SelectionModeType.Multiple, dataActionObject: true, dataActionType: _config__WEBPACK_IMPORTED_MODULE_1__.TableDataActionType.Add }, (isRuntimeData ? { dataActionDataSource: dataSource } : { useDataSource }));
            const viewInTableObj = ((_d = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _d === void 0 ? void 0 : _d.viewInTableObj) || {};
            const copyRecords = [];
            if (!isDsLevel) {
                records.forEach(record => {
                    copyRecords.push(record.clone(true));
                });
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZW1wcmFfaHViLXVhcl90YWJsZS9kaXN0L2RhdGEtYWN0aW9ucy9hZGQtdG8tdGFibGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLElBQVksZ0JBR1g7QUFIRCxXQUFZLGdCQUFnQjtJQUMxQix5Q0FBcUI7SUFDckIsaUNBQWE7QUFDZixDQUFDLEVBSFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUczQjtBQUVELElBQVksaUJBR1g7QUFIRCxXQUFZLGlCQUFpQjtJQUMzQixzQ0FBaUI7SUFDakIsMENBQXFCO0FBQ3ZCLENBQUMsRUFIVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBRzVCO0FBRUQsSUFBWSxrQkFHWDtBQUhELFdBQVksa0JBQWtCO0lBQzVCLHVDQUFpQjtJQUNqQix1Q0FBaUI7QUFDbkIsQ0FBQyxFQUhXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFHN0I7QUFhRCxJQUFZLGNBR1g7QUFIRCxXQUFZLGNBQWM7SUFDeEIsNkJBQVc7SUFDWCxpQ0FBZTtBQUNqQixDQUFDLEVBSFcsY0FBYyxLQUFkLGNBQWMsUUFHekI7QUFjRCxJQUFZLG1CQUdYO0FBSEQsV0FBWSxtQkFBbUI7SUFDN0Isb0NBQWE7SUFDYixrQ0FBVztBQUNiLENBQUMsRUFIVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBRzlCOzs7Ozs7Ozs7OztBQ3RERDs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNLa0I7QUFDbUU7QUFFckYsTUFBTSxhQUFhLEdBQUcsQ0FBQyxzREFBZSxDQUFDLFlBQVksRUFBRSxzREFBZSxDQUFDLFVBQVUsRUFBRSxzREFBZSxDQUFDLHlCQUF5QjtJQUN4SCxzREFBZSxDQUFDLG9CQUFvQixFQUFFLHNEQUFlLENBQUMsWUFBWSxDQUFDO0FBRXRELE1BQU0sVUFBVyxTQUFRLHlEQUFrQjtJQUExRDs7UUFrQkUsY0FBUyxHQUFHLENBQUMsR0FBUSxFQUFPLEVBQUU7WUFDNUIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDbEMsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDdEIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUk7Z0JBQ3RHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDaEUsQ0FBQztZQUNELE9BQU8sUUFBUTtRQUNqQixDQUFDO0lBOERILENBQUM7SUF2Rk8sV0FBVyxDQUFFLFFBQXlCLEVBQUUsU0FBb0I7O1lBQ2hFLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsT0FBTyxLQUFLO1lBQ2QsQ0FBQztZQUNELElBQUksaUJBQWlCLEdBQUcsSUFBSTtZQUM1QixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxPQUFPO1lBQzlCLE1BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQVcsQ0FBQztZQUNsRSxNQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsZUFBZTtZQUNsRCxNQUFNLGtCQUFrQixHQUFHLFNBQVMsS0FBSyxnREFBUyxDQUFDLFVBQVU7WUFDN0QsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDMUUsSUFBSSxlQUFlLElBQUksa0JBQWtCLElBQUksc0JBQXNCLEVBQUUsQ0FBQztnQkFDcEUsaUJBQWlCLEdBQUcsS0FBSztZQUMzQixDQUFDO1lBQ0QsT0FBTyxpQkFBaUIsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssdURBQWdCLENBQUMsUUFBUTtRQUNsRixDQUFDO0tBQUE7SUFZSyxTQUFTLENBQUUsUUFBeUIsRUFBRSxTQUFvQjs7O1lBQzlELE1BQU0sU0FBUyxHQUFHLFNBQVMsS0FBSyxnREFBUyxDQUFDLFVBQVU7WUFDcEQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU87WUFDdkMsTUFBTSxTQUFTLEdBQUcsVUFBVSxJQUFJLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDdEQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ2pELE1BQU0sZ0JBQWdCLEdBQUc7Z0JBQ3ZCLGNBQWM7Z0JBQ2QsU0FBUztnQkFDVCxVQUFVO2dCQUNWLFFBQVE7Z0JBQ1IsVUFBVTthQUNYO1lBQ0QsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxNQUFNLENBQUM7WUFDekQsTUFBTSxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUM3QyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDbEQsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1YsdUNBQVksR0FBRyxLQUFFLE9BQU8sRUFBRSxJQUFJLElBQUU7WUFDbEMsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxTQUFTLEdBQUcsV0FBVyw0Q0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzlDLE1BQU0sSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUksZ0JBQVUsQ0FBQyxpQkFBaUIsRUFBRSwwQ0FBRSxXQUFXO1lBQ3BILE1BQU0sYUFBYSxHQUFHO2dCQUNwQixZQUFZLEVBQUUsVUFBVSxDQUFDLEVBQUU7Z0JBQzNCLGdCQUFnQixFQUFFLGdCQUFVLENBQUMsaUJBQWlCLEVBQUUsMENBQUUsRUFBRTtnQkFDcEQsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVO2dCQUNqQyxnQkFBZ0IsRUFBRSxnQkFBVSxDQUFDLGlCQUFpQixFQUFFLDBDQUFFLEVBQUU7YUFDcEM7WUFDbEIsTUFBTSxXQUFXLG1CQUNmLEVBQUUsRUFBRSxTQUFTLEVBQ2IsSUFBSSxFQUFFLElBQUksRUFDVixTQUFTLEVBQUUsZ0JBQWdCLEVBQzNCLFdBQVcsRUFBRSxlQUFlLEVBQzVCLGtCQUFrQixFQUFFLEtBQUssRUFDekIsVUFBVSxFQUFFLEtBQUssRUFDakIsUUFBUSxFQUFFLEtBQUssRUFDZixZQUFZLEVBQUUsS0FBSyxFQUNuQixZQUFZLEVBQUUsRUFBRSxFQUNoQixhQUFhLEVBQUUsS0FBSyxFQUNwQixZQUFZLEVBQUUsSUFBSSxFQUNsQixZQUFZLEVBQUUsS0FBSyxFQUNuQixVQUFVLEVBQUUsc0RBQWlCLENBQUMsUUFBUSxFQUN0QyxnQkFBZ0IsRUFBRSxJQUFJLEVBQ3RCLGNBQWMsRUFBRSx3REFBbUIsQ0FBQyxHQUFHLElBQ3BDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQzlFO1lBQ0QsTUFBTSxjQUFjLEdBQUcsaUVBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLDBDQUFFLGNBQWMsS0FBSSxFQUFFO1lBQzdHLE1BQU0sV0FBVyxHQUFHLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3ZCLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEMsQ0FBQyxDQUFDO1lBQ0osQ0FBQztZQUNELGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO1lBQ2pFLDBEQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO1lBRW5HLHNEQUFXLEVBQUUsQ0FBQyxRQUFRLENBQ3BCLGlEQUFVLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQzFIO1lBQ0QsT0FBTyxJQUFJO1FBQ2IsQ0FBQztLQUFBO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2VtcHJhX2h1Yi11YXJfdGFibGUvc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2VtcHJhX2h1Yi11YXJfdGFibGUvc3JjL2RhdGEtYWN0aW9ucy9hZGQtdG8tdGFibGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICB0eXBlIEltbXV0YWJsZU9iamVjdCxcclxuICB0eXBlIEltbXV0YWJsZUFycmF5LFxyXG4gIHR5cGUgSU1GaWVsZFNjaGVtYSxcclxuICB0eXBlIERhdGFTb3VyY2UsXHJcbiAgdHlwZSBVc2VEYXRhU291cmNlXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5cclxuZXhwb3J0IGVudW0gVGFibGVBcnJhbmdlVHlwZSB7XHJcbiAgRHJvcGRvd24gPSAnRFJPUERPV04nLFxyXG4gIFRhYnMgPSAnVEFCUydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2VsZWN0aW9uTW9kZVR5cGUge1xyXG4gIFNpbmdsZSA9ICdTSU5HTEUnLFxyXG4gIE11bHRpcGxlID0gJ01VTFRJUExFJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBMYXllckhvbm9yTW9kZVR5cGUge1xyXG4gIFdlYm1hcCA9ICdXRUJNQVAnLFxyXG4gIEN1c3RvbSA9ICdDVVNUT00nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VnZ2VzdGlvbiB7XHJcbiAgc3VnZ2VzdGlvbkh0bWw6IHN0cmluZyB8IEVsZW1lbnRcclxuICBzdWdnZXN0aW9uOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUZpZWxkc1NjaGVtYSBleHRlbmRzIElNRmllbGRTY2hlbWEge1xyXG4gIGVkaXRBdXRob3JpdHk/OiBib29sZWFuXHJcbiAgZWRpdGFibGU/OiBib29sZWFuXHJcbiAgdmlzaWJsZT86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gUmVzcG9uc2l2ZVR5cGUge1xyXG4gIEZpdCA9ICdGSVQnLFxyXG4gIEZpeGVkID0gJ0ZJWEVEJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbHVtblNpemluZyB7XHJcbiAgcmVzcG9uc2l2ZVR5cGU6IFJlc3BvbnNpdmVUeXBlXHJcbiAgY29sdW1uV2lkdGg6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhlYWRlckF0dHJzIHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZ1xyXG4gIGZvbnRTaXplOiBudW1iZXJcclxuICBib2xkOiBib29sZWFuXHJcbiAgY29sb3I6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBUYWJsZURhdGFBY3Rpb25UeXBlIHtcclxuICBWaWV3ID0gJ1ZJRVcnLFxyXG4gIEFkZCA9ICdBREQnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5ZXJzQ29uZmlnIHtcclxuICBpZDogc3RyaW5nXHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgdXNlRGF0YVNvdXJjZT86IFVzZURhdGFTb3VyY2VcclxuICBhbGxGaWVsZHM6IElNRmllbGRTY2hlbWFbXVxyXG4gIHRhYmxlRmllbGRzPzogVGFibGVGaWVsZHNTY2hlbWFbXVxyXG4gIGVuYWJsZUF0dGFjaGVtZW50czogYm9vbGVhblxyXG4gIGVuYWJsZVNlYXJjaDogYm9vbGVhblxyXG4gIHNlYXJjaEZpZWxkcz86IHN0cmluZ1tdXHJcbiAgc2VhcmNoRXhhY3Q/OiBib29sZWFuXHJcbiAgc2VhcmNoSGludD86IHN0cmluZ1xyXG4gIGVuYWJsZUVkaXQ6IGJvb2xlYW5cclxuICBlbmFibGVSZWZyZXNoOiBib29sZWFuXHJcbiAgZW5hYmxlU2VsZWN0OiBib29sZWFuXHJcbiAgZW5hYmxlRGVsZXRlOiBib29sZWFuXHJcbiAgc2VsZWN0TW9kZTogU2VsZWN0aW9uTW9kZVR5cGVcclxuICBzaG93Q291bnQ/OiBib29sZWFuXHJcbiAgdXBkYXRlVGV4dD86IGJvb2xlYW5cclxuICBzaG93U2VtcHJhQnV0dG9ucz86IGJvb2xlYW5cclxuICBhbGxvd0NzdjogYm9vbGVhblxyXG4gIGRhdGFBY3Rpb25PYmplY3Q/OiBhbnlcclxuICBkYXRhQWN0aW9uVHlwZT86IFRhYmxlRGF0YUFjdGlvblR5cGVcclxuICBkYXRhQWN0aW9uRGF0YVNvdXJjZT86IERhdGFTb3VyY2VcclxuICBoZWFkZXJGb250U2V0dGluZz86IEhlYWRlckF0dHJzXHJcbiAgY29sdW1uU2V0dGluZz86IENvbHVtblNpemluZ1xyXG4gIGxheWVySG9ub3JNb2RlPzogTGF5ZXJIb25vck1vZGVUeXBlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcclxuICBsYXllcnNDb25maWc/OiBJbW11dGFibGVBcnJheTxMYXllcnNDb25maWc+XHJcbiAgYXJyYW5nZVR5cGU6IFRhYmxlQXJyYW5nZVR5cGVcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSU1Db25maWcgPSBJbW11dGFibGVPYmplY3Q8Q29uZmlnPlxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xyXG4gIEFic3RyYWN0RGF0YUFjdGlvbixcclxuICB0eXBlIERhdGFSZWNvcmRTZXQsXHJcbiAgdXRpbHMsXHJcbiAgZ2V0QXBwU3RvcmUsXHJcbiAgYXBwQWN0aW9ucyxcclxuICBNdXRhYmxlU3RvcmVNYW5hZ2VyLFxyXG4gIERhdGFTb3VyY2VUeXBlcyxcclxuICB0eXBlIFVzZURhdGFTb3VyY2UsXHJcbiAgRGF0YVNvdXJjZVN0YXR1cyxcclxuICBEYXRhTGV2ZWxcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgTGF5ZXJzQ29uZmlnLCBTZWxlY3Rpb25Nb2RlVHlwZSwgVGFibGVEYXRhQWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IHN1cExheWVyVHlwZXMgPSBbRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllciwgRGF0YVNvdXJjZVR5cGVzLlNjZW5lTGF5ZXIsIERhdGFTb3VyY2VUeXBlcy5CdWlsZGluZ0NvbXBvbmVudFN1YkxheWVyLFxyXG4gIERhdGFTb3VyY2VUeXBlcy5PcmllbnRlZEltYWdlcnlMYXllciwgRGF0YVNvdXJjZVR5cGVzLkltYWdlcnlMYXllcl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFRvVGFibGUgZXh0ZW5kcyBBYnN0cmFjdERhdGFBY3Rpb24ge1xyXG4gIGFzeW5jIGlzU3VwcG9ydGVkIChkYXRhU2V0czogRGF0YVJlY29yZFNldFtdLCBkYXRhTGV2ZWw6IERhdGFMZXZlbCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgaWYgKGRhdGFTZXRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBsZXQgaXNBY3Rpb25TdXBwb3J0ZWQgPSB0cnVlXHJcbiAgICBjb25zdCBkYXRhU2V0ID0gZGF0YVNldHNbMF1cclxuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSB9ID0gZGF0YVNldFxyXG4gICAgY29uc3QgdHlwZUlzTGF5ZXIgPSBzdXBMYXllclR5cGVzLmluY2x1ZGVzKGRhdGFTb3VyY2UudHlwZSBhcyBhbnkpXHJcbiAgICBjb25zdCBpc0RhdGFTb3VyY2VTZXQgPSBkYXRhU291cmNlLmlzRGF0YVNvdXJjZVNldFxyXG4gICAgY29uc3Qgbm90RGF0YVNvdXJjZUxldmVsID0gZGF0YUxldmVsICE9PSBEYXRhTGV2ZWwuRGF0YVNvdXJjZVxyXG4gICAgY29uc3Qgbm90SW5Db25maWdBbmROb3RMYXllciA9ICFkYXRhU291cmNlLmlzSW5BcHBDb25maWcoKSAmJiAhdHlwZUlzTGF5ZXJcclxuICAgIGlmIChpc0RhdGFTb3VyY2VTZXQgfHwgbm90RGF0YVNvdXJjZUxldmVsIHx8IG5vdEluQ29uZmlnQW5kTm90TGF5ZXIpIHtcclxuICAgICAgaXNBY3Rpb25TdXBwb3J0ZWQgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzQWN0aW9uU3VwcG9ydGVkICYmIGRhdGFTb3VyY2UuZ2V0U3RhdHVzKCkgIT09IERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHlcclxuICB9XHJcblxyXG4gIGRlZXBDbG9uZSA9IChvYmo6IGFueSk6IGFueSA9PiB7XHJcbiAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShvYmopXHJcbiAgICBjb25zdCBjbG9uZU9iaiA9IGlzQXJyYXkgPyBbXSA6IHt9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgY29uc3QgaXNPYmplY3QgPSAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqW2tleV0gPT09ICdmdW5jdGlvbicpICYmIG9ialtrZXldICE9PSBudWxsXHJcbiAgICAgIGNsb25lT2JqW2tleV0gPSBpc09iamVjdCA/IHRoaXMuZGVlcENsb25lKG9ialtrZXldKSA6IG9ialtrZXldXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xvbmVPYmpcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uRXhlY3V0ZSAoZGF0YVNldHM6IERhdGFSZWNvcmRTZXRbXSwgZGF0YUxldmVsOiBEYXRhTGV2ZWwpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGlzRHNMZXZlbCA9IGRhdGFMZXZlbCA9PT0gRGF0YUxldmVsLkRhdGFTb3VyY2VcclxuICAgIGNvbnN0IGRhdGFTZXQgPSBkYXRhU2V0c1swXVxyXG4gICAgY29uc3QgeyBkYXRhU291cmNlLCByZWNvcmRzIH0gPSBkYXRhU2V0XHJcbiAgICBjb25zdCBhbGxGaWVsZHMgPSBkYXRhU291cmNlICYmIGRhdGFTb3VyY2UuZ2V0U2NoZW1hKClcclxuICAgIGNvbnN0IGlzUnVudGltZURhdGEgPSAhZGF0YVNvdXJjZS5pc0luQXBwQ29uZmlnKClcclxuICAgIGNvbnN0IGRlZmF1bHRJbnZpc2libGUgPSBbXHJcbiAgICAgICdDcmVhdGlvbkRhdGUnLFxyXG4gICAgICAnQ3JlYXRvcicsXHJcbiAgICAgICdFZGl0RGF0ZScsXHJcbiAgICAgICdFZGl0b3InLFxyXG4gICAgICAnR2xvYmFsSUQnXHJcbiAgICBdXHJcbiAgICBjb25zdCBhbGxGaWVsZHNEZXRhaWxzID0gT2JqZWN0LnZhbHVlcyhhbGxGaWVsZHM/LmZpZWxkcylcclxuICAgIGNvbnN0IGluaXRUYWJsZUZpZWxkcyA9IGFsbEZpZWxkc0RldGFpbHMuZmlsdGVyKFxyXG4gICAgICBpdGVtID0+ICFkZWZhdWx0SW52aXNpYmxlLmluY2x1ZGVzKGl0ZW0uamltdU5hbWUpXHJcbiAgICApLm1hcChlbGUgPT4ge1xyXG4gICAgICByZXR1cm4geyAuLi5lbGUsIHZpc2libGU6IHRydWUgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IG5ld0l0ZW1JZCA9IGBEYVRhYmxlLSR7dXRpbHMuZ2V0VVVJRCgpfWBcclxuICAgIGNvbnN0IG5hbWUgPSAoaXNEc0xldmVsID8gJycgOiBkYXRhU2V0Lm5hbWUpIHx8IGRhdGFTb3VyY2UuZ2V0TGFiZWwoKSB8fCBkYXRhU291cmNlLmdldERhdGFTb3VyY2VKc29uKCk/LnNvdXJjZUxhYmVsXHJcbiAgICBjb25zdCB1c2VEYXRhU291cmNlID0ge1xyXG4gICAgICBkYXRhU291cmNlSWQ6IGRhdGFTb3VyY2UuaWQsXHJcbiAgICAgIG1haW5EYXRhU291cmNlSWQ6IGRhdGFTb3VyY2UuZ2V0TWFpbkRhdGFTb3VyY2UoKT8uaWQsXHJcbiAgICAgIGRhdGFWaWV3SWQ6IGRhdGFTb3VyY2UuZGF0YVZpZXdJZCxcclxuICAgICAgcm9vdERhdGFTb3VyY2VJZDogZGF0YVNvdXJjZS5nZXRSb290RGF0YVNvdXJjZSgpPy5pZFxyXG4gICAgfSBhcyBVc2VEYXRhU291cmNlXHJcbiAgICBjb25zdCBkYUxheWVySXRlbTogTGF5ZXJzQ29uZmlnID0ge1xyXG4gICAgICBpZDogbmV3SXRlbUlkLFxyXG4gICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICBhbGxGaWVsZHM6IGFsbEZpZWxkc0RldGFpbHMsXHJcbiAgICAgIHRhYmxlRmllbGRzOiBpbml0VGFibGVGaWVsZHMsXHJcbiAgICAgIGVuYWJsZUF0dGFjaGVtZW50czogZmFsc2UsXHJcbiAgICAgIGVuYWJsZUVkaXQ6IGZhbHNlLFxyXG4gICAgICBhbGxvd0NzdjogZmFsc2UsXHJcbiAgICAgIGVuYWJsZVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHNlYXJjaEZpZWxkczogW10sXHJcbiAgICAgIGVuYWJsZVJlZnJlc2g6IGZhbHNlLFxyXG4gICAgICBlbmFibGVTZWxlY3Q6IHRydWUsXHJcbiAgICAgIGVuYWJsZURlbGV0ZTogZmFsc2UsXHJcbiAgICAgIHNlbGVjdE1vZGU6IFNlbGVjdGlvbk1vZGVUeXBlLk11bHRpcGxlLFxyXG4gICAgICBkYXRhQWN0aW9uT2JqZWN0OiB0cnVlLFxyXG4gICAgICBkYXRhQWN0aW9uVHlwZTogVGFibGVEYXRhQWN0aW9uVHlwZS5BZGQsXHJcbiAgICAgIC4uLihpc1J1bnRpbWVEYXRhID8geyBkYXRhQWN0aW9uRGF0YVNvdXJjZTogZGF0YVNvdXJjZSB9IDogeyB1c2VEYXRhU291cmNlIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCB2aWV3SW5UYWJsZU9iaiA9IE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdGF0ZVZhbHVlKFt0aGlzLndpZGdldElkXSk/LnZpZXdJblRhYmxlT2JqIHx8IHt9XHJcbiAgICBjb25zdCBjb3B5UmVjb3JkcyA9IFtdXHJcbiAgICBpZiAoIWlzRHNMZXZlbCkge1xyXG4gICAgICByZWNvcmRzLmZvckVhY2gocmVjb3JkID0+IHtcclxuICAgICAgICBjb3B5UmVjb3Jkcy5wdXNoKHJlY29yZC5jbG9uZSh0cnVlKSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHZpZXdJblRhYmxlT2JqW25ld0l0ZW1JZF0gPSB7IGRhTGF5ZXJJdGVtLCByZWNvcmRzOiBjb3B5UmVjb3JkcyB9XHJcbiAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAndmlld0luVGFibGVPYmonLCB2aWV3SW5UYWJsZU9iailcclxuXHJcbiAgICBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKFxyXG4gICAgICBhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZSh0aGlzLndpZGdldElkLCAnZGF0YUFjdGlvbkFjdGl2ZU9iaicsIHsgYWN0aXZlVGFiSWQ6IG5ld0l0ZW1JZCwgZGF0YUFjdGlvblRhYmxlOiB0cnVlIH0pXHJcbiAgICApXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
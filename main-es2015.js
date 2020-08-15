(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _products_bar_products_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-bar/products-bar.component */ "./src/app/products-bar/products-bar.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");





function AppComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", button_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.nightMode ? button_r1.iconLight : button_r1.iconDark, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class Button {
    constructor(icon, link) {
        this.link = link;
        this.iconLight = `assets/images/${icon}.svg`;
        this.iconDark = `assets/images/${icon}.dark.svg`;
    }
}
class AppComponent {
    constructor(detector) {
        this.detector = detector;
        this.sunIconPath = 'assets/images/sun.svg';
        this.moonIconPath = 'assets/images/moon.svg';
        this.socialButtons = [
            new Button("gmail", "mailto:elumixor@gmail.com"),
            new Button("github", "https://github.com/elumixor"),
            new Button("facebook", "https://www.facebook.com/elumixor"),
            new Button("instagram", "https://www.instagram.com/elumixor"),
        ];
        // todo: implememnt here logic checking the time of the day and/or user theme to set night mode to true or false
    }
    get themeImage() {
        return this.nightMode ? this.sunIconPath : this.moonIconPath;
    }
    switchMode() {
        this.nightMode = !this.nightMode;
        this.detector.detectChanges();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 3, consts: [["id", "title"], ["id", "subtitle"], [3, "href", 4, "ngFor", "ngForOf"], [3, "selected"], [3, "href"], ["alt", "", 1, "icon", "social", 3, "src"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ELUMIXOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_a_3_Template, 2, 2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-products-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-product", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socialButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _products_bar_products_bar_component__WEBPACK_IMPORTED_MODULE_2__["ProductsBarComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]], styles: ["#title[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-bottom: 15px;\n  margin-top: 25px;\n  letter-spacing: 1em;\n}\n\n#subtitle[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  font-size: 1em;\n}\n\n#themeIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\nimg.social[_ngcontent-%COMP%] {\n  margin-right: calc(var(--icon-size) / 2);\n}\n\napp-product[_ngcontent-%COMP%] {\n  width: 90%;\n  left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbHVtaXhvci9kZXYvUG9ydGZvbGlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUNESjs7QURLSTtFQUNJLHdDQUFBO0FDRlI7O0FETUE7RUFDSSxVQUFBO0VBQ0EsUUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIFxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcclxufVxyXG5cclxuI3N1YnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbiN0aGVtZUljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICAmLnNvY2lhbCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWljb24tc2l6ZSkgLyAyKTtcclxuICAgIH1cclxufVxyXG5cclxuYXBwLXByb2R1Y3Qge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGxlZnQ6IDUlO1xyXG59IiwiI3RpdGxlIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxZW07XG59XG5cbiNzdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI3RoZW1lSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuaW1nLnNvY2lhbCB7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1pY29uLXNpemUpIC8gMik7XG59XG5cbmFwcC1wcm9kdWN0IHtcbiAgd2lkdGg6IDkwJTtcbiAgbGVmdDogNSU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_bar_products_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-bar/products-bar.component */ "./src/app/products-bar/products-bar.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _store_buttons_store_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store-buttons/store-buttons.component */ "./src/app/store-buttons/store-buttons.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _products_bar_products_bar_component__WEBPACK_IMPORTED_MODULE_3__["ProductsBarComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"],
        _store_buttons_store_buttons_component__WEBPACK_IMPORTED_MODULE_5__["StoreButtonsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _products_bar_products_bar_component__WEBPACK_IMPORTED_MODULE_3__["ProductsBarComponent"],
                    _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"],
                    _store_buttons_store_buttons_component__WEBPACK_IMPORTED_MODULE_5__["StoreButtonsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _store_buttons_store_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store-buttons/store-buttons.component */ "./src/app/store-buttons/store-buttons.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ProductComponent_iframe_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 6);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 886 / 2)("height", 886)("src", ctx_r5.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
class ProductComponent {
    constructor(productsService, sanitizer) {
        this.productsService = productsService;
        this.sanitizer = sanitizer;
    }
    set selected(value) {
        this.product = this.productsService.products[value];
        if (this.product.videoUrl) {
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.product.videoUrl
                + '?autoplay=1&mute=1&loop=1&playlist=' + this.product.videoUrl);
        }
    }
    ngOnInit() { }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { selected: "selected" }, decls: 9, vars: 6, consts: [["id", "content"], ["id", "name"], ["id", "description"], ["id", "comment"], [3, "googlePlayStore", "appleAppStore"], ["frameborder", "0", "allow", "autoplay", 3, "width", "height", "src", 4, "ngIf"], ["frameborder", "0", "allow", "autoplay", 3, "width", "height", "src"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-store-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductComponent_iframe_8_Template, 1, 3, "iframe", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("googlePlayStore", ctx.product.googlePlayStoreUrl)("appleAppStore", ctx.product.appleAppStoreUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoUrl);
    } }, directives: [_store_buttons_store_buttons_component__WEBPACK_IMPORTED_MODULE_3__["StoreButtonsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  margin-top: 25px;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n#content[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 500px;\n  height: 100%;\n  position: absolute;\n}\n#name[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: var(--font-bold);\n  letter-spacing: 0.2em;\n  margin: 0;\n}\n#comment[_ngcontent-%COMP%] {\n  color: #4A4A4A;\n  font-style: italic;\n  margin-top: 50px;\n}\niframe[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(min(50vh, 15em) / 2);\n  margin-right: calc(10em - calc(min(50vh, 15em) / 2));\n  height: min(50vh, 15em);\n  left: calc(100% - 10em);\n}\napp-store-buttons[_ngcontent-%COMP%] {\n  width: min(15em, 100%);\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbHVtaXhvci9kZXYvUG9ydGZvbGlvL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURNQTtFQUNJLHFCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0pKO0FET0E7RUFDSSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FDSko7QURPQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSko7QURPQTtFQUdJLGtCQUFBO0VBQ0EsZ0NBSGU7RUFJZixvREFBQTtFQUNBLHVCQTdCVztFQThCWCx1QkFBQTtBQ05KO0FEU0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbiAgICA+ICoge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbn1cclxuXHJcbiR2aWRlby13aWR0aDogMTBlbTtcclxuJHZpZGVvLWhlaWdodDogbWluKDUwdmgsIDE1ZW0pO1xyXG5cclxuI2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuI25hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LWJvbGQpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29tbWVudCB7XHJcbiAgICBjb2xvcjogIzRBNEE0QTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgICAkYWN0dWFsLXdpZHRoOiBjYWxjKCN7JHZpZGVvLWhlaWdodH0gLyAyKTtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogJGFjdHVhbC13aWR0aDtcclxuICAgIG1hcmdpbi1yaWdodDogY2FsYygjeyR2aWRlby13aWR0aH0gLSAjeyRhY3R1YWwtd2lkdGh9KTtcclxuICAgIGhlaWdodDogJHZpZGVvLWhlaWdodDtcclxuICAgIGxlZnQ6IGNhbGMoMTAwJSAtICN7JHZpZGVvLXdpZHRofSk7XHJcbn1cclxuXHJcbmFwcC1zdG9yZS1idXR0b25zIHtcclxuICAgIHdpZHRoOiBtaW4oMTVlbSwgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbn0iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbjpob3N0ID4gKiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LWJvbGQpO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbW1lbnQge1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBjYWxjKG1pbig1MHZoLCAxNWVtKSAvIDIpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTBlbSAtIGNhbGMobWluKDUwdmgsIDE1ZW0pIC8gMikpO1xuICBoZWlnaHQ6IG1pbig1MHZoLCAxNWVtKTtcbiAgbGVmdDogY2FsYygxMDAlIC0gMTBlbSk7XG59XG5cbmFwcC1zdG9yZS1idXR0b25zIHtcbiAgd2lkdGg6IG1pbigxNWVtLCAxMDAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss']
            }]
    }], function () { return [{ type: _services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/products-bar/products-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/products-bar/products-bar.component.ts ***!
  \********************************************************/
/*! exports provided: ProductsBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsBarComponent", function() { return ProductsBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ProductsBarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r2.calculateBarTop(i_r4), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", i_r4 === ctx_r2.selected);
} }
class ProductsBarComponent {
    constructor(productsService) {
        this.productsService = productsService;
    }
    ngOnInit() { }
    get products() { return this.productsService.products; }
    calculateBarTop(i) {
        const total = this.products.length;
        const offset = 10;
        return offset + (100 - offset * 2) / total * i;
    }
}
ProductsBarComponent.ɵfac = function ProductsBarComponent_Factory(t) { return new (t || ProductsBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
ProductsBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsBarComponent, selectors: [["app-products-bar"]], inputs: { selected: "selected" }, decls: 2, vars: 1, consts: [["id", "bar"], ["class", "bar-circle", 3, "selected", "top", 4, "ngFor", "ngForOf"], [1, "bar-circle"]], template: function ProductsBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsBarComponent_div_1_Template, 1, 4, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  width: 5%;\n  height: min(40vh, 20rem);\n}\n\n#bar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 2px;\n  left: calc((1em - 2px) / 2);\n  background: linear-gradient(transparent, black 25%, black 75%, transparent);\n  height: 100%;\n  border-radius: 100px;\n}\n\n.bar-circle[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.25em solid var(--color-dark);\n  background-color: var(--color-light);\n  box-sizing: border-box;\n  border-radius: 50%;\n  width: 0.7em;\n  height: 0.7em;\n  left: 0.15em;\n}\n\n.bar-circle.selected[_ngcontent-%COMP%] {\n  width: 1em;\n  height: 1em;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbHVtaXhvci9kZXYvUG9ydGZvbGlvL3NyYy9hcHAvcHJvZHVjdHMtYmFyL3Byb2R1Y3RzLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMtYmFyL3Byb2R1Y3RzLWJhci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9lbHVtaXhvci9kZXYvUG9ydGZvbGlvL3NyYy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUNESjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsVUFKUTtFQUtSLDJCQUFBO0VBQ0EsMkVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBR0Esa0JBQUE7RUU1QkEsWUZTTztFRVJQLGFGUU87RUFxQlAsWUFBQTtBQ05KOztBRFFJO0VFaENBLFVGUUc7RUVQSCxXRk9HO0VBMEJDLE9BQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzLWJhci9wcm9kdWN0cy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9taXhpbnMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICBoZWlnaHQ6IG1pbig0MHZoLCAyMHJlbSk7XHJcbn1cclxuXHJcbiRzaXplOiAxZW07XHJcbiRzZWxlY3RlZDogLjdlbTtcclxuJGJhci13aWR0aDogMnB4O1xyXG5cclxuI2JhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogJGJhci13aWR0aDtcclxuICAgIGxlZnQ6IGNhbGMoKCN7JHNpemV9IC0gI3skYmFyLXdpZHRofSkgLyAyKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgYmxhY2sgMjUlLCBibGFjayA3NSUsIHRyYW5zcGFyZW50KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcblxyXG4uYmFyLWNpcmNsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IC4yNWVtIHNvbGlkIHZhcigtLWNvbG9yLWRhcmspO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBAaW5jbHVkZSBzcXVhcmUoJHNlbGVjdGVkKTtcclxuICAgIGxlZnQ6ICgkc2l6ZSAtICRzZWxlY3RlZCkgLyAyO1xyXG4gICAgXHJcbiAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBzcXVhcmUoJHNpemUpO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbn0iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNSU7XG4gIGhlaWdodDogbWluKDQwdmgsIDIwcmVtKTtcbn1cblxuI2JhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDJweDtcbiAgbGVmdDogY2FsYygoMWVtIC0gMnB4KSAvIDIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIGJsYWNrIDI1JSwgYmxhY2sgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5iYXItY2lyY2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDAuMjVlbSBzb2xpZCB2YXIoLS1jb2xvci1kYXJrKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbiAgbGVmdDogMC4xNWVtO1xufVxuLmJhci1jaXJjbGUuc2VsZWN0ZWQge1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgbGVmdDogMDtcbn0iLCJAbWl4aW4gc3F1YXJlKCRzaXplKSB7XHJcbiAgICB3aWR0aDogJHNpemU7XHJcbiAgICBoZWlnaHQ6ICRzaXplO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products-bar',
                templateUrl: './products-bar.component.html',
                styleUrls: ['./products-bar.component.scss']
            }]
    }], function () { return [{ type: _services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }]; }, { selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/product.ts":
/*!*************************************!*\
  !*** ./src/app/services/product.ts ***!
  \*************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(name, description, comment, googlePlayStoreUrl, appleAppStoreUrl, videoUrl, imagesUrls) {
        this.name = name;
        this.description = description;
        this.comment = comment;
        this.googlePlayStoreUrl = googlePlayStoreUrl;
        this.appleAppStoreUrl = appleAppStoreUrl;
        this.videoUrl = videoUrl;
        this.imagesUrls = imagesUrls;
    }
}


/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/app/services/product.ts");



class ProductsService {
    constructor() {
        this.products = [
            new _product__WEBPACK_IMPORTED_MODULE_1__["Product"]("Color Match", "Mobile game where you can put your skills to the test! \nSimple yet challenging.", "My first proudly released product!", `https://play.google.com/store/apps/details?id=com.elumixor.ColorMatch`, `https://apps.apple.com/cz/app/color-match-spin-tap-react/id1525018660`, `rCxQmMovUAQ`)
        ];
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/store-buttons/store-buttons.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/store-buttons/store-buttons.component.ts ***!
  \**********************************************************/
/*! exports provided: StoreButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreButtonsComponent", function() { return StoreButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StoreButtonsComponent {
    constructor() {
    }
    ngOnInit() { }
}
StoreButtonsComponent.ɵfac = function StoreButtonsComponent_Factory(t) { return new (t || StoreButtonsComponent)(); };
StoreButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreButtonsComponent, selectors: [["app-store-buttons"]], inputs: { googlePlayStore: "googlePlayStore", appleAppStore: "appleAppStore" }, decls: 5, vars: 2, consts: [[3, "href"], ["src", "assets/images/app-store.svg", "alt", ""], ["id", "space"], ["src", "assets/images/google-play.svg", "alt", ""]], template: function StoreButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.appleAppStore, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.googlePlayStore, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n\n#space[_ngcontent-%COMP%] {\n  width: 10px;\n}\n\na[_ngcontent-%COMP%] {\n  width: calc(50% - 5px);\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbHVtaXhvci9kZXYvUG9ydGZvbGlvL3NyYy9hcHAvc3RvcmUtYnV0dG9ucy9zdG9yZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yZS1idXR0b25zL3N0b3JlLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc3RvcmUtYnV0dG9ucy9zdG9yZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuI3NwYWNlIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDVweCk7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNzcGFjZSB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG5hIHtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gNXB4KTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-store-buttons',
                templateUrl: './store-buttons.component.html',
                styleUrls: ['./store-buttons.component.scss']
            }]
    }], function () { return []; }, { googlePlayStore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appleAppStore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/elumixor/dev/Portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/SocialButton.ts":
  /*!*********************************!*\
    !*** ./src/app/SocialButton.ts ***!
    \*********************************/

  /*! exports provided: SocialButton */

  /***/
  function srcAppSocialButtonTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialButton", function () {
      return SocialButton;
    });

    var SocialButton = function SocialButton(icon, link) {
      _classCallCheck(this, SocialButton);

      this.link = link;
      this.iconLight = "assets/images/".concat(icon, ".svg");
      this.iconDark = "assets/images/".concat(icon, ".dark.svg");
    };
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _SocialButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./SocialButton */
    "./src/app/SocialButton.ts");
    /* harmony import */


    var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _responsive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./responsive.directive */
    "./src/app/responsive.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _image_link_image_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./image-link/image-link.component */
    "./src/app/image-link/image-link.component.ts");
    /* harmony import */


    var _products_bar_products_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./products-bar/products-bar.component */
    "./src/app/products-bar/products-bar.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _product_mobile_product_mobile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./product-mobile/product-mobile.component */
    "./src/app/product-mobile/product-mobile.component.ts");

    var _c0 = ["productRef"];

    function AppComponent_ng_template_0_app_image_link_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image-link", 6);
      }

      if (rf & 2) {
        var button_r6 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", button_r6.link)("src", ctx_r5.nightMode ? button_r6.iconLight : button_r6.iconDark);
      }
    }

    function AppComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_0_app_image_link_1_Template, 1, 2, "app-image-link", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.socialButtons);
      }
    }

    function AppComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function AppComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-products-bar", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-product", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", 0);
      }
    }

    function AppComponent_ng_template_5_app_product_mobile_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-mobile", 11, 12);
      }

      if (rf & 2) {
        var product_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r10);
      }
    }

    function AppComponent_ng_template_5_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function AppComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_5_app_product_mobile_0_Template, 2, 1, "app-product-mobile", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 7);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.products);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(detector, productsService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.detector = detector;
        this.productsService = productsService;
        this.sunIconPath = 'assets/images/sun.svg';
        this.moonIconPath = 'assets/images/moon.svg';
        this.desktop = false;
        this.socialButtons = [new _SocialButton__WEBPACK_IMPORTED_MODULE_1__["SocialButton"]("gmail", "mailto:elumixor@gmail.com"), new _SocialButton__WEBPACK_IMPORTED_MODULE_1__["SocialButton"]("github", "https://github.com/elumixor"), new _SocialButton__WEBPACK_IMPORTED_MODULE_1__["SocialButton"]("facebook", "https://www.facebook.com/elumixor"), new _SocialButton__WEBPACK_IMPORTED_MODULE_1__["SocialButton"]("instagram", "https://www.instagram.com/elumixor")];
        this.desktop = screen.width > 500;
        addEventListener('resize', function () {
          _this.desktop = screen.width > 500;

          _this.detector.detectChanges();
        }); // todo: implememnt here logic checking the time of the day and/or user theme to set night mode to true or false
      }

      _createClass(AppComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          setTimeout(function () {
            return _this2.productsRefs.first.nativeElement.scrollIntoView({
              behavior: "smooth"
            });
          }, 1000);
        }
      }, {
        key: "switchMode",
        value: function switchMode() {
          this.nightMode = !this.nightMode;
          this.detector.detectChanges();
        }
      }, {
        key: "themeImage",
        get: function get() {
          return this.nightMode ? this.sunIconPath : this.moonIconPath;
        }
      }, {
        key: "products",
        get: function get() {
          return this.productsService.products;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.productsRefs = _t);
        }
      },
      decls: 7,
      vars: 2,
      consts: [["socialButtonsRef", ""], ["appResponsive", "", 1, "title"], [4, "ngIf", "ngIfElse"], ["mobile", ""], ["id", "socialButtons", "appResponsive", ""], ["class", "icon", 3, "href", "src", 4, "ngFor", "ngForOf"], [1, "icon", 3, "href", "src"], [4, "ngTemplateOutlet"], ["id", "productsContainer"], [3, "selected"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"], ["productRef", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ELUMIXOR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_container_4_Template, 5, 3, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_template_5_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.desktop)("ngIfElse", _r3);
        }
      },
      directives: [_responsive_directive__WEBPACK_IMPORTED_MODULE_3__["ResponsiveDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _image_link_image_link_component__WEBPACK_IMPORTED_MODULE_5__["ImageLinkComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _products_bar_products_bar_component__WEBPACK_IMPORTED_MODULE_6__["ProductsBarComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"], _product_mobile_product_mobile_component__WEBPACK_IMPORTED_MODULE_8__["ProductMobileComponent"]],
      styles: [".title[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  margin-top: 25px;\n  letter-spacing: 1em;\n}\n.title.mobile[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: calc(100vh - var(--padding-vertical));\n  margin: 0;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  font-size: 1em;\n}\n#productsContainer[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: inline-block;\n  width: 100%;\n}\n#productsContainer[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n#themeIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n#socialButtons.mobile[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2em;\n  margin-top: 15em;\n}\n#socialButtons.mobile[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n#socialButtons[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: calc(var(--icon-size) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbHVtaXhvci9kZXYvUG9ydGZvbGlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7QUNGSjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxrREFBQTtFQUNBLFNBQUE7QUNGUjtBRE1BO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0FDSEo7QURNQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDSEo7QURLSTtFQUNJLG1CQUFBO0FDSFI7QURPQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUNKSjtBRFNJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTlI7QURRUTtFQUNJLHFCQUFBO0FDTlo7QURVSTtFQUNJLHdDQUFBO0FDUlIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9taXhpbnMuc2Nzcyc7XHJcblxyXG4udGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBcclxuICAgIGxldHRlci1zcGFjaW5nOiAxZW07XHJcblxyXG4gICAgJi5tb2JpbGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLXBhZGRpbmctdmVydGljYWwpKTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4jcHJvZHVjdHNDb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgID4gKiB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxufVxyXG5cclxuI3RoZW1lSWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuXHJcbiNzb2NpYWxCdXR0b25zIHtcclxuICAgICYubW9iaWxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1ZW07XHJcblxyXG4gICAgICAgICYgPiAqIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWljb24tc2l6ZSkgLyAyKTtcclxuICAgIH1cclxufSIsIi50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxZW07XG59XG4udGl0bGUubW9iaWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLXBhZGRpbmctdmVydGljYWwpKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3VidGl0bGUge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbiNwcm9kdWN0c0NvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4jcHJvZHVjdHNDb250YWluZXIgPiAqIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuI3RoZW1lSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuI3NvY2lhbEJ1dHRvbnMubW9iaWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIG1hcmdpbi10b3A6IDE1ZW07XG59XG4jc29jaWFsQnV0dG9ucy5tb2JpbGUgPiAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI3NvY2lhbEJ1dHRvbnMgPiAqIHtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWljb24tc2l6ZSkgLyAyKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
        }];
      }, {
        productsRefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['productRef', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _products_bar_products_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products-bar/products-bar.component */
    "./src/app/products-bar/products-bar.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _store_buttons_store_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store-buttons/store-buttons.component */
    "./src/app/store-buttons/store-buttons.component.ts");
    /* harmony import */


    var _product_mobile_product_mobile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-mobile/product-mobile.component */
    "./src/app/product-mobile/product-mobile.component.ts");
    /* harmony import */


    var _image_link_image_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./image-link/image-link.component */
    "./src/app/image-link/image-link.component.ts");
    /* harmony import */


    var _responsive_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./responsive.directive */
    "./src/app/responsive.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _products_bar_products_bar_component__WEBPACK_IMPORTED_MODULE_3__["ProductsBarComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], _store_buttons_store_buttons_component__WEBPACK_IMPORTED_MODULE_5__["StoreButtonsComponent"], _product_mobile_product_mobile_component__WEBPACK_IMPORTED_MODULE_6__["ProductMobileComponent"], _image_link_image_link_component__WEBPACK_IMPORTED_MODULE_7__["ImageLinkComponent"], _responsive_directive__WEBPACK_IMPORTED_MODULE_8__["ResponsiveDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _products_bar_products_bar_component__WEBPACK_IMPORTED_MODULE_3__["ProductsBarComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], _store_buttons_store_buttons_component__WEBPACK_IMPORTED_MODULE_5__["StoreButtonsComponent"], _product_mobile_product_mobile_component__WEBPACK_IMPORTED_MODULE_6__["ProductMobileComponent"], _image_link_image_link_component__WEBPACK_IMPORTED_MODULE_7__["ImageLinkComponent"], _responsive_directive__WEBPACK_IMPORTED_MODULE_8__["ResponsiveDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/image-link/image-link.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/image-link/image-link.component.ts ***!
    \****************************************************/

  /*! exports provided: ImageLinkComponent */

  /***/
  function srcAppImageLinkImageLinkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageLinkComponent", function () {
      return ImageLinkComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ImageLinkComponent =
    /*#__PURE__*/
    function () {
      function ImageLinkComponent() {
        _classCallCheck(this, ImageLinkComponent);
      }

      _createClass(ImageLinkComponent, [{
        key: "goToLink",
        value: function goToLink() {
          window.location.href = this.href;
        }
      }]);

      return ImageLinkComponent;
    }();

    ImageLinkComponent.ɵfac = function ImageLinkComponent_Factory(t) {
      return new (t || ImageLinkComponent)();
    };

    ImageLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageLinkComponent,
      selectors: [["app-image-link"]],
      inputs: {
        href: "href",
        src: "src"
      },
      decls: 1,
      vars: 1,
      consts: [["alt", "", 3, "src", "click"]],
      template: function ImageLinkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageLinkComponent_Template_img_click_0_listener() {
            return ctx.goToLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbHVtaXhvci9kZXYvUG9ydGZvbGlvL3NyYy9hcHAvaW1hZ2UtbGluay9pbWFnZS1saW5rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbWFnZS1saW5rL2ltYWdlLWxpbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9pbWFnZS1saW5rL2ltYWdlLWxpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageLinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-image-link',
          templateUrl: './image-link.component.html',
          styleUrls: ['./image-link.component.scss']
        }]
      }], null, {
        href: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/product-mobile/product-mobile.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/product-mobile/product-mobile.component.ts ***!
    \************************************************************/

  /*! exports provided: ProductMobileComponent */

  /***/
  function srcAppProductMobileProductMobileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductMobileComponent", function () {
      return ProductMobileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _store_buttons_store_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../store-buttons/store-buttons.component */
    "./src/app/store-buttons/store-buttons.component.ts");

    function ProductMobileComponent_iframe_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 5);
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 886 / 2)("height", 886)("src", ctx_r16.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
      }
    }

    var ProductMobileComponent =
    /*#__PURE__*/
    function () {
      function ProductMobileComponent(sanitizer) {
        _classCallCheck(this, ProductMobileComponent);

        this.sanitizer = sanitizer;
      }

      _createClass(ProductMobileComponent, [{
        key: "product",
        set: function set(value) {
          this._product = value;

          if (value.videoUrl) {
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + value.videoUrl + '?autoplay=1&mute=1&loop=1&controls=0&playlist=' + value.videoUrl);
          }
        },
        get: function get() {
          return this._product;
        }
      }]);

      return ProductMobileComponent;
    }();

    ProductMobileComponent.ɵfac = function ProductMobileComponent_Factory(t) {
      return new (t || ProductMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    ProductMobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductMobileComponent,
      selectors: [["app-product-mobile"]],
      inputs: {
        product: "product"
      },
      decls: 8,
      vars: 6,
      consts: [["id", "name"], ["frameborder", "0", "allow", "autoplay", 3, "width", "height", "src", 4, "ngIf"], ["id", "description"], ["id", "comment"], [3, "googlePlayStore", "appleAppStore"], ["frameborder", "0", "allow", "autoplay", 3, "width", "height", "src"]],
      template: function ProductMobileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductMobileComponent_iframe_2_Template, 1, 3, "iframe", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-store-buttons", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.comment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("googlePlayStore", ctx.product.googlePlayStoreUrl)("appleAppStore", ctx.product.appleAppStoreUrl);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _store_buttons_store_buttons_component__WEBPACK_IMPORTED_MODULE_3__["StoreButtonsComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#name[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: var(--font-bold);\n  letter-spacing: 0.2em;\n  text-align: center;\n}\n\n#comment[_ngcontent-%COMP%] {\n  color: #4A4A4A;\n  font-style: italic;\n  margin-top: 50px;\n}\n\niframe[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: min(calc(100vw - var(--padding-horizontal) * 2), 40vh);\n  height: min(calc(200vw - var(--padding-horizontal) * 4), 80vh);\n  border-radius: 1em;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbHVtaXhvci9kZXYvUG9ydGZvbGlvL3NyYy9hcHAvcHJvZHVjdC1tb2JpbGUvcHJvZHVjdC1tb2JpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QtbW9iaWxlL3Byb2R1Y3QtbW9iaWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLDZEQUFBO0VBQ0EsOERBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LW1vYmlsZS9wcm9kdWN0LW1vYmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNuYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC1ib2xkKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2NvbW1lbnQge1xyXG4gICAgY29sb3I6ICM0QTRBNEE7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IG1pbihjYWxjKDEwMHZ3IC0gdmFyKC0tcGFkZGluZy1ob3Jpem9udGFsKSAqIDIpLCA0MHZoKTtcclxuICAgIGhlaWdodDogbWluKGNhbGMoMjAwdncgLSB2YXIoLS1wYWRkaW5nLWhvcml6b250YWwpICogNCksIDgwdmgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI25hbWUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC1ib2xkKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb21tZW50IHtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuaWZyYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogbWluKGNhbGMoMTAwdncgLSB2YXIoLS1wYWRkaW5nLWhvcml6b250YWwpICogMiksIDQwdmgpO1xuICBoZWlnaHQ6IG1pbihjYWxjKDIwMHZ3IC0gdmFyKC0tcGFkZGluZy1ob3Jpem9udGFsKSAqIDQpLCA4MHZoKTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductMobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-mobile',
          templateUrl: './product-mobile.component.html',
          styleUrls: ['./product-mobile.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/product/product.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/product/product.component.ts ***!
    \**********************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _store_buttons_store_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../store-buttons/store-buttons.component */
    "./src/app/store-buttons/store-buttons.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductComponent_iframe_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 6);
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 886 / 2)("height", 886)("src", ctx_r15.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
      }
    }

    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent(productsService, sanitizer) {
        _classCallCheck(this, ProductComponent);

        this.productsService = productsService;
        this.sanitizer = sanitizer;
      }

      _createClass(ProductComponent, [{
        key: "selected",
        set: function set(value) {
          this.product = this.productsService.products[value];

          if (this.product.videoUrl) {
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.product.videoUrl + '?autoplay=1&mute=1&loop=1&controls=0&playlist=' + this.product.videoUrl);
          }
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ɵfac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
    };

    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductComponent,
      selectors: [["app-product"]],
      inputs: {
        selected: "selected"
      },
      decls: 9,
      vars: 6,
      consts: [["id", "content"], ["id", "name"], ["id", "description"], ["id", "comment"], [3, "googlePlayStore", "appleAppStore"], ["frameborder", "0", "allow", "autoplay", 3, "width", "height", "src", 4, "ngIf"], ["frameborder", "0", "allow", "autoplay", 3, "width", "height", "src"]],
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_store_buttons_store_buttons_component__WEBPACK_IMPORTED_MODULE_3__["StoreButtonsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: min(93%, 800px);\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n#content[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: calc(100% - 10em);\n  height: 100%;\n  position: absolute;\n}\n#name[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: var(--font-bold);\n  letter-spacing: 0.2em;\n  margin: 0;\n}\n#comment[_ngcontent-%COMP%] {\n  color: #4A4A4A;\n  font-style: italic;\n  margin-top: 50px;\n}\niframe[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(min(50vh, 15em) / 2);\n  margin-right: calc(10em - calc(min(50vh, 15em) / 2));\n  height: min(50vh, 15em);\n  left: calc(100% - calc(min(50vh, 15em) / 2));\n}\napp-store-buttons[_ngcontent-%COMP%] {\n  width: min(15em, 100%);\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbHVtaXhvci9kZXYvUG9ydGZvbGlvL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsc0JBQUE7QUNBSjtBREVJO0VBQ0ksbUJBQUE7QUNBUjtBRE9BO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0pKO0FET0E7RUFDSSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FDSko7QURPQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSko7QURPQTtFQUdJLGtCQUFBO0VBQ0EsZ0NBSGU7RUFJZixvREFBQTtFQUNBLHVCQTVCVztFQTZCWCw0Q0FBQTtBQ05KO0FEU0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIHdpZHRoOiBtaW4oOTMlLCA4MDBweCk7XHJcblxyXG4gICAgPiAqIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG59XHJcblxyXG4kdmlkZW8td2lkdGg6IDEwZW07XHJcbiR2aWRlby1oZWlnaHQ6IG1pbig1MHZoLCAxNWVtKTtcclxuXHJcbiNjb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMGVtKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuI25hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LWJvbGQpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29tbWVudCB7XHJcbiAgICBjb2xvcjogIzRBNEE0QTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgICAkYWN0dWFsLXdpZHRoOiBjYWxjKCN7JHZpZGVvLWhlaWdodH0gLyAyKTtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogJGFjdHVhbC13aWR0aDtcclxuICAgIG1hcmdpbi1yaWdodDogY2FsYygjeyR2aWRlby13aWR0aH0gLSAjeyRhY3R1YWwtd2lkdGh9KTtcclxuICAgIGhlaWdodDogJHZpZGVvLWhlaWdodDtcclxuICAgIGxlZnQ6IGNhbGMoMTAwJSAtICN7JGFjdHVhbC13aWR0aH0pO1xyXG59XHJcblxyXG5hcHAtc3RvcmUtYnV0dG9ucyB7XHJcbiAgICB3aWR0aDogbWluKDE1ZW0sIDEwMCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG59IiwiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IG1pbig5MyUsIDgwMHB4KTtcbn1cbjpob3N0ID4gKiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBlbSk7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LWJvbGQpO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbW1lbnQge1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBjYWxjKG1pbig1MHZoLCAxNWVtKSAvIDIpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTBlbSAtIGNhbGMobWluKDUwdmgsIDE1ZW0pIC8gMikpO1xuICBoZWlnaHQ6IG1pbig1MHZoLCAxNWVtKTtcbiAgbGVmdDogY2FsYygxMDAlIC0gY2FsYyhtaW4oNTB2aCwgMTVlbSkgLyAyKSk7XG59XG5cbmFwcC1zdG9yZS1idXR0b25zIHtcbiAgd2lkdGg6IG1pbigxNWVtLCAxMDAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.scss']
        }]
      }], function () {
        return [{
          type: _services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      }, {
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products-bar/products-bar.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/products-bar/products-bar.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductsBarComponent */

  /***/
  function srcAppProductsBarProductsBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsBarComponent", function () {
      return ProductsBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductsBarComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
      }

      if (rf & 2) {
        var i_r14 = ctx.index;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r12.calculateBarTop(i_r14), "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", i_r14 === ctx_r12.selected);
      }
    }

    var ProductsBarComponent =
    /*#__PURE__*/
    function () {
      function ProductsBarComponent(productsService) {
        _classCallCheck(this, ProductsBarComponent);

        this.productsService = productsService;
      }

      _createClass(ProductsBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "calculateBarTop",
        value: function calculateBarTop(i) {
          var total = this.products.length;
          var offset = 10;
          return offset + (100 - offset * 2) / total * i;
        }
      }, {
        key: "products",
        get: function get() {
          return this.productsService.products;
        }
      }]);

      return ProductsBarComponent;
    }();

    ProductsBarComponent.ɵfac = function ProductsBarComponent_Factory(t) {
      return new (t || ProductsBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]));
    };

    ProductsBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsBarComponent,
      selectors: [["app-products-bar"]],
      inputs: {
        selected: "selected"
      },
      decls: 2,
      vars: 1,
      consts: [["id", "bar"], ["class", "bar-circle", 3, "selected", "top", 4, "ngFor", "ngForOf"], [1, "bar-circle"]],
      template: function ProductsBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsBarComponent_div_1_Template, 1, 4, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 7%;\n  height: min(40vh, 20rem);\n}\n\n#bar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 2px;\n  left: calc((1em - 2px) / 2);\n  background: linear-gradient(transparent, black 25%, black 75%, transparent);\n  height: 100%;\n  border-radius: 100px;\n}\n\n.bar-circle[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.25em solid var(--color-dark);\n  background-color: var(--color-light);\n  box-sizing: border-box;\n  border-radius: 50%;\n  width: 0.7em;\n  height: 0.7em;\n  left: 0.15em;\n}\n\n.bar-circle.selected[_ngcontent-%COMP%] {\n  width: 1em;\n  height: 1em;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbHVtaXhvci9kZXYvUG9ydGZvbGlvL3NyYy9hcHAvcHJvZHVjdHMtYmFyL3Byb2R1Y3RzLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMtYmFyL3Byb2R1Y3RzLWJhci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9lbHVtaXhvci9kZXYvUG9ydGZvbGlvL3NyYy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUNESjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsVUFKUTtFQUtSLDJCQUFBO0VBQ0EsMkVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBR0Esa0JBQUE7RUU1QkEsWUZTTztFRVJQLGFGUU87RUFxQlAsWUFBQTtBQ05KOztBRFFJO0VFaENBLFVGUUc7RUVQSCxXRk9HO0VBMEJDLE9BQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzLWJhci9wcm9kdWN0cy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9taXhpbnMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNyU7XHJcbiAgICBoZWlnaHQ6IG1pbig0MHZoLCAyMHJlbSk7XHJcbn1cclxuXHJcbiRzaXplOiAxZW07XHJcbiRzZWxlY3RlZDogLjdlbTtcclxuJGJhci13aWR0aDogMnB4O1xyXG5cclxuI2JhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogJGJhci13aWR0aDtcclxuICAgIGxlZnQ6IGNhbGMoKCN7JHNpemV9IC0gI3skYmFyLXdpZHRofSkgLyAyKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgYmxhY2sgMjUlLCBibGFjayA3NSUsIHRyYW5zcGFyZW50KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcblxyXG4uYmFyLWNpcmNsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IC4yNWVtIHNvbGlkIHZhcigtLWNvbG9yLWRhcmspO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBAaW5jbHVkZSBzcXVhcmUoJHNlbGVjdGVkKTtcclxuICAgIGxlZnQ6ICgkc2l6ZSAtICRzZWxlY3RlZCkgLyAyO1xyXG4gICAgXHJcbiAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBzcXVhcmUoJHNpemUpO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbn0iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNyU7XG4gIGhlaWdodDogbWluKDQwdmgsIDIwcmVtKTtcbn1cblxuI2JhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDJweDtcbiAgbGVmdDogY2FsYygoMWVtIC0gMnB4KSAvIDIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIGJsYWNrIDI1JSwgYmxhY2sgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5iYXItY2lyY2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDAuMjVlbSBzb2xpZCB2YXIoLS1jb2xvci1kYXJrKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbiAgbGVmdDogMC4xNWVtO1xufVxuLmJhci1jaXJjbGUuc2VsZWN0ZWQge1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgbGVmdDogMDtcbn0iLCJAbWl4aW4gc3F1YXJlKCRzaXplKSB7XHJcbiAgICB3aWR0aDogJHNpemU7XHJcbiAgICBoZWlnaHQ6ICRzaXplO1xyXG59XHJcblxyXG5AbWl4aW4gcGFkZGVkKCR0b3RhbC1oZWlnaHQsICR0b3RhbC13aWR0aCwgJHBhZGRpbmctdmVydGljYWwsICRwYWRkaW5nLWhvcml6b250YWwpIHtcclxuICAgIHdpZHRoOiBjYWxjKCN7JHRvdGFsLXdpZHRofSAtICN7JHBhZGRpbmctaG9yaXpvbnRhbH0gKiAyKTtcclxuICAgIGhlaWdodDogY2FsYygjeyR0b3RhbC1oZWlnaHR9IC0gI3skcGFkZGluZy12ZXJ0aWNhbH0gKiAyKTtcclxuXHJcbiAgICBwYWRkaW5nOiAkcGFkZGluZy12ZXJ0aWNhbCAkcGFkZGluZy1ob3Jpem9udGFsO1xyXG59XHJcblxyXG5AbWl4aW4gbWFnaW4tdmVydGljYWwoJG0pIHtcclxuICAgIG1hcmdpbi10b3A6ICRtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJG07XHJcbn1cclxuXHJcbkBtaXhpbiBtYWdpbi1ob3Jpem9udGFsKCRtKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogJG07XHJcbiAgICBtYXJnaW4tcmlnaHQ6ICRtO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products-bar',
          templateUrl: './products-bar.component.html',
          styleUrls: ['./products-bar.component.scss']
        }]
      }], function () {
        return [{
          type: _services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]
        }];
      }, {
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/responsive.directive.ts":
  /*!*****************************************!*\
    !*** ./src/app/responsive.directive.ts ***!
    \*****************************************/

  /*! exports provided: ResponsiveDirective */

  /***/
  function srcAppResponsiveDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponsiveDirective", function () {
      return ResponsiveDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResponsiveDirective = function ResponsiveDirective(el) {
      var _this3 = this;

      _classCallCheck(this, ResponsiveDirective);

      this.mobileClass = false;
      addEventListener('resize', function () {
        return _this3.mobileClass = screen.width < 500;
      });
      this.mobileClass = screen.width < 500;
    };

    ResponsiveDirective.ɵfac = function ResponsiveDirective_Factory(t) {
      return new (t || ResponsiveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ResponsiveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ResponsiveDirective,
      selectors: [["", "appResponsive", ""]],
      hostVars: 2,
      hostBindings: function ResponsiveDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mobile", ctx.mobileClass);
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResponsiveDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appResponsive]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        mobileClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.mobile']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/product.ts":
  /*!*************************************!*\
    !*** ./src/app/services/product.ts ***!
    \*************************************/

  /*! exports provided: Product */

  /***/
  function srcAppServicesProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });

    var Product = function Product(name, description, comment, googlePlayStoreUrl, appleAppStoreUrl, videoUrl, imagesUrls) {
      _classCallCheck(this, Product);

      this.name = name;
      this.description = description;
      this.comment = comment;
      this.googlePlayStoreUrl = googlePlayStoreUrl;
      this.appleAppStoreUrl = appleAppStoreUrl;
      this.videoUrl = videoUrl;
      this.imagesUrls = imagesUrls;
    };
    /***/

  },

  /***/
  "./src/app/services/products.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/products.service.ts ***!
    \**********************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppServicesProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./product */
    "./src/app/services/product.ts");

    var ProductsService = function ProductsService() {
      _classCallCheck(this, ProductsService);

      this.products = [new _product__WEBPACK_IMPORTED_MODULE_1__["Product"]("Color Match", "Mobile game where you can put your skills to the test! \nSimple yet challenging.", "My first proudly released product!", "https://play.google.com/store/apps/details?id=com.elumixor.ColorMatch", "https://apps.apple.com/cz/app/color-match-spin-tap-react/id1525018660", "rCxQmMovUAQ")];
    };

    ProductsService.ɵfac = function ProductsService_Factory(t) {
      return new (t || ProductsService)();
    };

    ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductsService,
      factory: ProductsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store-buttons/store-buttons.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/store-buttons/store-buttons.component.ts ***!
    \**********************************************************/

  /*! exports provided: StoreButtonsComponent */

  /***/
  function srcAppStoreButtonsStoreButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreButtonsComponent", function () {
      return StoreButtonsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StoreButtonsComponent =
    /*#__PURE__*/
    function () {
      function StoreButtonsComponent() {
        _classCallCheck(this, StoreButtonsComponent);
      }

      _createClass(StoreButtonsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StoreButtonsComponent;
    }();

    StoreButtonsComponent.ɵfac = function StoreButtonsComponent_Factory(t) {
      return new (t || StoreButtonsComponent)();
    };

    StoreButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StoreButtonsComponent,
      selectors: [["app-store-buttons"]],
      inputs: {
        googlePlayStore: "googlePlayStore",
        appleAppStore: "appleAppStore"
      },
      decls: 5,
      vars: 2,
      consts: [[3, "href"], ["src", "assets/images/app-store.svg", "alt", ""], ["id", "space"], ["src", "assets/images/google-play.svg", "alt", ""]],
      template: function StoreButtonsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.appleAppStore, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.googlePlayStore, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n\n#space[_ngcontent-%COMP%] {\n  width: 10px;\n}\n\na[_ngcontent-%COMP%] {\n  width: calc(50% - 5px);\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbHVtaXhvci9kZXYvUG9ydGZvbGlvL3NyYy9hcHAvc3RvcmUtYnV0dG9ucy9zdG9yZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yZS1idXR0b25zL3N0b3JlLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc3RvcmUtYnV0dG9ucy9zdG9yZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuI3NwYWNlIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDVweCk7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNzcGFjZSB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG5hIHtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gNXB4KTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-store-buttons',
          templateUrl: './store-buttons.component.html',
          styleUrls: ['./store-buttons.component.scss']
        }]
      }], function () {
        return [];
      }, {
        googlePlayStore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appleAppStore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/elumixor/dev/Portfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
webpackJsonp([1,5],{

/***/ 331:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 331;


/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(466);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/sandip/Work/web_projects/xWhizz/xWhizz-ui/src/main.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__(538),
            styles: [__webpack_require__(522)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
//# sourceMappingURL=/home/sandip/Work/web_projects/xWhizz/xWhizz-ui/src/about-us.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(539),
            styles: [__webpack_require__(523)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/sandip/Work/web_projects/xWhizz/xWhizz-ui/src/app.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_us_about_us_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cmp_services_custom_web_development_custom_web_development_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cmp_services_web_design_web_design_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cmp_services_testing_qa_testing_qa_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cmp_services_support_service_support_service_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cmp_services_internet_marketing_internet_marketing_component__ = __webpack_require__(461);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_7__about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: 'services', children: [
            { path: 'custom_web_development', component: __WEBPACK_IMPORTED_MODULE_8__cmp_services_custom_web_development_custom_web_development_component__["a" /* CustomWebDevelopmentComponent */] },
            { path: 'web_design', component: __WEBPACK_IMPORTED_MODULE_9__cmp_services_web_design_web_design_component__["a" /* WebDesignComponent */] },
            { path: 'testing_qa', component: __WEBPACK_IMPORTED_MODULE_10__cmp_services_testing_qa_testing_qa_component__["a" /* TestingQaComponent */] },
            { path: 'support_service', component: __WEBPACK_IMPORTED_MODULE_11__cmp_services_support_service_support_service_component__["a" /* SupportServiceComponent */] },
            { path: 'internet_marketing', component: __WEBPACK_IMPORTED_MODULE_12__cmp_services_internet_marketing_internet_marketing_component__["a" /* InternetMarketingComponent */] }
        ] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__cmp_services_custom_web_development_custom_web_development_component__["a" /* CustomWebDevelopmentComponent */],
                __WEBPACK_IMPORTED_MODULE_9__cmp_services_web_design_web_design_component__["a" /* WebDesignComponent */],
                __WEBPACK_IMPORTED_MODULE_10__cmp_services_testing_qa_testing_qa_component__["a" /* TestingQaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__cmp_services_support_service_support_service_component__["a" /* SupportServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_12__cmp_services_internet_marketing_internet_marketing_component__["a" /* InternetMarketingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/sandip/Work/web_projects/xWhizz/xWhizz-ui/src/app.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomWebDevelopmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomWebDevelopmentComponent = (function () {
    function CustomWebDevelopmentComponent() {
    }
    CustomWebDevelopmentComponent.prototype.ngOnInit = function () {
    };
    CustomWebDevelopmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-custom-web-development',
            template: __webpack_require__(540),
            styles: [__webpack_require__(524)]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomWebDevelopmentComponent);
    return CustomWebDevelopmentComponent;
}());
//# sourceMappingURL=/home/sandip/Work/web_projects/xWhizz/xWhizz-ui/src/custom-web-development.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternetMarketingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InternetMarketingComponent = (function () {
    function InternetMarketingComponent() {
    }
    InternetMarketingComponent.prototype.ngOnInit = function () {
    };
    InternetMarketingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-internet-marketing',
            template: __webpack_require__(541),
            styles: [__webpack_require__(525)]
        }), 
        __metadata('design:paramtypes', [])
    ], InternetMarketingComponent);
    return InternetMarketingComponent;
}());
//# sourceMappingURL=/home/sandip/Work/web_projects/xWhizz/xWhizz-ui/src/internet-marketing.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportServiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupportServiceComponent = (function () {
    function SupportServiceComponent() {
    }
    SupportServiceComponent.prototype.ngOnInit = function () {
    };
    SupportServiceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-support-service',
            template: __webpack_require__(542),
            styles: [__webpack_require__(526)]
        }), 
        __metadata('design:paramtypes', [])
    ], SupportServiceComponent);
    return SupportServiceComponent;
}());
//# sourceMappingURL=/home/sandip/Work/web_projects/xWhizz/xWhizz-ui/src/support-service.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingQaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestingQaComponent = (function () {
    function TestingQaComponent() {
    }
    TestingQaComponent.prototype.ngOnInit = function () {
    };
    TestingQaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-testing-qa',
            template: __webpack_require__(543),
            styles: [__webpack_require__(527)]
        }), 
        __metadata('design:paramtypes', [])
    ], TestingQaComponent);
    return TestingQaComponent;
}());
//# sourceMappingURL=/home/sandip/Work/web_projects/xWhizz/xWhizz-ui/src/testing-qa.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebDesignComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebDesignComponent = (function () {
    function WebDesignComponent() {
    }
    WebDesignComponent.prototype.ngOnInit = function () {
    };
    WebDesignComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-web-design',
            template: __webpack_require__(544),
            styles: [__webpack_require__(528)]
        }), 
        __metadata('design:paramtypes', [])
    ], WebDesignComponent);
    return WebDesignComponent;
}());
//# sourceMappingURL=/home/sandip/Work/web_projects/xWhizz/xWhizz-ui/src/web-design.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__(545),
            styles: [__webpack_require__(529)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomePageComponent);
    return HomePageComponent;
}());
//# sourceMappingURL=/home/sandip/Work/web_projects/xWhizz/xWhizz-ui/src/home-page.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/sandip/Work/web_projects/xWhizz/xWhizz-ui/src/environment.js.map

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 2rem;\n}\n\n.card-extra {\n  text-align: center;\n  padding-top: 5px;\n}\n\n\n/* GLOBAL STYLES\n-------------------------------------------------- */\n/* Padding below the footer and lighter body text */\n/* GLOBAL STYLES\n-------------------------------------------------- */\n/* Padding below the footer and lighter body text */\n\nbody {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  color: #5a5a5a;\n}\n\n.jumbotron {\n    text-align: center;\n}\n\n\n/* Featurettes\n------------------------- */\n\n.featurette-divider {\n  margin: 5rem 0; /* Space out the Bootstrap <hr> more */\n}\n\n/* Thin out the marketing headings */\n.featurette-heading {\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -.05rem;\n}\n\n\n/* RESPONSIVE CSS\n-------------------------------------------------- */\n\n@media (min-width: 40em) {\n  /* Bump up size of carousel content */\n  .carousel-caption p {\n    margin-bottom: 1.25rem;\n    font-size: 1.25rem;\n    line-height: 1.4;\n  }\n\n  .featurette-heading {\n    font-size: 50px;\n  }\n}\n\n@media (min-width: 62em) {\n  .featurette-heading {\n    margin-top: 7rem;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".carousel {\n    margin-bottom: 0rem;\n}\n\n.jumbotron {\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".carousel {\n    margin-bottom: 0rem;\n}\n\n.jumbotron {\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".carousel {\n    margin-bottom: 0rem;\n}\n\n.jumbotron {\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".carousel {\n    margin-bottom: 0rem;\n}\n\n.jumbotron {\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".carousel {\n    margin-bottom: 0rem;\n}\n\n.jumbotron {\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<p>\n  about-us works!\n</p>\n"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">xWhizz Technology</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/about-us\" routerLinkActive=\"active\">About us</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"services\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Services</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"services\">\n          <a class=\"dropdown-item\" routerLink=\"services/custom_web_development\" routerLinkActive=\"active\">Custom Web Development</a>\n          <a class=\"dropdown-item\" routerLink=\"services/internet_marketing\" routerLinkActive=\"active\">Internet marketing</a>\n          <a class=\"dropdown-item\" routerLink=\"services/web_design\" routerLinkActive=\"active\">Web Design</a>\n          <a class=\"dropdown-item\" routerLink=\"services/testing_qa\" routerLinkActive=\"active\">Testing & QA</a>\n          <a class=\"dropdown-item\" routerLink=\"services/support_service\" routerLinkActive=\"active\">Support Services</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Careers</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Contact</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Blog</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n<div>\n  <router-outlet></router-outlet>\n</div>\n\n<div class=\"jumbotron\">\n  <h1>Axe and Hammer we use</h1>\n  <div class=\"et_pb_module et-waypoint et_pb_image et_pb_animation_left et_pb_image_0 et_always_center_on_mobile et-animated\">\n    <img src=\"assets/images/tools-and-technologies-we-use.png\" alt=\"tools and technologies we use to build websites\" width=\"1080\" height=\"39\">\n  </div>\n</div>\n\n<div class=\"container marketing\">\n  <!-- FOOTER -->\n  <footer>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <h3>About XWhizz</h3>\n        <p class=\"lead\">\n          XWhizz is a technology consulting organization specializing in outsourced product engineering services. Our solutions are focused on modern technologies.\n        </p>\n      </div>\n      <div class=\"col-md-3\">\n        <h3>Services</h3>\n        <ul class=\"list-unstyled\">\n          <li>Custom Web Development</li>\n          <li>Internet marketing</li>\n          <li>Web Design</li>\n          <li>Testing & QA</li>\n          <li>Support Services</li>\n        </ul>\n      </div>\n      <div class=\"col-md-4\">\n\n      </div>\n    </div>\n    <p class=\"float-right\"><a href=\"#\">Back to top</a></p>\n    <p>&copy; 2017 xWhizz, Inc. &middot; <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a></p>\n  </footer>\n</div>\n"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <img class=\"first-slide\" src=\"assets/images/banner-web-development.png\" alt=\"First slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block text-left\">\n          <!--<h1>Example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>-->\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"jumbotron\">\n  <h1>Custom Web Development</h1>\n  <p class=\"lead\">Whether revenue driving online business or personal web portal, the team of expert programmers code </p>\n  <p class=\"lead\">websites in the open source environment that is easily interpreted by intended audience.</p>\n</div>\n\n<!-- Marketing messaging and featurettes\n    ================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<div class=\"container marketing\">\n  <!-- Three columns of text below the carousel -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/coding.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Custom PHP Web Development</h2>\n      <p>We deliver responsive and custom php solutions as per your unique needs that deliver the mark of excellence in the web industry.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/ecommerce.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>E-commerce Solutions</h2>\n      <p>We build e-commerce webstores that make buying process as easy and enjoyable as possible for your customers. Our e-commerce solutions assure to generate the utmost outcomes.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/cms.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>CMS Customization </h2>\n      <p>With CMS we specialize in developing highly stable and content rich website to match trending aspects. We customize open source CMS applications where you have superior control over the content of your website.</p>\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n</div>\n"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <img class=\"first-slide\" src=\"assets/images/banner-seo.png\" alt=\"First slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block text-left\">\n          <!--<h1>Example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>-->\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"jumbotron\">\n  <h1>Internet Marketing</h1>\n  <p class=\"lead\">Refers to advertising/marketing. We lead you to Top and make you Visible, you gain the Traffic and Convert to customers.</p>\n</div>\n\n<!-- Marketing messaging and featurettes\n    ================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<div class=\"container marketing\">\n  <!-- Three columns of text below the carousel -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/seo.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>SEO Internet Marketing Services</h2>\n      <p>We plan and cater white-hat SEO techniques to optmize your online presence on the web and turn visitors to customers.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/optimization.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Social Media Optimization</h2>\n      <p>We socialize your visibility on different social platforms and help build awareness of your brand and its product/services.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/ppc.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Pay Per Click Advertising</h2>\n      <p>We help you in getting your PPC campaign cost effective which in turn gives you maximum clicks and expected results.</p>\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n</div>\n"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <img class=\"first-slide\" src=\"assets/images/banner-web-design.png\" alt=\"First slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block text-left\">\n          <!--<h1>Example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>-->\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"jumbotron\">\n  <h1>Custom Web Development</h1>\n  <p class=\"lead\">Whether revenue driving online business or personal web portal, the team of expert programmers code </p>\n  <p class=\"lead\">websites in the open source environment that is easily interpreted by intended audience.</p>\n</div>\n\n<!-- Marketing messaging and featurettes\n    ================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<div class=\"container marketing\">\n  <!-- Three columns of text below the carousel -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/software-architecture.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Custom PHP Web Development</h2>\n      <p>We deliver responsive and custom php solutions as per your unique needs that deliver the mark of excellence in the web industry.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/ux.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>E-commerce Solutions</h2>\n      <p>We build e-commerce webstores that make buying process as easy and enjoyable as possible for your customers. Our e-commerce solutions assure to generate the utmost outcomes.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/qa.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>CMS Customization </h2>\n      <p>With CMS we specialize in developing highly stable and content rich website to match trending aspects. We customize open source CMS applications where you have superior control over the content of your website.</p>\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n</div>\n"

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <img class=\"first-slide\" src=\"assets/images/banner-web-design.png\" alt=\"First slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block text-left\">\n          <!--<h1>Example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>-->\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"jumbotron\">\n  <h1>Testing & QA</h1>\n  <p class=\"lead\">Whether revenue driving online business or personal web portal, the team of expert programmers code </p>\n  <p class=\"lead\">websites in the open source environment that is easily interpreted by intended audience.</p>\n</div>\n\n<!-- Marketing messaging and featurettes\n    ================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<div class=\"container marketing\">\n  <!-- Three columns of text below the carousel -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/software-architecture.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Custom PHP Web Development</h2>\n      <p>We deliver responsive and custom php solutions as per your unique needs that deliver the mark of excellence in the web industry.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/ux.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>E-commerce Solutions</h2>\n      <p>We build e-commerce webstores that make buying process as easy and enjoyable as possible for your customers. Our e-commerce solutions assure to generate the utmost outcomes.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/qa.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>CMS Customization </h2>\n      <p>With CMS we specialize in developing highly stable and content rich website to match trending aspects. We customize open source CMS applications where you have superior control over the content of your website.</p>\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n</div>\n"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <img class=\"first-slide\" src=\"assets/images/banner-web-design.png\" alt=\"First slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block text-left\">\n          <!--<h1>Example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>-->\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"jumbotron\">\n  <h1>Web Design</h1>\n  <p class=\"lead\">Great web design without functionality is like a sports car with no engine” We are capable of providing captivating design solutions and hold expertise in delivering a flawless and memorable user experience across multiple devices.</p>\n</div>\n\n<!-- Marketing messaging and featurettes\n    ================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<div class=\"container marketing\">\n  <!-- Three columns of text below the carousel -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/webd.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Web Design</h2>\n      <p>We design by blending innovation, user-friendly, responsive and customized as per the requirements of the clients. We craft affordable web design services solutions that are not platform specific and attracts targeted users.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/UX-Design-.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Graphic Design</h2>\n      <p>Visually stunning and good appearance matters a lot for engaging your customers thus, we deliver graphic design services that increase conversions and grow your business.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/p-to-html.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>PSD to HTML</h2>\n      <p>We convert the Photoshop designs to responsive HTML codes according to the clients requirements and assure to reach to wider audience</p>\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n</div>\n"

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <img class=\"first-slide\" src=\"assets/images/banner-web-design.png\" alt=\"First slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block text-left\">\n          <!--<h1>Example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>-->\n        </div>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"second-slide\" src=\"assets/images/ecommerce-development-banner.png\" alt=\"Second slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <!--<h1>Another example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Learn more</a></p>-->\n        </div>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"second-slide\" src=\"assets/images/banner-mobile-app.png\" alt=\"Third slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <!--<h1>Another example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Learn more</a></p>-->\n        </div>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"third-slide\" src=\"assets/images/logo-design-service-banner.png\" alt=\"Fourth slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block text-right\">\n          <!--<h1>One more for good measure.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Browse gallery</a></p>-->\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n<!-- Marketing messaging and featurettes\n    ================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<div class=\"container marketing\">\n  <!-- Three columns of text below the carousel -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/software-architecture.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Custom Web Development</h2>\n      <p class=\"lead\">Conversion of Ideas into Easy-to-use Solutions</p>\n      <p>We build websites with modern technologies and open source tools, that generates revenue and adhere to your needs.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/ux.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>UX Design</h2>\n      <p class=\"lead\">Inventive Design</p>\n      <p>xWhizz User Experience group provides a seamless experience through a full-fledged design methodology.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/qa.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Testing AND QA</h2>\n      <p class=\"lead\">Bug Free System</p>\n      <p>xWhizz brings in a mature testing practice that is responsible for the verification and validation of some of the most complex products code.</p>\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/product-engineering.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Web Design</h2>\n      <p class=\"lead\">Inventive Design</p>\n      <p>The visitor’s first impression to your website. A well executed website needs innovative designing with compelling UX and UI design.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/documentation.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Internet Marketing</h2>\n      <p class=\"lead\">Optimizing leads to success</p>\n      <p>To establish your presence, build visibility and generate sales for your business.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/documentation.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Support Service</h2>\n      <p class=\"lead\">24/7 Support</p>\n      <p>xWhizz Support Services: Bridging the gap between client and the end user by delivering efficient and cost-effective solutions.</p>\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n\n\n  <!-- START THE FEATURETTES -->\n  <hr class=\"featurette-divider\">\n\n  <div class=\"row featurette\">\n    <div class=\"col-md-7\">\n      <h2 class=\"featurette-heading\">We Serve What is Best for your Business. <span class=\"text-muted\">It'll increase your business.</span></h2>\n      <p class=\"lead\">We satisfy customers with top-notch quality work and result driven work approach. We make best efforts to satisfy our valuable clients which leads to have a long term relationship with them.</p>\n    </div>\n    <div class=\"col-md-5\">\n      <img class=\"featurette-image img-fluid mx-auto\" src=\"assets/images/strategic-management.jpg\" alt=\"Generic placeholder image\">\n    </div>\n  </div>\n\n  <hr class=\"featurette-divider\">\n\n  <div class=\"row featurette\">\n    <div class=\"col-md-7 push-md-5\">\n      <h2 class=\"featurette-heading\">Oh yeah, it's that good. <span class=\"text-muted\">See for yourself.</span></h2>\n      <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n    </div>\n    <div class=\"col-md-5 pull-md-7\">\n      <img class=\"featurette-image img-fluid mx-auto\" src=\"assets/images/strategic-management.jpg\" alt=\"Generic placeholder image\">\n    </div>\n  </div>\n\n  <hr class=\"featurette-divider\">\n\n  <div class=\"row featurette\">\n    <div class=\"col-md-7\">\n      <h2 class=\"featurette-heading\">And lastly, this one. <span class=\"text-muted\">Checkmate.</span></h2>\n      <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n    </div>\n    <div class=\"col-md-5\">\n      <img class=\"featurette-image img-fluid mx-auto\" src=\"assets/images/strategic-management.jpg\" alt=\"Generic placeholder image\">\n    </div>\n  </div>\n\n  <hr class=\"featurette-divider\">\n  <!-- /END THE FEATURETTES -->\n</div>\n"

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(332);


/***/ })

},[565]);
//# sourceMappingURL=main.bundle.js.map
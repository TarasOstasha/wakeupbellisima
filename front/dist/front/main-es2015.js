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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ "./src/app/pages/portfolio/portfolio.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/book-appointment/book-appointment.component */ "./src/app/pages/book-appointment/book-appointment.component.ts");
/* harmony import */ var _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/auth/auth.component */ "./src/app/pages/auth/auth.component.ts");
/* harmony import */ var _pages_redirector_redirector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/redirector/redirector.component */ "./src/app/pages/redirector/redirector.component.ts");


//components









const routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'services', component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesComponent"] },
    { path: 'portfolio', component: _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"] },
    { path: 'about-us', component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"] },
    { path: 'book-appointment', component: _pages_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_6__["BookAppointmentComponent"] },
    { path: 'auth', component: _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"] },
    { path: 'redirector', component: _pages_redirector_redirector_component__WEBPACK_IMPORTED_MODULE_8__["RedirectorComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'front';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _parts_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/header/header.component */ "./src/app/parts/header/header.component.ts");
/* harmony import */ var _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/footer/footer.component */ "./src/app/parts/footer/footer.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _parts_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/home/home.component */ "./src/app/parts/home/home.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ "./src/app/pages/portfolio/portfolio.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/book-appointment/book-appointment.component */ "./src/app/pages/book-appointment/book-appointment.component.ts");
/* harmony import */ var _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/auth/auth.component */ "./src/app/pages/auth/auth.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _parts_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parts/form-validator/form-validator.component */ "./src/app/parts/form-validator/form-validator.component.ts");
/* harmony import */ var _pages_redirector_redirector_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/redirector/redirector.component */ "./src/app/pages/redirector/redirector.component.ts");
/* harmony import */ var _parts_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./parts/carousel/carousel.component */ "./src/app/parts/carousel/carousel.component.ts");
/* harmony import */ var _parts_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./parts/star-rating/star-rating.component */ "./src/app/parts/star-rating/star-rating.component.ts");
















// services








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_17__["StorageService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"].forRoot({
                //apiKey: 'AIzaSyCozMa2qbqp2x59SjJvzIOKGXlXQNtQXZU'
                apiKey: 'AIzaSyDD3OIX2BqH8WjNMj2EPQQpAqAu4SN2848'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _parts_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
        _parts_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _pages_services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
        _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"],
        _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__["AboutUsComponent"],
        _pages_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_13__["BookAppointmentComponent"],
        _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_14__["AuthComponent"],
        _parts_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_18__["FormValidatorComponent"],
        _pages_redirector_redirector_component__WEBPACK_IMPORTED_MODULE_19__["RedirectorComponent"],
        _parts_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__["CarouselComponent"],
        _parts_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_21__["StarRatingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _parts_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _pages_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                    _parts_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _pages_services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
                    _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"],
                    _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__["AboutUsComponent"],
                    _pages_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_13__["BookAppointmentComponent"],
                    _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_14__["AuthComponent"],
                    _parts_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_18__["FormValidatorComponent"],
                    _pages_redirector_redirector_component__WEBPACK_IMPORTED_MODULE_19__["RedirectorComponent"],
                    _parts_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__["CarouselComponent"],
                    _parts_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_21__["StarRatingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"].forRoot({
                        //apiKey: 'AIzaSyCozMa2qbqp2x59SjJvzIOKGXlXQNtQXZU'
                        apiKey: 'AIzaSyDD3OIX2BqH8WjNMj2EPQQpAqAu4SN2848'
                    })
                ],
                providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_17__["StorageService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/appState.ts":
/*!*****************************!*\
  !*** ./src/app/appState.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const appState = {
    hostName: (location.hostname == 'localhost') ? 'http://localhost/' : '/',
    //header
    header: {
        //isLogged: false,
        user: {
            userName: '',
            _id: 'unlogged',
            role: 'user',
            isLogged: false
        },
    },
    portfolioImg: [],
    reviewMsg: [],
    //: [4.5],
    // for auth component
    state_form: 'login',
    error: {
        dublicate_user: false
    },
    //currentNewProductImg: 'assets/img/sws1.png',
    previews: [
        {
            reader: {
                result: "assets/400x300.png"
            }
        }
    ],
};
/* harmony default export */ __webpack_exports__["default"] = (appState);


/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _parts_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../parts/header/header.component */ "./src/app/parts/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parts/footer/footer.component */ "./src/app/parts/footer/footer.component.ts");





function AboutUsComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const certificate_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", i_r2 == ctx_r0.currentSlide ? ctx_r0.slide : ctx_r0.nextSlide, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", certificate_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class AboutUsComponent {
    constructor() {
        this.certificates = [
            { url: '../../../assets/imgs/certificate1.jpg' },
            { url: '../../../assets/imgs/certificate2.jpg' },
            { url: '../../../assets/imgs/certificate3.jpg' },
            { url: '../../../assets/imgs/certificate4.jpg' },
            { url: '../../../assets/imgs/certificate5.jpg' },
            { url: '../../../assets/imgs/certificate6.jpg' },
            { url: '../../../assets/imgs/certificate7.jpg' },
            { url: '../../../assets/imgs/certificate8.jpg' },
        ];
        this.currentSlide = 0;
        this.nextSlider = null;
        this.slide = 0;
        this.nextSlide = 0;
        this.counter = 1;
    }
    ngOnInit() {
        this.autoStart();
    }
    move(event) {
        this.slideWidth = document.querySelector('.slides');
        if (event.target.classList[2] == 'left') {
            //const direction = event.target.classList[2];
            //console.log(direction);
            this.counter--;
            const lastImg = this.certificates.length - 1;
            console.log(this.counter, 'counter');
            this.slide = this.slide + this.sliderWidth();
            //if (this.counter <= 0) { 
            if (this.counter <= 1) {
                this.counter = lastImg;
                return this.slide = -this.sliderWidth() * (lastImg - 2);
            }
        }
        if (event.target.classList[2] == 'right') {
            //console.log('right');
            this.counter++;
            const lastImg = this.certificates.length - 1;
            this.nextSlide = this.sliderWidth();
            this.nextSlider = 1;
            this.nextSlide = 0;
            this.slide = this.slide - this.sliderWidth();
            if (this.counter >= lastImg) {
                //console.log(this.slide, 'if else move right', this.counter, 'if else move right')
                this.counter = 1;
                this.slide = 0;
            }
        }
    }
    autoStart() {
        setInterval(() => {
            this.slideWidth = document.querySelector('.slides');
            this.counter++;
            const lastImg = this.certificates.length - 1;
            this.nextSlide = this.sliderWidth();
            this.nextSlider = 1;
            this.nextSlide = 0;
            this.slide = this.slide - this.sliderWidth();
            if (this.counter >= lastImg) {
                //console.log(this.slide, 'if else move right', this.counter, 'if else move right')
                this.counter = 1;
                this.slide = 0;
            }
        }, 3000);
    }
    // get dynamically width of <li> 
    sliderWidth() {
        return this.slideWidth.offsetWidth;
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 37, vars: 1, consts: [[1, "wrapper"], [1, "container"], [1, "row"], [1, "col-md-7"], [1, "personal-info"], [1, "col-md-5"], [1, "photo-personal"], ["src", "../../../assets/imgs/Natalya.jpg", "alt", "Natalya"], ["src", "../../../assets/imgs/AAM-Logo-HP.png", 1, "logoTeach"], [1, "col-md-12"], [1, "row_certificate"], [1, "slider_sertificate"], [1, "fa", "fa-arrow-circle-left", "left", 3, "click"], ["class", "slides col-md-4", 3, "margin-left", 4, "ngFor", "ngForOf"], [1, "fa", "fa-arrow-circle-right", "right", 3, "click"], [1, "slides", "col-md-4"], ["alt", "certificate", 3, "src"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ">\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Nataliya is a perfectionist by nature. She is persistent and hard working. She offers each client a high level of professional skill perfected by her artistic and visual instinct. She pays particular attention to each client\u2019s unique features and specific needs based on her experience as well as her natural aesthetic ability. Nataliya follows strict standards of safety in her work and the usage of specialized equipment, the disposal of probes, and the handling of pigmentation. She implements the same medical sterilization standards and procedures as physicians. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Languages spoken: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "english, polish, ukrainian, russian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Her education includes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " PERMANENT COSMETIC CERTIFICATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " DAAM PIGMINTATION DIPLOMA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " PHI REMOVAV CERTIFICATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Nataliya Hocko");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutUsComponent_Template_i_click_33_listener($event) { return ctx.move($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AboutUsComponent_li_34_Template, 2, 3, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutUsComponent_Template_i_click_35_listener($event) { return ctx.move($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certificates);
    } }, directives: [_parts_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 75px 0;\n}\n.wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Architects Daughter\", cursive;\n  margin-bottom: 24px;\n}\n.wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Architects Daughter\", cursive;\n}\n.container-abouteUs[_ngcontent-%COMP%] {\n  margin: 25px 0;\n}\n.photo-personal[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.personal-info[_ngcontent-%COMP%] {\n  font-family: \"Architects Daughter\";\n  font-size: 20px;\n  text-align: justify;\n}\n.logoTeach[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20%;\n  top: -7%;\n}\n.slider_sertificate[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n}\n.slider_sertificate[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.row_certificate[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n.left[_ngcontent-%COMP%] {\n  font-size: 25px;\n  position: absolute;\n  cursor: pointer;\n  z-index: 5;\n}\n.right[_ngcontent-%COMP%] {\n  font-size: 25px;\n  position: absolute;\n  right: 0;\n  cursor: pointer;\n  z-index: 5;\n}\n.slides[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255am9zcy9Eb2N1bWVudHMvd2FrZXVwYmVsbGlzaW1hL2Zyb250L3NyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3Rvbnlqb3NzL0RvY3VtZW50cy93YWtldXBiZWxsaXNpbWEvZnJvbnQvc3JjL2Fzc2V0cy9mb250cy9mb250Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNBSjtBREZBO0VBSVEsa0JBQUE7RUVIRCwyQ0FBQTtFRktDLG1CQUFBO0FDQ1I7QURQQTtFQVNRLGtCQUFBO0VFUkQsMkNBQUE7QURVUDtBREVBO0VBQ0ksY0FBQTtBQ0FKO0FERUU7RUFDRSxrQkFBQTtBQ0FKO0FERUU7RUVqQk8sa0NBQUE7RUFRTCxlQUFBO0VBQ0EsbUJBQUE7QURXSjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0RKO0FESUU7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDRk47QURKRTtFQVFRLHFCQUFBO0FDRFY7QURPRTtFQUNJLGdCQUFBO0FDTE47QURPRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDTEo7QURPRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0xKO0FEUUU7RUFDRSxrQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2ZvbnQubGVzcycpO1xuLndyYXBwZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogNzVweCAwO1xuICAgIGgxIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAuaDEoQGgxKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG4gICAgaDMge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5oMShAaDEpO1xuICAgIH1cbn1cbi5jb250YWluZXItYWJvdXRlVXMge1xuICAgIG1hcmdpbjogMjVweCAwO1xuICB9XG4gIC5waG90by1wZXJzb25hbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5wZXJzb25hbC1pbmZvIHtcbiAgICAvL2ZvbnQtZmFtaWx5OiBAbWFpbkZvbnQ7XG4gICAgLy9mb250LXNpemU6IDE3cHg7XG4gICAgLmluZm9UZXh0KEBpbmZvKVxuXG4gIH1cbiAgLmxvZ29UZWFjaCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMCU7XG4gICAgdG9wOiAtNyU7XG4gIH1cbiAgXG4gIC5zbGlkZXJfc2VydGlmaWNhdGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgLy9wYWRkaW5nOiAwIDU1cHg7XG4gICAgICB9XG4gIH1cbiAgXG4gIFxuICAucm93X2NlcnRpZmljYXRlIHtcbiAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gIH1cbiAgLmxlZnQge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbiAgLnJpZ2h0IHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiA1O1xuICB9XG5cbiAgLnNsaWRlcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9IiwiLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA3NXB4IDA7XG59XG4ud3JhcHBlciBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQXJjaGl0ZWN0cyBEYXVnaHRlclwiLCBjdXJzaXZlO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLndyYXBwZXIgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkFyY2hpdGVjdHMgRGF1Z2h0ZXJcIiwgY3Vyc2l2ZTtcbn1cbi5jb250YWluZXItYWJvdXRlVXMge1xuICBtYXJnaW46IDI1cHggMDtcbn1cbi5waG90by1wZXJzb25hbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wZXJzb25hbC1pbmZvIHtcbiAgZm9udC1mYW1pbHk6IFwiQXJjaGl0ZWN0cyBEYXVnaHRlclwiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4ubG9nb1RlYWNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjAlO1xuICB0b3A6IC03JTtcbn1cbi5zbGlkZXJfc2VydGlmaWNhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zbGlkZXJfc2VydGlmaWNhdGUgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4ucm93X2NlcnRpZmljYXRlIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cbi5sZWZ0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogNTtcbn1cbi5yaWdodCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA1O1xufVxuLnNsaWRlcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiIsIlxuXG5AaDE6IHsgZm9udC1mYW1pbHk6XCJBcmNoaXRlY3RzIERhdWdodGVyXCIsIGN1cnNpdmUgfTtcbkBpbmZvOiB7IGZvbnQtZmFtaWx5OlwiQXJjaGl0ZWN0cyBEYXVnaHRlclwiIH07XG5cbi5oMShAaDEpIHtcbiAgICBAaDEoKTtcbn1cblxuLmluZm9UZXh0KEBpbmZvKSB7XG4gICAgQGluZm8oKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/auth/auth.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/auth/auth.component.ts ***!
  \**********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _appState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appState */ "./src/app/appState.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _parts_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../parts/header/header.component */ "./src/app/parts/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../parts/footer/footer.component */ "./src/app/parts/footer/footer.component.ts");
/* harmony import */ var _parts_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../parts/form-validator/form-validator.component */ "./src/app/parts/form-validator/form-validator.component.ts");













function AuthComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-form-validator", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-form-validator", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_form_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.singIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_form_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.appState.state_form = "register"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Create Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.authForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx_r0.authForm.get("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx_r0.authForm.get("password"));
} }
function AuthComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-form-validator", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-form-validator", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-form-validator", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_form_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.signUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Create Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_form_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.appState.state_form = "login"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Back to Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.authForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx_r1.authForm.get("userName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx_r1.authForm.get("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx_r1.authForm.get("password"));
} }
class AuthComponent {
    constructor(api, formBuilder, router, storage) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.router = router;
        this.storage = storage;
        this.user = {
            userName: '',
            password: '',
            email: '',
            role: 'Guest',
        };
        this.appState = _appState__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.authForm = this.formBuilder.group({
            'email': [this.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), this.mailValidator()]],
            'userName': [this.user.userName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            'password': [this.user.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            'role': [this.user.role, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    //check email
    mailValidator() {
        const error_message = { mailValidator: { msg: `Invalid email` } };
        const pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return (control) => {
            const isValid = pattern.test(control.value);
            return isValid ? null : error_message;
        };
    }
    ngOnInit() {
    }
    signUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // create via data binding NgModel - another vay -> event.target.name.value
                const userData = {
                    name: this.authForm.controls.userName.value,
                    email: this.authForm.controls.email.value,
                    password: this.authForm.controls.password.value
                };
                //console.log(userData, 'user data')
                const fromServer = yield this.api.register(userData);
                if (fromServer.ok)
                    this.router.navigateByUrl('/redirector');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    singIn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                console.log(this.authForm);
                const userData = {
                    email: this.authForm.controls.email.value,
                    password: this.authForm.controls.password.value
                };
                const fromServer = yield this.api.login(userData);
                if (fromServer.ok)
                    this.router.navigateByUrl('/redirector');
                this.appState.header.user = fromServer.user;
                this.storage.setItem('user', this.appState.header.user);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 5, vars: 3, consts: [[1, "auth-block", 3, "ngSwitch"], ["class", "box", 3, "formGroup", 4, "ngSwitchCase"], [1, "box", 3, "formGroup"], ["type", "text", "placeholder", "Email", "name", "email", "formControlName", "email", 1, "form-control"], [3, "it"], ["type", "password", "placeholder", "Password", "name", "password", "formControlName", "password", 1, "form-control"], [3, "click"], ["type", "text", "placeholder", "Username", "name", "username", "formControlName", "userName", 1, "form-control"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AuthComponent_form_2_Template, 11, 3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AuthComponent_form_3_Template, 13, 4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.appState.state_form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "register");
    } }, directives: [_parts_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _parts_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_10__["FormValidatorComponent"]], styles: [".auth-block[_ngcontent-%COMP%] {\n  background: #132226;\n  height: 800px;\n  display: flex;\n  align-items: center;\n}\n.box[_ngcontent-%COMP%] {\n  width: 500px;\n  padding: 40px;\n  margin: 0 auto;\n  background: #040C0E;\n  text-align: center;\n}\n.box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  display: block;\n  margin: 20px auto;\n  text-align: center;\n  border: 2px solid #BE9063;\n  padding: 14px 40px;\n  color: white;\n  outline: none;\n  border-radius: 10px;\n  transition: 0.3;\n  cursor: pointer;\n  width: 100%;\n  max-width: 47%;\n}\n.box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #BE9063;\n}\n.box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #BE9063;\n  text-transform: uppercase;\n}\na[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n  padding: 10px;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #BE9063;\n}\n.box[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  display: block;\n  margin: 20px auto;\n  text-align: center;\n  border: 2px solid #525B56;\n  padding: 14px 10px;\n  width: 200px;\n  color: white;\n  outline: none;\n  border-radius: 10px ;\n  transition: 0.25s;\n}\n.box[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus {\n  width: 280px;\n  border-color: #BE9063;\n}\n.box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  display: block;\n  margin: 20px auto;\n  text-align: center;\n  border: 2px solid #BE9063;\n  padding: 14px 40px;\n  color: white;\n  outline: none;\n  border-radius: 10px ;\n  transition: 0.3;\n  cursor: pointer;\n}\n.box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\n  background: #BE9063;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255am9zcy9Eb2N1bWVudHMvd2FrZXVwYmVsbGlzaW1hL2Zyb250L3NyYy9hcHAvcGFnZXMvYXV0aC9hdXRoLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9hdXRoL2F1dGguY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNMSjtBRFFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBS0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1ZKO0FEQ0E7RUFXUSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ1RSO0FEZkE7RUEyQlEsbUJBQUE7QUNUUjtBRGFBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDWEo7QURjQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ1pKO0FEZUE7RUFDSSxjQUFBO0FDYko7QURnQkE7O0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ2JKO0FEZ0JBOztFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQ2JKO0FEaUJBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDZko7QURrQkE7RUFDSSxtQkFBQTtBQ2hCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvYXV0aC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGJvZHl7XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gICAgIHBhZGRpbmc6IDA7XG4vLyAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4vLyAgICAgYmFja2dyb3VuZDogIzEzMjIyNjtcbi8vIH1cbi5hdXRoLWJsb2NrIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTMyMjI2O1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm94e1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vdG9wOiA1MCU7XG4gICAgLy9sZWZ0OiA1MCU7XG4gICAgLy90cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjMDQwQzBFO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBidXR0b24ge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjQkU5MDYzO1xuICAgICAgICBwYWRkaW5nOiAxNHB4IDQwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDQ3JTtcbiAgICB9XG4gICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0JFOTA2MztcbiAgICB9XG59XG5cbi5ib3ggaDF7XG4gICAgY29sb3I6ICNCRTkwNjM7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuYXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbmE6aG92ZXJ7XG4gICAgY29sb3I6ICNCRTkwNjM7XG59XG5cbi5ib3ggaW5wdXRbdHlwZSA9IFwidGV4dFwiXSwuYm94IGlucHV0W3R5cGUgPSBcInBhc3N3b3JkXCJde1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTI1QjU2O1xuICAgIHBhZGRpbmc6IDE0cHggMTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCA7XG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XG59XG5cbi5ib3ggaW5wdXRbdHlwZSA9IFwidGV4dFwiXTpmb2N1cywuYm94IGlucHV0W3R5cGUgPSBcInBhc3N3b3JkXCJdOmZvY3Vze1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBib3JkZXItY29sb3I6ICNCRTkwNjM7XG5cbn1cblxuLmJveCBpbnB1dFt0eXBlID0gXCJzdWJtaXRcIl17XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNCRTkwNjM7XG4gICAgcGFkZGluZzogMTRweCA0MHB4OyBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDtcbiAgICB0cmFuc2l0aW9uOiAwLjMwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJveCBpbnB1dFt0eXBlID0gXCJzdWJtaXRcIl06aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogI0JFOTA2Mztcbn0iLCIuYXV0aC1ibG9jayB7XG4gIGJhY2tncm91bmQ6ICMxMzIyMjY7XG4gIGhlaWdodDogODAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm94IHtcbiAgd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nOiA0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogIzA0MEMwRTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJveCBidXR0b24ge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjQkU5MDYzO1xuICBwYWRkaW5nOiAxNHB4IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogMC4zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ3JTtcbn1cbi5ib3ggYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0JFOTA2Mztcbn1cbi5ib3ggaDEge1xuICBjb2xvcjogI0JFOTA2MztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogI0JFOTA2Mztcbn1cbi5ib3ggaW5wdXRbdHlwZT1cInRleHRcIl0sXG4uYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1MjVCNTY7XG4gIHBhZGRpbmc6IDE0cHggMTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggO1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbn1cbi5ib3ggaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXG4uYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyB7XG4gIHdpZHRoOiAyODBweDtcbiAgYm9yZGVyLWNvbG9yOiAjQkU5MDYzO1xufVxuLmJveCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgI0JFOTA2MztcbiAgcGFkZGluZzogMTRweCA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggO1xuICB0cmFuc2l0aW9uOiAwLjM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ib3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNCRTkwNjM7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.less']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/book-appointment/book-appointment.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/book-appointment/book-appointment.component.ts ***!
  \**********************************************************************/
/*! exports provided: BookAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookAppointmentComponent", function() { return BookAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _appState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../appState */ "./src/app/appState.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _parts_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../parts/header/header.component */ "./src/app/parts/header/header.component.ts");
/* harmony import */ var _parts_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../parts/form-validator/form-validator.component */ "./src/app/parts/form-validator/form-validator.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../parts/footer/footer.component */ "./src/app/parts/footer/footer.component.ts");












function BookAppointmentComponent_agm_marker_47_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "agm-marker", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("markerClick", function BookAppointmentComponent_agm_marker_47_Template_agm_marker_markerClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const m_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.clickedMarker(m_r1.label, i_r2); })("dragEnd", function BookAppointmentComponent_agm_marker_47_Template_agm_marker_dragEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const m_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.markerDragEnd(m_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "agm-info-window");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "InfoWindow content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", m_r1.lat)("longitude", m_r1.lng)("label", m_r1.label)("markerDraggable", m_r1.draggable);
} }
class BookAppointmentComponent {
    constructor(formBuilder, api) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.appState = _appState__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.mail = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
        //google maps//
        // latitude: 40.84004824998276; // Carlstadt
        // longitude: -74.0906907105334;
        // onChooseLocation(event) {
        //   this.latitude = event.coords.lat;
        //   this.longitude = event.coords.lng;
        //   console.log(event);
        // }
        ////////////
        // google maps zoom level
        this.zoom = 15;
        // initial center position for the map
        this.lat = 40.84004824998276;
        this.lng = -74.0906907105334;
        this.markers = [
            {
                lat: 40.84004824998276,
                lng: -74.0906907105334,
                label: 'Wake Up Bellisima',
                draggable: true
            },
        ];
        this.appState = _appState__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.contactsForm = this.formBuilder.group({
            'name': [this.mail.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            'email': [this.mail.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), this.mailValidator()]],
            'subject': [this.mail.subject, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(15)]],
            'message': [this.mail.message, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]],
        });
    }
    ngOnInit() {
        // SWAL !!!!!!
    }
    //check email
    mailValidator() {
        const error_message = { mailValidator: { msg: `Invalid email` } };
        const pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return (control) => {
            const isValid = pattern.test(control.value);
            return isValid ? null : error_message;
        };
    }
    sendContact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.contactsForm);
            const formData = Object.assign({}, this.contactsForm.value);
            console.log('Form Data', formData);
            try {
                console.log(this.contactsForm.status);
                if (this.contactsForm.status == "VALID") {
                    const contactsData = {
                        userId: this.appState.header.user._id,
                        name: this.contactsForm.controls.name.value,
                        email: this.contactsForm.controls.email.value,
                        subject: this.contactsForm.controls.subject.value,
                        message: this.contactsForm.controls.message.value
                    };
                    const fromServer = yield this.api.contactsMail(contactsData);
                    console.log(fromServer);
                    this.contactsForm.reset();
                    // sweet alert from https://lipis.github.io/bootstrap-sweetalert/
                    swal.fire({
                        icon: "success",
                        title: "success",
                        text: "Thanks For Request! We will contact you as soon as we can!",
                        type: "success"
                    });
                }
                else {
                    swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Please Fill Out The Form",
                        type: "warning"
                    });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // getter to start working our validators (from form builder component)
    get name() { return this.contactsForm.get('name'); }
    get email() { return this.contactsForm.get('email'); }
    get subject() { return this.contactsForm.get('subject'); }
    get message() { return this.contactsForm.get('message'); }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
    mapClicked($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    }
    markerDragEnd(m, $event) {
        console.log('dragEnd', m, $event);
    }
}
BookAppointmentComponent.ɵfac = function BookAppointmentComponent_Factory(t) { return new (t || BookAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
BookAppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BookAppointmentComponent, selectors: [["app-book-appointment"]], decls: 58, vars: 17, consts: [[1, "wrapper"], [1, "container"], [1, "mb-4"], [1, "h1-responsive", "font-weight-bold", "text-center", "my-4"], [1, "text-center", "w-responsive", "mx-auto", "mb-5"], [1, "row"], [1, "col-md-12"], ["id", "contact-form", "name", "contact-form", 3, "formGroup", "ngSubmit"], [1, "col-md-6"], [1, "md-form", "mb-0"], ["formControlName", "name", "type", "text", "id", "name", "name", "name", 1, "form-control"], ["for", "name", 1, ""], [3, "it"], ["formControlName", "email", "type", "text", "id", "email", "name", "email", 1, "form-control"], ["for", "email", 1, ""], ["formControlName", "subject", "type", "text", "id", "subject", "name", "subject", 1, "form-control"], ["for", "subject", 1, ""], [1, "md-form"], ["formControlName", "message", "type", "text", "id", "message", "name", "message", "rows", "2", 1, "form-control", "md-textarea"], ["for", "message"], ["type", "submit", 1, "btn", "btn-secondary"], [1, "status"], [1, "location"], [1, "fa", "fa-download"], ["id", "map"], [3, "latitude", "longitude", "zoom", "disableDefaultUI", "zoomControl", "mapClick"], [3, "latitude", "longitude", "label", "markerDraggable", "markerClick", "dragEnd", 4, "ngFor", "ngForOf"], [3, "latitude", "longitude", "radius", "fillColor", "circleDraggable", "editable"], [1, "location-info"], ["href", "mailto:nataliya.hocko@gmail.com"], [3, "latitude", "longitude", "label", "markerDraggable", "markerClick", "dragEnd"]], template: function BookAppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function BookAppointmentComponent_Template_form_ngSubmit_10_listener() { return ctx.sendContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-form-validator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "app-form-validator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "app-form-validator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Your message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "app-form-validator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " You can find us here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "agm-map", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mapClick", function BookAppointmentComponent_Template_agm_map_mapClick_46_listener($event) { return ctx.mapClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, BookAppointmentComponent_agm_marker_47_Template, 4, 4, "agm-marker", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "agm-circle", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " You may use the contact form, by phone at 973-330-2608 mail: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "nataliya.hocko@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Wake Up Bellisima");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " 549 2nd Street, Carlstadt, NJ 07072 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.contactsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("disableDefaultUI", false)("zoomControl", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx.lat + 0.3)("longitude", ctx.lng)("radius", 5000)("fillColor", "red")("circleDraggable", true)("editable", true);
    } }, directives: [_parts_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _parts_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_6__["FormValidatorComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCircle"], _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmInfoWindow"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin: 100px 0;\n}\n.mb-4[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Architects Daughter\", cursive;\n}\n.mb-4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Architects Daughter\";\n  font-size: 20px;\n  text-align: justify;\n}\nlabel[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font-family: \"Architects Daughter\";\n  font-size: 20px;\n  text-align: justify;\n}\n#map[_ngcontent-%COMP%] {\n  margin: 50px 0;\n}\nh2[_ngcontent-%COMP%] {\n  font-family: \"Architects Daughter\";\n  font-size: 20px;\n  text-align: justify;\n  text-align: center;\n}\nagm-map[_ngcontent-%COMP%] {\n  height: 450px;\n  width: 100%;\n}\n.location-info[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n  font-family: \"Architects Daughter\";\n  font-size: 20px;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255am9zcy9Eb2N1bWVudHMvd2FrZXVwYmVsbGlzaW1hL2Zyb250L3NyYy9hcHAvcGFnZXMvYm9vay1hcHBvaW50bWVudC9ib29rLWFwcG9pbnRtZW50LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9ib29rLWFwcG9pbnRtZW50L2Jvb2stYXBwb2ludG1lbnQuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvdG9ueWpvc3MvRG9jdW1lbnRzL3dha2V1cGJlbGxpc2ltYS9mcm9udC9zcmMvYXNzZXRzL2ZvbnRzL2ZvbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFBO0FDREo7QURJQTtFQUNJLGVBQUE7QUNGSjtBRENBO0VFSk8sMkNBQUE7QURNUDtBREZBO0VFSFMsa0NBQUE7RUFRTCxlQUFBO0VBQ0EsbUJBQUE7QURDSjtBREdBOztFRWJTLGtDQUFBO0VBUUwsZUFBQTtFQUNBLG1CQUFBO0FET0o7QURDQTtFQUNJLGNBQUE7QUNDSjtBRENBO0VFcEJTLGtDQUFBO0VBUUwsZUFBQTtFQUNBLG1CQUFBO0VGYUEsa0JBQUE7QUNHSjtBREFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNFSjtBRENFO0VBQ0ksbUJBQUE7RUUvQkcsa0NBQUE7RUFRTCxlQUFBO0VBQ0EsbUJBQUE7QUQwQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib29rLWFwcG9pbnRtZW50L2Jvb2stYXBwb2ludG1lbnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2ZvbnQubGVzcycpO1xuXG4ud3JhcHBlciB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLm1iLTQge1xuICAgIG1hcmdpbjogMTAwcHggMDtcbiAgICBoMSB7XG4gICAgICAgIC5oMShAaDEpO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgLmluZm9UZXh0KEBpbmZvKTtcbiAgICB9XG59XG5cbmxhYmVsLCBidXR0b24ge1xuICAgIC5pbmZvVGV4dChAaW5mbyk7XG59XG5cbiNtYXAge1xuICAgIG1hcmdpbjogNTBweCAwO1xufVxuaDIge1xuICAgIC5pbmZvVGV4dChAaW5mbyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5hZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmxvY2F0aW9uLWluZm8ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgIC5pbmZvVGV4dChAaW5mbyk7XG4gIH0iLCIud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4ubWItNCB7XG4gIG1hcmdpbjogMTAwcHggMDtcbn1cbi5tYi00IGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiQXJjaGl0ZWN0cyBEYXVnaHRlclwiLCBjdXJzaXZlO1xufVxuLm1iLTQgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFyY2hpdGVjdHMgRGF1Z2h0ZXJcIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxubGFiZWwsXG5idXR0b24ge1xuICBmb250LWZhbWlseTogXCJBcmNoaXRlY3RzIERhdWdodGVyXCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbiNtYXAge1xuICBtYXJnaW46IDUwcHggMDtcbn1cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiQXJjaGl0ZWN0cyBEYXVnaHRlclwiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDQ1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5sb2NhdGlvbi1pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiQXJjaGl0ZWN0cyBEYXVnaHRlclwiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4iLCJcblxuQGgxOiB7IGZvbnQtZmFtaWx5OlwiQXJjaGl0ZWN0cyBEYXVnaHRlclwiLCBjdXJzaXZlIH07XG5AaW5mbzogeyBmb250LWZhbWlseTpcIkFyY2hpdGVjdHMgRGF1Z2h0ZXJcIiB9O1xuXG4uaDEoQGgxKSB7XG4gICAgQGgxKCk7XG59XG5cbi5pbmZvVGV4dChAaW5mbykge1xuICAgIEBpbmZvKCk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookAppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-book-appointment',
                templateUrl: './book-appointment.component.html',
                styleUrls: ['./book-appointment.component.less']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _parts_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../parts/header/header.component */ "./src/app/parts/header/header.component.ts");
/* harmony import */ var _parts_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../parts/home/home.component */ "./src/app/parts/home/home.component.ts");
/* harmony import */ var _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parts/footer/footer.component */ "./src/app/parts/footer/footer.component.ts");





class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 4, vars: 0, consts: [[1, "wrap"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_parts_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _parts_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".wrap[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255am9zcy9Eb2N1bWVudHMvd2FrZXVwYmVsbGlzaW1hL2Zyb250L3NyYy9hcHAvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9tYWluL21haW4uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59IiwiLndyYXAge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/portfolio/portfolio.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.ts ***!
  \********************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _appState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appState */ "./src/app/appState.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _parts_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../parts/header/header.component */ "./src/app/parts/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../parts/footer/footer.component */ "./src/app/parts/footer/footer.component.ts");










function PortfolioComponent_div_6_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioComponent_div_6_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const img_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.delete(img_r2.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PortfolioComponent_div_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioComponent_div_6_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.moveRight(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "move right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PortfolioComponent_div_6_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioComponent_div_6_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.moveLeft(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "move left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PortfolioComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PortfolioComponent_div_6_button_3_Template, 2, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PortfolioComponent_div_6_button_4_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PortfolioComponent_div_6_button_5_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.url + "imgs/" + img_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-img", "url(" + ctx_r0.url + "imgs/" + img_r2.url + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.appState.header.user.role == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.appState.header.user.role == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.appState.header.user.role == "admin");
} }
function PortfolioComponent_div_7_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r19.progressBarPercent == 100 ? "green" : "blue")("width", ctx_r19.progressBarPercent + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r19.progressBarPercent, " %");
} }
function PortfolioComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PortfolioComponent_div_7_div_1_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PortfolioComponent_div_7_div_1_div_4_Template, 3, 5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioComponent_div_7_div_1_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const i_r18 = ctx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.appState.previews.splice(i_r18, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const preview_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", preview_r17.reader.result, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.progressBarPercent !== 0);
} }
function PortfolioComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PortfolioComponent_div_7_div_1_Template, 6, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.appState.previews);
} }
class PortfolioComponent {
    constructor(api, http) {
        this.api = api;
        this.http = http;
        this.appState = _appState__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.url = this.appState.hostName;
        this.selectedFile = null;
        this.max_size_req = 10000; //99999
        this.files = {};
        this.round = (x) => Math.round(x); //progress bar
        this.progressBarPercent = 0;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(appState)
            this.reloadImg();
            this.lazyInit();
        });
    }
    lazyInit() {
        setTimeout(() => {
            // lazy img loading \\
            const imageObserver = new IntersectionObserver((entries, imgObserver) => {
                entries.forEach((entry) => {
                    const lazyImage = entry.target;
                    //if (entry.isIntersecting) lazyImage.src = lazyImage.dataset.image;
                    //console.log(lazyImage.dataset.img)
                    if (entry.isIntersecting)
                        lazyImage.style.backgroundImage = lazyImage.dataset.img;
                });
            });
            document.querySelectorAll('.slide-img').forEach((v) => {
                imageObserver.observe(v);
            });
            // end lazy loading \\
        }, 1300);
    }
    //reloadImgFlag: boolean;
    reloadImg() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                //this.destroyFancy();
                // setTimeout(async () => {
                //   this.reloadImgFlag = true;
                const fromServer = yield this.api.getPortfolioImgs();
                console.log('sadsadsadasdsadas');
                //this.reloadImgFlag = false;
                this.appState.portfolioImg = fromServer;
                //}, 500)
                //$(".fancy").fancybox();
            }
            catch (error) {
                //console.log('reloadimg')
                //this.reloadImg();
            }
        });
    }
    // << -- fancybox -- >> \\
    ngAfterViewInit() {
        //$(document).ready(function () { //Photos Gallery
        // $('[data-fancybox="gallery"]').fancybox({
        // Options will go here
        //});
        //});
    }
    ngOnDestroy() {
        this.destroyFancy();
        //$(".fancybox").unbind('click.fb');
        // or maybe jQuery(".fancybox").off() to remove all bindings
    }
    destroyFancy() {
        // $(".fancybox").unbind('click.fb');
    }
    // << -- end fancybox -- >> \\
    delete(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fromServer = this.api.removeImg(name);
            console.log(fromServer);
            // this.reloadImg();
            // this.lazyInit();
            // console.log(appState.portfolioImg)
        });
    }
    moveRight(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fromServer = yield this.api.move(index, 'right');
            console.log(fromServer);
            this.reloadImg();
            this.lazyInit();
        });
    }
    moveLeft(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fromServer = yield this.api.move(index, 'left');
            console.log(fromServer);
            this.reloadImg();
            this.lazyInit();
        });
    }
    onImagePicked(event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    }
    filePicker() {
        //const file = (event.target as HTMLInputElement).files[0];
        console.log(this.selectedFile.name);
        const fd = new FormData;
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost/' + 'upload-img', this.selectedFile.name, {
            reportProgress: true,
            observe: 'events'
        }).subscribe((event) => {
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
            }
            else if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response)
                console.log(event);
        });
        //const fromServer: any = this.api.pickedImg(fd);
        //console.log(fromServer);
    }
    onChange(el) {
        this.files = document.getElementById('upload').files; // file == {  name: "OhdIJZy8H7o.jpg", lastModified: 1467921666657,  lastModifiedDate: Date 2016-07-07T20:01:06.657Z,  size: 214450,  type: "image/jpeg"   }
        this.uploaded = 0;
        this.upload_i = 0;
        console.log('this files', this.files);
        //step one - remove first example photo
        this.appState.previews = this.appState.previews.filter((elem) => {
            console.log(elem, '!!!!! ELEM !!!');
            return (elem.reader.result == "assets/400x300.png") ? false : true;
        });
        this.fileQuantity = this.files.length;
        this.fileCounter = 1;
        const file = this.files[0];
        //log('file', file)
        //log('file size', file.size)
        //log('TIMES:::::: ', times)
        /// this.appState.currentNewProductImg = 'http://localhost/uploads/img' + file.name;
        //preview
        //const preview: any = document.querySelector('img');
        for (let i = 0; i < this.files.length; i++) {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.appState.previews.push({
                    reader: reader
                });
                // preview.src = reader.result;
            };
            reader.readAsDataURL(this.files[i]);
        }
        ;
        this.upload(file);
    }
    upload(file) {
        let times = Math.ceil(file.size / this.max_size_req) + 1; //amount of peases 
        this.times = times;
        console.log('upload begin', this.upload_i);
        let max = this.max_size_req;
        // next step
        this.upload_i++;
        // set a range
        let begin = (this.upload_i - 1) * max;
        let end = begin + max;
        // коли останній кусок тоді зрізаємо пусте
        if (end > file.size)
            end = file.size;
        // take link to one chunk
        var slice = file.slice(begin, end); //0, file.size
        // set type of chunk
        if (this.upload_i == 1)
            var load_type = 'new';
        else if (this.upload_i > 1)
            var load_type = 'append';
        // take access to file API
        var fileReader = new FileReader();
        // read chunk as binary type
        fileReader.readAsBinaryString(slice);
        // when chunk has been red
        fileReader.onload = (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.progressPercent();
            // gathering part of file
            const piece = {
                load_type: load_type,
                name: file.name,
                data: fileReader.result // ... data
            };
            // =>>>> SEND to backend
            const data = yield this.api.upload(piece);
            //repeat to upload first and middle chunks   
            console.log('i: ', this.upload_i, 'from', this.times);
            //last chunk of file
            if (times > this.upload_i)
                this.upload(file);
            else if (times == this.upload_i) {
                this.fileCounter++;
                //upload next file?
                console.log('loaded', this.fileCounter);
                // alert('good job');
                if (this.fileQuantity >= this.fileCounter) {
                    this.uploadNextFile();
                }
                else {
                    // clear all uploaded files
                    console.log('ppState.previews');
                    this.appState.previews = [];
                    this.appState.previews.push({
                        reader: {
                            result: "assets/400x300.png"
                        }
                    });
                    setTimeout(() => {
                        this.reloadImg();
                        this.lazyInit();
                    }, 2000);
                }
                //alert('success')
                yield this.api.addNewFileToJson(file.name);
                this.reloadImg();
                //appState.previews.shift();
                swal.fire({
                    title: "Good job!",
                    text: "File successfully added",
                    icon: "success",
                });
            }
        });
    }
    sendImg() {
        const file = this.files[this.fileCounter - 1]; //current upload file
        this.upload(file);
    }
    uploadNextFile() {
        const file = this.files[this.fileCounter - 1]; //current upload file
        //3 0
        const times = Math.ceil(file.size / this.max_size_req) + 1; //amount of peases 
        this.upload_i = 0;
        console.log('this is upload', file, times, this.fileCounter); //undefined
        this.upload(file);
    }
    progressPercent() {
        setTimeout(() => {
            this.progressBarPercent = this.round(100 / this.times * this.upload_i);
            console.log(this.progressBarPercent);
        });
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 9, vars: 2, consts: [[1, "wrapper"], [1, "container"], ["id", "grid-container", 1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "col-md-4"], ["data-fancybox", "gallery", "rel", "group", "data-width", "800", "data-height", "600", 3, "href"], ["rel", "group", 1, "slide-img"], ["class", "edit-admin delete", 3, "click", 4, "ngIf"], ["class", "edit-admin right", 3, "click", 4, "ngIf"], ["class", "edit-admin left", 3, "click", 4, "ngIf"], [1, "edit-admin", "delete", 3, "click"], [1, "edit-admin", "right", 3, "click"], [1, "edit-admin", "left", 3, "click"], [1, "row"], ["class", "choose-img col-md-4", 4, "ngFor", "ngForOf"], [1, "choose-img", "col-md-4"], [1, "input-pic", "upload-img"], ["id", "upload", "type", "file", 1, "form-control", 3, "change"], ["alt", "Image preview...", 1, "img-fluid", "mh-100", "mw-100", "img", 3, "src"], ["class", "progress", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-window-close", "close-window", 3, "click"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PortfolioComponent_div_6_Template, 6, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PortfolioComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.appState.portfolioImg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appState.header.user.role == "admin");
    } }, directives: [_parts_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 75px 0;\n}\n.wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Architects Daughter\", cursive;\n  margin: 24px 0;\n}\n.wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#grid-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n#grid-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  position: relative;\n  width: 276px;\n  height: 184px;\n  background-size: cover;\n  margin: 30px 0;\n}\n#grid-container[_ngcontent-%COMP%]   .edit-admin[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 59;\n  background: red;\n}\n#grid-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n#grid-container[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  top: 30px;\n  left: 0;\n}\n#grid-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  left: 0;\n  top: 90px;\n}\n#grid-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  left: 0;\n  top: 60px;\n}\n.choose-img[_ngcontent-%COMP%] {\n  margin: 100px auto;\n}\n.upload-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.upload-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 15px;\n  font-size: xx-large;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255am9zcy9Eb2N1bWVudHMvd2FrZXVwYmVsbGlzaW1hL2Zyb250L3NyYy9hcHAvcGFnZXMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy90b255am9zcy9Eb2N1bWVudHMvd2FrZXVwYmVsbGlzaW1hL2Zyb250L3NyYy9hc3NldHMvZm9udHMvZm9udC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDREo7QUREQTtFQUlRLGtCQUFBO0VFSkQsMkNBQUE7RUZNQyxjQUFBO0FDQVI7QUROQTtFQVNRLFdBQUE7QUNBUjtBRElBO0VBS1EsVUFBQTtBQ05SO0FEQ0E7RUFRUSxnQkFBQTtFQUVBLGtCQUFBO0VBR0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNUUjtBRFBBO0VBb0JRLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNWUjtBRFpBO0VBeUJRLFVBQUE7QUNWUjtBRGZBO0VBNEJRLFNBQUE7RUFDQSxPQUFBO0FDVlI7QURuQkE7RUFnQ1EsT0FBQTtFQUNBLFNBQUE7QUNWUjtBRHZCQTtFQW9DUSxPQUFBO0VBQ0EsU0FBQTtBQ1ZSO0FEaUJBO0VBQ0ksa0JBQUE7QUNmSjtBRGlCQTtFQUVRLGtCQUFBO0FDaEJSO0FEY0E7RUFLUSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDaEJSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9udHMvZm9udC5sZXNzJyk7XG5cbi53cmFwcGVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDc1cHggMDtcbiAgICBoMSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLmgxKEBoMSk7XG4gICAgICAgIG1hcmdpbjogMjRweCAwO1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbiNncmlkLWNvbnRhaW5lciB7XG4gICAgLy9wYWRkaW5nLXRvcDogNWVtO1xuICAgIC8vZGlzcGxheTogZ3JpZDtcbiAgICAvL2dyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xuICAgIGEge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIC8vcGFkZGluZzogMzBweCAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC8vIG5ld1xuICAgICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vbG9jYWxob3N0L2ltZ3MvZm91cl9jb3B5XzIuanBnKTtcbiAgICAgICAgd2lkdGg6IDI3NnB4O1xuICAgICAgICBoZWlnaHQ6IDE4NHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW46IDMwcHggMDtcblxuICAgIH1cbiAgICAuZWRpdC1hZG1pbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogNTk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gICAgLmRlbGV0ZSB7XG4gICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgLmxlZnQge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDkwcHg7XG4gICAgfVxuICAgIC5yaWdodCB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogNjBweDtcbiAgICB9XG59XG5cbi8vIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbi8vICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4vLyB9XG4uY2hvb3NlLWltZyB7XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xufVxuLnVwbG9hZC1pbWcge1xuICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgaSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn0iLCIud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDc1cHggMDtcbn1cbi53cmFwcGVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJBcmNoaXRlY3RzIERhdWdodGVyXCIsIGN1cnNpdmU7XG4gIG1hcmdpbjogMjRweCAwO1xufVxuLndyYXBwZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jZ3JpZC1jb250YWluZXIgYSB7XG4gIHotaW5kZXg6IDE7XG59XG4jZ3JpZC1jb250YWluZXIgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNzZweDtcbiAgaGVpZ2h0OiAxODRweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG4jZ3JpZC1jb250YWluZXIgLmVkaXQtYWRtaW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDU5O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG4jZ3JpZC1jb250YWluZXIgYnV0dG9uIHtcbiAgei1pbmRleDogMjtcbn1cbiNncmlkLWNvbnRhaW5lciAuZGVsZXRlIHtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiAwO1xufVxuI2dyaWQtY29udGFpbmVyIC5sZWZ0IHtcbiAgbGVmdDogMDtcbiAgdG9wOiA5MHB4O1xufVxuI2dyaWQtY29udGFpbmVyIC5yaWdodCB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNjBweDtcbn1cbi5jaG9vc2UtaW1nIHtcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xufVxuLnVwbG9hZC1pbWcgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnVwbG9hZC1pbWcgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMTVweDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiXG5cbkBoMTogeyBmb250LWZhbWlseTpcIkFyY2hpdGVjdHMgRGF1Z2h0ZXJcIiwgY3Vyc2l2ZSB9O1xuQGluZm86IHsgZm9udC1mYW1pbHk6XCJBcmNoaXRlY3RzIERhdWdodGVyXCIgfTtcblxuLmgxKEBoMSkge1xuICAgIEBoMSgpO1xufVxuXG4uaW5mb1RleHQoQGluZm8pIHtcbiAgICBAaW5mbygpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.less']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/redirector/redirector.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/redirector/redirector.component.ts ***!
  \**********************************************************/
/*! exports provided: RedirectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectorComponent", function() { return RedirectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class RedirectorComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        // oage wich should be redirect
        const page = localStorage.getItem('toRedirect');
        this.router.navigateByUrl(page);
    }
}
RedirectorComponent.ɵfac = function RedirectorComponent_Factory(t) { return new (t || RedirectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RedirectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RedirectorComponent, selectors: [["app-redirector"]], decls: 2, vars: 0, template: function RedirectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "redirector works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZGlyZWN0b3IvcmVkaXJlY3Rvci5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedirectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-redirector',
                templateUrl: './redirector.component.html',
                styleUrls: ['./redirector.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _parts_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../parts/header/header.component */ "./src/app/parts/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parts/footer/footer.component */ "./src/app/parts/footer/footer.component.ts");





function ServicesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.h3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r1.info, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", service_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ServicesComponent {
    constructor() {
        this.serviceInfo = [
            {
                h3: 'Lip Liner/Color',
                info: `The Intradermal Pigmentation procedure for lip color is beautiful.
      It can appear to change the size and shape of the lips as well as the color.
      This procedure helps prevent lipstick from bleeding into the surrounding skin.
      Many people request a soft pink, similar to the lip color to that of an infant,
      for those who want a natural look. Others may desire a dramatic effect.`,
                url: '../../../assets/imgs/1.jpg'
            },
            {
                h3: 'Eyebrows / Eyebrow & Hairline Strokes',
                info: `The Intradermal Pigmentation procedure for eyebrows can mimic the appearance
      of hair in the brow line. Anyone who desires more fullness of the brows will
      love the procedure (and the time saved not applying makeup!) Those who used
      to apply pencil can go swimming, play tennis, or wipe their forehead without
      the embarrassment of losing their eyebrows. Those suffering from alopecia
      (hair loss) are pleasantly surprised at how natural it looks.`,
                url: '../../../assets/imgs/eyebrows.jpg'
            },
            {
                h3: 'Eyeliner & Designer Eyeliner',
                info: `Eyeliner & Designer Eyeliner A subtle, natural look, mimicking thousands of tiny
      eyelashes with the implantation of pigments in the lash line is popular with both
      male and female clients. Additional shadowing of color can be added for a soft
      natural liner or a more bold, definite line can be achieved. Ophthalmologists
      recommend Intradermal Cosmetic procedures for those who are allergic to conventional
      makeup and for those wearing contact lenses.`,
                url: '../../../assets/imgs/3.jpg'
            },
            {
                h3: 'Additional Procedures:Eyelash Extensions',
                info: `Eyelash Extensions look like real lashes with a natural and weightless feel.
      These lashes are considered a “semi-permanent,” and are applied by attaching
      a synthetic eyelash to your natural eyelash. The application is painless;
      the final result is beautiful accented eyes! They are Great for swimming and workouts.
      Different lengths vary for everyday life or special occasions. No longer a need for mascara.
      Perfect for weddings, proms, reunions and everyday life!`,
                url: '../../../assets/imgs/5.jpg'
            },
            {
                h3: 'Mucosal Coloring',
                info: `Mucosal coloring is the art of adding color to the inner mucosal tissue just
      below the eye, a procedure that complements your eye’s natural sparkle.
      The coloring of the mucosal tissue adds depth and vibrance.`,
                url: '../../../assets/imgs/6.jpg'
            },
            {
                h3: 'Alopecia/Hairline',
                info: `Alopecia is the state of lacking hair where it usually would grow, especially on the head.
      Alopecia, which affects 50% of males known as a receding hairline/brow,
      many times is worsened due to stress and lack of sleep;
      it is also a common side-effect of face lifts.
      As far as permanent makeup is concerned with alopecia,
      we help straighten and fill in thinning hair regions along the hairline,
      sideburns, eyebrows, in small balding spots, etc.`,
                url: '../../../assets/imgs/10.jpg'
            },
            {
                h3: 'Lip Augmentation (non-surgical)',
                info: `This procedure is used to visually create fuller, healthier lips without any surgical procedure.
      Whether you are looking to balance out the shape of your lips, even-out a cleft lip,
      conceal burns or scars, or you simply want rich, sexy looking lips, this procedure is for you.`,
                url: '../../../assets/imgs/9.jpg'
            },
            {
                h3: 'Threading',
                info: `Growing in popularity across the country, threading is the process of shaping eyebrows using
      cotton thread.
      This delicate procedure is suitable for even the most sensitive skin types and is highly
      recommended as
      an excellent option instead of waxing or tweezing. Threading is becoming very popular because it
      is
      more precise and produces a beautiful uniform shape`,
                url: '../../../assets/imgs/7.jpg'
            },
        ];
    }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 10, vars: 1, consts: [[1, "wrapper"], [1, "infoServices_box"], [1, "row", "service-row"], [1, "container"], ["class", "row service-wrapper", 4, "ngFor", "ngForOf"], [1, "row", "service-wrapper"], [1, "service_info", "col-md-6"], [1, "imgService", "col-md-6"], ["alt", "img-services", 3, "src"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ">\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServicesComponent_div_8_Template, 7, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.serviceInfo);
    } }, directives: [_parts_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 75px 0;\n}\n.wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Architects Daughter\", cursive;\n  margin-bottom: 24px;\n}\n.infoServices_box[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n}\n.service-row[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 30px 0;\n  background-color: rgba(255, 255, 255, 0.9);\n}\n.service_info[_ngcontent-%COMP%] {\n  font-family: \"Architects Daughter\";\n  font-size: 20px;\n  text-align: justify;\n  font-size: 17px;\n  padding: 10px 0;\n}\n.service_info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.imgService[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 10px 10px 9px 0px rgba(0, 0, 0, 0.75);\n  -moz-transition: all 1s ease-out;\n  -o-transition: all 1s ease-out;\n  -webkit-transition: all 1s ease-out;\n}\n.imgService[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n.service-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255am9zcy9Eb2N1bWVudHMvd2FrZXVwYmVsbGlzaW1hL2Zyb250L3NyYy9hcHAvcGFnZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3Rvbnlqb3NzL0RvY3VtZW50cy93YWtldXBiZWxsaXNpbWEvZnJvbnQvc3JjL2Fzc2V0cy9mb250cy9mb250Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNESjtBRERBO0VBSVEsa0JBQUE7RUVKRCwyQ0FBQTtFRk1DLG1CQUFBO0FDQVI7QURHQTtFQUVJLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDRko7QURJRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7QUNGSjtBREtFO0VFckJPLGtDQUFBO0VBUUwsZUFBQTtFQUNBLG1CQUFBO0VGZ0JBLGVBQUE7RUFDQSxlQUFBO0FDSEo7QURGRTtFQU9JLGVBQUE7QUNGTjtBREtFO0VBRUksV0FBQTtFQUdBLGlEQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0FDSk47QURKRTtFQVdJLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ0pOO0FET0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2ZvbnQubGVzcycpO1xuXG4ud3JhcHBlciB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA3NXB4IDA7XG4gICAgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5oMShAaDEpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cbn1cbi5pbmZvU2VydmljZXNfYm94IHtcbiAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL21haW4vYmdTZXJ2aWNlLmpwZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgfVxuICAuc2VydmljZS1yb3cge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwxMDEsMTM0LCAwLjUpO1xuICB9XG4gIC5zZXJ2aWNlX2luZm8ge1xuICAgIC5pbmZvVGV4dChAaW5mbyk7XG4gICAgLy9jb2xvcjogQG1haW5Db2xvckJsYWNrO1xuICAgIC8vZm9udC1mYW1pbHk6IEBtYWluRm9udDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGgzIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICB9XG4gIH1cbiAgLmltZ1NlcnZpY2Uge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA5cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuICAgIH1cbiAgICBpbWc6aG92ZXJ7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cbiAgfVxuICAuc2VydmljZS13cmFwcGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfSIsIi53cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNzVweCAwO1xufVxuLndyYXBwZXIgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkFyY2hpdGVjdHMgRGF1Z2h0ZXJcIiwgY3Vyc2l2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5pbmZvU2VydmljZXNfYm94IHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuLnNlcnZpY2Utcm93IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbn1cbi5zZXJ2aWNlX2luZm8ge1xuICBmb250LWZhbWlseTogXCJBcmNoaXRlY3RzIERhdWdodGVyXCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uc2VydmljZV9pbmZvIGgzIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmltZ1NlcnZpY2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcbn1cbi5pbWdTZXJ2aWNlIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLnNlcnZpY2Utd3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCJcblxuQGgxOiB7IGZvbnQtZmFtaWx5OlwiQXJjaGl0ZWN0cyBEYXVnaHRlclwiLCBjdXJzaXZlIH07XG5AaW5mbzogeyBmb250LWZhbWlseTpcIkFyY2hpdGVjdHMgRGF1Z2h0ZXJcIiB9O1xuXG4uaDEoQGgxKSB7XG4gICAgQGgxKCk7XG59XG5cbi5pbmZvVGV4dChAaW5mbykge1xuICAgIEBpbmZvKCk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/parts/carousel/carousel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/parts/carousel/carousel.component.ts ***!
  \******************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CarouselComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slideImg_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", i_r2 == ctx_r0.currentSlide ? ctx_r0.slide : ctx_r0.nextSlide, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r0.centerSlideWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slideImg_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
//import { trigger, transition, style, animate, keyframes, query, stagger } from '@angular/animations';
class CarouselComponent {
    constructor() {
        this.imgSlides = [
            { img: '../../assets/imgs/banner.jpg' },
            { img: '../../assets/imgs/bgService.jpg' },
            { img: '../../assets/imgs/banner3.jpg' },
            { img: '../../assets/imgs/banner4.jpg' },
            { img: '../../assets/imgs/banner5.jpg' },
            { img: '../../assets/imgs/banner6.jpg' },
            { img: '../../assets/imgs/banner7.jpg' },
        ];
        this.currentSlide = 0;
        this.nextSlider = null;
        this.slide = 0;
        this.nextSlide = 0;
        this.counter = 1;
    }
    ngOnInit() {
        this.carousel = document.querySelector('.carousel');
        //console.log(this.slide, 'this.slide ngOnInit')
        const delay = 5000; //ms
        this.endSlider = this.imgSlides.length - 1; // останній елемент в масиві
        this.startSlider = this.imgSlides[0]; // 1 елемент в масиві
        this.centerSlideWidth = this.sliderWidth(); // set full img width
        setInterval(() => {
            //this.moveRight()
        }, delay);
    }
    sliderWidth() {
        return this.carousel.offsetWidth;
    }
    moveLeft() {
        this.counter--;
        const lastImg = this.imgSlides.length - 1;
        console.log(this.counter);
        this.slide = this.slide + this.sliderWidth();
        if (this.counter <= 0) {
            this.counter = lastImg + 1;
            return this.slide = -this.sliderWidth() * lastImg;
        }
    }
    moveRight() {
        this.counter++;
        const lastImg = this.imgSlides.length - 1;
        this.nextSlide = this.sliderWidth();
        this.nextSlider = 1;
        this.nextSlide = 0;
        this.slide = this.slide - this.sliderWidth();
        if (this.counter >= lastImg) {
            console.log(this.slide, 'if else move right', this.counter, 'if else move right');
            this.counter = 1;
            this.slide = 0;
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 15, vars: 1, consts: [[1, "carousel"], [1, "title-wrapper"], [1, "title"], ["routerLink", "/book-appointment", 1, "portfolio-btn", "animated", "fadeInDown", "btn-4", "topLink"], ["class", "slides", 3, "margin-left", 4, "ngFor", "ngForOf"], [1, "controls"], [1, "control", "prev-slide", 3, "click"], [1, "fa", "fa-angle-left"], [1, "control", "next-slide", 3, "click"], [1, "fa", "fa-angle-right"], [1, "slides"], ["alt", "slide image", 1, "slide", 3, "src"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " beautiful all day... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " beautiful all night... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Join us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CarouselComponent_li_9_Template, 2, 5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_div_click_11_listener() { return ctx.moveLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_div_click_13_listener() { return ctx.moveRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imgSlides);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".carousel[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n.carousel[_ngcontent-%COMP%]:hover   .controls[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.carousel[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  opacity: 0;\n  display: flex;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  justify-content: space-between;\n  width: 100%;\n  z-index: 99999;\n}\n.carousel[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.7);\n  opacity: 0.5;\n  cursor: pointer;\n}\n.carousel[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.slides[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: 1s ease-in-out all;\n  list-style: none;\n}\n.title-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n}\n.title-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 25px;\n  background: hsla(270, 4%, 41%, 0.15);\n  font-family: 'Nothing You Could Do', cursive;\n  font-size: 59px;\n  text-transform: uppercase;\n  margin: 20px auto;\n  width: 470px;\n}\n.title-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: left;\n  margin: 0;\n  font-size: 35px;\n}\n.portfolio-btn[_ngcontent-%COMP%] {\n  max-width: 130px;\n  font-size: 20px;\n  padding: 10px 20px;\n  border: 1px solid #f96586;\n  text-decoration: none;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #f96586;\n  margin-top: 10px;\n  border-radius: 0;\n  transition: 0.5s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.portfolio-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #fff;\n  background: #000;\n  border: 1px solid #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255am9zcy9Eb2N1bWVudHMvd2FrZXVwYmVsbGlzaW1hL2Zyb250L3NyYy9hcHAvcGFydHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhcnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLFNBQUE7RUFDQSxVQUFBO0VBRUEsYUFBQTtBQ0xKO0FET0E7RUFDSSxVQUFBO0FDTEo7QURPQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNMSjtBRFFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7QUNQSjtBRFNBO0VBQ0ksVUFBQTtBQ1BKO0FEU0E7RUFNSSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ1pKO0FENkJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUMzQko7QURxQkE7RUFRUSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQzFCUjtBRFVBO0VBcUJPLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDNUJQO0FEZ0NBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQzlCSjtBRCtCSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUM3QlIiLCJmaWxlIjoic3JjL2FwcC9wYXJ0cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbCB7XG4gICAgLy93aWR0aDogODB2dztcbiAgICAvL2hlaWdodDogMjUwcHg7XG4gICAgLy9oZWlnaHQ6IDY5MHB4O1xuICAgIC8vYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICAvLyAvLy8vLy8vLy8vLy9cbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmNhcm91c2VsOmhvdmVyIC5jb250cm9scyB7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5jYXJvdXNlbCAuY29udHJvbHMge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgLy90cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xufVxuLmNhcm91c2VsIC5jb250cm9scyAuY29udHJvbCB7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIC8vdHJhbnNpdGlvbjogZWFzZSAwLjNzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJvdXNlbCAuY29udHJvbHMgLmNvbnRyb2w6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG4uc2xpZGVzIHtcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL3RvcDogNTAlO1xuICAgIC8vbGVmdDogMDtcbiAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAvL2Rpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQgYWxsO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4vLyAuY2Fyb3VzZWwgLnNsaWRlcyAuc2xpZGUge1xuLy8gICAgIG1pbi13aWR0aDogMTAwJTtcbi8vICAgICBtaW4taGVpZ2h0OiAyNTBweDtcbi8vICAgICBoZWlnaHQ6IGF1dG87XG4vLyB9XG5cblxuLy8gLmxlZnQge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICBsZWZ0OiAtMTAwJSFpbXBvcnRhbnQ7XG4vLyB9XG4vLyAucmlnaHQge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICByaWdodDogKzEwMCFpbXBvcnRhbnQ7XG4vLyB9XG4udGl0bGUtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGhzbGEoMjcwLCA0JSwgNDElLCAuMTUpO1xuICAgICAgICBmb250LWZhbWlseTogJ05vdGhpbmcgWW91IENvdWxkIERvJywgY3Vyc2l2ZTtcbiAgICAgICAgZm9udC1zaXplOiA1OXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgd2lkdGg6IDQ3MHB4OyAvLyBhZGp1c3QgYnkgbWVkaWEgcXVlcnlcbiAgICAgICAgLy9tYXJnaW46IDAgYXV0bztcbiAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICBtYXJnaW46IDA7XG4gICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgIC8vcGFkZGluZzogMjVweCA1MHB4O1xuICAgIH1cbn1cbi5wb3J0Zm9saW8tYnRuIHtcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y5NjU4NjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjZjk2NTg2O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIH1cbn1cblxuXG5cblxuXG5cblxuIiwiLmNhcm91c2VsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2Fyb3VzZWw6aG92ZXIgLmNvbnRyb2xzIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5jYXJvdXNlbCAuY29udHJvbHMge1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk5OTtcbn1cbi5jYXJvdXNlbCAuY29udHJvbHMgLmNvbnRyb2wge1xuICBtYXJnaW46IDAgNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcm91c2VsIC5jb250cm9scyAuY29udHJvbDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4uc2xpZGVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0IGFsbDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi50aXRsZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG59XG4udGl0bGUtd3JhcHBlciAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBoc2xhKDI3MCwgNCUsIDQxJSwgMC4xNSk7XG4gIGZvbnQtZmFtaWx5OiAnTm90aGluZyBZb3UgQ291bGQgRG8nLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDU5cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB3aWR0aDogNDcwcHg7XG59XG4udGl0bGUtd3JhcHBlciBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbi5wb3J0Zm9saW8tYnRuIHtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOTY1ODY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmOTY1ODY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBvcnRmb2xpby1idG46aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/parts/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/parts/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 79, vars: 0, consts: [[1, "page-footer", "font-small", "mdb-color", "pt-4"], [1, "container", "text-center", "text-md-left"], [1, "row", "text-center", "text-md-left", "mt-3", "pb-3"], [1, "col-md-3", "col-lg-3", "col-xl-3", "mx-auto", "mt-3"], [1, "text-uppercase", "mb-4", "font-weight-bold"], [1, "w-100", "clearfix", "d-md-none"], [1, "col-md-2", "col-lg-2", "col-xl-2", "mx-auto", "mt-3", "navigation-footer"], ["routerLink", "/services"], ["routerLink", "/portfolio"], ["routerLink", "/about-us"], ["routerLink", "/book-appointment"], [1, "col-md-3", "col-lg-2", "col-xl-2", "mx-auto", "mt-3"], ["href", "#!"], [1, "col-md-4", "col-lg-3", "col-xl-3", "mx-auto", "mt-3"], [1, "fa", "fa-home", "mr-3"], [1, "fa", "fa-envelope", "mr-3"], [1, "fa", "fa-phone", "mr-3"], [1, "fa", "fa-print", "mr-3"], [1, "row", "d-flex", "align-items-center"], [1, "col-md-7", "col-lg-8"], [1, "text-center", "text-md-left"], ["href", "https://tarasostasha.com/"], [1, "col-md-5", "col-lg-4", "ml-lg-0"], [1, "text-center", "text-md-right"], [1, "list-unstyled", "list-inline"], [1, "list-inline-item"], [1, "btn-floating", "btn-sm", "rgba-white-slight", "mx-1"], [1, "fa", "fa-facebook-f"], [1, "fa", "fa-twitter"], [1, "fa", "fa-google-plus-g"], [1, "fa", "fa-linkedin-in"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Company name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Useful links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Become an Affiliate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Shipping Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " New York, NY 10012, US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " nataliya.hocko@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " 973-845-8803");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " 973-330-2608");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u00A9 2020 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " tarasostasha.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".page-footer[_ngcontent-%COMP%] {\n  background: #000000;\n}\n.page-footer[_ngcontent-%COMP%] {\n  font-family: 'Architects Daughter';\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.navigation-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navigation-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255am9zcy9Eb2N1bWVudHMvd2FrZXVwYmVsbGlzaW1hL2Zyb250L3NyYy9hcHAvcGFydHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFydHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7QURDQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FDQ0o7QURDQTtFQUVRLCtCQUFBO0FDQVI7QURGQTtFQUtRLGNBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhcnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMSk7XG59XG4ucGFnZS1mb290ZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0cyBEYXVnaHRlcic7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbn1cbi5uYXZpZ2F0aW9uLWZvb3RlciB7XG4gICAgcCBhIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgIH1cbiAgICBwIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG59IiwiLnBhZ2UtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbi5wYWdlLWZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0cyBEYXVnaHRlcic7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5uYXZpZ2F0aW9uLWZvb3RlciBwIGEge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLm5hdmlnYXRpb24tZm9vdGVyIHAgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/parts/form-validator/form-validator.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/parts/form-validator/form-validator.component.ts ***!
  \******************************************************************/
/*! exports provided: FormValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidatorComponent", function() { return FormValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function FormValidatorComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.it.errors.mailValidator.msg, " ");
} }
function FormValidatorComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormValidatorComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Must be at least ", ctx_r3.it.errors.minlength.requiredLength, " characters long. ");
} }
function FormValidatorComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Must be shorter ", ctx_r4.it.errors.maxlength.requiredLength, " characters long. ");
} }
function FormValidatorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormValidatorComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormValidatorComponent_div_0_div_2_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormValidatorComponent_div_0_div_3_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormValidatorComponent_div_0_div_4_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.it.errors.mailValidator && ctx_r0.it.value.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.it.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.it.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.it.errors.maxlength);
} }
class FormValidatorComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormValidatorComponent.ɵfac = function FormValidatorComponent_Factory(t) { return new (t || FormValidatorComponent)(); };
FormValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormValidatorComponent, selectors: [["app-form-validator"]], inputs: { it: "it" }, decls: 1, vars: 1, consts: [["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function FormValidatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormValidatorComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.it.invalid && (ctx.it.dirty || ctx.it.touched));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRzL2Zvcm0tdmFsaWRhdG9yL2Zvcm0tdmFsaWRhdG9yLmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-validator',
                templateUrl: './form-validator.component.html',
                styleUrls: ['./form-validator.component.less']
            }]
    }], function () { return []; }, { it: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/parts/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/parts/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _appState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../appState */ "./src/app/appState.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function HeaderComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_26_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.toLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r1.appState.header.user.userName));
} }
function HeaderComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_28_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " LogOut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router, api, storage) {
        this.router = router;
        this.api = api;
        this.storage = storage;
        this.appState = _appState__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    ngOnInit() {
        console.log(_appState__WEBPACK_IMPORTED_MODULE_2__["default"].header.user);
        //if(appState.header.isLogged == false) { alert('null') } 
        //appState.header.user.userName = this.storage.getItem('user');
        const userStorage = this.storage.getItem('user');
        if (userStorage)
            _appState__WEBPACK_IMPORTED_MODULE_2__["default"].header.user = userStorage;
    }
    toLogin() {
        // save page to redirector
        const currentPage = location.pathname;
        localStorage.setItem('toRedirect', currentPage);
        // redirect to login
        this.router.navigateByUrl('/auth');
    }
    logOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('log out');
            const fromServer = yield this.api.logOut();
            console.log(fromServer, fromServer.ok);
            if (fromServer.ok) {
                console.log('IF LOGOUT');
                // reset user
                this.storage.clearItem('user');
                location.reload();
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 38, vars: 3, consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark", "pink", "scrolling-navbar"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/main", 1, "nav-link"], [1, "sr-only"], ["routerLink", "/services", 1, "nav-link"], ["routerLink", "/portfolio", 1, "nav-link"], ["routerLink", "/about-us", 1, "nav-link"], ["routerLink", "/book-appointment", 1, "nav-link"], [1, "navbar-nav", "nav-flex-icons"], ["class", "nav-item sign-in", 3, "click", 4, "ngIf"], ["class", "sign-out", 4, "ngIf"], ["class", "nav-item", "class", "sign-out", 3, "click", 4, "ngIf"], [1, "nav-link"], [1, "fa", "fa-facebook-f"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "nav-item", "sign-in", 3, "click"], [1, "fa", "fa-sign-in"], [1, "sign-out"], [1, "nav-link", 2, "color", "#fff"], [1, "sign-out", 3, "click"], [1, "fa", "fa-sign-out"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HeaderComponent_li_26_Template, 4, 0, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HeaderComponent_li_27_Template, 4, 3, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HeaderComponent_li_28_Template, 4, 0, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.appState.header.user.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appState.header.user.isLogged || ctx.appState.header.user.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appState.header.user.isLogged || ctx.appState.header.user.userName);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]], styles: [".navbar[_ngcontent-%COMP%] {\n  background: #000000;\n}\n.nav-flex-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%] {\n  font-family: 'Architects Daughter';\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255am9zcy9Eb2N1bWVudHMvd2FrZXVwYmVsbGlzaW1hL2Zyb250L3NyYy9hcHAvcGFydHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFydHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7QURFQTtFQUNJLGVBQUE7QUNBSjtBREdBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYXJ0cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgMSk7XG59XG5cbi5uYXYtZmxleC1pY29ucyBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2YmFyIHtcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn0iLCIubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbi5uYXYtZmxleC1pY29ucyBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXZiYXIge1xuICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/parts/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/parts/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _appState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appState */ "./src/app/appState.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../carousel/carousel.component */ "./src/app/parts/carousel/carousel.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-validator/form-validator.component */ "./src/app/parts/form-validator/form-validator.component.ts");
/* harmony import */ var _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../star-rating/star-rating.component */ "./src/app/parts/star-rating/star-rating.component.ts");











function HomeComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "from 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", review_r4.nameReview, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", review_r4.stars * 18.4, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", review_r4.stars, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", review_r4.messageReview, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 6, review_r4.created), " ");
} }
function HomeComponent_i_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 21);
} }
function HomeComponent_i_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 22);
} }
function HomeComponent_form_22_span_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_form_22_span_19_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const star_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.checkedStar(star_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [1, 2, 3, 4, 5]; };
function HomeComponent_form_22_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomeComponent_form_22_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.sendReview(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Your name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-form-validator", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Your email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-form-validator", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HomeComponent_form_22_span_19_Template, 1, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "app-star-rating", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ratingClicked", function HomeComponent_form_22_Template_app_star_rating_ratingClicked_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onRatingClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Rate your master ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "textarea", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Your message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "app-form-validator", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.reviewForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("starWidth", ctx_r3.starWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx_r3.message);
} }
class HomeComponent {
    constructor(formBuilder, api) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.review = false;
        this.appState = _appState__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.mail = {
            nameReview: '',
            emailReview: '',
            rating: '',
            messageReview: ''
        };
        this.reviewForm = this.formBuilder.group({
            'nameReview': [this.mail.nameReview, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            'emailReview': [this.mail.Review, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), this.mailValidator()]],
            // 'subject': [this.mail.subject, [Validators.required, Validators.minLength(15)]],
            'messageReview': [this.mail.Review, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
        });
    }
    onRatingClicked(message) {
        this.starRating = message;
        console.log(this.starRating);
    }
    checkedStar(icon) {
        this.starWidth = icon * 92 / 5;
        console.log(icon);
        console.log(this.starWidth, 'px');
    }
    ngOnInit() {
        // setTimeout(() => {
        this.getReview();
        // }, 1000)
    }
    //check email
    mailValidator() {
        const error_message = { mailValidator: { msg: `Invalid email` } };
        const pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return (control) => {
            const isValid = pattern.test(control.value);
            return isValid ? null : error_message;
        };
    }
    // send review
    sendReview() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(this.reviewForm);
            const formData = Object.assign({}, this.reviewForm.value);
            //console.log('Form Data', formData);
            try {
                if (this.reviewForm.status == "VALID") {
                    const reviewData = {
                        nameReview: this.reviewForm.controls.nameReview.value,
                        emailReview: this.reviewForm.controls.emailReview.value,
                        messageReview: this.reviewForm.controls.messageReview.value,
                        // add also rating
                        stars: this.starRating
                    };
                    const fromServer = yield this.api.reviewMessages(reviewData);
                    console.log(fromServer);
                    // this.reviewMsg = fromServer;
                    this.reviewForm.reset();
                    this.getReview();
                    swal.fire({
                        icon: "success",
                        title: "success",
                        text: "Thanks For Request! We will contact you as soon as we can!",
                        type: "success"
                    });
                }
                else {
                    swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Please Fill Out The Form",
                        type: "warning"
                    });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // get review
    getReview() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fromServer = yield this.api.getMsgsReview();
            this.appState.reviewMsg = fromServer.data;
            console.log(this.appState.reviewMsg, 'reviewMsg from server');
        });
    }
    // getter to start working our validators (from form builder component)
    get name() { return this.reviewForm.get('nameReview'); }
    get email() { return this.reviewForm.get('emailReview'); }
    //get subject() { return this.contactsForm.get('subject') }
    get message() { return this.reviewForm.get('messageReview'); }
    openReview() {
        this.review = !this.review;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 23, vars: 4, consts: [[1, "wrapper"], [1, "home-carousel"], [1, "container"], [1, "main-info"], [1, "text"], [1, "google-review-wrapper"], [1, "reviews-container"], ["id", "google-reviews"], [1, "customer-reviews"], [4, "ngFor", "ngForOf"], [1, "write-reviews"], [1, "custom-reviews"], [3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["class", "fa fa-minus", 4, "ngIf"], ["id", "reviewForm", "name", "reviewForm", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "customer-name"], [1, "reviews-star-window"], [1, "fa", "fa-star"], [1, "customer-msg"], [1, "date"], [1, "fa", "fa-plus"], [1, "fa", "fa-minus"], ["id", "reviewForm", "name", "reviewForm", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6"], [1, "md-form", "mb-0"], ["formControlName", "nameReview", "type", "text", "id", "name", "name", "name", 1, "form-control"], ["for", "nameReview", 1, ""], [3, "it"], ["formControlName", "emailReview", "type", "text", "id", "email", "name", "email", 1, "form-control"], ["for", "Review", 1, ""], [1, "col-md-12"], [1, "star-review"], [1, "black-stars", 2, "width", "75px", "display", "flex"], ["class", "fa fa-star", 3, "click", 4, "ngFor", "ngForOf"], [1, "yellow-stars"], [3, "starWidth", "ratingClicked"], [1, "md-form"], ["formControlName", "messageReview", "type", "text", "id", "message", "name", "message", "rows", "2", 1, "form-control", "md-textarea"], ["for", "messageReview"], ["type", "submit", 1, "btn", "btn-secondary"], [1, "fa", "fa-star", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "WHAT IS PERMANENT MAKEUP?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Permanent makeup, also known as Intradermal Pigmentation, is a revolutionary method of applying natural pigments into the dermal layer of skin. This state-of-the-art technique is medically proven and specifically designed to be completely safe. Permanent makeup is used for a variety of cosmetic enhancements such as permanent eyebrows, eye liner, and lip liner/color. Other permanent makeup procedures include vitiligo, scar camouflage, areola restoration, hairline enhancement, and more. Permanent makeup has also been used to cover-up stretchmarks, birthmarks, freckles/age spots, and uneven skin discolorations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HomeComponent_li_15_Template, 17, 8, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_h2_click_18_listener() { return ctx.openReview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Live a review \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HomeComponent_i_20_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HomeComponent_i_21_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HomeComponent_form_22_Template, 33, 7, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.appState.reviewMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.review);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.review);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.review);
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_7__["FormValidatorComponent"], _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_8__["StarRatingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n.reviews-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);\n  margin: 40px auto;\n  max-width: 600px;\n  max-height: 450px;\n  padding: 30px;\n  overflow: hidden;\n}\n#google-reviews[_ngcontent-%COMP%] {\n  max-height: 450px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding-right: 15px;\n}\n.review-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.review-wrap[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n.author[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.author-img[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 10px;\n  max-width: 40px;\n  transition: -webkit-filter ease-in-out 0.3s;\n  transition: filter ease-in-out 0.3s;\n  transition: filter ease-in-out 0.3s, -webkit-filter ease-in-out 0.3s;\n}\n.author-img[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(2);\n          filter: brightness(2);\n}\n.author-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: gold;\n  padding-right: 2px;\n}\n.review[_ngcontent-%COMP%] {\n  clear: both;\n}\n.main-info[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n.main-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: 'Architects Daughter', cursive;\n}\n.main-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: justify;\n  padding: 50px 0;\n  font-family: 'Architects Daughter';\n  font-size: 20px;\n}\n.google-review-wrapper[_ngcontent-%COMP%] {\n  font-family: 'Architects Daughter';\n  font-size: 20px;\n  margin-bottom: 200px;\n}\n.google-review-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: 'Architects Daughter';\n  text-align: center;\n}\n.custom-reviews[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 50px 0;\n  cursor: pointer;\n}\n.customer-reviews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 25px 0;\n}\n.customer-reviews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .customer-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.star-review[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 10px 0;\n  padding: 10px 0;\n}\n.star-review[_ngcontent-%COMP%]   .black-stars[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 75px;\n  display: flex;\n}\n.star-review[_ngcontent-%COMP%]   .yellow-stars[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.reviews-star-window[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  color: forestgreen;\n  height: 20px;\n}\n.reviews-star-window[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.customer-msg[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255am9zcy9Eb2N1bWVudHMvd2FrZXVwYmVsbGlzaW1hL2Zyb250L3NyYy9hcHAvcGFydHMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYXJ0cy9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKO0FEQ0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENFO0VBQ0UsbUJBQUE7QUNDSjtBRENFO0VBQ0UsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsbUJBQUE7QUNDSjtBRENFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQUEsbUNBQUE7RUFBQSxvRUFBQTtBQ0NKO0FEQ0U7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDQ0o7QURDRTtFQUNFLGdCQUFBO0FDQ0o7QURDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0U7RUFDRSxXQUFBO0FDQ0o7QURHRTtFQUNFLGVBQUE7QUNESjtBREFFO0VBR0ksa0JBQUE7RUFDQSwyQ0FBQTtBQ0FOO0FESkU7RUFPSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUNBTjtBREdFO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNESjtBREZFO0VBS0ksa0NBQUE7RUFFQSxrQkFBQTtBQ0ROO0FES0U7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSk47QURTRTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtBQ1JOO0FES0U7RUFLTSxpQkFBQTtBQ1BSO0FEWUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDVko7QURPRTtFQUtJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNUTjtBREVFO0VBVUksa0JBQUE7QUNUTjtBRFlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNWSjtBREtFO0VBT0ksaUJBQUE7QUNUTjtBRFlFO0VBRUksaUJBQUE7QUNYTiIsImZpbGUiOiJzcmMvYXBwL3BhcnRzL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLnJldmlld3MtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYmEoMCwgMCwgMCAsMC41KTtcbiAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAjZ29vZ2xlLXJldmlld3Mge1xuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuICAucmV2aWV3LXdyYXAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnJldmlldy13cmFwOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAuYXV0aG9yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5hdXRob3ItaW1nIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgIHRyYW5zaXRpb246IGZpbHRlciBlYXNlLWluLW91dCAuM3M7XG4gIH1cbiAgLmF1dGhvci1pbWc6aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygyKTtcbiAgfVxuICAuYXV0aG9yLW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLnJhdGluZyBpIHtcbiAgICBjb2xvcjogZ29sZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIH1cbiAgLnJldmlldyB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cblxuXG4gIC5tYWluLWluZm8ge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICBoMSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInLCBjdXJzaXZlO1xuICAgIH1cbiAgICAudGV4dCB7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgcGFkZGluZzogNTBweCAwO1xuICAgICAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJztcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cbiAgLmdvb2dsZS1yZXZpZXctd3JhcHBlciB7XG4gICAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XG4gICAgaDIge1xuICAgICAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJztcbiAgICAgIC8vZm9udC1zaXplOiAyMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tcmV2aWV3cyB7XG4gICAgaDIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogNTBweCAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICB9XG5cbiAgLmN1c3RvbWVyLXJldmlld3Mge1xuICAgIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAyNXB4IDA7XG4gICAgICAuY3VzdG9tZXItbmFtZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zdGFyLXJldmlldyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAuYmxhY2stc3RhcnMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6NzVweDtcbiAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICB9XG4gICAgLnllbGxvdy1zdGFycyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICB9XG4gIC5yZXZpZXdzLXN0YXItd2luZG93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogZm9yZXN0Z3JlZW47XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGkge1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgfVxuICB9XG4gIC5jdXN0b21lci1tc2cge1xuICAgIGkge1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgfVxuICB9IiwiLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLnJldmlld3MtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2dvb2dsZS1yZXZpZXdzIHtcbiAgbWF4LWhlaWdodDogNDUwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLnJldmlldy13cmFwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5yZXZpZXctd3JhcDpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmF1dGhvciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uYXV0aG9yLWltZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1heC13aWR0aDogNDBweDtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIGVhc2UtaW4tb3V0IDAuM3M7XG59XG4uYXV0aG9yLWltZzpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygyKTtcbn1cbi5hdXRob3ItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ucmF0aW5nIGkge1xuICBjb2xvcjogZ29sZDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xufVxuLnJldmlldyB7XG4gIGNsZWFyOiBib3RoO1xufVxuLm1haW4taW5mbyB7XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cbi5tYWluLWluZm8gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0cyBEYXVnaHRlcicsIGN1cnNpdmU7XG59XG4ubWFpbi1pbmZvIC50ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZzogNTBweCAwO1xuICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZ29vZ2xlLXJldmlldy13cmFwcGVyIHtcbiAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbn1cbi5nb29nbGUtcmV2aWV3LXdyYXBwZXIgaDIge1xuICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3VzdG9tLXJldmlld3MgaDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA1MHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jdXN0b21lci1yZXZpZXdzIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMjVweCAwO1xufVxuLmN1c3RvbWVyLXJldmlld3MgbGkgLmN1c3RvbWVyLW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zdGFyLXJldmlldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5zdGFyLXJldmlldyAuYmxhY2stc3RhcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnN0YXItcmV2aWV3IC55ZWxsb3ctc3RhcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucmV2aWV3cy1zdGFyLXdpbmRvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiBmb3Jlc3RncmVlbjtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLnJldmlld3Mtc3Rhci13aW5kb3cgaSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmN1c3RvbWVyLW1zZyBpIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.less']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/parts/star-rating/star-rating.component.ts":
/*!************************************************************!*\
  !*** ./src/app/parts/star-rating/star-rating.component.ts ***!
  \************************************************************/
/*! exports provided: StarRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function StarRatingComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StarRatingComponent_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const star_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.checkedStar(star_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [1, 2, 3, 4, 5]; };
class StarRatingComponent {
    constructor() {
        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngOnChanges() {
        //this.starWidth = this.rating * 75 / 5;
    }
    checkedStar(icon) {
        // console.log(icon);
        this.rating = icon;
        this.ratingClicked.emit(this.rating);
        this.starWidth = this.rating * 92 / 5;
        console.log(this.starWidth, 'px');
    }
}
StarRatingComponent.ɵfac = function StarRatingComponent_Factory(t) { return new (t || StarRatingComponent)(); };
StarRatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarRatingComponent, selectors: [["app-star-rating"]], inputs: { rating: "rating", starWidth: "starWidth" }, outputs: { ratingClicked: "ratingClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 5, consts: [[1, "crop", 3, "title"], [2, "width", "92px", "display", "flex"], ["style", "color:yellow", "class", "fa fa-star", 3, "click", 4, "ngFor", "ngForOf"], [1, "fa", "fa-star", 2, "color", "yellow", 3, "click"]], template: function StarRatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StarRatingComponent_span_2_Template, 1, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.starWidth, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".crop[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\ndiv[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.black-stars[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n}\n.yellow-stars[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.yellow-stars[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255am9zcy9Eb2N1bWVudHMvd2FrZXVwYmVsbGlzaW1hL2Zyb250L3NyYy9hcHAvcGFydHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhcnRzL3N0YXItcmF0aW5nL3N0YXItcmF0aW5nLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBRENFO0VBQ0UsZUFBQTtBQ0NKO0FETUk7RUFDRSxrQkFBQTtFQUdBLFVBQUE7QUNOTjtBRFFJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDTk47QURJSTtFQUlJLGFBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL3BhcnRzL3N0YXItcmF0aW5nL3N0YXItcmF0aW5nLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyb3Age1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgZGl2IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAvLyAuc3Rhci1yZXZpZXcge1xuICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gICBtYXJnaW46IDEwcHggMDtcbiAgLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgLmJsYWNrLXN0YXJzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIC8vIHdpZHRoOiA3NXB4O1xuICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuICAgIC55ZWxsb3ctc3RhcnMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgfVxuICAgIH1cbiAgLy8gfSIsIi5jcm9wIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmRpdiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ibGFjay1zdGFycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbn1cbi55ZWxsb3ctc3RhcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG4ueWVsbG93LXN0YXJzIHNwYW4ge1xuICBjb2xvcjogeWVsbG93O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarRatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-star-rating',
                templateUrl: './star-rating.component.html',
                styleUrls: ['./star-rating.component.less']
            }]
    }], function () { return []; }, { rating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], starWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ratingClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _appState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appState */ "./src/app/appState.ts");





var url = 'http://localhost/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class ApiService {
    constructor(http) {
        this.http = http;
        this.appState = _appState__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    getPortfolioImgs() {
        return this.http.get(url + 'portfolio-imgs').toPromise();
    }
    register(userData) {
        return this.http.post(url + 'register', userData, httpOptions).toPromise();
    }
    login(userData) {
        return this.http.post(url + 'login', userData, httpOptions).toPromise();
    }
    logOut() {
        return this.http.get(url + 'log-out').toPromise();
    }
    upload(obj) {
        return this.http.post(url + 'upload2', obj, httpOptions).toPromise();
    }
    addNewFileToJson(fileName) {
        return this.http.post(url + 'add-new-file-to-json', { fileName }, httpOptions).toPromise();
    }
    deleteFromJson(item) {
        console.log(item, 'item from api');
        return this.http.get(url + 'deleteItem', item).toPromise();
    }
    removeImg(name) {
        return this.http.delete(url + `delete-img/${name}`).toPromise();
    }
    move(index, direction) {
        console.log('move');
        return this.http.post(url + 'move', { index, direction }, httpOptions).toPromise();
    }
    // about me
    contactsMail(mail) {
        return this.http.post(url + 'contacts-mail', mail, httpOptions).toPromise();
    }
    // set review
    reviewMessages(msg) {
        return this.http.post(url + 'review-msg', msg, httpOptions).toPromise();
    }
    // get review
    getMsgsReview() {
        return this.http.get(url + 'review-msgs').toPromise();
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StorageService {
    constructor() { }
    setItem(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }
    getItem(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        }
        catch (error) {
            console.log(error);
        }
    }
    clearItem(key) {
        localStorage.removeItem(key);
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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

module.exports = __webpack_require__(/*! /Users/tonyjoss/Documents/wakeupbellisima/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./parts/header/header.component");
var footer_component_1 = require("./parts/footer/footer.component");
var main_component_1 = require("./pages/main/main.component");
var home_component_1 = require("./parts/home/home.component");
var services_component_1 = require("./pages/services/services.component");
var portfolio_component_1 = require("./pages/portfolio/portfolio.component");
var about_us_component_1 = require("./pages/about-us/about-us.component");
var book_appointment_component_1 = require("./pages/book-appointment/book-appointment.component");
var auth_component_1 = require("./pages/auth/auth.component");
var google_maps_1 = require("@angular/google-maps");
// services
var api_service_1 = require("./services/api.service");
var storage_service_1 = require("./services/storage.service");
var form_validator_component_1 = require("./parts/form-validator/form-validator.component");
var redirector_component_1 = require("./pages/redirector/redirector.component");
var carousel_component_1 = require("./parts/carousel/carousel.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                main_component_1.MainComponent,
                home_component_1.HomeComponent,
                services_component_1.ServicesComponent,
                portfolio_component_1.PortfolioComponent,
                about_us_component_1.AboutUsComponent,
                book_appointment_component_1.BookAppointmentComponent,
                auth_component_1.AuthComponent,
                form_validator_component_1.FormValidatorComponent,
                redirector_component_1.RedirectorComponent,
                carousel_component_1.CarouselComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                google_maps_1.GoogleMapsModule
            ],
            providers: [api_service_1.ApiService, storage_service_1.StorageService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

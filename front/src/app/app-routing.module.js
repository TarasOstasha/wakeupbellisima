"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//components
var main_component_1 = require("./pages/main/main.component");
var services_component_1 = require("./pages/services/services.component");
var portfolio_component_1 = require("./pages/portfolio/portfolio.component");
var about_us_component_1 = require("./pages/about-us/about-us.component");
var book_appointment_component_1 = require("./pages/book-appointment/book-appointment.component");
var auth_component_1 = require("./pages/auth/auth.component");
var redirector_component_1 = require("./pages/redirector/redirector.component");
var routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: main_component_1.MainComponent },
    { path: 'services', component: services_component_1.ServicesComponent },
    { path: 'portfolio', component: portfolio_component_1.PortfolioComponent },
    { path: 'about-us', component: about_us_component_1.AboutUsComponent },
    { path: 'book-appointment', component: book_appointment_component_1.BookAppointmentComponent },
    { path: 'auth', component: auth_component_1.AuthComponent },
    { path: 'redirector', component: redirector_component_1.RedirectorComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//dvfdsfds

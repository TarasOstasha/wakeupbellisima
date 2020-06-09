"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var appState_1 = require("../appState");
var url = 'http://localhost/';
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.appState = appState_1["default"];
    }
    ApiService.prototype.getPortfolioImgs = function () {
        return this.http.get(url + 'portfolio-imgs').toPromise();
    };
    ApiService.prototype.register = function (userData) {
        return this.http.post(url + 'register', userData, httpOptions).toPromise();
    };
    ApiService.prototype.login = function (userData) {
        return this.http.post(url + 'login', userData, httpOptions).toPromise();
    };
    ApiService.prototype.logOut = function () {
        return this.http.get(url + 'log-out').toPromise();
    };
    ApiService.prototype.upload = function (obj) {
        return this.http.post(url + 'upload2', obj, httpOptions).toPromise();
    };
    ApiService.prototype.addNewFileToJson = function (fileName) {
        return this.http.post(url + 'add-new-file-to-json', { fileName: fileName }, httpOptions).toPromise();
    };
    ApiService.prototype.deleteFromJson = function (item) {
        console.log(item, 'item from api');
        return this.http.get(url + 'deleteItem', item).toPromise();
    };
    ApiService.prototype.removeImg = function (name) {
        return this.http["delete"](url + ("delete-img/" + name)).toPromise();
    };
    ApiService.prototype.move = function (index, direction) {
        console.log('move');
        return this.http.post(url + 'move', { index: index, direction: direction }, httpOptions).toPromise();
    };
    // about me
    ApiService.prototype.contactsMail = function (mail) {
        return this.http.post(url + 'contacts-mail', mail, httpOptions).toPromise();
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var FormValidatorComponent = /** @class */ (function () {
    function FormValidatorComponent() {
    }
    FormValidatorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], FormValidatorComponent.prototype, "it");
    FormValidatorComponent = __decorate([
        core_1.Component({
            selector: 'app-form-validator',
            templateUrl: './form-validator.component.html',
            styleUrls: ['./form-validator.component.less']
        })
    ], FormValidatorComponent);
    return FormValidatorComponent;
}());
exports.FormValidatorComponent = FormValidatorComponent;

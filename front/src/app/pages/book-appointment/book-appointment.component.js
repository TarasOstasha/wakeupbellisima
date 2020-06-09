"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var appState_1 = require("../../appState");
var forms_1 = require("@angular/forms");
var BookAppointmentComponent = /** @class */ (function () {
    function BookAppointmentComponent(formBuilder, api) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.appState = appState_1["default"];
        this.mail = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
        //google maps//
        // function initMap() {
        //   var map = new google.maps.Map(document.getElementById('map'), {
        //       zoom: 10,
        //       center: { lat: 40.9220642, lng: -74.0705113 }
        //   });
        //   // Create an array of alphabetical characters used to label the markers.
        //   var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        //   // Add some markers to the map.
        //   // Note: The code uses the JavaScript Array.prototype.map() method to
        //   // create an array of markers based on a given "locations" array.
        //   // The map() method here has nothing to do with the Google Maps API.
        //   var markers = locations.map(function (location, i) {
        //       return new google.maps.Marker({
        //           position: location,
        //           label: labels[i % labels.length]
        //       });
        //   });
        //   // Add a marker clusterer to manage the markers.
        //   var markerCluster = new MarkerClusterer(map, markers,
        //       { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
        // }
        // var locations = [
        //   // {lat: 40.9220642, lng: -74.0705113},
        //   { lat: 40.7449771, lng: -73.9874335 }
        // ];
        this.zoom = 12;
        this.options = {
            mapTypeId: 'hybrid',
            zoomControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true,
            maxZoom: 15,
            minZoom: 8
        };
        this.appState = appState_1["default"];
        this.contactsForm = this.formBuilder.group({
            'name': [this.mail.name, [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            'email': [this.mail.email, [forms_1.Validators.required, forms_1.Validators.minLength(5), this.mailValidator()]],
            'subject': [this.mail.subject, [forms_1.Validators.required, forms_1.Validators.minLength(15)]],
            'message': [this.mail.message, [forms_1.Validators.required, forms_1.Validators.minLength(10)]]
        });
    }
    BookAppointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // SWAL !!!!!!
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        });
    };
    //check email
    BookAppointmentComponent.prototype.mailValidator = function () {
        var error_message = { mailValidator: { msg: "Invalid email" } };
        var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return function (control) {
            var isValid = pattern.test(control.value);
            return isValid ? null : error_message;
        };
    };
    BookAppointmentComponent.prototype.sendContact = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formData, contactsData, fromServer, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.contactsForm);
                        formData = __assign({}, this.contactsForm.value);
                        console.log('Form Data', formData);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        console.log(this.contactsForm.status);
                        if (!(this.contactsForm.status == "VALID")) return [3 /*break*/, 3];
                        contactsData = {
                            userId: this.appState.header.user._id,
                            name: this.contactsForm.controls.name.value,
                            email: this.contactsForm.controls.email.value,
                            subject: this.contactsForm.controls.subject.value,
                            message: this.contactsForm.controls.message.value
                        };
                        return [4 /*yield*/, this.api.contactsMail(contactsData)];
                    case 2:
                        fromServer = _a.sent();
                        console.log(fromServer);
                        this.contactsForm.reset();
                        // sweet alert from https://lipis.github.io/bootstrap-sweetalert/
                        swal.fire({
                            icon: "success",
                            title: "success",
                            text: "Thanks For Request! We will contact you as soon as we can!",
                            type: "success"
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        swal.fire({
                            icon: "error",
                            title: "Error",
                            text: "Please Fill Out The Form",
                            type: "warning"
                        });
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(BookAppointmentComponent.prototype, "name", {
        // getter to start working our validators (from form builder component)
        get: function () { return this.contactsForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookAppointmentComponent.prototype, "email", {
        get: function () { return this.contactsForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookAppointmentComponent.prototype, "subject", {
        get: function () { return this.contactsForm.get('subject'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookAppointmentComponent.prototype, "message", {
        get: function () { return this.contactsForm.get('message'); },
        enumerable: true,
        configurable: true
    });
    BookAppointmentComponent.prototype.zoomIn = function () {
        if (this.zoom < this.options.maxZoom)
            this.zoom++;
    };
    BookAppointmentComponent.prototype.zoomOut = function () {
        if (this.zoom > this.options.minZoom)
            this.zoom--;
    };
    BookAppointmentComponent = __decorate([
        core_1.Component({
            selector: 'app-book-appointment',
            templateUrl: './book-appointment.component.html',
            styleUrls: ['./book-appointment.component.less']
        })
    ], BookAppointmentComponent);
    return BookAppointmentComponent;
}());
exports.BookAppointmentComponent = BookAppointmentComponent;

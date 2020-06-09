"use strict";
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
var http_1 = require("@angular/common/http");
var appState_1 = require("../../appState");
var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(api, http) {
        this.api = api;
        this.http = http;
        this.appState = appState_1["default"];
        this.url = this.appState.hostName;
        this.selectedFile = null;
        this.max_size_req = 10000; //99999
        this.files = {};
        this.round = function (x) { return Math.round(x); }; //progress bar
        this.progressBarPercent = 0;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var imageObserver;
            return __generator(this, function (_a) {
                this.reloadImg();
                imageObserver = new IntersectionObserver(function (entries, imgObserver) {
                    entries.forEach(function (entry) {
                        var lazyImage = entry.target;
                        if (entry.isIntersecting)
                            lazyImage.src = lazyImage.dataset.image;
                    });
                });
                document.querySelectorAll('img').forEach(function (v) {
                    imageObserver.observe(v);
                });
                return [2 /*return*/];
            });
        });
    };
    PortfolioComponent.prototype.reloadImg = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fromServer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.destroyFancy();
                        return [4 /*yield*/, this.api.getPortfolioImgs()];
                    case 1:
                        fromServer = _a.sent();
                        this.appState.portfolioImg = fromServer;
                        return [2 /*return*/];
                }
            });
        });
    };
    // << -- fancybox -- >> \\
    PortfolioComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $('[data-fancybox="gallery"]').fancybox({
            // Options will go here
            });
        });
    };
    PortfolioComponent.prototype.ngOnDestroy = function () {
        this.destroyFancy();
        //$(".fancybox").unbind('click.fb');
        // or maybe jQuery(".fancybox").off() to remove all bindings
    };
    PortfolioComponent.prototype.destroyFancy = function () {
        // $(".fancybox").unbind('click.fb');
    };
    // << -- end fancybox -- >> \\
    PortfolioComponent.prototype["delete"] = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var fromServer;
            return __generator(this, function (_a) {
                fromServer = this.api.removeImg(name);
                console.log(fromServer);
                return [2 /*return*/];
            });
        });
    };
    PortfolioComponent.prototype.moveRight = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var fromServer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.move(index, 'right')];
                    case 1:
                        fromServer = _a.sent();
                        console.log(fromServer);
                        this.reloadImg();
                        return [2 /*return*/];
                }
            });
        });
    };
    PortfolioComponent.prototype.moveLeft = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var fromServer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.move(index, 'left')];
                    case 1:
                        fromServer = _a.sent();
                        console.log(fromServer);
                        this.reloadImg();
                        return [2 /*return*/];
                }
            });
        });
    };
    PortfolioComponent.prototype.onImagePicked = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    };
    PortfolioComponent.prototype.filePicker = function () {
        //const file = (event.target as HTMLInputElement).files[0];
        console.log(this.selectedFile.name);
        var fd = new FormData;
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost/' + 'upload-img', this.selectedFile.name, {
            reportProgress: true,
            observe: 'events'
        }).subscribe(function (event) {
            if (event.type == http_1.HttpEventType.UploadProgress) {
                console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
            }
            else if (event.type == http_1.HttpEventType.Response)
                console.log(event);
        });
        //const fromServer: any = this.api.pickedImg(fd);
        //console.log(fromServer);
    };
    PortfolioComponent.prototype.onChange = function (el) {
        var _this = this;
        this.files = document.getElementById('upload').files; // file == {  name: "OhdIJZy8H7o.jpg", lastModified: 1467921666657,  lastModifiedDate: Date 2016-07-07T20:01:06.657Z,  size: 214450,  type: "image/jpeg"   }
        this.uploaded = 0;
        this.upload_i = 0;
        console.log('this files', this.files);
        //step one - remove first example photo
        this.appState.previews = this.appState.previews.filter(function (elem) {
            console.log(elem, '!!!!! ELEM !!!');
            return (elem.reader.result == "assets/400x300.png") ? false : true;
        });
        this.fileQuantity = this.files.length;
        this.fileCounter = 1;
        var file = this.files[0];
        var _loop_1 = function (i) {
            var reader = new FileReader();
            reader.onloadend = function () {
                _this.appState.previews.push({
                    reader: reader
                });
                // preview.src = reader.result;
            };
            reader.readAsDataURL(this_1.files[i]);
        };
        var this_1 = this;
        //log('file', file)
        //log('file size', file.size)
        //log('TIMES:::::: ', times)
        /// this.appState.currentNewProductImg = 'http://localhost/uploads/img' + file.name;
        //preview
        //const preview: any = document.querySelector('img');
        for (var i = 0; i < this.files.length; i++) {
            _loop_1(i);
        }
        ;
        this.upload(file);
    };
    PortfolioComponent.prototype.upload = function (file) {
        var _this = this;
        var times = Math.ceil(file.size / this.max_size_req) + 1; //amount of peases 
        this.times = times;
        console.log('upload begin', this.upload_i);
        var max = this.max_size_req;
        // next step
        this.upload_i++;
        // set a range
        var begin = (this.upload_i - 1) * max;
        var end = begin + max;
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
        fileReader.onload = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var piece, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.progressPercent();
                        piece = {
                            load_type: load_type,
                            name: file.name,
                            data: fileReader.result // ... data
                        };
                        return [4 /*yield*/, this.api.upload(piece)];
                    case 1:
                        data = _a.sent();
                        //repeat to upload first and middle chunks   
                        console.log('i: ', this.upload_i, 'from', this.times);
                        if (!(times > this.upload_i)) return [3 /*break*/, 2];
                        this.upload(file);
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(times == this.upload_i)) return [3 /*break*/, 4];
                        this.fileCounter++;
                        //upload next file?
                        console.log('loaded', this.fileCounter);
                        // alert('good job');
                        if (this.fileQuantity >= this.fileCounter) {
                            this.uploadNextFile();
                        }
                        //alert('success')
                        return [4 /*yield*/, this.api.addNewFileToJson(file.name)];
                    case 3:
                        //alert('success')
                        _a.sent();
                        this.reloadImg();
                        swal.fire({
                            title: "Good job!",
                            text: "File successfully added",
                            icon: "success"
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
    };
    PortfolioComponent.prototype.sendImg = function () {
        var file = this.files[this.fileCounter - 1]; //current upload file
        this.upload(file);
    };
    PortfolioComponent.prototype.uploadNextFile = function () {
        var file = this.files[this.fileCounter - 1]; //current upload file
        //3 0
        var times = Math.ceil(file.size / this.max_size_req) + 1; //amount of peases 
        this.upload_i = 0;
        console.log('this is upload', file, times, this.fileCounter); //undefined
        this.upload(file);
    };
    PortfolioComponent.prototype.progressPercent = function () {
        var _this = this;
        setTimeout(function () {
            _this.progressBarPercent = _this.round(100 / _this.times * _this.upload_i);
            console.log(_this.progressBarPercent);
        });
    };
    PortfolioComponent = __decorate([
        core_1.Component({
            selector: 'app-portfolio',
            templateUrl: './portfolio.component.html',
            styleUrls: ['./portfolio.component.less']
        })
    ], PortfolioComponent);
    return PortfolioComponent;
}());
exports.PortfolioComponent = PortfolioComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
//import { trigger, transition, style, animate, keyframes, query, stagger } from '@angular/animations';
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
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
    CarouselComponent.prototype.ngOnInit = function () {
        this.carousel = document.querySelector('.carousel');
        //console.log(this.slide, 'this.slide ngOnInit')
        var delay = 5000; //ms
        this.endSlider = this.imgSlides.length - 1; // останній елемент в масиві
        this.startSlider = this.imgSlides[0]; // 1 елемент в масиві
        this.centerSlideWidth = this.sliderWidth(); // set full img width
        setInterval(function () {
            //this.moveRight()
        }, delay);
    };
    CarouselComponent.prototype.sliderWidth = function () {
        return this.carousel.offsetWidth;
    };
    CarouselComponent.prototype.moveLeft = function () {
        this.counter--;
        var lastImg = this.imgSlides.length - 1;
        console.log(this.counter);
        this.slide = this.slide + this.sliderWidth();
        if (this.counter <= 0) {
            this.counter = lastImg + 1;
            return this.slide = -this.sliderWidth() * lastImg;
        }
    };
    CarouselComponent.prototype.moveRight = function () {
        this.counter++;
        var lastImg = this.imgSlides.length - 1;
        this.nextSlide = this.sliderWidth();
        this.nextSlider = 1;
        this.nextSlide = 0;
        this.slide = this.slide - this.sliderWidth();
        if (this.counter >= lastImg) {
            console.log(this.slide, 'if else move right', this.counter, 'if else move right');
            this.counter = 1;
            this.slide = 0;
        }
    };
    CarouselComponent = __decorate([
        core_1.Component({
            selector: 'app-carousel',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.less']
        })
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;

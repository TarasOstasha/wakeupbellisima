import { Component, OnInit } from '@angular/core';
//import { trigger, transition, style, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  imgSlides: any = [
    { img: '../../assets/imgs/banner.jpg' },
    { img: '../../assets/imgs/bgService.jpg' },
    { img: '../../assets/imgs/banner3.jpg' },
    { img: '../../assets/imgs/banner4.jpg' },
    { img: '../../assets/imgs/banner5.jpg' },
    { img: '../../assets/imgs/banner6.jpg' },
    { img: '../../assets/imgs/banner7.jpg' },
  ]

  imgSlidesMobile = 
    { img: '../../assets/imgs/mobile.jpg' }
  

  currentSlide = 0;
  startSlider;
  nextSlider = null;


  endSlider;
  public carousel: any;

  public slide: any = 0;
  nextSlide: any = 0;
  centerSlideWidth: any;



  ngOnInit() {
    this.carousel = document.querySelector('.carousel');
    //console.log(this.slide, 'this.slide ngOnInit')
    const delay = 5000; //ms
    this.endSlider = this.imgSlides.length - 1; // останній елемент в масиві
    this.startSlider = this.imgSlides[0]; // 1 елемент в масиві

    this.centerSlideWidth = this.sliderWidth(); // set full img width
    setInterval(() => {
      //this.moveRight()
    }, delay)

  }

  sliderWidth() {
    return this.carousel.offsetWidth;
  }


  counter: number = 1;
  moveLeft() {
    this.counter--;
    const lastImg = this.imgSlides.length - 1;
    console.log(this.counter)
    this.slide = this.slide + this.sliderWidth();
    if (this.counter <= 0) { this.counter = lastImg + 1; return this.slide = -this.sliderWidth() * lastImg; }
  }
  moveRight() {
    //console.log(this.sliderWidth())
    this.counter++
    const lastImg = this.imgSlides.length - 1;
    this.nextSlide = this.sliderWidth();
    this.nextSlider = 1;
    this.nextSlide = 0;
    this.slide = this.slide - this.sliderWidth();

    if (this.counter >= lastImg) {
      console.log(this.slide, 'if else move right', this.counter, 'if else move right')
      this.counter = 1;
      this.slide = 0;

    }
  }



}




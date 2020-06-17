import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less']
})
export class AboutUsComponent implements OnInit {
  public slideWidth: any;

  constructor() { }

  ngOnInit() {
    
    this.autoStart();
  }

  certificates = [
    { url: '../../../assets/imgs/certificate1.jpg' },
    { url: '../../../assets/imgs/certificate2.jpg' },
    { url: '../../../assets/imgs/certificate3.jpg' },
    { url: '../../../assets/imgs/certificate4.jpg' },
    { url: '../../../assets/imgs/certificate5.jpg' },
    { url: '../../../assets/imgs/certificate6.jpg' },
    { url: '../../../assets/imgs/certificate7.jpg' },
    { url: '../../../assets/imgs/certificate8.jpg' },
  ]

  currentSlide = 0;
  startSlider;
  nextSlider = null;
  endSlider;
  public carousel: any;
  public slide: any = 0;
  nextSlide: any = 0;
  centerSlideWidth: any;
  counter: number = 1;


  move(event) {
    this.slideWidth = document.querySelector('.slides');
    if (event.target.classList[2] == 'left') {
      //const direction = event.target.classList[2];
      //console.log(direction);
      this.counter--;
      const lastImg = this.certificates.length - 1;
      console.log(this.counter, 'counter')
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
    }, 3000)
  }

  // get dynamically width of <li> 
  sliderWidth() {
    return this.slideWidth.offsetWidth;
  }

}



/// make code shorter. Use in ngOnInit function move() with parameter direction(left or write) !! ASK!!!!!!!!
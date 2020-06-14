import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less']
})
export class AboutUsComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {}

  certificates = [
    { url: '../../../assets/imgs/certificate1.jpg' },
    { url: '../../../assets/imgs/certificate2.jpg' },
    { url: '../../../assets/imgs/certificate3.jpg' },
    { url: '../../../assets/imgs/certificate4.jpg' },
    { url: '../../../assets/imgs/certificate5.jpg' },
    { url: '../../../assets/imgs/certificate6.jpg' },
    { url: '../../../assets/imgs/certificate7.jpg' },
    { url: '../../../assets/imgs/certificate8.jpg' }
  ]

}

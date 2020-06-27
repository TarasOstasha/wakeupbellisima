import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
import appState from '../../appState';

@Component({
  selector: 'app-working-process',
  templateUrl: './working-process.component.html',
  styleUrls: ['./working-process.component.less']
})
export class WorkingProcessComponent implements OnInit {
  appState = appState;

  workingProcess = [
    { url: '../../../assets/imgs/working-process/1.jpg' },
    { url: '../../../assets/imgs/working-process/2.jpg' },
    { url: '../../../assets/imgs/working-process/3.jpg' },
    { url: '../../../assets/imgs/working-process/4.jpg' },
    { url: '../../../assets/imgs/working-process/5.jpg' },
    { url: '../../../assets/imgs/working-process/6.jpg' },
    { url: '../../../assets/imgs/working-process/7.jpg' },
    { url: '../../../assets/imgs/working-process/8.jpg' },
    { url: '../../../assets/imgs/working-process/9.jpg' },
    { url: '../../../assets/imgs/working-process/10.jpg' },
    { url: '../../../assets/imgs/working-process/11.jpg' }
  ]

  constructor() { }

  ngOnInit(): void {
    $(".photoGroup").fancybox(); // to start fancyBox. However it's working without this line
  }

}

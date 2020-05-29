import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import appState from '../../appState';

declare var jQuery: any

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})

export class PortfolioComponent implements AfterViewInit, OnDestroy {
  appState = appState;
  url = this.appState.hostName;

  constructor(private api: ApiService) { }

  async ngOnInit() {
    const fromServer: any = await this.api.getPortfolioImgs();
    this.appState.portfolioImg = fromServer;
    this.initFancy();
    console.log(fromServer);
  }



  initFancy() {
    jQuery(document).ready(function () { //Photos Gallery
      jQuery(".fancybox").fancybox({
        openEffect: "elastic",
        closeEffect: "none"
      });
    });
  }
  // fancybox
  ngAfterViewInit() {
  //   jQuery(document).ready(function () { //Photos Gallery
  //     jQuery(".fancybox").fancybox({
  //       openEffect: "elastic",
  //       closeEffect: "none"
  //     });
  //   });
  }
  ngOnDestroy() {
   //jQuery(".fancybox").unbind('click.fb');
    // or maybe jQuery(".fancybox").off() to remove all bindings
  }


}

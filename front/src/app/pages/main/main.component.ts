import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(    
    //private facebookService: FacebookService
    //private fb: FacebookService
    ) { 
    //   const initParams: InitParams = {
    //     appId: '1234566778',
    //     xfbml: true,
    //     version: 'v2.8'
    //   };
   
    //   fb.init(initParams);
    // }
    // loginWithFacebook(): void {
 
    //   this.fb.login()
    //     .then((response: LoginResponse) => console.log(response))
    //     .catch((error: any) => console.error(error));
    }

  ngOnInit() {
    //this.initFacebookService();
  }

  // private initFacebookService(): void {
  //   const initParams: InitParams = { xfbml:true, version:"v3.2"};
  //   this.facebookService.init(initParams);
  // }

}

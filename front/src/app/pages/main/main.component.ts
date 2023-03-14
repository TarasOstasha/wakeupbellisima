import { Component, OnInit } from "@angular/core";
import { FacebookService, InitParams, LoginResponse } from "ngx-facebook";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.less"],
})
export class MainComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) //private facebookService: FacebookService
  //private fb: FacebookService
  {
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
    // meta
    this.title.setTitle("Micro-pigmentation/permament makeup for eyebrows, lips and eyeliner");
    this.meta.addTags([
      {
        name: "description",
        content:
          "Wake up bellisima each morninng, feel beautiful naturally. Painless, safe and simple",
      },
      { name: "robots", content: "index, follow" },
      { charset: "UTF-8" },
      { name: "keywords", content: "Permament makeup expert" },
    ]);
  }

  // private initFacebookService(): void {
  //   const initParams: InitParams = { xfbml:true, version:"v3.2"};
  //   this.facebookService.init(initParams);
  // }
}

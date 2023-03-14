import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from 'rxjs/operators';
import { Meta } from "@angular/platform-browser";
declare let gtag: Function;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  title = "front";

  constructor(private router: Router, private meta: Meta) {}

  ngOnInit() {
    this.setUpAnalytics();
    // this.meta.addTags([
    //   { name: 'title', content: 'portfolio' },
    //   { name: 'description', content: 'Main Page META description' },
    //   { name: 'keywords', content: 'main page meta keywords' }  
    // ]);
  }

  setUpAnalytics() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        gtag("config", "UA-124847265-1", {
          page_path: event.urlAfterRedirects,
        });
      });
  }
}

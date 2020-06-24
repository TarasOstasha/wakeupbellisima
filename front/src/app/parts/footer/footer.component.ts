import { Component, OnInit } from '@angular/core';
import appState from '../../appState';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  appState = appState;
  constructor() { }

  ngOnInit() {
  }

}

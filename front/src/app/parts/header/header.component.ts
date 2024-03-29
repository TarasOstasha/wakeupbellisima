import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import appState from '../../appState';
import { ApiService } from '../../services/api.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  appState = appState;
  subMenuFlag: boolean = false;
  navbarCollapse: boolean = false;


  servicesSub = [
    { name: 'Eyes', route: '/eyes' },
    { name: 'Lips', route: '/lips' },
    { name: 'Corrective', route: '/corrective' }
  ]

  constructor(
    private router: Router,
    private api: ApiService,
    private storage: StorageService,
  ) { }

  ngOnInit() {
    console.log(appState.header.user)
    //if(appState.header.isLogged == false) { alert('null') } 
    //appState.header.user.userName = this.storage.getItem('user');
    const userStorage = this.storage.getItem('user');
    if(userStorage) appState.header.user = userStorage;

  }

  toLogin() {
    // save page to redirector
    const currentPage = location.pathname
    localStorage.setItem('toRedirect', currentPage);
    // redirect to login
    this.router.navigateByUrl('/auth');
  }

  async logOut() {
    console.log('log out')
    const fromServer: any = await this.api.logOut();
    console.log(fromServer, fromServer.ok)
    if (fromServer.ok) {
      console.log('IF LOGOUT')
      // reset user
      this.storage.clearItem('user');
      location.reload();
    }
  }

  showServicesSubMenu() {
    //console.log('show toogle');
    this.subMenuFlag = true;
  }

  hideServicesSubMenu() {
   // console.log('hide toogle');
    this.subMenuFlag = false;
  }

  toggleNavbar() {
    this.navbarCollapse = !this.navbarCollapse;
  }

}

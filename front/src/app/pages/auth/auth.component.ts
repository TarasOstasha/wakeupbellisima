import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { User } from '../../interfaces/user';
import { ApiService } from '../../services/api.service';
import appState from '../../appState';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

import * as jwt_decode from 'jwt-decode';


declare var swal: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  appState: any;
  authForm: FormGroup;

  username: any;
  email: any;
  password: any;

  user: User = {
    userName: '',
    password: '',
    email: '',
    role: 'Guest',
  };

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private storage: StorageService
  ) {
    this.appState = appState;

    this.authForm = this.formBuilder.group({
      'email': [this.user.email, [Validators.required, Validators.minLength(5), this.mailValidator()]],
      'userName': [this.user.userName, [Validators.required, Validators.minLength(3)]],
      'password': [this.user.password, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      'role': [this.user.role, [Validators.required]]
    });
  }

  //check email
  private mailValidator(): ValidatorFn {
    const error_message = { mailValidator: { msg: `Invalid email` } };
    const pattern: RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return (control: AbstractControl) => {
      const isValid = pattern.test(control.value);
      return isValid ? null : error_message
    }
  }



  ngOnInit() {
  }




  async signUp() {
    try {
      // create via data binding NgModel - another vay -> event.target.name.value
      const userData = {
        name: this.authForm.controls.userName.value,
        email: this.authForm.controls.email.value,
        password: this.authForm.controls.password.value
      }
      //console.log(userData, 'user data')

      const fromServer: any = await this.api.register(userData);
      //if (fromServer.ok) this.router.navigateByUrl('/redirector'); //old
      if (fromServer.ok) {
        swal.fire({
          title: "Success",
          text: "Your account has been created!\nPlease, log in into your account",
          icon: "success",
        })
        this.router.navigateByUrl('/redirector');
      }

    } catch (error) {
      swal.fire({
        title: "Error",
        text: "Please, fill out this form!",
        icon: "error",
      })
      console.log(error)
    }
  }
  disabledFlag: boolean;
  async singIn() {
    try {
      if(this.authForm.controls.email.value == '' || this.authForm.controls.password.value == '') {
        swal.fire({
          title: "Error",
          text: "Please, enter valid value",
          icon: "error",
        });
        return false;
      }
      //console.log(this.authForm)
      const userData = {
        email: this.authForm.controls.email.value,
        password: this.authForm.controls.password.value
      }
      const fromServer: any = await this.api.login(userData);
      console.log(fromServer);
      const token = fromServer.token;
      var decoded = jwt_decode(token);
      if (fromServer.ok) this.router.navigateByUrl('/redirector');
      //this.appState.header.user = fromServer.user;
      this.appState.header.user = decoded;
      this.storage.setItem('user', this.appState.header.user)
    } catch (error) {
      swal.fire({
        title: "Error",
        text: "Please, enter valid value",
        icon: "error",
      })
      console.log(error)
    }
  }


}

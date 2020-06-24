import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
declare var swal: any;
import appState from '../../appState';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  review: boolean = false;
  paragraphFlag: boolean = false;
  //reviewMsg: any;
  starRating: any;
  reviewForm: FormGroup;
  appState = appState;

  starWidth: number;
  rating: number;

  onRatingClicked(message: string): void {
    this.starRating = message
    console.log(this.starRating)
  }

  checkedStar(icon) {
    this.starWidth = icon * 92 / 5;
    console.log(icon)
    console.log(this.starWidth, 'px')
  }
  

  mail: any = {
    nameReview: '',
    emailReview: '',
    rating: '',
    messageReview: ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,

  ) {
    this.reviewForm = this.formBuilder.group({
      'nameReview': [this.mail.nameReview, [Validators.required, Validators.minLength(2)]],
      'emailReview': [this.mail.Review, [Validators.required, Validators.minLength(5), this.mailValidator()]],
      // 'subject': [this.mail.subject, [Validators.required, Validators.minLength(15)]],
      'messageReview': [this.mail.Review, [Validators.required, Validators.minLength(3)]],
    })
  }
  ngOnInit() {
    // setTimeout(() => {
      this.getReview();
    // }, 1000)

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

  // send review
  async sendReview() {
    //console.log(this.reviewForm);
    const formData = { ...this.reviewForm.value }
    //console.log('Form Data', formData);
    try {
      if (this.reviewForm.status == "VALID") {
        const reviewData = {
          nameReview: this.reviewForm.controls.nameReview.value,
          emailReview: this.reviewForm.controls.emailReview.value,
          messageReview: this.reviewForm.controls.messageReview.value,
          // add also rating
          stars: this.starRating
        }
        const fromServer = await this.api.reviewMessages(reviewData);
        console.log(fromServer)
        // this.reviewMsg = fromServer;
        this.reviewForm.reset();
        this.getReview();
        swal.fire({
          icon: "success",
          title: "success",
          text: "Thank you for the review!",
          type: "success"
        })
      } else {
        swal.fire({
          icon: "error",
          title: "Error",
          text: "Please Fill Out The Form",
          type: "warning"
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  // get review
  async getReview() {
    const fromServer: any = await this.api.getMsgsReview();
    this.appState.reviewMsg = fromServer.data;
    console.log(this.appState.reviewMsg, 'reviewMsg from server')

  }

  // getter to start working our validators (from form builder component)
  get name() { return this.reviewForm.get('nameReview') }
  get email() { return this.reviewForm.get('emailReview') }
  //get subject() { return this.contactsForm.get('subject') }
  get message() { return this.reviewForm.get('messageReview') }



  openReview() {
    this.review = !this.review;
  }

  switchTextFlag() {
    this.paragraphFlag = !this.paragraphFlag;
  }

}

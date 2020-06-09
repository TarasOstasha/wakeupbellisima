import { Component, OnInit } from '@angular/core';
import appState from '../../appState';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
declare var swal: any;

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.less']
})
export class BookAppointmentComponent implements OnInit {
  appState = appState;
  contactsForm: FormGroup;

  mail: any = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,

  ) {
    this.appState = appState;

    this.contactsForm = this.formBuilder.group({
      'name': [this.mail.name, [Validators.required, Validators.minLength(5)]],
      'email': [this.mail.email, [Validators.required, Validators.minLength(5), this.mailValidator()]],
      'subject': [this.mail.subject, [Validators.required, Validators.minLength(15)]],
      'message': [this.mail.message, [Validators.required, Validators.minLength(10)]],
    })
  }

  ngOnInit() {
    // SWAL !!!!!!
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
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

  async sendContact() {
    console.log(this.contactsForm);
    const formData = { ...this.contactsForm.value }
    console.log('Form Data', formData);

    try {
      console.log(this.contactsForm.status)
      if (this.contactsForm.status == "VALID") {
        const contactsData = {
          userId: this.appState.header.user._id,
          name: this.contactsForm.controls.name.value,
          email: this.contactsForm.controls.email.value,
          subject: this.contactsForm.controls.subject.value,
          message: this.contactsForm.controls.message.value
        }
        const fromServer = await this.api.contactsMail(contactsData);
        console.log(fromServer)
        this.contactsForm.reset();
        // sweet alert from https://lipis.github.io/bootstrap-sweetalert/
        swal.fire({
          icon: "success",
          title: "success",
          text: "Thanks For Request! We will contact you as soon as we can!",
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
  // getter to start working our validators (from form builder component)
  get name() { return this.contactsForm.get('name') }
  get email() { return this.contactsForm.get('email') }
  get subject() { return this.contactsForm.get('subject') }
  get message() { return this.contactsForm.get('message') }





  //google maps//
// function initMap() {

//   var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 10,
//       center: { lat: 40.9220642, lng: -74.0705113 }
//   });

//   // Create an array of alphabetical characters used to label the markers.
//   var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//   // Add some markers to the map.
//   // Note: The code uses the JavaScript Array.prototype.map() method to
//   // create an array of markers based on a given "locations" array.
//   // The map() method here has nothing to do with the Google Maps API.
//   var markers = locations.map(function (location, i) {
//       return new google.maps.Marker({
//           position: location,
//           label: labels[i % labels.length]
//       });
//   });

//   // Add a marker clusterer to manage the markers.
//   var markerCluster = new MarkerClusterer(map, markers,
//       { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
// }
// var locations = [
//   // {lat: 40.9220642, lng: -74.0705113},
//   { lat: 40.7449771, lng: -73.9874335 }

// ];

zoom = 12
center: google.maps.LatLngLiteral
options: google.maps.MapOptions = {
  mapTypeId: 'hybrid',
  zoomControl: false,
  scrollwheel: false,
  disableDoubleClickZoom: true,
  maxZoom: 15,
  minZoom: 8,
}

zoomIn() {
  if (this.zoom < this.options.maxZoom) this.zoom++
}

zoomOut() {
  if (this.zoom > this.options.minZoom) this.zoom--
}





}

import { Component, OnInit } from '@angular/core';
import appState from '../../appState';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
declare var swal: any;
import { MouseEvent } from '@agm/core';
import { Marker } from '../../interfaces/marker';
declare var jQuery: any;
declare var $: any;

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
          //type: "success"
        })
      } else {
        swal.fire({
          icon: "error",
          title: "Error",
          text: "Please Fill Out The Form",
          //type: "warning"
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
// latitude: 40.84004824998276; // Carlstadt
// longitude: -74.0906907105334;

// onChooseLocation(event) {
//   this.latitude = event.coords.lat;
//   this.longitude = event.coords.lng;
//   console.log(event);
// }



////////////
// google maps zoom level
zoom: number = 15;
  
// initial center position for the map
lat: number = 40.84004824998276;
lng: number = -74.0906907105334;

clickedMarker(label: string, index: number) {
  console.log(`clicked the marker: ${label || index}`)
}

mapClicked($event: MouseEvent) {
  this.markers.push({
    lat: $event.coords.lat,
    lng: $event.coords.lng,
    draggable: true
  });
}

markerDragEnd(m: Marker, $event: MouseEvent) {
  console.log('dragEnd', m, $event);
}

markers: Marker[] = [
  {
    lat: 40.84004824998276,
    lng: -74.0906907105334,
    label: 'Wake Up Bellisima',
    draggable: true
  },
  // you can create more markers
  // {
  //   lat: 51.373858,
  //   lng: 7.215982,
  //   label: 'B',
  //   draggable: false
  // },
  // {
  //   lat: 51.723858,
  //   lng: 7.895982,
  //   label: 'C',
  //   draggable: true
  // }
]
}
// just an interface for type safety.
// interface marker {
// 	lat: number;
// 	lng: number;
// 	label?: string;
// 	draggable: boolean;
// }

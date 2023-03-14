import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
  NgForm,
} from "@angular/forms";
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpEventType,
  HttpRequest,
} from "@angular/common/http";
import appState from "../../appState";
import { ApiService } from "../../services/api.service";
import { mimeType } from "./mime-type.validator";
import { pipe } from "rxjs";
import { map } from "rxjs/operators";
import { Meta, Title } from "@angular/platform-browser";

export interface Service {
  _id: string;
  serviceName: string;
  serviceInfo: string;
  imagePath: string;
}

declare var $: any;
declare var swal: any;

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.less"],
})
export class ServicesComponent implements OnInit {
  // @ViewChild("sendPost", { static: false }) sendPost: NgForm;
  @ViewChild("closeMyModal", { static: false }) closeMyModal: ElementRef;
  @ViewChild("editInfo", { static: false }) editInfo: ElementRef;
  @ViewChild("filePicker") filePicker: ElementRef;
  @ViewChild("myProgress") myProgressRef: ElementRef;
  progressBar: HTMLElement;
  progressPercentage: number = 0;

  appState = appState;
  serviceInfo; //: Service[] = [];

  serviceForm: FormGroup;
  editServiceForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _api: ApiService,
    private _http: HttpClient,
    private meta: Meta,
    private title: Title
  ) {}

  async ngOnInit() {
    // meta
    this.title.setTitle("Permament makeup removal | lips | eye liner | eyebrows ");
    this.meta.addTags([
      {
        name: "description", content: "Nataliya is an expert in application and removal of permament makeup for eyebrows, eyeliner and lips",
      },
      { name: "robots", content: "index, follow" },
      { charset: "UTF-8" },
      { name: "keywords", content: "application and removal of permament makeup" },
    ]);
    // this.serviceForm = this._formBuilder.group({
    //   serviceName: ['', [Validators.required] ],
    //   serviceInfo: ['', [Validators.required, ] ],
    //   filePicker: ['', [Validators.required, ] ]
    // })

    // for dit sevice
    this.editServiceForm = new FormGroup({
      serviceName: new FormControl(),
      serviceInfo: new FormControl(),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });

    // for add service
    this.serviceForm = new FormGroup({
      serviceName: new FormControl(),
      serviceInfo: new FormControl(),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });

    this.getServicePosts(); // get all services posts from the server
  }

  async getServicePosts() {
    const fromServer: any = await this._api.getServicePosts();
    appState.servicesImg = fromServer.data;
    //console.log(this.appState);
  }

  // serviceInfo: Service[] = [
  //   {
  //     h3: 'Lip Liner/Color',
  //     info: `The Intradermal Pigmentation procedure for lip color is beautiful.
  //     It can appear to change the size and shape of the lips as well as the color.
  //     This procedure helps prevent lipstick from bleeding into the surrounding skin.
  //     Many people request a soft pink, similar to the lip color to that of an infant,
  //     for those who want a natural look. Others may desire a dramatic effect.`,
  //     url: '../../../assets/imgs/1.jpg'
  //   },
  //   {
  //     h3: 'Eyebrows / Eyebrow & Hairline Strokes',
  //     info: `The Intradermal Pigmentation procedure for eyebrows can mimic the appearance
  //     of hair in the brow line. Anyone who desires more fullness of the brows will
  //     love the procedure (and the time saved not applying makeup!) Those who used
  //     to apply pencil can go swimming, play tennis, or wipe their forehead without
  //     the embarrassment of losing their eyebrows. Those suffering from alopecia
  //     (hair loss) are pleasantly surprised at how natural it looks.`,
  //     url: '../../../assets/imgs/eyebrows.jpg'
  //   },
  //   {
  //     h3: 'Eyeliner & Designer Eyeliner',
  //     info: `Eyeliner & Designer Eyeliner A subtle, natural look, mimicking thousands of tiny
  //     eyelashes with the implantation of pigments in the lash line is popular with both
  //     male and female clients. Additional shadowing of color can be added for a soft
  //     natural liner or a more bold, definite line can be achieved. Ophthalmologists
  //     recommend Intradermal Cosmetic procedures for those who are allergic to conventional
  //     makeup and for those wearing contact lenses.`,
  //     url: '../../../assets/imgs/3.jpg'
  //   },
  //   {
  //     h3: 'Eyelash Lifting',
  //     info: `Eyelash Extensions look like real lashes with a natural and weightless feel.
  //     These lashes are considered a “semi-permanent,” and are applied by attaching
  //     a synthetic eyelash to your natural eyelash. The application is painless;
  //     the final result is beautiful accented eyes! They are Great for swimming and workouts.
  //     Different lengths vary for everyday life or special occasions. No longer a need for mascara.
  //     Perfect for weddings, proms, reunions and everyday life!`,
  //     url: '../../../assets/imgs/5.jpg'
  //   },
  //   {
  //     h3: 'Mucosal Coloring',
  //     info: `Mucosal coloring is the art of adding color to the inner mucosal tissue just
  //     below the eye, a procedure that complements your eye’s natural sparkle.
  //     The coloring of the mucosal tissue adds depth and vibrance.`,
  //     url: '../../../assets/imgs/6.jpg'
  //   },
  //   {
  //     h3: 'Alopecia/Hairline',
  //     info: `Alopecia is the state of lacking hair where it usually would grow, especially on the head.
  //     Alopecia, which affects 50% of males known as a receding hairline/brow,
  //     many times is worsened due to stress and lack of sleep;
  //     it is also a common side-effect of face lifts.
  //     As far as permanent makeup is concerned with alopecia,
  //     we help straighten and fill in thinning hair regions along the hairline,
  //     sideburns, eyebrows, in small balding spots, etc.`,
  //     url: '../../../assets/imgs/10.jpg'
  //   },
  //   {
  //     h3: 'Lip Augmentation (non-surgical)',
  //     info: `This procedure is used to visually create fuller, healthier lips without any surgical procedure.
  //     Whether you are looking to balance out the shape of your lips, even-out a cleft lip,
  //     conceal burns or scars, or you simply want rich, sexy looking lips, this procedure is for you.`,
  //     url: '../../../assets/imgs/9.jpg'
  //   },
  //   {
  //     h3: 'Threading',
  //     info: `Growing in popularity across the country, threading is the process of shaping eyebrows using
  //     cotton thread.
  //     This delicate procedure is suitable for even the most sensitive skin types and is highly
  //     recommended as
  //     an excellent option instead of waxing or tweezing. Threading is becoming very popular because it
  //     is
  //     more precise and produces a beautiful uniform shape`,
  //     url: '../../../assets/imgs/7.jpg'
  //   }
  // ];

  //editObj: Service = {};
  editedServiceId; // get id from selected edited post
  editServiceObj = {};
  edit(service: Service, index) {
    // setup value when open existing item
    this.editServiceForm.controls.serviceName.setValue(service.serviceName);
    this.editServiceForm.controls.serviceInfo.setValue(service.serviceInfo);
    this.editServiceForm.controls.image.setValue(service.imagePath);
    this.imagePreview = service.imagePath;
    // progress bar
    this.progressBar = this.myProgressRef.nativeElement;
    this.progressBar.style.width = 0 + "%";

    this.editedServiceId = service._id;
    //console.log(service, this.editServiceForm.controls.image.value);
    this.editServiceObj = service;
    this.progressPercentage = 0;
  }

  async remove(service: Service, index) {
    console.log(service);
    if (window.confirm("Remove This Service ???")) {
      const removedPost: any = await this._api.removeService(service);
      //console.log(removedPost);
      if (removedPost.ok) {
        swal.fire({
          title: "Good job!",
          text: "Service Post successfully removed",
          icon: "success",
        });
        this.getServicePosts(); // rebuild view model
      }
      $("#myModal").modal("hide");
    } else {
      swal.fire({
        title: "Good job!",
        text: "Error",
        icon: "error",
      });
    }
  }

  // add new service
  myEventPost; // variable to reset input type file after submit
  onImagePickedAddService(event: Event) {
    this.myEventPost = event;
    const file = (event.target as HTMLInputElement).files[0];
    this.serviceForm.patchValue({ image: file });
    this.serviceForm.get("image").updateValueAndValidity();
    const reader = new FileReader();
    //console.log(reader)
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }
  async add() {
    const servicePost = {
      serviceName: this.serviceForm.value.serviceName,
      serviceInfo: this.serviceForm.value.serviceInfo,
      //image: this.serviceForm.controls.image.value
    };
    const newPost: any = await this._api.addService(
      servicePost,
      this.serviceForm.value.image
    );
    if (newPost.ok) {
      swal.fire({
        title: "Good job!",
        text: "Service Post successfully added",
        icon: "success",
      });
      this.getServicePosts(); // rebuild view model
    }
    this.myEventPost.target.value = null;
    this.serviceForm.reset();
    $("#myModal").modal("hide");
  }

  imagePreview: any;
  // edit service
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.editServiceForm.patchValue({ image: file });
    this.editServiceForm.get("image").updateValueAndValidity();
    const reader = new FileReader();
    console.log(reader);
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  async sendEditedService() {
    const servicePost = {
      _id: this.editedServiceId,
      serviceName: this.editServiceForm.value.serviceName,
      serviceInfo: this.editServiceForm.value.serviceInfo,
    };
    const editedPost: any = this._api
      .editServicePost(servicePost, this.editServiceForm.value.image)
      .subscribe(
        (event) => {
          // progress
          if (event.type === HttpEventType.DownloadProgress) {
            console.log(event.loaded, event.total);
            // event.loaded = bytes transfered
            // event.total = "Content-Length", set by the server
            this.progressPercentage = (100 / event.total) * event.loaded;
            console.log(this.progressPercentage);
            this.progressBar.style.width = this.progressPercentage + "%";
          }
          // finished
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
            swal.fire({
              title: "Good job!",
              text: "Service Post successfully updated",
              icon: "success",
            });
            this.getServicePosts(); // rebuild view model
          }
        },
        (err) => console.log(err, "promise error")
      );

    $("#editModal").modal("hide");
  }

  close() {
    $("#editModal").modal("hide");
    this.progressPercentage = 0;
  }
}

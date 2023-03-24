import { style } from "@angular/animations";
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
  NgForm,
} from "@angular/forms";
import { mimeType } from "../services/mime-type.validator";
import appState from "../../appState";
import { ApiService } from "../../services/api.service";
import { EMPTY } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import { Meta, Title } from "@angular/platform-browser";

declare var $: any;
declare var swal: any;

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.less"],
})
export class AboutUsComponent implements AfterViewInit {
  @ViewChild("slider_sertificate") onHoverref: ElementRef;
  serviceForm: FormGroup;

  public stopOnHover: HTMLElement;
  public slideWidth: any;
  hovering: boolean = false;
  appState = appState;

  constructor(private _api: ApiService, private meta: Meta, private title: Title) {}

  ngOnInit() {
    //this.autoStart();
    // for add service
    this.serviceForm = new FormGroup({
      serviceName: new FormControl(),
      serviceInfo: new FormControl(),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });
    // meta
    this.title.setTitle("Nataliya Hocko - permament makeup artist");
    this.meta.addTags([
      //{ name: "Nataliya Hocko", content: "Permament makeup artist" },
      { name: "description", content: "Nataliya has over 5 years experiance in permamnet makeup application and removal. Her attention to details is intuitive and guided by her expertise" },
      { name: 'robots', content: 'index, follow' },
      { charset: 'UTF-8' }  
      // { name: "keywords", content: "main page meta keywords" },
    ]);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $("#slick_slider").slick({
        autoplay: true,
        cssEase: "ease",
        dots: true,
        //centerMode: true,
        lazyLoad: "ondemand",
        zIndex: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        //variableWidth: true
        responsive: [
          {
            // tablet
            breakpoint: 991,
            settings: {
              slidesToShow: 1
            }
          },
          {
            // mobile portrait
            breakpoint: 479,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }, 450);
  }
  mouseover() {
    this.hovering = true;
    console.log(this.hovering);
  }
  mouseleave() {
    this.hovering = false;
    console.log(this.hovering);
  }
  errorMessage = "";

  certificates$ = this._api.certificates$.pipe(
    tap((item) => console.log(item)),
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  //certificates = this._api.certificates$; 

  // certificates = [
  //   { url: "../../../assets/imgs/certificate1.jpg" },
  //   { url: "../../../assets/imgs/certificate2.jpg" },
  //   { url: "../../../assets/imgs/certificate3.jpg" },
  //   { url: "../../../assets/imgs/certificate4.jpg" },
  //   { url: "../../../assets/imgs/certificate5.jpg" },
  //   { url: "../../../assets/imgs/certificate6.jpg" },
  //   { url: "../../../assets/imgs/certificate7.jpg" },
  //   { url: "../../../assets/imgs/certificate8.jpg" }
  // ];

  certificates = [
    { url: "../../../assets/imgs/certificates/certificate1.jpg" },
    { url: "../../../assets/imgs/certificates/certificate2.jpg" },
    { url: "../../../assets/imgs/certificates/certificate3.jpg" },
    { url: "../../../assets/imgs/certificates/certificate4.jpeg" },
    { url: "../../../assets/imgs/certificates/certificate5.jpeg" },
    { url: "../../../assets/imgs/certificates/certificate6.jpeg" },
    { url: "../../../assets/imgs/certificates/certificate7.jpeg" },
    { url: "../../../assets/imgs/certificates/certificate8.jpeg" },
    { url: "../../../assets/imgs/certificates/certificate10.jpg" }
  ];

  // currentSlide = 0;
  // startSlider;
  // nextSlider = null;
  // endSlider;
  // public carousel: any;
  // public slide: any = 0;
  // nextSlide: any = 0;
  // centerSlideWidth: any;
  // counter: number = 1;

  // move(event) {
  //   this.slideWidth = document.querySelector(".slides");
  //   if (event.target.classList[2] == "left") {
  //     //const direction = event.target.classList[2];
  //     //console.log(direction);
  //     this.counter--;
  //     const lastImg = this.certificates.length - 1;
  //     console.log(this.counter, "counter");
  //     this.slide = this.slide + this.sliderWidth();
  //     //if (this.counter <= 0) {
  //     if (this.counter <= 1) {
  //       this.counter = lastImg;
  //       return (this.slide = -this.sliderWidth() * (lastImg - 2));
  //     }
  //   }
  //   if (event.target.classList[2] == "right") {
  //     //console.log('right');
  //     this.counter++;
  //     const lastImg = this.certificates.length - 1;
  //     this.nextSlide = this.sliderWidth();
  //     this.nextSlider = 1;
  //     this.nextSlide = 0;
  //     this.slide = this.slide - this.sliderWidth();
  //     if (this.counter >= lastImg) {
  //       //console.log(this.slide, 'if else move right', this.counter, 'if else move right')
  //       this.counter = 1;
  //       this.slide = 0;
  //     }
  //   }
  // }

  // autoStart() {
  //   setInterval(() => {
  //     this.slideWidth = document.querySelector(".slides");
  //     this.counter++;
  //     const lastImg = this.certificates.length - 1;
  //     this.nextSlide = this.sliderWidth();
  //     this.nextSlider = 1;
  //     this.nextSlide = 0;
  //     this.slide = this.slide - this.sliderWidth();
  //     if (this.counter >= lastImg) {
  //       //console.log(this.slide, 'if else move right', this.counter, 'if else move right')
  //       this.counter = 1;
  //       this.slide = 0;
  //     }
  //   }, 3000);
  // }

  // // get dynamically width of <li>
  // sliderWidth() {
  //   return this.slideWidth.offsetWidth;
  // }

  // add new service
  myEventPost; // variable to reset input type file after submit
  imagePreview: any;
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
    // const newPost: any = await this._api.addService(
    //   servicePost,
    //   this.serviceForm.value.image
    // );
    // if (newPost.ok) {
    //   swal.fire({
    //     title: "Good job!",
    //     text: "Service Post successfully added",
    //     icon: "success",
    //   });
    //   this.getServicePosts(); // rebuild view model
    // }
    // this.myEventPost.target.value = null;
    // this.serviceForm.reset();
    // $("#myModal").modal("hide");
  }

  close() {
    $("#editModal").modal("hide");
    //this.progressPercentage = 0;
  }
}

/// make code shorter. Use in ngOnInit function move() with parameter direction(left or write) !! ASK!!!!!!!!

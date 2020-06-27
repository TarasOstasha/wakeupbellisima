import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import appState from '../../appState';

declare var jQuery: any
declare var $: any
declare var swal: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})

export class PortfolioComponent implements AfterViewInit, OnDestroy {
  appState = appState;
  url = this.appState.hostName;

  constructor(private api: ApiService, private http: HttpClient) { }

  async ngOnInit() {
    this.reloadImg();
    this.lazyInit();
  }

  lazyInit() {
    setTimeout(() => {
      // lazy img loading \\
      const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry: any) => {
          const lazyImage = entry.target;
          //if (entry.isIntersecting) lazyImage.src = lazyImage.dataset.image;
          //console.log(lazyImage.dataset.img)
          if (entry.isIntersecting) lazyImage.style.backgroundImage = lazyImage.dataset.img;
        })
      });
      document.querySelectorAll('.slide-img').forEach((v) => { // must change queryselector cos we use bg imgs
        imageObserver.observe(v);
      })
      // end lazy loading \\
    }, 1300)
  }

  //reloadImgFlag: boolean;
  async reloadImg() {
    try {
      //this.destroyFancy();
      // setTimeout(async () => {
      //   this.reloadImgFlag = true;
      const fromServer: any = await this.api.getPortfolioImgs();
      //console.log('sadsadsadasdsadas')
      //this.reloadImgFlag = false;
      this.appState.portfolioImg = fromServer;
      //}, 500)
      //$(".fancy").fancybox();
    } catch (error) {
      //console.log('reloadimg')
      //this.reloadImg();
    }

  }

  // << -- fancybox -- >> \\
  ngAfterViewInit() {

    $(document).ready(function () { //Photos Gallery
      $('[data-fancybox="gallery"]').fancybox({
        //Options will go here
        loop: true
      });
    });
  }
  ngOnDestroy() {
    //$(".fancybox").unbind('click.fb');
    // or maybe jQuery(".fancybox").off() to remove all bindings
  }

  // << -- end fancybox -- >> \\

  async delete(name) {
    const fromServer = this.api.removeImg(name);
    console.log(fromServer);
    // this.reloadImg();
    // this.lazyInit();
    // console.log(appState.portfolioImg)
  }

  async moveRight(index) {
    const fromServer: any = await this.api.move(index, 'right');
    console.log(fromServer);
    this.reloadImg();
    this.lazyInit();
  }
  async moveLeft(index) {
    const fromServer: any = await this.api.move(index, 'left');
    console.log(fromServer);
    this.reloadImg();
    this.lazyInit();
  }


  selectedFile: File = null;

  onImagePicked(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile)
  }

  filePicker() {
    //const file = (event.target as HTMLInputElement).files[0];
    console.log(this.selectedFile.name)
    const fd = new FormData;
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost/' + 'upload-img', this.selectedFile.name, {
      reportProgress: true,
      observe: 'events'
    }).subscribe((event) => {
      if (event.type == HttpEventType.UploadProgress) {
        console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%')
      } else if (event.type == HttpEventType.Response) console.log(event)

    })
    //const fromServer: any = this.api.pickedImg(fd);
    //console.log(fromServer);
  }



  // upload files

  // FILE UPLOADER - BEGIN
  upload_i // counter
  times; //time
  max_size_req = 10000//99999
  uploaded;
  fileQuantity;
  fileCounter;
  files: any = {};

  onChange(el) {
    this.files = (<HTMLInputElement>document.getElementById('upload')).files;  // file == {  name: "OhdIJZy8H7o.jpg", lastModified: 1467921666657,  lastModifiedDate: Date 2016-07-07T20:01:06.657Z,  size: 214450,  type: "image/jpeg"   }
    this.uploaded = 0
    this.upload_i = 0
    console.log('this files', this.files)
    //step one - remove first example photo
    this.appState.previews = this.appState.previews.filter((elem) => {
      console.log(elem, '!!!!! ELEM !!!')
      return (elem.reader.result == "assets/400x300.png") ? false : true;
    })

    this.fileQuantity = this.files.length;
    this.fileCounter = 1;

    const file = this.files[0];
    //log('file', file)
    //log('file size', file.size)
    //log('TIMES:::::: ', times)
    /// this.appState.currentNewProductImg = 'http://localhost/uploads/img' + file.name;
    //preview
    //const preview: any = document.querySelector('img');
    for (let i = 0; i < this.files.length; i++) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.appState.previews.push({
          reader: reader
        })
        // preview.src = reader.result;
      }
      reader.readAsDataURL(this.files[i]);
    };
    this.upload(file)


  }

  upload(file) {
    let times = Math.ceil(file.size / this.max_size_req) + 1 //amount of peases 
    this.times = times;
    console.log('upload begin', this.upload_i)
    let max = this.max_size_req
    // next step
    this.upload_i++
    // set a range
    let begin = (this.upload_i - 1) * max
    let end = begin + max
    // коли останній кусок тоді зрізаємо пусте
    if (end > file.size) end = file.size
    // take link to one chunk
    var slice = file.slice(begin, end) //0, file.size
    // set type of chunk
    if (this.upload_i == 1) var load_type = 'new'
    else if (this.upload_i > 1) var load_type = 'append'
    // take access to file API
    var fileReader: any = new FileReader()
    // read chunk as binary type
    fileReader.readAsBinaryString(slice)
    // when chunk has been red
    fileReader.onload = async (e) => { // e == load { target: FileReader, isTrusted: true, lengthComputable: true, loaded: 1048576, total: 1048576, currentTarget: FileReader, eventPhase: 2, bubbles: false, cancelable: false, defaultPrevented: false, timeStamp: 1474537690010000 }
      this.progressPercent();
      // gathering part of file
      const piece = {
        load_type: load_type, // ..... new or append
        name: file.name, // .......... file name
        data: fileReader.result // ... data
      }
      // =>>>> SEND to backend
      const data = await this.api.upload(piece);
      //repeat to upload first and middle chunks   
      console.log('i: ', this.upload_i, 'from', this.times)
      //last chunk of file
      if (times > this.upload_i) this.upload(file)
      else if (times == this.upload_i) {
        this.fileCounter++;
        //upload next file?
        console.log('loaded', this.fileCounter);
        // alert('good job');
        if (this.fileQuantity >= this.fileCounter) { this.uploadNextFile(); }
        else {
          // clear all uploaded files
          console.log('ppState.previews')
          this.appState.previews = [];
          this.appState.previews.push({
            reader: {
              result: "assets/400x300.png"
            }
          });
          setTimeout(() => {
            this.reloadImg();
            this.lazyInit();
          }, 2000)
        }
        //alert('success')
        await this.api.addNewFileToJson(file.name);
        this.reloadImg();
        //appState.previews.shift();
        swal.fire({
          title: "Good job!",
          text: "File successfully added",
          icon: "success",
        })
      }

    }
  }

  sendImg() {
    const file = this.files[this.fileCounter - 1]; //current upload file

    this.upload(file);
  }

  uploadNextFile() {
    const file = this.files[this.fileCounter - 1]; //current upload file
    //3 0
    const times = Math.ceil(file.size / this.max_size_req) + 1 //amount of peases 
    this.upload_i = 0;
    console.log('this is upload', file, times, this.fileCounter) //undefined
    this.upload(file);
  }

  round = (x) => Math.round(x); //progress bar
  progressBarPercent = 0;
  progressPercent() {
    setTimeout(() => {
      this.progressBarPercent = this.round(100 / this.times * this.upload_i);
      console.log(this.progressBarPercent);
    })


  }

}

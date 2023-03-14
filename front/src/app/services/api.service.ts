import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import  appState  from '../appState';
import { throwError, Observable } from 'rxjs';
import { catchError, tap, shareReplay  } from 'rxjs/operators';

//var url = 'http://localhost/';
//var url = 'http://localhost:3000/'; // this just for the local use


if(location.hostname == 'localhost') var url = 'http://localhost:80/' //dev for production using
else var url = '/'; //production

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface Service {
  _id: string;
	serviceName: string;
	serviceInfo: string;
	imagePath: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  appState = appState;

  constructor( private http: HttpClient ) { }

  getPortfolioImgs() {
    return this.http.get( url + 'portfolio-imgs' ).toPromise();
  }

  register(userData) {
    return this.http.post(url + 'register', userData, httpOptions).toPromise();
  }

  login(userData) {
    return this.http.post( url + 'login', userData, httpOptions ).toPromise();
  }

  logOut() {
    return this.http.get( url + 'log-out' ).toPromise();
  }

  upload(obj) {
    return this.http.post(url + 'upload2', obj, httpOptions).toPromise();
  }

  addNewFileToJson(fileName) {
    return this.http.post(url + 'add-new-file-to-json', {fileName}, httpOptions).toPromise();
  }

  deleteFromJson(item) {
    console.log(item, 'item from api')
    return this.http.get( url + 'deleteItem', item ).toPromise();
  }

  removeImg(name) {
    return this.http.delete( url + `delete-img/${name}` ).toPromise();
  }

  move(index, direction) {
    console.log('move')
    return this.http.post( url + 'move', {index, direction}, httpOptions ).toPromise();
  }
  // about me
  contactsMail(mail) {
    return this.http.post(url + 'contacts-mail', mail, httpOptions).toPromise();
  }

  // set review
  reviewMessages(msg) {
    return this.http.post(url + 'review-msg', msg, httpOptions).toPromise();
  }
  // get review
  getMsgsReview() {
    return this.http.get( url + 'review-msgs' ).toPromise();
  }

  getServicePosts() {
    return this.http.get(url + 'my-service').toPromise();
  }

  editServicePost(data: any, imagePath: File) {
    //console.log(data,imagePath)
    const postData: any = new FormData();
    postData.append('_id', data._id);
    postData.append('serviceName', data.serviceName);
    postData.append('serviceInfo', data.serviceInfo);
    postData.append('imagePath', imagePath);
    //console.log(postData)
    return this.http.patch( url + `my-service/${data._id}`, postData, { reportProgress: true, observe: 'events', })//.toPromise();
    // .subscribe(
    //   (response) => console.log(response),
    //   (erorr) => console.log(erorr)
    // )


  }

  removeService(service: Service) {
    //console.log(service._id);
    //return this.http.delete( url + `my-service/${service._id}`).toPromise();
    return this.http.delete( url + `my-service/${service._id}`).toPromise();
  }

  addService(data: any, image: File) {
    //console.log(data)
    const postData: any = new FormData();
    postData.append('serviceName', data.serviceName);
    postData.append('serviceInfo', data.serviceInfo);
    postData.append('image', image);
    //console.log(postData)
    return this.http.post( url + 'my-service', postData).toPromise();
    // .subscribe(
    //   (response) => console.log('add new post service response',response),
    //   (erorr) => console.log(erorr)
    // )
  }

  // about us
  // get
  certificates$ = this.http.get(url + 'certificate')
    .pipe(
      tap(data => console.log('Certificates ', JSON.stringify(data))),
      shareReplay(1),
      catchError(this.handleError)
    )
  // post  
  // certificatesPost$ = this.http.post(url + 'certificate')
  // .pipe(
  //   tap(data => console.log('Certificates ', JSON.stringify(data))),
  //   catchError(err => {
  //     console.log(err);
  //     throw new Error('Could not retrive');
  //   })
  // )


  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}

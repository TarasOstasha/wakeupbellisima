import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './parts/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AgmCoreModule } from '@agm/core';
//import { FacebookModule } from ‘ngx-facebook’;
import { FacebookModule } from 'ngx-facebook';

// services
import { ApiService } from './services/api.service';
import { StorageService } from './services/storage.service';
import { FormValidatorComponent } from './parts/form-validator/form-validator.component';
import { RedirectorComponent } from './pages/redirector/redirector.component';
import { CarouselComponent } from './parts/carousel/carousel.component';
import { StarRatingComponent } from './parts/star-rating/star-rating.component';
import { EyesComponent } from './pages/eyes/eyes.component';
import { LipsComponent } from './pages/lips/lips.component';
import { CorrectiveComponent } from './pages/corrective/corrective.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutUsComponent,
    BookAppointmentComponent,
    AuthComponent,
    FormValidatorComponent,
    RedirectorComponent,
    CarouselComponent,
    StarRatingComponent,
    EyesComponent,
    LipsComponent,
    CorrectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      //apiKey: 'AIzaSyCozMa2qbqp2x59SjJvzIOKGXlXQNtQXZU'
      apiKey: 'AIzaSyDD3OIX2BqH8WjNMj2EPQQpAqAu4SN2848'
    }),
    FacebookModule.forRoot()
  ],
  providers: [ApiService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

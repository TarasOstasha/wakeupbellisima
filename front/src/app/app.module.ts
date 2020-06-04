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

// services
import { ApiService } from './services/api.service';
import { StorageService } from './services/storage.service';
import { FormValidatorComponent } from './parts/form-validator/form-validator.component';
import { RedirectorComponent } from './pages/redirector/redirector.component';
import { CarouselComponent } from './parts/carousel/carousel.component';

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
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

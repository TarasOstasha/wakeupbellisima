import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { MainComponent } from './pages/main/main.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RedirectorComponent } from './pages/redirector/redirector.component';
import { EyesComponent } from './pages/eyes/eyes.component';
import { LipsComponent } from './pages/lips/lips.component';
import { CorrectiveComponent } from './pages/corrective/corrective.component';
import { WorkingProcessComponent } from './pages/working-process/working-process.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'eyes', component: EyesComponent },
  { path: 'lips', component: LipsComponent },
  { path: 'corrective', component: CorrectiveComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'book-appointment', component: BookAppointmentComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'redirector', component: RedirectorComponent },
  { path: 'process', component: WorkingProcessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//dvfdsfds

import { Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/pages/landing-page/landing-page.component';
import { LoginPageComponent } from './modules/login-page/pages/login-page/login-page.component';

export const routes: Routes = [
    {path: 'landing-page', component: LandingPageComponent},
    {path: 'login', component: LoginPageComponent},
    
    {path: '', redirectTo: 'landing-page', pathMatch: 'full'}
];


import { Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/pages/landing-page/landing-page.component';
import { LoginPageComponent } from './modules/login-page/pages/login-page/login-page.component';
import { RegisterPageComponent } from './modules/register-page/pages/register-page/register-page.component';

export const routes: Routes = [
    {path: 'landing-page', component: LandingPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    
    {path: '', redirectTo: 'landing-page', pathMatch: 'full'}
];


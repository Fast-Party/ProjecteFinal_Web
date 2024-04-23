import { Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/pages/landing-page/landing-page.component';
import { HomePageComponent } from './modules/home-page/pages/home-page/home-page.component';

export const routes: Routes = [
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'home', component: HomePageComponent },

    { path: '', redirectTo: 'landing-page', pathMatch: 'full' }
];


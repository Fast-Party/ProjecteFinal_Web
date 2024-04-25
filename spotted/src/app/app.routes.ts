import { Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/pages/landing-page/landing-page.component';
import { HomePageComponent } from './modules/home-page/pages/home-page/home-page.component';
import { CreatePlanPageComponent } from './modules/create-plan-page/page/create-plan-page/create-plan-page.component';
import { ProfilePageComponent } from './modules/profile-page/pages/profile-page/profile-page.component';

export const routes: Routes = [
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'create-plan', component: CreatePlanPageComponent },
    { path: 'profile/:idUsuario', component: ProfilePageComponent },

    { path: '', redirectTo: 'landing-page', pathMatch: 'full' }
];


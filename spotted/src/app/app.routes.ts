import {Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/pages/landing-page/landing-page.component';

export const routes: Routes = [
    {path: 'landing-page', component: LandingPageComponent},
    
    {path: '', redirectTo: 'landing-page', pathMatch: 'full'}
];


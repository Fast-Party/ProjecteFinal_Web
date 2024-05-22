import { Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/pages/landing-page/landing-page.component';
import { LoginPageComponent } from './modules/login-page/pages/login-page/login-page.component';
import { RegisterPageComponent } from './modules/register-page/pages/register-page/register-page.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { AppContentComponent } from './modules/app-content/app-content.component';
export const routes: Routes = [
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'login', component: LoginPageComponent},
    { path: 'register', component: RegisterPageComponent},
    { path: 'home', 
        loadChildren: () => import('./modules/app-content/app-content.routes').then(m => m.APP_CONTENT_ROUTES)
    },
    //{ path: 'home', component: AppContentComponent},
    { path: '', redirectTo: 'landing-page', pathMatch: 'full' },

    { path: '**', component: PageNotFoundComponent}
];


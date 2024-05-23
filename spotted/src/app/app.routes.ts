import { Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/pages/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: 'landing-page',
    title: 'Landing Page',
    component: LandingPageComponent,
  },
  {
    path: 'login',
    title: 'Iniciar Sesión',
    loadComponent: () =>
      import('./modules/login-page/pages/login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
  },
  {
    path: 'register',
    title: 'Crear Cuenta',
    loadComponent: () =>
      import(
        './modules/register-page/pages/register-page/register-page.component'
      ).then((m) => m.RegisterPageComponent),
  },

  {
    path: ':idUsuario',
    loadChildren: () =>
      import('./modules/app-content/app-content.routes').then(
        (m) => m.APP_CONTENT_ROUTES
      ),
  },

  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },

  {
    path: '**',
    title: '404 | Page Not Found',
    loadComponent: () =>
      import('./modules/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'login', component: LoginPageComponent},
    { path: 'register', component: RegisterPageComponent},
    { path: 'home/:idUsuario', component: HomePageComponent },
    { path: 'create-plan', component: CreatePlanPageComponent },
    { path: 'profile/:idUsuario', component: ProfilePageComponent },
    { path: 'autor/:idUsuario', component: AutorProfilePageComponent }, 

    { path: '', redirectTo: 'landing-page', pathMatch: 'full' }
];

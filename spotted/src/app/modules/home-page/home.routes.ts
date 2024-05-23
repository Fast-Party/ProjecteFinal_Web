import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/pages/home-page/home-page.component';
import { ProfilePageComponent } from '../profile-page/pages/profile-page/profile-page.component';

export const HOME_ROUTES: Routes = [
  {
    path: ':idUsuario',
    title: 'Inicio',
    component: HomePageComponent,
    children: [
      { path: 'profile/:idUsuario:', component: ProfilePageComponent },
    ],
  },
  //{ path: '', component: HomePageComponent },
  //{ path: '', redirectTo: 'home', pathMatch: 'full'}
];

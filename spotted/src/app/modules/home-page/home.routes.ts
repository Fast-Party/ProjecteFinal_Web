import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/pages/home-page/home-page.component';
import { ProfilePageComponent } from '../profile-page/pages/profile-page/profile-page.component';

export const HOME_ROUTES: Routes = [
  {path: '',
    title: 'Inicio',
    component: HomePageComponent,
    children: [
      { path: 'for-you', 
        loadComponent: () => import('../../modules/home-page/pages/home-for-you/home-for-you.component').then(m => m.HomeForYouComponent),
      },
      {path: 'for-you/profile/idAutor',
        loadComponent: () => import('../../modules/profile-page/pages/profile-page/profile-page.component').then(m => m.ProfilePageComponent),
      },
      { path: '', redirectTo: 'for-you',pathMatch: 'full',}
    ],
  },
  
];

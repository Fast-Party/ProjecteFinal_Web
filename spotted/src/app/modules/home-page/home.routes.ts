import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/pages/home-page/home-page.component';

export const HOME_ROUTES: Routes = [
  {path: '',
    title: 'Inicio',
    component: HomePageComponent,
    children: [
      { path: 'for-you', 
        loadComponent: () => import('../../modules/home-page/pages/home-for-you/home-for-you.component').then(m => m.HomeForYouComponent),
      },
      {
        path: 'following',
        loadComponent: () => import('../../modules/home-page/pages/home-following/home-following.component').then(m => m.HomeFollowingComponent),
      },
      {path: '', redirectTo: 'for-you',pathMatch: 'full'}
    ],
  },
  
];

import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/pages/home-page/home-page.component';
import { ProfilePageComponent } from '../profile-page/pages/profile-page/profile-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AppContentComponent } from './app-content.component';
export const APP_CONTENT_ROUTES: Routes = [
  /*{ path: '', 
        loadChildren: () => import('../home-page/home.routes').then(m => m.HOME_ROUTES)
     },
*/
     { path: '', component: AppContentComponent ,
        children: [
            { path: 'home/:idUsuario', component: HomePageComponent },
            { path: 'profile/:idUsuario', component: ProfilePageComponent },
            { path: 'home/:idUsuario/profile/:idUsuario:', component: ProfilePageComponent },
        ]
     },
    
];

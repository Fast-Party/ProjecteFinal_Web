import { Routes } from '@angular/router';
import { ProfilePageComponent } from '../profile-page/pages/profile-page/profile-page.component';
import { AppContentComponent } from './app-content.component';
export const APP_CONTENT_ROUTES: Routes = [

   { path: '', component: AppContentComponent ,
        children: [
            { path: 'home', 
                loadChildren: () => import('../home-page/home.routes').then(m => m.HOME_ROUTES)},
            { path: 'profile', 
                loadChildren: () => import('../profile-page/profile.routes').then(m => m.PROFILE_ROUTES)},
           // { path: 'home/:idUsuario/profile/:idUsuario:', component: ProfilePageComponent },
        ]
     },
    
];

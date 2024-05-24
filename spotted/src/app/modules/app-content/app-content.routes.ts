import { Routes } from '@angular/router';
import { AppContentComponent } from './app-content.component';
export const APP_CONTENT_ROUTES: Routes = [

   { path: '', component: AppContentComponent ,
        children: [
            { path: 'home', 
                loadChildren: () => import('../home-page/home.routes').then(m => m.HOME_ROUTES)},
            { path: 'profile', 
                loadChildren: () => import('../profile-page/profile.routes').then(m => m.PROFILE_ROUTES)},
            { path: 'plan/:idPlan',
                loadComponent: () => import('../plan-page/pages/plan-page.component').then(m => m.PlanPageComponent)},
        ]
     },
    
];

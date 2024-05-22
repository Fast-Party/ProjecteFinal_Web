import { Routes } from "@angular/router";
import { HomePageComponent } from "../home-page/pages/home-page/home-page.component";
import { ProfilePageComponent } from "../profile-page/pages/profile-page/profile-page.component";
export const APP_CONTENT_ROUTES: Routes = [
    /*{ path: '', 
        loadChildren: () => import('../home-page/home.routes').then(m => m.HOME_ROUTES)
     },
*/
    { path: '', component: HomePageComponent },
    { path: 'profile', component: ProfilePageComponent }

];
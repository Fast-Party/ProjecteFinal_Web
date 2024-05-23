import { Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

export const PROFILE_ROUTES: Routes = [
    { path: '',
    title: 'Perfil',
    component: ProfilePageComponent }
    //{ path: '', component: ProfilePageComponent },
    //{ path: '', redirectTo: 'profile', pathMatch: 'full'}
]
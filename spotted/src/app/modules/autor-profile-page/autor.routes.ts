import { Routes } from '@angular/router';
import { AutorProfilePageComponent } from './pages/autor-profile-page/autor-profile-page.component';
export const AUTOR_ROUTES: Routes = [
  { path: ':idAutor', 
    title: 'Autor', 
    component: AutorProfilePageComponent, 
    children: [
        { path: 'events',
            loadComponent: () => import('../../modules/autor-profile-page/pages/autor-events/autor-events.component').then(m => m.AutorEventsComponent),
        },
        { path: 'comments',
            loadComponent: () => import('../../modules/autor-profile-page/pages/autor-comments/autor-comments.component').then(m => m.AutorCommentsComponent),
        },
        { path: '', redirectTo: 'events', pathMatch: 'full'}
    ]
},
];

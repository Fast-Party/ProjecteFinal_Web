import { Routes } from "@angular/router";
import { ExplorePageComponent } from "./pages/explore-page.component";

export const EXPLORE_ROUTES: Routes = [
    
    { path: '',
        title: 'Explorar',
        component: ExplorePageComponent,
        children: [
            { path: 'discover',
                loadComponent: () => import('../../modules/explore-page/pages/explore-discover/explore-discover.component').then(m => m.ExploreDiscoverComponent),
            },
            { path: 'trending',
                loadComponent: () => import('../../modules/explore-page/pages/explore-trend/explore-trend.component').then(m => m.ExploreTrendComponent),
            },
            { path: '', redirectTo: 'discover', pathMatch: 'full'}
        ],
    }
];
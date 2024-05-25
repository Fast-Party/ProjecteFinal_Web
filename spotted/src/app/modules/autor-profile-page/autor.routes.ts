import { Routes } from "@angular/router";
import { AutorProfilePageComponent } from "./pages/autor-profile-page/autor-profile-page.component";
export const AUTOR_ROUTES: Routes = [

    { path: ':idAutor',
        component: AutorProfilePageComponent
    }
];
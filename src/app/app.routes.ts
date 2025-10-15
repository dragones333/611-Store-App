import { Routes } from '@angular/router';

//localhost:4200/ -> /admin
export const routes: Routes = [
    {path:"", redirectTo:"admin", pathMatch:"full"},
    {// mover modulos sin tener que copiar comopenetes
        path: "",
        loadChildren:()=> import("./pages/pages-module").then(m=>m.PagesModule)
    }
];

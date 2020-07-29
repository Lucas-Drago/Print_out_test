import { ImprimeComponent } from "./components/imprime/imprime.component"
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';



const APP_ROUTES: Routes = [

{path: '', component: ImprimeComponent},

];

export const rounting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);


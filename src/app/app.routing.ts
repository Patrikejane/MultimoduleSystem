import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import {ContentComponent} from "./content-component/content.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'content' },
  { path: 'content', component: ContentComponent },
  {
    path: 'login',
    loadChildren: () => import('../app/authentication-module/authentication.module').then(x => x.AuthenticationModule)
  },
]

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

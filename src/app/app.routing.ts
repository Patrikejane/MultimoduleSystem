import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import {ContentComponent} from "./content-component/content.component";
import {AuthGuard} from "./auth.guard";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'content' },
  { path: 'content', component: ContentComponent ,canActivate: [ AuthGuard ]},
  {
    path: 'login',
    loadChildren: () => import('../app/authentication-module/authentication.module').then(x => x.AuthenticationModule)
  },
]

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

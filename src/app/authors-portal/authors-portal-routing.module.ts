import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthorsPortalComponent } from './authors-portal.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AuthorsPortalComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
      },
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthorsPortalRoutingModule {
  static readonly moduleComponents = [
    LoginComponent,
    AuthorsPortalComponent,
  ];
}

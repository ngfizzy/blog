import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthorsPortalComponent } from './authors-portal.component';
import { AuthGuard } from './core/auth.guard';
import { DashobardComponent } from './dashboard/dashboard.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component'

const routes: Routes = [
  {
    path: '',
    component: AuthorsPortalComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashobardComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ViewPostComponent,
      },
      {
        path: 'create-post',
        component: CreatePostComponent
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
    DashobardComponent,
  ];
}

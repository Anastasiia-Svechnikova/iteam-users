import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { AuthComponent } from './auth/components/auth/auth.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: SiteLayoutComponent,
    children: [],
  },
  {
    path: 'login',
    component: AuthComponent,
    data: {
      title: 'Sign In',
    },
  },
  {
    path: 'register',
    component: AuthComponent,
    data: {
      title: 'Sign Up',
      isRegister: true,
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SiteLayoutComponent } from './navigation/components/site-layout/site-layout.component';

const routes: Routes = [
  //   {
  //     path: 'login',
  //   },
  {
    path: '',
    canActivate: [],
    component: SiteLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
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

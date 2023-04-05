import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SiteLayoutComponent } from './navigation/components/site-layout/site-layout.component';
import { HeaderTitles } from './navigation/constants/constants';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    component: SiteLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { header: HeaderTitles.home },
      },
      {
        path: 'admin',
        component: HomeComponent,
        data: { header: HeaderTitles.admin },
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

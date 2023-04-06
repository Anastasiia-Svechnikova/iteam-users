import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { MainReducer } from './state/reducer';
import { NavigationModule } from '../navigation/navigation.module';
import { HeaderTitles } from '../navigation/constants/constants';
import { SiteLayoutComponent } from '../navigation/components/site-layout/site-layout.component';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared/shared.module';

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
        path: 'user-profile',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
        data: { header: HeaderTitles.user },
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
  declarations: [],
  imports: [
    SharedModule,
    NavigationModule,
    StoreModule.forFeature('main', MainReducer),
    RouterModule.forChild(routes),
  ],
})
export class MainModule {}

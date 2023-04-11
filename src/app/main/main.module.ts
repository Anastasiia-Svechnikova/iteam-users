import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MainReducer } from './state/reducer';
import { NavigationModule } from '../navigation/navigation.module';
import { HeaderTitles } from '../navigation/constants/constants';
import { SiteLayoutComponent } from '../navigation/components/site-layout/site-layout.component';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MainUserEffects } from './state/effects';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [],
    component: SiteLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { header: HeaderTitles.home },
      },
      {
        path: 'user-profile/:id',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
        data: { header: HeaderTitles.user },
      },
      {
        path: 'admin',
        component: HomeComponent,
        data: { header: HeaderTitles.admin },
      },
      {
        path: 'projects',
        component: HomeComponent,
        data: { header: HeaderTitles.projects },
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard/home',
  },
];

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    NavigationModule,
    StoreModule.forFeature('main', MainReducer),
    EffectsModule.forFeature([MainUserEffects]),
    RouterModule.forChild(routes),
  ],
})
export class MainModule {}

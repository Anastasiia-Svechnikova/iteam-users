import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { MainReducer } from './state/reducer';
import { NavigationModule } from '../navigation/navigation.module';
import { HeaderTitles } from '../navigation/constants/constants';
import { SiteLayoutComponent } from '../navigation/components/site-layout/site-layout.component';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AdminGuard } from '../shared/guards/admin.guard';
import { TokenInterceptor } from '../shared/interceptors/token.interceptor';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    component: SiteLayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('../user-details/user-details.module').then((m) => m.UserDetailsModule),
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { header: HeaderTitles.home },
      },
      {
        path: 'admin',
        component: HomeComponent,
        canActivate: [AdminGuard],
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
  providers: [
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class MainModule {}

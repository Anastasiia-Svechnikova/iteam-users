import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SiteLayoutComponent],
  imports: [
    SharedModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    RouterModule,
  ],
})
export class NavigationModule {}

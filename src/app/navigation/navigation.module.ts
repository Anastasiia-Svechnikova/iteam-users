import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, SiteLayoutComponent],
  imports: [SharedModule, RouterModule, MatDividerModule],
})
export class NavigationModule {}

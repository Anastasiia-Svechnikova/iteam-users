import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { MainReducer } from './state/reducer';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
];
@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('main', MainReducer),
    RouterModule.forChild(routes),
  ],
})
export class MainModule {}

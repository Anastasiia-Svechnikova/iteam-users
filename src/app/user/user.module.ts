import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './components/user.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  {
    path: '',
    component: UserComponent,
  },
];

@NgModule({
  declarations: [UserComponent, EditModalComponent],
  imports: [
    SharedModule,
    HttpClientModule,
    MatGridListModule,

    RouterModule.forChild(routes),
  ],
})
export class UserModule {}

import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './components/user.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { UserEducationContactsComponent } from './components/user-education-contacts/user-education-contacts.component';
import { UserPersonalInfoComponent } from './components/user-personal-info/user-personal-info.component';
import { UserWorkInfoComponent } from './components/user-work-info/user-work-info.component';

const routes = [
  {
    path: '',
    component: UserComponent,
  },
];

@NgModule({
  declarations: [
    UserComponent,
    EditModalComponent,
    UserPersonalInfoComponent,
    UserEducationContactsComponent,
    UserWorkInfoComponent,
  ],
  imports: [
    MatChipsModule,
    SharedModule,
    HttpClientModule,
    MatGridListModule,
    ClipboardModule,
    RouterModule.forChild(routes),
  ],
})
export class UserModule {}

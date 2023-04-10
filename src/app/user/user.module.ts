import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './components/user.component';
import { UserEducationContactsComponent } from './components/user-education-contacts/user-education-contacts.component';
import { UserPersonalInfoComponent } from './components/user-personal-info/user-personal-info.component';
import { UserWorkInfoComponent } from './components/user-work-info/user-work-info.component';
import { UserEditModalComponent } from './components/user-edit/user-edit-modal/user-edit-modal.component';
import { SectionUpperBarComponent } from './components/section-upper-bar/section-upper-bar';
import { EmptyMessageComponent } from './components/empty-message/empty-message.component';
import { UserSkillsComponent } from './components/user-skills/user-skills.component';

const routes = [
  {
    path: '',
    component: UserComponent,
  },
];

@NgModule({
  declarations: [
    UserComponent,
    UserEditModalComponent,
    UserPersonalInfoComponent,
    UserEducationContactsComponent,
    UserWorkInfoComponent,
    SectionUpperBarComponent,
    EmptyMessageComponent,
    UserSkillsComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatChipsModule,
    SharedModule,
    HttpClientModule,
    ClipboardModule,
    RouterModule.forChild(routes),
  ],
})
export class UserModule {}

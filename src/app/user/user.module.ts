import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './components/user/user.component';
import { UserEducationContactsComponent } from './components/user-education-contacts/user-education-contacts.component';
import { UserPersonalInfoComponent } from './components/user-personal-info/user-personal-info.component';
import { UserWorkInfoComponent } from './components/user-work-info/user-work-info.component';
import { UserEditModalComponent } from './components/user-edit/user-edit-modal/user-edit-modal.component';
import { SectionUpperBarComponent } from './components/section-upper-bar/section-upper-bar';
import { EmptyMessageComponent } from './components/empty-message/empty-message.component';
import { UserSkillsComponent } from './components/user-skills/user-skills.component';
import { UserBankAndSocialsInfoComponent } from './components/user-bank-and-socials-info/user-bank-and-socials-info.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserReducer } from 'src/app/user/state/reducer';
import { UserEffects } from 'src/app/user/state/effects';
import { RouterModule } from '@angular/router';

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
    UserBankAndSocialsInfoComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatChipsModule,
    SharedModule,
    StoreModule.forFeature('user', UserReducer),
    EffectsModule.forFeature([UserEffects]),
    HttpClientModule,
    ClipboardModule,
    [RouterModule.forChild(routes)],
  ],
})
export class UserModule {}

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';

import { UserReducer } from 'src/app/user/state/reducer';
import { UserEffects } from 'src/app/user/state/effects';
import { UserPersonalInfoComponent } from 'src/app/user/components/user-personal-info/user-personal-info.component';
import { UserWorkInfoComponent } from 'src/app/user/components/user-work-info/user-work-info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserSkillsComponent } from 'src/app/user/components/user-skills/user-skills.component';
import { EmptyMessageComponent } from 'src/app/user/components/empty-message/empty-message.component';
import { UserBankAndSocialsInfoComponent } from 'src/app/user/components/user-bank-and-socials-info/user-bank-and-socials-info.component';
import { UserEducationContactsComponent } from 'src/app/user/components/user-education-contacts/user-education-contacts.component';
import { UserComponent } from 'src/app/user/components/user/user.component';
import { EditDescriptionModalComponent } from './components/user-edit/edit-description-modal/edit-description-modal.component';
import { EditContactsModalComponent } from './components/user-edit/edit-contacts/edit-contacts-modal.component';
import { EditSocialsModalComponent } from './components/user-edit/edit-socials-modal/edit-socials-modal.component';
import { EditBankInfoModalComponent } from './components/user-edit/edit-bank-info-modal/edit-bank-info-modal.component';

const routes = [
  {
    path: ':id',
    component: UserComponent,
  },
];
@NgModule({
  declarations: [
    UserComponent,
    UserPersonalInfoComponent,
    UserEducationContactsComponent,
    UserWorkInfoComponent,
    EmptyMessageComponent,
    UserSkillsComponent,
    UserBankAndSocialsInfoComponent,
    EditDescriptionModalComponent,
    EditContactsModalComponent,
    EditSocialsModalComponent,
    EditBankInfoModalComponent,
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

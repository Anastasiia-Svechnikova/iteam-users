import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserBankAndSocialsInfoComponent } from 'src/app/user/components/user-profile/user-bank-and-socials-info/user-bank-and-socials-info.component';
import { UserProfileComponent } from 'src/app/user/components/user-profile/user-profile.component';
import { EmptyMessageComponent } from 'src/app/user/components/user-profile/empty-message/empty-message.component';
import { UserEducationContactsComponent } from 'src/app/user/components/user-profile/user-education-contacts/user-education-contacts.component';
import { UserPersonalInfoComponent } from 'src/app/user/components/user-profile/user-personal-info/user-personal-info.component';
import { UserSkillsComponent } from 'src/app/user/components/user-profile/user-skills/user-skills.component';
import { UserWorkInfoComponent } from 'src/app/user/components/user-profile/user-work-info/user-work-info.component';
import { TextInputFormModalComponent } from 'src/app/user/components/user-profile/user-edit/text-input-form-modal/text-input-form-modal.component';
import { PersonalInfoFormModalComponent } from 'src/app/user/components/user-profile/user-edit/personal-info-form-modal/personal-info-form-modal.component';

const routes = [
  {
    path: '',
    component: UserProfileComponent,
  },
];
@NgModule({
  declarations: [
    UserProfileComponent,
    UserPersonalInfoComponent,
    UserEducationContactsComponent,
    UserWorkInfoComponent,
    EmptyMessageComponent,
    UserSkillsComponent,
    UserBankAndSocialsInfoComponent,
    TextInputFormModalComponent,
    PersonalInfoFormModalComponent,
  ],
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatChipsModule,
    SharedModule,
    HttpClientModule,
    ClipboardModule,
    [RouterModule.forChild(routes)],
  ],
})
export class UserProfileModule {}

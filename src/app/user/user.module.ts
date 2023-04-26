import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { MatChipsModule } from '@angular/material/chips';

import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { EmailCellComponent } from 'src/app/user/components/user-list/cell-components/email-cell/email-cell.component';
import { SettingsCellComponent } from 'src/app/user/components/user-list/cell-components/settings-cell/settings-cell.component';
import { UserListComponent } from 'src/app/user/components/user-list/user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderTitles } from 'src/app/navigation/models/header-titles';
import { StoreModule } from '@ngrx/store';
import { UserProfileReducer } from 'src/app/user/components/user-profile/state/reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserProfileEffects } from 'src/app/user/components/user-profile/state/effects';
import { TechnologiesFormModalComponent } from 'src/app/user/components/technologies-form-modal/technologies-form-modal.component';

const routes = [
  {
    path: 'all',
    canActivate: [],
    component: UserListComponent,
    data: { header: HeaderTitles.allUsers },
  },
  {
    path: ':id',

    loadChildren: () =>
      import('./components/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule,
      ),
    data: { header: HeaderTitles.user },
  },
];
@NgModule({
  declarations: [
    TechnologiesFormModalComponent,
    UserListComponent,
    EmailCellComponent,
    SettingsCellComponent,
  ],
  imports: [
    MatChipsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    SharedModule,
    HttpClientModule,
    ClipboardModule,
    StoreModule.forFeature('user-profile', UserProfileReducer),
    EffectsModule.forFeature([UserProfileEffects]),
    [RouterModule.forChild(routes)],
    AgGridModule,
  ],
})
export class UserModule {}

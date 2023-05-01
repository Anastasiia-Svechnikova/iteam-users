import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { UserListComponent } from 'src/app/user/components/user-list/user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderTitles } from 'src/app/navigation/models/header-titles';
import { StoreModule } from '@ngrx/store';
import { UserProfileReducer } from 'src/app/user/components/user-profile/state/reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserProfileEffects } from 'src/app/user/components/user-profile/state/effects';
import { TechnologiesFormModalComponent } from 'src/app/user/components/technologies-form-modal/technologies-form-modal.component';
import { SettingsCellComponent } from './components/user-list/cell-components/settings-cell/settings-cell.component';
import { userReducersMap } from 'src/app/user/user-reducers-map';
import { UserEducationEffects } from 'src/app/user/components/user-profile/user-education-contacts/state/effects';

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
    StoreModule.forFeature('user-profile', userReducersMap),
    EffectsModule.forFeature([UserProfileEffects, UserEducationEffects]),
    [RouterModule.forChild(routes)],
    AgGridModule,
  ],
})
export class UserModule {}

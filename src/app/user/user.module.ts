import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserListComponent } from 'src/app/user/components/user-list/user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfileEffects } from 'src/app/user/components/user-profile/state/effects';
import { TechnologiesFormModalComponent } from 'src/app/user/components/technologies-form-modal/technologies-form-modal.component';
import { userReducersMap } from 'src/app/user/user-reducers-map';
import { UserEducationEffects } from 'src/app/user/components/user-profile/user-education/state/effects';
import { SettingsCellComponent } from 'src/app/user/components/user-list/cell-components/settings-cell/settings-cell.component';

const routes = [
  {
    path: 'all',
    canActivate: [],
    component: UserListComponent,
  },
  {
    path: ':id',

    loadChildren: () =>
      import('./components/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule,
      ),
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

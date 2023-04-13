import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { EmailCellComponent } from 'src/app/user/components/user-list/cell-components/email-cell/email-cell.component';
import { SettingsCellComponent } from 'src/app/user/components/user-list/cell-components/settings-cell/settings-cell.component';
import { UserListComponent } from 'src/app/user/components/user-list/user-list.component';
import { UserReducer } from 'src/app/user/state/reducer';
import { UserEffects } from 'src/app/user/state/effects';
import { SharedModule } from 'src/app/shared/shared.module';

const routes = [
  {
    path: '',
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
  declarations: [UserListComponent, EmailCellComponent, SettingsCellComponent],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    SharedModule,
    StoreModule.forFeature('main', UserReducer),
    EffectsModule.forFeature([UserEffects]),
    HttpClientModule,
    ClipboardModule,
    [RouterModule.forChild(routes)],
    AgGridModule,
  ],
})
export class UserModule {}

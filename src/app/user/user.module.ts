import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { UserListComponent } from 'src/app/user/components/user-list/user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderTitles } from 'src/app/navigation/models/header-titles';
import { SettingsCellComponent } from './components/user-list/cell-components/settings-cell/settings-cell.component';

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
  declarations: [UserListComponent, SettingsCellComponent],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    SharedModule,
    HttpClientModule,
    ClipboardModule,
    [RouterModule.forChild(routes)],
    AgGridModule,
  ],
})
export class UserModule {}

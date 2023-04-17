import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

const routes = [
  {
    path: ':id',
    loadChildren: () =>
      import('./components/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule,
      ),
  },
];
@NgModule({
  declarations: [],
  imports: [
    SharedModule,

    HttpClientModule,
    ClipboardModule,
    [RouterModule.forChild(routes)],
  ],
})
export class UserModule {}

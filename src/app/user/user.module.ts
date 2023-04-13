import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';

import { UserReducer } from 'src/app/user/state/reducer';
import { UserEffects } from 'src/app/user/state/effects';
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
    StoreModule.forFeature('main', UserReducer),
    EffectsModule.forFeature([UserEffects]),
    HttpClientModule,
    ClipboardModule,
    [RouterModule.forChild(routes)],
  ],
})
export class UserModule {}

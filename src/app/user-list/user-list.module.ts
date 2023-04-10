import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserDetailsComponent } from './components/user-details/user-details.component';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './services/user.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClipboardModule } from '@angular/cdk/clipboard';

const routes = [
  {
    path: ':id',
    component: UserDetailsComponent,
  },
];

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    ClipboardModule,
  ],
  providers: [UserService],
})
export class UserListModule {}

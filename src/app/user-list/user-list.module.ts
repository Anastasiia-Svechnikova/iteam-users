import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { UserDetailsComponent } from './components/user-details/user-details.component';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './services/user.service';
import { UserListComponent } from './components/user-list/user-list.component';

const routes= [
  { path: '', component: UserListComponent },
  {
    path: ':id',
    component: UserDetailsComponent,
  },
];

@NgModule({
  declarations: [UserDetailsComponent, UserListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    ClipboardModule,
  ],
  providers: [UserService],
})
export class UserListModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailsCardInfoComponent } from 'src/app/user-list/components/user-details/user-details-card-info/user-details-card-info.component';
import { UserDetailsHeaderComponent } from 'src/app/user-list/components/user-details/user-details-header/user-details-header.component';
import { UserDetailsComponent } from 'src/app/user-list/components/user-details/user-details.component';
import { UserListComponent } from 'src/app/user-list/components/user-list/user-list.component';
import { UserService } from 'src/app/user-list/services/user.service';

const routes = [
  { path: '', component: UserListComponent },
  {
    path: ':id',
    component: UserDetailsComponent,
  },
];

@NgModule({
  declarations: [
    UserDetailsComponent,
    UserListComponent,
    UserDetailsHeaderComponent,
    UserDetailsCardInfoComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    ClipboardModule,
  ],
  providers: [UserService],
})
export class UserListModule {}

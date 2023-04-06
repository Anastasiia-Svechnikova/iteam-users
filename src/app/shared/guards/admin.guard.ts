import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { selectUser } from '../../main/state/selectors';
import { IUser } from '../models/user';
import { UserRoles } from '../constants/constants';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectUser).pipe(
      map((user: IUser | null) => {
        if (user?.roles.some((role) => role.value === UserRoles.Admin)) {
          return true;
        } else {
          this.router.navigateByUrl('home');
          return false;
        }
      }),
    );
  }
}

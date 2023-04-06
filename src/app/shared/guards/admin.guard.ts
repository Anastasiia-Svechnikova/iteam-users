import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { selectUserAdminStatus } from '../../main/state/selectors';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectUserAdminStatus);
  }
}

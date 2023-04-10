import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, of, switchMap, tap } from 'rxjs';

import { IUser } from 'src/app/shared/models/user';
import {UserService} from "src/app/user-list/services/user.service";

export interface UserDetailsState {
  user: IUser | null;
}

const initialState: UserDetailsState = {
  user: null,
};

@Injectable()
export class UsersListStore extends ComponentStore<UserDetailsState> {
  users$ = this.select((state) => state.user);

  getUserList = this.effect<number>((userId$) =>
    userId$.pipe(
      switchMap((userId) => this.userService.getUserById(userId)),
      tap((updatedUser) => this.patchState({ user: updatedUser })),
      catchError((e) => {
        this.router.navigateByUrl('users');
        return of(e);
      }),
    ),
  );

  constructor(private userService: UserService, private router: Router) {
    super(initialState);
  }
}

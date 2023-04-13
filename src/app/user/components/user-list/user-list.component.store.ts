import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, of, switchMap, tap } from 'rxjs';

import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UserService } from 'src/app/user/services/user.service';

export interface UserListState {
  users: IUserDetails[] | null;
}

const initialState: UserListState = {
  users: null,
};

@Injectable()
export class UserListStore extends ComponentStore<UserListState> {
  users$ = this.select((state) => state.users);

  getUserList = this.effect((trigger$) =>
    trigger$.pipe(
      switchMap(() => this.userService.getAllUsers()),
      tap((users) => this.patchState({ users: users.data })),
      catchError((error) => {
        this.snackbarService.openSnackBar(
          `Users Loading Failed: ${error.message}`,
        );
        return of(null);
      }),
    ),
  );
  constructor(
    private userService: UserService,
    private snackbarService: SnackbarService,
  ) {
    super(initialState);
  }
}

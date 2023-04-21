import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';

import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { userProfileActions } from 'src/app/user/components/user-profile/state/actions';
import { selectUserId } from 'src/app/user/components/user-profile/state/selectors';
import { UserService } from 'src/app/user/services/user.service';

@Injectable()
export class UserProfileEffects {
  loadUser$ = createEffect(() => {
    return this.actions.pipe(
      ofType(userProfileActions.loadUser),
      switchMap(({ id }) => {
        return this._userService.getUserById(id).pipe(
          map((user: IUserDetails) => {
            return userProfileActions.loadedUser({ user });
          }),
          catchError((error) => {
            console.log(error.message);
            this._snackbarService.openSnackBar(
              'Something went wrong when loading the user...',
            );
            return of(userProfileActions.loadedError({ error }));
          }),
        );
      }),
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions.pipe(
      ofType(userProfileActions.updateUser),
      concatLatestFrom(() => this.store.select(selectUserId)),
      switchMap(([{ user }, id = '']) => {
        return this._userService.updateUserById(id, user).pipe(
          map((user: IUserDetails) => {
            this._snackbarService.openSnackBar(
              'User profile has been successfully updated',
            );
            return userProfileActions.updatedUser({ user });
          }),
          catchError((error) => {
            console.log(error.message);
            this._snackbarService.openSnackBar(
              'Something went wrong when updating the user...',
            );
            return of(userProfileActions.loadedError({ error }));
          }),
        );
      }),
    );
  });

  constructor(
    private store: Store,
    private actions: Actions,
    private readonly _userService: UserService,
    private _snackbarService: SnackbarService,
  ) {}
}

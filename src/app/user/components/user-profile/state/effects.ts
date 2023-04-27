import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map, of, switchMap } from 'rxjs';

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
            return of(userProfileActions.error({ error }));
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
            return of(userProfileActions.error({ error }));
          }),
        );
      }),
    );
  });

  assignTechnologyToUser$ = createEffect(() => {
    return this.actions.pipe(
      ofType(userProfileActions.assignTechnologyToUser),
      concatLatestFrom(() => this.store.select(selectUserId)),
      concatMap(([{ technology }, userId = '']) => {
        return this._userService
          .assignTechnologyToUser({
            userId,
            technologyId: technology.id.toString(),
          })
          .pipe(
            map(() => {
              this._snackbarService.openSnackBar(
                'Technology has been successfully added',
              );
              return userProfileActions.assignedTechnologyToUser({
                technology,
              });
            }),
            catchError((error) => {
              console.log(error.message);
              this._snackbarService.openSnackBar(
                'Something went wrong when attaching a new technology...',
              );
              return of(userProfileActions.error({ error }));
            }),
          );
      }),
    );
  });

  removeTechnologyFromUser$ = createEffect(() => {
    return this.actions.pipe(
      ofType(userProfileActions.removeTechnologyFromUser),
      concatLatestFrom(() => this.store.select(selectUserId)),
      switchMap(([{ technologyId }, userId = '']) => {
        return this._userService
          .removeTechnologyFromUser({
            userId,
            technologyId: technologyId,
          })
          .pipe(
            map(() => {
              this._snackbarService.openSnackBar(
                'Technology has been successfully removed from user',
              );
              return userProfileActions.removedTechnologyFromUser({
                technologyId,
              });
            }),
            catchError((error) => {
              console.log(error.message);
              this._snackbarService.openSnackBar(
                'Something went wrong when removing the technology...',
              );
              return of(userProfileActions.error({ error }));
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

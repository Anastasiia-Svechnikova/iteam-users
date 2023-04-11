import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { MainUserService } from '../services/user.service';
import { mainUserActions } from './actions';

@Injectable()
export class MainUserEffects {
  loadCurrentUser$ = createEffect(() => {
    return this.actions.pipe(
      ofType(mainUserActions.loadUserById),
      switchMap((action) => {
        return this.mainUserService.getUserById(action.id).pipe(
          map((user: IUserDetails) =>
            mainUserActions.loadedCurrentUser({ user }),
          ),

          catchError((error) => {
            this.snackbarService.openSnackBar(
              `User Loading Failed: ${error.message}`,
            );
            return of(mainUserActions.loadedError());
          }),
        );
      }),
    );
  });

  constructor(
    private actions: Actions,
    private mainUserService: MainUserService,
    private snackbarService: SnackbarService,
  ) {}
}

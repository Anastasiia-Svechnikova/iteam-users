import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  catchError,
  EMPTY,
  Observable,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { IUpdateUserDTO } from 'src/app/user/components/user-profile/interfaces/update-user-dto';
import { UserService } from 'src/app/user/services/user.service';

interface IUserState {
  user: IUserDetails | null;
  id: string;
  loading: boolean;
}
const defaultState = {
  user: null,
  id: '',
  loading: true,
};

@Injectable()
export class UserStore extends ComponentStore<IUserState> {
  constructor(
    private readonly userService: UserService,
    private _snackBarService: SnackbarService,
  ) {
    super(defaultState);
  }

  readonly userId$ = this.select(({ id }) => id);
  readonly user$ = this.select(({ user }) => user);
  readonly loading$ = this.select(({ loading }) => loading);

  readonly getUser = this.effect((userId$: Observable<string>) => {
    return userId$.pipe(
      tap((id) => this.setUserId(id)),
      switchMap((id) => {
        this.setLoading(true);
        return this.userService.getUserById(id).pipe(
          tap({
            next: (user: IUserDetails) => {
              this.setLoading(false);
              return this.setUser(user);
            },
            error: (error) => {
              this.setLoading(false);
              this._snackBarService.openSnackBar(
                'Something went wrong when loading the user...',
              );
              console.log(error);
            },
          }),
          catchError(() => EMPTY),
        );
      }),
    );
  });

  readonly updateUserInfo = this.effect(
    (updatedData$: Observable<IUpdateUserDTO>) => {
      return updatedData$.pipe(
        withLatestFrom(this.userId$),
        switchMap(([updatedData, id]) => {
          this.setLoading(true);
          return this.userService.updateUserById(id, updatedData).pipe(
            tap({
              next: (updatedData) => {
                this.setLoading(false);
                this._snackBarService.openSnackBar(
                  'User profile has been successfully updated',
                );
                this.setUser(updatedData);
              },
              error: (error) => {
                this.setLoading(false);
                console.log(error);
              },
            }),
            catchError(() => EMPTY),
          );
        }),
      );
    },
  );

  private setLoading(state: boolean): void {
    this.patchState({ loading: state });
  }

  private setUser(user: IUserDetails): void {
    this.patchState({ user });
  }

  private setUserId(id: string): void {
    this.patchState({ id });
  }
}

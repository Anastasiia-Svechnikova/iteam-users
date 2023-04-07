import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';

import { UserService } from '../../services/user.service';
import { IUser } from '../../../shared/models/user';

export interface UserDetailsState {
  user: IUser | null;
}

const initialState: UserDetailsState = {
  user: null,
};

@Injectable()
export class UserDetailsStore extends ComponentStore<UserDetailsState> {
  user$ = this.select((state) => state.user);

  getUser = this.effect<number>((userId$) =>
    userId$.pipe(
      switchMap((userId) => this.userService.getUserById(userId)),
      tap((updatedUser) => this.patchState({ user: updatedUser })),
    ),
  );

  constructor(private userService: UserService) {
    super(initialState);
  }
}

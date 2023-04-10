import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {catchError, of, switchMap, tap} from 'rxjs';

import { UserService } from '../../services/user.service';
import { IUser } from '../../../shared/models/user';
import {Router} from "@angular/router";

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
      catchError((e)=>{
        this.router.navigateByUrl('users')
        return of(e)
      })
    ),
  );

  constructor(private userService: UserService, private router: Router) {
    super(initialState);
  }
}

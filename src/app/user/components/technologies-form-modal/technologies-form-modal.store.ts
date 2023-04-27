import { Injectable } from '@angular/core';
import {
  ComponentStore,
  OnStateInit,
  OnStoreInit,
} from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, Observable, switchMap, tap } from 'rxjs';

import { ITechnology } from 'src/app/shared/interfaces/technology';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { INewTechnology } from 'src/app/user/components/technologies-form-modal/interfaces/new-technology';
import { TechnologiesService } from 'src/app/user/components/technologies-form-modal/technologies.service';
import { userProfileActions } from 'src/app/user/components/user-profile/state/actions';

interface ITechnologiesState {
  allTechnologies: ITechnology[];
  userTechnologies: ITechnology[];
  loading: boolean;
}
const defaultState = {
  loading: true,
  allTechnologies: [],
  userTechnologies: [],
};

@Injectable()
export class TechnologiesFormStore
  extends ComponentStore<ITechnologiesState>
  implements OnStoreInit
{
  constructor(
    private readonly _technologiesService: TechnologiesService,
    private _snackBarService: SnackbarService,
  ) {
    super(defaultState);
  }

  ngrxOnStoreInit(): void {
    this.getAllTechnologies$();
  }
  readonly loading$ = this.select(({ loading }) => loading);
  readonly allTechnologies$ = this.select(
    ({ allTechnologies }) => allTechnologies,
  );
  readonly userTechnologies$ = this.select(
    ({ userTechnologies }) => userTechnologies,
  );

  readonly getAllTechnologies$ = this.effect((source$) => {
    return source$.pipe(
      switchMap(() => {
        this.setLoading(true);
        return this._technologiesService.getAllTechnologies().pipe(
          tap({
            next: (technologies: ITechnology[]) => {
              this.setLoading(false);
              this.setAllTechnologies(technologies);
            },
            error: (error) => {
              this.setLoading(false);
              this._snackBarService.openSnackBar(
                'Something went wrong when loading all technologies..',
              );
              console.log(error);
            },
          }),
          catchError(() => EMPTY),
        );
      }),
    );
  });

  readonly AddTechnology$ = this.effect(
    (technology$: Observable<INewTechnology>) => {
      return technology$.pipe(
        switchMap((newTechnology) => {
          this.setLoading(true);
          return this._technologiesService.addNewTechnology(newTechnology).pipe(
            tap({
              next: (technology: ITechnology) => {
                this.setLoading(false);
                this.addToUserTechnologies(technology);
                this.addToAllTechnologies(technology);
              },
              error: (error) => {
                this.setLoading(false);
                this._snackBarService.openSnackBar(
                  'Something went wrong when adding a new technology..',
                );
                console.log(error);
              },
            }),
            catchError(() => EMPTY),
          );
        }),
      );
    },
  );

  private addToAllTechnologies(technology: ITechnology): void {
    this.patchState((state) => ({
      allTechnologies: [...state.allTechnologies, technology],
    }));
  }

  public addToUserTechnologies(technology: ITechnology): void {
    this.patchState((state) => ({
      userTechnologies: [...state.userTechnologies, technology],
    }));
  }

  private setLoading(state: boolean): void {
    this.patchState({ loading: state });
  }

  private setAllTechnologies(technologies: ITechnology[]): void {
    this.patchState({ allTechnologies: technologies });
  }

  public setUserTechnologies(technologies: ITechnology[]): void {
    this.patchState({ userTechnologies: technologies });
  }
}

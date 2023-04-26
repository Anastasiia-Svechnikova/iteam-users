import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, EMPTY, switchMap, tap } from 'rxjs';
import { ITechnology } from 'src/app/shared/interfaces/technology';

import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { TechnologiesService } from 'src/app/user/components/technologies-form-modal/technologies-service';

interface ISkillsState {
  allTechnologies: ITechnology[];
  user: IUserDetails | null;
  id: number | null;
  loading: boolean;
}
const defaultState = {
  user: null,
  id: null,
  loading: true,
  allTechnologies: [],
};

@Injectable()
export class TechnologiesFormStore extends ComponentStore<ISkillsState> {
  constructor(
    private readonly _technologiesService: TechnologiesService,
    private _snackBarService: SnackbarService,
  ) {
    super(defaultState);
  }

  readonly id$ = this.select(({ id }) => id);
  readonly loading$ = this.select(({ loading }) => loading);
  readonly allTechnologies$ = this.select(
    ({ allTechnologies }) => allTechnologies,
  );

  readonly getAllTechnologies$ = this.effect((_) => {
    return _.pipe(
      switchMap(() => {
        this.setLoading(true);
        return this._technologiesService.getAllTechnologies().pipe(
          tap({
            next: (technologies: ITechnology[]) => {
              this.setLoading(false);
              return this.setAllTechnologies(technologies);
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

  private setLoading(state: boolean): void {
    this.patchState({ loading: state });
  }

  private setAllTechnologies(state: ITechnology[]): void {
    this.patchState({ allTechnologies: state });
  }

  private setId(id: number): void {
    this.patchState({ id });
  }
}

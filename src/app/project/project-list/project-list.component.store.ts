import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, Observable, of, switchMap, tap } from 'rxjs';

import { ProjectService } from 'src/app/project/services/project.service';
import { IProjectDetailsData } from 'src/app/shared/interfaces/project-details';
import { IUpdateProjectDTO } from 'src/app/shared/interfaces/update-project';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

export interface ProjectListState {
  projects: IProjectDetailsData[] | null;
  loading: boolean;
}

const initialState: ProjectListState = {
  projects: null,
  loading: false,
};

@Injectable()
export class ProjectListStore extends ComponentStore<ProjectListState> {
  readonly projects$ = this.select((state) => state.projects);
  readonly loading$ = this.select(({ loading }) => loading);

  constructor(
    private projectService: ProjectService,
    private snackbarService: SnackbarService,
  ) {
    super(initialState);
  }

  getProjectList = this.effect((trigger$) => {
    return trigger$.pipe(
      switchMap(() => {
        this.setLoading(true);
        return this.projectService.getAllProjects();
      }),
      tap((projects) => {
        this.setLoading(false);
        this.patchState({ projects: projects });
      }),
      catchError((error) => {
        this.setLoading(false);
        this.snackbarService.openSnackBar(
          `Users Loading Failed: ${error.message}`,
        );
        return of(null);
      }),
    );
  });

  updateProject$ = this.effect(
    (
      args$: Observable<{
        projectId: string;
        updatedProject: IUpdateProjectDTO;
      }>,
    ) =>
      args$.pipe(
        switchMap((updateOptions) => {
          this.setLoading(true);
          return this.projectService.updateProjectById(
            updateOptions.projectId,
            updateOptions.updatedProject,
          );
        }),
        tap((updatedProject) => {
          this.setLoading(false);
          this.patchState((state) => ({
            projects: state.projects?.map((project) =>
              project.id === updatedProject.id ? updatedProject : project,
            ),
          }));
        }),
        catchError((error) => {
          this.setLoading(false);
          this.snackbarService.openSnackBar(
            `Project Update Failed: ${error.message}`,
          );
          return of(null);
        }),
      ),
  );

  private setLoading(state: boolean): void {
    this.patchState({ loading: state });
  }
}

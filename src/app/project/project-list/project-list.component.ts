import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GridApi } from 'ag-grid-community';
import { takeUntil } from 'rxjs';

import { ProjectListStore } from 'src/app/project/project-list/project-list.component.store';
import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ProjectListStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent extends UnSubscriberComponent implements OnInit
{
  projects$ = this.projectListStore.projects$;
  loading$ = this.projectListStore.loading$;
  gridApi!: GridApi;
  filter = new FormControl();
  context = { componentParent: this };
  colDefs = [];

  constructor(private projectListStore: ProjectListStore) {
    projectListStore.getProjectList();
    super();
  }

  ngOnInit(): void {
    this.filter.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        this.gridApi.setQuickFilter(value);
      });
  }

  onGridReady(params: { api: GridApi }): void {
    this.gridApi = params.api;
  }
}

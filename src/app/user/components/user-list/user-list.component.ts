import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GridApi } from 'ag-grid-community';
import { takeUntil } from 'rxjs';
import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';

import { UserListColDefs } from 'src/app/user/components/user-list/constants/column-definitions';
import { UserListStore } from 'src/app/user/components/user-list/user-list.component.store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserListStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent extends UnSubscriberComponent implements OnInit  {
  users$ = this.userListStore.users$;
  gridApi!: GridApi;
  filter = new FormControl();
  colDefs = UserListColDefs;

  constructor(private userListStore: UserListStore) {
    userListStore.getUserList();
    super()
  }

  ngOnInit(): void {
    this.filter.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
      this.gridApi.setQuickFilter(value);
    });
  }

  onGridReady(params: { api: GridApi }): void {
    this.gridApi = params.api;
  }
}

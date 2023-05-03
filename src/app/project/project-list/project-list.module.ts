import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { ProjectListComponent } from 'src/app/project/project-list/components/project-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes = [
  { path: '', component: ProjectListComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [ProjectListComponent],
  imports: [SharedModule, [RouterModule.forChild(routes)], HttpClientModule, AgGridModule, MatInputModule],
})
export class ProjectListModule {}

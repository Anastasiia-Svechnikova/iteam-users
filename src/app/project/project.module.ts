import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { HeaderTitles } from 'src/app/navigation/models/header-titles';
import { EditProjectComponent } from 'src/app/project/project-list/edit-project/edit-project.component';
import { ProjectListComponent } from 'src/app/project/project-list/project-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes = [
  {
    path: 'all',
    canActivate: [],
    component: ProjectListComponent,
    data: { header: HeaderTitles.allProjects },
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./project-page/project-page.module').then(
        (m) => m.ProjectPageModule,
      ),
    data: { header: HeaderTitles.project },
  },
  {
    path: '**',
    redirectTo: '/dashboard/home'
  }
];

@NgModule({
  declarations: [ProjectListComponent, EditProjectComponent],
    imports: [
        CommonModule,
        [RouterModule.forChild(routes)],
        HttpClientModule,
        SharedModule,
        MatInputModule,
        AgGridModule,
    ],
})
export class ProjectModule {}

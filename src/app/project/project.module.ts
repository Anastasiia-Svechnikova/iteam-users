import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderTitles } from 'src/app/navigation/models/header-titles';
import { EditProjectComponent } from 'src/app/project/project-list/edit-project/edit-project.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes = [
  {
    path: 'all',
    canActivate: [],
      loadChildren: () =>
          import('./project-list/project-list.module').then(
              (m) => m.ProjectListModule,
          ),
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
  declarations: [ EditProjectComponent],
    imports: [
        [RouterModule.forChild(routes)],
        HttpClientModule,
        SharedModule,
    ],
})
export class ProjectModule {}

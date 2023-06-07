import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./project-page/project-page.module').then(
        (m) => m.ProjectPageModule,
      ),
  },
  {
    path: '**',
    redirectTo: '/dashboard/home',
  },
];

@NgModule({
  declarations: [EditProjectComponent],
  imports: [[RouterModule.forChild(routes)], HttpClientModule, SharedModule],
})
export class ProjectModule {}

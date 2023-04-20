import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectPageComponent } from './components/project-page/project-page.component';

const routes = [
  {
    path: '',
    component: ProjectPageComponent,
  },
];
@NgModule({
  declarations: [ProjectPageComponent],
  imports: [CommonModule, [RouterModule.forChild(routes)]],
})
export class ProjectPageModule {}

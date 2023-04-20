import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPageComponent {
  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.params['id'];
  }
}

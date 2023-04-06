import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomIconService } from './shared/services/custom-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private iconsService: CustomIconService) {
    this.iconsService.loadIcons();
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditModalComponent {}
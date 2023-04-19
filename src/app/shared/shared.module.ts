import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

import { ClipboardComponent } from 'src/app/shared/components/clipboard/clipboard.component';
import { CustomIconComponent } from 'src/app/shared/components/custom-icon/custom-icon.component';
import { ConfirmDialogDirective } from 'src/app/shared/directives/confirm-dialog.directive';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { CopyCellComponent } from './components/ag-grid/copy-cell/copy-cell.component';

@NgModule({
  declarations: [
    CustomIconComponent,
    ClipboardComponent,
    ConfirmModalComponent,
    ConfirmDialogDirective,
    CopyCellComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ClipboardModule,
  ],
  exports: [
    CustomIconComponent,
    ClipboardComponent,
    ConfirmModalComponent,
    MatRippleModule,
    MatProgressSpinnerModule,
    RouterModule,
    CommonModule,
    MatCardModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    ConfirmDialogDirective,
  ],
})
export class SharedModule {}

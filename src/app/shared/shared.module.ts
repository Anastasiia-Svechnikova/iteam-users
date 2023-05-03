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
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

import { CustomIconComponent } from 'src/app/shared/components/custom-icon/custom-icon.component';
import { ConfirmDialogDirective } from 'src/app/shared/directives/confirm-dialog.directive';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';
import { CopyCellComponent } from 'src/app/shared/components/ag-grid/copy-cell/copy-cell.component';
import { StatusCellComponent } from 'src/app/shared/components/ag-grid/status-cell/status-cell.component';
import { EditModalWrapperComponent } from 'src/app/shared/components/edit-modal-wrapper/edit-modal-wrapper.component';

@NgModule({
  declarations: [
    CustomIconComponent,
    ConfirmModalComponent,
    ConfirmDialogDirective,
    CopyCellComponent,
    StatusCellComponent,
    EditModalWrapperComponent,
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
    LayoutModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    CustomIconComponent,
    ConfirmModalComponent,
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
    EditModalWrapperComponent,
  ],
})
export class SharedModule {}

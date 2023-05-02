import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRippleModule } from '@angular/material/core';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

import { CustomIconComponent } from 'src/app/shared/components/custom-icon/custom-icon.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { ConfirmDialogDirective } from 'src/app/shared/directives/confirm-dialog.directive';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { CopyCellComponent } from './components/ag-grid/copy-cell/copy-cell.component';
import { StatusCellComponent } from './components/ag-grid/status-cell/status-cell.component';

@NgModule({
  declarations: [
    CustomIconComponent,
    ConfirmModalComponent,
    ConfirmDialogDirective,
    CopyCellComponent,
    StatusCellComponent,
    LoaderComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ClipboardModule,
    MatSelectModule,
    ReactiveFormsModule,
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
    LoaderComponent,
    ConfirmDialogDirective,
  ],
})
export class SharedModule {}

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
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

import { CopyCellComponent } from 'src/app/shared/components/ag-grid/copy-cell/copy-cell.component';
import { CustomIconComponent } from 'src/app/shared/components/custom-icon/custom-icon.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { ConfirmDialogDirective } from 'src/app/shared/directives/confirm-dialog.directive';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';
import { StatusCellComponent } from 'src/app/shared/components/ag-grid/status-cell/status-cell.component';
import { EditModalWrapperComponent } from 'src/app/shared/components/edit-modal-wrapper/edit-modal-wrapper.component';
import { ContentCardComponent } from 'src/app/shared/components/content-card/content-card.component';

@NgModule({
  declarations: [
    CustomIconComponent,
    ConfirmModalComponent,
    ConfirmDialogDirective,
    CopyCellComponent,
    StatusCellComponent,
    EditModalWrapperComponent,
    ContentCardComponent,
    LoaderComponent,
  ],
  imports: [
    MatDividerModule,
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
    MatDividerModule,
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
    EditModalWrapperComponent,
    ContentCardComponent,
  ],
})
export class SharedModule {}

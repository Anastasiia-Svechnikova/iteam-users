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
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

@NgModule({
  declarations: [CustomIconComponent, ClipboardComponent, LoaderComponent],
  imports: [
    MatProgressSpinnerModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    MatRippleModule,
    MatProgressSpinnerModule,
    CustomIconComponent,
    ClipboardComponent,
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
  ],
})
export class SharedModule {}

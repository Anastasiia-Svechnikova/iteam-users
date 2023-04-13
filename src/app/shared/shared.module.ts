import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

import { CustomIconComponent } from './components/custom-icon/custom-icon.component';

@NgModule({
  declarations: [CustomIconComponent],
  exports: [
    CustomIconComponent,
    MatProgressSpinnerModule,
    RouterModule,
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class SharedModule {}

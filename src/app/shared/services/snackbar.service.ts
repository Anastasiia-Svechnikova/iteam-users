import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'close', { duration: 3000 });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ResponseI } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://iteam-be-nest.onrender.com';
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  login(email: string, password: string): Observable<ResponseI> {
    const body = new HttpParams().set('email', email).set('password', password);
    return this.http.post<ResponseI>(`${this.apiUrl}/auth/sign-in`, body).pipe(
      tap((response) =>
        localStorage.setItem('accessToken', response.tokens.accessToken),
      ),
      catchError((e) => {
        this.snackbar.open(e.error.message, 'Close', {
          duration: 2000,
          horizontalPosition: 'right',
        });
        return throwError(e);
      }),
    );
  }

  register(email: string, password: string): Observable<ResponseI> {
    const body = new HttpParams().set('email', email).set('password', password);
    return this.http
      .post<ResponseI>(`${this.apiUrl}/auth/registration`, body)
      .pipe(
        catchError((e) => {
          this.snackbar.open(e.error.message, 'Close', {
            duration: 2000,
            horizontalPosition: 'right',
          });
          return throwError(e);
        }),
      );
  }
}

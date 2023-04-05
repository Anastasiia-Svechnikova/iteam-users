import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

import { LocalService } from '../services/local.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router, private localService: LocalService) {}
  intercept<T, U>(
    req: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<U>> {
    const token = this.localService.getData('accessToken');
    if (token) {
      const processedReq = req.clone({
        setHeaders: {
          accessToken: token,
        },
      });
      return next.handle(processedReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.router.navigateByUrl('auth/login');
          }
          return throwError(error);
        }),
      );
    }
    return next.handle(req);
  }
}

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

import { LocalStorageService } from '../services/local-storage.service';
import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private authService: AuthService,
  ) {}

  intercept<T, U>(
    req: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<U>> {
    const token = this.localStorageService.getData('Authorization');
    if (token) {
      const processedReq = this.addToken(req, token);
      return next.handle(processedReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.authService.logout();
            this.localStorageService.removeData('Authorization');
            this.router.navigateByUrl('auth/login');
          }
          return throwError(error);
        }),
      );
    }
    return next.handle(req);
  }

  addToken<T>(request: HttpRequest<T>, token: string): HttpRequest<T> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // handle401Error<T, U>(
  //   request: HttpRequest<T>,
  //   next: HttpHandler,
  // ): Observable<HttpEvent<U>> {
  //   return this.authService.refresh().pipe(
  //     switchMap((loginResponseData: ILoginResponseData) => {
  //       this.localStorageService.saveData(
  //         'Authorization',
  //         loginResponseData.tokens.accessToken,
  //       );
  //       const processedReq = this.addToken(
  //         request,
  //         loginResponseData.tokens.accessToken,
  //       );
  //       return next.handle(processedReq);
  //     }),
  //     catchError((error) => {
  //       this.authService.logout();
  //       this.localStorageService.removeData('Authorization');
  //       this.router.navigateByUrl('auth/login');
  //       return throwError(error);
  //     }),
  //   );
  // }
}

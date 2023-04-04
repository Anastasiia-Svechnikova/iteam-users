import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept<T, U>(
    req: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<U>> {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const processedReq = req.clone({
        setHeaders: {
          'accessToken': token,
        },
      });
      return next.handle(processedReq);
    }
    return next.handle(req);
  }
}

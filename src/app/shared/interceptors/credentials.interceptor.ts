import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CredentialsInterceptor implements HttpInterceptor {
  intercept<T, U>(
    req: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<U>> {
    return next.handle(req.clone({ withCredentials: true }));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ILoginResponseData } from '../models/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<ILoginResponseData> {
    return this.http.post<ILoginResponseData>(
      `${environment.apiUrl}/auth/sign-in`,
      {
        email: email,
        password: password,
      },
    );
  }

  register(email: string, password: string): Observable<ILoginResponseData> {
    return this.http.post<ILoginResponseData>(
      `${environment.apiUrl}/auth/registration`,
      {
        email: email,
        password: password,
      },
    );
  }
}

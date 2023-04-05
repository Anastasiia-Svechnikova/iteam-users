import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ILoginResponseData } from '../models/login-response-data';
import { environment } from '../../../environments/environment';
import { ICredentials } from '../models/credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: ICredentials): Observable<ILoginResponseData> {
    return this.http.post<ILoginResponseData>(
      `${environment.apiUrl}/auth/sign-in`,
      credentials,
    );
  }

  register(credentials: ICredentials): Observable<ILoginResponseData> {
    return this.http.post<ILoginResponseData>(
      `${environment.apiUrl}/auth/registration`,
      credentials,
    );
  }
}

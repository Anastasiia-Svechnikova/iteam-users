import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ILoginResponseData } from '../models/login-response-data';
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

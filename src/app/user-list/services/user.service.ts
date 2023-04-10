import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../../shared/models/user';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${environment.apiUrl}/users/${id}`);
  }
}

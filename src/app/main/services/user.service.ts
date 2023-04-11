import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';

@Injectable({
  providedIn: 'root',
})
export class MainUserService {
  constructor(private http: HttpClient) {}

  getUserById(id: string): Observable<IUserDetails> {
    return this.http.get<IUserDetails>(`${environment.apiUrl}/users/${id}`);
  }
}

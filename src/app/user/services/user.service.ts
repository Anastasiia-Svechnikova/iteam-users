import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { IGetUsersResponse } from 'src/app/user/interfaces/get-users-response';
import { IUpdateUserDTO } from 'src/app/user/interfaces/update-user-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserById(id: string): Observable<IUserDetails> {
    return this.http.get<IUserDetails>(`${environment.apiUrl}/users/${id}`);
  }

  getAllUsers(): Observable<IGetUsersResponse> {
    return this.http.get<IGetUsersResponse>(`${environment.apiUrl}/users`);
  }

  updateUserById(id: string, body: IUpdateUserDTO): Observable<IUserDetails> {
    return this.http.patch<IUserDetails>(
      `${environment.apiUrl}/users/${id}`,
      body,
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ITechnology } from 'src/app/shared/interfaces/technology';

@Injectable({
  providedIn: 'root',
})
export class TechnologiesService {
  constructor(private http: HttpClient) {}

  //   updateUserById(id: string, body: IUpdateUserDTO): Observable<IUserDetails> {
  //     return this.http.patch<IUserDetails>(
  //       `${environment.apiUrl}/users/${id}`,
  //       body,
  //     );
  //   }

  getAllTechnologies(): Observable<ITechnology[]> {
    return this.http.get<ITechnology[]>(`${environment.apiUrl}/technologies`);
  }
}

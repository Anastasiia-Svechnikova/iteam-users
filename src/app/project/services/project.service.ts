import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users/${id}`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users`);
  }
}

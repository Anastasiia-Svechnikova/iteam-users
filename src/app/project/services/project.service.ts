import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IProjectDetailsData } from 'src/app/shared/interfaces/project-details';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  getAllProjects(): Observable<IProjectDetailsData[]> {
    return this.http.get<IProjectDetailsData[]>(`${environment.apiUrl}/projects`);
  }
}

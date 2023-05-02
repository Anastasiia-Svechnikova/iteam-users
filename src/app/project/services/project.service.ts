import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IProjectDetailsData } from 'src/app/shared/interfaces/project-details';
import { IUpdateProjectDTO } from 'src/app/shared/interfaces/update-project';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<IProjectDetailsData[]> {
    return this.http.get<IProjectDetailsData[]>(`${environment.apiUrl}/projects`);
  }

  updateProjectById(id: string, body: IUpdateProjectDTO,): Observable<IProjectDetailsData> {
    return this.http.patch<IProjectDetailsData>(
      `${environment.apiUrl}/projects/${id}`,
      body,
    );
  }
}

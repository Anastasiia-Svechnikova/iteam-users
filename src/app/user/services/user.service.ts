import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { IUpdateUserDTO } from 'src/app/user/components/user-profile/interfaces/update-user-dto';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { IGetUsersResponse } from 'src/app/user/components/user-profile/interfaces/get-users-response';
import { IAssignTechnologyToUserDTO } from 'src/app/user/components/technologies-form-modal/interfaces/assign-technology-dto';
import { IUserEducationFormData } from 'src/app/user/components/user-profile/user-edit/education-form-modal/education-form-modal.component';
import { IUpdateUserEducationItemDTO } from 'src/app/user/components/user-profile/interfaces/update-user-education-item-dto';
import { IUserEducationDetails } from 'src/app/shared/interfaces/user-education';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) {}

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

  getCurrentUser(): Observable<IUserDetails> {
    const id = this.localStorageService.getData('id');
    if (id) {
      return this.getUserById(id);
    } else {
      throw throwError(() => new Error('Could not get current user id'));
    }
  }

  addUserEduction(
    educationItem: IUpdateUserEducationItemDTO,
  ): Observable<IUserEducationDetails> {
    return this.http.post<IUserEducationDetails>(
      `${environment.apiUrl}/education-infos`,
      educationItem,
    );
  }

  assignTechnologyToUser(
    technology: IAssignTechnologyToUserDTO,
  ): Observable<IAssignTechnologyToUserDTO> {
    return this.http.post<IAssignTechnologyToUserDTO>(
      `${environment.apiUrl}/users/technology`,
      technology,
    );
  }

  removeTechnologyFromUser(
    technology: IAssignTechnologyToUserDTO,
  ): Observable<IAssignTechnologyToUserDTO> {
    // endpoint to remove a technology from a particular user is expected to be used here
    // return this.http.delete<void>(`${environment.apiUrl}/users/technology`);
    return of(technology);
  }
}

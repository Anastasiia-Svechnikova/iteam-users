import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class MainUserService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) {}

  getUserById(): Observable<IUserDetails> {
    const userId = this.getCurrentUserId();
    if (userId) {
      return this.http.get<IUserDetails>(
        `${environment.apiUrl}/users/${userId}`,
      );
    } else {
      return throwError(() => new Error('Failed to get current user id'));
    }
  }

  private getCurrentUserId(): number | null {
    const id = this.localStorageService.getData('id');
    return id ? Number(id) : null;
  }
}

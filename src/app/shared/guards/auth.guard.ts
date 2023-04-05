import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LocalService } from '../services/local.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private localService: LocalService) {}

  canActivate(): boolean {
    const token = this.localService.getData('accessToken');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from '../constants/custom-application-icons';

@Injectable({
  providedIn: 'root',
})
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {}

  loadIcons(): void {
    Object.keys(Icons).forEach((icon) =>
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `./assets/icons/${Icons[icon as keyof typeof Icons]}.svg`,
        ),
      ),
    );
  }
}

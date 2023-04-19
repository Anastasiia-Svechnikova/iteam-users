import { Clipboard } from '@angular/cdk/clipboard';
import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, take } from 'rxjs';
import { clipboardPropertyNamesRegistry } from 'src/app/shared/services/clipboard/clipboard-property-names-registry';
import {
  OffsetOptions,
  modifyStringByOffsetVariant,
} from 'src/app/shared/services/clipboard/modify-string-by-offset-variant';
import { datePropertiesInClipboard } from 'src/app/shared/constants/date-properties-in-clipboard';
import { propertiesHiddenInClipboardText } from 'src/app/shared/constants/properties-hidden-in-clipboard-text';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class ClipboardService {
  constructor(
    private _snackBarService: SnackbarService,
    private _clipboard: Clipboard,
  ) {}

  copyToClipboard<T extends object>(data: T | Observable<T>): void {
    if (data instanceof Observable) {
      data.pipe(take(1)).subscribe((data) => {
        const formattedData = this.formatContent(data);
        this.copy(formattedData);
      });
    } else {
      this.copy(this.formatContent(data));
    }
    return;
  }

  private copy(formattedData: string): void {
    this._clipboard.copy(formattedData);
    this._snackBarService.openSnackBar('Copied to clipboard!');
  }

  private formatContent<T extends object>(dataToCopy: T): string {
    function formatDataHelper(dataToCopy: T): string {
      const keys = Object.keys(dataToCopy);
      return keys.reduce((acc, dataToCopyKey) => {
        const dataToCopyItem = dataToCopy[dataToCopyKey as keyof T];
        if (
          propertiesHiddenInClipboardText.includes(dataToCopyKey) ||
          (!dataToCopyItem && dataToCopyItem !== false)
        ) {
          return acc.concat('');
        }
        if (dataToCopyItem instanceof Array) {
          return acc.concat(
            dataToCopyItem?.map((key: T) => formatDataHelper(key)).join('\n') ||
              'no data',
          );
        }
        const key = modifyStringByOffsetVariant(
          clipboardPropertyNamesRegistry.get(dataToCopyKey) as string,
          OffsetOptions.bold,
        );
        let value = '';
        if (typeof dataToCopyItem === 'boolean') {
          value = dataToCopyItem ? 'yes' : 'no';
        } else if (datePropertiesInClipboard.includes(dataToCopyKey)) {
          value = formatDate(
            new Date(dataToCopyItem as string),
            'yyyy-MM-dd',
            'en-US',
          );
        } else {
          value = String(dataToCopyItem);
        }
        return acc.concat(`${key}:  \t${value} \n`);
      }, '');
    }
    return formatDataHelper(dataToCopy);
  }
}

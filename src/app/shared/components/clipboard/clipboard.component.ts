import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { format } from 'date-fns';

import { clipboardPropertyNamesRegistry } from 'src/app/shared/components/clipboard/clipboard-property-names-registry';
import {
  OffsetOptions,
  modifyStringByOffsetVariant,
} from 'src/app/shared/components/clipboard/modify-string-by-offset-variant';
import { datePropertiesInClipboard } from 'src/app/shared/constants/date-properties-in-clipboard';
import { propertiesHiddenInClipboardText } from 'src/app/shared/constants/properties-hidden-in-clipboard-text';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { IUpdateUserDTO } from 'src/app/user/components/user-profile/interfaces/update-user-dto';

/**
 * reusable clipboard component,
 * IClipboardData should be extended as union type with other interfaces
 */
type IClipboardData = IUpdateUserDTO;

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClipboardComponent {
  @Input() data!: IClipboardData;
  constructor(
    private _clipboard: Clipboard,
    private _snackBarService: SnackbarService,
  ) {}

  onCopy(): void {
    const data = this.formatContent<IClipboardData>(this.data);
    this._clipboard.copy(data);
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
        console.log(dataToCopyItem, typeof dataToCopyItem);
        if (typeof dataToCopyItem === 'boolean') {
          value = dataToCopyItem ? 'yes' : 'no';
        } else if (datePropertiesInClipboard.includes(dataToCopyKey)) {
          value = format(new Date(dataToCopyItem as string), 'yyyy-MM-dd');
        } else {
          value = String(dataToCopyItem);
        }
        return acc.concat(`${key}:  \t${value} \n`);
      }, '');
    }
    return formatDataHelper(dataToCopy);
  }
}

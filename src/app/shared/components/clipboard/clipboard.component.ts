import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
      const formattedData = keys.reduce((acc, dataToCopyKey) => {
        if (
          ['createdAt', 'updatedAt', 'id', 'userId'].includes(dataToCopyKey)
        ) {
          return acc.concat('');
        }
        const dataToCopyItem = dataToCopy[dataToCopyKey as keyof T];
        if (dataToCopyItem instanceof Array) {
          return acc.concat(
            dataToCopyItem?.map((key: T) => formatDataHelper(key)).join('\n') ||
              'no data',
          );
        }
        return acc.concat(
          `${dataToCopyKey}: ${
            dataToCopy[dataToCopyKey as keyof T] || 'no data'
          } \n`,
        );
      }, '');
      return formattedData;
    }
    return formatDataHelper(dataToCopy);
  }
}

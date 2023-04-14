import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { IUpdateUserDTO } from 'src/app/user/components/user-profile/interfaces/update-user-dto';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClipboardComponent {
  @Input() data!: IUpdateUserDTO;
  constructor(
    private _clipboard: Clipboard,
    private _snackBarService: SnackbarService,
  ) {}

  onCopy(): void {
    const data = this.formatContent(this.data);
    this._clipboard.copy(data);
    this._snackBarService.openSnackBar('Copied to clipboard!');
  }

  formatContent(dataToCopy: IUpdateUserDTO): string {
    function formatDataHelper(dataToCopy: IUpdateUserDTO): string {
      const keys = Object.keys(dataToCopy);
      const formattedData = keys.reduce((acc, dataToCopyKey) => {
        if (
          ['createdAt', 'updatedAt', 'id', 'userId'].includes(dataToCopyKey)
        ) {
          return acc.concat('');
        }
        const dataToCopyItem =
          dataToCopy[dataToCopyKey as keyof IUpdateUserDTO];
        if (dataToCopyItem instanceof Array) {
          return acc.concat(
            dataToCopyItem
              ?.map((key: object) => formatDataHelper(key))
              .join('\n') || 'no data',
          );
        }
        return acc.concat(
          `${dataToCopyKey}: ${
            dataToCopy[dataToCopyKey as keyof IUpdateUserDTO] || 'no data'
          } \n`,
        );
      }, '');
      return formattedData;
    }
    return formatDataHelper(dataToCopy);
  }
}

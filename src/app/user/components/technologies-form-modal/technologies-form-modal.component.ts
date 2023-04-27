import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith, switchMap, takeUntil } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { MatChipInputEvent } from '@angular/material/chips';
import { ITechnology } from 'src/app/shared/interfaces/technology';
import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { TechnologiesFormStore } from 'src/app/user/components/technologies-form-modal/technologies-form-modal.store';
import { ITechnologiesModalDialogData } from 'src/app/user/components/technologies-form-modal/interfaces/technologies-modal-dialog-data';
import { Store } from '@ngrx/store';
import { userProfileActions } from 'src/app/user/components/user-profile/state/actions';
import { provideComponentStore } from '@ngrx/component-store';

interface INewSkill {
  title: string;
}

@Component({
  selector: 'app-skills-form-modal',
  templateUrl: './technologies-form-modal.component.html',
  styleUrls: [
    './technologies-form-modal.component.scss',
    '../user-profile/user-edit/user-edit.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideComponentStore(TechnologiesFormStore)],
})
export class TechnologiesFormModalComponent
  extends UnSubscriberComponent
  implements OnInit
{
  separatorKeysCodes: number[] = [ENTER, COMMA];
  techSkillsCtrl = new FormControl('');
  filteredTechSkills$!: Observable<ITechnology[]>;

  allTechnologies$ = this._technologiesFormStore.allTechnologies$;
  userTechnologies$ = this._technologiesFormStore.userTechnologies$;

  @ViewChild('skillsInput') skillsInput!: ElementRef<HTMLInputElement>;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Observable<ITechnologiesModalDialogData>,
    public _dialogRef: MatDialogRef<TechnologiesFormModalComponent>,
    private _technologiesFormStore: TechnologiesFormStore,
  ) {
    super();
  }

  ngOnInit(): void {
    this.filteredTechSkills$ = this.techSkillsCtrl.valueChanges.pipe(
      takeUntil(this.destroyed$),
      startWith(null),
      switchMap((skillTitle: string | null) => {
        return skillTitle ? this._filter(skillTitle) : this.allTechnologies$;
      }),
    );

    this.data.pipe(takeUntil(this.destroyed$)).subscribe((data) => {
      this._technologiesFormStore.setUserTechnologies([...data.techStack]);
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this._technologiesFormStore.AddTechnology$({ title: value });
    }
    event.chipInput!.clear();
    this._resetInputs();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const selectedTechnology = event.option.value;
    this._technologiesFormStore.addToUserTechnologies(selectedTechnology);
    this._resetInputs();
  }

  remove(technology: ITechnology | INewSkill): void {
    // const index = this.techSkills.findIndex(
    //   ({ title }) => title === technology.title,
    // );
    // if (index >= 0) {
    //   this.techSkills.splice(index, 1);
    // }
  }

  onSubmit(): void {
    // this._dialogRef.close({ addedTechnologies, removedTechnologies });
  }

  private _filter(value: string | ITechnology): Observable<ITechnology[]> {
    const filterValue =
      typeof value === 'string'
        ? value.toLowerCase()
        : value.title.toLowerCase();

    return this.allTechnologies$.pipe(
      map((technologies) => {
        return technologies.filter(({ title }) =>
          title.toLowerCase().includes(filterValue),
        );
      }),
    );
  }

  private _resetInputs(): void {
    this.skillsInput.nativeElement.value = '';
    this.techSkillsCtrl.setValue(null);
  }
}

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
import { Observable, map, startWith, takeUntil } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { MatChipInputEvent } from '@angular/material/chips';
import { ITechnology } from 'src/app/shared/interfaces/technology';
import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { TechnologiesFormStore } from 'src/app/user/components/technologies-form-modal/technologies-form-modal.store';

export interface SkillsFormDialogData {
  techStack: ITechnology[];
  category: 'user' | 'project';
  id: number;
}

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
  providers: [TechnologiesFormStore],
})
export class TechnologiesFormModalComponent
  extends UnSubscriberComponent
  implements OnInit
{
  separatorKeysCodes: number[] = [ENTER, COMMA];
  techSkillsCtrl = new FormControl('');

  filteredTechSkills!: Observable<ITechnology[]>;
  techSkills: Array<ITechnology | INewSkill> = [];
  allTechSkills: ITechnology[] = [];

  @ViewChild('skillsInput') skillsInput!: ElementRef<HTMLInputElement>;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Observable<SkillsFormDialogData>,
    public _dialogRef: MatDialogRef<TechnologiesFormModalComponent>,
    private _technologiesFormStore: TechnologiesFormStore,
  ) {
    super();
  }

  ngOnInit(): void {
    this.filteredTechSkills = this.techSkillsCtrl.valueChanges.pipe(
      takeUntil(this.destroyed$),
      startWith(null),
      map((skillTitle: string | null) => {
        return skillTitle ? this._filter(skillTitle) : [...this.allTechSkills];
      }),
    );
    this.data.pipe(takeUntil(this.destroyed$)).subscribe((data) => {
      this.techSkills = [...data.techStack];
    });

    this._technologiesFormStore.getAllTechnologies$();
    this._technologiesFormStore.allTechnologies$.subscribe(
      (data) => (this.allTechSkills = [...data]),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.techSkills.push({ title: value });
    }
    event.chipInput!.clear();
    this._resetInputs();
  }

  remove(skill: ITechnology | INewSkill): void {
    const index = this.techSkills.findIndex(
      ({ title }) => title === skill.title,
    );
    if (index >= 0) {
      this.techSkills.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.techSkills.push({ title: event.option.viewValue });
    this._resetInputs();
  }

  onSubmit(): void {
    this._dialogRef.close({ skills: this.techSkills });
  }

  private _filter(value: string | ITechnology): ITechnology[] {
    const filterValue =
      typeof value === 'string'
        ? value.toLowerCase()
        : value.title.toLowerCase();

    return this.allTechSkills.filter(({ title }) =>
      title.toLowerCase().includes(filterValue),
    );
  }

  private _resetInputs(): void {
    this.skillsInput.nativeElement.value = '';
    this.techSkillsCtrl.setValue(null);
  }
}

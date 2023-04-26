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

export interface SkillsFormDialogData {
  techStack: ITechnology[];
}

interface INewSkill {
  title: string;
}

@Component({
  selector: 'app-skills-form-modal',
  templateUrl: './skills-form-modal.component.html',
  styleUrls: ['./skills-form-modal.component.scss', '../user-edit.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsFormModalComponent
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
    public _dialogRef: MatDialogRef<SkillsFormModalComponent>,
  ) {
    super();
  }

  ngOnInit(): void {
    this.filteredTechSkills = this.techSkillsCtrl.valueChanges.pipe(
      startWith(null),
      map((skillTitle: string | null) =>
        skillTitle ? this._filter(skillTitle) : this.allTechSkills.slice(),
      ),
    );
    this.data.pipe(takeUntil(this.destroyed$)).subscribe((data) => {
      this.techSkills = data.techStack;
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.techSkills.push({ title: value });
    }

    // Clear the input value
    event.chipInput!.clear();

    this.techSkillsCtrl.setValue(null);
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
    console.log(event);
    this.techSkills.push({ title: event.option.viewValue });
    this.skillsInput.nativeElement.value = '';
    this.techSkillsCtrl.setValue(null);
  }

  private _filter(value: string): ITechnology[] {
    const filterValue = value.toLowerCase();

    return this.allTechSkills.filter(({ title }) =>
      title.toLowerCase().includes(filterValue),
    );
  }

  onSubmit(): void {
    this._dialogRef.close({ skills: this.techSkills });
  }
}

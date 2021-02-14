import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Output, Input, EventEmitter } from '@angular/core';

export interface MakeGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};


@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.scss']
})
export class MakeComponent implements OnInit {
  @Output() makeEvent: EventEmitter<string> = new EventEmitter<string>();
  carMake: string = "";

  makeForm: FormGroup = this._formBuilder.group({
    makeGroup: '',
  });

  makesForm: MakeGroup[] = [{
    letter: 'A',
    names: ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi']
  }, {
    letter: 'B',
    names: ['Bentley', 'BMW', 'Bugatti', 'Buick']
  }, {
    letter: 'C',
    names: ['Cadillac', 'Chevrolet', 'Chrysler']
  }, {
    letter: 'D',
    names: ['Dodge']
  }, {
    letter: 'F',
    names: ['FIAT', 'Ford']
  }, {
    letter: 'G',
    names: ['Genesis', 'GMC']
  }, {
    letter: 'H',
    names: ['Honda', 'Hyundai']
  }, {
    letter: 'I',
    names: ['Infiniti']
  }, {
    letter: 'J',
    names: ['Jaguar', 'Jeep']
  }, {
    letter: 'K',
    names: ['Kia']
  }, {
    letter: 'L',
    names: ['Lamborghini', 'Lexus', 'Lincoln']
  }, {
    letter: 'M',
    names: ['Maserati', 'Mazda', 'Mercedes-Benz', 'MINI', 'Mitsubishi']
  }, {
    letter: 'N',
    names: [ 'Nissan']
  }, {
    letter: 'P',
    names: ['Porsche']
  }, {
    letter: 'R',
    names: ['Ram', 'Rolls-Royce']
  }, {
    letter: 'S',
    names: ['Subaru']
  }, {
    letter: 'T',
    names: ['Toyota']
  }, {
    letter: 'V',
    names: ['Volkswagen', 'Volvo']
  }];
  // filter options when searching
  filteredOptions: Observable<MakeGroup[]> | undefined;
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    // filtering the options based on user input
    this.filteredOptions = this.makeForm.get('makeGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
      this.setMakeValue("hi");
  }

  // actually filters the group name and returns the list of make
  private _filterGroup(value: string): MakeGroup[] {
    if (value) {
      return this.makesForm
        .map(make => ({letter: make.letter, names: _filter(make.names, value)}))
        .filter(make => make.names.length > 0);
    }

    return this.makesForm;
  }

  public setMakeValue(make: string) {
    this.carMake = make;
    console.log(this.makesForm.values);
  }

  public emitMakeValue(): void {
    console.log(this.carMake);
  }
}

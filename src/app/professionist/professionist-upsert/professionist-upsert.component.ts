import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Professionist } from '../Professionist';


@Component({
  selector: 'app-professionist-upsert',
  templateUrl: './professionist-upsert.component.html',
  styleUrls: ['./professionist-upsert.component.css']
})
export class ProfessionistUpsertComponent implements OnInit {
  professionistForm: FormGroup;
  _professionist: Professionist;
  @Input("professionist")
  set professionist(value: Professionist) {
    this._professionist = value;
    if (this._professionist) {
      this.professionistForm.patchValue({
        firstname: this.professionist.firstname,
        lastname: this.professionist.lastname,
        profession: this.professionist.profession,
        birthdate: this.professionist.birthdate,
        address: this.professionist.address,
        region: this.professionist.region,
        postalcode: this.professionist.postalcode,
        destination: this.professionist.destination,
        phone: this.professionist.phone,
        mail: this.professionist.mail,
        minAvailability: this.professionist.minAvailability,
        maxAvailability: this.professionist.maxAvailability
      });
    }

  }

  get professionist(): Professionist {
    return this._professionist;
  }

  @Output("upsert") upsertEmitter: EventEmitter<Professionist>
    = new EventEmitter<Professionist>();
  @Output("cancel") cancelEmitter: EventEmitter<void>
    = new EventEmitter<void>();
  constructor(private fb: FormBuilder) { }

  cancel(): void {
    this.professionistForm.reset();
    this.cancelEmitter.emit();
  }
  upsert(): void {
    const pro: Professionist = { ...this.professionist, ...this.professionistForm.value }
    this.upsertEmitter.emit(pro);
    this.professionistForm.reset();
  }

  ngOnInit() {
    this.professionistForm = this.fb.group({
      firstname: '',
      lastname: '',
      profession: '',
      birthdate: '',
      address: '',
      region: '',
      postalcode: '',
      destination: '',
      phone: '',
      mail: '',
      minAvailability: '',
      maxAvailability: ''
    });
  }

}

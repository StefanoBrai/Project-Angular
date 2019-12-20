import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Request } from '../Request';

@Component({
  selector: 'app-request-upsert',
  templateUrl: './request-upsert.component.html',
  styleUrls: ['./request-upsert.component.css']
})
export class RequestUpsertComponent implements OnInit {
  requestForm: FormGroup;
  _request: Request;
  @Input("request")
  set request(value: Request) {
    this._request = value;
    if (this._request) {
      this.requestForm.patchValue({
        destination: this.request.destination,
        skill: this.request.skill,
      });
    }
    

  }

  get request(): Request {
    return this._request;
  }

  @Output("upsert") upsertEmitter: EventEmitter<Request>
    = new EventEmitter<Request>();
  @Output("cancel") cancelEmitter: EventEmitter<void>
    = new EventEmitter<void>();
  constructor(private fb: FormBuilder) { }

  cancel(): void {
    this.requestForm.reset();
    this.cancelEmitter.emit();
  }
  upsert(): void {
    const req: Request = { ...this.request, ...this.requestForm.value }
    this.upsertEmitter.emit(req);
    this.requestForm.reset();
  }

  ngOnInit() {
    this.requestForm = this.fb.group({
      destination: ''
    });
  }

}

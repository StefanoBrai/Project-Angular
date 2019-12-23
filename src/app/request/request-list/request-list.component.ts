import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Request } from '../Request';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  @Input("requests") requests: Request[];
  @Output("delete") deleteEmitter: EventEmitter<string>
    = new EventEmitter<string>();
  @Output("select") selectEmitter: EventEmitter<Request>
    = new EventEmitter<Request>();
  @Output("candidature") candidateEmitter: EventEmitter<Request>
    = new EventEmitter<Request>();

  constructor() { }

  onDelete(id: string) {
    this.deleteEmitter.emit(id);
  }

  onSelect(req: Request) {
    this.selectEmitter.emit(req);
  }

  onCandidature(req: Request){
    this.candidateEmitter.emit(req)
  }

  ngOnInit() {
  }

}

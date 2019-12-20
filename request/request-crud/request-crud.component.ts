import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../Request';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request-crud',
  templateUrl: './request-crud.component.html',
  styleUrls: ['./request-crud.component.css']
})
export class RequestCrudComponent implements OnInit {

  request: Request;
  private requests: Request[];
  errorMessage: string;
  constructor(private requestSevice: RequestService) {
  }

  insertRequest(req: Request): void {
    this.requestSevice.insertRequest(req)
      .subscribe(
        p => {
          console.log(p);
          this.loadRequest();
        });
  }

  deleteRequest(id: string): void {
    this.requestSevice.deleteRequest(id)
      .subscribe(b => {
        console.log(typeof b);
        this.loadRequest();
      });
  }

  selectRequest(request: Request) {
    this.request = request;
  }

  upsertRequest(req: Request): void {
    console.log("upserting request");
    if (this.request && this.request.id) {
      this.updateRequest(req);
    } else {
      this.insertRequest(req);
    }
  }
  updateRequest(req: Request): void {
    this.requestSevice.updateRequest(req)
      .subscribe(p => {
        console.log("aggiornato");
        this.loadRequest();
        this.request = null;
      })
  }


  cancel(): void {
    this.request = null;
  }

  ngOnInit() {
    this.loadRequest();

  }

  loadRequest(): void {
    let obs: Observable<Request[]> = this.requestSevice.getRequest();
    obs.subscribe(
      ps => {
        console.log(ps);
        this.requests = ps;
      }
    );
  }
}

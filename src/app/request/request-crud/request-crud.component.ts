import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../Request';
import { Observable } from 'rxjs';
import { CandidatureService } from 'src/app/candidature/candidature-service';
import { Candidature } from 'src/app/candidature/candidature';

@Component({
  selector: 'app-request-crud',
  templateUrl: './request-crud.component.html',
  styleUrls: ['./request-crud.component.css']
})
export class RequestCrudComponent implements OnInit {

  request: Request;
  private requests: Request[];
  errorMessage: string;
  candidatures: Candidature[];
  showCandidature: boolean = false;
  constructor(private requestSevice: RequestService, private candidatureService: CandidatureService) {
  }

  ngOnInit() {
    this.loadRequest();
  }

  loadCandidature(): void {
    this.candidatureService.getCandidature().subscribe(
      cs=> {this.candidatures=cs}
    )
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

  displayCandidatureList(): void {
    this.showCandidature = !this.showCandidature;
  }

  addCandidature(req: Request): void {
    this.requestSevice.addCandidate(req)
      .subscribe(
        p => {
          console.log('La tua candidatura è stata inviata!');
          window.alert('La tua candidatura è stata inviata!');
          this.loadRequest();
        }
      );
    this.requestSevice.addCandidature({
    id: '',
    req: req,
    dateOfSigning: Date.now().toString(),
    prof: {
      firstname:'ciccio',
      lastname: 'pasticcio',
      address: '',
      birthdate: '',
      destination: '',
      id: '',
      mail: '',
      maxAvailability: '',
      minAvailability:'',
      phone: '',
      postalcode: '',
      profession:'',
      region:''
    }
  }).subscribe(p=> {this.loadRequest();
                    this.loadCandidature();})
  }

  insertRequest(req: Request): void {
    this.requestSevice.insertRequest(req)
      .subscribe(
        p => {
          console.log(p);
          this.loadRequest();
        }
      );
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
  
}

import { Component, OnInit, Input } from '@angular/core';
import { Candidature } from '../candidature';
import { CandidatureService } from '../candidature-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-candidature-list',
  templateUrl: './candidature-list.component.html',
  styleUrls: ['./candidature-list.component.css']
})
export class CandidatureListComponent implements OnInit {

  @Input("candidatures") candidatures: Candidature[];

  constructor(private candService: CandidatureService) { }

  loadCandidatures(): void {
    let obs: Observable<Candidature[]> = this.candService.getCandidature();
    obs.subscribe(
      cs => {
        console.log(cs);
        this.candidatures = cs;
      }
    );
  }

  ngOnInit() {
    this.loadCandidatures();
  }

}

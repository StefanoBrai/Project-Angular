import { Component, OnInit } from '@angular/core';
import { Professionist } from '../Professionist';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionistService } from '../professionist.service';

@Component({
selector: 'professionist-details-component',
templateUrl: './professionist-details.component.html',
styleUrls: ['./professionist-details.component.css']
})
export class ProfessionistDetailsComponent implements OnInit {
    pageTitle = 'Professionist Detail';
    errorMessage = 'NO';
    pro: Professionist | undefined;
  
    constructor(private route: ActivatedRoute,
      private router: Router,
      private professionistService: ProfessionistService) {
    }
  
    ngOnInit() {
      const param = this.route.snapshot.paramMap.get('id');
      if (param) {
        const id = (+param).toString();
        this.getProfessionistById(id);
      }
    }
  
    getProfessionistById(id: string) {
      this.professionistService.getProfessionistById(id).subscribe(
        professionist => this.pro = professionist,
        error => this.errorMessage = <any>error);
    }
  
    onBack(): void {
      this.router.navigate(['/professionist']);
    }
  
}
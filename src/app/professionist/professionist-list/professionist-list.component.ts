import { Component, OnInit } from '@angular/core';
import { ResolvedStaticSymbol } from '@angular/compiler';

@Component({
  selector: 'app-professionist-list',
  templateUrl: './professionist-list.component.html',
  styleUrls: ['./professionist-list.component.css']
})
export class ProfessionistListComponent implements OnInit {

  professionists = [
    {
      id: 1,
      firstname: "Gianni",
      lastname: "Rossi",
      country: "ITA"
    },
    {
      id: 2,
      firstname: "Massimo",
      lastname: "Luisi",
      country: "USA"
    },
    {
      id: 3,
      firstname: "Francesca",
      lastname: "Galliani",
      country: "FRA"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

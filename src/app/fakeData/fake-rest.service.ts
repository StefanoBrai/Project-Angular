import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { ProfessionistService } from '../professionist/professionist.service';
import { HttpClient } from '@angular/common/http';
import { Professionist } from '../professionist/Professionist';

@Injectable({
  providedIn: 'root'
})
export class FakeRestService implements InMemoryDbService {

  createDb(): {} {    //A volte ritorna un oggetto, mentre a volte un Observable con oggetto o una promise
    
    let professionistsArray : Professionist[] = [
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

    return {
      professionists : professionistsArray
    }
  }

  constructor() {

  }
}

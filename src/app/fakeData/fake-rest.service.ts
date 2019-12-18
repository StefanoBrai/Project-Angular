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

    let professionistsArray: Professionist[] = [
      {
        id: 1,
        firstname: "Francesca",
        lastname: "Biagi",
        profession: "Developer",
        birthdate: new Date("1990"),
        address: "Via Roma",
        region: "Italy",
        postalcode: "16159",
        destination: 2,
        phone: "321-321445",
        mail: "fb@dev.it",
        minAvailability: "3 weeks",
        maxAvailability: "6 weeks"
      },
      {
        id: 2,
        firstname: "Alessio",
        lastname: "Nanni",
        profession: "Developer",
        birthdate: new Date("1999"),
        address: "34 Street",
        region: "USA",
        postalcode: "345223",
        destination: 1,
        phone: "321-324545",
        mail: "an@dev.it",
        minAvailability: "2 weeks",
        maxAvailability: "8 weeks"
      },
      {
        id: 3,
        firstname: "Roberto",
        lastname: "Ballini",
        profession: "Developer",
        birthdate: new Date("19600402"),
        address: "5 Ave",
        region: "USA",
        postalcode: "553432",
        destination: 1,
        phone: "321-43223345",
        mail: "rb@dev.it",
        minAvailability: "6 weeks",
        maxAvailability: "1 year"
      }
    ]

    return {
      professionists: professionistsArray
    }
  }

  constructor() {

  }
}

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { ProfessionistService } from '../professionist/professionist.service';
import { HttpClient } from '@angular/common/http';
import { Professionist } from '../professionist/Professionist';
import { Request } from '../request/Request';
import { Candidature } from '../candidature/candidature';

@Injectable({
  providedIn: 'root'
})
export class FakeRestService implements InMemoryDbService {

  createDb(): {} {    //A volte ritorna un oggetto, mentre a volte un Observable con oggetto o una promise

    let candidatureArray:Candidature[] = [
      {
        id: '1',
        req: {
          id: '1',
          companyName:'Facebook',
          projectName:'New Media',
          destination: 'USA',
          skill: 'C# programmer',
          candidature: '2'
        },
        dateOfSigning: '12/12/2018',
        prof: {
          id: "1",
          firstname: "Francesca",
          lastname: "Biagi",
          profession: "Developer",
          birthdate: "1990-12-02",
          address: "Via Roma",
          region: "Italy",
          postalcode: "16159",
          destination: "2",
          phone: "321-321445",
          mail: "fb@dev.it",
          minAvailability: "3 weeks",
          maxAvailability: "6 weeks"
        }
      },
      {
        id: '2',
        req: {
          id: '2',
          companyName:'Twitter',
          projectName:'Super New Media',
          destination: 'Asia',
          skill: 'JS programmer',
          candidature: '3'
        },
        dateOfSigning: '12/12/2018',
        prof: {
          id: "1",
          firstname: "Francesca",
          lastname: "Biagi",
          profession: "Developer",
          birthdate: "1990-12-02",
          address: "Via Roma",
          region: "Italy",
          postalcode: "16159",
          destination: "2",
          phone: "321-321445",
          mail: "fb@dev.it",
          minAvailability: "3 weeks",
          maxAvailability: "6 weeks"
        },
      }
    ]
    let requestsArray: Request[] = [
      {
        id: '1',
        companyName:'Facebook',
        projectName:'New Media',
        destination: 'USA',
        skill: 'C# programmer',
        candidature: '2'
      },
      {
        id: '2',
        companyName:'Twitter',
        projectName:'Super New Media',
        destination: 'Asia',
        skill: 'JS programmer',
        candidature: '3'
      }
    ]
    let professionistsArray: Professionist[] = [
      {
        id: "1",
        firstname: "Francesca",
        lastname: "Biagi",
        profession: "Developer",
        birthdate: "1990-12-02",
        address: "Via Roma",
        region: "Italy",
        postalcode: "16159",
        destination: "2",
        phone: "321-321445",
        mail: "fb@dev.it",
        minAvailability: "3 weeks",
        maxAvailability: "6 weeks"
      },
      {
        id: "2",
        firstname: "Alessio",
        lastname: "Nanni",
        profession: "Developer",
        birthdate: "1978-12-02",
        address: "34 Street",
        region: "USA",
        postalcode: "345223",
        destination: "1",
        phone: "321-324545",
        mail: "an@dev.it",
        minAvailability: "2 weeks",
        maxAvailability: "8 weeks"
      },
      {
        id: "3",
        firstname: "Roberto",
        lastname: "Ballini",
        profession: "Developer",
        birthdate: "1990-06-23",
        address: "5 Ave",
        region: "USA",
        postalcode: "553432",
        destination: "1",
        phone: "321-43223345",
        mail: "rb@dev.it",
        minAvailability: "6 weeks",
        maxAvailability: "1 year"
      }
    ]

    return {
      professionists: professionistsArray,
      requests: requestsArray,
      candidatures: candidatureArray
    }
  }

  constructor() {

  }
}

import { Injectable } from '@angular/core';
import { Professionist } from './Professionist';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'  //Questo servizio è disponibile dalla root in giù, altrimenti si mette il nome di dove lo si vuole disponibile
})
export class ProfessionistService {

  updateProfessionist(pro : Professionist) {
    
    const header = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.http.put<Professionist>(this.url, pro, {headers : header})
  }

  deleteProfessionist(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${id}`);
  }

  private counter : number = 100;

  insertProfessionist(professionist: Professionist): Observable<Professionist> {
    const header = new HttpHeaders({'Content-Type' : 'application/json'});
    professionist.id = (++this.counter).toString();
    return this.http.post<Professionist>(this.url, professionist, {headers : header});
  }
  
  professionistsArray: Professionist[];

  private url: string = "https://localhost:44375/api/professionist/";

  public getProfessionist(): Observable<Professionist[]> {    //any è il tipo base
    return this.http.get<Professionist[]>(this.url);
  }
  public getProfessionistById(id: string): Observable<Professionist> {
    
    const urlById = `${this.url}/${id}`;
    return this.http.get<Professionist>(urlById)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data)))
      );
    
  }
  constructor(private http: HttpClient) { }

}

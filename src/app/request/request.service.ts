import { Injectable } from '@angular/core';
import { Request } from './Request';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidature } from '../candidature/candidature';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  addCandidate(req: Request) {
    req.candidature=(Number(req.candidature)+1).toString();
    const header = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.http.put<Request>(this.url, req, {headers : header})
  }

  updateRequest(req : Request) {    
    const header = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.http.put<Request>(this.url, req, {headers : header})
  }

  deleteRequest(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${id}`);
  }

  private counter : number = 100;

  insertRequest(request: Request): Observable<Request> {
    const header = new HttpHeaders({'Content-Type' : 'application/json'});
    request.id = (++this.counter).toString();
    return this.http.post<Request>(this.url, request, {headers : header});
  }

  requestsArray: Request[];

  private url: string = "http://localhost/api/requests";
  private candUrl: string = "http://localhost/api/candidatures";

  public getRequest(): Observable<Request[]> {
    return this.http.get<Request[]>(this.url);
  }
  
  addCandidature(cand: Candidature): Observable<Candidature> {
    const header = new HttpHeaders({'Content-Type' : 'application/json'});
    cand.id = (++this.counter).toString();
    return this.http.post<Candidature>(this.candUrl, cand, {headers : header});
  }
  
  constructor(private http: HttpClient) { }
}

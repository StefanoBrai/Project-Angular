import { Injectable } from '@angular/core';
import { Request } from './Request';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

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

  public getRequest(): Observable<Request[]> {    //any è il tipo base
    return this.http.get<Request[]>(this.url);
  }
  constructor(private http: HttpClient) { }
}

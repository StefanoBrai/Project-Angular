import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Professionist } from '../professionist/Professionist';
import { Candidature } from './candidature';


@Injectable({
    providedIn: 'root'
})
export class CandidatureService {

    private profUrl: string = "http://localhost/api/professionists";
    private reqUrl: string = "http://localhost/api/requests";
    private candUrl: string = "http://localhost/api/candidatures";

    public getRequest(): Observable<Request[]> {
        return this.http.get<Request[]>(this.reqUrl);
    }

    public getProfessionist(): Observable<Professionist[]> {
        return this.http.get<Professionist[]>(this.profUrl);
    }

    public getCandidature(): Observable<Candidature[]> {
        return this.http.get<Candidature[]>(this.candUrl);
    }

    constructor(private http: HttpClient) { }

}
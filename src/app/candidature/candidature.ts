import { Professionist } from '../professionist/Professionist';
import { Request } from '../request/request';

export interface Candidature{
    id: string;
    req: Request;
    prof: Professionist;
    dateOfSigning: string; 
}
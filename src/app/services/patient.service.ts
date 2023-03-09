import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/people.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  public getPatient(recCount: number = 10): Observable<Patient> {

    const url = `http://hapi.fhir.org/baseR4/Patient?_pretty=true&_count=${recCount}&_format=json`;
    return this.httpClient.get<Patient>(url);
  }

}

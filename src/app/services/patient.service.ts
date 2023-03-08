import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/people.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }
  // 591661
  public getPatient(): Observable<Patient> {

    const url = 'http://hapi.fhir.org/baseR4/Patient?_pretty=true&_count=5&_format=json';
    // const url = 'https://server.fire.ly/R4/Patient?_format=json&_count=10';
    return this.httpClient.get<Patient>(url);
  }

  public getPatients(): Observable<Patient[]> {

    const url = 'http://hapi.fhir.org/baseR4/Patient?_pretty=true&_count=5&_format=json';
    // const url = 'https://server.fire.ly/R4/Patient?_format=json&_count=10';
    return this.httpClient.get<Patient[]>(url);
  }

}

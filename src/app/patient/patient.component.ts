import { Component, OnInit } from '@angular/core';
import { Patient, EntryEntity, Resource } from 'src/app/models/people.interface';
import { PatientService } from 'src/app/services/patient.service';
import {map, take } from 'rxjs/operators';
import { NameType } from '../shared/enum/nameType';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patients: EntryEntity[] = [];
  patientFilter: EntryEntity[] = [];
  patientInfo = {} as  Resource ;
  filterText: string = '';
  resultCount: number = 0;
  showSpinner: boolean = false;
  selectValues: number[] = [5, 10, 15];
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatientInfo();
  }

  getPatientInfo(recCount: number = 10) {
    this.showSpinner = true;
    this.patientService.getPatient(recCount).pipe(take(1))
      .subscribe(
          res => {
             this.patients=res.entry;
             this.searchPatients()
            },
          err => console.log('HTTP Error', err),    // get a real error handler
          () => this.showSpinner = false
    )
  }


  getPatientInfoByCount(e: any) {
    if (e.target.value) {
      this.getPatientInfo(e.target.value)
    }
  }

  showDetail(idx: number) {
    this.patientInfo = this.patientFilter[idx].resource;
  }

  showDate(birthDate: string): string {
    if (birthDate) {
      return new Date(birthDate).toLocaleDateString();
    }
    else {
      return "";
    }
  }
  searchPatients() {
    const filterText = this.filterText;
    this.patientFilter = this.patients
    if (filterText !== '' ) {
      this.patientFilter = this.patients.filter(p =>
        p.resource.name.some(n => {
          if (n.given != null) {
            for (let l = 0; l < n.given.length; l++ ) {
              if (n.given[NameType.Individual].toLowerCase().includes(filterText.toLowerCase())) {
                return true;
              } else {
                return false;
              }
            }
            return false;
          } else {
          return false;
          }
        })
      )
    }
    
    this.resultCount = this.patientFilter.length;
  }

}
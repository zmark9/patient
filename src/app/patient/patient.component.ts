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
  showMore: boolean = false;
  filterText: string = '';
  moreInfo = {} as  Resource;
  resultCount: number = 0;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatientInfo();
  }

  getPatientInfo() {
    this.patientService.getPatient().pipe(take(1))
      .subscribe(res => {
        this.patients=res.entry;
        this.searchPatients(null);
      })
     }

  showDetail(idx: number) {
    this.patientInfo = this.patientFilter[idx].resource;
  }

  searchPatients(e: any) {
    this.patientFilter = this.patients
    if (e !== null) {
      const filterText = e.target.value;
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
    }
    
    this.resultCount = this.patientFilter.length;
  }

  searchPatientsX(ps: EntryEntity[]) {
    if (this.filterText !== '' ) {
      this.patients = ps.filter(p =>
        p.resource.name.some(n => {
          if (n.given != null) {
            for (let l = 0; l < n.given.length; l++ ) {
              if (n.given[NameType.Individual].includes(this.filterText.toLowerCase())) {
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
    } else {
        this.patients = ps;
    }
    this.resultCount = this.patients.length;
  }

}
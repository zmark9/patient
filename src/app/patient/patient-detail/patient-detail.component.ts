import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent {
  @Input() patientInfo = {} as any; 
  bDate: string = '';
  metaValues:string[]  = [];
  metaKeys:string[]  = [];
    
  ngOnChanges() {
    if (Object.keys(this.patientInfo).length !== 0) {
      console.log(this.patientInfo);
      if (this.patientInfo.birthDate) {
        this.bDate = new Date(this.patientInfo.birthDate).toLocaleDateString() ?? "";
      }
      this.metaValues = Object.values(this.patientInfo.meta);
      this.metaKeys = Object.keys(this.patientInfo.meta);
    }
  }

}

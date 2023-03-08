import { Component, Input } from '@angular/core';
import { Resource } from 'src/app/models/people.interface';
import { NameType, PreferrredName } from 'src/app/shared/enum/nameType';


@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent {
  @Input() patientInfo = {} as any; 
  patientName: string  = '';
  bDate: string = '';
  
  public nameType = NameType;
  
  ngOnChanges() {
    if (Object.keys(this.patientInfo).length !== 0) {
      this.patientName = this.patientInfo?.name[NameType.Individual].given[PreferrredName.Primary] + ' ' + this.patientInfo?.name[NameType.Individual].family;
      this.bDate = new Date(this.patientInfo.birthDate).toLocaleDateString();

    }
  }

}

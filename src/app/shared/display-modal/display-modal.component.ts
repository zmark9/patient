import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from 'src/app/models/people.interface';
import { NameType, PreferredName } from "../enum/nameType"

@Component({
  selector: 'app-display-modal',
  templateUrl: './display-modal.component.html',
  styleUrls: ['./display-modal.component.scss']
})

 
export class DisplayModalComponent {
  @Input() modalDetailType: string = "patient"; // default
  @Input() patientInfo = {} as Resource ; 
  @Input() saveChanges: boolean = false;       
  
  title: string = "";
  patientName: string = "";

  constructor() { }

  ngOnChanges(): void {

    if (Object.keys(this.patientInfo).length !== 0)
    {
      this.patientName = this.patientInfo?.name[NameType.Individual].given[PreferredName.Primary] ?? '';
      this.patientName += this.patientName.length ? ' ' : '';
      this.patientName += this.patientInfo?.name[NameType.Individual].family ?? '';
    }

    switch (this.modalDetailType) {
      case "history":
        this.title = "Patient History";
        break;

      default:
        this.title = "Patient Details";            
        break;
    }
    this.title += ': ' + this.patientName 
    console.log(this.patientInfo);
  }

}

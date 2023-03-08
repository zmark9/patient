import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from 'src/app/models/people.interface';
import { NameType, PreferrredName } from "../enum/nameType"

@Component({
  selector: 'app-display-modal',
  templateUrl: './display-modal.component.html',
  styleUrls: ['./display-modal.component.scss']
})

 
export class DisplayModalComponent {
  @Input() modalDetailType: string = "patient"; // default
  @Input() patientInfo = {} as Resource ; 
  @Input() saveChanges: boolean = false;       
  
  title: string = "Patient Details";            // default
  patientName: string = "";

  constructor() { }

  ngOnChanges(): void {

    // if (this.patientInfo !== {}) 
    if (Object.keys(this.patientInfo).length !== 0)
    {
      this.patientName = this.patientInfo?.name[NameType.Individual].given[PreferrredName.Primary] + ' ' + this.patientInfo?.name[NameType.Individual].family;
    }

    switch (this.modalDetailType) {
      case "history":
        this.title = "Patient History";
        break;

      default:
        break;
    }
    this.title += ': ' + this.patientName 
    console.log(this.patientInfo);
  }

}

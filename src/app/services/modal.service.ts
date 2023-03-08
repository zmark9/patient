import {Injectable} from "@angular/core";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import { Resource } from "../models/people.interface";

@Injectable()
export class ModalService {

  title: string ='';
  buttonTitle = "OK";
  type: string = "showInfo";

  protected modalRef: NgbModalRef | undefined;

  constructor(protected modalService: NgbModal) {}

  public showPatient(patient: Resource) {
    const name = patient.name[0].given[0] + ' ' + patient.name[0].family[0];
    this.title = `Patient Details for ${name}`;
    this.modalRef = this.modalService.open(
      name
    );
  }
  
  public show(title: string, message: string) {
    this.title = title;
    this.modalRef = this.modalService.open(
      message
    );
  }

  hide() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }
}

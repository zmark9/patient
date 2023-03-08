import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientService } from './services/patient.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from './services/modal.service';
import { PatientDetailComponent } from './patient/patient-detail/patient-detail.component';
import { DisplayModalComponent } from './shared/display-modal/display-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientDetailComponent,
    DisplayModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

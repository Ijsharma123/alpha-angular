import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobsComponent } from './jobs/jobs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { JobModalComponent } from 'src/app/common-components/job-modal/job-modal.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JobsComponent,
    JobModalComponent,
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    CommonComponentsModule,
    FormsModule,
    AngularMultiSelectModule
  ]
})
export class JobModule { }

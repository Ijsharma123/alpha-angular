import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { JobModalComponent } from './job-modal/job-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConformmodalComponent } from './conformmodal/conformmodal.component';
import { UserModalComponent } from './user-modal/user-modal.component';
// import { ProfilemodalComponent } from './profilemodal/profilemodal.component';



@NgModule({
  declarations: [
    // JobModalComponent,
    ConformmodalComponent,
    UserModalComponent,
    
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
  ],
  exports: []
})
export class CommonComponentsModule { }

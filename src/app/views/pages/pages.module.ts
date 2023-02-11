import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    // LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
    // FormsModule
    
  ],
  exports: [ 
  ],
  entryComponents: [ 
    // LoginComponent
    // SearchLocationComponentComponent
  ]
})
export class PagesModule { }

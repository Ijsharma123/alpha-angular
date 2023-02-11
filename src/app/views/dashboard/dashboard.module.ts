import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ProfilemodalComponent } from 'src/app/common-components/profilemodal/profilemodal.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SideNavComponent,
    ProfileComponent,ProfilemodalComponent, ChangePasswordComponent
  ],
  imports: [
    CommonModule,NgbModule,
    DashboardRoutingModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class DashboardModule { }

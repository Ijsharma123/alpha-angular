import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
  path: '',
  component: DashboardComponent,
  data: {
    title:`dashboard`
  },
  children: [
    {path: 'job',loadChildren: () =>import('./job/job.module').then((m) => m.JobModule)} ,
    {path: 'home',loadChildren: () =>import('./home/home.module').then((m) => m.HomeModule)} ,
    {path: '',loadChildren: () =>import('./home/home.module').then((m) => m.HomeModule)} ,
    {path: 'user',loadChildren: () =>import('./user/user.module').then((m) => m.UserModule)} ,
    {path: 'group',loadChildren: () =>import('./group/group.module').then((m) => m.GroupModule)} ,
    {path:'profile', component: ProfileComponent},
    {path:'changePassword', component: ChangePasswordComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

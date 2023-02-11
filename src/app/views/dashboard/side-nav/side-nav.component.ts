import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() sideNavStatus: boolean=false;
  list = [
    {number:'1',name:'Dashboard',icon:'fa-solid fa-house', url: '/dashboard/home',},
    {number:'2',name:'Job',icon:'fa-sharp fa-solid fa-person', url: '/dashboard/job'},
    {number:'3',name:'User',icon:'fa-sharp fa-solid fa-user', url: '/dashboard/user'},
    {number:'4',name:'Group',icon:'fa-sharp fa-solid fa-user-group', url: '/dashboard/group'},
    // {number:'5',name:'Home',icon:'fa-solid fa-house', url: '/tabs/courses'},
    // {number:'6',name:'Home',icon:'fa-solid fa-house', url: '/tabs/courses'},
    // {number:'7',name:'Home',icon:'fa-solid fa-house', url: '/tabs/courses'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

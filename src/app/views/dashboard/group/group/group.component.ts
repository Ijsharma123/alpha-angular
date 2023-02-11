import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  job:any[]= [
    { "id":1, "group": "0+", "status":"avctive"},
    { "id":2, "group": "B+", "status":"avctive"},
    { "id":3, "group": "C+", "status":"avctive"},
    { "id":4, "group": "D+", "status":"avctive"},
    { "id":5, "group": "F+", "status":"avctive"},
  ]
  groupList:any[]=[];

  constructor(private groupService:GroupService) { }

  ngOnInit(): void {
    this.groupListing();
  }

  groupListing(){
    this.groupService.groupList().subscribe(res=>{
      console.log(res);
      this.groupList = res.data;
    })
  }

  modalData(){

  }

  edit(){

  }

  delete(){

  }

}

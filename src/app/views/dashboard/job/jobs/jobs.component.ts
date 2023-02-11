import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConformmodalComponent } from 'src/app/common-components/conformmodal/conformmodal.component';
import { JobModalComponent } from 'src/app/common-components/job-modal/job-modal.component';
import { GlobalService } from 'src/app/services/global/global.service';
import { JobService } from 'src/app/services/job/job.service';
import { LoginComponent } from 'src/app/views/pages/login/login.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  // install Npm  npm i @ng-bootstrap/ng-bootstrap

  job:any[]=[
    {
      "id":1,
        "cname": "Vikash",
        "projectName": "React Pharma",
        "address": "narayanpur bhojpur bihar 802201",
        "siteWork": "17 may 2119",
        "assignTo": "nutan",
        "dueDate" : "31 may 2023"
    },
    {
      "id":2,
        "cname": "Vikash",
        "projectName": "React Pharma",
        "address": "narayanpur bhojpur bihar 802201",
        "siteWork": "17 may 2119",
        "assignTo": "nutan",
        "dueDate" : "31 may 2023"
    },
    {
      "id":3,
        "cname": "Vikash",
        "projectName": "React Pharma",
        "address": "narayanpur bhojpur bihar 802201",
        "siteWork": "17 may 2119",
        "assignTo": "nutan",
        "dueDate" : "31 may 2023"
    },
    {
      "id":4,
        "cname": "Vikash",
        "projectName": "React Pharma",
        "address": "narayanpur bhojpur bihar 802201",
        "siteWork": "17 may 2119",
        "assignTo": "nutan",
        "dueDate" : "31 may 2023"
    },
    {
      "id":5,
        "cname": "Vikash",
        "projectName": "React Pharma",
        "address": "narayanpur bhojpur bihar 802201",
        "siteWork": "17 may 2119",
        "assignTo": "nutan",
        "dueDate" : "31 may 2023"
    },
]

jobList:any[]=[];

// public user = {
//   name: 'Izzat Nadiri',
//   age: 26
//   }

cars = [
  { id: 1, name: "BMW Hyundai" },
  { id: 2, name: "Kia Tata" },
  { id: 3, name: "Volkswagen Ford" },
  { id: 4, name: "Renault Audi" },
  { id: 5, name: "Mercedes Benz Skoda" },
];

selected = [{ id: 3, name: "Volkswagen Ford" }];

private activeModal:any;

@ViewChild(LoginComponent) loginModaComponent: LoginComponent | undefined;
  constructor(private fb: FormBuilder,
    private route:Router,
    private modalService: NgbModal,
    private jobService:JobService,
    private global:GlobalService
    )
  {}

  ngOnInit(): void {
    this.getJobList();
  }


  getJobList(){
 this.jobService.jobList().subscribe(res=>{
  console.log('data of job list',res);
  if(res.success == true){
    this.jobList=res.data;
  }
 })
  }

  modalData(){
    this.activeModal = this.modalService.open(JobModalComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    this.activeModal.componentInstance.user = 'Add';

    //data transfer to child NgbModalRef
    this.activeModal.result.then(
      (result:any) => {
        // alert("hello vikas");
        if (result == 'Add') {
          this.getJobList();
        }
      },
      (reason:any) => {}
    );
  }

  edit(data:any){
    console.log('edit data',data)
    this.activeModal = this.modalService.open(JobModalComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    this.activeModal.componentInstance.user = 'Edit';
    this.activeModal.componentInstance.patchData = data;

    //data transfer to child NgbModalRef
    this.activeModal.result.then(
      (result:any) => {
        if (result == 'Edit') {
          this.getJobList();
        }
      },
      (reason:any) => {}
    );
  }

  delete(_id:any){
    const activeModal = this.modalService.open(ConformmodalComponent, {
      size: '',
      backdrop: 'static',
      keyboard: false,
    });
    //data transfer to child
    const contentObj = {
      heading: 'Delete!',
      message: 'Are you sure want to Delete ?',
      cancel: 'Cancel',
      ok: 'Delete'
    }
    activeModal.componentInstance.modalContent = contentObj;
    activeModal.result.then(
      (result) => {
      //data get from child inside the result
        console.log("Result="+result);

        if (result === 'Ok') {
          this.deletefunction(_id);
        }
      },
      (reason) => {}
    );
  }

  async deletefunction(id:any){
    // alert(id)
     this.jobService.jobDelete(id).subscribe(res => {
      console.log(res);
      if(res.success == true){
        this.getJobList();
        this.global.showToast(res.message);
      }
     })

  }

}

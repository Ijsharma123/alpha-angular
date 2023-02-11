import { JobService } from 'src/app/services/job/job.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {   NgbActiveModal,
  NgbModal,
  NgbModalConfig, } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-job-modal',
  templateUrl: './job-modal.component.html',
  styleUrls: ['./job-modal.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class JobModalComponent implements OnInit {
  submitted : boolean = false;
  form      : FormGroup;
  userList  : any[]  = [];

   // second method of multi select
   dropdownList:any[] =[];
   selectedItems:any[]=[];
   dropdownSettings ={};

  submit    : boolean  = true;
  @Input() public user:any;
  @Input() public patchData:any;
  constructor(
    private fb: FormBuilder,
    private activeModal: NgbActiveModal,
    private userService:UserService,
    private jobService:JobService
  ) {

    this.form = this.fb.group({
      name:new FormControl('',[Validators.required]),
      projectName:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      note:new FormControl(''),
      siteWork:new FormControl('',[Validators.required]),
      assignTo:new FormControl('',[Validators.required]),
      duedate:new FormControl('',[Validators.required]),
    })
  }
  ngOnInit(): void {
    this.getUserList();
    this.patchDataFunction();
    console.log('job modal data',this.user);

    this.dropdownList =[
      {"id":1 , "itemName":"India"},
      {"id":2 , "itemName":"Canda"},
      {"id":3 , "itemName":"Australliya"},
      {"id":4 , "itemName":"SingaPore"},
    ];

    // this.selectedItems = [
    //   {"id":1 , "itemName":"India"},
    //   {"id":2 , "itemName":"Canda"},
    // ];

    // this.dropdownSettings = {
    //   singleSelection:false,
    //   text: "Select Countries",
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   enableSearchFilter: true,
    //   classes: "myclass custom-class"
    // };

    // console.log(this.selectedItems)
  }

  asignTo(data:any){
    if(this.selectedItems.length >= 1){
      const filter = this.selectedItems.find(x => x._id == data._id);
      console.log('filter data', filter);
      if(!filter){
        this.selectedItems.push(data);
        console.log(this.selectedItems);
       
      }else{
        this.selectedItems = this.selectedItems.filter(x=> x._id != data._id);
        console.log('filter defined',this.selectedItems);
      }

    }else{
      this.selectedItems.push(data);
      console.log(this.selectedItems);
    }
  }

  // onItemSelect(item: any, item1:any){
  //   console.log(item["itemName"]);
  //   console.log(this.selectedItems);
  // }
  // onItemDeSelect(item:any, item1:any){
  //   console.log(item);
  //   console.log(this.selectedItems);
  // }

  // onSelectAll(items:any){
  //   console.log(items);
  // }


  onDeSelectAll(items:any){
    console.log(items);
  }

  patchDataFunction(){
    if(this.user == 'Edit'){
      console.log('patch data Input',this.patchData)
      // password: this.patchData.password
      const patch = {
        name: this.patchData.client_name,
        projectName: this.patchData.project_name,
        address: this.patchData.address,
        note:this.patchData.notes,
        siteWork:this.patchData.site_work,
        // assignTo: this.patchData.assign_to,
        duedate: this.patchData.due_date
      };
      this.form.patchValue(patch);
    }
  }

  getUserList(){
    this.userService.userList().subscribe(res=>{
      console.log('User listing',res)
      if(res.success == true){

        this.userList = res.data;
        const filter =  this.userList.filter(x => x.access !== 'block');
        this.userList = filter;
        console.log('filter',this.userList);
      }
    })
  }
  // recieveData(){
  //   modalRef.result.then((result) => {
  //     if (result) {
  //     console.log(result);
  //     }
  //     });
  // }

  get f(){
    return this.form.controls
  }

  modalClose() {
    this.activeModal.close('Cancel');
  }

  onSubmit() {
    this.submitted = true;
    this.submit = false;
    if(this.form.invalid){
      return;
    }
    if(this.user == 'Add'){
      // alert('add');
      this.addData();
    }else{
      // alert('edit');
      this.editData();

    }

  // jobAdd
    // this.activeModal.close('Cancel');

  }

  addData(){
    // const data = this.form.value;
    const savedata = {
      "client_name" : this.form.value.name,
      "project_name": this.form.value.projectName,
      "address"     : this.form.value.address,
      "notes"       : this.form.value.note,
      "site_work"   : this.form.value.siteWork,
      "assign_to"   : this.selectedItems,
      "due_date"    : this.form.value.duedate,
      "status"      : true
    };
console.log('form data',savedata);
    this.jobService.jobAdd(savedata).subscribe(res=>{

      console.log('data update',res)
      if(res.success == true ){
        this.activeModal.close('Add');
      }

    })

  }

  editData(){
    // const data = this.form.value;
    const savedata = {
      "client_name" : this.form.value.name,
      "project_name": this.form.value.projectName,
      "address"     : this.form.value.address,
      "notes"       : this.form.value.note,
      "site_work"   : this.form.value.siteWork,
      "assign_to"   :this.selectedItems,
      "due_date"    : this.form.value.duedate,
      "status"      : true
    };
    console.log('edit data',savedata);
    const _id = this.patchData._id;
    this.jobService.jobEdits(savedata,_id).subscribe(res=>{

      console.log('data update',res)
      if(res.success == true ){
        this.activeModal.close('Edit');
      }

    })
  }


}

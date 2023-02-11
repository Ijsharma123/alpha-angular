import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/services/common/common.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent {
  submitted:boolean=false;
  form: FormGroup;
   group:any[]=[];
  submit:boolean=true;
  @Input() public user:any;
  @Input() public patchData:any;
  constructor( private fb: FormBuilder,  private activeModal: NgbActiveModal,
    private userService:UserService,
    private commonService:CommonService,
    private global:GlobalService,
    ) {
    this.form = this.fb.group({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    group:new FormControl('',[Validators.required]),
    access:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })

  }
  ngOnInit(): void {
  console.log('all data form edit',this.patchData)
    console.log('job modal data',this.user);
    this.groupalLists();
    // this.patchDataFunction();
     this.editModal();
  }

  editModal(){
  if(this.user == 'Edit'){
    this.form = this.fb.group({
      name:new FormControl('',[Validators.required]),
      group:new FormControl('',[Validators.required]),
      access:new FormControl('',[Validators.required]),
     });
  }
  this.patchDataFunction();
  }

  groupalLists(){
    this.userService.groupList().subscribe(res=>{
      console.log('group listing',res)
      if(res.success == true){
        this.group = res.data;
      }
    })
  }

  patchDataFunction(){
    if(this.user == 'Edit'){
      // password: this.patchData.password
      const patch = { name: this.patchData.user_name ,group: this.patchData.group_id, access: this.patchData.access,};
      this.form.patchValue(patch);
    }
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
    this.submitted=true;
    this.submit=false;
    if(this.form.invalid){
      return;
    }
    if(this.user == 'Edit'){
        this.editUerFunction();
    }else{
      this.addUerFunction();
    }
    // console.log("value="+ this.form.value);
  }

  addUerFunction(){
    const data = {
      "name"      : this.form.value.name,
      "email"     : this.form.value.email,
      "password"  : this.form.value.password,
      "group_id"  : this.form.value.group,
      "access"    : this.form.value.access
    };
    // console .log(data)
    this.userService.userAdd(data).subscribe(res=> {
      if(res.success == true){
        this.activeModal.close('Add');
        this.global.showToast(res?.message);
        console.log(res);
      }
    },
    (err)=>{
      console.log(err);
    })
  }

  async editUerFunction(){
    // const jwt:any = await this.commonService.jwtToken();
    const id = this.patchData._id;

    const data = { "name":this.form.value.name, " ": this.form.value.group, "access":this.form.value.access };
    this.userService.userEdits(data,id).subscribe(res => {
      if(res.success == true){
        this.activeModal.close('Add');
        this.global.showToast(res.message);
        console.log('Edit api Hiting',res);
      }
    },
    (err)=> {
      console.log('edit user Api give errro',err);
    })
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/services/common/common.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profilemodal',
  templateUrl: './profilemodal.component.html',
  styleUrls: ['./profilemodal.component.css']
})
export class ProfilemodalComponent implements OnInit {
  submitted:boolean=false;
  form: FormGroup;

  submit:boolean=true;
  @Input() public user:any;
  constructor( private fb: FormBuilder,private profileService: ProfileService,  private activeModal: NgbActiveModal,private commonService:CommonService) {  
    this.form = this.fb.group({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    logo:new FormControl('',[Validators.required]),
    // password:new FormControl('',[Validators.required]),
    contactNumber:new FormControl('',[Validators.required]),
  })
  }
  ngOnInit(): void {
  // alert('working');
    console.log('job modal data',this.user);
    this.patchdata();
   
  }

  patchdata(){
    const patchdata = {'name':this.user.name, 'email':this.user.email, 'contactNumber':this.user.contact_number,'address':this.user.address,'logo':this.user.add_logo};
    this.form.patchValue(patchdata);
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

  async onSubmit() {
    this.submitted=true;
    this.submit=false;
    if(this.form.invalid){
      return;
    }else {
      const jwt:any = await this.commonService.jwtToken();
      const id = jwt.admin.id;
      // const id = '63b3dcdc0d3c5cbef162fea4';
    const data = { "email":this.form.value.email, "name":this.form.value.name, "address":this.form.value.address, "add_logo":this.form.value.logo, "contact_number":this.form.value.contactNumber };
    console.log('const data',data);
    this.profileService.updatProfile(data, id).subscribe(res=>{
      console.log(res)
    },
    (err)=> {
      console.log(err);
    });

      console.log("value="+ this.form.value);
  
      this.activeModal.close('edit');
    }
  
    
  
  }

}
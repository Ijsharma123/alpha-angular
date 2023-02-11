import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common/common.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  submitted:boolean=false;
  form: FormGroup;
show = true;
  submit:boolean=true;
  constructor( private fb: FormBuilder,private commonService:CommonService,
    private globalService:GlobalService,
    private profileService: ProfileService) {  
    this.form = this.fb.group({
      old_password:new FormControl('',[Validators.required]),
      new_password:new FormControl('',[Validators.required]),
      confirmPassword:new FormControl('',[Validators.required]),
  })
  }
  ngOnInit(): void {
  // alert('working');;
   
  }

  toastEr(){
    this.globalService.showToast('hello how are you');
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

  async onSubmit() {
    this.submitted=true;
    this.submit=false;
    if(this.form.invalid){
      return;
    }else {

      if(this.form.value.new_password == this.form.value.confirmPassword){
        const jwt:any = await this.commonService.jwtToken();
        const id = jwt.admin.id;
        // const id = '63b3dcdc0d3c5cbef162fea4';
      console.log('const data',this.form.value);
     
      // this.form.reset();
      // this.reset();
      const data = {"old_password":this.form.value.old_password,"new_password": this.form.value.new_password,"confirm_password":this.form.value.confirmPassword };
      this.profileService.changesPassword(data).subscribe(res=>{
        console.log(res)
        if(res.success == true){
          this.globalService.showToast(res?.mess);
          this.form.reset();
        }
     
      },
      (err)=> {
        console.log('Api Error mesage',err.error.mess);
        if(err.error.mess=='Password does not matched'){
          this.globalService.showToastErorr('Old Password do not match ');
        }
      });
      }else{
        this.globalService.showToastErorr('confirm password do not match ');
      }

   
    }
  }

  reset() {
    this.form.reset({
      old_password:'',
      new_password:'',
      confirmPassword:'',
  })
}

}

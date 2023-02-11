import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted:boolean=false;
  form: FormGroup;

  id:any;
  loginData:any

  constructor( private fb: FormBuilder,private route:Router,
    private loginService:LoginService)
  {
      this.form = this.fb.group({
        email:new FormControl('inderjeetsharma@gmail.com',[Validators.required]),
        password:new FormControl('123456',[Validators.required,Validators.minLength(3)])
      })
  }

  ngOnInit(): void {
   
  }

  get f(){
    return this.form.controls
  }

  onSubmit(){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
      else if(this.form.valid){
        console.log(this.form.value)
        const data = {"email":this.form.value.email,"password":this.form.value.password};
        this.loginService.signIn(data).subscribe(res=>{
          console.log(res)
          if(res.success == true){
            localStorage.setItem('token',res.token);
       this.route.navigate(['dashboard','home']);
          }
        })

        
         }
        
      this.form.reset();
      this.submitted=false;
    // window.location.reload();//ye karne par pass alert msg show nahi karta hai
  }

}

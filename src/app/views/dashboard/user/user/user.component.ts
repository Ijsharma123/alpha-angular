import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConformmodalComponent } from 'src/app/common-components/conformmodal/conformmodal.component';
import { UserModalComponent } from 'src/app/common-components/user-modal/user-modal.component';
import { CommonService } from 'src/app/services/common/common.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  job:any[]=[
    {
      "id":1,
        "name": "Vikash",
        "email": "React Pharma",
        "group": "narayanpur bhojpur bihar 802201",
        "access": "17 may 2119",
        "password": "nutan",
    },
    {
      "id":1,
        "name": "Vikash",
        "email": "React Pharma",
        "group": "narayanpur bhojpur bihar 802201",
        "access": "17 may 2119",
        "password": "nutan",
    },
    {
      "id":1,
        "name": "Vikash",
        "email": "React Pharma",
        "group": "narayanpur bhojpur bihar 802201",
        "access": "17 may 2119",
        "password": "nutan",
    },
    {
      "id":1,
        "name": "Vikash",
        "email": "React Pharma",
        "group": "narayanpur bhojpur bihar 802201",
        "access": "17 may 2119",
        "password": "nutan",
    },
    {
      "id":1,
        "name": "Vikash",
        "email": "React Pharma",
        "group": "narayanpur bhojpur bihar 802201",
        "access": "17 may 2119",
        "password": "nutan",
    },
]

data:any[]=[];

private activeModal:any;

// @ViewChild(LoginComponent) loginModaComponent: LoginComponent | undefined;
  constructor(private fb: FormBuilder,private route:Router,
    private modalService: NgbModal, private userService:UserService,
    private commonService:CommonService,
    private global:GlobalService
    )
  {}

  ngOnInit(): void {
    this.getList();
  }


  getList(){
  this.userService.userList().subscribe(res=>{
  console.log(res);
  if(res.success == true){
    this.data=res.data;
  }
})
  }

  modalData(){
    this.activeModal = this.modalService.open(UserModalComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    this.activeModal.componentInstance.user = 'Add';

    //data transfer to child NgbModalRef
    this.activeModal.result.then(
      (result:any) => {
        if (result == 'Add') {
          this.getList();
        }
      },
      (reason:any) => {}
    );
  }

  edit(data:any){
    console.log(data)
    this.activeModal = this.modalService.open(UserModalComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    this.activeModal.componentInstance.user = 'Edit';
    this.activeModal.componentInstance.patchData = data;

    //data transfer to child NgbModalRef
    this.activeModal.result.then(
      (result:any) => {
        if (result == 'Add') {
          this.getList();
        }
      },
      (reason:any) => {}
    );
  }

  delete(param:any){
    console.log('alle delete data',param)
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
        // alert("hello vikas");

        if (result === 'Ok') {
          // console.log('Modal Cancel');
          this.deletefunction(param._id);     // Here Exicute Delete Function
        }
      },
      (reason) => {}
    );
  }

  async deletefunction(id:any){
    // alert(id)
     this.userService.deletUser(id).subscribe(res => {
      console.log(res);
      if(res.success == true){
        this.getList();
        this.global.showToast(res.message);
      }
     })

  }

//   productDel(id:number):void{
//     this.productService.delete(id).subscribe( ()=>{
//       this.products=this.products.filter(p=> p.id !==id);
//     })
// }

}

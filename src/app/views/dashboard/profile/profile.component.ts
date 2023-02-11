import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfilemodalComponent } from 'src/app/common-components/profilemodal/profilemodal.component';
import { CommonService } from 'src/app/services/common/common.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

data:any;
private activeModal:any;
  constructor(private profileService: ProfileService,
    private commonService:CommonService,
    private modalService: NgbModal) { 

  }

  ngOnInit(): void {
    this.showData();
  }

  editProfile(){
    this.activeModal = this.modalService.open(ProfilemodalComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    this.activeModal.componentInstance.user = this.data;

    //data transfer to child NgbModalRef
    this.activeModal.result.then(
      (result:any) => {
        // alert("hello vikas");
        if (result == 'edit') {
          this.showData();
        }
      },
      (reason:any) => {}
    );
  }

async showData(){
  const jwt:any = await this.commonService.jwtToken();
        const data1 = jwt.admin.id;

  // const data = '63b3dcdc0d3c5cbef162fea4';
  this.profileService.showProfile(data1).subscribe(res => {
   console.log('data of Profile',res);
   if(res.success == true){
    this.data = res.data
   }

  },
  (err)=>{
    console.log('Error in Profile Api ShowList',err);
  }
  )
 }

}

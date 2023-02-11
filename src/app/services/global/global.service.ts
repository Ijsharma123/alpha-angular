import { Injectable, TemplateRef   } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


export interface ToastInfo {
  header: string;
  body: string;
  delay?: number;
}
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(private toastr: ToastrService){}

  showToast(message: string ){
     this.toastr.success(message)
  }
  showToastErorr(message: string ){
     this.toastr.error(message)
  }
  showToastInfo(message: string ){
     this.toastr.info(message)
  }
  showToastWarning(message: string ){
     this.toastr.warning(message)
  }
}


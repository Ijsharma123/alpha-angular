import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-conformmodal',
  templateUrl: './conformmodal.component.html',
  styleUrls: ['./conformmodal.component.css']
})
export class ConformmodalComponent implements OnInit {

  @Input() modalContent: any;
  // @Output() Updatelogin =new EventEmitter();

  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit(): void {
   
  }

  modalClose() {
    this.activeModal.close('Cancel');
    // this.Updatelogin.emit('sdsd')
  }

  cancel(){
    // this.Updatelogin.emit('cancel');
    this.activeModal.close('Cancel');
  }
  ok(){
    //this.Updatelogin.emit('login');
    this.activeModal.close('Ok');
  }


}

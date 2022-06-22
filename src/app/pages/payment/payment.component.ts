import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../../services/payment.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payments: any;
  paymentInfo: any;
  modalOptions: any;
  closeResult: string;

  constructor(
    private paymentService: PaymentService,
    private modalService: NgbModal,
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit(): void {
    this.paymentService.getAllPayment().then(response => {
      this.payments = response.payment;
      console.log(this.payments);
    });
  }

  openModalPaymentDetails(modalDetailPayment: any, id: any) {
    this.paymentInfo = this.payments.filter(payment => {
      return payment._id === id;
    });
    this.paymentInfo = this.paymentInfo[0];

    this.modalService.open(modalDetailPayment, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

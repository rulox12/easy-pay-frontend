import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommerceService} from '../../services/commerce.service';
import {BillsService} from '../../services/bills.service';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {PaymentService} from '../../services/payment.service';

@Component({
  selector: 'app-commerce',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(
    public activatedRouter: ActivatedRoute,
    private commerceService: CommerceService,
    private billService: BillsService,
    private modalService: NgbModal,
    private paymentService: PaymentService
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  private reference: any;
  payment: any;
  private code: any;
  nit: string;
  commerce;
  document: any;
  baseUrlForImage = environment.api + 'commerce/getImage/';
  bills: any;
  modalOptions: NgbModalOptions;
  closeResult: string;
  urlFrontend = environment.urlFrontend;

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(params => {
      this.code = params.code;
      this.nit = params.commerce;
    });
    this.paymentService.getPayment(this.code).subscribe((data) => {
      this.payment = data.payment;
    }, err => {
      this.openAlert('info', 'Ocurrió un error inesperado');
    });
    this.commerceService.getCommerceForNit(this.nit).subscribe((data) => {
      this.commerce = data;
      console.log(this.commerce);
    }, err => {
      this.openAlert('info', 'Ocurrió un error inesperado');
    });
  }

  private openModal(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private openAlert(icon, text) {
    Swal.fire({
      icon: icon,
      text: text,
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

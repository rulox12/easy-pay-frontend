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
  templateUrl: './microsite.component.html',
  styleUrls: ['./microsite.component.scss']
})
export class MicrositeComponent implements OnInit {

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
      this.nit = params.microsite;
    });
    this.commerceService.getCommerceForNit(this.nit).subscribe((data) => {
      this.commerce = data;
    }, err => {
      this.openAlert('info', 'Ocurrió un error inesperado');
    });
  }

  searchBill(modal) {
    this.billService.searchBillForDocument(this.document, this.commerce._id).subscribe(response => {
      this.bills = response;
      this.openModal(modal);
    }, error => {
      this.openAlert('info', 'No se encontraron facturas');
    });
  }

  generatePayment(reference: string, total: string, description: string, id: string) {
    const data = {
      reference: reference,
      total: total,
      description: description,
      bill: id,
    };

    this.paymentService.generatePayment(data).then(response => {
      if (response) {
        this.modalService.dismissAll();
        localStorage.setItem('codePayment', response.payment._id);
        localStorage.setItem('commercePayment', this.nit);
        const returnUrl = this.urlFrontend + 'checkout';
        window.open(`https://checkout.wompi.co/p/?public-key=pub_test_NoArfbn1dTCcN61fSNV5cx38fVCc88bO&currency=COP&amount-in-cents=${total + '00'}&reference=${response.payment._id}&redirect-url=${returnUrl}`);
      }
    }, error => {
      this.openAlert('warning', 'Error al generar el pago');
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

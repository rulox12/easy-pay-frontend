import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommerceService} from '../../services/commerce.service';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {BillsService} from '../../services/bills.service';

@Component({
  selector: 'app-commerce',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  bill = new FormGroup({
    reference: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    total: new FormControl('', [Validators.required]),
    status: new FormControl(''),
    document: new FormControl('', [Validators.required]),
    commerce: new FormControl('', [Validators.required]),
  });

  formSendEmail = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });

  commerces;
  modalOptions: NgbModalOptions;
  closeResult: string;
  bills: any;
  billInfo: any;
  billSelectedFormSendEmail: any;
  billEditForm: any;

  constructor(
    private commerceService: CommerceService,
    private billService: BillsService,
    private userService: UserService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit() {
    this.billService.getAllBills().then(response => {
      this.bills = response.bills;
    });
    this.commerceService.getAllCommerce().then(response => {
      this.commerces = response;
    });
  }

  addBill() {
    this.billService.addBill(this.bill.value).subscribe((data) => {
      this.openAlert('success', 'Perfecto', 'Factura creada con exito');
    }, err => {
      this.openAlert('error', 'Error', 'Ocurrio un error inesperado');
    });
  }

  get reference() {
    return this.bill.get('reference');
  }

  get total() {
    return this.bill.get('total');
  }

  get document() {
    return this.bill.get('document');
  }

  get description() {
    return this.bill.get('description');
  }

  openModalCreatedBill(content) {
    this.openModal(content);
  }

  openModalDetailBill(content, idBill) {
    this.billInfo = this.bills.filter(bill => {
      return bill._id === idBill;
    });
    this.billInfo = this.billInfo[0];

    this.openModal(content);
  }

  openModalSendEmail(content, idBill) {
    this.billSelectedFormSendEmail = idBill;
    this.openModal(content);
  }


  sendEmailForBill() {
    if (this.formSendEmail.valid) {
      this.billService.sendEmailWithBill(this.billSelectedFormSendEmail, this.formSendEmail.value.email).then(response => {
        this.openAlert('success', 'Correcto', response.message);
      }, error => {
        this.openAlert('error', 'Error', error.error.message);
      });
    }
  }

  private openModal(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private openAlert(icon: string, title: string, text: string) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    }).then(() => {
      this.modalService.dismissAll();
      this.router.navigateByUrl('/bill').then(() => {
        window.location.reload();
      });
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

  submitEditBill(event) {
    this.billService.updateBillService(this.billEditForm).subscribe(async response => {
      if (response) {
        Swal.fire({
          icon: 'success',
          title: 'Correcto',
          text: 'Factura editada con exito',
        }).then(() => {
          this.modalService.dismissAll();
          this.router.navigateByUrl('/bill').then(r => {
            window.location.reload();
          });
        });
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Error',
          text: 'Error al intentar editar la factura',
        });
      }
    });
  }

  openModalEditBill(bill: any, modalUpdateBill) {
    this.billEditForm = bill;
    this.billEditForm.commerce = this.billEditForm.commerce._id;
    this.openModal(modalUpdateBill);

  }
}

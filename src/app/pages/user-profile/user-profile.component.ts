import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userEditForm;
  user: any;
  modalOptions: NgbModalOptions;
  userInfo: any;
  closeResult: string;


  constructor(
    private userService: UserService,
    private modalService: NgbModal,
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  openModalDetailUser(content, idUser) {
    this.userEditForm = this.user;

    this.modalService.open(content, this.modalOptions).result.then((result) => {
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

  submitEditUser(e) {
    this.userService.updateUserService(this.userEditForm).subscribe(async response => {
      if (response) {
        Swal.fire({
          icon: 'success',
          title: 'Correcto',
          text: 'Usuario editado con exito',
        }).then(() => {
          this.modalService.dismissAll();
          window.location.reload();
        });
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Error',
          text: 'Error al intentar editar el usuario',
        });
      }
    });
  }
}

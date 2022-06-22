import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {CommerceService} from '../../services/commerce.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    active: new FormControl(''),
    isAdmin: new FormControl(''),
    commerce: new FormControl(''),
  });

  public commerces;
  modalOptions: NgbModalOptions;
  closeResult: string;
  users: any;
  userInfo: any;

  constructor(
    private commerceService: CommerceService,
    private userService: UserService,
    private modalService: NgbModal,
    public router: Router
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit() {
    this.userService.getAllUsers().then(data => {
      this.users = data;
    }, error => {
      console.log(error);
    });
    this.commerceService.getAllCommerce().then(data => {
      this.commerces = data;
    }, error => {
      console.log(error);
    });
  }

  openModalCreate(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openModalDetailUser(content, idUser) {
    this.userInfo = this.users.filter(user => {
      return user._id === idUser;
    });
    this.userInfo = this.userInfo[0];

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

  addUser() {
    this.userService.signUp(this.user.value).then((user) => {
      if (user) {
        Swal.fire({
          icon: 'success',
          title: 'Perfecto',
          text: 'Usuario creado con exito',
        }).then(() => {
          this.modalService.dismissAll();
          this.router.navigateByUrl('/user').then(r => {
            window.location.reload();
          });
        });
      }
    }, err => {
      console.log(err);
      Swal.fire({
        icon: 'warning',
        title: 'Uppsss',
        text: err.message,
      });
    });
  }
}

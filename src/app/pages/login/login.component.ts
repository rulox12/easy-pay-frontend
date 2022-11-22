import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {NgxSpinnerService} from 'ngx-spinner';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  user = {email: '', password: ''};
  modalOptions: NgbModalOptions;
  closeResult: string;
  emailResetPassword: string;

  userLogin = new FormGroup({
    email: new FormControl(this.user.email, [Validators.required, Validators.email]),
    password: new FormControl(this.user.password, [Validators.required]),
  });

  constructor(
    public userService: UserService,
    public router: Router,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit() {
  }

  login(): any {
    this.spinner.show();
    if (this.userLogin.valid) {
      this.userService.signIn(this.userLogin.value).subscribe(data => {
        if (data) {
          sessionStorage.setItem('user', JSON.stringify(data.user));
          sessionStorage.setItem('token', JSON.stringify(data.token).replace(/['"]+/g, ''));
          this.spinner.hide();
          this.router.navigateByUrl('/dashboard ');
        }
      }, err => {
        this.spinner.hide();
        console.log(err);
        Swal.fire({
          icon: 'warning',
          text: 'Nombre de usuario o contraseña incorrectos',
        });
      });
    }
  }


  get email() {
    return this.userLogin.get('email');
  }

  get password() {
    return this.userLogin.get('password');
  }


  resetPassword(event) {
    this.userService.sendEmailResetPassword(this.emailResetPassword).subscribe(response => {
      if (response) {
        Swal.fire({
          icon: 'success',
          title: 'Correo enviado exitosamente',
          text: 'Por favor revise el correo electrónico'
        }).then(() => {
          this.router.navigateByUrl('/commerce').then(r => {
            window.location.reload();
          });
        });
      }
    });
  }

  openResetPasswordModal(modalFormUpdate: any) {
    this.modalService.open(modalFormUpdate, this.modalOptions).result.then((result) => {
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

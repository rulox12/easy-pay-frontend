import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-register',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  private token: any;
  public resetPasswordForm: any;
  public displayError = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private userService: UserService,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.resetPasswordForm = {password: '', repeatPassword: ''};
    this.activatedRouter.queryParams.subscribe(params => {
      this.token = params.token;
      this.userService.canResetPassword(this.token).subscribe(response => {
        if (!response?.can) {
          Swal.fire({
            icon: 'error',
            title: 'Ya se intento cambiar la contraseña.',
          }).then(() => {
            this.router.navigateByUrl('/commerce').then(r => {
              window.location.reload();
            });
          });
        }
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Error al intentar cambiar la contraseña.',
        }).then(() => {
          this.router.navigateByUrl('/login').then(r => {
            window.location.reload();
          });
        });
      });
    });
  }

  submitResetPassword($event: any) {
    if (this.resetPasswordForm.password !== this.resetPasswordForm.displayError && this.resetPasswordForm.repeatPassword.length >= 0) {
      this.displayError = true;
    }

    if (this.resetPasswordForm.password !== this.resetPasswordForm.displayError && this.resetPasswordForm.password) {
      this.userService.resetPassword({
        token: this.token,
        password: this.resetPasswordForm.password
      }).subscribe(response => {
        Swal.fire({
          icon: 'success',
          title: 'Contraseña actualizada',
        }).then(() => {
          this.router.navigateByUrl('/login').then(r => {
            window.location.reload();
          });
        });
      });
    }
  }
}

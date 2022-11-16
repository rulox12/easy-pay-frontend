import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  user = {email: '', password: ''};

  userLogin = new FormGroup({
    email: new FormControl(this.user.email, [Validators.required, Validators.email]),
    password: new FormControl(this.user.password, [Validators.required]),
  });

  constructor(
    public userService: UserService,
    public router: Router,
    private spinner: NgxSpinnerService
  ) {
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


}

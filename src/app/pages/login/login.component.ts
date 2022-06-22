import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  userLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    public userService: UserService,
    public router: Router,
  ) {
  }

  ngOnInit() {
  }

  login(): any {
    this.userService.signIn(this.userLogin.value).subscribe(data => {
      if (data) {
        sessionStorage.setItem('user', JSON.stringify(data.user));
        sessionStorage.setItem('token', JSON.stringify(data.token).replace(/['"]+/g, ''));
        this.router.navigateByUrl('/dashboard ');
      }
    }, err => {
      console.log(err);
      Swal.fire({
        icon: 'warning',
        text: 'Nombre de usuario o contraseña incorrectos',
      });
    });
  }



}

import {Injectable} from '@angular/core';
import jwt_decode from 'jwt-decode';
import {UserService} from '../services/user.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenHelper {
  public url = environment.api;

  constructor(private userService: UserService) {}

  async getToken(): Promise<boolean|string> {
    if (await this.tokenExist()) {
      if (await this.validaToken(sessionStorage.getItem('token'))) {
        return Promise.resolve(sessionStorage.getItem('token'));
      } else {
        // @ generate token
      }
    } else {
      return new Promise<boolean|string>(resolve => {
        this.userService.signIn({
          email : environment.email,
          password : environment.password,
        }).subscribe(async response => {
          if (response) {
            sessionStorage.setItem('token', response.token);
            resolve(response.token);
          }
        });
      });
    }
  }

  async validaToken(tokenStorage): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      const tokenDecode = this.decodeToken(tokenStorage);
      if (tokenDecode) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  decodeToken(token) {
    return jwt_decode(token);
  }

  async tokenExist() {
    return await sessionStorage.getItem('token');
  }
}

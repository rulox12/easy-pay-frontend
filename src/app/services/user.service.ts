import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TokenHelper} from '../helpers/token.helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = environment.api;

  constructor(
    private http: HttpClient,
    private tokenHelper: TokenHelper
  ) {
  }

  signIn(user): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(this.url + 'auth/sign-in', user, {headers});
  }

  getAllUsers(): any {
    return new Promise<any>(resolve => {
      const headers = new HttpHeaders({
        Authorization: sessionStorage.getItem('token')
      });
      this.http.get(this.url + 'user/get-all', {headers}).subscribe(response => {
        if (response) {
          resolve(response);
        } else {
          resolve(false);
        }
      }, error => {

      });
    });
  }

  signUp(user: any) {
    return new Promise<any>((resolve, err) => {
      const headers = new HttpHeaders({
        Authorization: sessionStorage.getItem('token')
      });
      this.http.post(this.url + 'user/sign-up', user, {headers}).subscribe(response => {
        if (response) {
          resolve(response);
        } else {
          resolve(false);
        }
      }, error => {
        err(error.error);
      });
    });
  }

  updateUserService(user) {
    return this.http.put<any>(this.url + 'user/update-user/' + user._id, user);
  }

  canResetPassword(token) {
    return this.http.get<any>(this.url + 'user/can-email-reset-password/' + token);
  }

  resetPassword(params) {
    return this.http.post<any>(this.url + 'user/reset-password/', params);
  }

  sendEmailResetPassword(email: string) {
    return this.http.get<any>(this.url + 'user/send-email-reset-password/' + email);
  }
}

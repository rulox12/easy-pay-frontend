import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TokenHelper} from '../helpers/token.helper';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  public url = environment.api;

  constructor(
    private http: HttpClient,
    private tokenHelper: TokenHelper
  ) {
  }

  getAllBills(): any {
    return new Promise<any>(resolve => {
      this.tokenHelper.getToken().then(token => {
        if (token && typeof token === 'string') {
          const headers = new HttpHeaders({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Authorization: token
          });
          this.http.get(this.url + 'bill/get-all', {headers}).subscribe(response => {
            if (response) {
              resolve(response);
            } else {
              resolve(false);
            }
          }, error => {
            console.log(headers);
            console.log(error);
          });
        }
      });
    });
  }

  addBill(bill: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.getItem('token')
    });

    return this.http.post<any>(this.url + 'bill/add', bill, {headers});
  }

  searchBillForDocument(document, idCommerce) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(this.url + 'bill/bill-by-user-commerce/' + document + '/' + idCommerce, {headers});
  }

  sendEmailWithBill(idBill: string, email: string) {
    const headers = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')
    });
    return new Promise<any>((resolve, err) => {
      this.tokenHelper.getToken().then(token => {
        if (token && typeof token === 'string') {
          // tslint:disable-next-line:no-shadowed-variable
          const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          this.http.get<any>(this.url + 'bill/send-email/' + email + '/' + idBill, {headers}).subscribe(response => {
            if (response) {
              resolve(response);
            } else {
              resolve(false);
            }
          }, error => {
            err(error);
          });
        }
      });
    });
  }

  updateBillService(bill: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.getItem('token')
    });

    return this.http.post<any>(this.url + 'bill/update-bill/' + bill._id, bill, {headers});
  }
}

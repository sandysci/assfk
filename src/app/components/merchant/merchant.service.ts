import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class MerchantService {
  constructor(private http: HttpClient) {
  }

  createMerchant(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      withCredentials: 'true',
      Authorization: 'Token ' + environment.apiKey
    });
    return this.http.post(environment.apiUrl + 'superadmin/merchant', data, {headers});
  }
}

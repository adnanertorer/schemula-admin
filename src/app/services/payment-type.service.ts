import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaymentTypeModel } from '../models/PaymentTypeModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentTypeService {
  private readonly apiUrl = `${environment.apiUrl}`;
  private endpoint = 'payment-types';

  constructor(private httpClient: HttpClient) {}

  getList(): Observable<any> {
    return this.httpClient.get<PaymentTypeModel[]>(
      `${this.apiUrl}/${this.endpoint}`
    );
  }

  getById(id: string): Observable<any> {
    return this.httpClient.get<PaymentTypeModel>(
      `${this.apiUrl}/${this.endpoint}/${id}`
    );
  }
}

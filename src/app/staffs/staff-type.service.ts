import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StaffTypeModel } from '../models/StaffTypeModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaffTypeService {
  private readonly apiUrl = `${environment.apiUrl}`;
  private endpoint = 'staff-types';

  constructor(private httpClient: HttpClient) {}

  getList(): Observable<any> {
    return this.httpClient.get<StaffTypeModel[]>(
      `${this.apiUrl}/${this.endpoint}`
    );
  }

  getById(id: string): Observable<any> {
    return this.httpClient.get<StaffTypeModel>(
      `${this.apiUrl}/${this.endpoint}/${id}`
    );
  }
}

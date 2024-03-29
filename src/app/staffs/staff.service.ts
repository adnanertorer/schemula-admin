import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StaffModel } from '../models/StaffModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private readonly apiUrl = `${environment.apiUrl}`;
  private endpoint = 'staffs';
  constructor(private httpClient: HttpClient) {}

  public create(lesson: StaffModel): Observable<any> {
    return this.httpClient.post<StaffModel>(
      `${this.apiUrl}/${this.endpoint}/create`,
      lesson
    );
  }

  public update(staff: StaffModel): Observable<any> {
    return this.httpClient.put<StaffModel>(
      `${this.apiUrl}/${this.endpoint}/${staff._id}`,
      staff
    );
  }

  getById(id: string): Observable<any> {
    return this.httpClient.get<StaffModel>(
      `${this.apiUrl}/${this.endpoint}/${id}`
    );
  }

  getList(): Observable<any> {
    return this.httpClient.get<StaffModel[]>(`${this.apiUrl}/${this.endpoint}`);
  }

  delete(id: string) {
    return this.httpClient.delete(
      `${this.apiUrl}/${this.endpoint}/delete/${id}`
    );
  }
}

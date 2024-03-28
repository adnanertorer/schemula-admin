import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ParticipantTypeModel } from '../models/ParticipantTypeModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantTypeService {

  private readonly apiUrl = `${environment.apiUrl}`;
  private endpoint = 'participant-types';
  
constructor(private httpClient: HttpClient) { }

public create(model: ParticipantTypeModel): Observable<any> {
  return this.httpClient.post<ParticipantTypeModel>(
    `${this.apiUrl}/${this.endpoint}/create`,
    model
  );
}

public update(model: ParticipantTypeModel): Observable<any> {
  return this.httpClient.put<ParticipantTypeModel>(
    `${this.apiUrl}/${this.endpoint}/${model._id}`,
    model
  );
}

getById(id: string): Observable<any> {
  return this.httpClient.get<ParticipantTypeModel>(
    `${this.apiUrl}/${this.endpoint}/${id}`
  );
}

getList(): Observable<any> {
  return this.httpClient.get<ParticipantTypeModel[]>(
    `${this.apiUrl}/${this.endpoint}`
  );
}

delete(id: string) {
  return this.httpClient.delete(`${this.apiUrl}/${this.endpoint}/delete/${id}`);
}

}

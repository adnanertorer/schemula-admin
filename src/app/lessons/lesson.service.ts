import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LessonModel } from '../models/LessonModel';
import { Observable } from 'rxjs';
import { LessonPackageModel } from '../models/LessonPackageModel';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  private readonly apiUrl = `${environment.apiUrl}`;
  private endpoint = 'lessons';
  private packageEndpoint = 'lesson-packages';

  constructor(private httpClient: HttpClient) {}

  public create(lesson: LessonModel): Observable<any> {
    return this.httpClient.post<LessonModel>(
      `${this.apiUrl}/${this.endpoint}/create`,
      lesson
    );
  }

  public createPackage(lesson: LessonPackageModel): Observable<any> {
    return this.httpClient.post<LessonPackageModel>(
      `${this.apiUrl}/${this.packageEndpoint}/create`,
      lesson
    );
  }

  public update(lesson: LessonModel): Observable<any> {
    return this.httpClient.put<LessonModel>(
      `${this.apiUrl}/${this.endpoint}/${lesson._id}`,
      lesson
    );
  }

  getById(id: string): Observable<any> {
    return this.httpClient.get<LessonModel>(
      `${this.apiUrl}/${this.endpoint}/${id}`
    );
  }

  getByIdPackage(id: string): Observable<any> {
    return this.httpClient.get<LessonPackageModel>(
      `${this.apiUrl}/${this.packageEndpoint}/${id}`
    );
  }

  getList(): Observable<any> {
    return this.httpClient.get<LessonModel[]>(
      `${this.apiUrl}/${this.endpoint}`
    );
  }

  getPackageList(): Observable<any> {
    return this.httpClient.get<LessonPackageModel[]>(
      `${this.apiUrl}/${this.packageEndpoint}`
    );
  }

  getPackageListByLessonId(id: string): Observable<any> {
    return this.httpClient.get<LessonPackageModel[]>(
      `${this.apiUrl}/${this.packageEndpoint}/get-by-lesson/${id}`
    );
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.apiUrl}/${this.endpoint}/delete/${id}`);
  }

  deletePackage(id: string) {
    return this.httpClient.delete(`${this.apiUrl}/${this.packageEndpoint}/delete/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3333/api';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  loadData(): Observable<unknown> {
    return this.http.get<unknown>(apiUrl);
  }
}

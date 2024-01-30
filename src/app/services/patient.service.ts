import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient.model';

const baseUrl = 'http://localhost:8080/api/v1/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(baseUrl);
  }

  get(id: any): Observable<Patient> {
    return this.http.get<Patient>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {    
    return this.http.post(baseUrl, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}

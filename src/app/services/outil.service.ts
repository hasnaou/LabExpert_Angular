import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OutilService {

  constructor(private http:HttpClient,@Inject("url_outil")private url:string) { }

  public getmateriels(){
    return this.http.get(this.url);
  }
}

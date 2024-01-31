import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Echantillon} from "../models/echantillon";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EchantillonService {

  constructor(private http:HttpClient,@Inject('url_echantillon') private url: string) { }
  public getEchantillons(){
    return this.http.get(this.url);
  }

  public addEchantillon(echantillon:Echantillon){
    return this.http.post(this.url,echantillon);
  }
  public getEchantillonById(id:number):Observable<Echantillon>{
    // @ts-ignore
    return this.http.get(this.url+"/"+id);
  }
  public updateEchantillon(echantillon:Echantillon){
    return this.http.put(this.url,echantillon);
  }
}

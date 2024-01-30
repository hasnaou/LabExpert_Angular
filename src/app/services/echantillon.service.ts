import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EchantillonService {

  constructor(private http:HttpClient,@Inject('url_echantillon') private url: string) { }
  public getEchantillons(){
    return this.http.get(this.url);
  }
}

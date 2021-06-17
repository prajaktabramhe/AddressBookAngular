import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  post(url, data, options){
    return this.http.post(this.baseUrl+url, data, options)
  }
  get(url, options){
    return this.http.get(this.baseUrl+url, options)
  }
  delete(url, options){
    return this.http.delete(this.baseUrl+url, options)
  }
  
}

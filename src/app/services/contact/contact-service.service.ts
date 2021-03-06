import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  
  url: string;

  constructor(private http: HttpService) { }

  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  addContact(data){
    return this.http.post('create',data, this.options)
  }
  getAllContacts(){
    return this.http.get('get', this.options)
  }
  deleteEmployee(id){
    return this.http.delete('delete/' + id, this.options)
  }
  updateContact(id, data){
    return this.http.update('update/' + id, data)
  }
  loginService(data: any) {
    return this.http.Post("",data, this.options);
  }
}

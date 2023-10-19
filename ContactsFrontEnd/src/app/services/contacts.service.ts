import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { Contacts } from '../models/Contacts.model';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
baseUrl: string = environment.baseApiUrl;
constructor(private http: HttpClient){}
getContactList(){
  return this.http.get(this.baseUrl+ '/api/Contacts');
}
getContact(id: string): Observable<Contacts>{
  
  return this.http.get<Contacts>(this.baseUrl+ '/api/Contacts/'+id);
}
addContact(addcontact : Contacts){
  return this.http.post(this.baseUrl + '/api/Contacts', addcontact );
}

editContact(id: string, edit: Contacts) {
  return this.http.put(this.baseUrl + '/api/Contacts/' + id, edit);
}


deleteContact(id: string){
  return this.http.delete(this.baseUrl + '/api/Contacts/'+ id);
}
}


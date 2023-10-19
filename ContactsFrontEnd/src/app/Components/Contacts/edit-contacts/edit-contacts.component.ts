import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacts } from 'src/app/models/Contacts.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.css']
})
export class EditContactsComponent implements OnInit {

  
  detail: Contacts = {
    id: '',
    fullName: '',
    email: '',
    phone: 0,
    address: ''
  }
  constructor(private route: ActivatedRoute ,private router: Router, private contacts: ContactsService){}
  
  ngOnInit(): void {
    
    
    this.route.paramMap.subscribe(params=>{
      const id = params.get('id');
      console.log(id);

      if (id) {
        this.contacts.getContact(id).subscribe(
          (response) => {
            console.log(response);
            this.detail = response;
            
          }
        );
      }
    });
  }


  editData(){
      console.log((this.detail))
      console.log(this.detail.id);
      
    
    this.contacts.editContact(this.detail.id, this.detail).subscribe(
    
          (res)=>{
            console.log(res);
          alert("Data edited");
          this.router.navigate(['/contactList']);
          });
      

  }
  
}

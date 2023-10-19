import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacts } from 'src/app/models/Contacts.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
  addition!: FormGroup;
  constructor(private contacts:ContactsService, private fb: FormBuilder,private route :Router ){} 

  ngOnInit(): void {
    this.addition=this.fb.group({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('',Validators.required),
      address: new FormControl('', Validators.required)
    })
    
  }

  addData(){
    const userData: Contacts= Object.assign(this.addition.value);
    this.contacts.addContact(userData).subscribe(
      (res)=>{
        console.log(res);
      alert("Data added");
      this.route.navigate(['/contactList']);
      });
  }
}

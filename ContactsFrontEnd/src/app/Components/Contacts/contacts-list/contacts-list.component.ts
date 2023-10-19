import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  
  datas: any;
  cid: any;
  
  constructor(private contacts:ContactsService,private router : Router,private route :ActivatedRoute){}

  ngOnInit(): void {

    

    this.contacts.getContactList()
    .subscribe(
      
        (res) => {
        console.log(res);
        this.datas = res;
    });
    
  }
  deleteData(id: string){
    this.cid= id;
    console.log(this.cid);
    
    this.contacts.deleteContact(this.cid).subscribe(
    
      (res)=>{
        console.log(res);
      alert("Data deleted");
      window.location.reload();
      });
  }

 
}

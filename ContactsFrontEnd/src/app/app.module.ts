import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './Components/Contacts/contacts-list/contacts-list.component';
import { AddContactsComponent } from './Components/Contacts/add-contacts/add-contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditContactsComponent } from './Components/Contacts/edit-contacts/edit-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    AddContactsComponent,
    EditContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

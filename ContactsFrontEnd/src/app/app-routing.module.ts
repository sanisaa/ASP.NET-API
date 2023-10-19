import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactsComponent } from './Components/Contacts/add-contacts/add-contacts.component';
import { ContactsListComponent } from './Components/Contacts/contacts-list/contacts-list.component';
import { EditContactsComponent } from './Components/Contacts/edit-contacts/edit-contacts.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent
  },
  {
    path: 'contactList',
    component: ContactsListComponent
  },
  {
    path: 'add',
    component: AddContactsComponent
  },
  {
    path: 'edit/:id',
    component: EditContactsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

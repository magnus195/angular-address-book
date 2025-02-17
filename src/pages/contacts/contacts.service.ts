import { Injectable } from '@angular/core';
import {Contact} from "../../models/contact";
import {CONTACTS} from "../../data/contacts";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public AddContact(contact: Contact): void {
    contact.id = this.getNewId();
    this.contacts.push(contact);
  }

  public EditContact(contact: Contact): void {
    this.contacts = this.contacts.map(c => c.id === contact.id ? contact : c);
  }

  public GetContactById(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  private getNewId(): number {
    return Math.max(...this.contacts.map(contact => contact.id || 0)) + 1;
  }

  constructor() { }
}

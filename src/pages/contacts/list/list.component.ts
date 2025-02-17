import { Component } from '@angular/core';
import {Contact} from "../../../models/contact";
import {NgForOf, NgIf} from "@angular/common";
import {ContactsService} from "../contacts.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = [];

  constructor(private readonly contactsService: ContactsService) {
    this.contacts = this.contactsService.contacts;
  }
}

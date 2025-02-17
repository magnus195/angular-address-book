import { Component, OnInit } from '@angular/core';
import {Contact} from "../../../models/contact";
import {ContactsService} from "../contacts.service";
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  contact: Contact | undefined = undefined;

  constructor(private svc: ContactsService, private route: ActivatedRoute) {}

  ngOnInit() {
    let id = Number.parseInt(this.route.snapshot.paramMap.get('id') ?? "0");
    this.contact = this.svc.GetContactById(id);
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ContactsService} from "../contacts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../../../models/contact";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  contact: Contact | undefined = undefined;
  form: FormGroup;
  constructor(private readonly contactsService: ContactsService, private readonly router: Router, private readonly route: ActivatedRoute, private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.form.valid && this.contact) {
      this.contact.firstname = this.form.value.firstname;
      this.contact.lastname = this.form.value.lastname;
      this.contact.street = this.form.value.street;
      this.contact.city = this.form.value.city;

      this.contactsService.EditContact(this.contact);
      this.router.navigate(['/contacts/' + this.contact?.id]);
      alert("Success!");
      return;
    }
    alert('Please fill out all fields');
  }

  ngOnInit() {
    let id = Number.parseInt(this.route.snapshot.paramMap.get('id') ?? "0");
    this.contact = this.contactsService.GetContactById(id);

    if (this.contact) {
      this.form.patchValue(this.contact);
    }
  }
}

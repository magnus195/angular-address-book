import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ContactsService} from "../contacts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  form: FormGroup;
  constructor(private readonly contactsService: ContactsService, private readonly router: Router, private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.contactsService.AddContact(this.form.value);
      this.form.reset();
      this.router.navigate(['/contacts']);
      return;
    }
    alert('Please fill out all fields');
  }
}

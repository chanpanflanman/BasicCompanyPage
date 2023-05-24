import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BasicStorageService } from '../services/basic-storage.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Initialize object to store data of type FormGroup
  usersContact: any;
  // Accept contact data through template, validation applied for each form control
  contactData = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    contactNo: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    emailAd: new FormControl('', [Validators.required, Validators.email]),
    comment: new FormControl('', Validators.required)
  })
  // Constructing an object to access the basic storage
  // service and get the corresponding data
  constructor(private commentService: BasicStorageService) {
    this.commentService.getUserComments().subscribe((data) => {
      this.usersContact = data;
    })
  }
  // Submit data we got from contact form to storage
  contactLog(comments: any) {
    this.commentService.postUserComments(comments).subscribe((commentsPosted) => {
      console.warn(commentsPosted);
    })
  }
  //(Refactor this) checking for validation
  get name() {
    return this.contactData.get('name')
  }
  get phNo() {
    return this.contactData.get('contactNo')
  }
  get email() {
    return this.contactData.get('emailAd')
  }
  get comment() {
    return this.contactData.get('comment')
  }
}
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { BasicStorageService } from '../services/basic-storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  signupUser: any;
  signupForm = new FormGroup ({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contact: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private signupService: BasicStorageService) {
    this.signupService.getUserSignUps().subscribe((data)=> {
      this.signupUser = data;
    })
  }

  signupLog(signupFormData:any) {
    this.signupService.postUserSignUps(signupFormData).subscribe((data)=> {
      console.warn(data);
    })
  }

  get name() {
    return this.signupForm.get('name');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get contact() {
    return this.signupForm.get('contact');
  }
  get password() {
    return this.signupForm.get('password');
  }
}


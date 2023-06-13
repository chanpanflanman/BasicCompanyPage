import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BasicStorageService } from '../services/basic-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: any;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  get email() {
    return this.loginForm.get('email');
  }

  get pass() {
    return this.loginForm.get('password');
  }

  constructor(private loginService: BasicStorageService, private router: Router) { }

  logData() {
    this.loginService.getUserSignUps().subscribe((res) => {
      this.loginData = res;
      // console.warn(this.loginData);
      const correctLogin = this.loginData.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password; 
      });
      if (correctLogin) {
        alert(`Login successful! Welcome ${correctLogin.name}`);
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      }
    });
  }
}

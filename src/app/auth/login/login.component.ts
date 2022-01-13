import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {LogInModel, ResponseModel} from "../auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contactForm: any;
  loginModel: LogInModel = {email: "", password: ""};

  constructor(public formGroup: FormBuilder, private authService: AuthService,private router:Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.formGroup.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit(): void {
    this.loginModel = {
      email: this.contactForm.controls['email'].value,
      password: this.contactForm.controls['password'].value
    };
    this.authService.logIn(this.loginModel).subscribe({
      next: response => {
        localStorage.setItem("token",response.api_token);
        this.router.navigate(["/post"]);
      }
    })
  }
}

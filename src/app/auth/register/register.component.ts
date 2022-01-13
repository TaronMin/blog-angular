import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {LogInModel, RegisterModel} from "../auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  contactForm: any;
  registerModel: RegisterModel = {firstname: "", lastname: "", email: "", password: ""};

  constructor(public formGroup: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.formGroup.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit(): void {
    this.registerModel = {
      firstname: this.contactForm.controls['firstname'].value,
      lastname: this.contactForm.controls['lastname'].value,
      email: this.contactForm.controls['email'].value,
      password: this.contactForm.controls['password'].value
    };
    this.authService.registration(this.registerModel).subscribe(response => {
    });
  }
}

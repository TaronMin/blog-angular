import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import {SharedModule} from "../shared/shared.module";
import {GuestGuard} from "./guards/guest.guard";
import {AuthRoutingModule} from "./auth-routing.module";
import { MainAuthComponent } from './main-auth/main-auth.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainAuthComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  providers: [AuthService, GuestGuard]
})
export class AuthModule {
}

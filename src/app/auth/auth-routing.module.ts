import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {GuestGuard} from "./guards/guest.guard";
import {RegisterComponent} from "./register/register.component";
import {MainAuthComponent} from "./main-auth/main-auth.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [GuestGuard],
    component: MainAuthComponent,
    children: [
      {path: "", component: LoginComponent},
      {path: "registration", component: RegisterComponent},
    ]
  }]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}

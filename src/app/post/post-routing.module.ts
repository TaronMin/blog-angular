import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from "./post/post.component";
import {PostCreateComponent} from "./post-create/post-create.component";
import {PostSingleComponent} from "./post-single/post-single.component";
import {PostEditComponent} from "./post-edit/post-edit.component";
import {MainComponent} from "../main-comp/main-comp.component";
import {AuthGuard} from "../auth/guards/auth.guard";


const routes: Routes = [
  {
    path: "",
    canActivate:[AuthGuard],
    component: MainComponent,
    children: [
      {path: "", component: PostComponent},
      {path: "create", component: PostCreateComponent},
      {path: "single", component: PostSingleComponent},
      {path: "edit/:id", component: PostEditComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostDataService} from "./post-data.service";
import { PostFormComponent } from './post-form/post-form.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PostComponent} from "./post/post.component";
import {PostCreateComponent} from "./post-create/post-create.component";
import {PostSingleComponent} from "./post-single/post-single.component";
import {PostEditComponent} from "./post-edit/post-edit.component";
import {AuthGuard} from "../auth/guards/auth.guard";
import {GuestGuard} from "../auth/guards/guest.guard";
import {MainComponent} from "../main-comp/main-comp.component";
import {CommentComponent} from "../comment/comment.component";
import {CommentService} from "../comment/comment.service";


@NgModule({
  declarations: [
    PostFormComponent,
    PostComponent,
    PostCreateComponent,
    PostSingleComponent,
    PostEditComponent,
    MainComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PostDataService,AuthGuard,GuestGuard,CommentService],
  exports: [
    PostFormComponent
  ]
})
export class PostModule {
}

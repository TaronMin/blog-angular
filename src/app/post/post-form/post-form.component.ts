import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {PostService} from "../post.service";
import {Router} from "@angular/router";
import {PostModel} from "../post";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postForm: any;

  @Input() postInputModel: PostModel = {tile: "", body: ""};
  @Output() postOutputModel: EventEmitter<PostModel> = new EventEmitter<PostModel>();

  constructor(public formGroup: FormBuilder, private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.postForm = this.formGroup.group({
      title: [this.postInputModel.tile, [Validators.required, Validators.minLength(5)]],
      body: [this.postInputModel.body, [Validators.required, Validators.minLength(5)]]
    })
  }

  onSubmit(): void {
    const post = {
      tile: this.postForm.controls['title'].value,
      body: this.postForm.controls['body'].value,
    };
    this.postOutputModel.emit(post);
  }

}

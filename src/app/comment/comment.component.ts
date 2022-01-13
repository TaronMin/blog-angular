import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {PostModel} from "../post/post";
import {CommentService} from "./comment.service";
import {Comment} from "./comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentForm: any;
  newComment: string = ""
  commentsArray: Comment[] = []
  @Input() post: PostModel = {tile: "", body: ""}
  editInputField: boolean = false

  constructor(public formGroup: FormBuilder, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.getAllComments();
  }

  ngOnChanges(): void {
    this.initForm();
  }

  getAllComments(): void {
    this.commentService.getAll(this.post.id!).subscribe(response => {
      this.commentsArray = response;
    })
  }

  initForm(): void {
    this.commentForm = this.formGroup.group({
      comments: this.formGroup.array([]),
    })
  }

  get commentsFormArray(): FormArray {
    return this.commentForm.controls["comments"] as FormArray;
  }

  addComment(): void {
    const comment = new FormControl([""]);
    this.commentsFormArray.push(comment);
  }

  removeControl(idx: number): void {
    this.commentsFormArray.removeAt(idx);
  }

  onSubmit(value: string, idx: number): void {
    if (value !== "") {
      let comment: Comment = {body: value}
      this.commentService.create(this.post.id!, comment).subscribe(response => {
        this.commentsArray.push(response);
        this.removeControl(idx);
      });
    }
  }

  deleteComment(id: number): void {
    this.commentService.delete(this.post.id!, id).subscribe(response => {
      this.getAllComments();
    })
  }

  updateComment(comment: Comment, val: string): void {
    if (val !== "") {
      comment.body = val;
      this.commentService.update(this.post.id!, comment).subscribe(response => {
        this.getAllComments();
        this.editInputField = !this.editInputField;
      })
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import {PostModel} from "../post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent implements OnInit {

  posts: PostModel[] = [];

  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.postService.getAll().subscribe(response => {
      this.posts = response;
    });
  }

  editPost(post: PostModel): void {
    this.router.navigate([`post/edit/${post.id}`]);
  }

  deletePost(post: PostModel): void {
    this.postService.deletePost(post.id).subscribe(response => {
      this.getAll();
    })
  }
}

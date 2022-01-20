import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PostModel} from "../post";
import {PostDataService} from "../post-data.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  newPost: PostModel = {tile: '', body: ''};

  constructor(private postService: PostDataService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(post: PostModel): void {
    const resultPost = {title: post.tile, body: post.body};
    this.postService.createPost(resultPost).subscribe(response => {
      this.router.navigate(["/post/single"]);
    })

  }
}

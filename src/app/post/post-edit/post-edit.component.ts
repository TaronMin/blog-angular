import { Component, OnInit } from '@angular/core';
import { PostModel } from "../post";
import { PostDataService } from "../post-data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { PostSessionService } from "../post-state/post-session.service";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  postModel: any = null;
  postId: number = 0;

  constructor(private postService: PostDataService, private router: Router, private route: ActivatedRoute, private postSessionService: PostSessionService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params["id"];
      this.getPost(this.postId);
    });
  }

  getPost(id: number): void {
    this.postService.getByID(id).subscribe(response => {
      this.postModel = response;
    })
  }

  onSubmit(post: PostModel): void {
    console.log(post, "edit");
    const postModel = {
      tile: post.tile,
      body: post.body,
    };
    this.postSessionService.change(postModel, this.postId).subscribe(() => {
      this.router.navigate(["/post/single"]);
    })
  }
}

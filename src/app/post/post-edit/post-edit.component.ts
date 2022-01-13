import {Component, OnInit} from '@angular/core';
import {PostModel} from "../post";
import {PostService} from "../post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  postModel: any = null;
  postId: number = 0;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {
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
    const postModel = {
      title: post.tile,
      body: post.body,
    };
    this.postService.changePost(postModel, this.postId).subscribe(() => {
      this.router.navigate(["/post/single"]);
    })
  }
}

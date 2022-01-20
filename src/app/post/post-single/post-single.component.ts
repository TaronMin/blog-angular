import { Component, OnInit } from '@angular/core';
import { PostModel } from "../post";
import { Router } from "@angular/router";
import { PostSessionService } from "../post-state/post-session.service";
import { SessionQuery } from "../post-state/post-session.query";

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent implements OnInit {
  // search: string = ""
  // requestCount: number = 1;
  // documentHeight: number = 0;
  // private searchUrl: any;
  // documentScrollHeight: number = 0;
  offset: number = 0;
  height: number = 0;
  loading: boolean = true;
  posts$ = this.query.selectAll();

  constructor(private sessionService: PostSessionService, private query: SessionQuery, private router: Router) {
  }

  ngOnInit(): void {
    // merge(this.activatedRoute.queryParams, fromEvent(window, "scroll")).pipe(
    //   map((value) => {
    //     this.searchUrl = Object.values(value)[0];
    //     console.log(typeof this.searchUrl, this.searchUrl);
    //   }),
    //   tap(() => {
    //     this.offset = document.documentElement.scrollTop + window.innerHeight;
    //     this.height = document.documentElement.offsetHeight;
    //   }),
    //   tap(() => {
    //     if (typeof this.searchUrl === "string") {
    //       this.posts = [];
    //       this.requestCount--;
    //     }
    //   }),
    //   filter(() => (this.offset >= this.height - 100 && this.loading) || this.posts.length === 0),
    //   tap(() => {
    //     this.requestCount++;
    //     this.loading = false;
    //   }),
    //   switchMap(() => this.getAll()),
    //   map(value => {
    //     console.log(value, " get all value");
    //     this.posts.push(...value);
    //     console.log(this.posts.length, " posts length");
    //   })
    // ).subscribe(val => console.log(val, " in subscribe"));
    this.getAll();
  }

  getAll(): void {
    this.sessionService.getAll().subscribe()
    // return this.postService.getAll().pipe(
    //   tap(() => {
    //     this.loading = true;
    //   }),
    //   filter(() => !(this.requestCount >= 15)),
    //   tap(() => {
    //     setTimeout(() => {
    //       this.documentHeight = document.body.clientHeight;
    //       this.documentScrollHeight = document.documentElement.scrollHeight;
    //       if (this.documentScrollHeight > this.documentHeight) {
    //         this.getAll().subscribe(value => {
    //           this.posts.push(...value);
    //         });
    //       }
    //     })
    //   })
    // )
  }

  editPost(post: PostModel): void {
    this.router.navigate([`post/edit/${post.id}`]);
  }

  deletePost(post: PostModel): void {
    this.sessionService.delete(post.id).subscribe(() => {
      this.getAll();
    })
  }

  // searchUser(search: string) {
  //   this.router.navigate([], {
  //     queryParamsHandling: 'merge',
  //     queryParams: {search: encodeURI(search)}
  //   })
  // }
}

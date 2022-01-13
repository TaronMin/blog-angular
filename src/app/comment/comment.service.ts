import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Comment} from "./comment";

@Injectable()
export class CommentService {


  constructor(private http: HttpClient) {
  }

  private url: string = environment.baseUrl;

  getUrl(id: number) {
    return `${this.url}` + "api/v1/post/" + id;
  }

  getAll(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.getUrl(postId) + "/comment");
  }

  create(postId: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.getUrl(postId) + "/comment", comment);
  }

  get(postId: number, commentId: number) {
    return this.http.get<Comment>(this.getUrl(postId) + `/comment/${commentId}`);
  }

  update(postId: number, comment: Comment) {
    let edited: Comment = {body: comment.body};
    return this.http.put<Comment>(this.getUrl(postId) + `/comment/${comment.id}`, edited);
  }

  delete(postId: number, commentId: number) {
    return this.http.delete<Comment>(this.getUrl(postId) + `/comment/${commentId}`);
  }
}

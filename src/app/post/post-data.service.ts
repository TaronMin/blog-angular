import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { PostModel } from "./post";
import { Observable } from "rxjs";

@Injectable()
export class PostDataService {

  constructor(private http: HttpClient) {}

  private url: string = environment.baseUrl;

  getUrl(url: string | number) {
    return `${this.url}` + "api/v1/post" + url;
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(this.getUrl(""), post);
  }

  getAll(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.getUrl(""))
  }

  getByID(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(this.getUrl(`/${id}`));
  }

  changePost(post: PostModel, id: number): Observable<any> {
    return this.http.put<any>(this.getUrl(`/${id}`), post);
  }

  deletePost(id?: number): Observable<any> {
    return this.http.delete<any>(this.getUrl(`/${id}`));
  }
}

import {Inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {data, LogInModel, RegisterModel, ResponseModel} from "./auth";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  private url: string = environment.baseUrl;

  getUrl(url: string | number) {
    return `${this.url}` + url;
  }

  logIn(user: LogInModel): Observable<data> {
    return this.http.post<data>(this.getUrl("api/v1/auth/login"), user);
  }

  registration(user: RegisterModel): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.getUrl("api/v1/auth/register"), user);
  }

  me(): Observable<ResponseModel>{
    return this.http.get<ResponseModel>(this.getUrl("api/v1/me"));
  }
}

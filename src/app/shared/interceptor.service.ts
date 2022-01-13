import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class InterceptorService {

  constructor() {
  }

  intercept(requestToHandle: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Getting token form local storage
    const token = <string>localStorage.getItem('token');

    if (token !== null) {
      const tokenizedReq = requestToHandle.clone({headers: requestToHandle.headers.set('Authorization', 'Bearer ' + token)});
      return next.handle(tokenizedReq);
    }
    return next.handle(requestToHandle);
  }
}

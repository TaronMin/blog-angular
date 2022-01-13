import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';
import {AuthService} from "../auth.service";

@Injectable()

export class GuestGuard implements CanActivate {
  constructor(private authService: AuthService,private router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.isLogin();
  }

  isLogin(): Observable<any> {
    return this.authService.me()
      .pipe(
        map(val => {
          this.router.navigate(['post']);
          return false;
        }),
        catchError(() => {
          return of(true);
        })
      )
  }
}

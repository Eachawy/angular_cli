import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { UserService } from './services/User.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private router: Router, private User: UserService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      //this.router.navigate(['/User']);
      //console.log(this.User.getuserloggedin());
      return this.User.getuserloggedin(); 
      //
  }
}

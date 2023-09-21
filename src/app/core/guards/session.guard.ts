import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class sessionGuard implements CanActivate {
  
  constructor(private _cookie:CookieService,private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkCookieSession();
  }
  
  checkCookieSession():boolean{
    try {
      const token:boolean =  this._cookie.check('token')
      if(!token){
        this.router.navigate(["/auth"])
        return false;
      }
      return token;
      
    } catch (error) {
      console.log('Algo sucedio',error)
      return false;
    }
  }
};

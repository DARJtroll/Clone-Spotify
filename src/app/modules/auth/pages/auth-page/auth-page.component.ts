import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit{
  
  formLogin: FormGroup = new FormGroup({});

  texto:string = "" ;

  errorSesion:boolean = false;
  constructor(private _authService:AuthService, private cookie:CookieService, private _router:Router){}

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email:new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password:new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15)
        ])
      }
    );
  }

  sendLogin():void{
    const body = this.formLogin.value
    this._authService.sendCredentials(body.email,body.password)
    //TODO Errores de 200 - 400
    .subscribe(response=>{

      const {tokenSession , data } = response
      this.errorSesion = false;
      this.cookie.set('token',tokenSession,4,'/');
      this._router.navigate(['/tracks'])
    },
    err=>{ //Errores de 400 >=
      console.log("Error es => ",err);
      this.errorSesion = true;
    });
  }
}

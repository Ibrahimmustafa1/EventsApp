import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName: string | undefined;
  password: string | undefined;
  constructor(private _auth: AuthService, private _router: Router) {}
  loginInvalid = false;
  login(formValues: any) {
    this._auth
      .loginUser(formValues.userName, formValues.password)
      .subscribe((data) => {
        console.log(data);
        if (data) {
          this._router.navigate(['events']);
        } else this.loginInvalid = true;
      });
  }

  ngOnInit(): void {}
}

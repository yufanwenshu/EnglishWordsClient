import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../../classes/User';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User;

  constructor(private loginService: LoginService, private router: Router) { }

  login() {
    this.loginService.login(this.user).subscribe(
      (data) => {
        if(data["status"]=="ok"){
          this.router.navigate(['/index']);
        }else{
          alert("登陆失败，请检查用户名或密码！");
        }
      }
    )
  }

  ngOnInit() {

  }
}

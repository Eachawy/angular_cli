import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserService } from '../services/User.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private User: UserService) { }

  ngOnInit() {
  }

  getuser (user,pass){
    if(user === 'admin' && pass === '123456'){
      this.User.setuserloggedin();
      console.log(this.User.getuserloggedin());
      this.router.navigate(['User']);
    }
    return false;
  }

}

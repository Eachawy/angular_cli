import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isuserloggedin;
  private username;

  constructor() { 
    this.isuserloggedin = false;
  }

  setuserloggedin (){
    this.isuserloggedin = true;
  }
  
  getuserloggedin (){
    return this.isuserloggedin; 
  }

}

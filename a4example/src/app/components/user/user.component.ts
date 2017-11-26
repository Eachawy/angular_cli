import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:any[];
  posts:post;
  isEdit:boolean = false;

  constructor(private dataService:DataService) { 
    console.log('constructor run ....');
  }

  ngOnInit() {
    console.log('ngonInit run .....');
    this.name = ' Eachawy ';
    this.age = 35;
    this.email = 'eachawy@gail.com';
    this.address = {
      street : 'saad ezz',
      city : 'zagazig',
      state : 'egypt'
    };
    this.hobbies = ['history','News','resarch'];

    this.dataService.getPosts().subscribe((posts) => {
        this.posts = posts;
    });
  }

  onclick (){
    this.hobbies.push ('New hobby');
  }

  addHobby (hobby){
    //this.hobbies.push (hobby);
    this.hobbies.unshift (hobby);
    return false;
  }

  deleteHobby (hobby){
    for (let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
         this.hobbies.splice (i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street:string,
  city:string,
  state:string
}
interface post {
  id:number,
  title:string,
  body:string,
  userId:number
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs/Rx'
//import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/take';

@Injectable()
export class DataService {
  
  idNews: any;
  
  constructor(private http:Http) { 
    if (typeof (Storage) !== "undefined") {
      this.idNews = localStorage.getItem("NDet");
    }
    
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', { params: { "id": this.idNews } }).map(res => res.json());
  }
  getcomments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments', { params: { "postId": this.idNews } }).map(res => res.json());
  }
  postposts(){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',{params: {
      "title": "Eachawy",
      "body": "Eachawy Eachawy"
    }}).map(res => res.json());
  }
  getphotos() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos').map(res => res.json());
  }
  getgeo(){
    return this.http.get('https://jsonplaceholder.typicode.com/users').map(res=> res.json());
  }

}


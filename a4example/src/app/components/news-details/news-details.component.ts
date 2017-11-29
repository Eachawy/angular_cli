import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  newsDetails: Newdetails;
  comments: Comment;
  constructor(private dataservice: DataService) {
  }

  ngOnInit() {
    if (typeof (Storage) !== "undefined") {
      this.dataservice.idNews = localStorage.getItem("NDet");
    }
    this.dataservice.getPosts().subscribe((news) => {
      this.newsDetails = news;
    });
    this.dataservice.getcomments().subscribe((comments) => {
      this.comments = comments;
    });
  }
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Newdetails {
  userId: number;
  id: number;
  title: string;
  body: string;
}
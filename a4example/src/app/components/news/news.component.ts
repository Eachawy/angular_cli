import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news : New;

  constructor (private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.idNews = undefined;
    this.dataservice.getPosts().subscribe((news) => {
        this.news = news;
    });
  }
  goDetails(id){
    this.dataservice.idNews = id;
    localStorage.setItem("NDet", id);
  }
}

interface New {
  userId: number;
  id: number;
  title: string;
  body: string;
}
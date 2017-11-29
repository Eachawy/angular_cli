import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

import { publiccorejs }  from '../../../assets/js/publicjs.js';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news : New;

  constructor(private dataservice: DataService ) { }

  ngOnInit() {
    this.dataservice.idNews = undefined;
    this.dataservice.getPosts().subscribe((news) => {
        this.news = news;
        
    });
    publiccorejs.hideprogress();
  }
  goDetails(id){
    this.dataservice.idNews = id;
    localStorage.setItem("NDet", id);
  }

  postdata(){
    this.dataservice.postposts().subscribe((Pdt) => {
      console.log(Pdt);
    });
  }
}

interface New {
  userId: number;
  id: number;
  title: string;
  body: string;
}
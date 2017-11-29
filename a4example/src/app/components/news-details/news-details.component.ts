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
  constructor(private dataservice: DataService) {
  }

  ngOnInit() {
    //console.log(this.dataservice.idNews);
    //this.dataservice.idNews = 2;
    this.dataservice.getPosts().subscribe((news) => {
      this.newsDetails = news;
    });


    function isPostBack() {

      return document.referrer.indexOf(document.location.href) > 0;
    }

    if (isPostBack()) {
      document.write('<span style="color:red;">Your search returned no results.</span><br/>');
    }

  }

}

interface Newdetails {
  userId: number;
  id: number;
  title: string;
  body: string;
}
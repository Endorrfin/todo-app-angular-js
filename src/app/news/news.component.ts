import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../shared/news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList;
  currentCountry = 'us'; // default country is Ukraine
  currentCategory = 'technology'; // default category is Health
  currentSource = '';
  countryList = ['ua', 'us', 'pl', 'ca', 'gb', 'kz', 'ru']; // country list for country select
  // countryList = ['Ukraine', 'USA', 'Pollen', 'Canada', 'Great Britain', 'Kazakhstan', 'Russia']; // country list for country select
  categoryList = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']; // category list for category select
  sourceList = [];

  constructor(public news: NewsApiService) { }

  ngOnInit(): void {
    // Get news
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
      this.newsList = news['articles'];
      // console.log(this.newsList)
    });

    // Get all sources
    this.news.getSourcesByCountry(this.currentCountry, this.currentCategory).subscribe(sources => {
      if(sources['sources'].length > 0) {
        // console.log(sources)
        this.sourceList = sources['sources'];
        // console.log(this.sourceList);
        this.currentSource = this.sourceList[0];
      }
    });

    // console.log(this.news.getNewsByCountryAndCategoryAndSoure(1, 2, 3));
    // console.log(this.news.getNewsByCountryAndCategoryAndSoure(1, null, 3));

  }

  // SELECT COUNTRY & CATEGORY
  onChange() {
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
      this.newsList = news['articles'];
    });
  }


  // SELECT SOURCE
  onChangeSource() {
    this.news.getNewsBySource(this.currentSource).subscribe(news => {
      console.log(news);
      this.newsList = news['articles'];
    });
  }


  // onChangeSource() {
  //   this.news.getNewsByCategoryCountrySource(this.currentCountry, this.currentCategory, this.currentSource).subscribe(news => {
  //     console.log(news);
  //     this.newsList = news['articles'];
  //   });
  // }


}

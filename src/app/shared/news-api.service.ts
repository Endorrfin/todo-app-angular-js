import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key: string = environment.news_api.api_key;

  constructor(public http: HttpClient) {}


  getNewsByCountryAndCategory(country, category) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.api_key}`);
  }

  getSourcesByCountry(country, category) {
    return this.http.get(`https://newsapi.org/v2/sources?country=${country}&category=${category}&apiKey=${this.api_key}`);
  }

  getNewsBySource(source) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${this.api_key}`);
  }




  // getNewsByCountryAndCategoryAndSoure(country, category, source) {
  //   var apiUrl = 'http://newsapi.org/v2/top-headlines?';
  //   var countryParam = country ? `country=${country}` : '';
  //   var categoryParam = category ? `category=${category}` : '';
  //   var sourceParam = source ? `source=${source}` : '';
  //   var params = [countryParam, categoryParam, sourceParam].filter((p) => p).join('&');
  //   // return this.http.get(apiUrl + params);
  //   return apiUrl + params;
  // }


  // getNewsByCategoryCountrySource(country, category, source) {
  //   return this.http.get(`http://newsapi.org/v2/top-headlines?sources=${source}&country=${country}&category=${category}&apiKey=${this.api_key}`);
  // }


}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsApiService {

  apiKey = '6dede4ec51a64d9ca8b73f5deaf18ace';

  constructor(private http: HttpClient) {}


  initSources() {
    return this.http.get(`https://newsapi.org/v2/sources?language=en&apiKey=${this.apiKey}`);
  }

  initArticles() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`);
  }

  getArticlesByID(source: string) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${this.apiKey}`);
  }

}

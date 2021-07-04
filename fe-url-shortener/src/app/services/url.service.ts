import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Url } from '../models/url.interface';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  url: Url | undefined;
  shortUrl: string;
  urlReturned: EventEmitter<string>;

  constructor(private http: HttpClient) {
    this.urlReturned = new EventEmitter();
    this.shortUrl = "";
  }

  async callApi(originalUrl: string) {
    const url = await this.http.post<Url>('http://localhost:3000/url', { originalUrl }).toPromise();

    this.shortUrl = url.shortUrl;
    this.url = url;
    this.urlReturned.emit();
  }
}

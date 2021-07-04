import { Component, OnInit } from '@angular/core';
import { Url } from '../../models/url.interface';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'app-output-url',
  templateUrl: './output-url.component.html',
  styleUrls: ['./output-url.component.css']
})
export class OutputUrlComponent implements OnInit {

  shortUrl: string;
  url: Url | undefined;

  constructor(private urlService: UrlService) {
    this.shortUrl = "";
  }

  ngOnInit(): void {
    this.urlService.urlReturned.subscribe(() => { this.shortUrl = this.urlService.shortUrl, this.url = this.urlService.url });
  }

}

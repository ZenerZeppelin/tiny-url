import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../services/url.service';


@Component({
  selector: 'app-input-url',
  templateUrl: './input-url.component.html',
  styleUrls: ['./input-url.component.css']
})
export class InputUrlComponent implements OnInit {

  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
  }

  onClick(originalUrl: string) {
    this.urlService.callApi(originalUrl);
  }

}

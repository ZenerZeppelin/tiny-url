import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Domain } from '../models/domain.interface';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  domains: Domain[] | undefined;
  domainsReturned: EventEmitter<Domain[]>;

  constructor(private http: HttpClient) {
    this.domainsReturned = new EventEmitter()
  }

  async callApiForDomains() {
    const domains = await this.http.get<Domain[]>('http://localhost:3000/domain?pageNumber=1&pageLimit=10').toPromise();
    this.domains = domains;
    this.domainsReturned.emit()
  }
}

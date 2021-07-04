import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Domain } from 'src/app/models/domain.interface';
import { DomainService } from 'src/app/services/domain.service';

@Component({
  selector: 'app-domain-output',
  templateUrl: './domain-output.component.html',
  styleUrls: ['./domain-output.component.css']
})
export class DomainOutputComponent implements OnInit {
  domains: Domain[] | undefined;

  constructor(private domainService: DomainService, private router: Router) { }

  ngOnInit(): void {
    this.domainService.domainsReturned.subscribe(() => {
      this.domains = this.domainService.domains
    });
    this.domainService.callApiForDomains();
  }

}

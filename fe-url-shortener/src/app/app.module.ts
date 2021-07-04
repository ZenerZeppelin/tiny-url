import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputUrlComponent } from './components/input-url/input-url.component';
import { OutputUrlComponent } from './components/output-url/output-url.component';
import { DomainOutputComponent } from './components/domain-output/domain-output.component';

@NgModule({
  declarations: [
    AppComponent,
    InputUrlComponent,
    OutputUrlComponent,
    DomainOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

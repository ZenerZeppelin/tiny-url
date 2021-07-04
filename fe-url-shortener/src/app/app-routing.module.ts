import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainOutputComponent } from './components/domain-output/domain-output.component';
import { InputUrlComponent } from './components/input-url/input-url.component';

const routes: Routes = [
  { path: '', component: InputUrlComponent },
  { path: 'domains', component: DomainOutputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

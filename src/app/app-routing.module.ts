import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancesComponent } from './components/finances/finances.component';

const routes: Routes = [


  {
    path: 'finances',
    component: FinancesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

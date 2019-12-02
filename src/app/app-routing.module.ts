import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DataTestComponent } from './data-test/data-test.component';
import { MaterialTableComponent } from './material-table/material-table.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dataTest', component: DataTestComponent },
  { path: 'materialTable', component: MaterialTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

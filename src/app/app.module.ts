import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
 } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { AgGridModule } from '@ag-grid-community/angular';
import { FlexmonsterPivotModule } from 'ng-flexmonster';

import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { CdfDataComponent } from './cdf-data/cdf-data.component';
import { HeaderComponent } from './header/header.component';
import { HttpRequestInterceptor } from './services/interceptor';
import { HttpMockRequestInterceptor } from './services/interceptor.mock';
import { QuerySpecsComponent } from './query-specs/query-specs.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { DataTestComponent } from './data-test/data-test.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { FlexMonsterComponent } from './flex-monster/flex-monster.component';

export const isMock = environment.mock;

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    QuerySpecsComponent,
    CdfDataComponent,
    HeaderComponent,
    HomeComponent,
    DataTestComponent,
    MaterialTableComponent,
    AgGridComponent,
    FlexMonsterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    FlexmonsterPivotModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: isMock ? HttpMockRequestInterceptor : HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



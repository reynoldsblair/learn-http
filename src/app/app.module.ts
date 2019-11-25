import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpRequestInterceptor } from './services/interceptor';
import { HttpMockRequestInterceptor } from './services/interceptor.mock';
import { QuerySpecsComponent } from './query-specs/query-specs.component';

export const isMock = environment.mock;

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    QuerySpecsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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



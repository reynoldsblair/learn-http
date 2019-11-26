
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as users from '../../assets/mockData/users.json';
import * as querySpecs from '../../assets/mockData/querySpecs.json';
import * as sigacts from '../../assets/mockData/sigacts.json';

const urls = [
  {
    url: 'https://jsonplaceholder.typicode.com/users',
    json: users
  },
  {
    url: '/app-proxy/_webtas_data_service_v1/cdf/metadata-ql?query={informationModels{querySpecs{uri,url,executeUrl,prettyName,properties}}}',
    json: querySpecs
  },
  {
    url: '/app-proxy/_webtas_data_service_v1/cdf/data/NGIC/queryspec/OperationsSIGACTPublishedReport?$rows=100',
    json: sigacts
  }
];


@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        for (const element of urls) {
            if (request.url === element.url) {
                console.log('Loaded from json : ' + request.url);
                return of(new HttpResponse({ status: 200, body: ((element.json) as any).default }));
            }
        }
        console.log('Loaded from http call :' + request.url);
        return next.handle(request);
    }
}

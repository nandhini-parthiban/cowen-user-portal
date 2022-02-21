import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const BASE_URL = "https://jsonplaceholder.typicode.com/";

/**
 * Http Utility service
 */
@Injectable()
export class HttpService {

  constructor (
      private http: HttpClient
    ) { }

  get (
      url: string,
      params?: any
    ) {
        return this.http.get(this.mapUrl(url), params)
                        .pipe(catchError(this.handleError()));
    }

    post (
        url: string,
        params?: any
      ) {
          return this.http.post(this.mapUrl(url), params)
                          .pipe(catchError(this.handleError()));
      }

  private handleError() {
        return (error: { message: any; status: any; }) => {
            console.error(error.message);
            // handle error operations
            return of(error.status);
        };
    }

    private mapUrl (
      param: string
    ): string {    
        return BASE_URL + param;
    }
}
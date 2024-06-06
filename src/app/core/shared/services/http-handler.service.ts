import { inject, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {
  http = inject(HttpClient)
  // constructor(private http: HttpClient) {}

  getRequest<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  postRequest<T>(url: string, body:any): Observable<T> {
    return this.http.post<T>(url, body);
  }

  putRequest<T>(url: string, body:any): Observable<T> {
    return this.http.put<T>(url, body);
  }

  patchRequest<T>(url: string, body:any): Observable<T> {
    return this.http.patch<T>(url, body);
  }

  deleteRequest<T>(url: string, body:any): Observable<T> {
    return this.http.delete<T>(url);
  }

  // private handleError(error: HttpErrorResponse) {
  //   // Handle different error scenarios here
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('Client-side error:', error.error.message);
  //   } else {
  //     console.error(`Server-side error: ${error.status} ${error.message}`);
  //   }
  //   return throwError('Something went wrong; please try again later.');
  // }

}

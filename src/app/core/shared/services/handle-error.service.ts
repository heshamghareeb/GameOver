import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  logErrorResponse(errorResponse: HttpErrorResponse): Observable<any>{
    // Client side error
    if(errorResponse.status) {
      console.log('Client side error');
  }else{
    // Server side error
    console.log('Server side error');
  }
  return throwError(() => Error('Error: ' + errorResponse.status))
}}

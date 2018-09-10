import { Injectable, Pipe } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Config } from 'protractor';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  serviceUrl = 'http://localhost:3000/user/contact/';
  
  constructor(private http: HttpClient) { }

  //Add Contact
  addContact(newContact : Contact) : Observable<Contact>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.post<Contact>(this.serviceUrl, newContact, httpOptions)
      .pipe(catchError(this.handleError));
  }

  //Fetch Contact
  getContact(){
    return this.http.get<Config>(this.serviceUrl);
  }

  //Update Contact
  updateContact(updateContact : Contact, id : any)  : Observable<Contact>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.put<Contact>(this.serviceUrl+id, updateContact, httpOptions)
      .pipe(catchError(this.handleError));
  }

  //Delete Contact
  deleteContact(id){
    return this.http.delete(this.serviceUrl+id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}

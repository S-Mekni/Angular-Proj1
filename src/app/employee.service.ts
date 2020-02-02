import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
import { throwError as observableThrowError} from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  private url = '../assets/data/employees.json';
  getEmployees(): Observable<IEmployee[]> {
   return this.http.get<IEmployee[]>(this.url)
   .pipe(catchError(this.errorHandler));
  }
   errorHandler(error: HttpErrorResponse){
// tslint:disable-next-line: deprecation
      return observableThrowError(error.message || 'Server Error');
   }
}

import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError,Observable } from 'rxjs';

import { Alumno } from './../interfaces/alumno';
const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http:HttpClient) { }

  getAlumnos():Observable<Alumno[]>{
    return this.http.get<Alumno[]>("http://localhost:8080/alumnos");
  }

  saveAlumno(alumno:Alumno):Observable<any>{
    return this.http.post<any>("http://localhost:8080/alumnos",alumno,httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Ocurrió un error: ', error.error.message);
    }else{
      console.error(`El backend retornó el código ${error.status}, El cuerpo del mensaje de error es: ${error.message}`);
    }
    return throwError('Algo malo sucedió; por favor intente más tarde');
  }
}

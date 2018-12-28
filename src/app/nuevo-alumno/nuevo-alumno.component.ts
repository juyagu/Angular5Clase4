import { Component, OnInit } from '@angular/core';
import { AlumnosService } from './../servicios/alumnos.service';

import { Alumno } from './../interfaces/alumno';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css']
})
export class NuevoAlumnoComponent implements OnInit {
  alumno:Alumno = 
  {id:0,nombre:"",apellido:"",curso:""};
  error:string;
  constructor(private svcAlumno:AlumnosService) { }

  ngOnInit() {
  }

  guardarAlumno(){
    this.svcAlumno.saveAlumno(this.alumno)
      .subscribe(
        res => {
          console.log(res);
          window.location.reload();
        },
        error => console.log(error)
      );
  }

}

import { Component, OnInit } from '@angular/core';

import { AlumnosService } from './../servicios/alumnos.service';
import { Alumno } from './../interfaces/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumno[];
  nuevoAlumno = false;
  constructor(private svcAlumnos: AlumnosService) { }

  ngOnInit() {
    this.obtenerAlumnos();
  }

  obtenerAlumnos() {
    this.svcAlumnos.getAlumnos()
      .subscribe(data => {  
        this.alumnos = data
        console.log(typeof this.alumnos);
      });
  }

  ingresarNuevoAlumno(){
    this.nuevoAlumno = this.nuevoAlumno ? !this.nuevoAlumno : true;
  }

}

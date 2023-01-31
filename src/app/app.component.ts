import { getLocaleNumberSymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular-crud';

  empleados = [
    {nombre : 'Leonel', puesto: 'programador', email: 'leonel.gorgellon@gmail.com'},
    {nombre : 'Emiliano', puesto: 'cyberseguridad', email: 'emiliano.gorgellon@gmail.com'},
    {nombre : 'Matias', puesto: 'abogado', email: 'matias.gorgellon@gmail.com'},
  ];

  model : any = {};
  model2 : any = {};
  msg: string = '';
  ocultarActualizacion: boolean = true;
  myValue : any = {};

  agregarEmpledo() : void{
    this.empleados.push(this.model);
    this.model ={};
    this.msg = 'Se agrego correctamente.'
  }

  eliminarEmpleado(i=0) : void{
    this.empleados.splice(i, 1);
    this.msg='Se elimino el dato correctamente.'
  }
  
 

  editarEmpleado(i = 0) : void{
    this.ocultarActualizacion = false;
    this.model2.nombre = this.empleados[i].nombre;
    this.model2.puesto = this.empleados[i].puesto;
    this.model2.email = this.empleados[i].email;
    this.myValue = i;
  }

  actualizarEmpledo () : void{
    console.log(this.model2)
  }
}

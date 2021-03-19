import { Component } from '@angular/core';

/**
 * Decorador '@Component': atributos de este componente
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public edadUno = 0;
  public edadDos = 0;
  public resultadoSuma = 0;
  public resultadoPromedio = 0;

  calcularInputs(): any {
    this.calcularSuma();
    this.calcularPromedio();
  }

  calcularSuma(): any { this.resultadoSuma = this.edadUno + this.edadDos; }

  calcularPromedio(): any { this.resultadoPromedio = this.resultadoSuma / 2; }

  limpiarCampos(): any {
    this.edadUno = 0;
    this.edadDos = 0;
    this.resultadoPromedio = 0;
    this.resultadoSuma = 0;
  }
}

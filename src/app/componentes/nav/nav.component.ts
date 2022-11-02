import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  cantidadDeProductos!:number

  //@Input() cantidad!:number 
  @Input() set cantidad(valor:number){
    this.cantidadDeProductos = valor
    this.calcularTotal()
  }
  @Output() nuevoEvento = new EventEmitter<number>()
 
  total:number = 0
  ocultarCarrito:boolean = true
  constructor() { }

  ngOnInit(): void {
  }


 calcularTotal(): void{
  this.total = this.cantidadDeProductos * 125
 }
 ocultarMostrarCarrito(){
  if(this.ocultarCarrito){
    this.ocultarCarrito = false
  } else {
    this.ocultarCarrito = true
  }
 }
 eliminarProductos(): void{
  this.cantidadDeProductos = 0
  this.nuevoEvento.emit(this.cantidadDeProductos)
 }
 checkOut(): void{
  this.ocultarCarrito = true
  this.eliminarProductos()
 }
 
}

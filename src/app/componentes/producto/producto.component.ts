import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  imagen:string = "../../../assets/images/image-product-1.jpg"
  thumbnailSelecionado: Array<{thumbnail: boolean}> = [{thumbnail: false}, {thumbnail: false}, {thumbnail: false}, {thumbnail: false}]
  contadorImagen:number = 1
  close:boolean = true
  cantidad:number = 0
  

  @Output() cantidadEvent = new EventEmitter<number>()
  
  constructor() { }

  ngOnInit(): void {
  }

  imagenSeleccionada(numeroDeImagen:number) :void{
    switch(numeroDeImagen){
      case 1:
        this.imagen = "../../../assets/images/image-product-1.jpg"
        break
        case 2:
          this.imagen = "../../../assets/images/image-product-2.jpg"
          break
          case 3:
            this.imagen = "../../../assets/images/image-product-3.jpg"
            break
            case 4:
              this.imagen = "../../../assets/images/image-product-4.jpg"
              break
    }
    
    this.thumbnailSelecionado.forEach( (elemento, indice) => {
      if((indice + 1) == numeroDeImagen){
        elemento.thumbnail = true
      }else{
        elemento.thumbnail = false
      }
    })
  }

  botonPrevio(valor:number): void{
    if(this.contadorImagen > 1){
      this.contadorImagen -= valor
    }
    console.log(this.contadorImagen)
    this.imagenSeleccionada(this.contadorImagen)
  }
  botonSiguiente(valor:number): void{
    if(this.contadorImagen < 4){
      this.contadorImagen += valor
    }
    console.log(this.contadorImagen)
    this.imagenSeleccionada(this.contadorImagen)
  }

  cerrar(): void{
    this.close = true
    console.log(this.close)
  }
  abrirModal(){
    this.close = false
    console.log("hola")
  }

  //carrito
  sumarProducto(): void{
    this.cantidad += 1
  }
  restarProducto(): void{
    if(this.cantidad > 0){
      this.cantidad -= 1
    }
  }
  agregarAlCarrito(): void{
    if(this.cantidad > 0){
      this.cantidadEvent.emit(this.cantidad)
    }
    this.cantidad = 0
  }


}

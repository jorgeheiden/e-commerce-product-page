import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'e-commerce-product-page';

  cant!: number;
  cantidad(cantidad: number): void {
    this.cant = cantidad;
  }
  reset(valor:any){
    console.log(valor)
    this.cant = valor
  }
  
}

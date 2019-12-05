import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor() { }
  // tslint:disable-next-line: ban-types
  static emitirQtd = new EventEmitter<Number>();
  items = [];
  qtd = 0;

  addToCart(product) {
    this.items.push(product);
    this.qtd++;
    CartService.emitirQtd.emit(this.qtd);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.qtd = 0;
    this.items = [];
    CartService.emitirQtd.emit(this.qtd);
    return this.items;
  }

  removerItem() {
    this.qtd--;
    CartService.emitirQtd.emit(this.qtd);
  }

}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  total = 0.0;

  constructor( private cartService: CartService,
               public router: Router,
               // tslint:disable-next-line: variable-name
               private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    // console.log(this.items);
    // tslint:disable-next-line: triple-equals
    if (this.items == '') {
      this._snackBar.open('Carrinho vazio. Continue Comprando!', 'Ok', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['bg-snack']
      });
      this.router.navigateByUrl('');
    }

    this.calcularTotal();
  }

  calcularTotal() {
    this.total = 0.0;
    this.items.forEach(element => {
      this.total = this.total + parseFloat(element.price);
    });
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removerItem(indice) {
    this.items.splice(indice, 1);
    this.cartService.removerItem();
    // tslint:disable-next-line: triple-equals
    if (this.items.length == 0) {
      this._snackBar.open('Carrinho vazio. Continue Comprando!', 'Ok', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['bg-snack']
      });
      this.router.navigateByUrl('');
    }
    this.calcularTotal();
  }
}

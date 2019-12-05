import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../services/firebase.service';
import { UsuarioService } from './../services/usuario.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css']
})
export class FinalizarCompraComponent implements OnInit {
  public userId;
  public todos = [];
  public checkingUser = true;
  public items;
  public total = 0.0;
  public status = 'Aguardando Pagamento';
  public data: Date;
  public qtd;
  public doc;
  public id;

  constructor(private firebase: FirebaseService,
              private usuario: UsuarioService,
              private cartService: CartService,
              public router: Router,
              // tslint:disable-next-line: variable-name
              private _snackBar: MatSnackBar) {

    this.usuario.getUser().subscribe((user) => this.userId = user.id);
    this.items = this.cartService.getItems();
    // console.log(this.items);
    this.qtd = this.items.length;
    this.items.forEach(element => {
      this.total = this.total + parseFloat(element.price);
    });

  }

  async adicionar() {

    try {
      // tslint:disable-next-line: new-parens
      this.data = new Date;
      this.doc = await this.firebase.db().collection('pedido').add({
        user_id: this.userId,
        cart: this.items,
        total: this.total,
        status: this.status,
        data: this.data

      });
      this.id = this.doc.id;
      // console.log(this.id);
      this._snackBar.open('Compra realizada com sucesso!', 'Ok', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['bg-snack']
      });
      this.cartService.clearCart();

    } catch (error) {
      this._snackBar.open(error, 'Ok', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['bg-snack']
      });
    }
  }

  async carregar() {
    this.firebase.db().collection('pedido').onSnapshot(results => {
      this.todos = [];
      results.docs.forEach(doc => {
        this.todos.push({ id: doc.id, ...doc.data() });
      });
    });
  }

  ngOnInit() {
    this.adicionar();
    // this.carregar();
  }

}

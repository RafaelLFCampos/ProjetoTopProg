import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../products';
import { CartService } from '../services/cart.service';
import { AdminServiceService } from '../admin/admin-service.service';
import { FirebaseService } from '../services/firebase.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  produtoId = null;
  produto: any = {};
  valor = '';
  escrita = ' ';
  desenho;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private firebase: FirebaseService,
              private admin: AdminServiceService,
              private cartService: CartService,
              // tslint:disable-next-line: variable-name
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
    /*this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });*/
    // tslint:disable-next-line: no-string-literal
    this.produtoId = this.route.snapshot.params['id'];
    if (this.produtoId) {
      this.carregarProduto();
    }
  }

  async carregarProduto() {
    const results = await this.firebase
      .db()
      .collection('produto')
      .doc(this.produtoId).get();
    this.produto = results.data();
    // console.log(this.produto);
  }

  addToCart(produto) {
    this.cartService.addToCart(produto);
    this._snackBar.open('O produto foi adicionado ao carrinho!', 'Ok', {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['bg-snack']
    });
    // window.alert('O produto foi adicionado ao carrinho!');
  }

  trocarCor(img, valor) {
    this.produto.cor = valor;
    const caminho = './../../assets/img-toalha/' + img;
    this.produto.img = caminho;
    // tslint:disable-next-line: no-unused-expression
    (document.getElementById('imagem') as HTMLImageElement).src = caminho;
  }

  trocarDesenho(img, desenho) {
    this.produto.desenho = desenho;
    // const caminho = './../../assets/desenhos/' + img;
    // tslint:disable-next-line: no-unused-expression
    // (document.getElementById('imagem') as HTMLImageElement).src = caminho;
  }
}

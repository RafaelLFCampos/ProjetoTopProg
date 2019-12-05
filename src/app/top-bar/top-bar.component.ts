import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../services/usuario.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  logado;
  // tslint:disable-next-line: ban-types
  qtdItens: Number = 0;

  constructor(public usuario: UsuarioService,
              public router: Router,
              public cart: CartService) {

    this.usuario.getUser().subscribe(user => {
      (user.isOnline) ? this.logado = true : this.logado = false;
    });

    CartService.emitirQtd.subscribe(qtd => this.qtdItens = qtd);
   }

  ngOnInit() {
  }

  logout() {
    this.usuario.logout();
    this.logado = false;
  }
}

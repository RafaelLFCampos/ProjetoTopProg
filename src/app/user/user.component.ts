import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  pedidos: any;
  public userId;

  constructor(public firebase: FirebaseService, private usuario: UsuarioService) {
    this.usuario.getUser().subscribe((user) => this.userId = user.id);
   }

  ngOnInit() {
    // console.log(this.userId);
    this.pedidos = [];
    this.firebase
      .db()
      .collection('pedido')
      .where('user_id', '==', this.userId)
      .orderBy('data', 'asc')
      .onSnapshot(results => {
        results.docs.forEach(doc => {
          this.pedidos.push({ id: doc.id, ...doc.data() });
        });
      });
    // console.log(this.pedidos);
    // tslint:disable-next-line: prefer-for-of
    /* this.pedidos.forEach(element => {
      console.log(element.id);
    }); */
  }
}

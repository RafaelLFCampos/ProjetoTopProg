import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: any;

  constructor(private firebase: FirebaseService) {
    this.pedidos = [];
    this.firebase
      .db()
      .collection('pedido')
      .onSnapshot(results => {
        results.docs.forEach(doc => {
          this.pedidos.push({ id: doc.id, ...doc.data() });
        });
      });
  }

  ngOnInit() {
  }
}

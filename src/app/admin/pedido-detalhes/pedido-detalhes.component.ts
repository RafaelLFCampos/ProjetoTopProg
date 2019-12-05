import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-pedido-detalhes',
  templateUrl: './pedido-detalhes.component.html',
  styleUrls: ['./pedido-detalhes.component.css']
})
export class PedidoDetalhesComponent implements OnInit {
  pedidoId;
  pedido: any = {};
  selected;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private firebase: FirebaseService) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.pedidoId = this.route.snapshot.params['id'];
    if (this.pedidoId) {
      this.carregarPedido();
    }
  }

  async carregarPedido() {
    const results = await this.firebase
      .db()
      .collection('pedido')
      .doc(this.pedidoId).get();
    this.pedido = results.data();
    this.selected = this.pedido.status;
    // console.log(this.pedido);
  }
  async atualizar() {
    if (this.selected) {

      await this.firebase.db().collection('pedido').doc(this.pedidoId).update({
        status: this.selected
      }).then(() => {
        alert('Dados salvos com sucesso!');
        this.router.navigateByUrl('admin');
        // tslint:disable-next-line: only-arrow-functions
        }).catch(function(error) {
          console.log('Error: ', error);
      });
    } else {
      alert('Selecione uma opção válida');
    }
  }

  async deletarProduto(pedidoId: string) {
    await this.firebase.db().collection('pedido').doc(pedidoId).delete();
    this.router.navigateByUrl('admin');
  }

}

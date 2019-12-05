import { Injectable } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  // criar interface dessas propriedades
  id?: string;
  nome = '';
  preco = '';
  descricao = '';
  cor = '';
  tamanho = '';
  escrita = '';
  caminhoImagem = '';
  // ------------------------
  produtos = [];
  produto: any;

  constructor(private firebase: FirebaseService, public router: Router) { }

  async adicionar(produto: any) {
    try {
      await this.firebase.db().collection('produto').add(produto);
      this.router.navigateByUrl('admin');
    } catch (error) {
      console.log(error);
    }
  }

  carregar() {
    this.produtos = [];
    this.firebase.db().collection('produto').onSnapshot(results => {
      results.docs.forEach(doc => {
        this.produtos.push({ id: doc.id, ...doc.data() });
      });
    });
    // console.log(this.produtos);
    return this.produtos;
  }

  updateProduto(produto: any, id: string) {
    return this.firebase.db().collection('produto').doc(id).update(produto);
  }

  async deletarProduto(produtoId) {
    await this.firebase.db().collection('produto').doc(produtoId).delete();
    this.router.navigateByUrl('admin');
  }

  getProduto(id: string) {
    return this.firebase.db().collection('produto').doc(id);
  }
}

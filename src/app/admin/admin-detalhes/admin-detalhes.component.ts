import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AdminServiceService } from '../admin-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-detalhes',
  templateUrl: './admin-detalhes.component.html',
  styleUrls: ['./admin-detalhes.component.css']
})
export class AdminDetalhesComponent implements OnInit {
  produtos = [];
  produtoRef: any;
  produtoId = null;
  produto: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private firebase: FirebaseService,
    private admin: AdminServiceService,
    // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.produtoId = this.route.snapshot.params['id'];
    if (this.produtoId) {
      this.carregarProduto();
    }
  }

  async salvarProduto() {
    if (this.produtoId) {
      this.admin.updateProduto(this.produto, this.produtoId).then(() => {
        this._snackBar.open('Dados salvos com sucesso!', 'Ok', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: ['bg-snack']
        });
        this.router.navigateByUrl('admin');
        // tslint:disable-next-line: only-arrow-functions
        }).catch(function(error) {
          this._snackBar.open(error, 'Ok', {
            duration: 5000,
            verticalPosition: 'top',
            panelClass: ['bg-snack']
          });
      });
    } else {
      this.admin.adicionar(this.produto).then(() => {
        this._snackBar.open('Produto Adicionado com sucesso!', 'Ok', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: ['bg-snack']
        });
        this.router.navigateByUrl('admin');
      // tslint:disable-next-line: only-arrow-functions
      }).catch(function(error) {
        this._snackBar.open(error, 'Ok', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: ['bg-snack']
        });
    });
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

  deletarProduto(produtoId: string) {
    this.admin.deletarProduto(produtoId);
    this._snackBar.open('Produto Deletado!', 'Ok', {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['bg-snack']
    });
  }

}

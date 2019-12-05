import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dados',
  templateUrl: './user-dados.component.html',
  styleUrls: ['./user-dados.component.css']
})
export class UserDadosComponent implements OnInit {
  dados: any = {};
  dadosId;
  userId;
  showLoading = false;

  constructor(public firebase: FirebaseService,
              private usuario: UsuarioService,
              // tslint:disable-next-line: variable-name
              private _snackBar: MatSnackBar,
              private router: Router) {

    this.usuario.getUser().subscribe((user) => this.userId = user.id);

  }

  ngOnInit() {
    this.carregarDados();
  }

  async carregarDados() {
    this.showLoading = true;
    const results = await this.firebase
      .db()
      .collection('dadosUsuario')
      .where('user_id', '==', this.userId).get();
    // console.log(results);
    this.dadosId = results.docs[0].id;

    if (results.docs[0].exists) {
      const res = await this.firebase
        .db()
        .collection('dadosUsuario')
        .doc(results.docs[0].id).get();
      this.dados = res.data();
      // console.log(this.dados);
    } else {
      this._snackBar.open('Erro ao carregar os dados', 'Ok', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['bg-snack']
      });
    }
    this.showLoading = false;
  }

  alterarDados() {
    this.updateDados(this.dados, this.dadosId).then(() => {
      this._snackBar.open('Dados Salvos com Sucesso!', 'Ok', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['bg-snack']
      });
      this.router.navigateByUrl('user');
      // tslint:disable-next-line: only-arrow-functions
      }).catch(function(error) {
        this._snackBar.open(error, 'Ok', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: ['bg-snack']
        });
    });
  }

  updateDados(dados: any, id: string) {
    return this.firebase.db().collection('dadosUsuario').doc(id).update(dados);
  }
}

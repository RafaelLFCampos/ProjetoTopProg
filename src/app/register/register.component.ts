import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../services/usuario.service';
import { Router } from '@angular/router';
import { FirebaseService } from './../services/firebase.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userId = '';
  public cpf = '';
  public endereco = '';
  public telefone = '';
  public pais = '';
  public estado = '';
  public cep = '';
  public checkingUser = false;
  public showLoading = false;

  constructor(public usuario: UsuarioService,
              public router: Router,
              private firebase: FirebaseService,
              // tslint:disable-next-line: variable-name
              private _snackBar: MatSnackBar) {

    this.usuario.getUser().subscribe(user => {
      (user.cadTerminado) ? this.router.navigateByUrl('') : this.checkingUser = false;
    });
    this.usuario.getUser().subscribe((user) => this.userId = user.id);
  }

  async adicionarDados() {
    try {
      this.showLoading = true;
      await this.firebase.db().collection('dadosUsuario').add({
        user_id: this.userId,
        cpf: this.cpf,
        endereco: this.endereco,
        telefone: this.telefone,
        pais: this.pais,
        estado: this.estado,
        cep: this.cep
      });
      this.showLoading = false;
      this.router.navigateByUrl('');
    } catch (erro) {
      this._snackBar.open(erro, 'Ok', {
        duration: 8000,
        verticalPosition: 'top',
        panelClass: ['bg-snack']
      });
    }
  }

  ngOnInit() {
  }

}

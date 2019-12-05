import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-user-mensagem',
  templateUrl: './user-mensagem.component.html',
  styleUrls: ['./user-mensagem.component.css']
})
export class UserMensagemComponent implements OnInit {
  texto = '';
  userId;
  email;
  showLoading = false;

  constructor(public firebase: FirebaseService,
              private usuario: UsuarioService,
              // tslint:disable-next-line: variable-name
              private _snackBar: MatSnackBar) {

    this.usuario.getUser().subscribe((user) => {
      this.userId = user.id;
      this.email = user.email;
    });
  }

  ngOnInit() {
  }

  async enviarMensagem() {
    try {
      this.showLoading = true;
      await this.firebase.db().collection('mensagens').add({
        user_id: this.userId,
        email: this.email,
        texto: this.texto
      });
      this.showLoading = false;
      this._snackBar.open('Mensagem Enviada! Será respondida por e-mail.', 'Ok', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['bg-snack']
      });
      this.texto = '';
    } catch (error) {
      this._snackBar.open(error, 'Ok', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['bg-snack']
      });
    }
  }

}

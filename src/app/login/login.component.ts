import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../services/usuario.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public email = '';
  public senha = '';
  public checkingUser = true;
  public showLoading = false;
  public showLoadingRegister = false;
  constructor(public usuario: UsuarioService,
              public router: Router,
              // tslint:disable-next-line: variable-name
              private _snackBar: MatSnackBar) {

    this.usuario.getUser().subscribe(user => {
      (user.isOnline) ? this.router.navigateByUrl('') : this.checkingUser = false;
    });
   }

  async login() {
    try {
      this.showLoading = true;
      await this.usuario.login(this.email, this.senha);
      this.showLoading = false;
      this.router.navigateByUrl('/cart');
    } catch (erro) {
      this.showLoading = false;
      this._snackBar.open(erro, 'Ok', {
        duration: 8000,
        verticalPosition: 'top',
        panelClass: ['bg-snack']
      });
      console.log(erro);
    }
  }

  async registrar() {
    try {
      this.showLoadingRegister = true;
      await this.usuario.registrar(this.email, this.senha);
      this.showLoadingRegister = false;
      this.router.navigateByUrl('/register');
    } catch (erro) {
      this.showLoadingRegister = false;
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

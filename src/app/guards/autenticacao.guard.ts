import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { UsuarioService } from './../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {
  constructor(public usuario: UsuarioService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // tslint:disable-next-line: deprecation
    return Observable.create(observer => {
      this.usuario.getUser().subscribe(user => {
        if (user.isOnline) {
          observer.next(true);
        } else {
          this.router.navigateByUrl('login');
        }
      });
    });
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';
import { RegisterComponent } from './register/register.component';
import { AutenticacaoGuard } from './guards/autenticacao.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminDetalhesComponent } from './admin/admin-detalhes/admin-detalhes.component';
import { PedidoDetalhesComponent } from './admin/pedido-detalhes/pedido-detalhes.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [  { path: '', component: ProductListComponent },
                          { path: 'products/:id', component: ProductDetailsComponent},
                          { path: 'cart', component: CartComponent},
                          { path: 'login', component: LoginComponent},
                          { path: 'finalizar', component: FinalizarCompraComponent, canActivate: [AutenticacaoGuard] },
                          { path: 'register', component: RegisterComponent, canActivate: [AutenticacaoGuard]},
                          { path: 'admin', component: AdminComponent},
                          { path: 'adminProduto/:id', component: AdminDetalhesComponent},
                          { path: 'adminProduto', component: AdminDetalhesComponent},
                          { path: 'adminPedido/:id', component: PedidoDetalhesComponent},
                          { path: 'user', component: UserComponent, canActivate: [AutenticacaoGuard]}
                      ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';
import { MatTableModule } from '@angular/material/table';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdminInserirComponent } from './admin/admin-inserir/admin-inserir.component';
import { AdminDetalhesComponent } from './admin/admin-detalhes/admin-detalhes.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PedidosComponent } from './admin/pedidos/pedidos.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { PedidoDetalhesComponent } from './admin/pedido-detalhes/pedido-detalhes.component';
import {MatSelectModule} from '@angular/material/select';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import {MatBadgeModule} from '@angular/material/badge';
import { UserDadosComponent } from './user/user-dados/user-dados.component';
import { UserMensagemComponent } from './user/user-mensagem/user-mensagem.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MensagensComponent } from './admin/mensagens/mensagens.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    LoginComponent,
    FinalizarCompraComponent,
    RegisterComponent,
    AdminComponent,
    AdminInserirComponent,
    AdminDetalhesComponent,
    PedidosComponent,
    PedidoDetalhesComponent,
    UserComponent,
    FooterComponent,
    UserDadosComponent,
    UserMensagemComponent,
    MensagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    FormsModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatBadgeModule,
    MatRadioModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

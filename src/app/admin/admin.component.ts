import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AdminServiceService } from './admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  produtos: any;

  constructor(private firebase: FirebaseService, private admin: AdminServiceService) { }

  async carregar() {
    this.produtos = this.admin.carregar();
  }

  ngOnInit() {
    this.carregar();
  }
}

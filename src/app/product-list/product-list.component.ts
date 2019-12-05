import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // products = products;
  produtos: any = [];

  constructor(private firebase: FirebaseService) {
    this.firebase
      .db()
      .collection('produto')
      .onSnapshot(results => {
        results.docs.forEach(doc => {
          this.produtos.push({ id: doc.id, ...doc.data() });
        });
      });
    // console.log(this.produtos);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {
  mensagens: any;
  constructor(private firebase: FirebaseService) {
    this.mensagens = [];
    this.firebase
      .db()
      .collection('mensagens')
      .onSnapshot(results => {
        results.docs.forEach(doc => {
          this.mensagens.push({ id: doc.id, ...doc.data() });
        });
      });
    // console.log(this.mensagens);
   }

  ngOnInit() {
  }

}

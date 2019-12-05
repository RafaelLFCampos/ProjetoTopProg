import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor() {
    const config = {
      apiKey: 'AIzaSyClYOodZ7ZyTulVxnfVhAEUPev_V5ftNPY',
      authDomain: 'ecom-8b88a.firebaseapp.com',
      databaseURL: 'https://ecom-8b88a.firebaseio.com',
      projectId: 'ecom-8b88a',
      storageBucket: 'ecom-8b88a.appspot.com',
      messagingSenderId: '1099227073368',
      appId: '1:1099227073368:web:fe2a44a49a9868ccb8f32d',
      measurementId: 'G-JDRT0WT71T'
    };

    // Initialize Firebase
    firebase.initializeApp(config);
  }

  db() {
    return firebase.firestore();
  }

  auth() {
    return firebase.auth();
  }
}

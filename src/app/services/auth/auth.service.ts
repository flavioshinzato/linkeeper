import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { LinkModel } from 'src/app/model/link.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private db: AngularFirestore,
    public Auth: AngularFireAuth,
  ) {}

  doRegister(email, password){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
        localStorage.setItem('uid', res.user.uid)
        this.db.collection("links").doc(res.user.uid).set({})
      }, err => reject(err))
    })
  }

  doLogin(email,password) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
        localStorage.setItem('uid', res.user.uid)
        console.log(localStorage.getItem('uid'));
      }, err => reject(err))
    })
  }
  
  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
          resolve(user);
        } else {
          reject('Nenhum usuário logado!');
        }
      })
    })
  }

  getUserUid() {
      this.getCurrentUser()
      .then(result => {
        localStorage
        return result.uid;
      }, err => {
        return (err);
      })
  }

  /*TODO logout sem esquecer de limpar o storage*/
}

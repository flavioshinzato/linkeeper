import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, Params } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { LinkModel } from '../model/link.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  linksList: LinkModel[] = []

  constructor(
    private router: Router,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
  }

  saveLink(f: NgForm) {
    this.db.collection("links").doc(localStorage.getItem('uid')).get().subscribe(data => {
      this.linksList = data.get('links')
      var newLink : LinkModel = {
        title: f.value.title,
        url: f.value.url,
        category: f.value.category
      }
      console.log(f)
      console.log(newLink)
      
      this.linksList.push(newLink);

      this.db.collection("links").doc(localStorage.getItem('uid')).set({
        links: this.linksList
      }).then(res => {
        this.router.navigate(['/']);
      }, err => {
        console.log(err);
      })

    })
  }
}

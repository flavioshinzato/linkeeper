import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { LinkModel } from '../model/link.model';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  linksList: LinkModel[] = [];

  constructor(
    private router: Router,
    private db: AngularFirestore,
    public authService: AuthService) 
  {
    this.listenToDb()
  }

  ngOnInit() {
  }

  listenToDb() {
    this.db.collection("links").doc(localStorage.getItem('uid')).valueChanges().subscribe(data => { 
      this.linksList = data['links']
      console.log(this.linksList)
    })
  
  }
  
}

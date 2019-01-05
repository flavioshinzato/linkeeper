import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveLink(f: NgForm) {
    
  }
}

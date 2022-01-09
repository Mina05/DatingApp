import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;

<<<<<<< HEAD
  mina = "deset";

  constructor(private http: HttpClient) {} // po defaut-u je asinhron
=======
  constructor(private accountService: AccountService) {} // po defaut-u je asinhron
>>>>>>> 5d734c9835ea21a579f5a8bca5fb39cda55df4d7
  
  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user') as any);
    this.accountService.setCurrentUser(user);
  }
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from "@security/service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {

  }

  logout(){
    this.auth.logout();
  }

}

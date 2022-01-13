import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainComponent implements OnInit {

  token: string = "";

  constructor(private router: Router) {
    this.token = <string>localStorage.getItem("token");
  }

  onLogOut(): void {
    if (this.token !== "") {
      localStorage.removeItem("token");
      this.router.navigate([""]);
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  sidebarOpen =true;
  opened=true;

  constructor() { }

  ngOnInit(): void {
  }
  SidebarToggle($event){
    this.sidebarOpen = !this.sidebarOpen
  }
}

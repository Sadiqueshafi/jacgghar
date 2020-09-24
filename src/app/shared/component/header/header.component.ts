import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() togglesidebarForme: EventEmitter<any> = new EventEmitter;
  constructor(private authService:UserService) { }

  ngOnInit(): void {
  }
  toggleSidebar(){
this.togglesidebarForme.emit()
  }
  onLogOut(){
    this.authService.LogOut();
}
}

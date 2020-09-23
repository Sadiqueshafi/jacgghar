import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/component/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService]

})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,) { }

  ngOnInit(): void {
  }
  onSignup(form:NgForm){
    if(form.invalid){
      return;
    }
    console.log(form.value)
    this.userService.createUser(form.value.fullName,form.value.email,form.value.password);
    // this.isLooding=true;


  }

}

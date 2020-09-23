import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
// import {  } from '@angular/forms';
import {JachgharformService}from '../jachgharform.service'
import { MatDialog } from '@angular/material/dialog';
import {BloodComponent} from '../blood/blood.component';
import {UrinComponent} from '../urin/urin.component'
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gachgharform',
  templateUrl: './gachgharform.component.html',
  styleUrls: ['./gachgharform.component.css'],
  animations:[]
})
export class GachgharformComponent implements OnInit {
  public Urine= true;
  local =[]
  public Sex = [ 'Male','Female'];
  JachGhar: FormGroup;
  submitted = false;


  constructor(private fb:FormBuilder,private jacgharservice:JachgharformService,public dialog: MatDialog, private router: Router) { }


  ngOnInit(): void {
    this.JachGhar = this.fb.group({
      date: ['', Validators.required],
      patientName: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', [Validators.required]],
      dr: ['', Validators.required],
      DateofReport: ['', Validators.required],
    });

  }
  get registerFormControl() {
    return this.JachGhar.controls;
  }

 quantitys(){

 }

 changeSex(e){
  console.log(e.value);
  this.sex.setValue(e.target.value,{
    onlySelf:true
  })
}
get sex(){
  return this.JachGhar.get('sex');
}

  onSubmit(){
    localStorage.setItem('JhachgharData',JSON.stringify(this.JachGhar.value));

    // this.jacgharservice.postData("http://localhost:8080/gachgharform/",this.JachGhar.value).subscribe(res=>{
    //   console.log("data successfully added")
    // })
    // console.log(JSON.stringify(this.JachGhar.value));
  }
  openBlood(): void {
    const dialogRef = this.dialog.open(BloodComponent, {
      width: '400px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  openUrine(): void {
    const dialogRef = this.dialog.open(UrinComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  finalSubmit(){
    this.router.navigate(['/jachgharlist']);

  }
}

import { Component, OnInit } from '@angular/core';
import { JachgharformService } from '../jachgharform.service';
import {JachgharForm} from '../gachgharform/jachgharInterface'
import{BloodGrouping}from '../../app/bloodlist/bloodgrouping';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gachgharlist',
  templateUrl: './gachgharlist.component.html',
  styleUrls: ['./gachgharlist.component.css']
})
export class GachgharlistComponent implements OnInit {

  public a= [];
  public b= [];
  public arr = [];
  public s = new Array();
  people:BloodGrouping[];
  message:string;
  constructor(private jacgharservice:JachgharformService,private router:Router) { }

  ngOnInit(): void {
    var patitentDetail =JSON.parse(localStorage.getItem('JhachgharData'));
    this.s.push(patitentDetail);
    console.log(this.s);
    // this.service.currentmessage.subscribe(message=>this.message=message)
    var obj = JSON.parse(localStorage.getItem('bloodgrouping'));
    var urine = JSON.parse(localStorage.getItem('urinegrouping'));
    // console.log('hello'+urine)
    for (var key in obj) {
      // console.log('this is for test'+key)
      if (obj[key] !== null && obj[key] != ""){
    // console.log('hy'+ obj[key])
    this.a.push(key+':-'+obj[key])
    // console.log('hello'+ Object.keys(obj));
    // this.s.push(Object.keys(obj));
    // console.log(this.a);
    // console.log('hello'+this.checkProperties(obj));
  }
}
  for (var key in urine) {
      if (urine[key] !== null && urine[key] != ""){
        this.b.push(key+':-'+urine[key])
              console.log(this.b);
}
}
  }
  print():void {
    const printContents = document.getElementById('print').innerHTML;
    // const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    window.close();
    localStorage.clear();
    this.router.navigate(['/']);

    }


}

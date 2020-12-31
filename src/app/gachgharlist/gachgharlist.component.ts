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
 public hello=false;
  public a= [];
  public b= [];
  public arr = [];
  public urinarr =[]
  public s = new Array();
  public billing = new Array();
  people:BloodGrouping[];
  message:string;
  constructor(private jacgharservice:JachgharformService,private router:Router) { }

  ngOnInit(): void {
    this.jacgharservice.getAllData('api/alldetails').subscribe(result=>{
      console.log(result)
    })
    // var patitentDetail =JSON.parse(localStorage.getItem('JhachgharData'));
    // this.s.push(patitentDetail);
    // console.log(this.s);
    var obj = JSON.parse(localStorage.getItem('allData'));
    var anotherobj =Number(localStorage.getItem('billingno'))
    // console.log(obj.blood)
    this.s.push(obj)
    this.billing.push(anotherobj)
    // var urine = JSON.parse(localStorage.getItem('urinegrouping'));
    for (var key in obj.blood) {
      if (obj.blood[key] !== null && obj.blood[key] != ""){
           this.a.push(key+':-')
           this.arr.push(obj.blood[key])
           console.log(this.arr)
          //  console.log('hello'+this.a)
  }
}
for (var key in obj.urine) {
  if (obj.urine[key] !== null && obj.urine[key] != ""){
       this.b.push(key+':-')
       this.urinarr.push(obj.urine[key])
       this.hello = true
      //  console.log('hello'+this.b)
}
}

  }
  print():void {
    // const printContents = document.getElementById('a').innerHTML;
    // document.body.innerHTML = printContents;

    window.print();
    // window.close();
    // this.router.navigate(['/dashboard']);
  }
}

import { Component, OnInit,Inject,Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { JachgharformService } from '../jachgharform.service';
import { Observable, from } from 'rxjs';
//  import {BloodGrouping} from "../bloodlist/bloodgrouping";
 import{BloodGrouping}from './bloodgrouping';
@Component({
  selector: 'app-bloodlist',
  templateUrl: './bloodlist.component.html',
  styleUrls: ['./bloodlist.component.css']
})
export class BloodlistComponent implements OnInit {
  // @Output() messageEvent =new EventEmitter<string>();
  public a= [];
  public b= [];
  public arr = [];
  public s = new Array();
  people:BloodGrouping[];
  message:string;
  // objs = JSON.parse(localStorage.getItem('bloodgrouping'));
  constructor(private service:JachgharformService) { }
  baseURL: string = "http://localhost:3000/";
  ngOnInit(): void {
    // this.service.bloodsetdata();
    var patitentDetail =JSON.parse(localStorage.getItem('JhachgharData'));
    this.s.push(patitentDetail);
    console.log(this.s);
    // this.service.currentmessage.subscribe(message=>this.message=message)
    var obj = JSON.parse(localStorage.getItem('bloodgrouping'));
    var urine = JSON.parse(localStorage.getItem('urinegrouping'));
    console.log('hello'+urine)
    for (var key in obj) {
      // console.log('this is for test'+key)
      if (obj[key] !== null && obj[key] != ""){
    // console.log('hy'+ obj[key])
    this.a.push(key+':-'+obj[key])
    // console.log('hello'+ Object.keys(obj));
    // this.s.push(Object.keys(obj));
    console.log(this.a);
    // console.log('hello'+this.checkProperties(obj));
  }
}
  for (var key in urine) {
      if (urine[key] !== null && urine[key] != ""){
        this.b.push(key+':-'+urine[key])
              console.log(this.b);
}
}

    // console.log(objs)
    // this.checkProperties(obj);
    // console.log('this is for function'+this.checkProperties(obj));
    // console.log(obj)
  //   for (var key in obj) {
  //     if (obj[key] !== null && obj[key] != ""){
  //         console.log(obj[key]+'this is for new ');
  // }


// }


    //  var j = Object.prototype.toString.call(obj);
    // console.log(j +'this is for obj')

    // var result = Object.entries(obj);
    // if(i>=0 && i<result.length) {
    //   console.log(result+"this is for obj");
    // }
    // console.log(result+"this is for result");
        // for(var i=0;i<result.length;i++){
        // console.log('this is for result'+result);

    // for(var i = 0; i < result.length; i++) {
        // this.s.push(result[i]);
      // for(var z = 0; z < result[i].length; z++) {
      // console.log(result[i][z] + " ");

          // this.r.push(result[i][z]);
          // console.log('this is for if condition'+this.r)
        // }
      // this.r.push(result[i][z]);
      // console.log(this.r);

// }
 //  }
  //  console.log('hello'+this.r);
  }
  print():void {

    window.print()
    // const printContent = document.getElementById("componentID");
    // const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    // WindowPrt.document.write(printContent.innerHTML);
    // WindowPrt.document.close();
    // WindowPrt.focus();
    // WindowPrt.print();
    // WindowPrt.close();
    }

  // checkProperties(obj:any) {
    // for (var key in obj) {
        // if (obj[key] !== null && obj[key] != ""){
      // console.log('hy'+ obj[key])
      // this.a.push(obj[key])
      // console.log(this.a+'hy')
        // }
    // }
  // }

  // getbloodgrouping(){
  //   // this.messageEvent.emit();
  //   console.log('getPeople '+this.baseURL + 'bloodgrouping');
  //     return this.service.getdata().subscribe(res=>{
  //     // console.log("data successfully added");
  //     this.people =res;
  //   })
  // }
}

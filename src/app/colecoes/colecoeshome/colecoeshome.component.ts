import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colecoeshome',
  templateUrl: './colecoeshome.component.html',
  styleUrls: ['./colecoeshome.component.css']
})
export class ColecoeshomeComponent implements OnInit {
  data =[
    {name:'James',age:24,job:'Designer'},
    {name:'Jill',age:26,job:'Enginner'},
    {name:'Diana',age:25,job:'Programmer'},
  ];
  headers=[
    {key:'name',label:'Name'},
    {key:'age',label:'Age'},
    {key:'job',label:'Job'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

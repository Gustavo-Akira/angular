import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats=[
    {value:22,label:'# de Usuarios'},
    {value:900, label:'Renovações'},
    {value:50,label:'Pontos de Satisfação'}
  ];
  items=[
    {
      image:'/assets/images/couch.jpeg',
      title:'Sofa',
      description:'Sofa muito confortável e versátil'
    },
    {
      image:'/assets/images/dresser.jpeg',
      title:'Estante',
      description:'Estante'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

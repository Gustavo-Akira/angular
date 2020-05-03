import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modos-home',
  templateUrl: './modos-home.component.html',
  styleUrls: ['./modos-home.component.css']
})
export class ModosHomeComponent implements OnInit {
  modalOpen=false;
  items = [
    {title: 'Porque não se pode aumentar o tamanhos de animais?', content: 'Pois se aumentassemos seu tamanho haveria um desequilibrio térmico'},
    {title:'Mais informações',content:'Aleatorias'},
    {title:'Minha musica preferida',content:'Nem de Graça - Pixote'}
  ];

  constructor() { }
  
  ngOnInit() {
  }
  onClick(){
    this.modalOpen = !this.modalOpen;
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items=[];
  openedItemIndex:number=0;
  constructor() { }

  ngOnInit() {
  }
  onClick(i:number){
    console.log(this.openedItemIndex === i);
    if(i === this.openedItemIndex){
      this.openedItemIndex= -1;
    }else{
      this.openedItemIndex = i;
    }
  }
}

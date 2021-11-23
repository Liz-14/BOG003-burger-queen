import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item, Options } from 'src/app/clases/items';

@Component({
  selector: 'app-tab-content-btn',
  templateUrl: './tab-content-btn.component.html',
  styleUrls: ['./tab-content-btn.component.css']
})
export class TabContentBtnComponent implements OnInit {

  @Input() op!: Options;
  @Output() addToSummary = new EventEmitter<Options>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    this.addToSummary.emit(this.op);
    console.log(this.op);
  }

}

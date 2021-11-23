import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/clases/menu';

@Component({
  selector: 'app-menu-tab-content',
  templateUrl: './menu-tab-content.component.html',
  styleUrls: ['./menu-tab-content.component.css']
})
export class MenuTabContentComponent implements OnInit {

  @Input() e!: Menu;

  constructor() { }

  ngOnInit(): void {
  }

}

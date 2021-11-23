import { Menu } from './../../../../../clases/menu';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-nav-tab',
  templateUrl: './menu-nav-tab.component.html',
  styleUrls: ['./menu-nav-tab.component.css']
})
export class MenuNavTabComponent implements OnInit {

  @Input() e!: Menu;

  constructor() { }

  ngOnInit(): void {
  }

}

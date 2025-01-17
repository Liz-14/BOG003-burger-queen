import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Menu, Options } from 'src/app/interfaces/menu.interface';
import { MenuService } from 'src/app/public/services/menu.service';
import { SummaryService } from 'src/app/core/shared/services/summary.service';
import { FireStoreService } from 'src/app/core/shared/services/fire-store.service';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {

  menuData!: Menu[];
  orderOptions!: Options[];

  @Input() isCostumerInactive!: boolean;
  @Output() createOrderClick = new EventEmitter<Options[]>();

  constructor(
    private dataService: MenuService,
    private summarySvc: SummaryService,
    private orderService: FireStoreService
  ) { }

  // carga inicial
  ngOnInit(): void {
    this.getData();
    this.getOrderOptions();
  }

  // Obtiene data de json
  getData() {
    this.dataService.getData().subscribe(
      response => {
        this.menuData = response;
      },
      error => console.log(error)
    )

  }
  // obtiene data de resumen
  getOrderOptions(){
    this.summarySvc.finalOrder$.subscribe(
      res =>{
        this.orderOptions = res
      },
      error => console.log(error)
    )
  }
  // elimina data local del resumen
  onClickDeleteAll(): void {
    this.orderService.deleteOrder(this.orderService.currentID);
    this.summarySvc.deleteAll();
    this.orderService.resetCustomerID();
  }
  // Envia data de resumen al padre menu-component
  send(): void {
    this.createOrderClick.emit(this.orderOptions)
    this.summarySvc.deleteAll();
    this.orderService.resetCustomerID();
  }

}

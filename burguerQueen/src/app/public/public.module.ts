import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PublicRoutingModule } from "./public-routing.module";
import { CommonModule } from '@angular/common';
import { PublicComponent } from "./public.component";
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './home/main/main.component';
import { ChefComponent } from './chef/chef.component';
import { WaiterComponent } from './waiter/waiter.component';
import { MenuHeaderComponent } from './menu/components/menu-header/menu-header.component';
import { MenuMainComponent } from './menu/components/menu-main/menu-main.component';
import { SummaryComponent } from './menu/components/menu-main/summary/summary.component';
import { OptionsComponent } from './menu/components/menu-main/options/options.component';

@NgModule({
    imports:[
        CommonModule,
        PublicRoutingModule
    ],
    declarations:[
    PublicComponent,
    HomeComponent,
    MenuComponent,
    NavbarComponent,
    MainComponent,
    ChefComponent,
    WaiterComponent,
    MenuHeaderComponent,
    MenuMainComponent,
    SummaryComponent,
    OptionsComponent
  ],
    exports:[],
    providers:[]
})

export class PublicModule{
    constructor(){}
}

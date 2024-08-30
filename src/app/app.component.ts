import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { PoMenuItem } from '@po-ui/ng-components';
import {
  PoContainerModule, 
  PoWidgetModule, 
  PoModalModule, 
  PoDynamicModule,
  PoTableModule, 
  PoPageAction,  
  PoBreadcrumb,
  PoComboComponent,
  PoFieldModule,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
 
} from '@po-ui/ng-components';

//import { ProAppConfigService, ProtheusLibCoreModule } from '@totvs/protheus-lib-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // readonly menus: Array<PoMenuItem> = [
  //   { label: 'Medicoes', link: '/medicoes' }
  //   // { label: 'Exit', action: this.closeApp.bind(this) }    { label: 'Calculadora',  link: '/calculadora' },
  // ];

  // private onClick() {
  //   alert('Clicked in menu item')
  // }

  // constructor(private proAppConfigService: ProAppConfigService){
  //   //  if (!this.proAppConfigService.insideProtheus()) {
  //   //     this.proAppConfigService.loadAppConfig(); 
  //   //   }
  // }
//   private closeApp() {
//   if (this.proAppConfigService.insideProtheus()) {
//     this.proAppConfigService.callAppClose();
//   } else {
//     alert('O App não está sendo executado dentrodo Protheus.');
//  }
//}
menuItemSelected: string = '';
menus: Array<PoMenuItem> = [
 
  { label: 'Dashboard',  action: this.printMenuAction.bind(this), icon: 'po-icon po-icon-chart-columns', link: 'dashboard' , shortLabel: 'dashboard'},
  {
    label: 'Cotações',
    icon: 'po-icon po-icon-handshake',
    shortLabel: 'Cotações',
    subItems: [
      { label: 'Criar', link: 'cotacoes/criar' },
      { label: 'Listar', link: 'cotacoes/listar' }
    ]
  },
  {
    label: 'Pedidos',
    icon: 'po-icon po-icon-finance-secure',
    shortLabel: 'Pedidos',
    subItems: [
      { label: 'Listar', link: 'pedidos/listar' },
      { label: 'FollowUp', link: 'pedidos/followup' }
    ]
  },
  { label: 'Medicoes', link: '/medicoes'  , shortLabel: 'medicoes'},

 
];
constructor() {}
printMenuAction(menu: PoMenuItem) {
  this.menuItemSelected = menu.label;
}

}

import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

//import { ProAppConfigService, ProtheusLibCoreModule } from '@totvs/protheus-lib-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Medicoes', link: '/medicoes' }
    // { label: 'Exit', action: this.closeApp.bind(this) }    { label: 'Calculadora',  link: '/calculadora' },
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

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

}

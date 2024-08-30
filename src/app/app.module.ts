import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';
import { MedicoesModule } from './medicoes';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
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
import { SidebarService } from './sideBar/sidebar.service';
//import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';


@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculadoraModule,
    MedicoesModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    PoFieldModule,
 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { ComponentsComponent } from './medicoes/components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    CalculadoraModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    ProtheusLibCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraModule } from './calculadora';
import { MedicoesModule } from './medicoes';
import { MedicoesRoutes } from './medicoes';
const routes: Routes = [ 

    {
      path: '',
      redirectTo: 'medicoes/listar',
      pathMatch: 'full'

    },
    ...MedicoesRoutes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

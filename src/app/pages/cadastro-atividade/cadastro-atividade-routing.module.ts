import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroAtividadePage } from './cadastro-atividade.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroAtividadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroAtividadePageRoutingModule {}

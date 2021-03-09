import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroAtividadePageRoutingModule } from './cadastro-atividade-routing.module';

import { CadastroAtividadePage } from './cadastro-atividade.page';
import { AtividadeService } from 'src/app/services/atividade-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroAtividadePageRoutingModule
  ],
  providers: [AtividadeService],
  declarations: [CadastroAtividadePage]
})
export class CadastroAtividadePageModule {}

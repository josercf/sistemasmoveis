import { Component } from '@angular/core';
import { Atividade } from '../models/atividade';
import { AtividadeService } from '../services/atividade-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  atividades: Atividade[] = [];

  constructor(private atividadeService: AtividadeService) {
    this.atividades = this.atividadeService.listar();

    // let atividade1 = new Atividade();
    // atividade1.Id = 1;
    // atividade1.Descricao = "Estudar para a aula";
    // atividade1.Pronto = false;
    // this.atividades.push(atividade1);

    // let atividade2 = new Atividade();
    // atividade2.Id = 2;
    // atividade2.Descricao = "Fazer compras - mercado";
    // atividade2.Pronto = true;
    // this.atividades.push(atividade2);
  }

  obterTotalAtividades(){
    return this.atividades.length;
  }

  obterAtividadesConcluidas(){
    let atividadesConcluidas = this.atividades.filter(this.obterConcluidos);
    return atividadesConcluidas.length;
  }


  obterAtividadesPendentes(){
    let atividadesPendentes = this.atividades.filter(x => x.Pronto == false);
    return atividadesPendentes.length;
  }


  obterConcluidos(element, index, array){
    return element.Pronto === true;
  }

}

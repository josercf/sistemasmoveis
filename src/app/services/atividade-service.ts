import { Injectable } from "@angular/core";
import { Atividade } from "../models/atividade";

@Injectable({
    providedIn: 'root',
  })
export class AtividadeService{
    private static atividades: Atividade[] = [];

    criar(atividade: Atividade){
        var proximoId = AtividadeService.atividades.length + 1;
        atividade.Id = proximoId;
        AtividadeService.atividades.push(atividade);        
    }

    listar() : Atividade[]{
        return AtividadeService.atividades;
    }
}
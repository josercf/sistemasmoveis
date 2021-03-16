import { HttpClient, HttpErrorResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { Atividade } from "../models/atividade";
import { ToastController } from "@ionic/angular";

@Injectable({
    providedIn: 'root',
  })
export class AtividadeService{
    private static atividades: Atividade[] = [];

    private url: string= "https://demo1946374.mockable.io/tarefa";

    constructor(private http: HttpClient, public toastController: ToastController) {

    }

    criar(atividade: Atividade){
        var proximoId = AtividadeService.atividades.length + 1;
        atividade.Id = proximoId;
        AtividadeService.atividades.push(atividade);        
    }

     listar() : Observable<Atividade[]>{
        return  this.http.get<Atividade[]>(this.url).pipe(          
            //retry(30), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
          );
    }

     async presentToast() {
        const toast =  await this.toastController.create({
          message: 'Nenhuma ativida encontrada',
          duration: 2000
        });
        toast.present();
      }

    private  handleError(error: HttpErrorResponse) {

        if(error.status === 404){
            (async () => await this.presentToast())();
        }

        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      }
}
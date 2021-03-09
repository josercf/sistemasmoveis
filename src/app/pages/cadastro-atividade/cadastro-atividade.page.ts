import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Atividade } from 'src/app/models/atividade';
import { AtividadeService } from 'src/app/services/atividade-service';

@Component({
  selector: 'app-cadastro-atividade',
  templateUrl: './cadastro-atividade.page.html',
  styleUrls: ['./cadastro-atividade.page.scss'],
})
export class CadastroAtividadePage implements OnInit {

  constructor(private atividadeService: AtividadeService,
              private router: Router,
              public toastController: ToastController) { }

  atividade: Atividade;

  ngOnInit() {
    this.atividade = new Atividade()
    this.atividade.Pronto = false;
    this.atividade.Id = 0;
    this.atividade.Descricao = '';
  }


  async cadastrarAtividade(){    
    this.atividadeService.criar(this.atividade);
    await this.presentToastWithOptions();

    //this.router.navigate(['/tabs/tab1'])
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Atividade criada com sucesso',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Atividade criada com sucesso. Deseja Criar outra atividade?',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'checkmark-outline',
          text: 'Sim',
          handler: () => {
            this.atividade = new Atividade();
          }
        }, {
          text: 'Não, obrigado!',
          role: 'cancel',
          handler: () => {
            this.router.navigate(['/tabs/tab1'])
          }
        }
      ]
    });
    toast.present();
  }

}

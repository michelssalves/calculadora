
import { MedicoesService } from '../services/medicoes.service';
import { FormsModule, NgForm } from '@angular/forms';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { Component, OnInit, ViewChild, NgModule } from '@angular/core';

@Component({
  selector: 'app-medicoes',
  templateUrl: './medicoes.component.html',
  styleUrls: ['./medicoes.component.css']
})
export class MedicoesComponent implements OnInit {

  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  @ViewChild('optionsForm', { static: true }) form!: NgForm;

  medicoes: any[] = []; // Definindo como um array de objetos
  selectedItem: any = {};
  event: string = '';
  isGerenciadora: boolean = false;
  isNFEmitida: boolean = false;

  onGerenciadoraChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.isGerenciadora = selectElement.value === 'true';
  }
  onNfEmitidaChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.isNFEmitida = selectElement.value === 'true';
  }
  gerenciadoraSelecionada: string | undefined;
  
  close: PoModalAction = {
    action: () => this.closeModal(),
    label: 'Close',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => this.processOrder(),
    label: 'Confirm'
  };

  constructor(private medicoesService: MedicoesService) {

    //this.isGerenciadora = true
    console.log(this.isGerenciadora)
   }

  columns = [
    { property: 'medicao', label: 'Medição' },
    { property: 'contrato', label: 'Nº Contrato' },
    { property: 'revisao', label: 'Nº Revisao' },
    { property: 'competencia', label: 'Competencia' },
    { property: 'fornecedor', label: 'Fornecedor' },
    { property: 'Cnpj', label: 'Cnpj' },
    { property: 'valor', label: 'Valor' }
  ];



  ngOnInit() {
  
    this.medicoesService.getData().subscribe({
      next: (response) => {
        if (response && response.objects) {
          this.medicoes = response.objects;
          console.log('Dados recebidos:', this.medicoes);
        } else {
          console.error('Resposta inválida:', response);
        }
      },
      error: (error) => {
        console.error('Erro ao obter dados:', error);
      }
    });
  }

  changeEvent(event: string) {
    this.event = event;
  }

  openModal(item: any) {
    this.selectedItem = item;
    console.log(this.selectedItem);
    this.poModal.open();
  }

  closeModal() {
    this.form.reset();
    this.poModal.close();
  }

  processOrder() {
    if (this.form.invalid) {
      console.error('Escolha os itens para confirmar o pedido.');
    } else {
      this.confirm.loading = true;

      setTimeout(() => {
        this.confirm.loading = false;
        this.closeModal();
      }, 700);
    }
  }

  restore() {
    this.form.reset();
  }
}

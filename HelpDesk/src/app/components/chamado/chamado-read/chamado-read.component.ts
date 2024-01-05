
import { Component, OnInit } from '@angular/core';
import { ChamadoService } from '../../../services/chamado.service';
import { Chamado } from '../../../Models/chamado';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-chamado-read',
  templateUrl: './chamado-read.component.html',
  styleUrl: './chamado-read.component.css'
})
export class ChamadoReadComponent implements OnInit{
  chamado: Chamado = {
    prioridade: '',
    status:'',
    titulo:'',
    observacoes:'',
    tecnico:'',
    cliente:'',
    nomeCliente:'',
    nomeTecnico:''
  }

  constructor(
    private chamadoService: ChamadoService,


    private toastService: ToastrService,

    private route: ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.chamado.id = this.route.snapshot.paramMap.get('id');
    this.findById()
    
  }

  findById():void{
    this.chamadoService.findById(this.chamado.id).subscribe(resposta => {
      this.chamado = resposta;
    },ex =>{
      this.toastService.error(ex.error.error);
    })

  }


}



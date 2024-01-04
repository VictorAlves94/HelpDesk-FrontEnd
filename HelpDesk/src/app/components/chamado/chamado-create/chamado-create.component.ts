import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Cliente } from '../../../Models/cliente';
import { Tecnico } from '../../../Models/tecnico';
import { ClienteService } from '../../../services/cliente.service';
import { TecnicoService } from '../../../services/tecnico.service';
import { ChamadoService } from '../../../services/chamado.service';
import { Chamado } from '../../../Models/chamado';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrl: './chamado-create.component.css'
})
export class ChamadoCreateComponent implements OnInit{
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


  clientes: Cliente[]= [];
  tecnicos: Tecnico[]= [];


  prioridade: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  titulo: FormControl = new FormControl(null, [Validators.required])
  observacoes: FormControl = new FormControl(null, [Validators.required])
  tecnico: FormControl = new FormControl(null, [Validators.required])
  cliente: FormControl = new FormControl(null, [Validators.required])


  constructor(
    private chamadoService: ChamadoService,
    private clienteService: ClienteService,
    private tecnicoService: TecnicoService,
    private toastService: ToastrService,
    private router: Router
  ){
  }

  ngOnInit(): void {
    this.findAllClientes();
    this.findAllTecnicos();
    
  }
  findAllClientes():void{
    this.clienteService.findAll().subscribe(resposta=>{
      this.clientes = resposta;
    })
  }

  findAllTecnicos():void{
    this.tecnicoService.findAll().subscribe(resp =>{
      this.tecnicos = resp;
    })
  }

  create():void{
    this.chamadoService.create(this.chamado).subscribe(resposta =>{
      this.toastService.success('Chamado criado com sucesso', 'Novo chamado');
      this.router.navigate(['chamados']);
    }, ex =>{
      this.toastService.error(ex.error.error);
    })
  }

  validarCampos():Boolean{
    return this.prioridade.valid &&
    this.status.valid && this.titulo.valid &&
    this.observacoes.valid &&
    this.tecnico.valid && this.cliente.valid 

  }

}

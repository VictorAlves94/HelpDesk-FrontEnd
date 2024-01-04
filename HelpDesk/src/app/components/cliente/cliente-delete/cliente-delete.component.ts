import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../Models/cliente';
import { Toast, ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrl: './cliente-delete.component.css'
})
export class ClienteDeleteComponent {

  cliente: Cliente ={
    id: '',
    nome: '',
    cpf: '',
    email:'',
    senha: '',
    perfils:[],
    dataCriacao:''
  }
  constructor(
    private service:ClienteService,
    private toast: ToastrService,
    private router:Router,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    
  }
  findById():void{
    this.service.findById(this.cliente.id).subscribe(resposta => {
      resposta.perfils = [];
      this.cliente = resposta;
    })
  }

  delete():void {
    this.service.delete(this.cliente.id).subscribe(()=>{
      this.toast.success('cliente deletado com sucesso!', 'Deletar');
      this.router.navigate(['clientes'])
    },ex => {
    if(ex.error.errors){
      ex.error.errors.forEach(element => {
      this.toast.error(element.message);
    });
    } else{
      this.toast.error(ex.error.message);
    } 
  })
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../Models/cliente';
import { Toast, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrl: './cliente-create.component.css'
})
export class ClienteCreateComponent implements OnInit{

  cliente: Cliente ={
    id: '',
    nome: '',
    cpf: '',
    email:'',
    senha: '',
    perfils:[],
    dataCriacao:''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service:ClienteService,
    private toast: ToastrService,
    private router:Router
  ){

  }

  ngOnInit(): void {}


  create():void {
    this.service.create(this.cliente).subscribe(()=>{
      this.toast.success('cliente cadastrado com sucesso!', 'Cadastro');
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

  validaCampos(): boolean{
    return this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid
  }

  addPerfil(perfil: any):void{
    if(this.cliente.perfils.includes(perfil)){
      this.cliente.perfils.splice(this.cliente.perfils.indexOf(perfil),1);
      console.log(this.cliente.perfils);
    }else{this.cliente.perfils.push(perfil);
      console.log(this.cliente.perfils);}
  }
}

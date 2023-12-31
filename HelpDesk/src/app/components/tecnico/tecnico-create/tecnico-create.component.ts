import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TecnicoService } from '../../../services/tecnico.service';
import { Tecnico } from '../../../Models/tecnico';
import { Toast, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrl: './tecnico-create.component.css'
})
export class TecnicoCreateComponent implements OnInit{

  tecnico: Tecnico ={
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
    private service:TecnicoService,
    private toast: ToastrService,
    private router:Router
  ){

  }

  ngOnInit(): void {}


  create():void {
    this.service.create(this.tecnico).subscribe(()=>{
      this.toast.success('Técnico cadastrado com sucesso!', 'Cadastro');
      this.router.navigate(['tecnicos'])
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
    if(this.tecnico.perfils.includes(perfil)){
      this.tecnico.perfils.splice(this.tecnico.perfils.indexOf(perfil),1);
      console.log(this.tecnico.perfils);
    }else{this.tecnico.perfils.push(perfil);
      console.log(this.tecnico.perfils);}
  }
}

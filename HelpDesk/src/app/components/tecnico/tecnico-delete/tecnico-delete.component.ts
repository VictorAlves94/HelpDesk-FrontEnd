import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TecnicoService } from '../../../services/tecnico.service';
import { Tecnico } from '../../../Models/tecnico';
import { Toast, ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrl: './tecnico-delete.component.css'
})
export class TecnicoDeleteComponent {

  tecnico: Tecnico ={
    id: '',
    nome: '',
    cpf: '',
    email:'',
    senha: '',
    perfils:[],
    dataCriacao:''
  }
  constructor(
    private service:TecnicoService,
    private toast: ToastrService,
    private router:Router,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.tecnico.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    
  }
  findById():void{
    this.service.findById(this.tecnico.id).subscribe(resposta => {
      resposta.perfils = [];
      this.tecnico = resposta;
    })
  }

  delete():void {
    this.service.delete(this.tecnico.id).subscribe(()=>{
      this.toast.success('Técnico deletado com sucesso!', 'Deletar');
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


}

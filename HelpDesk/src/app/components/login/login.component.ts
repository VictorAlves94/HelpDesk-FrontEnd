import { Component, OnInit } from '@angular/core';
import { Credenciais } from '../../Models/credenciais';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  creds: Credenciais = {
    email:'',
    senha:''
  }
  email = new FormControl(null,Validators.email);
  senha = new FormControl(null,Validators.minLength(3));
  constructor(
    private toast: ToastrService,
     private service: AuthService,
     private router :Router){}
  ngOnInit(): void {}

  logar(){
    this.service.authenticate(this.creds).subscribe(resposta =>{
    this.service.successfulLogin(resposta.headers.get('Authorization').substring(6));
    this.router.navigate([''])

   },()=>{
    this.toast.error('Usuario e/ou senha inválidos');

   })

  }
  validaCampos():boolean{
    return this.email.valid && this.senha.valid
    
    
  }




}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  constructor(private router:Router,
    private authService: AuthService,
    private toast: ToastrService){}
  ngOnInit():void {
    this.router.navigate(['tecnicos'])

    
  }
  logout(){
    this.router.navigate(['login']);
    this.authService.logout();
    this.toast.info('Logout Realizado com sucesso','Logout',{timeOut: 7000})
  }
}

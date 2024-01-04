import { Component, OnInit, ViewChild } from '@angular/core';
import { Chamado } from '../../../Models/chamado';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrl: './chamado-list.component.css'
})
export class ChamadoListComponent implements OnInit{

ELEMENT_DATA: Chamado[] = [
  {
    id: 1,
    dataAbertura: '21/06/2021',
    dataFechamento: '22/06/2021',
    prioridade: 'ALTA',
    status: 'ANDAMENTO',
    titulo: 'Chamado',
    descricao: 'Teste chamado 1',
    tecnico: 1,
    cliente: 2,
    nomeCliente: 'Linus Torvalds123',
    nomeTecnico: 'Valdir cezar'
  }

  ]

  displayedColumns: string[] = ['id', 'titulo', 'cliente','tecnico', 'dataAbertura','prioridade','status','acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(){}

  ngOnInit(): void {
    
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}

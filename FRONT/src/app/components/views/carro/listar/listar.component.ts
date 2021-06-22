import { Component, OnInit } from '@angular/core';
import { CarroService } from 'src/app/services/carro.service';
import { MatTableDataSource } from '@angular/material/table';
import { Carro } from 'src/app/models/Carro';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  carros!: MatTableDataSource<Carro>;
  displayedColumns: string[] = ['modelo', 'placa', 'ano', 'criadoEm'];

  constructor(private service: CarroService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((carros) => {
      this.carros = new MatTableDataSource<Carro>(carros);
    });
  }

}
